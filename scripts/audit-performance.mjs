// npm install --prefix /tmp/nixia-performance-tools lighthouse@13.5.0
// LIGHTHOUSE_DIR=/tmp/nixia-performance-tools/node_modules node scripts/audit-performance.mjs [live|local] [report.json]
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createServer } from 'node:http';
import { gzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';

const mode = process.argv[2] || 'live';
if (!['live', 'local'].includes(mode)) throw new Error('Expected live or local');
const dependencyRoot = process.env.LIGHTHOUSE_DIR;
if (!dependencyRoot) throw new Error('Set LIGHTHOUSE_DIR to an isolated node_modules containing lighthouse@13.5.0');
const { default: lighthouse } = await import(pathToFileURL(path.resolve(dependencyRoot, 'lighthouse/core/index.js')));
const chromeLauncher = await import(pathToFileURL(path.resolve(dependencyRoot, 'chrome-launcher/dist/index.js')));
const { default: desktop } = await import(pathToFileURL(path.resolve(dependencyRoot, 'lighthouse/core/config/desktop-config.js')));
const inventory = JSON.parse(await fs.readFile('docs/agent/audits/2026-10-23-pagespeed-desktop.json', 'utf8'));
const output = process.argv[3] || `docs/agent/audits/2026-10-23-lighthouse-desktop-${mode}.json`;
let report;
try { report = JSON.parse(await fs.readFile(output, 'utf8')); }
catch { report = { date: '2026-10-23', tool: 'Lighthouse CLI (not Google-hosted PageSpeed Insights)', mode, strategy: 'desktop', threshold: 93, status: 'in_progress', pages: [] }; }
const dist = path.resolve(process.env.AUDIT_DIST || 'dist');
let server;
let origin = 'https://nixiafabric.com';
if (mode === 'local') {
  server = createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const file = path.resolve(dist, `.${pathname.endsWith('/') ? pathname + 'index.html' : pathname}`);
      if (!file.startsWith(dist + path.sep)) throw new Error('Invalid path');
      let data = await fs.readFile(file);
      const type = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.mp4': 'video/mp4' }[path.extname(file)] || 'application/octet-stream';
      const headers = { 'Content-Type': type, 'Cache-Control': 'public, max-age=0, must-revalidate' };
      if (/html|css|javascript/.test(type)) { data = gzipSync(data); headers['Content-Encoding'] = 'gzip'; }
      headers['Content-Length'] = data.length;
      res.writeHead(200, headers).end(data);
    } catch { res.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  origin = `http://127.0.0.1:${server.address().port}`;
}
let chrome;
try {
  chrome = await chromeLauncher.launch({ chromePath: process.env.CHROME_PATH, chromeFlags: ['--headless', '--no-first-run'] });
  const filter = process.env.AUDIT_PATH;
  for (const page of inventory.pages.filter(p => !filter || p.path === filter)) {
    const previous = report.pages.find(p => p.path === page.path);
    if (previous?.status === 'measured' && process.env.AUDIT_FORCE !== '1') continue;
    let entry = { path: page.path, url: page.url, testedUrl: origin + page.path, noindex: page.noindex, errorDocument: page.expected404, measuredAt: new Date().toISOString() };
    if (mode === 'local') {
      const html = await fs.readFile(path.join(dist, page.path.endsWith('/') ? page.path + 'index.html' : page.path));
      entry.htmlSha256 = createHash('sha256').update(html).digest('hex');
    }
    if (previous) entry.previousMeasurements = [...(previous.previousMeasurements || []), { measuredAt: previous.measuredAt, score: previous.score, metrics: previous.metrics, htmlSha256: previous.htmlSha256 }];
    {
      try {
        const { lhr } = await lighthouse(origin + page.path, { port: chrome.port, onlyCategories: ['performance'], logLevel: 'error' }, desktop);
        const metrics = lhr.audits.metrics?.details?.items?.[0];
        entry = { ...entry, status: lhr.runtimeError ? 'failed' : 'measured', score: lhr.categories.performance.score === null ? null : Math.round(lhr.categories.performance.score * 100), lighthouseVersion: lhr.lighthouseVersion, userAgent: lhr.environment.hostUserAgent, settings: { formFactor: lhr.configSettings.formFactor, throttlingMethod: lhr.configSettings.throttlingMethod, throttling: lhr.configSettings.throttling, screenEmulation: lhr.configSettings.screenEmulation }, runtimeError: lhr.runtimeError, warnings: lhr.runWarnings, metrics: metrics && { fcp: metrics.firstContentfulPaint, lcp: metrics.largestContentfulPaint, speedIndex: metrics.speedIndex, tbt: metrics.totalBlockingTime, cls: metrics.cumulativeLayoutShift, observedTtfb: metrics.timeToFirstByte }, issues: Object.entries(lhr.audits).filter(([id,a]) => a.score !== null && a.score < 1 && (a.details || a.numericValue)).map(([id,a]) => ({ id, title: a.title, value: a.displayValue, savings: a.metricSavings, details: /insight|server-response/.test(id) ? a.details : undefined })) };
      } catch (error) { entry = { ...entry, status: 'failed', score: null, error: error.message }; }
    }
    report.pages = report.pages.filter(p => p.path !== page.path).concat(entry);
    await fs.writeFile(output, JSON.stringify(report, null, 2) + '\n');
    console.log(`${report.pages.length}/${inventory.pages.length} ${entry.path} ${entry.status} ${entry.score ?? '-'}`);
  }
  report.status = report.pages.length === inventory.pages.length && report.pages.every(p => p.status === 'measured') ? 'completed' : 'incomplete';
  report.summary = { measured: report.pages.filter(p => p.status === 'measured').length, belowThreshold: report.pages.filter(p => p.status === 'measured' && p.score < 93).map(p => ({ path: p.path, score: p.score })), failed: report.pages.filter(p => p.status === 'failed').map(p => p.path) };
  await fs.writeFile(output, JSON.stringify(report, null, 2) + '\n');
} finally { if (chrome) await chrome.kill(); if (server) server.close(); }
