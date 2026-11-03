/* Livingroom table booking – concept prototype.
   Flow: date → time → party size → details → review → confirmed.
   Branches: fully booked day, no free times, failed to load times,
   9+ guests → group enquiry, validation errors, sending, send failed. */
import { esc, wait, upcomingDays, isoDay, fmt, field, setFieldError, errorSummary, createFrame, spinner } from './proto-kit.js';

const L = 'en-GB';
const days = upcomingDays(14);
// Sample availability (deterministic): two fully booked days, one day with no times left, one day that fails to load once.
const FULL = new Set([isoDay(days[2]), isoDay(days[8])]);
const NO_TIMES = isoDay(days[4]);
const FLAKY = isoDay(days[6]);
const ALL_TIMES = ['12:00', '13:00', '14:00', '15:30', '17:00', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];
const TAKEN = new Set(['13:00', '18:30', '19:00', '20:00']);
let flakyFailedOnce = false;

const LABELS = { name: 'Full name', phone: 'Phone number', email: 'E-mail', notes: 'Notes for the restaurant', gname: 'Full name', gemail: 'E-mail', gphone: 'Phone number', gsize: 'Number of guests', gmsg: 'What are you planning?' };

function validate(d, keys) {
  const e = {};
  if (keys.includes('name') && (d.name || '').trim().length < 2) e.name = 'Enter your full name.';
  if (keys.includes('phone')) {
    const raw = (d.phone || '').replace(/[\s()-]/g, '');
    if (!raw) e.phone = 'Enter a phone number so the restaurant can reach you.';
    else if (!/^(\+\d{8,15}|\d{9})$/.test(raw)) e.phone = 'Enter 9 digits, or a number with a country code, for example +48 600 100 200.';
  }
  if (keys.includes('email')) {
    const v = (d.email || '').trim();
    if (!v) e.email = 'Enter an e-mail for the confirmation.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) e.email = 'Enter an e-mail like name@example.com.';
  }
  if (keys.includes('notes') && (d.notes || '').length > 200) e.notes = 'Keep notes under 200 characters.';
  return e;
}
function validateGroup(d) {
  const e = {};
  if ((d.gname || '').trim().length < 2) e.gname = 'Enter your full name.';
  const em = (d.gemail || '').trim();
  if (!em) e.gemail = 'Enter an e-mail so the restaurant can reply.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)) e.gemail = 'Enter an e-mail like name@example.com.';
  const n = parseInt(d.gsize, 10);
  if (!n) e.gsize = 'Enter the number of guests.';
  else if (n < 9) e.gsize = 'For 8 guests or fewer, book a table directly.';
  else if (n > 80) e.gsize = 'For more than 80 guests, call the restaurant.';
  return e;
}

const dayLabel = (iso) => {
  const d = days.find((x) => isoDay(x) === iso) || new Date(iso);
  return fmt(d, L, { weekday: 'long', day: 'numeric', month: 'long' });
};
const shortDay = (iso) => {
  const d = days.find((x) => isoDay(x) === iso) || new Date(iso);
  return fmt(d, L, { weekday: 'short', day: 'numeric', month: 'short' });
};

function initial() {
  return {
    step: 'date', date: null, time: null, party: null,
    times: 'idle', d: { name: '', phone: '', email: '', notes: '' }, errors: {}, showSummary: false,
    send: 'idle', ref: '', g: { gname: '', gemail: '', gphone: '', gsize: '', gmsg: '' }, gErrors: {}, gSend: 'idle',
  };
}

function stepOf(s) {
  if (s.step === 'enquiry' || s.step === 'enquirySent') return 'party';
  if (s.step === 'success') return 'review';
  return s.step;
}

const H = (t, sub = '') => `<header class="pk-h"><h5 class="pk-h__t" tabindex="-1" data-focus="heading">${esc(t)}</h5>${sub ? `<p class="pk-h__s">${sub}</p>` : ''}</header>`;
const back = (to, label = 'Back') => `<button type="button" class="pk-btn pk-btn--ghost" data-go="${to}"><span aria-hidden="true">←</span> ${label}</button>`;
const chosen = (s) => {
  const parts = [];
  if (s.date) parts.push(shortDay(s.date));
  if (s.time) parts.push(s.time);
  if (s.party) parts.push(`${s.party} ${s.party === 1 ? 'guest' : 'guests'}`);
  return parts.length ? `<p class="pk-chosen">${parts.map(esc).join(' <span aria-hidden="true">·</span> ')}</p>` : '';
};

function render(s) {
  switch (s.step) {
    case 'date': {
      const cells = days.map((d) => {
        const iso = isoDay(d);
        const full = FULL.has(iso);
        const sel = s.date === iso;
        const label = `${fmt(d, L, { weekday: 'long', day: 'numeric', month: 'long' })}${full ? ', fully booked' : ''}`;
        return `<li><button type="button" class="pk-day${sel ? ' is-sel' : ''}${full ? ' is-full' : ''}" data-date="${iso}" ${full ? 'disabled' : ''} aria-pressed="${sel}">
          <span class="pk-day__w" aria-hidden="true">${esc(fmt(d, L, { weekday: 'short' }))}</span>
          <span class="pk-day__d" aria-hidden="true">${d.getDate()}</span>
          <span class="pk-day__m" aria-hidden="true">${full ? 'Full' : esc(fmt(d, L, { month: 'short' }))}</span>
          <span class="sr-only">${esc(label)}</span>
        </button></li>`;
      }).join('');
      return `${H('Choose a date', 'Next 14 days. Crossed-out days are fully booked.')}
        <ul class="pk-days" aria-label="Dates">${cells}</ul>
        <div class="pk-actions"><span></span><button type="button" class="pk-btn" data-next="time" ${s.date ? '' : 'disabled'}>Continue <span aria-hidden="true">→</span></button></div>
        <p class="pk-tip">Try ${esc(shortDay(NO_TIMES))} (no times left) or ${esc(shortDay(FLAKY))} (fails to load once).</p>`;
    }
    case 'time': {
      let body = '';
      if (s.times === 'loading' || s.times === 'idle') {
        body = `<div class="pk-loading" role="status">${spinner('Loading free times')}<span>Checking free tables…</span></div>
          <ul class="pk-times is-skeleton" aria-hidden="true">${Array.from({ length: 8 }, () => '<li><span class="pk-skel"></span></li>').join('')}</ul>`;
      } else if (s.times === 'error') {
        body = `<div class="pk-state pk-state--error" role="alert">
            <p class="pk-state__t">We couldn't load the free times.</p>
            <p>Check your connection and try again. Your date is kept.</p>
            <button type="button" class="pk-btn" data-retry-times>Try again</button>
          </div>`;
      } else if (s.times === 'empty') {
        const next = days.find((d) => !FULL.has(isoDay(d)) && isoDay(d) > s.date && isoDay(d) !== NO_TIMES);
        body = `<div class="pk-state pk-state--empty" role="status">
            <p class="pk-state__t">No tables left on ${esc(dayLabel(s.date))}.</p>
            <p>The nearest date with free tables is ${esc(dayLabel(isoDay(next)))}.</p>
            <div class="pk-row"><button type="button" class="pk-btn" data-pick-date="${isoDay(next)}">Show ${esc(shortDay(isoDay(next)))}</button>${back('date', 'Pick another date')}</div>
          </div>`;
      } else {
        body = `<fieldset class="pk-fs"><legend class="sr-only">Free times on ${esc(dayLabel(s.date))}</legend>
          <ul class="pk-times">${ALL_TIMES.map((t) => {
            const taken = TAKEN.has(t);
            const sel = s.time === t;
            return `<li><button type="button" class="pk-time${sel ? ' is-sel' : ''}" data-time="${t}" ${taken ? 'disabled' : ''} aria-pressed="${sel}">${t}${taken ? '<span class="sr-only">, taken</span>' : ''}</button></li>`;
          }).join('')}</ul></fieldset>`;
      }
      const showNext = s.times === 'ready';
      return `${H('Choose a time', esc(dayLabel(s.date || isoDay(days[0]))))}${body}
        <div class="pk-actions">${back('date')}${showNext ? `<button type="button" class="pk-btn" data-next="party" ${s.time ? '' : 'disabled'}>Continue <span aria-hidden="true">→</span></button>` : '<span></span>'}</div>`;
    }
    case 'party': {
      const opts = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `<li><button type="button" class="pk-num${s.party === n ? ' is-sel' : ''}" data-party="${n}" aria-pressed="${s.party === n}">${n}<span class="sr-only"> ${n === 1 ? 'guest' : 'guests'}</span></button></li>`).join('');
      return `${H('How many guests?')}${chosen(s)}
        <ul class="pk-nums" aria-label="Number of guests">${opts}<li><button type="button" class="pk-num pk-num--wide" data-party="9">9 or more</button></li></ul>
        <p class="pk-note">Groups of 9 or more go through a short enquiry, so the restaurant can prepare the room.</p>
        <div class="pk-actions">${back('time')}<button type="button" class="pk-btn" data-next="details" ${s.party ? '' : 'disabled'}>Continue <span aria-hidden="true">→</span></button></div>`;
    }
    case 'details': {
      const e = s.errors;
      return `${H('Your details')}${chosen(s)}
        ${s.showSummary ? errorSummary(e, LABELS, 'Fix these to continue:') : ''}
        <form class="pk-form" novalidate data-form="details">
          ${field({ id: 'name', label: LABELS.name, value: s.d.name, error: e.name, required: true, autocomplete: 'name' })}
          ${field({ id: 'phone', label: LABELS.phone, type: 'tel', value: s.d.phone, error: e.phone, required: true, autocomplete: 'tel', inputmode: 'tel', hint: 'Polish number or with a country code. The restaurant calls only if something changes.' })}
          ${field({ id: 'email', label: LABELS.email, type: 'email', value: s.d.email, error: e.email, required: true, autocomplete: 'email', hint: 'We send the confirmation here.' })}
          ${field({ id: 'notes', label: LABELS.notes, type: 'textarea', value: s.d.notes, error: e.notes, hint: 'Allergies, a high chair, a birthday. Up to 200 characters.' })}
          <div class="pk-actions">${back('party')}<button type="submit" class="pk-btn">Review booking <span aria-hidden="true">→</span></button></div>
        </form>`;
    }
    case 'review': {
      const sending = s.send === 'loading';
      const failed = s.send === 'error';
      return `${H('Check and confirm')}
        ${failed ? `<div class="pk-state pk-state--error" role="alert"><p class="pk-state__t">The booking was not sent.</p><p>The connection dropped. Nothing was booked yet and your details are kept. Try again.</p></div>` : ''}
        <dl class="pk-review">
          <div><dt>Date</dt><dd>${esc(dayLabel(s.date || isoDay(days[0])))}</dd><dd><button type="button" class="pk-link" data-go="date" ${sending ? 'disabled' : ''}>Change<span class="sr-only"> date</span></button></dd></div>
          <div><dt>Time</dt><dd>${esc(s.time || '19:30')}</dd><dd><button type="button" class="pk-link" data-go="time" ${sending ? 'disabled' : ''}>Change<span class="sr-only"> time</span></button></dd></div>
          <div><dt>Guests</dt><dd>${esc(s.party || 2)}</dd><dd><button type="button" class="pk-link" data-go="party" ${sending ? 'disabled' : ''}>Change<span class="sr-only"> number of guests</span></button></dd></div>
          <div><dt>Name</dt><dd>${esc(s.d.name || 'Anna Nowak')}<br><span class="pk-muted">${esc(s.d.phone || '600 100 200')} · ${esc(s.d.email || 'anna@example.com')}</span></dd><dd><button type="button" class="pk-link" data-go="details" ${sending ? 'disabled' : ''}>Change<span class="sr-only"> details</span></button></dd></div>
          ${s.d.notes ? `<div><dt>Notes</dt><dd>${esc(s.d.notes)}</dd><dd></dd></div>` : ''}
        </dl>
        <div class="pk-actions">${back('details')}<button type="button" class="pk-btn${sending ? ' is-busy' : ''}" data-confirm ${sending ? 'aria-disabled="true"' : ''}>${sending ? `${spinner('Sending')} Sending…` : failed ? 'Try again' : 'Confirm booking'}</button></div>`;
    }
    case 'success': {
      return `<div class="pk-done">
        <span class="pk-done__icon" aria-hidden="true">✓</span>
        ${H('Your table is booked', `Reference <b>${esc(s.ref || 'LR-4821')}</b>. A confirmation is on its way to ${esc(s.d.email || 'anna@example.com')}.`)}
        <dl class="pk-review pk-review--compact">
          <div><dt>When</dt><dd>${esc(dayLabel(s.date || isoDay(days[0])))}, ${esc(s.time || '19:30')}</dd></div>
          <div><dt>Guests</dt><dd>${esc(s.party || 2)}</dd></div>
          <div><dt>Where</dt><dd>Livingroom, Gorzów Wielkopolski</dd></div>
        </dl>
        <div class="pk-row"><button type="button" class="pk-btn" data-ics>Add to calendar</button><button type="button" class="pk-btn pk-btn--ghost" data-restart>Make another booking</button></div>
      </div>`;
    }
    case 'enquiry': {
      const e = s.gErrors;
      const sending = s.gSend === 'loading';
      return `${H('Group enquiry, 9 or more guests', 'The restaurant replies with options for your group. Your date and time are carried over.')}
        ${chosen({ ...s, party: null })}
        ${s.showSummary ? errorSummary(e, LABELS, 'Fix these to send the enquiry:') : ''}
        ${s.gSend === 'error' ? `<div class="pk-state pk-state--error" role="alert"><p class="pk-state__t">The enquiry was not sent.</p><p>The connection dropped. Your details are kept. Try again.</p></div>` : ''}
        <form class="pk-form" novalidate data-form="enquiry">
          ${field({ id: 'gsize', label: LABELS.gsize, type: 'number', value: s.g.gsize, error: e.gsize, required: true, inputmode: 'numeric', attrs: 'min="9" max="80"' })}
          ${field({ id: 'gname', label: LABELS.gname, value: s.g.gname, error: e.gname, required: true, autocomplete: 'name' })}
          ${field({ id: 'gemail', label: LABELS.gemail, type: 'email', value: s.g.gemail, error: e.gemail, required: true, autocomplete: 'email' })}
          ${field({ id: 'gphone', label: LABELS.gphone, type: 'tel', value: s.g.gphone, autocomplete: 'tel', inputmode: 'tel' })}
          ${field({ id: 'gmsg', label: LABELS.gmsg, type: 'textarea', value: s.g.gmsg, hint: 'Occasion, menu wishes, budget per person.' })}
          <div class="pk-actions">${back('party')}<button type="submit" class="pk-btn${sending ? ' is-busy' : ''}" ${sending ? 'aria-disabled="true"' : ''}>${sending ? `${spinner('Sending')} Sending…` : 'Send enquiry'}</button></div>
        </form>`;
    }
    case 'enquirySent':
      return `<div class="pk-done">
        <span class="pk-done__icon" aria-hidden="true">✓</span>
        ${H('Enquiry sent', `The restaurant will reply to ${esc(s.g.gemail || 'anna@example.com')} with options for ${esc(s.g.gsize || '14')} guests.`)}
        <p class="pk-note">No table is held yet. The booking is confirmed when the restaurant replies.</p>
        <div class="pk-row"><button type="button" class="pk-btn pk-btn--ghost" data-restart>Start again</button></div>
      </div>`;
    default: return '';
  }
}

function bind(el, api) {
  const s = api.state;
  const go = (step, patch = {}) => api.set({ step, showSummary: false, ...patch });

  el.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => {
    const to = b.dataset.go;
    if (to === 'time') { go('time'); return; }
    go(to);
  }));
  el.querySelectorAll('[data-date]').forEach((b) => b.addEventListener('click', () => {
    api.set({ date: b.dataset.date, time: null }, { focus: `[data-date="${b.dataset.date}"]` });
  }));
  const loadTimes = async (date) => {
    api.set({ step: 'time', times: 'loading', date, time: null });
    api.announce('Loading free times');
    await wait(900);
    if (api.state.step !== 'time') return;
    let result = 'ready';
    if (api.netFail) result = 'error';
    else if (date === FLAKY && !flakyFailedOnce) { flakyFailedOnce = true; result = 'error'; }
    else if (date === NO_TIMES) result = 'empty';
    api.set({ times: result }, { focus: result === 'ready' ? '.pk-time:not([disabled])' : 'heading' });
    api.announce(result === 'ready' ? 'Free times loaded' : result === 'empty' ? 'No free times on this date' : 'Could not load free times');
  };
  el.querySelector('[data-next="time"]')?.addEventListener('click', () => loadTimes(s.date));
  el.querySelector('[data-retry-times]')?.addEventListener('click', () => loadTimes(s.date));
  el.querySelector('[data-pick-date]')?.addEventListener('click', (e) => loadTimes(e.currentTarget.dataset.pickDate));
  el.querySelectorAll('[data-time]').forEach((b) => b.addEventListener('click', () => api.set({ time: b.dataset.time }, { focus: `[data-time="${b.dataset.time}"]` })));
  el.querySelectorAll('[data-party]').forEach((b) => b.addEventListener('click', () => {
    const n = +b.dataset.party;
    if (n >= 9) { go('enquiry', { party: null, g: { ...api.state.g, gsize: api.state.g.gsize || '' }, gErrors: {} }); api.announce('Switched to group enquiry'); return; }
    api.set({ party: n }, { focus: `[data-party="${n}"]` });
  }));
  el.querySelector('[data-next="party"]')?.addEventListener('click', () => go('party'));
  el.querySelector('[data-next="details"]')?.addEventListener('click', () => go('details', { errors: {} }));

  const form = el.querySelector('form[data-form="details"]');
  if (form) {
    form.addEventListener('input', (e) => {
      const k = e.target.name; if (!k) return;
      api.set({ d: { ...api.state.d, [k]: e.target.value } }, { render: false });
      if (api.state.errors[k]) { // live-clear once fixed
        const err = validate(api.state.d, [k])[k];
        if (!err) { setFieldError(el, k, ''); api.set({ errors: { ...api.state.errors, [k]: undefined } }, { render: false }); }
      }
    });
    form.addEventListener('focusout', (e) => {
      const k = e.target.name; if (!k) return;
      if (!e.target.value && !api.state.showSummary) return; // don't nag on empty fields until submit
      const err = validate(api.state.d, [k])[k];
      setFieldError(el, k, err || '');
      api.set({ errors: { ...api.state.errors, [k]: err } }, { render: false });
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const errors = validate(api.state.d, ['name', 'phone', 'email', 'notes']);
      if (Object.keys(errors).length) { api.set({ errors, showSummary: true }, { focus: 'summary' }); api.announce(`${Object.keys(errors).length} fields need fixing`); return; }
      go('review', { errors: {}, send: 'idle' });
    });
  }

  el.querySelector('[data-confirm]')?.addEventListener('click', async () => {
    if (api.state.send === 'loading') return;
    api.set({ send: 'loading' }, { focus: '[data-confirm]' });
    api.announce('Sending booking');
    await wait(1200);
    if (api.state.step !== 'review') return;
    if (api.netFail) { api.set({ send: 'error' }, { focus: 'heading' }); api.announce('Booking not sent'); return; }
    const ref = `LR-${String(Math.floor(1000 + Math.random() * 9000))}`;
    go('success', { send: 'idle', ref });
    api.announce('Table booked');
  });

  const gform = el.querySelector('form[data-form="enquiry"]');
  if (gform) {
    gform.addEventListener('input', (e) => { const k = e.target.name; if (k) api.set({ g: { ...api.state.g, [k]: e.target.value } }, { render: false }); });
    gform.addEventListener('focusout', (e) => {
      const k = e.target.name; if (!k || (!e.target.value && !api.state.showSummary)) return;
      const err = validateGroup(api.state.g)[k];
      setFieldError(el, k, err || '');
    });
    gform.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (api.state.gSend === 'loading') return;
      const errors = validateGroup(api.state.g);
      if (Object.keys(errors).length) { api.set({ gErrors: errors, showSummary: true }, { focus: 'summary' }); return; }
      api.set({ gErrors: {}, showSummary: false, gSend: 'loading' }, { focus: 'button[type=submit]' });
      await wait(1100);
      if (api.state.step !== 'enquiry') return;
      if (api.netFail) { api.set({ gSend: 'error' }, { focus: 'heading' }); return; }
      go('enquirySent', { gSend: 'idle' });
    });
  }

  el.querySelector('[data-restart]')?.addEventListener('click', () => api.set({ ...initial() }));
  el.querySelector('[data-ics]')?.addEventListener('click', () => {
    const st = api.state;
    const [hh, mm] = (st.time || '19:30').split(':');
    const d = (st.date || isoDay(days[0])).replace(/-/g, '');
    const endH = String(Math.min(23, +hh + 2)).padStart(2, '0');
    const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Hubert portfolio//Prototype//EN', 'BEGIN:VEVENT',
      `UID:${st.ref}@prototype`, `DTSTART:${d}T${hh}${mm}00`, `DTEND:${d}T${endH}${mm}00`,
      `SUMMARY:Table at Livingroom (${st.party || 2} guests)`, 'LOCATION:Livingroom, Gorzów Wielkopolski',
      'DESCRIPTION:Prototype booking. Not a real reservation.', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
    a.download = 'livingroom-booking.ics';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  });
}

const sampleD = { name: 'Anna Nowak', phone: '600 100 200', email: 'anna@example.com', notes: '' };
const gallery = [
  { label: 'Choose a date, booked days disabled', state: { step: 'date' } },
  { label: 'Loading free times', state: { step: 'time', date: isoDay(days[1]), times: 'loading' } },
  { label: 'Choose a time, taken slots disabled', state: { step: 'time', date: isoDay(days[1]), times: 'ready', time: '19:30' } },
  { label: 'No tables left, nearest free date', state: { step: 'time', date: NO_TIMES, times: 'empty' } },
  { label: 'Could not load times, retry', state: { step: 'time', date: FLAKY, times: 'error' } },
  { label: 'Number of guests', state: { step: 'party', date: isoDay(days[1]), time: '19:30', party: 4 } },
  { label: '9+ guests: group enquiry', state: { step: 'enquiry', date: isoDay(days[1]), time: '19:30', g: { gname: '', gemail: '', gphone: '', gsize: '14', gmsg: '' } } },
  { label: 'Group enquiry sent', state: { step: 'enquirySent', g: { gname: 'Anna Nowak', gemail: 'anna@example.com', gphone: '', gsize: '14', gmsg: '' } } },
  { label: 'Details, empty', state: { step: 'details', date: isoDay(days[1]), time: '19:30', party: 4 } },
  { label: 'Details, validation errors', state: { step: 'details', date: isoDay(days[1]), time: '19:30', party: 4, showSummary: true, d: { name: 'A', phone: '60010', email: 'anna@', notes: '' }, errors: { name: 'Enter your full name.', phone: 'Enter 9 digits, or a number with a country code, for example +48 600 100 200.', email: 'Enter an e-mail like name@example.com.' } } },
  { label: 'Review and confirm', state: { step: 'review', date: isoDay(days[1]), time: '19:30', party: 4, d: sampleD } },
  { label: 'Sending', state: { step: 'review', date: isoDay(days[1]), time: '19:30', party: 4, d: sampleD, send: 'loading' } },
  { label: 'Sending failed, data kept', state: { step: 'review', date: isoDay(days[1]), time: '19:30', party: 4, d: sampleD, send: 'error' } },
  { label: 'Booking confirmed', state: { step: 'success', date: isoDay(days[1]), time: '19:30', party: 4, d: sampleD, ref: 'LR-4821' } },
];

export function init(root) {
  if (!root) return;
  createFrame(root, {
    title: 'Livingroom · Book a table',
    steps: [{ key: 'date', label: 'Date' }, { key: 'time', label: 'Time' }, { key: 'party', label: 'Guests' }, { key: 'details', label: 'Details' }, { key: 'review', label: 'Confirm' }],
    stepOf, render, bind, gallery, initial,
    strings: { progress: 'Booking progress', done: 'completed' },
    onTileOpen(g, api) {
      // a "sending" tile opened live finishes like a real request
      if (g.state.send === 'loading') setTimeout(() => { if (api.state.send === 'loading') api.set({ step: 'success', send: 'idle', ref: 'LR-4821' }); }, 1400);
    },
  });
}
