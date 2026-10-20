import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { contentFiles, packageRoot, readContent, skills } from '../dist/content.js';

const content = readContent();
const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
assert.equal(packageJson.author.name, 'Nirox Morais');
assert.equal(packageJson.author.url, 'https://www.linkedin.com/in/nirox-morais-87784b1ba/');
assert.equal(packageJson.license, 'MIT');
assert.equal(
  packageJson.repository.url,
  'git+https://github.com/Enki-DEV-expert/engineering-standards.git',
);
assert.deepEqual(packageJson.dependencies ?? {}, {});
assert.ok(readFileSync('LICENSE', 'utf8').includes('Copyright (c) 2026 Nirox Morais'));
const files = execFileSync(
  'git',
  ['ls-files', '--cached', '--others', '--exclude-standard', '-z'],
  { encoding: 'utf8' },
)
  .split('\0')
  .filter(Boolean);
const problems = [];
for (const file of files) {
  if (/\.(backup(?:-.*)?|bak|orig|pem|key|p12|pfx)$/.test(file) || /(^|\/)\.env(?:\.|$)/.test(file))
    problems.push(`Sensitive/backup filename: ${file}`);
  if (!/\.(md|ts|mjs|json|ya?ml|cff)$/.test(file) && !['LICENSE', '.gitignore'].includes(file))
    continue;
  const value = readFileSync(file, 'utf8');
  const secretPatterns = [
    /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
    /\b(?:ghp|github_pat)_[A-Za-z0-9_]{30,}\b/,
    /\bAKIA[0-9A-Z]{16}\b/,
    /\bsk-(?:proj-)?[A-Za-z0-9_-]{32,}\b/,
  ];
  if (!file.startsWith('tests/') && /(?:\/Users\/|\/home\/)[a-z][a-z0-9_-]{2,}\//i.test(value))
    problems.push(`Potential private path: ${file}`);
  // Scan test fixtures for credentials too.
  if (secretPatterns.some((pattern) => pattern.test(value)))
    problems.push(`Potential secret/private path: ${file}`);
  if (/^Co-authored-by:.*(?:Codex|Claude|OpenAI|Anthropic)/im.test(value))
    problems.push(`AI co-authorship trailer: ${file}`);
  if (file.endsWith('.md')) {
    for (const match of value.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
      const reference = match[1].split('#')[0];
      if (!reference || /^(?:https?:|mailto:|#)/.test(reference)) continue;
      if (!existsSync(path.resolve(path.dirname(file), decodeURIComponent(reference))))
        problems.push(`Broken Markdown link: ${file} → ${reference}`);
    }
  }
}
const plugin = JSON.parse(readFileSync('dist/claude-plugin/.claude-plugin/plugin.json', 'utf8'));
const marketplace = JSON.parse(readFileSync('.claude-plugin/marketplace.json', 'utf8'));
assert.equal(plugin.name, 'global-engineering-standards');
assert.equal(plugin.version, packageJson.version);
assert.equal(plugin.author.name, 'Nirox Morais');
assert.equal(plugin.author.url, 'https://www.linkedin.com/in/nirox-morais-87784b1ba/');
assert.equal(marketplace.owner.name, 'Enki-DEV-expert');
assert.ok(existsSync(path.join(packageRoot, marketplace.plugins[0].source)));
for (const skill of skills) assert.ok(existsSync(`dist/claude-plugin/skills/${skill}/SKILL.md`));
for (const name of contentFiles) assert.ok(existsSync(`dist/claude-plugin/${name}`));
assert.deepEqual(problems, [], problems.join('\n'));
console.log(
  `Validated ${content.size} unchanged canonical files, 12 documents, 6 skills, plugin inventory, local Markdown links and ${files.length} candidate repository files.`,
);
console.log(
  'Pattern scanning is bounded and does not prove absence of every secret or semantic policy conflict.',
);
