import { readFile, writeFile } from 'node:fs/promises';
import { resolve, sep } from 'node:path';

// Keep shared styles cacheable on other pages, while removing the extra
// render-blocking round trips from the mobile landing page.
const dist = resolve('dist');
const home = resolve(dist, 'index.html');
let html = await readFile(home, 'utf8');
const links = [...html.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*>/g)];
for (const [link] of links) {
  const href = link.match(/\bhref="([^"?]+\.css)"/)?.[1];
  if (!href?.startsWith('/_astro/')) continue;
  const path = resolve(dist, `.${href}`);
  if (!path.startsWith(`${dist}${sep}`)) throw new Error('Invalid stylesheet path');
  const css = await readFile(path, 'utf8');
  if (/<\/style/i.test(css)) throw new Error('Unsafe inline stylesheet content');
  html = html.replace(link, () => `<style>${css}</style>`);
}
await writeFile(home, html);
console.log(`Homepage styles inlined: ${links.length} render-blocking request(s) removed.`);
