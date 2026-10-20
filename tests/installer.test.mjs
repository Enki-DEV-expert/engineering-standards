import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  cpSync,
  existsSync,
  linkSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  realpathSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { beforeEach, test } from 'node:test';
import { contentFiles, digest, packageRoot, readContent, render, skills } from '../dist/content.js';
import { run } from '../dist/installer.js';
import { layout } from '../dist/layout.js';

beforeEach((t) => process.stderr.write(`START: ${t.name}\n`));

function fixture(t, overrides = {}) {
  const root = realpathSync(mkdtempSync(path.join(os.tmpdir(), 'ges-test-')));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const home = path.join(root, 'home space é');
  const project = path.join(root, 'project space é');
  mkdirSync(home);
  mkdirSync(project);
  return {
    root,
    home,
    project,
    scope: 'project',
    agents: ['claude', 'codex'],
    dryRun: false,
    ...overrides,
  };
}
function tree(root) {
  const result = {};
  function visit(dir) {
    for (const name of readdirSync(dir)) {
      const file = path.join(dir, name);
      const stat = lstatSync(file);
      if (stat.isDirectory()) visit(file);
      else
        result[path.relative(root, file)] = stat.isSymbolicLink()
          ? 'symlink'
          : readFileSync(file).toString('base64');
    }
  }
  visit(root);
  return result;
}
function put(file, value) {
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, value);
}
function target(o, name) {
  return layout(o).targets.get(name);
}

for (const scope of ['global', 'project']) {
  for (const agents of [['claude'], ['codex'], ['claude', 'codex']]) {
    test(`fresh ${scope}: ${agents.join('+')}; repeat, doctor, update, uninstall`, (t) => {
      const o = fixture(t, { scope, agents });
      const result = run('init', o);
      assert.ok(result.changes.length > 20);
      for (const agent of agents) {
        assert.match(
          readFileSync(target(o, `${agent}-instructions`), 'utf8'),
          /Global Engineering Standards/,
        );
        for (const skill of skills) assert.ok(existsSync(target(o, `${agent}-skill/${skill}`)));
      }
      for (const agent of ['claude', 'codex'].filter((x) => !agents.includes(x)))
        assert.ok(!existsSync(target(o, `${agent}-instructions`)));
      assert.equal(run('init', o).changes.length, 0);
      assert.equal(run('doctor', o).changes.length, 0);
      assert.equal(run('update', o).changes.length, 0);
      run('uninstall', o);
      assert.ok(!existsSync(target(o, 'manifest')));
      for (const agent of agents) assert.ok(!existsSync(target(o, `${agent}-instructions`)));
      assert.equal(run('uninstall', o).changes.length, 0);
      run('init', o);
    });
  }
}
test('preserves UTF-8 BOM, CRLF, no trailing newline, settings and unrelated skills', (t) => {
  const o = fixture(t);
  const old = '\uFEFF# Personal rules\r\nKeep exactly.';
  for (const agent of o.agents) put(target(o, `${agent}-instructions`), old);
  const unrelated = path.join(o.project, '.agents/skills/my-skill/SKILL.md');
  put(unrelated, 'private skill');
  const settings = path.join(o.project, '.claude/settings.json');
  put(settings, '{"permissions":{"deny":["Bash"]}}');
  run('init', o);
  for (const agent of o.agents)
    assert.ok(readFileSync(target(o, `${agent}-instructions`), 'utf8').startsWith(old));
  run('uninstall', o);
  for (const agent of o.agents)
    assert.equal(readFileSync(target(o, `${agent}-instructions`), 'utf8'), old);
  assert.equal(readFileSync(unrelated, 'utf8'), 'private skill');
  assert.equal(readFileSync(settings, 'utf8'), '{"permissions":{"deny":["Bash"]}}');
});
test('preserves user edits outside managed blocks on update and uninstall', (t) => {
  const o = fixture(t);
  run('init', o);
  const file = target(o, 'codex-instructions');
  put(file, `before\n${readFileSync(file, 'utf8')}\nafter`);
  run('update', o);
  run('uninstall', o);
  assert.equal(readFileSync(file, 'utf8'), 'before\n\nafter');
});
test('existing same-named skill is never overwritten, even if content matches', (t) => {
  const o = fixture(t);
  put(target(o, `codex-skill/${skills[0]}`), 'custom');
  const before = tree(o.root);
  assert.throws(() => run('init', o), /Existing skill directory/);
  assert.deepEqual(tree(o.root), before);
});
test('existing skill directory with auxiliary resources is preserved', (t) => {
  const o = fixture(t);
  put(path.join(path.dirname(target(o, `claude-skill/${skills[0]}`)), 'notes.txt'), 'keep');
  assert.throws(() => run('init', o), /Existing skill directory/);
});
for (const command of ['init', 'init-project']) {
  test(`${command} dry run has zero filesystem effects`, (t) => {
    const o = fixture(t);
    const before = tree(o.root);
    assert.ok(run(command, { ...o, dryRun: true }).changes.length);
    assert.deepEqual(tree(o.root), before);
    assert.ok(!existsSync(layout(o).state));
  });
}
for (const command of ['update', 'uninstall', 'rollback', 'doctor']) {
  test(`${command} dry run changes no bytes`, (t) => {
    const o = fixture(t);
    run('init', o);
    const before = tree(o.root);
    run(command, { ...o, dryRun: true });
    assert.deepEqual(tree(o.root), before);
  });
}
for (const command of ['update', 'uninstall', 'doctor']) {
  test(`${command} refuses edited owned files without partial writes`, (t) => {
    const o = fixture(t);
    run('init', o);
    put(target(o, 'framework/docs/security.md'), 'user edit');
    const before = tree(o.root);
    assert.throws(() => run(command, o), /Installed file changed/);
    assert.deepEqual(tree(o.root), before);
  });
}
test('edited or duplicated managed block is rejected', (t) => {
  const o = fixture(t);
  run('init', o);
  const file = target(o, 'claude-instructions');
  put(file, readFileSync(file, 'utf8').replace('Global Engineering Standards', 'Edited policy'));
  assert.throws(() => run('uninstall', o), /block changed/);
});
test('unowned markers are not adopted', (t) => {
  const o = fixture(t);
  put(target(o, 'codex-instructions'), '<!-- global-engineering-standards:start -->');
  assert.throws(() => run('init', o), /Unowned managed block/);
});
test('rollback restores previous user bytes and supports reinstall', (t) => {
  const o = fixture(t);
  const file = target(o, 'codex-instructions');
  put(file, 'original');
  run('init', o);
  run('rollback', o);
  assert.equal(readFileSync(file, 'utf8'), 'original');
  assert.ok(!existsSync(target(o, 'manifest')));
  run('init', o);
});
test('rollback undoes uninstall', (t) => {
  const o = fixture(t);
  run('init', o);
  run('uninstall', o);
  run('rollback', o);
  run('doctor', o);
});
test('rollback refuses subsequent user edits', (t) => {
  const o = fixture(t);
  run('init', o);
  put(target(o, 'codex-instructions'), 'later edit');
  const before = tree(o.root);
  assert.throws(() => run('rollback', o), /later edits/);
  assert.deepEqual(tree(o.root), before);
});
test('injected write failure rolls back all completed writes', (t) => {
  const o = fixture(t);
  put(target(o, 'codex-instructions'), 'original');
  assert.throws(() => run('init', o, packageRoot, 8), /Injected transaction failure/);
  assert.equal(readFileSync(target(o, 'codex-instructions'), 'utf8'), 'original');
  assert.ok(!existsSync(target(o, 'framework/AGENTS.md')));
  assert.ok(!existsSync(target(o, 'manifest')));
  run('init', o);
  run('doctor', o);
});
test('transaction lock blocks writes', (t) => {
  const o = fixture(t);
  put(path.join(layout(o).state, 'operation.lock'), 'busy');
  assert.throws(() => run('init', o), /EEXIST/);
  assert.ok(!existsSync(target(o, 'manifest')));
});
test('tampered manifest cannot target unrelated files', (t) => {
  const o = fixture(t);
  run('init', o);
  const file = target(o, 'manifest');
  const m = JSON.parse(readFileSync(file, 'utf8'));
  m.entries['../../important'] = { hash: digest('private') };
  put(file, JSON.stringify(m));
  assert.throws(() => run('uninstall', o), /Invalid manifest entry/);
});
test('tampered backup cannot target unrelated files', (t) => {
  const o = fixture(t);
  const result = run('init', o);
  const file = path.join(layout(o).state, 'transactions', `${result.transaction}.json`);
  const data = JSON.parse(readFileSync(file, 'utf8'));
  data.changes[0].key = '../../outside';
  put(file, JSON.stringify(data));
  assert.throws(() => run('rollback', o), /Invalid transaction target/);
});
test('missing installed documentation is diagnosed', (t) => {
  const o = fixture(t);
  run('init', o);
  rmSync(target(o, 'framework/docs/data.md'));
  assert.throws(() => run('doctor', o), /Missing installed file/);
});
test('custom agent configuration roots are respected with Codex user skills in .agents', (t) => {
  const o = fixture(t, { scope: 'global' });
  o.codexHome = path.join(o.root, 'custom codex');
  o.claudeHome = path.join(o.root, 'custom claude');
  run('init', o);
  assert.ok(existsSync(path.join(o.codexHome, 'AGENTS.md')));
  assert.ok(existsSync(path.join(o.claudeHome, 'CLAUDE.md')));
  assert.ok(existsSync(path.join(o.home, '.agents/skills', skills[0], 'SKILL.md')));
});
test('nonempty Codex override prevents a misleading successful installation', (t) => {
  const o = fixture(t);
  put(path.join(o.project, 'AGENTS.override.md'), 'Override');
  assert.throws(() => run('init', o), /shadows/);
});
test('Codex default instruction byte limit is protected', (t) => {
  const o = fixture(t);
  put(target(o, 'codex-instructions'), 'x'.repeat(33000));
  assert.throws(() => run('init', o), /32 KiB/);
});
test('adding a second agent preserves the first', (t) => {
  const o = fixture(t);
  run('init', { ...o, agents: ['claude'] });
  run('init', { ...o, agents: ['codex'] });
  run('doctor', o);
  assert.ok(existsSync(target(o, 'claude-instructions')));
  assert.ok(existsSync(target(o, 'codex-instructions')));
});
test('symlinked parent directory is refused', (t) => {
  const o = fixture(t);
  const external = path.join(o.root, 'outside');
  mkdirSync(external);
  symlinkSync(
    external,
    path.join(o.project, '.agents'),
    process.platform === 'win32' ? 'junction' : 'dir',
  );
  assert.throws(() => run('init', o), /symbolic link/);
  assert.deepEqual(readdirSync(external), []);
});
test('hard-linked instruction files are refused', (t) => {
  const o = fixture(t);
  const file = path.join(o.root, 'outside.md');
  put(file, 'outside');
  linkSync(file, target(o, 'codex-instructions'));
  assert.throws(() => run('init', o), /hard link/);
  assert.equal(readFileSync(file, 'utf8'), 'outside');
});
test('global and project installations are independent', (t) => {
  const o = fixture(t);
  run('init', o);
  run('init', { ...o, scope: 'global' });
  run('uninstall', o);
  run('doctor', { ...o, scope: 'global' });
});
test('project references remain relative after moving checkout', (t) => {
  const o = fixture(t);
  process.stderr.write('MOVE: init\n');
  run('init', o);
  const moved = path.join(o.root, 'moved');
  process.stderr.write('MOVE: cpSync\n');
  cpSync(o.project, moved, { recursive: true });
  const relocated = { ...o, project: moved };
  process.stderr.write('MOVE: doctor\n');
  run('doctor', relocated);
  for (const key of ['codex-instructions', `claude-skill/${skills[0]}`, 'framework/AGENTS.md']) {
    const value = readFileSync(target(relocated, key), 'utf8');
    assert.ok(!value.includes(o.project));
    assert.ok(!value.includes('~/engineering-standards/'));
  }
  process.stderr.write('MOVE: uninstall\n');
  run('uninstall', relocated);
  process.stderr.write('MOVE: done\n');
});
test('Windows and POSIX layout uses correct roots and separators', () => {
  const win = layout(
    {
      home: 'C:\\Users\\Example',
      project: 'D:\\Work Space\\repo',
      scope: 'project',
      agents: ['codex'],
      dryRun: true,
    },
    path.win32,
  );
  assert.equal(win.targets.get('codex-instructions'), 'D:\\Work Space\\repo\\AGENTS.md');
  assert.equal(
    win.targets.get(`codex-skill/${skills[0]}`),
    `D:\\Work Space\\repo\\.agents\\skills\\${skills[0]}\\SKILL.md`,
  );
  assert.equal(
    layout(
      {
        home: '/home/example',
        project: '/repo',
        scope: 'global',
        agents: ['claude'],
        dryRun: true,
      },
      path.posix,
    ).state,
    '/home/example/.engineering-standards',
  );
});
test('baseline, all documentation references, and six skill metadata records validate', () => {
  assert.equal(readContent().size, contentFiles.length);
  assert.equal(
    render('~/engineering-standards/docs/security.md and docs/data.md', '/safe/root'),
    '/safe/root/docs/security.md and /safe/root/docs/data.md',
  );
});
test('missing source documentation fails before destination writes', (t) => {
  const o = fixture(t);
  const source = path.join(o.root, 'source');
  mkdirSync(source);
  assert.throws(() => run('init', o, source), /ENOENT/);
  assert.ok(!existsSync(layout(o).state));
});
test('CLI uses explicit isolated HOME and rejects invalid flags', (t) => {
  const o = fixture(t);
  const env = {
    ...process.env,
    HOME: o.home,
    USERPROFILE: o.home,
    CODEX_HOME: path.join(o.home, '.codex'),
    CLAUDE_CONFIG_DIR: path.join(o.home, '.claude'),
  };
  const invoke = (args) =>
    spawnSync(process.execPath, [path.join(packageRoot, 'dist/cli.js'), ...args], {
      cwd: o.project,
      env,
      encoding: 'utf8',
    });
  assert.equal(invoke(['init-project', '--dry-run']).status, 0);
  assert.ok(!existsSync(layout(o).state));
  for (const args of [
    ['init', '--project', '--global'],
    ['init-project', '--global'],
    ['init', '--unknown'],
    ['unknown'],
    ['uninstall', '--claude'],
  ])
    assert.equal(invoke(args).status, 1);
  assert.equal(invoke(['init', '--global', '--codex']).status, 0);
  assert.equal(invoke(['doctor', '--global']).status, 0);
  assert.equal(invoke(['uninstall', '--global']).status, 0);
});

function sourceFixture(o) {
  const source = path.join(o.root, 'source');
  for (const name of [...contentFiles, 'scripts/content-baseline.json', 'package.json']) {
    put(path.join(source, name), readFileSync(path.join(packageRoot, name)));
  }
  return source;
}
function changeSource(source, name, content) {
  put(path.join(source, name), content);
  const baselineFile = path.join(source, 'scripts/content-baseline.json');
  const baseline = JSON.parse(readFileSync(baselineFile, 'utf8'));
  baseline[name] = digest(content);
  put(baselineFile, JSON.stringify(baseline));
}
test('new-version update changes payload, preserves user instructions, and rolls back', (t) => {
  const o = fixture(t);
  put(target(o, 'codex-instructions'), 'user rules');
  run('init', o);
  const source = sourceFixture(o);
  const before = readFileSync(target(o, 'framework/docs/security.md'), 'utf8');
  changeSource(
    source,
    'docs/security.md',
    `${readFileSync(path.join(source, 'docs/security.md'), 'utf8')}\nVersioned regression fixture.\n`,
  );
  const pkg = JSON.parse(readFileSync(path.join(source, 'package.json'), 'utf8'));
  pkg.version = '0.2.0';
  put(path.join(source, 'package.json'), JSON.stringify(pkg));
  assert.ok(run('update', o, source).changes.includes('framework/docs/security.md'));
  assert.match(
    readFileSync(target(o, 'framework/docs/security.md'), 'utf8'),
    /Versioned regression fixture/,
  );
  assert.ok(readFileSync(target(o, 'codex-instructions'), 'utf8').startsWith('user rules'));
  assert.equal(JSON.parse(readFileSync(target(o, 'manifest'), 'utf8')).version, '0.2.0');
  run('rollback', o);
  assert.equal(readFileSync(target(o, 'framework/docs/security.md'), 'utf8'), before);
  run('doctor', o);
});
test('broken domain references fail validation before installation', (t) => {
  const o = fixture(t);
  const source = sourceFixture(o);
  changeSource(source, 'docs/security.md', 'Read docs/missing-document.md before continuing.');
  assert.throws(() => run('init', o, source), /Broken reference/);
  assert.ok(!existsSync(layout(o).state));
});
test('invalid skill metadata is rejected even when source checksum matches', (t) => {
  const o = fixture(t);
  const source = sourceFixture(o);
  changeSource(
    source,
    `skills/${skills[0]}/SKILL.md`,
    '---\nname: wrong\ndescription: fixture\n---\n',
  );
  assert.throws(() => run('init', o, source), /Invalid skill metadata/);
});
test('source checksum tampering is rejected', (t) => {
  const o = fixture(t);
  const source = sourceFixture(o);
  put(path.join(source, 'docs/data.md'), 'tampered');
  assert.throws(() => run('init', o, source), /Content baseline mismatch/);
});
test('interrupted first installation can roll back with no manifest', (t) => {
  const o = fixture(t);
  const result = run('init', o);
  const file = path.join(layout(o).state, 'transactions', `${result.transaction}.json`);
  const journal = JSON.parse(readFileSync(file, 'utf8'));
  journal.status = 'pending';
  put(file, JSON.stringify(journal));
  rmSync(target(o, 'manifest'));
  rmSync(target(o, 'framework/AGENTS.md'));
  assert.throws(() => run('init', o), /Interrupted transaction/);
  run('rollback', o);
  assert.ok(!existsSync(target(o, 'codex-instructions')));
  run('init', o);
});
test('all generated document references resolve from each containing file', (t) => {
  const o = fixture(t);
  run('init', o);
  for (const [key, file] of layout(o).targets) {
    if (key === 'manifest') continue;
    const value = readFileSync(file, 'utf8');
    for (const match of value.matchAll(/(?:[.A-Za-z0-9_-]+\/)+(?:[A-Za-z0-9_-]+\.md)/g)) {
      const ref = match[0];
      if (ref.includes('docs/') || ref.includes('templates/'))
        assert.ok(existsSync(path.resolve(path.dirname(file), ref)), `${key}: ${ref}`);
    }
  }
});

test('dollar replacement tokens in global paths stay literal across update', (t) => {
  const o = fixture(t, { scope: 'global' });
  o.home = path.join(o.root, 'home $& dollar');
  mkdirSync(o.home);
  run('init', o);
  const file = target(o, 'codex-instructions');
  const before = readFileSync(file, 'utf8');
  assert.ok(before.includes('home $& dollar'));
  assert.equal(run('update', o).changes.length, 0);
  run('doctor', o);
  run('uninstall', o);
});
test('control characters in destination paths fail before writes', (t) => {
  const o = fixture(t);
  o.project = path.join(o.root, 'bad\npath');
  assert.throws(() => run('init', o), /Control characters/);
  assert.ok(!existsSync(o.project));
});
test('uninstall preserves new user resources inside managed skill directories', (t) => {
  const o = fixture(t);
  run('init', o);
  const resource = path.join(path.dirname(target(o, `claude-skill/${skills[0]}`)), 'user-notes.md');
  put(resource, 'keep me');
  run('uninstall', o);
  assert.equal(readFileSync(resource, 'utf8'), 'keep me');
});
