// usage: node shoot.js outdir width theme [sections...]
const { chromium } = require('playwright');
(async () => {
  const [outArg, w = '1440', theme = 'light', ...secs] = process.argv.slice(2);
  const out = outArg || require('path').join(__dirname, 'out'); require('fs').mkdirSync(out, { recursive: true });
  const width = +w; const height = width < 500 ? 844 : width < 1000 ? 1024 : 900;
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width, height }, deviceScaleFactor: 1, colorScheme: theme, reducedMotion: process.env.RM ? 'reduce' : 'no-preference', isMobile: width < 500, hasTouch: width < 500 });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push('pageerror: ' + e.message));
  p.on('console', m => { if (['error','warning'].includes(m.type())) errs.push(m.type() + ': ' + m.text()); });
  p.on('requestfailed', r => errs.push('reqfail: ' + r.url()));
  p.on('response', r => { if (r.status() >= 400) errs.push('HTTP ' + r.status() + ' ' + r.url()); });
  await p.goto((process.env.BASE || 'http://localhost:8000') + '/', { waitUntil: 'load' });
  await p.waitForTimeout(2500);
  await p.screenshot({ path: `${out}/${w}-${theme}-00-hero.png` });
  const list = secs.length ? secs : ['work','basko-clean','ksk-pretor','journeys','ksk-3d-model','ksk-video','ksk-booking','livingroom','livingroom-booking','psychologist-site','training-plans','ebook','ai','exploring','this-portfolio','about','cv','contact'];
  let i = 1;
  for (const id of list) {
    await p.evaluate((id) => { const el = document.getElementById(id); const l = window.__lenis; const y = el.getBoundingClientRect().top + window.scrollY - 72; if (l) l.scrollTo(y, { immediate: true }); else window.scrollTo(0, y); }, id);
    await p.waitForTimeout(1400);
    await p.screenshot({ path: `${out}/${w}-${theme}-${String(i++).padStart(2,'0')}-${id}.png` });
  }
  console.log(JSON.stringify(errs, null, 1));
  await b.close();
})();
