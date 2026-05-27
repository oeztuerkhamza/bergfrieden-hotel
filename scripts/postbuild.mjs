// Post-build: prepare output for GitHub Pages.
// 1. Copy index.csr.html to 404.html so unknown URLs load the SPA fallback.
// 2. Ensure .nojekyll exists (GH Pages would otherwise process the output via Jekyll).
import { copyFile, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const browser = join(here, '..', 'dist', 'hbf-hotel-web', 'browser');

const csr = join(browser, 'index.csr.html');
const notFound = join(browser, '404.html');
await copyFile(csr, notFound);
console.log(`✓ Copied index.csr.html → 404.html (SPA fallback for GitHub Pages)`);

const nojekyll = join(browser, '.nojekyll');
try {
  await access(nojekyll);
  console.log('✓ .nojekyll present');
} catch {
  await writeFile(nojekyll, '');
  console.log('✓ Created .nojekyll');
}
