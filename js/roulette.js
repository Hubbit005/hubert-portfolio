/* "Spin my work": a project roulette inside the 3D word in the hero.
   This module owns the buttons, the result card and the announcements.
   The wheel itself lives in the hero's three.js scene (hero.js calls attach() with its controls).
   Without WebGL or with reduced motion the same button opens a simple panel that draws a project
   at random, without the wheel animation, and shows the same result card. */

export const PROJECTS = [
  { name: 'Basko Clean', label: 'BASKO CLEAN', cat: 'Website & marketing', img: 'assets/cards/basko', href: '#basko-clean' },
  { name: 'KSK Pretor', label: 'KSK PRETOR', cat: 'Marketing & video', img: 'assets/cards/ksk', href: '#ksk-pretor' },
  { name: '3D Model', label: '3D MODEL', cat: 'Interactive 3D', img: 'assets/cards/ak', href: '#ksk-3d-model' },
  { name: 'Livingroom', label: 'LIVINGROOM', cat: 'Restaurant', img: 'assets/cards/living', href: '#livingroom' },
  { name: 'Agata Patelka', label: 'AGATA PATELKA', cat: 'Psychologist · in progress', img: null, href: '#psychologist-site' },
  { name: 'Training plans', label: 'TRAINING PLANS', cat: 'A page per client', img: 'assets/cards/training', href: '#training-plans' },
];

export function initRoulette() {
  const hero = document.getElementById('home');
  const trigger = document.getElementById('roulette-open');
  const ui = document.getElementById('roulette');
  if (!hero || !trigger || !ui) return { attach() {} };
  const bar = document.getElementById('roulette-bar');
  const spinBtn = document.getElementById('roulette-spin');
  const backBtn = document.getElementById('roulette-back');
  const status = document.getElementById('roulette-status');
  const card = document.getElementById('roulette-card');
  const cover = document.getElementById('roulette-cover');
  const nameEl = document.getElementById('roulette-name');
  const catEl = document.getElementById('roulette-cat');
  const goBtn = document.getElementById('roulette-go');
  const againBtn = document.getElementById('roulette-again');
  const back2Btn = document.getElementById('roulette-back2');
  const hint = ui.querySelector('.roulette__hint');

  let wheel = null;      // 3D controls from hero.js, when WebGL runs
  let isOpen = false;
  let fallback = false;
  let spinning = false;
  let lastPick = -1;

  const say = (t) => { status.textContent = ''; requestAnimationFrame(() => { status.textContent = t; }); };

  function setSpinning(on) {
    spinning = on;
    spinBtn.setAttribute('aria-disabled', String(on));
    ui.classList.toggle('is-spinning', on);
  }

  function showResult(i) {
    const p = PROJECTS[i];
    if (!p) return;
    lastPick = i;
    setSpinning(false);
    cover.innerHTML = p.img
      ? `<picture><source type="image/webp" srcset="${p.img}.webp"><img src="${p.img}.jpg" alt="" width="600" height="800" decoding="async"></picture>`
      : '<span class="roulette__type" aria-hidden="true">Book<br>a&nbsp;session</span>';
    cover.classList.toggle('is-type', !p.img);
    nameEl.textContent = p.name;
    catEl.textContent = p.cat;
    goBtn.setAttribute('href', p.href);
    bar.hidden = true;
    card.hidden = false;
    card.classList.remove('is-in'); void card.offsetWidth; card.classList.add('is-in');
    say(`Result: ${p.name}. ${p.cat}.`);
    goBtn.focus({ preventScroll: true });
  }

  function hideResult() {
    if (!card.hidden && card.contains(document.activeElement)) spinBtn.focus({ preventScroll: true });
    card.hidden = true;
    bar.hidden = false;
  }

  function open() {
    if (isOpen) return;
    isOpen = true;
    fallback = !wheel;
    ui.hidden = false;
    ui.classList.toggle('is-fallback', fallback);
    hero.classList.add('is-roulette');
    hero.classList.toggle('is-roulette-fb', fallback);
    trigger.setAttribute('aria-expanded', 'true');
    hideResult();
    if (fallback) {
      hint.textContent = 'A random pick from my projects';
      draw();
    } else {
      hint.textContent = 'Drag the wheel or press Spin';
      wheel.open();
      say('Project roulette. Press Spin or drag the wheel. Escape goes back.');
      spinBtn.focus({ preventScroll: true });
    }
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    setSpinning(false);
    hero.classList.remove('is-roulette', 'is-roulette-fb');
    trigger.setAttribute('aria-expanded', 'false');
    ui.hidden = true;
    card.hidden = true;
    if (wheel && !fallback) wheel.close();
    trigger.focus({ preventScroll: true });
  }

  // Fallback: draw a project at once, never the same one twice in a row.
  function draw() {
    let i = Math.floor(Math.random() * PROJECTS.length);
    if (i === lastPick) i = (i + 1 + Math.floor(Math.random() * (PROJECTS.length - 1))) % PROJECTS.length;
    showResult(i);
  }

  function spin() {
    if (spinning) return;
    if (fallback) { draw(); return; }
    hideResult();
    wheel.spin();
  }

  trigger.addEventListener('click', () => (isOpen ? close() : open()));
  spinBtn.addEventListener('click', spin);
  againBtn.addEventListener('click', spin);
  backBtn.addEventListener('click', close);
  back2Btn.addEventListener('click', close);
  // Opening a project leaves the roulette; main.js scrolls to the case study.
  goBtn.addEventListener('click', () => {
    isOpen = false;
    hero.classList.remove('is-roulette', 'is-roulette-fb');
    trigger.setAttribute('aria-expanded', 'false');
    ui.hidden = true;
    card.hidden = true;
    if (wheel && !fallback) wheel.close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) { e.preventDefault(); close(); }
  });

  return {
    attach(api) {
      wheel = api;
      api.onSpinStart = () => { hideResult(); setSpinning(true); say('Spinning'); };
      api.onResult = (i) => { if (isOpen) showResult(i); };
    },
  };
}
