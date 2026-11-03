/* Hero: the word HUBERT as extruded 3D letters on a cylinder, rotating around the Y axis (three.js).
   Outside the orange bar the letters are drawn as outlines: background-coloured faces, shaded sides, edges.
   Inside the bar the colours invert: solid dark letters. Two render passes; the second one is limited
   to the bar's screen rectangle with a scissor, so the bar works as a sharp mask.
   No WebGL, reduced motion or a load error: the static word stays (facing front). */

const WORD = 'HUBERT';
const SEP = '+';
const TRACK = 0.035;     // gap between glyphs, in em
const GAP = 2.3;         // empty arc on each side of the separator, in em
const ENTER_MS = 1700;
const ENTER_TURN = Math.PI * 1.5; // radians spun during the entrance
const BASE_PERIOD = 11;  // seconds per full turn at rest (before dwell)
const DEPTH = 0.2;       // extrusion depth, in em
const PERSP = 13;        // camera distance, in em (same as the old CSS perspective)
const FILL_DARK = '#111111';

function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { return false; }
}

export function initHero({ reduced, lenis }) {
  const stage = document.getElementById('hero-stage');
  const hero = stage?.closest('.hero');
  if (!stage || !hero) return { destroy() {} };
  if (reduced || !hasWebGL()) return { destroy() {} }; // static word stays

  const ctl = { destroy() {} };
  start({ stage, hero, lenis, ctl }).catch(() => {
    stage.classList.remove('is-3d'); // keep the static word
  });
  return { destroy() { ctl.destroy(); } };
}

async function start({ stage, hero, lenis, ctl }) {
  const base = new URL('../vendor/', import.meta.url);
  const [THREE, { FontLoader }, fontJson] = await Promise.all([
    import(new URL('three/three.module.min.js', base).href),
    import(new URL('three/addons/loaders/FontLoader.js', base).href),
    fetch(new URL('fonts/typeface/archivo-900-125-hubert.json', base)).then((r) => r.json()),
  ]);
  const font = new FontLoader().parse(fontJson);
  const upm = fontJson.resolution;
  const capH = (fontJson.capHeight || 686) / upm;
  const bar = stage.querySelector('.hero__bar');
  const title = stage.querySelector('.hero__title');

  /* ---------- Renderer and canvas ---------- */
  const small = Math.min(window.innerWidth, window.innerHeight) < 700 || matchMedia('(pointer: coarse)').matches;
  const renderer = new THREE.WebGLRenderer({ antialias: !small, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.25 : 2));
  renderer.setClearColor(0x000000, 0);
  renderer.autoClear = false;
  const canvas = renderer.domElement;
  canvas.className = 'hero__gl';
  canvas.setAttribute('aria-hidden', 'true');
  hero.appendChild(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 0, PERSP);

  const amb = new THREE.AmbientLight(0xffffff, 1.1);
  scene.add(amb);
  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(-0.6, 0.9, 0.7);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xffffff, 0.5);
  rim.position.set(0.8, -0.4, 0.3);
  scene.add(rim);
  [amb, key, rim].forEach((l) => l.layers.enableAll()); // lights must reach both render layers

  /* ---------- Materials (layer 1: outline look, layer 2: solid look inside the bar) ---------- */
  const mat = {
    oCap: new THREE.MeshBasicMaterial(),
    oSide: new THREE.MeshLambertMaterial(),
    sCap: new THREE.MeshBasicMaterial(),
    sSide: new THREE.MeshLambertMaterial(),
    fCap: new THREE.MeshBasicMaterial({ color: FILL_DARK }),
    fSide: new THREE.MeshLambertMaterial({ color: '#3a3a3a' }),
  };
  const edgeMats = []; // per letter, so back letters can fade
  function applyTheme() {
    const cs = getComputedStyle(document.documentElement);
    const bg = new THREE.Color(cs.getPropertyValue('--bg').trim() || '#ecece9');
    const ink = new THREE.Color(cs.getPropertyValue('--ink').trim() || '#0d0d0d');
    const acc = new THREE.Color(cs.getPropertyValue('--accent').trim() || '#ff4f12');
    const dark = bg.getHSL({}).l < 0.5;
    mat.oCap.color.copy(bg);
    mat.oSide.color.copy(bg).lerp(ink, dark ? 0.32 : 0.2);
    mat.sCap.color.copy(acc);
    mat.sSide.color.copy(acc).multiplyScalar(0.7);
    edgeMats.forEach((m) => m.color.copy(m.userData.fill ? new THREE.Color(FILL_DARK) : (m.userData.sep ? acc : ink)));
  }

  /* ---------- Glyph geometry ---------- */
  const geoCache = new Map();
  function glyph(ch) {
    if (geoCache.has(ch)) return geoCache.get(ch);
    const shapes = font.generateShapes(ch, 1);
    const geo = new THREE.ExtrudeGeometry(shapes, {
      depth: DEPTH, curveSegments: small ? 6 : 10,
      bevelEnabled: true, bevelThickness: 0.014, bevelSize: 0.007, bevelSegments: 2,
    });
    const ha = (fontJson.glyphs[ch]?.ha || upm) / upm;
    geo.translate(-ha / 2, -capH / 2, -DEPTH / 2);
    const edges = new THREE.EdgesGeometry(geo, 35);
    const g = { geo, edges, ha };
    geoCache.set(ch, g);
    return g;
  }

  /* ---------- Layout on the cylinder (same maths as the old CSS version) ---------- */
  const seq = [...WORD, 'GAP', SEP, 'GAP', ...WORD, 'GAP', SEP, 'GAP'];
  const widths = seq.map((ch) => (ch === 'GAP' ? GAP : glyph(ch).ha));
  const arcs = widths.map((w, i) => (seq[i] === 'GAP' ? w : w + TRACK));
  const total = arcs.reduce((a, b) => a + b, 0);
  const R = total / (Math.PI * 2);

  const tilt = new THREE.Group();
  const cyl = new THREE.Group();
  tilt.add(cyl);
  scene.add(tilt);

  const letters = [];
  let cum = 0;
  const angles = [];
  seq.forEach((ch, i) => {
    const mid = cum + arcs[i] / 2;
    const a = mid / R;
    angles.push(a);
    cum += arcs[i];
    if (ch === 'GAP') return;
    const { geo, edges } = glyph(ch);
    const sep = ch === SEP;
    const holder = new THREE.Group();
    holder.position.set(R * Math.sin(a), 0, R * Math.cos(a));
    holder.rotation.y = a;

    const outline = new THREE.Mesh(geo, sep ? [mat.sCap, mat.sSide] : [mat.oCap, mat.oSide]);
    outline.layers.set(1);
    const eo = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.9 });
    eo.userData.sep = sep;
    const lo = new THREE.LineSegments(edges, eo);
    lo.layers.set(1);

    const solid = new THREE.Mesh(geo, [mat.fCap, mat.fSide]);
    solid.layers.set(2);
    const ef = new THREE.LineBasicMaterial({ transparent: true, opacity: 0 });
    ef.userData.fill = true;
    const lf = new THREE.LineSegments(edges, ef);
    lf.layers.set(2);

    edgeMats.push(eo, ef);
    holder.add(outline, lo, solid, lf);
    cyl.add(holder);
    letters.push({ a, outline, solid, eo, ef, lf });
  });
  applyTheme();

  const firstMid = (angles[0] + angles[WORD.length - 1]) / 2;
  const theta0 = -firstMid;
  const halfSpan = (angles[WORD.length - 1] - angles[0]) / 2 + (widths[0] / 2) / R;

  /* ---------- Size and bar mask ---------- */
  let W = 1, H = 1, fsPx = 100;
  function resize() {
    const hr = hero.getBoundingClientRect();
    const sr = stage.getBoundingClientRect();
    fsPx = parseFloat(getComputedStyle(title).fontSize) || 100;
    // Canvas spans the full hero width and the stage height plus a bleed for the tilt.
    const bleed = fsPx * 0.35;
    W = Math.round(hr.width);
    H = Math.round(sr.height + bleed * 2);
    canvas.style.top = `${Math.round(sr.top - hr.top - bleed)}px`;
    canvas.style.height = `${H}px`;
    canvas.style.width = `${W}px`;
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    // Vertical field so that 1 world unit = 1 em at the cylinder axis plane.
    camera.fov = (2 * Math.atan((H / fsPx) / 2 / PERSP) * 180) / Math.PI;
    camera.updateProjectionMatrix();
    // Fit: on narrow screens the front word (enlarged by perspective) must stay inside the viewport.
    const phi = halfSpan;
    const xEm = (R * Math.sin(phi) * PERSP) / (PERSP - R * Math.cos(phi));
    const wordPx = 2 * xEm * fsPx;
    const s = Math.min(1, (W * 0.84) / wordPx);
    tilt.scale.setScalar(s);
  }
  resize();
  window.addEventListener('resize', resize);

  function barRect() {
    if (!bar) return null;
    const cr = canvas.getBoundingClientRect();
    const br = bar.getBoundingClientRect();
    const x = br.left - cr.left, y = br.top - cr.top;
    if (br.width < 1 || br.height < 1) return null;
    return { x, y: H - (y + br.height), w: br.width, h: br.height };
  }

  function render() {
    renderer.setScissorTest(false);
    renderer.clear(true, true, true);
    camera.layers.set(1);
    renderer.render(scene, camera);
    const r = barRect();
    if (r) {
      renderer.setScissorTest(true);
      renderer.setScissor(r.x, r.y, r.w, r.h);
      renderer.clear(true, true, true);
      camera.layers.set(2);
      renderer.render(scene, camera);
      renderer.setScissorTest(false);
    }
  }

  /* ---------- Motion (ported from the CSS version) ---------- */
  let theta = theta0;
  let omega = 0;
  const omegaBase = (Math.PI * 2) / BASE_PERIOD;
  let hover = 0, hoverT = 0;
  let scrollV = 0;
  let tiltX = 0, tiltXT = 0, tiltY = 0, tiltYT = 0;
  let running = true;
  let last = performance.now();
  let raf = 0;
  let bo = 1;

  function place() {
    cyl.rotation.y = theta;
    tilt.rotation.x = THREE.MathUtils.degToRad(tiltX);
    tilt.rotation.z = THREE.MathUtils.degToRad(-tiltY * 0.2);
    for (const L of letters) {
      const facing = Math.cos(L.a + theta);         // 1 = facing the viewer, -1 = back of the cylinder
      const back = facing < -0.3;
      L.outline.visible = !back;
      L.solid.visible = facing > 0;
      L.eo.opacity = back ? 0.42 * bo : 0.9;
      L.ef.opacity = facing > 0 ? 0 : 0.5 * bo;
      L.lf.visible = facing <= 0;
    }
  }

  const enterStart = performance.now();
  if (bar) {
    bar.style.transform = 'translateZ(0) scaleY(0)';
    requestAnimationFrame(() => {
      bar.style.transition = 'transform 1100ms cubic-bezier(.16,1,.3,1)';
      bar.style.transform = 'translateZ(0) scaleY(1)';
    });
  }

  const onEnter = () => { hoverT = 1; };
  const onLeave = () => { hoverT = 0; tiltXT = 0; tiltYT = 0; };
  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = stage.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    tiltXT = ny * 10;
    tiltYT = nx * 6;
  };
  stage.addEventListener('pointerenter', onEnter);
  stage.addEventListener('pointerleave', onLeave);
  stage.addEventListener('pointermove', onMove);
  if (lenis) lenis.on('scroll', ({ velocity }) => { scrollV = Math.min(Math.abs(velocity || 0), 60); });

  const resume = () => { if (!running) { running = true; last = performance.now(); raf = requestAnimationFrame(tick); } };
  const io = new IntersectionObserver(([en]) => { if (en.isIntersecting) resume(); else running = false; });
  io.observe(stage);
  const onVis = () => { if (document.hidden) running = false; else resume(); };
  document.addEventListener('visibilitychange', onVis);

  const mo = new MutationObserver(applyTheme);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  const mqDark = matchMedia('(prefers-color-scheme: dark)');
  mqDark.addEventListener?.('change', applyTheme);

  function tick(now) {
    if (!running) return;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    const k = 1 - Math.exp(-dt * 3);
    const te = (now - enterStart) / ENTER_MS;
    if (te < 1) {
      // Entrance: one fast turn that eases out exactly on the front-facing angle.
      const e = 1 - Math.pow(1 - te, 4);
      theta = theta0 + ENTER_TURN * (1 - e);
      bo = 0; // no back outlines during the entrance
      omega = 0;
    } else {
      hover += (hoverT - hover) * k;
      scrollV *= Math.exp(-dt * 4);
      // Dwell: slow down while a full copy of the word faces the viewer (twice per turn).
      const rel = ((theta - theta0) % Math.PI + Math.PI) % Math.PI;
      const dist = Math.min(rel, Math.PI - rel) / (Math.PI / 2);
      const dwell = 0.05 + 0.95 * Math.min(1, Math.pow(dist / 0.62, 2));
      // Back outlines fade while the word faces front, so they never cross it.
      bo = Math.min(1, Math.max(0, (dist - 0.18) / 0.5));
      const target = omegaBase * dwell * (1 + hover * 1.4 + scrollV * 0.06);
      omega += (target - omega) * (1 - Math.exp(-dt * 6));
      theta -= omega * dt;
      tiltX += (tiltXT - tiltX) * k;
      tiltY += (tiltYT - tiltY) * k;
    }
    place();
    render();
    raf = requestAnimationFrame(tick);
  }

  theta = theta0 + ENTER_TURN;
  place();
  render();
  stage.classList.add('is-3d');
  raf = requestAnimationFrame(tick);

  ctl.destroy = () => {
    running = false;
    cancelAnimationFrame(raf);
    io.disconnect(); mo.disconnect();
    window.removeEventListener('resize', resize);
    document.removeEventListener('visibilitychange', onVis);
    renderer.dispose();
    canvas.remove();
  };
}
