/* Main entry: theme, nav, smooth scroll, motion, hero, carousel. */
import { initHero } from './hero.js';
import { initArc } from './carousel.js';
import { initMotion } from './motion.js';
import { initRoulette } from './roulette.js';

const doc = document.documentElement;
const t = (k, v) => (window.i18n ? window.i18n.t(k, v) : k);
const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const reduced = mqReduced.matches;
if (!reduced) doc.classList.add('motion-ok');

/* ---------- Theme ---------- */
function currentTheme() {
  const t = doc.getAttribute('data-theme');
  if (t) return t;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function syncThemeButton() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  btn.setAttribute('aria-label', t(next === 'dark' ? 'theme.toDark' : 'theme.toLight'));
}
document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  doc.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked */ }
  syncThemeButton();
});
syncThemeButton();

/* ---------- AI tools: tiles that expand to what I made with each tool ---------- */
document.querySelectorAll('.tool__btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    btn.closest('.tool')?.classList.toggle('is-open', open);
  });
});

/* ---------- AI tools: logo files dropped into assets/logos/ (svg first, then png) ---------- */
document.querySelectorAll('[data-logo-file]').forEach((slot) => {
  const slug = slot.dataset.logoFile;
  const tryLoad = (exts) => {
    if (!exts.length) return;
    const img = new Image();
    img.className = 'tool__file';
    img.alt = '';
    img.decoding = 'async';
    img.onload = () => { slot.appendChild(img); slot.classList.add('has-file'); };
    img.onerror = () => tryLoad(exts.slice(1));
    img.src = `assets/logos/${slug}.${exts[0]}`;
  };
  tryLoad(['svg', 'png']);
});

/* ---------- Smooth scroll (Lenis) ---------- */
let lenis = null;
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

if (!reduced && window.Lenis) {
  lenis = new window.Lenis({ duration: 1.1, smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 1.4 });
  if (gsap && ScrollTrigger) {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
}
window.__lenis = lenis;

function navOffset() { return (document.getElementById('nav')?.offsetHeight || 64) + 8; }
function scrollToTarget(el, immediate = false) {
  if (!el) return;
  // Absolute target; Lenis would otherwise add CSS scroll-padding and scroll-margin on top of the offset.
  const y = Math.max(0, el.getBoundingClientRect().top + window.scrollY - navOffset());
  if (lenis) lenis.scrollTo(y, { immediate, duration: 1.2 });
  else window.scrollTo({ top: y, behavior: immediate || reduced ? 'auto' : 'smooth' });
}

document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
  const id = a.getAttribute('href').slice(1);
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  closeMenu();
  // open a closed <details> ancestor if the target sits inside one
  const det = el.closest('details');
  if (det && !det.open) det.open = true;
  scrollToTarget(el);
  history.pushState(null, '', `#${id}`);
  // move focus for keyboard and screen reader users
  const focusable = el.matches('a, button, [tabindex]') ? el : el;
  if (!focusable.hasAttribute('tabindex') && !focusable.matches('a, button, input, select, textarea')) focusable.setAttribute('tabindex', '-1');
  focusable.focus({ preventScroll: true });
});
window.addEventListener('popstate', () => {
  const el = location.hash ? document.getElementById(location.hash.slice(1)) : document.getElementById('home');
  scrollToTarget(el, true);
});

/* ---------- Mobile menu ---------- */
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menu-btn');
function closeMenu() {
  if (!nav?.classList.contains('is-open')) return;
  nav.classList.remove('is-open');
  menuBtn?.setAttribute('aria-expanded', 'false');
}
menuBtn?.addEventListener('click', () => {
  const open = !nav.classList.contains('is-open');
  nav.classList.toggle('is-open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  if (open) nav.querySelector('#nav-list a')?.focus();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav?.classList.contains('is-open')) { closeMenu(); menuBtn?.focus(); }
});

/* ---------- Active section indicator + progress ---------- */
const navLinks = [...document.querySelectorAll('[data-nav]')];
const indicator = document.querySelector('.nav__indicator');
const linkFor = (id) => navLinks.find((l) => l.dataset.nav === id);
function setActive(id) {
  navLinks.forEach((l) => l.removeAttribute('aria-current'));
  const link = linkFor(id);
  if (!link || !indicator) { if (indicator) indicator.style.setProperty('--iw', '0'); return; }
  link.setAttribute('aria-current', 'true');
  const ul = link.closest('ul');
  const lr = link.getBoundingClientRect();
  const ur = ul.getBoundingClientRect();
  indicator.style.setProperty('--ix', `${lr.left - ur.left + 12}px`);
  indicator.style.setProperty('--iw', `${Math.max(0, lr.width - 24)}`);
}
const sectionIds = ['work', 'cases', 'ai', 'about', 'cv', 'contact'];
const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
let activeId = null;
function updateActive() {
  const y = window.innerHeight * 0.35;
  let current = null;
  for (const s of sections) {
    const r = s.getBoundingClientRect();
    if (r.top <= y && r.bottom > y) { current = s.id; break; }
  }
  if (current !== activeId) { activeId = current; setActive(current); }
}
const progress = document.querySelector('.nav__progress span');
/* Background glow: each light drifts slowly against the scroll around its own position. */
const glows = reduced ? [] : [...document.querySelectorAll('.glow__b')].map((el, i) => ({ el, k: [0.16, -0.1, 0.12, -0.09][i] || 0.1, y: 0 }));
function measureGlows() { glows.forEach((g) => { g.el.style.transform = ''; const r = g.el.getBoundingClientRect(); g.y = r.top + window.scrollY + r.height / 2; }); }
function driftGlows() {
  const mid = window.scrollY + window.innerHeight / 2;
  for (const g of glows) {
    const d = Math.max(-1400, Math.min(1400, mid - g.y));
    g.el.style.transform = `translate3d(0, ${(d * g.k).toFixed(1)}px, 0)`;
  }
}
let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    updateActive();
    driftGlows();
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.setProperty('--p', max > 0 ? (window.scrollY / max).toFixed(4) : '0');
    }
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', () => { activeId = null; measureGlows(); onScroll(); });
window.addEventListener('load', () => { measureGlows(); onScroll(); });

/* ---------- Copy e-mail ---------- */
document.getElementById('copy-mail')?.addEventListener('click', async (e) => {
  const text = e.currentTarget.dataset.copy;
  const out = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(text);
    out.textContent = t('copy.ok');
  } catch (err) {
    out.textContent = t('copy.fail');
  }
  setTimeout(() => { out.textContent = ''; }, 3000);
});

/* ---------- 3D model: load on demand ---------- */
document.getElementById('model-load')?.addEventListener('click', () => {
  const wrap = document.getElementById('model-embed');
  if (!wrap || wrap.classList.contains('is-loaded')) return;
  const iframe = document.createElement('iframe');
  iframe.src = 'proto/ak47/';
  iframe.title = t('model.title');
  iframe.setAttribute('allow', 'fullscreen');
  iframe.setAttribute('loading', 'eager');
  wrap.appendChild(iframe);
  wrap.classList.add('is-loaded');
  iframe.addEventListener('load', () => iframe.focus());
});

/* ---------- Custom cursor on covers (fine pointers only) ---------- */
function initCursor() {
  if (reduced || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const cursor = document.getElementById('cursor');
  if (!cursor) return;
  const label = cursor.querySelector('.cursor__label');
  let x = -200, y = -200, tx = -200, ty = -200, s = 0.3, ts = 0.3, raf = 0, on = false;
  const loop = () => {
    x += (tx - x) * 0.2; y += (ty - y) * 0.2; s += (ts - s) * 0.18;
    cursor.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${s.toFixed(3)})`;
    if (Math.abs(tx - x) > 0.1 || Math.abs(ts - s) > 0.001) raf = requestAnimationFrame(loop); else raf = 0;
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };
  document.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    tx = e.clientX; ty = e.clientY;
    const t = e.target.closest('[data-cursor]');
    const dragging = document.getElementById('arc-viewport')?.classList.contains('is-dragging');
    if (t && !dragging) {
      if (!on) { on = true; cursor.classList.add('is-on'); }
      label.textContent = t.dataset.cursor;
      ts = 1;
    } else if (on) { on = false; cursor.classList.remove('is-on'); ts = 0.3; }
    kick();
  }, { passive: true });
}

/* ---------- Magnetic buttons ---------- */
function initMagnetic() {
  if (reduced || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    // Uses the `translate` property, not `transform`: nothing else writes it, so leaving always
    // returns the button exactly to its place (CSS transition on `translate` makes the return smooth).
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2 - (parseFloat(el.style.translate) || 0);
      const cy = r.top + r.height / 2 - (parseFloat((el.style.translate || '').split(' ')[1]) || 0);
      const dx = (e.clientX - cx) * 0.18;
      const dy = (e.clientY - cy) * 0.28;
      el.style.translate = `${dx.toFixed(1)}px ${dy.toFixed(1)}px`;
    });
    el.addEventListener('pointerleave', () => { el.style.translate = ''; });
  });
}

/* ---------- Language switch: refresh what scripts wrote and what depends on text width ---------- */
document.addEventListener('langchange', () => {
  syncThemeButton();
  const frame = document.querySelector('#model-embed iframe');
  if (frame) frame.title = t('model.title');
  activeId = null;
  measureGlows();
  onScroll();
  if (ScrollTrigger) ScrollTrigger.refresh();
});

/* ---------- Boot ---------- */
async function boot() {
  try { await document.fonts.ready; } catch (e) { /* ignore */ }
  const roulette = initRoulette();
  initHero({ reduced, lenis, onRoulette: (api) => roulette.attach(api) });
  initArc({ reduced });
  initMotion({ reduced, gsap, ScrollTrigger, lenis });
  initCursor();
  initMagnetic();

  measureGlows();
  onScroll();
  if (location.hash) {
    const el = document.getElementById(location.hash.slice(1));
    if (el) {
      const det = el.closest('details');
      if (det) det.open = true;
      requestAnimationFrame(() => scrollToTarget(el, true));
    }
  }
}
boot();
