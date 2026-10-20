import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { packageRoot, readContent, render } from '../dist/content.js';
import { renderSkill } from '../dist/installer.js';

const destination = path.join(packageRoot, 'dist', 'claude-plugin');
for (const [name, content] of readContent()) {
  const file = path.join(destination, name);
  const reference = path.relative(path.dirname(file), destination).split(path.sep).join('/') || '.';
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(
    file,
    name.endsWith('SKILL.md') ? renderSkill(content, reference) : render(content, reference),
  );
}
mkdirSync(path.join(destination, '.claude-plugin'), { recursive: true });
writeFileSync(
  path.join(destination, '.claude-plugin/plugin.json'),
  `${JSON.stringify(
    {
      name: 'global-engineering-standards',
      version: '0.1.1',
      description:
        'Six engineering review and implementation skills. Install policy through the standalone CLI.',
      author: {
        name: 'Nirox Morais',
        url: 'https://www.linkedin.com/in/nirox-morais-87784b1ba/',
      },
      license: 'MIT',
    },
    null,
    2,
  )}\n`,
);
mkdirSync(path.join(packageRoot, '.claude-plugin'), { recursive: true });
writeFileSync(
  path.join(packageRoot, '.claude-plugin/marketplace.json'),
  `${JSON.stringify(
    {
      name: 'enki-engineering-standards',
      metadata: {
        description: 'Six engineering implementation and review skills for Claude Code.',
      },
      owner: { name: 'Enki-DEV-expert' },
      plugins: [
        {
          name: 'global-engineering-standards',
          source: './dist/claude-plugin',
          description: 'Engineering standards skills',
          version: '0.1.1',
        },
      ],
    },
    null,
    2,
  )}\n`,
);
console.log('Built standalone CLI and optional local Claude plugin artifact.');
