/* KSK Pretor – German group booking page. Concept prototype.
   Built from the landing page requirements in the market research:
   packages in EUR, booking on the page, conversion tracking question.
   Prices and package contents are sample values. */
import { esc, wait, upcomingDays, isoDay, fmt, field, setFieldError, errorSummary, createFrame, spinner } from './proto-kit.js';

const L = 'de-DE';
const MIN = 12, MAX = 30;
const PKGS = [
  { id: 'basis', name: 'Basis', price: 49, desc: 'Sicherheitseinweisung, Schießen mit Instruktor' },
  { id: 'team', name: 'Team', price: 69, desc: 'Mehr Waffen, Team-Wettbewerb' },
  { id: 'premium', name: 'Premium', price: 99, desc: 'Alles aus Team, dazu Schießsimulator' },
];
const SOURCES = ['Google-Suche', 'Instagram', 'Facebook', 'Empfehlung', 'Event-Agentur', 'Sonstiges'];
const days = upcomingDays(14, 7);
const SLOTS = ['10:00', '13:00', '16:00'];
const BOOKED = new Set([`${isoDay(days[1])} 13:00`, `${isoDay(days[3])} 10:00`, `${isoDay(days[3])} 16:00`, `${isoDay(days[8])} 13:00`]);
const eur = (n) => n.toLocaleString(L, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
const LABELS = { firma: 'Firma', name: 'Vor- und Nachname', email: 'E-Mail', tel: 'Telefon', quelle: 'Wie haben Sie von uns erfahren?', quelleText: 'Bitte angeben', termin: 'Termin' };

function initial() {
  return { step: 'paket', pkg: 'team', size: 16, date: null, slot: null, c: { firma: '', name: '', email: '', tel: '', quelle: '', quelleText: '' }, errors: {}, showSummary: false, send: 'idle', ref: '' };
}
const mode = (s) => (s.size < MIN ? 'small' : s.size > MAX ? 'quote' : 'ok');
const pkgOf = (s) => PKGS.find((p) => p.id === s.pkg) || PKGS[1];
function stepOf(s) { return s.step === 'sent' ? 'pruefen' : s.step; }

function validateContact(c, keys = ['name', 'email', 'tel', 'quelle', 'quelleText']) {
  const e = {};
  if (keys.includes('name') && c.name.trim().length < 2) e.name = 'Bitte geben Sie Ihren Namen ein.';
  if (keys.includes('email')) {
    if (!c.email.trim()) e.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c.email.trim())) e.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein, z. B. name@firma.de.';
  }
  if (keys.includes('tel')) {
    const t = c.tel.replace(/[\s/()-]/g, '');
    if (!t) e.tel = 'Bitte geben Sie eine Telefonnummer ein.';
    else if (!/^\+?\d{8,15}$/.test(t)) e.tel = 'Bitte nur Ziffern, mit Ländervorwahl, z. B. +49 30 1234567.';
  }
  if (keys.includes('quelle') && !c.quelle) e.quelle = 'Bitte wählen Sie eine Antwort aus.';
  if (keys.includes('quelleText') && c.quelle === 'Sonstiges' && !c.quelleText.trim()) e.quelleText = 'Bitte kurz angeben, wo Sie von uns gehört haben.';
  return e;
}

const H = (t, sub = '') => `<header class="pk-h"><h5 class="pk-h__t" tabindex="-1" data-focus="heading">${esc(t)}</h5>${sub ? `<p class="pk-h__s">${sub}</p>` : ''}</header>`;
const back = (to) => `<button type="button" class="pk-btn pk-btn--ghost" data-go="${to}"><span aria-hidden="true">←</span> Zurück</button>`;
const dayLong = (iso) => fmt(days.find((d) => isoDay(d) === iso) || new Date(iso), L, { weekday: 'long', day: 'numeric', month: 'long' });

function priceBox(s) {
  const p = pkgOf(s);
  const m = mode(s);
  const total = p.price * s.size;
  return `<aside class="ksk-price" aria-label="Preisübersicht">
    <div class="ksk-price__row"><span>Paket</span><b>${esc(p.name)}</b></div>
    <div class="ksk-price__row"><span>Personen</span><b>${s.size}</b></div>
    ${s.date ? `<div class="ksk-price__row"><span>Termin</span><b>${esc(fmt(new Date(s.date), L, { day: '2-digit', month: '2-digit' }))}${s.slot ? `, ${s.slot}` : ''}</b></div>` : ''}
    <div class="ksk-price__row ksk-price__pp"><span>Pro Person</span><b>${m === 'quote' ? 'auf Anfrage' : eur(p.price)}</b></div>
    <div class="ksk-price__row ksk-price__total"><span>Gruppe</span><b aria-live="polite">${m === 'quote' ? 'auf Anfrage' : m === 'small' ? '–' : eur(total)}</b></div>
    <p class="ksk-price__note" lang="en">Sample prices for the prototype</p>
  </aside>`;
}

function render(s) {
  let main = '';
  const m = mode(s);
  switch (s.step) {
    case 'paket':
      main = `${H('Gruppenevent auf der Schießanlage', 'Wählen Sie ein Paket. Alle Preise in Euro, pro Person.')}
        <fieldset class="pk-fs"><legend class="sr-only">Paket</legend><div class="ksk-pkgs">
        ${PKGS.map((p) => `<label class="ksk-pkg"><input type="radio" name="pkg" value="${p.id}" ${s.pkg === p.id ? 'checked' : ''}>
          <span class="ksk-pkg__n">${esc(p.name)}</span><span class="ksk-pkg__p">${eur(p.price)} <small>/ Person</small></span><span class="ksk-pkg__d">${esc(p.desc)}</span></label>`).join('')}
        </div></fieldset>
        <p class="pk-note">Für Gruppen von ${MIN} bis ${MAX} Personen. Paketinhalte sind Platzhalter.</p>
        <div class="pk-actions"><span></span><button type="button" class="pk-btn" data-to="gruppe">Weiter <span aria-hidden="true">→</span></button></div>`;
      break;
    case 'gruppe': {
      const dayBtns = days.map((d) => {
        const iso = isoDay(d); const sel = s.date === iso;
        return `<li><button type="button" class="pk-day${sel ? ' is-sel' : ''}" data-date="${iso}" aria-pressed="${sel}">
          <span class="pk-day__w" aria-hidden="true">${esc(fmt(d, L, { weekday: 'short' }))}</span><span class="pk-day__d" aria-hidden="true">${d.getDate()}</span><span class="pk-day__m" aria-hidden="true">${esc(fmt(d, L, { month: 'short' }))}</span><span class="sr-only">${esc(fmt(d, L, { weekday: 'long', day: 'numeric', month: 'long' }))}</span></button></li>`;
      }).join('');
      const slots = s.date ? `<fieldset class="pk-fs"><legend class="ksk-label">Uhrzeit am ${esc(dayLong(s.date))}</legend><ul class="pk-times">${SLOTS.map((t) => {
        const booked = BOOKED.has(`${s.date} ${t}`); const sel = s.slot === t;
        return `<li><button type="button" class="pk-time${sel ? ' is-sel' : ''}" data-slot="${t}" ${booked ? 'disabled' : ''} aria-pressed="${sel}" >${t}${booked ? '<span class="sr-only">, ausgebucht</span>' : ''}</button></li>`;
      }).join('')}</ul></fieldset>` : '';
      const msg = m === 'small'
        ? `<div class="ksk-msg" role="status"><p><b>Unter ${MIN} Personen?</b> Diese Seite ist für Gruppen. Kleinere Gruppen buchen über die Standardbuchung.</p></div>`
        : m === 'quote'
          ? `<div class="ksk-msg" role="status"><p><b>Über ${MAX} Personen.</b> Für große Gruppen erstellen wir ein individuelles Angebot. Den Termin können Sie trotzdem schon wählen.</p></div>`
          : '';
      main = `${H('Gruppe und Termin')}
        <div class="ksk-section">
          <label class="ksk-label" for="ksk-size">Anzahl der Personen</label>
          <div class="ksk-size__ctl">
            <button type="button" class="ksk-size__btn" data-size="-1" aria-label="Eine Person weniger">−</button>
            <div class="pk-field"><input id="ksk-size" type="number" inputmode="numeric" min="1" max="99" value="${s.size}" aria-describedby="ksk-size-hint"></div>
            <button type="button" class="ksk-size__btn" data-size="1" aria-label="Eine Person mehr">+</button>
            <input type="range" min="${MIN}" max="${MAX + 5}" value="${Math.min(Math.max(s.size, MIN), MAX + 5)}" aria-label="Anzahl der Personen, Schieberegler" data-range>
          </div>
          <p class="pk-field__hint" id="ksk-size-hint">${MIN} bis ${MAX} Personen. Preis pro Person und für die Gruppe stehen rechts.</p>
          ${msg}
        </div>
        <div class="ksk-section">
          ${s.showSummary && s.errors.termin ? `<div class="pk-summary" role="alert" tabindex="-1" data-focus="summary"><p class="pk-summary__t">Bitte prüfen:</p><p>${esc(s.errors.termin)}</p></div>` : ''}
          <p class="ksk-label" id="ksk-date-l">Datum</p>
          <ul class="pk-days" aria-labelledby="ksk-date-l">${dayBtns}</ul>
          ${slots}
        </div>
        <div class="pk-actions">${back('paket')}<button type="button" class="pk-btn" data-to="kontakt" ${m === 'small' ? 'disabled' : ''}>${m === 'quote' ? 'Individuelles Angebot anfragen' : 'Weiter'} <span aria-hidden="true">→</span></button></div>`;
      break;
    }
    case 'kontakt': {
      const e = s.errors;
      main = `${H(m === 'quote' ? 'Angebot anfragen' : 'Kontaktdaten', 'Wir bestätigen Termin und Preis per E-Mail.')}
        ${s.showSummary ? errorSummary(e, LABELS, 'Bitte korrigieren Sie:') : ''}
        <form class="pk-form" novalidate data-form="kontakt">
          ${field({ id: 'firma', label: LABELS.firma, value: s.c.firma, hint: 'Für die Rechnung, z. B. bei Firmenevents oder Agenturen.', autocomplete: 'organization', locale: 'de' })}
          ${field({ id: 'name', label: LABELS.name, value: s.c.name, error: e.name, required: true, autocomplete: 'name', locale: 'de' })}
          ${field({ id: 'email', label: LABELS.email, type: 'email', value: s.c.email, error: e.email, required: true, autocomplete: 'email', locale: 'de' })}
          ${field({ id: 'tel', label: LABELS.tel, type: 'tel', value: s.c.tel, error: e.tel, required: true, autocomplete: 'tel', inputmode: 'tel', hint: 'Mit Ländervorwahl, z. B. +49.', locale: 'de' })}
          <div class="pk-field${e.quelle ? ' has-error' : ''}" data-field="quelle">
            <label for="quelle">${esc(LABELS.quelle)}</label>
            <select id="quelle" name="quelle" required aria-required="true" ${e.quelle ? 'aria-invalid="true" aria-describedby="quelle-err"' : ''}>
              <option value="">Bitte auswählen</option>
              ${SOURCES.map((o) => `<option ${s.c.quelle === o ? 'selected' : ''}>${esc(o)}</option>`).join('')}
            </select>
            <p class="pk-field__err" id="quelle-err" ${e.quelle ? '' : 'hidden'}><span aria-hidden="true">!</span> <span class="pk-field__err-t">${esc(e.quelle || '')}</span></p>
          </div>
          ${s.c.quelle === 'Sonstiges' ? field({ id: 'quelleText', label: LABELS.quelleText, value: s.c.quelleText, error: e.quelleText, required: true, locale: 'de' }) : ''}
          <div class="pk-actions">${back('gruppe')}<button type="submit" class="pk-btn">Prüfen <span aria-hidden="true">→</span></button></div>
        </form>`;
      break;
    }
    case 'pruefen': {
      const p = pkgOf(s); const sending = s.send === 'loading'; const failed = s.send === 'error';
      main = `${H('Anfrage prüfen')}
        ${failed ? `<div class="pk-state pk-state--error" role="alert"><p class="pk-state__t">Die Anfrage wurde nicht gesendet.</p><p>Die Verbindung wurde unterbrochen. Ihre Angaben bleiben erhalten. Bitte versuchen Sie es erneut.</p></div>` : ''}
        <dl class="pk-review">
          <div><dt>Paket</dt><dd>${esc(p.name)}, ${m === 'quote' ? 'Preis auf Anfrage' : `${eur(p.price)} pro Person`}</dd><dd><button type="button" class="pk-link" data-go="paket" ${sending ? 'disabled' : ''}>Ändern<span class="sr-only"> Paket</span></button></dd></div>
          <div><dt>Gruppe</dt><dd>${s.size} Personen${m === 'ok' ? `, gesamt ${eur(p.price * s.size)}` : ''}</dd><dd><button type="button" class="pk-link" data-go="gruppe" ${sending ? 'disabled' : ''}>Ändern<span class="sr-only"> Gruppe</span></button></dd></div>
          <div><dt>Termin</dt><dd>${s.date ? `${esc(dayLong(s.date))}, ${esc(s.slot || '')}` : '–'}</dd><dd><button type="button" class="pk-link" data-go="gruppe" ${sending ? 'disabled' : ''}>Ändern<span class="sr-only"> Termin</span></button></dd></div>
          <div><dt>Kontakt</dt><dd>${esc(s.c.name || 'Julia Becker')}${s.c.firma ? `, ${esc(s.c.firma)}` : ''}<br><span class="pk-muted">${esc(s.c.email || 'julia.becker@firma.de')} · ${esc(s.c.tel || '+49 30 1234567')}</span></dd><dd><button type="button" class="pk-link" data-go="kontakt" ${sending ? 'disabled' : ''}>Ändern<span class="sr-only"> Kontakt</span></button></dd></div>
        </dl>
        <div class="pk-actions">${back('kontakt')}<button type="button" class="pk-btn${sending ? ' is-busy' : ''}" data-send ${sending ? 'aria-disabled="true"' : ''}>${sending ? `${spinner('Wird gesendet')} Wird gesendet…` : failed ? 'Erneut senden' : m === 'quote' ? 'Angebot anfragen' : 'Anfrage senden'}</button></div>`;
      break;
    }
    case 'sent':
      main = `<div class="pk-done"><span class="pk-done__icon" aria-hidden="true">✓</span>
        ${H(m === 'quote' ? 'Angebotsanfrage gesendet' : 'Anfrage gesendet', `Vorgangsnummer <b>${esc(s.ref || 'KSK-2611')}</b>. Wir melden uns per E-Mail an ${esc(s.c.email || 'julia.becker@firma.de')}.`)}
        <p class="pk-note">Termin und Preis werden mit unserer Antwort verbindlich.</p>
        <div class="pk-row"><button type="button" class="pk-btn pk-btn--ghost" data-restart>Neue Anfrage</button></div></div>`;
      break;
    default: main = '';
  }
  return `<div class="ksk-grid"><div class="ksk-main">${main}</div>${priceBox(s)}</div>`;
}

function bind(el, api) {
  const go = (step, patch = {}) => api.set({ step, showSummary: false, ...patch });
  el.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => go(b.dataset.go)));
  el.querySelectorAll('input[name="pkg"]').forEach((r) => r.addEventListener('change', () => api.set({ pkg: r.value }, { focus: `input[value="${r.value}"]` })));
  el.querySelector('[data-to="gruppe"]')?.addEventListener('click', () => go('gruppe'));
  el.querySelector('[data-to="kontakt"]')?.addEventListener('click', () => {
    const s = api.state;
    if (!s.date || !s.slot) { api.set({ errors: { termin: s.date ? 'Bitte wählen Sie eine Uhrzeit.' : 'Bitte wählen Sie ein Datum und eine Uhrzeit.' }, showSummary: true }, { focus: 'summary' }); return; }
    go('kontakt', { errors: {} });
  });
  const setSize = (n, focusSel) => {
    const v = Math.max(1, Math.min(99, n || 1));
    api.set({ size: v }, { focus: focusSel });
    api.announce(v < MIN ? `${v} Personen, unter ${MIN}` : v > MAX ? `${v} Personen, individuelles Angebot` : `${v} Personen, gesamt ${eur(pkgOf(api.state).price * v)}`);
  };
  el.querySelectorAll('[data-size]').forEach((b) => b.addEventListener('click', () => setSize(api.state.size + +b.dataset.size, `[data-size="${b.dataset.size}"]`)));
  el.querySelector('#ksk-size')?.addEventListener('change', (e) => setSize(parseInt(e.target.value, 10), '#ksk-size'));
  el.querySelector('[data-range]')?.addEventListener('input', (e) => setSize(+e.target.value, '[data-range]'));
  el.querySelectorAll('[data-date]').forEach((b) => b.addEventListener('click', () => api.set({ date: b.dataset.date, slot: null, showSummary: false }, { focus: `[data-date="${b.dataset.date}"]` })));
  el.querySelectorAll('[data-slot]').forEach((b) => b.addEventListener('click', () => api.set({ slot: b.dataset.slot, showSummary: false }, { focus: `[data-slot="${b.dataset.slot}"]` })));

  const form = el.querySelector('form[data-form="kontakt"]');
  if (form) {
    form.addEventListener('input', (e) => { const k = e.target.name; if (k) api.set({ c: { ...api.state.c, [k]: e.target.value } }, { render: false }); });
    form.addEventListener('change', (e) => {
      if (e.target.name === 'quelle') {
        api.set({ c: { ...api.state.c, quelle: e.target.value }, errors: { ...api.state.errors, quelle: undefined } }, { focus: '#quelle' });
      }
    });
    form.addEventListener('focusout', (e) => {
      const k = e.target.name; if (!k || k === 'firma' || k === 'quelle') return;
      if (!e.target.value && !api.state.showSummary) return;
      setFieldError(el, k, validateContact(api.state.c, [k])[k] || '');
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const errors = validateContact(api.state.c);
      if (Object.keys(errors).length) { api.set({ errors, showSummary: true }, { focus: 'summary' }); return; }
      go('pruefen', { errors: {}, send: 'idle' });
    });
  }
  el.querySelector('[data-send]')?.addEventListener('click', async () => {
    if (api.state.send === 'loading') return;
    api.set({ send: 'loading' }, { focus: '[data-send]' });
    api.announce('Anfrage wird gesendet');
    await wait(1200);
    if (api.state.step !== 'pruefen') return;
    if (api.netFail) { api.set({ send: 'error' }, { focus: 'heading' }); api.announce('Anfrage nicht gesendet'); return; }
    go('sent', { send: 'idle', ref: `KSK-${Math.floor(1000 + Math.random() * 9000)}` });
    api.announce('Anfrage gesendet');
  });
  el.querySelector('[data-restart]')?.addEventListener('click', () => api.set(initial()));
}

const D = isoDay(days[4]);
const C = { firma: 'Becker Consulting GmbH', name: 'Julia Becker', email: 'julia.becker@firma.de', tel: '+49 30 1234567', quelle: 'Google-Suche', quelleText: '' };
const gallery = [
  { label: 'Paket wählen (EUR, pro Person)', state: { step: 'paket' } },
  { label: 'Gruppe und Termin', state: { step: 'gruppe', size: 16, date: D, slot: '13:00' } },
  { label: 'Unter 12 Personen: Weiter gesperrt', state: { step: 'gruppe', size: 8 } },
  { label: 'Über 30 Personen: individuelles Angebot', state: { step: 'gruppe', size: 34, date: D } },
  { label: 'Termin fehlt', state: { step: 'gruppe', size: 16, showSummary: true, errors: { termin: 'Bitte wählen Sie ein Datum und eine Uhrzeit.' } } },
  { label: 'Kontaktdaten, leer', state: { step: 'kontakt', size: 16, date: D, slot: '13:00' } },
  { label: 'Kontaktdaten mit Fehlern', state: { step: 'kontakt', size: 16, date: D, slot: '13:00', showSummary: true, c: { ...C, email: 'julia@', tel: '030', quelle: '' }, errors: { email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein, z. B. name@firma.de.', tel: 'Bitte nur Ziffern, mit Ländervorwahl, z. B. +49 30 1234567.', quelle: 'Bitte wählen Sie eine Antwort aus.' } } },
  { label: '„Sonstiges“ öffnet ein Textfeld', state: { step: 'kontakt', size: 16, date: D, slot: '13:00', c: { ...C, quelle: 'Sonstiges' } } },
  { label: 'Anfrage prüfen', state: { step: 'pruefen', size: 16, date: D, slot: '13:00', c: C } },
  { label: 'Wird gesendet', state: { step: 'pruefen', size: 16, date: D, slot: '13:00', c: C, send: 'loading' } },
  { label: 'Senden fehlgeschlagen, Daten bleiben', state: { step: 'pruefen', size: 16, date: D, slot: '13:00', c: C, send: 'error' } },
  { label: 'Anfrage gesendet', state: { step: 'sent', size: 16, date: D, slot: '13:00', c: C, ref: 'KSK-2611' } },
  { label: 'Angebotsanfrage gesendet (über 30)', state: { step: 'sent', size: 34, date: D, slot: '10:00', c: C, ref: 'KSK-2612' } },
];

export function init(root) {
  if (!root) return;
  createFrame(root, {
    title: 'KSK Pretor · Gruppenbuchung (DE)',
    steps: [{ key: 'paket', label: 'Paket' }, { key: 'gruppe', label: 'Gruppe & Termin' }, { key: 'kontakt', label: 'Kontakt' }, { key: 'pruefen', label: 'Prüfen' }],
    stepOf, render, bind, gallery, initial,
    strings: { progress: 'Buchungsfortschritt', done: 'erledigt' },
    onTileOpen(g, api) {
      if (g.state.send === 'loading') setTimeout(() => { if (api.state.send === 'loading') api.set({ step: 'sent', send: 'idle', ref: 'KSK-2611' }); }, 1400);
    },
  });
}
