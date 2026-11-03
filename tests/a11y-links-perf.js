const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path');
const ROOT = require('path').resolve(__dirname, '..');
(async () => {
  const axeSrc = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
  const b = await chromium.launch();
  const report = {};
  for (const scheme of ['light', 'dark']) {
    const p = await b.newPage({ viewport: { width: 1440, height: 900 }, colorScheme: scheme });
    const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    p.on('response', r => { if (r.status() >= 400) errs.push('HTTP ' + r.status() + ' ' + r.url()); });
    await p.goto((process.env.BASE || 'http://localhost:8000') + '/', { waitUntil: 'load' }); await p.waitForTimeout(2000);
    // scroll through to trigger reveals
    const H = await p.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < H; y += 700) { await p.evaluate(y => window.__lenis ? window.__lenis.scrollTo(y, { immediate: true }) : window.scrollTo(0, y), y); await p.waitForTimeout(120); }
    await p.waitForTimeout(1500);
    // open all accordions + galleries for checking
    await p.evaluate(() => document.querySelectorAll('details').forEach(d => d.open = true)); await p.waitForTimeout(1500);
    await p.addScriptTag({ content: axeSrc });
    const r1 = await p.evaluate(async () => { const r = await axe.run(document, { resultTypes: ['violations'] }); return r.violations.map(v => ({ id: v.id, impact: v.impact, n: v.nodes.length, help: v.help, t: v.nodes.slice(0, 4).map(n => n.target.join(' ') + ' :: ' + (n.failureSummary||'').slice(0,160)) })); });
    await p.evaluate(() => document.querySelectorAll('.pk-switch input').forEach(i => i.click()));
    await p.waitForTimeout(500);
    const r2 = await p.evaluate(async () => { const r = await axe.run(document, { resultTypes: ['violations'] }); return r.violations.map(v => ({ id: v.id, impact: v.impact, n: v.nodes.length, t: v.nodes.slice(0, 3).map(n => n.target.join(' ')) })); });
    report[scheme] = { page: r1, gallery: r2, errs };
    await p.close();
  }
  // links
  const html = fs.readFileSync(ROOT + '/index.html', 'utf8');
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
  const dup = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]).filter((v, i, a) => a.indexOf(v) !== i);
  const badHash = [...html.matchAll(/href="#([^"]*)"/g)].map(m => m[1]).filter(h => h && !ids.has(h));
  const refs = [...html.matchAll(/(?:src|href|srcset|poster)="([^"]+)"/g)].flatMap(m => m[1].split(',').map(s => s.trim().split(' ')[0])).filter(u => u && !u.startsWith('#') && !/^(https?:|mailto:|data:)/.test(u));
  const missing = [...new Set(refs)].filter(u => !fs.existsSync(path.join(ROOT, u.split('?')[0].replace(/\/$/, '/index.html'))));
  report.links = { badHash, dup, missing, checked: new Set(refs).size };
  // long tasks during scroll
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto((process.env.BASE || 'http://localhost:8000') + '/', { waitUntil: 'load' }); await p.waitForTimeout(2500);
  await p.evaluate(() => { window.__lt = []; new PerformanceObserver(l => l.getEntries().forEach(e => window.__lt.push(Math.round(e.duration)))).observe({ type: 'longtask', buffered: false }); });
  for (let i = 0; i < 60; i++) { await p.mouse.wheel(0, 400); await p.waitForTimeout(80); }
  await p.waitForTimeout(1000);
  report.longtasks = await p.evaluate(() => window.__lt);
  await p.close();
  // reduced motion: everything visible?
  const r = await b.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  await r.goto((process.env.BASE || 'http://localhost:8000') + '/', { waitUntil: 'load' }); await r.waitForTimeout(1500);
  report.reduced = await r.evaluate(() => {
    const hidden = [...document.querySelectorAll('main *')].filter(el => { const cs = getComputedStyle(el); return cs.opacity === '0' && el.offsetParent && !el.closest('[hidden],.sr-only,.pk__tile-frame') && el.textContent.trim(); }).slice(0, 10).map(el => el.className || el.tagName);
    return { lenis: document.documentElement.classList.contains('lenis'), hidden, cylBuilt: document.getElementById('cyl').classList.contains('is-built'), pins: document.querySelectorAll('.pin-spacer').length };
  });
  console.log(JSON.stringify(report, null, 1));
  await b.close();
})();
