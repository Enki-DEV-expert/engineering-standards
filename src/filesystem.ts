import { randomUUID } from 'node:crypto';
import {
  chmodSync,
  closeSync,
  existsSync,
  fsyncSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import path from 'node:path';

export interface Snapshot {
  data: string;
  mode: number;
}
export const equal = (a: Snapshot | null, b: Snapshot | null) =>
  a?.data === b?.data && a?.mode === b?.mode;

/** Refuse links and special files at every existing component, including dangling links. */
export function assertSafe(file: string): void {
  const absolute = path.resolve(file);
  const parsed = path.parse(absolute);
  let cursor = parsed.root;
  const parts = absolute.slice(parsed.root.length).split(path.sep).filter(Boolean);
  for (let index = 0; index < parts.length; index++) {
    cursor = path.join(cursor, parts[index] ?? '');
    let stat: ReturnType<typeof lstatSync>;
    try {
      stat = lstatSync(cursor);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') return;
      throw error;
    }
    if (stat.isSymbolicLink()) throw new Error(`Refusing symbolic link: ${cursor}`);
    if (index < parts.length - 1 && !stat.isDirectory())
      throw new Error(`Not a directory: ${cursor}`);
    if (index === parts.length - 1 && !stat.isDirectory() && (!stat.isFile() || stat.nlink !== 1)) {
      throw new Error(`Refusing special file or hard link: ${cursor}`);
    }
  }
}
export function snapshot(file: string): Snapshot | null {
  assertSafe(file);
  if (!existsSync(file)) return null;
  const stat = lstatSync(file);
  if (!stat.isFile()) throw new Error(`Expected regular file: ${file}`);
  if (stat.size > 8 * 1024 * 1024) throw new Error(`File exceeds 8 MiB safety limit: ${file}`);
  return { data: readFileSync(file).toString('base64'), mode: stat.mode & 0o777 };
}
export function textOf(value: Snapshot | null): string {
  return value
    ? new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(
        Buffer.from(value.data, 'base64'),
      )
    : '';
}
export function asSnapshot(value: string, previous: Snapshot | null = null): Snapshot {
  return {
    data: Buffer.from(value).toString('base64'),
    mode: previous?.mode ?? (process.platform === 'win32' ? 0o666 : 0o600),
  };
}
export function ensureDirectory(directory: string): void {
  assertSafe(directory);
  mkdirSync(directory, { recursive: true, mode: 0o700 });
}
export function replace(file: string, value: Snapshot | null): void {
  assertSafe(file);
  if (value === null) {
    if (existsSync(file)) unlinkSync(file);
    return;
  }
  ensureDirectory(path.dirname(file));
  const temporary = path.join(path.dirname(file), `.ges-${randomUUID()}.tmp`);
  let fd: number | undefined;
  try {
    fd = openSync(temporary, 'wx', value.mode);
    writeFileSync(fd, Buffer.from(value.data, 'base64'));
    fsyncSync(fd);
    closeSync(fd);
    fd = undefined;
    chmodSync(temporary, value.mode);
    assertSafe(file);
    renameSync(temporary, file);
  } finally {
    if (fd !== undefined) closeSync(fd);
    if (existsSync(temporary)) unlinkSync(temporary);
  }
}
