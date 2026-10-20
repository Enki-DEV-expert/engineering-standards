import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { contentFiles, digest, packageRoot, readContent, render, skills } from './content.js';
import { asSnapshot, assertSafe, equal, snapshot, textOf } from './filesystem.js';
import { type Agent, type Layout, layout, type Options } from './layout.js';
import { type Change, commit, locked, pending, rollback } from './transaction.js';

const start = '<!-- global-engineering-standards:start -->';
const end = '<!-- global-engineering-standards:end -->';
interface Entry {
  hash: string;
  block?: string;
  created?: boolean;
}
interface Manifest {
  schema: number;
  version: string;
  scope: Options['scope'];
  agents: Agent[];
  entries: Record<string, Entry>;
}
export interface Result {
  command: string;
  dryRun: boolean;
  changes: string[];
  transaction: string | null;
  messages: string[];
}

function loadManifest(context: Layout): Manifest | null {
  const data = snapshot(context.targets.get('manifest') as string);
  if (!data) return null;
  const manifest = JSON.parse(textOf(data)) as Manifest;
  if (
    manifest.schema !== 1 ||
    manifest.scope !== context.options.scope ||
    typeof manifest.version !== 'string' ||
    !manifest.entries ||
    !Array.isArray(manifest.agents) ||
    !manifest.agents.length ||
    manifest.agents.some((x) => x !== 'claude' && x !== 'codex')
  )
    throw new Error('Invalid manifest');
  for (const [key, entry] of Object.entries(manifest.entries)) {
    if (!context.targets.has(key) || key === 'manifest' || !/^[a-f0-9]{64}$/.test(entry.hash))
      throw new Error(`Invalid manifest entry: ${key}`);
    if (key.endsWith('-instructions')) {
      if (
        typeof entry.block !== 'string' ||
        !entry.block.startsWith(`\n\n${start}\n`) ||
        !entry.block.endsWith(`${end}\n`) ||
        digest(entry.block) !== entry.hash ||
        typeof entry.created !== 'boolean'
      ) {
        throw new Error(`Invalid instruction ownership: ${key}`);
      }
    } else if (entry.block !== undefined) throw new Error(`Invalid file ownership: ${key}`);
  }
  for (const name of contentFiles)
    if (!manifest.entries[`framework/${name}`]) throw new Error(`Incomplete manifest: ${name}`);
  for (const agent of manifest.agents) {
    if (!manifest.entries[`${agent}-instructions`])
      throw new Error(`Incomplete manifest: ${agent}`);
    for (const skill of skills)
      if (!manifest.entries[`${agent}-skill/${skill}`])
        throw new Error(`Incomplete manifest: ${skill}`);
  }
  return manifest;
}
function verify(context: Layout, manifest: Manifest): void {
  for (const [key, entry] of Object.entries(manifest.entries)) {
    const value = snapshot(context.targets.get(key) as string);
    if (!value) throw new Error(`Missing installed file: ${key}`);
    const text = textOf(value);
    if (entry.block) {
      if (
        text.split(entry.block).length !== 2 ||
        text.split(start).length !== 2 ||
        text.split(end).length !== 2
      ) {
        throw new Error(`Managed instruction block changed: ${key}`);
      }
    } else if (digest(Buffer.from(value.data, 'base64')) !== entry.hash)
      throw new Error(`Installed file changed: ${key}`);
  }
}
function checkOverrides(context: Layout, agents: Agent[]): void {
  if (!agents.includes('codex')) return;
  const instruction = context.targets.get('codex-instructions') as string;
  const override = snapshot(path.join(path.dirname(instruction), 'AGENTS.override.md'));
  if (textOf(override).trim())
    throw new Error(
      'AGENTS.override.md shadows AGENTS.md; resolve this instruction conflict first.',
    );
}
function reference(context: Layout, target: string): string {
  return (
    (context.options.scope === 'global'
      ? context.framework
      : path.relative(path.dirname(target), context.framework)
    )
      .split(path.sep)
      .join('/') || '.'
  );
}
function block(context: Layout, target: string, policy: string): string {
  const root = reference(context, target);
  return (
    `\n\n${start}\n# Installed Global Engineering Standards\n\n` +
    `Framework root: ${JSON.stringify(root)}. Resolve relative framework paths against the directory containing THIS file, never the current working directory.\n\n` +
    `${render(policy, root).trim()}\n\n${end}\n`
  );
}
function planInstall(context: Layout, previous: Manifest | null, source: string): Change[] {
  const content = readContent(source);
  const agents = [
    ...new Set([...(previous?.agents ?? []), ...context.options.agents]),
  ].sort() as Agent[];
  checkOverrides(context, agents);
  const desired = new Map<string, string>();
  for (const [name, value] of content) {
    const target = context.targets.get(`framework/${name}`) as string;
    const root = reference(context, target);
    desired.set(
      `framework/${name}`,
      name.endsWith('SKILL.md') ? renderSkill(value, root) : render(value, root),
    );
  }
  for (const agent of agents) {
    const key = `${agent}-instructions`;
    desired.set(
      key,
      block(context, context.targets.get(key) as string, content.get('AGENTS.md') as string),
    );
    for (const skill of skills) {
      const key = `${agent}-skill/${skill}`;
      const target = context.targets.get(key) as string;
      const directory = path.dirname(target);
      assertSafe(directory);
      if (!previous?.entries[key] && existsSync(directory) && readdirSync(directory).length)
        throw new Error(`Existing skill directory preserved: ${directory}`);
      desired.set(
        key,
        renderSkill(content.get(`skills/${skill}/SKILL.md`) as string, reference(context, target)),
      );
    }
  }
  const changes: Change[] = [];
  const entries: Record<string, Entry> = {};
  for (const [key, value] of desired) {
    const before = snapshot(context.targets.get(key) as string);
    const old = previous?.entries[key];
    let next = value;
    if (key.endsWith('-instructions')) {
      const original = textOf(before);
      if (!old && (original.includes(start) || original.includes(end)))
        throw new Error(`Unowned managed block: ${key}`);
      next = old?.block ? original.replace(old.block, () => value) : original + value;
      entries[key] = {
        hash: digest(value),
        block: value,
        created: old?.created ?? before === null,
      };
      if (key === 'codex-instructions' && Buffer.byteLength(next) > 32768)
        throw new Error(
          'Codex instruction file exceeds the default 32 KiB limit; reduce existing instructions manually.',
        );
    } else {
      if (before && !old) throw new Error(`Existing file preserved: ${key}`);
      entries[key] = { hash: digest(value) };
    }
    const after = asSnapshot(next, before);
    if (!equal(before, after)) changes.push({ key, before, after });
  }
  const version = (
    JSON.parse(readFileSync(path.join(source, 'package.json'), 'utf8')) as { version: string }
  ).version;
  const manifest: Manifest = { schema: 1, version, scope: context.options.scope, agents, entries };
  const before = snapshot(context.targets.get('manifest') as string);
  const after = asSnapshot(`${JSON.stringify(manifest, null, 2)}\n`, before);
  if (!equal(before, after)) changes.push({ key: 'manifest', before, after });
  return changes;
}
export function renderSkill(value: string, root: string): string {
  const delimiter = value.indexOf('\n---\n', 4) + 5;
  return (
    value.slice(0, delimiter) +
    `\nInstallation path resolution: resolve all relative framework paths in this skill against the directory containing this SKILL.md, never the current working directory. Framework root: ${JSON.stringify(root)}.\n` +
    render(value.slice(delimiter), root)
  );
}
function planUninstall(context: Layout, manifest: Manifest): Change[] {
  const changes: Change[] = [];
  for (const [key, entry] of Object.entries(manifest.entries)) {
    const before = snapshot(context.targets.get(key) as string);
    let after = null;
    if (entry.block) {
      const remaining = textOf(before).replace(entry.block, '');
      after = remaining === '' && entry.created ? null : asSnapshot(remaining, before);
    }
    changes.push({ key, before, after });
  }
  changes.push({
    key: 'manifest',
    before: snapshot(context.targets.get('manifest') as string),
    after: null,
  });
  return changes;
}
export type Command = 'init' | 'init-project' | 'update' | 'uninstall' | 'doctor' | 'rollback';
export function run(
  command: Command,
  options: Options,
  source = packageRoot,
  failAfter?: number,
): Result {
  const context = layout(options);
  assertSafe(context.state);
  // Fail safely before even creating a lock or state directory.
  if (command !== 'rollback' && pending(context))
    throw new Error('Interrupted transaction requires rollback.');
  const initial = command === 'rollback' ? null : loadManifest(context);
  if (command === 'doctor') {
    readContent(source);
    if (!initial) throw new Error('No installation manifest found for this scope.');
    if (existsSync(path.join(context.state, 'operation.lock')))
      throw new Error('Installation lock exists; check for an active or interrupted process.');
    if (pending(context)) throw new Error('Interrupted transaction requires rollback.');
    verify(context, initial);
    checkOverrides(context, initial.agents);
    const messages = [
      'Manifest, content hashes, instruction blocks and six skill locations per installed agent verified.',
      'Agent runtime discovery and semantic compliance require an isolated agent session.',
    ];
    return { command, dryRun: options.dryRun, changes: [], transaction: null, messages };
  }
  const work = (): Result => {
    if (command === 'rollback') {
      const result = rollback(context);
      return {
        command,
        dryRun: options.dryRun,
        changes: [`${result.changes} files`],
        transaction: result.id,
        messages: ['Backups retained.'],
      };
    }
    if (pending(context)) throw new Error('Interrupted transaction requires rollback.');
    const previous = loadManifest(context);
    if (previous) verify(context, previous);
    if (command === 'update' && !previous)
      throw new Error('No installation to update. Run init first.');
    const changes =
      command === 'uninstall'
        ? previous
          ? planUninstall(context, previous)
          : []
        : planInstall(context, previous, source);
    const transaction = options.dryRun ? null : commit(context, changes, failAfter);
    return {
      command,
      dryRun: options.dryRun,
      changes: changes.map((x) => x.key),
      transaction,
      messages:
        command === 'uninstall'
          ? ['Only owned, unchanged content removed. Backups and empty directories retained.']
          : ['Restart your agent and verify instruction and skill discovery.'],
    };
  };
  if (options.dryRun) return work();
  // Plan first so ordinary conflicts never write even a lock or a backup.
  if (command !== 'rollback') {
    if (initial) verify(context, initial);
    if (command === 'update' && !initial) throw new Error('No installation to update.');
    if (command !== 'uninstall') planInstall(context, initial, source);
  }
  if (command === 'uninstall' && !initial) return work();
  return locked(context, work);
}
