/* Small toolkit shared by the two booking prototypes:
   escaping, dates, fields with validation messages, the frame with a
   step indicator, the "Show all states" gallery and the network switch. */

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const wait = (ms) => new Promise((r) => setTimeout(r, ms));
let uid = 0;
export const nextId = (p) => `${p}-${++uid}`;

/* ---------- dates ---------- */
export function upcomingDays(n, startOffset = 1) {
  const out = [];
  const base = new Date();
  base.setHours(12, 0, 0, 0);
  for (let i = 0; i < n; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + startOffset + i);
    out.push(d);
  }
  return out;
}
export const isoDay = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export const fmt = (d, locale, opts) => d.toLocaleDateString(locale, opts);

/* ---------- fields ---------- */
export function field({ id, label, type = 'text', value = '', error = '', hint = '', required = false, autocomplete = '', inputmode = '', attrs = '', locale = 'en' }) {
  const describedBy = [hint ? `${id}-hint` : '', error ? `${id}-err` : ''].filter(Boolean).join(' ');
  const req = required ? '' : `<span class="pk-field__opt">${locale === 'de' ? 'optional' : 'optional'}</span>`;
  const control = type === 'textarea'
    ? `<textarea id="${id}" name="${id}" rows="3" ${describedBy ? `aria-describedby="${describedBy}"` : ''} ${error ? 'aria-invalid="true"' : ''} ${attrs}>${esc(value)}</textarea>`
    : `<input id="${id}" name="${id}" type="${type}" value="${esc(value)}" ${required ? 'required aria-required="true"' : ''} ${autocomplete ? `autocomplete="${autocomplete}"` : ''} ${inputmode ? `inputmode="${inputmode}"` : ''} ${describedBy ? `aria-describedby="${describedBy}"` : ''} ${error ? 'aria-invalid="true"' : ''} ${attrs}>`;
  return `<div class="pk-field${error ? ' has-error' : ''}" data-field="${id}">
    <label for="${id}">${esc(label)} ${req}</label>
    ${hint ? `<p class="pk-field__hint" id="${id}-hint">${esc(hint)}</p>` : ''}
    ${control}
    <p class="pk-field__err" id="${id}-err" ${error ? '' : 'hidden'}><span aria-hidden="true">!</span> <span class="pk-field__err-t">${esc(error)}</span></p>
  </div>`;
}

/* Update one field's error in place (keeps focus where the user moved it). */
export function setFieldError(root, id, msg) {
  const wrap = root.querySelector(`[data-field="${id}"]`);
  if (!wrap) return;
  const input = wrap.querySelector('input, textarea, select');
  const err = wrap.querySelector('.pk-field__err');
  const hint = wrap.querySelector('.pk-field__hint');
  wrap.classList.toggle('has-error', !!msg);
  if (msg) {
    err.hidden = false;
    err.querySelector('.pk-field__err-t').textContent = msg;
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', [hint ? hint.id : '', err.id].filter(Boolean).join(' '));
  } else {
    err.hidden = true;
    input.removeAttribute('aria-invalid');
    if (hint) input.setAttribute('aria-describedby', hint.id); else input.removeAttribute('aria-describedby');
  }
}

export function errorSummary(errors, labels, title) {
  const keys = Object.keys(errors).filter((k) => errors[k]);
  if (!keys.length) return '';
  return `<div class="pk-summary" role="alert" tabindex="-1" data-focus="summary">
    <p class="pk-summary__t">${esc(title)}</p>
    <ul>${keys.map((k) => `<li><a href="#${k}" data-jump="${k}">${esc(labels[k] || k)}: ${esc(errors[k])}</a></li>`).join('')}</ul>
  </div>`;
}

/* ---------- frame ---------- */
/**
 * createFrame(root, cfg)
 * cfg: { title, steps:[{key,label}], stepOf(state), render(state, live) -> html,
 *        bind(screenEl, api), gallery:[{label, state}], initial(), strings }
 */
export function createFrame(root, cfg) {
  const s = cfg.strings;
  const ids = { gallery: nextId('pk-gal'), net: nextId('pk-net'), title: nextId('pk-title') };
  root.classList.add('pk');
  root.innerHTML = `
    <div class="pk__bar">
      <div class="pk__brand">
        <span class="pk__dot" aria-hidden="true"></span>
        <p class="pk__name" id="${ids.title}">${esc(cfg.title)}</p>
      </div>
      <label class="pk-switch">
        <input type="checkbox" role="switch" id="${ids.gallery}" aria-controls="${ids.gallery}-panel">
        <span class="pk-switch__track" aria-hidden="true"><span class="pk-switch__thumb"></span></span>
        <span class="pk-switch__label" lang="en">Show all states</span>
      </label>
    </div>
    <ol class="pk__steps" aria-label="${esc(s.progress)}"></ol>
    <div class="pk__screen" data-screen></div>
    <div class="pk__gallery" id="${ids.gallery}-panel" hidden lang="en">
      <p class="pk__gallery-intro">Every state of this flow. Select a tile to open that state in the prototype.</p>
      <ul class="pk__tiles"></ul>
    </div>
    <div class="pk__tools" lang="en">
      <label class="pk-check"><input type="checkbox" id="${ids.net}"> <span>Simulate network failure</span></label>
      <button type="button" class="pk-link" data-reset>Reset prototype</button>
      <p class="pk__live sr-only" aria-live="polite" data-live></p>
    </div>`;

  const screen = root.querySelector('[data-screen]');
  const stepsEl = root.querySelector('.pk__steps');
  const gallerySwitch = root.querySelector(`#${ids.gallery}`);
  const galleryPanel = root.querySelector(`#${ids.gallery}-panel`);
  const tiles = root.querySelector('.pk__tiles');
  const netSwitch = root.querySelector(`#${ids.net}`);
  const live = root.querySelector('[data-live]');

  let state = cfg.initial();
  const api = {
    get state() { return state; },
    get netFail() { return netSwitch.checked; },
    set(patch, opts = {}) {
      state = { ...state, ...patch };
      if (opts.render !== false) draw(opts.focus);
    },
    announce(msg) { live.textContent = ''; requestAnimationFrame(() => { live.textContent = msg; }); },
    root,
  };

  function drawSteps() {
    const cur = cfg.stepOf(state);
    const idx = cfg.steps.findIndex((x) => x.key === cur);
    stepsEl.innerHTML = cfg.steps.map((st, i) => {
      const st8 = i < idx ? 'done' : i === idx ? 'current' : 'todo';
      return `<li class="pk__step is-${st8}" ${i === idx ? 'aria-current="step"' : ''}><span class="pk__step-n" aria-hidden="true">${i < idx ? '✓' : i + 1}</span><span class="pk__step-l">${esc(st.label)}<span class="sr-only">${i < idx ? `, ${s.done}` : ''}</span></span></li>`;
    }).join('');
  }

  function draw(focus = 'heading') {
    drawSteps();
    screen.innerHTML = cfg.render(state, true);
    screen.classList.remove('is-enter');
    void screen.offsetWidth; // restart the enter animation
    screen.classList.add('is-enter');
    cfg.bind(screen, api);
    if (focus === 'heading') {
      const h = screen.querySelector('[data-focus="heading"]');
      if (h && root.contains(document.activeElement)) h.focus({ preventScroll: true });
    } else if (focus === 'summary') {
      screen.querySelector('[data-focus="summary"]')?.focus({ preventScroll: true });
    } else if (typeof focus === 'string' && focus) {
      screen.querySelector(focus)?.focus({ preventScroll: true });
    }
  }

  function buildGallery() {
    tiles.innerHTML = '';
    cfg.gallery.forEach((g, i) => {
      const li = document.createElement('li');
      li.className = 'pk__tile';
      li.innerHTML = `<button type="button" class="pk__tile-btn" data-tile="${i}">
          <span class="pk__tile-n">${String(i + 1).padStart(2, '0')}</span><span class="pk__tile-l">${esc(g.label)}</span>
        </button>
        <div class="pk__tile-frame" aria-hidden="true"><div class="pk__tile-inner"></div></div>`;
      const inner = li.querySelector('.pk__tile-inner');
      inner.innerHTML = cfg.render({ ...cfg.initial(), ...g.state }, false);
      // previews are pictures only: no ids, no focus, no interaction
      inner.querySelectorAll('[id]').forEach((n) => n.removeAttribute('id'));
      inner.querySelectorAll('[for],[aria-describedby],[aria-labelledby],[data-focus],[role]').forEach((n) => { n.removeAttribute('for'); n.removeAttribute('aria-describedby'); n.removeAttribute('aria-labelledby'); n.removeAttribute('data-focus'); n.removeAttribute('role'); });
      inner.querySelectorAll('a,button,input,textarea,select,[tabindex]').forEach((n) => n.setAttribute('tabindex', '-1'));
      inner.inert = true;
      tiles.appendChild(li);
    });
  }

  gallerySwitch.addEventListener('change', () => {
    const on = gallerySwitch.checked;
    if (on && !tiles.children.length) buildGallery();
    galleryPanel.hidden = !on;
    screen.hidden = on;
    stepsEl.hidden = on;
    root.classList.toggle('is-gallery', on);
    api.announce(on ? 'Showing all states' : 'Back to the prototype');
  });
  tiles.addEventListener('click', (e) => {
    const b = e.target.closest('[data-tile]');
    if (!b) return;
    const g = cfg.gallery[+b.dataset.tile];
    state = { ...cfg.initial(), ...g.state };
    gallerySwitch.checked = false;
    galleryPanel.hidden = true; screen.hidden = false; stepsEl.hidden = false;
    root.classList.remove('is-gallery');
    draw(false);
    screen.querySelector('[data-focus="heading"]')?.focus({ preventScroll: true });
    if (cfg.onTileOpen) cfg.onTileOpen(g, api);
  });
  root.querySelector('[data-reset]').addEventListener('click', () => {
    state = cfg.initial();
    netSwitch.checked = false;
    draw('heading');
    api.announce('Prototype reset');
  });
  // error summary links: focus the field without page jump handling by the main router
  root.addEventListener('click', (e) => {
    const a = e.target.closest('[data-jump]');
    if (!a) return;
    e.preventDefault(); e.stopPropagation();
    root.querySelector(`#${a.dataset.jump}`)?.focus();
  }, true);

  draw(false);
  return api;
}

export function spinner(label) {
  return `<span class="pk-spin" aria-hidden="true"></span><span class="sr-only">${esc(label)}</span>`;
}
