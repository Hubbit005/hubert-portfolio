const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const w of [360, 390, 768]) {
    const p = await b.newPage({ viewport: { width: w, height: 800 }, isMobile: w < 500, hasTouch: w < 500 });
    await p.goto((process.env.BASE || 'http://localhost:8000') + '/', { waitUntil: 'load' }); await p.waitForTimeout(1500);
    const r = await p.evaluate((w) => {
      const out = [];
      document.querySelectorAll('main *, header *').forEach(el => {
        if (el.closest('.arc__viewport, .hero__stage, .pk__tile-frame, .sr-only, .table-wrap')) return;
        const rc = el.getBoundingClientRect();
        if (rc.width && rc.right > w + 1 && getComputedStyle(el).position !== 'fixed') out.push(`${el.tagName}.${(el.className||'').toString().split(' ')[0]} r=${Math.round(rc.right)} "${(el.textContent||'').trim().slice(0,30)}"`);
      });
      return { docW: document.documentElement.scrollWidth, list: out.slice(0, 25) };
    }, w);
    console.log(w, JSON.stringify(r, null, 1));
    await p.close();
  }
  await b.close();
})();
