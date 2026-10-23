import { readFile, writeFile, readdir } from 'node:fs/promises';
import { resolve, sep } from 'node:path';

// Remove CSS round trips on every static entry page, including noindex pages.
// Keep the historical script name so existing build commands remain compatible.
const dist = resolve('dist');
async function htmlEntries(directory = '') {
  const entries = await readdir(resolve(dist, directory), { withFileTypes: true });
  const files = await Promise.all(entries.map(entry => {
    const relative = directory ? `${directory}/${entry.name}` : entry.name;
    return entry.isDirectory() ? htmlEntries(relative) : entry.name.endsWith('.html') ? [relative] : [];
  }));
  return files.flat();
}
for (const entry of await htmlEntries()) {
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
