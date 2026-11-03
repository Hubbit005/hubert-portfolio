const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  await p.goto((process.env.BASE || 'http://localhost:8000') + '/', { waitUntil: 'load' }); await p.waitForTimeout(1500);
  const log = [];
  const act = async () => p.evaluate(() => { const a = document.activeElement; return (a.tagName + (a.id ? '#' + a.id : '') + ' ' + (a.className||'') + ' "' + (a.textContent||'').trim().slice(0, 30) + '"'); });
  // skip link first
  await p.keyboard.press('Tab'); log.push('1st tab: ' + await act());
  // focus into living prototype: tab until inside it
  await p.evaluate(() => document.querySelector('#livingroom-booking .sub__lead').scrollIntoView());
  await p.evaluate(() => { const s = document.querySelector('#proto-living'); s.setAttribute('tabindex','-1'); s.focus(); });
  const tabTo = async (pred, max = 60) => { for (let i = 0; i < max; i++) { await p.keyboard.press('Tab'); const ok = await p.evaluate(pred); if (ok) return true; } return false; };
  log.push('to day: ' + await tabTo(() => document.activeElement.matches('.pk-day:not([disabled])')));
  await p.keyboard.press('Tab'); await p.keyboard.press('Enter'); log.push('picked: ' + await act());
  log.push('to continue: ' + await tabTo(() => document.activeElement.matches('[data-next="party"]')));
  await p.keyboard.press('Enter'); await p.waitForTimeout(300); log.push('heading focus: ' + await act());
  log.push('to party 2: ' + await tabTo(() => document.activeElement.matches('[data-party="2"]'))); await p.keyboard.press('Enter');
  log.push('to continue2: ' + await tabTo(() => document.activeElement.matches('[data-next="time"]')));
  await p.keyboard.press('Enter'); await p.waitForTimeout(1300); log.push('after load focus: ' + await act());
  await p.keyboard.press('Enter'); log.push('time selected: ' + await p.evaluate(() => !!document.querySelector('#proto-living .pk-time.is-sel')));
  log.push('to continue3: ' + await tabTo(() => document.activeElement.matches('[data-next="details"]'))); await p.keyboard.press('Enter'); await p.waitForTimeout(300);
  log.push('to name: ' + await tabTo(() => document.activeElement.id === 'name'));
  await p.keyboard.type('Jan Kowalski'); await p.keyboard.press('Tab'); await p.keyboard.type('12'); await p.keyboard.press('Tab');
  log.push('phone error shown on blur: ' + await p.evaluate(() => document.querySelector('[data-field="phone"]').classList.contains('has-error')));
  log.push('focus after blur: ' + await act());
  await p.keyboard.type('jan@example.com');
  await p.evaluate(() => document.getElementById('phone').focus()); await p.keyboard.press('Control+A'); await p.keyboard.type('600 100 200');
  log.push('to submit: ' + await tabTo(() => document.activeElement.matches('#proto-living button[type=submit]'))); await p.keyboard.press('Enter'); await p.waitForTimeout(300);
  log.push('review heading: ' + await act());
  log.push('to confirm: ' + await tabTo(() => document.activeElement.matches('[data-confirm]'))); await p.keyboard.press('Enter'); await p.waitForTimeout(1600);
  log.push('done: ' + await p.evaluate(() => document.querySelector('#proto-living .pk-h__t').textContent));
  // carousel keyboard
  await p.evaluate(() => document.getElementById('arc-viewport').focus());
  for (let i=0;i<3;i++){ await p.keyboard.press('ArrowRight'); await p.waitForTimeout(700); }
  log.push('arc status: ' + await p.evaluate(() => document.getElementById('arc-status').textContent));
  console.log(log.join('\n'));
  await b.close();
})();
