const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  await p.goto((process.env.BASE || 'http://localhost:8000') + '/', { waitUntil: 'load' }); await p.waitForTimeout(1500);
  const log = [];
  const act = async () => p.evaluate(() => { const a = document.activeElement; return (a.tagName + (a.id ? '#' + a.id : '') + ' ' + (a.className||'') + ' "' + (a.textContent||'').trim().slice(0, 30) + '"'); });
  // skip link first
  await p.keyboard.press('Tab'); log.push('1st tab: ' + await act());
  // carousel keyboard
  await p.evaluate(() => document.getElementById('arc-viewport').focus());
  for (let i=0;i<3;i++){ await p.keyboard.press('ArrowRight'); await p.waitForTimeout(700); }
  log.push('arc status: ' + await p.evaluate(() => document.getElementById('arc-status').textContent));
  console.log(log.join('\n'));
  await b.close();
})();
