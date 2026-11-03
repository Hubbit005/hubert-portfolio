/* Hero: the word HUBERT wrapped on a cylinder, rotating around the Y axis.
   Front glyphs are filled, back glyphs show as a mirrored outline.
   Pure CSS 3D. Only the cylinder's transform changes per frame. */

const WORD = 'HUBERT';
const SEP = '+';
const TRACK = 0.035;     // gap between glyphs, in em
const BASE_PERIOD = 11;  // seconds per full turn at rest (before dwell)

export function initHero({ reduced, lenis }) {
  const stage = document.getElementById('hero-stage');
  const cyl = document.getElementById('cyl');
  if (!stage || !cyl) return;

  const bar = stage.querySelector('.hero__bar');
  // Two copies of the word around the cylinder: one is always readable in front.
  const seq = [...WORD, ' ', SEP, ' ', ...WORD, ' ', SEP, ' '];

  // Measure glyph widths in em, with the real font.
  const probe = document.createElement('span');
  probe.style.cssText = 'position:absolute;visibility:hidden;white-space:pre;left:-9999px;top:0';
  cyl.appendChild(probe);
  const fs = parseFloat(getComputedStyle(cyl).fontSize) || 100;
  const widths = seq.map((ch) => {
    probe.textContent = ch === ' ' ? ' ' : ch;
    return probe.getBoundingClientRect().width / fs;
  });
  probe.remove();

  const arcs = widths.map((w) => w + TRACK);
  const total = arcs.reduce((a, b) => a + b, 0);
  const R = total / (Math.PI * 2);            // radius in em

  const frag = document.createDocumentFragment();
  let cum = 0;
  const angles = [];
  seq.forEach((ch, i) => {
    const mid = cum + arcs[i] / 2;
    const a = mid / R;                          // radians
    angles.push(a);
    cum += arcs[i];
    if (ch === ' ') return;
    const el = document.createElement('span');
    el.className = 'cyl__ch' + (ch === SEP ? ' is-sep' : '');
    el.style.transform = `rotateY(${a}rad) translateZ(${R}em) translateX(${-widths[i] / 2}em)`;
    if (ch === SEP) el.style.fontWeight = '500';
    const f = document.createElement('span');
    f.className = 'cyl__f'; f.textContent = ch;
    const o = document.createElement('span');
    o.className = 'cyl__o'; o.textContent = ch;
    o.style.transform = 'translateZ(-0.01em)';
    el.append(o, f);
    frag.appendChild(el);
  });

  // Front angle: centre of the first word.
  const firstMid = (angles[0] + angles[WORD.length - 1]) / 2;
  const theta0 = -firstMid;

  if (reduced) {
    // Keep the static, perfectly readable word. No rotation.
    return { destroy() {} };
  }

  cyl.appendChild(frag);
  cyl.classList.add('is-built');

  let theta = theta0;
  let omega = 0;               // current speed, rad/s
  const omegaBase = (Math.PI * 2) / BASE_PERIOD;
  let boost = 7;               // entrance spin, eases to 1
  let hover = 0, hoverT = 0;
  let scrollV = 0;
  let tiltX = 0, tiltXT = 0, tiltY = 0, tiltYT = 0;
  let running = true;
  let last = performance.now();
  let raf = 0;

  // Entrance
  const enterStart = performance.now();
  if (bar) {
    bar.style.transform = 'translateZ(0) scaleY(0)';
    requestAnimationFrame(() => {
      bar.style.transition = 'transform 1100ms cubic-bezier(.16,1,.3,1)';
      bar.style.transform = 'translateZ(0) scaleY(1)';
    });
  }

  stage.addEventListener('pointerenter', () => { hoverT = 1; });
  stage.addEventListener('pointerleave', () => { hoverT = 0; tiltXT = 0; tiltYT = 0; });
  stage.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = stage.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    tiltXT = -ny * 10;  // degrees
    tiltYT = nx * 6;
  });
  if (lenis) lenis.on('scroll', ({ velocity }) => { scrollV = Math.min(Math.abs(velocity || 0), 60); });

  const io = new IntersectionObserver(([en]) => {
    const vis = en.isIntersecting;
    if (vis && !running) { running = true; last = performance.now(); raf = requestAnimationFrame(tick); }
    if (!vis) running = false;
  });
  io.observe(stage);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) running = false;
    else if (!running) { running = true; last = performance.now(); raf = requestAnimationFrame(tick); }
  });

  function tick(now) {
    if (!running) return;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    const k = 1 - Math.exp(-dt * 3);
    // entrance boost decays over ~1.8s
    const te = (now - enterStart) / 1800;
    boost = te >= 1 ? 1 : 1 + 6 * Math.pow(1 - te, 3);
    hover += (hoverT - hover) * k;
    scrollV *= Math.exp(-dt * 4);
    // Dwell: slow down while a full copy of the word faces the viewer (twice per turn).
    const rel = ((theta - theta0) % Math.PI + Math.PI) % Math.PI;      // 0..π, 0 = word centred
    const dist = Math.min(rel, Math.PI - rel) / (Math.PI / 2);           // 0 at front, 1 furthest
    const dwell = boost > 1.01 ? 1 : 0.16 + 0.84 * Math.min(1, Math.pow(dist / 0.55, 2));
    const target = omegaBase * boost * dwell * (1 + hover * 1.4 + scrollV * 0.06);
    omega += (target - omega) * (1 - Math.exp(-dt * 6));
    theta -= omega * dt;
    tiltX += (tiltXT - tiltX) * k;
    tiltY += (tiltYT - tiltY) * k;
    cyl.style.transform = `rotateX(${tiltX.toFixed(3)}deg) rotateZ(${(tiltY * 0.2).toFixed(3)}deg) rotateY(${theta.toFixed(5)}rad)`;
    raf = requestAnimationFrame(tick);
  }
  cyl.style.transform = `rotateY(${theta}rad)`;
  raf = requestAnimationFrame(tick);

  return { destroy() { running = false; cancelAnimationFrame(raf); io.disconnect(); } };
}
