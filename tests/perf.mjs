// Smoothness benchmark: smooth wheel scroll top to bottom (~8 s), then 3 s of dragging the carousel.
// Records frame times (requestAnimationFrame) and long tasks (> 50 ms).
//
// usage: node tests/perf.mjs [siteRoot] [runs]
//   siteRoot  folder with index.html (default: repo root). The script serves it itself.
//   runs      how many runs; the report uses the median of each metric (default 3).
// The session's Chromium renders WebGL in software, so the numbers only compare versions.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(process.argv[2] || path.join(here, '..'));
const runs = Math.max(1, +(process.argv[3] || 3));

const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  const f = path.join(root, p);
  if (!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}/`;

function stats(deltas, longtasks) {
  const d = [...deltas].sort((a, b) => a - b);
  const mean = d.reduce((s, x) => s + x, 0) / (d.length || 1);
  const p95 = d.length ? d[Math.min(d.length - 1, Math.floor(d.length * 0.95))] : 0;
  return { frames: d.length, mean: +mean.toFixed(1), p95: +p95.toFixed(1), over33: d.filter((x) => x > 33).length, longtasks };
}

async function once(browser) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.addInitScript(() => {
    window.__perf = { on: false, last: 0, deltas: [], long: 0 };
    const tick = (t) => {
      const p = window.__perf;
      if (p.on) { if (p.last) p.deltas.push(t - p.last); p.last = t; } else p.last = 0;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    try { new PerformanceObserver((l) => { if (window.__perf.on) window.__perf.long += l.getEntries().filter((e) => e.duration > 50).length; }).observe({ type: 'longtask' }); } catch (e) { /* unsupported */ }
  });
  await page.goto(base, { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const start = () => page.evaluate(() => { Object.assign(window.__perf, { on: true, last: 0, deltas: [], long: 0 }); });
  const stop = () => page.evaluate(() => { const p = window.__perf; p.on = false; return { deltas: p.deltas, long: p.long }; });

  // Phase 1: wheel scroll from top to bottom in about 8 s (Lenis turns the wheel into smooth scroll).
  await page.mouse.move(720, 450);
  const dist = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
  const steps = 160;
  await start();
  for (let i = 0; i < steps; i++) { await page.mouse.wheel(0, dist / steps); await page.waitForTimeout(50); }
  await page.waitForTimeout(400);
  const scroll = await stop();

  // Phase 2: 3 s of dragging the carousel back and forth.
  await page.evaluate(() => {
    const el = document.getElementById('arc-viewport');
    const y = el.getBoundingClientRect().top + scrollY - 120;
    if (window.__lenis) window.__lenis.scrollTo(y, { immediate: true, force: true }); else scrollTo(0, y);
  });
  await page.waitForTimeout(800);
  const box = await page.evaluate(() => { const r = document.getElementById('arc-viewport').getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + Math.min(r.height / 2, 300) }; });
  await page.mouse.move(box.x, box.y);
  await start();
  await page.mouse.down();
  const t0 = Date.now();
  let i = 0;
  while (Date.now() - t0 < 3000) {
    const x = box.x + Math.sin(i / 12) * 420;
    await page.mouse.move(x, box.y, { steps: 1 });
    await page.waitForTimeout(16);
    i++;
  }
  await page.mouse.up();
  await page.waitForTimeout(300);
  const drag = await stop();
  await page.close();
  return { scroll: stats(scroll.deltas, scroll.long), drag: stats(drag.deltas, drag.long) };
}

const browser = await chromium.launch();
const all = [];
for (let r = 0; r < runs; r++) all.push(await once(browser));
await browser.close();
server.close();

const median = (xs) => { const s = [...xs].sort((a, b) => a - b); return s[Math.floor(s.length / 2)]; };
const summary = {};
for (const phase of ['scroll', 'drag']) {
  summary[phase] = {};
  for (const k of ['frames', 'mean', 'p95', 'over33', 'longtasks']) summary[phase][k] = median(all.map((a) => a[phase][k]));
}
console.log(JSON.stringify({ root, runs, summary, all }, null, 1));
console.log(`| scroll | ${summary.scroll.mean} | ${summary.scroll.p95} | ${summary.scroll.over33} / ${summary.scroll.frames} | ${summary.scroll.longtasks} |`);
console.log(`| drag   | ${summary.drag.mean} | ${summary.drag.p95} | ${summary.drag.over33} / ${summary.drag.frames} | ${summary.drag.longtasks} |`);
