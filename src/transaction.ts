import { randomUUID } from 'node:crypto';
import { closeSync, existsSync, openSync, readdirSync, unlinkSync } from 'node:fs';
import path from 'node:path';
import {
  asSnapshot,
  assertSafe,
  ensureDirectory,
  equal,
  replace,
  type Snapshot,
  snapshot,
  textOf,
} from './filesystem.js';
import type { Layout } from './layout.js';

export interface Change {
  key: string;
  before: Snapshot | null;
  after: Snapshot | null;
}
interface Journal {
  schema: number;
  id: string;
  status: 'pending' | 'committed' | 'rolled-back';
  changes: Change[];
}
const journalDir = (context: Layout) => path.join(context.state, 'transactions');
export function journals(context: Layout): string[] {
  const directory = journalDir(context);
  assertSafe(directory);
  return existsSync(directory)
    ? readdirSync(directory)
        .filter((x) => /^\d+-[a-f0-9-]+\.json$/.test(x))
        .sort()
        .reverse()
    : [];
}
function validateSnapshot(value: Snapshot | null): void {
  if (value === null) return;
  if (
    !value ||
    typeof value.data !== 'string' ||
    value.data.length > 12 * 1024 * 1024 ||
    !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value.data) ||
    !Number.isInteger(value.mode) ||
    value.mode < 0 ||
    value.mode > 0o777
  )
    throw new Error('Invalid transaction snapshot');
}
function readJournal(context: Layout, name: string): Journal {
  const value = JSON.parse(textOf(snapshot(path.join(journalDir(context), name)))) as Journal;
  if (
    value.schema !== 1 ||
    name !== `${value.id}.json` ||
    !['pending', 'committed', 'rolled-back'].includes(value.status) ||
    !Array.isArray(value.changes) ||
    value.changes.length > context.targets.size
  )
    throw new Error('Invalid transaction journal');
  const seen = new Set<string>();
  for (const change of value.changes) {
    if (!context.targets.has(change.key) || seen.has(change.key))
      throw new Error('Invalid transaction target');
    seen.add(change.key);
    validateSnapshot(change.before);
    validateSnapshot(change.after);
  }
  return value;
}
function save(context: Layout, journal: Journal): void {
  const serialized = `${JSON.stringify(journal, null, 2)}\n`;
  if (Buffer.byteLength(serialized) > 8 * 1024 * 1024)
    throw new Error('Transaction backup exceeds the 8 MiB safety limit');
  replace(path.join(journalDir(context), `${journal.id}.json`), asSnapshot(serialized));
}
export function pending(context: Layout): boolean {
  return journals(context).some((name) => readJournal(context, name).status === 'pending');
}
export function locked<T>(context: Layout, work: () => T): T {
  ensureDirectory(context.state);
  const file = path.join(context.state, 'operation.lock');
  assertSafe(file);
  const fd = openSync(file, 'wx', 0o600);
  try {
    return work();
  } finally {
    closeSync(fd);
    unlinkSync(file);
  }
}
export function commit(context: Layout, changes: Change[], failAfter?: number): string | null {
  if (!changes.length) return null;
  if (pending(context))
    throw new Error('An interrupted transaction exists. Run rollback before continuing.');
  for (const change of changes) {
    const file = context.targets.get(change.key);
    if (!file || !equal(snapshot(file), change.before))
      throw new Error(`Concurrent modification: ${change.key}`);
  }
  const journal: Journal = {
    schema: 1,
    id: `${Date.now()}-${randomUUID()}`,
    status: 'pending',
    changes,
  };
  ensureDirectory(journalDir(context));
  save(context, journal);
  const completed: Change[] = [];
  try {
    for (const change of changes) {
      const file = context.targets.get(change.key) as string;
      if (!equal(snapshot(file), change.before))
        throw new Error(`Concurrent modification: ${change.key}`);
      replace(file, change.after);
      completed.push(change);
      if (completed.length === failAfter) throw new Error('Injected transaction failure');
    }
    journal.status = 'committed';
    save(context, journal);
    return journal.id;
  } catch (error) {
    for (const change of completed.reverse()) {
      const file = context.targets.get(change.key) as string;
      if (!equal(snapshot(file), change.after))
        throw new Error('Rollback conflict; preserve the journal and recover manually.', {
          cause: error,
        });
      replace(file, change.before);
    }
    journal.status = 'rolled-back';
    save(context, journal);
    throw error;
  }
}
export function rollback(context: Layout): { id: string; changes: number } {
  const journal = journals(context)
    .map((name) => readJournal(context, name))
    .find((x) => x.status !== 'rolled-back');
  if (!journal) throw new Error('No transaction to roll back.');
  for (const change of journal.changes) {
    const current = snapshot(context.targets.get(change.key) as string);
    if (
      !equal(current, change.after) &&
      !(journal.status === 'pending' && equal(current, change.before))
    ) {
      throw new Error(`Rollback would overwrite later edits: ${change.key}`);
    }
  }
  if (!context.options.dryRun) {
    journal.status = 'pending';
    save(context, journal);
    for (const change of [...journal.changes].reverse()) {
      const file = context.targets.get(change.key) as string;
      const current = snapshot(file);
      if (
        !equal(current, change.after) &&
        !(journal.status === 'pending' && equal(current, change.before))
      )
        throw new Error(`Concurrent modification: ${change.key}`);
      replace(file, change.before);
    }
    journal.status = 'rolled-back';
    save(context, journal);
  }
  return { id: journal.id, changes: journal.changes.length };
}
