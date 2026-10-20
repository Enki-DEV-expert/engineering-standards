import { createHash } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const digest = (value: string | Buffer) => createHash('sha256').update(value).digest('hex');
export const skills = [
  'engineering-architecture-review',
  'engineering-cost-estimate',
  'engineering-database-review',
  'engineering-privacy-check',
  'engineering-safe-implementation',
  'engineering-security-standards-check',
] as const;
export const documents = [
  'ai-and-llm',
  'architecture',
  'cost-engineering',
  'data',
  'governance',
  'mobile-and-web',
  'observability',
  'platforms-and-applications',
  'privacy',
  'quality-and-testing',
  'scalability',
  'security',
];
export const templates = ['ADR', 'AUDIT_REPORT', 'EXCEPTIONS', 'PROJECT_AGENTS'];
export const contentFiles = [
  'AGENTS.md',
  ...documents.map((x) => `docs/${x}.md`),
  ...templates.map((x) => `templates/${x}.md`),
  ...skills.map((x) => `skills/${x}/SKILL.md`),
];

/** Validate the complete payload before planning any destination writes. */
export function readContent(root = packageRoot): Map<string, string> {
  const baseline = JSON.parse(
    readFileSync(path.join(root, 'scripts/content-baseline.json'), 'utf8'),
  ) as Record<string, string>;
  const result = new Map<string, string>();
  for (const name of contentFiles) {
    const data = readFileSync(path.join(root, name));
    if (digest(data) !== baseline[name]) throw new Error(`Content baseline mismatch: ${name}`);
    const value = new TextDecoder('utf-8', { fatal: true }).decode(data);
    for (const match of value.matchAll(/(?:docs|templates)\/[A-Za-z0-9_-]+\.md/g)) {
      if (!contentFiles.includes(match[0]))
        throw new Error(`Broken reference in ${name}: ${match[0]}`);
    }
    result.set(name, value);
  }
  for (const skill of skills) {
    const value = result.get(`skills/${skill}/SKILL.md`) ?? '';
    if (
      !value.startsWith(`---\nname: ${skill}\ndescription: `) ||
      !/\n---\n/.test(value.slice(4))
    ) {
      throw new Error(`Invalid skill metadata: ${skill}`);
    }
    const description = value.split('\n')[2]?.slice('description: '.length) ?? '';
    if (!description.trim() || description.length > 1024)
      throw new Error(`Invalid description: ${skill}`);
  }
  if (
    readdirSync(path.join(root, 'docs')).filter((x) => x.endsWith('.md')).length !== 12 ||
    readdirSync(path.join(root, 'skills')).length !== 6
  )
    throw new Error('Unexpected content inventory');
  return result;
}

/** Only installation references change; the canonical policy remains byte-for-byte intact. */
export function render(value: string, reference: string): string {
  return value
    .replaceAll('~/engineering-standards/', () => `${reference}/`)
    .replace(
      /(?<![\w/])((?:docs|templates)\/[A-Za-z0-9_-]+\.md)/g,
      (_match, relative: string) => `${reference}/${relative}`,
    );
}
