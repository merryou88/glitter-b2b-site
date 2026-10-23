import { readFile, writeFile } from 'node:fs/promises';
import { resolve, sep } from 'node:path';

// Keep shared styles cacheable on other pages, while removing the extra
// render-blocking round trips from the home, catalog and optimized detail page.
const dist = resolve('dist');
for (const entry of [
  'index.html',
  'products/index.html',
  'products/iridescent-laser-hot-stamping-stretch-ice-silk/index.html',
]) {
  const page = resolve(dist, entry);
  let html = await readFile(page, 'utf8');
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
  await writeFile(page, html);
  console.log(`${entry} styles inlined: ${links.length} render-blocking request(s) removed.`);
}
