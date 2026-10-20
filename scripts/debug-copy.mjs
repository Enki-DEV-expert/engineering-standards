import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const root = mkdtempSync(path.join(os.tmpdir(), 'ges-copy-repro-'));
try {
  for (const name of ['ascii', 'project space é']) {
    const source = path.join(root, name);
    const destination = `${source}-copy`;
    const script = `
      const fs = require('node:fs');
      const [source, destination] = process.argv.slice(1);
      fs.mkdirSync(source);
      fs.writeFileSync(require('node:path').join(source, 'file.txt'), 'fixture');
      fs.cpSync(source, destination, { recursive: true });
      console.log('copy completed');
    `;
    const result = spawnSync(process.execPath, ['-e', script, source, destination], {
      encoding: 'utf8',
    });
    console.log(
      JSON.stringify({
        node: process.version,
        name,
        status: result.status,
        signal: result.signal,
        stdout: result.stdout,
        stderr: result.stderr,
      }),
    );
  }
} finally {
  rmSync(root, { recursive: true, force: true });
}
