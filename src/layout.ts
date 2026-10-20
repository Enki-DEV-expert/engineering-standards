import os from 'node:os';
import path from 'node:path';
import { contentFiles, skills } from './content.js';

export type Agent = 'claude' | 'codex';
export interface Options {
  scope: 'global' | 'project';
  agents: Agent[];
  home: string;
  project: string;
  codexHome?: string;
  claudeHome?: string;
  dryRun: boolean;
}
export interface Layout {
  state: string;
  framework: string;
  targets: Map<string, string>;
  options: Options;
}
export function layout(options: Options, paths = path): Layout {
  const base = paths.resolve(options.scope === 'global' ? options.home : options.project);
  if (options.scope === 'project' && base === paths.resolve(options.home)) {
    throw new Error(
      'Project installation in the home directory is ambiguous; choose a project directory.',
    );
  }
  const state = paths.join(base, '.engineering-standards');
  const framework = paths.join(state, 'framework');
  const targets = new Map(
    contentFiles.map((name) => [`framework/${name}`, paths.join(framework, ...name.split('/'))]),
  );
  const claude =
    options.scope === 'global'
      ? paths.resolve(options.claudeHome ?? paths.join(base, '.claude'))
      : paths.join(base, '.claude');
  const codex =
    options.scope === 'global'
      ? paths.resolve(options.codexHome ?? paths.join(base, '.codex'))
      : base;
  targets.set(
    'claude-instructions',
    paths.join(options.scope === 'global' ? claude : base, 'CLAUDE.md'),
  );
  targets.set('codex-instructions', paths.join(codex, 'AGENTS.md'));
  for (const skill of skills) {
    targets.set(`claude-skill/${skill}`, paths.join(claude, 'skills', skill, 'SKILL.md'));
    targets.set(`codex-skill/${skill}`, paths.join(base, '.agents', 'skills', skill, 'SKILL.md'));
  }
  targets.set('manifest', paths.join(state, 'manifest.json'));
  const values = [...targets.values()].map((x) => x.toLowerCase());
  if (
    values.some((x) =>
      [...x].some((character) => character.charCodeAt(0) < 32 || character.charCodeAt(0) === 127),
    )
  )
    throw new Error('Control characters in destination paths are unsupported');
  if (new Set(values).size !== values.length) throw new Error('Overlapping destination paths');
  return { state, framework, targets, options };
}
export function defaults(): Omit<Options, 'scope' | 'agents' | 'dryRun'> {
  const options: Omit<Options, 'scope' | 'agents' | 'dryRun'> = {
    home: os.homedir(),
    project: process.cwd(),
  };
  if (process.env.CODEX_HOME) options.codexHome = path.resolve(process.env.CODEX_HOME);
  if (process.env.CLAUDE_CONFIG_DIR)
    options.claudeHome = path.resolve(process.env.CLAUDE_CONFIG_DIR);
  return options;
}
