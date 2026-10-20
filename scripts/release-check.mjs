import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const repository = process.env.GITHUB_REPOSITORY;
assert.ok(repository?.startsWith('Enki-DEV-expert/'), 'Release must belong to Enki-DEV-expert');
assert.equal(process.env.GITHUB_REF, `refs/tags/v${pkg.version}`);
assert.equal(
  pkg.repository?.url,
  `git+https://github.com/${repository}.git`,
  'Confirm canonical package repository before releasing',
);
assert.equal(pkg.author.name, 'Nirox Morais');
assert.equal(pkg.author.url, 'https://www.linkedin.com/in/nirox-morais-87784b1ba/');
assert.equal(
  execFileSync('git', ['cat-file', '-t', `v${pkg.version}`], { encoding: 'utf8' }).trim(),
  'tag',
  'Use an annotated signed tag',
);
const tag = execFileSync('git', ['cat-file', 'tag', `v${pkg.version}`], { encoding: 'utf8' });
assert.match(
  tag,
  /-----BEGIN (?:PGP|SSH) SIGNATURE-----/,
  'Tag must carry a signature; maintainer must verify trust before approval',
);
const history = execFileSync('git', ['log', '--format=%B'], { encoding: 'utf8' });
assert.doesNotMatch(history, /^Co-authored-by:.*(?:Codex|Claude|OpenAI|Anthropic)/im);
console.log(
  'Release identity, tag/version, repository and authorship checks passed. Cryptographic signer trust is a required human approval gate.',
);
