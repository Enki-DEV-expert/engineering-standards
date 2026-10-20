#!/usr/bin/env node
import { type Command, run } from './installer.js';
import { type Agent, defaults } from './layout.js';

const help = `Global Engineering Standards\n\nUsage: engineering-standards <command> [options]\n\nCommands: init, init-project, update, uninstall, doctor, rollback\nOptions: --global | --project, --claude, --codex, --dry-run, --help\n\nDefault: current project, both agents. init-project implies --project.\nUpdate uses the content bundled with the CLI version you are running; it does not download.\nUninstall and rollback apply to the entire selected scope.\nExisting user instructions and unrelated skills are preserved.\n`;
export function main(args: string[]): void {
  if (!args.length || args.includes('--help')) {
    process.stdout.write(help);
    return;
  }
  const command = args[0] as Command;
  if (!['init', 'init-project', 'update', 'uninstall', 'doctor', 'rollback'].includes(command))
    throw new Error(`Unknown command: ${command}`);
  const flags = args.slice(1);
  for (const flag of flags)
    if (!['--global', '--project', '--claude', '--codex', '--dry-run'].includes(flag))
      throw new Error(`Unknown option: ${flag}`);
  if (new Set(flags).size !== flags.length) throw new Error('Repeated option');
  if (
    (flags.includes('--global') && flags.includes('--project')) ||
    (command === 'init-project' && flags.includes('--global'))
  )
    throw new Error('Conflicting installation scopes');
  if (
    ['uninstall', 'rollback', 'doctor'].includes(command) &&
    (flags.includes('--claude') || flags.includes('--codex'))
  )
    throw new Error(`${command} applies to the whole scope; omit agent filters.`);
  const selected = (['claude', 'codex'] as Agent[]).filter((x) => flags.includes(`--${x}`));
  const result = run(command, {
    ...defaults(),
    scope: flags.includes('--global') ? 'global' : 'project',
    agents: selected.length ? selected : command === 'update' ? [] : ['claude', 'codex'],
    dryRun: flags.includes('--dry-run'),
  });
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
}
try {
  main(process.argv.slice(2));
} catch (error) {
  process.stderr.write(
    `engineering-standards: ${error instanceof Error ? error.message : String(error)}\n`,
  );
  process.exitCode = 1;
}
