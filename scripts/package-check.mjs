import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  copyFileSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const temporary = realpathSync(mkdtempSync(path.join(os.tmpdir(), 'ges-package-')));
function execute(command, args, options = {}) {
  const result = spawnSync(command, args, { encoding: 'utf8', ...options });
  if (result.status !== 0) throw new Error(`${command} failed: ${result.stderr || result.stdout}`);
  return result.stdout;
}
try {
  // npm's JS entry point avoids shell invocation and Windows .cmd quoting.
  assert.ok(process.env.npm_execpath, 'Run through npm run package:check');
  const packed = JSON.parse(
    execute(
      process.execPath,
      [
        process.env.npm_execpath,
        'pack',
        '--ignore-scripts',
        '--json',
        '--pack-destination',
        temporary,
      ],
      {
        env: { ...process.env, npm_config_cache: path.join(temporary, 'cache') },
      },
    ),
  )[0];
  const allowed =
    /^(?:dist\/[a-z-]+\.js|src\/[a-z-]+\.ts|AGENTS\.md|docs\/[a-z-]+\.md|skills\/[a-z-]+\/SKILL\.md|templates\/[A-Z_]+\.md|scripts\/content-baseline\.json|handbook\/[a-z-]+\.md|README\.md|LICENSE|SECURITY\.md|CHANGELOG\.md|CONTRIBUTING\.md|CODE_OF_CONDUCT\.md|CITATION\.cff|package\.json)$/;
  for (const file of packed.files)
    assert.match(file.path, allowed, `Unexpected package member: ${file.path}`);
  for (const name of [
    'dist/cli.js',
    'dist/installer.js',
    'AGENTS.md',
    'docs/security.md',
    'scripts/content-baseline.json',
    'LICENSE',
  ])
    assert.ok(packed.files.some((file) => file.path === name));
  const archive = path.join(temporary, packed.filename);
  execute('tar', ['-xzf', archive, '-C', temporary]);
  const home = path.join(temporary, 'home');
  const project = path.join(temporary, 'project');
  mkdirSync(home);
  mkdirSync(project);
  const env = {
    ...process.env,
    HOME: home,
    USERPROFILE: home,
    CODEX_HOME: path.join(home, '.codex'),
    CLAUDE_CONFIG_DIR: path.join(home, '.claude'),
    npm_config_cache: path.join(temporary, 'cache'),
  };
  for (const args of [['init-project'], ['doctor'], ['update'], ['uninstall']]) {
    execute(process.execPath, [path.join(temporary, 'package/dist/cli.js'), ...args], {
      cwd: project,
      env,
    });
  }
  const consumer = path.join(temporary, 'consumer');
  mkdirSync(consumer);
  writeFileSync(path.join(consumer, 'package.json'), '{"private":true}\n');
  execute(
    process.execPath,
    [
      process.env.npm_execpath,
      'install',
      '--offline',
      '--ignore-scripts',
      '--no-audit',
      '--no-fund',
      archive,
    ],
    { cwd: consumer, env },
  );
  const help = execute(
    process.execPath,
    [process.env.npm_execpath, 'exec', '--offline', '--', 'engineering-standards', '--help'],
    { cwd: consumer, env },
  );
  assert.match(help, /Usage: engineering-standards/);
  const artifactDir = path.resolve('dist/artifacts');
  mkdirSync(artifactDir, { recursive: true });
  copyFileSync(archive, path.join(artifactDir, packed.filename));
  const hash = createHash('sha256').update(readFileSync(archive)).digest('hex');
  writeFileSync(path.join(artifactDir, 'SHA256SUMS'), `${hash}  ${packed.filename}\n`);
  console.log(
    `Package smoke test passed: ${packed.files.length} allowlisted files; ${packed.size} bytes compressed. SHA-256: ${hash}`,
  );
} finally {
  rmSync(temporary, { recursive: true, force: true });
}
