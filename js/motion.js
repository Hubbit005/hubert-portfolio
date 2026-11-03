/* Scroll motion: masked headline reveals, fade-ups, parallax covers,
   count-ups, pinned customer-journey diagram, accordion content.
   Transform and opacity only. Skipped entirely for reduced motion. */

export function initMotion({ reduced, gsap, ScrollTrigger }) {
  initAccordions({ reduced, gsap });
  if (reduced || !gsap || !ScrollTrigger) return;

  const ease = 'expo.out';

  // Masked headlines: the inner span slides up from below its mask.
  gsap.utils.toArray('.mask > span').forEach((el) => {
    gsap.from(el, {
      yPercent: 108, duration: 1.1, ease,
      scrollTrigger: { trigger: el.parentElement, start: 'top 92%', once: true },
    });
  });

  // Fade-up groups. Elements are visible until their trigger is set up.
  const groups = [
    '.sec-head__aside', '.case__sub', '.facts', '.case__intro .block', '.gallery .shot', '.gallery .frame-slot',
    '.ai-table__grid', '.accordion', '.sub__head', '.sub__grid > *', '.flow',
    '.split-panel', '.tools', '.exploring', '.about__main > *', '.about__side', '.cv__col', '.contact__grid > *',
    '.phones .shot', '.model-embed', '.meta-case',
  ];
  groups.forEach((sel) => {
    const els = gsap.utils.toArray(sel);
    if (!els.length) return;
    // Only pre-hide what is still below the fold; anything already on screen stays put.
    const below = els.filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.92);
    if (!below.length) return;
    gsap.set(below, { y: 36, opacity: 0 });
    ScrollTrigger.batch(below, {
      start: 'top 92%',
      once: true,
      onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1, duration: 0.9, ease, stagger: 0.08, overwrite: true }),
    });
  });

  // Parallax covers
  gsap.utils.toArray('[data-parallax] .shot__frame img').forEach((img) => {
    gsap.fromTo(img, { yPercent: -3.5 }, {
      yPercent: 3.5, ease: 'none',
      scrollTrigger: { trigger: img.closest('.shot'), start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  // Hero: drift the foot and fade slightly as the page scrolls away
  const heroFoot = document.querySelector('.hero__foot');
  const heroStage = document.querySelector('.hero__stage');
  if (heroFoot && heroStage) {
    gsap.to(heroStage, { yPercent: -12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to(heroFoot, { y: -40, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: '.hero', start: '30% top', end: 'bottom top', scrub: true } });
  }
  // Hero entrance for the foot and corners
  gsap.from('.hero__lead, .hero__cta > *, .corner', { y: 24, opacity: 0, duration: 1, ease, stagger: 0.06, delay: 0.25 });

  // Customer journeys: pinned on desktop, drawn lane by lane while scrolling.
  const journeys = document.getElementById('journeys');
  if (journeys) {
    const mm = gsap.matchMedia();
    const build = (pin) => {
      const lanes = journeys.querySelectorAll('.lane');
      const tl = gsap.timeline({
        scrollTrigger: pin
          ? { trigger: journeys, start: 'center center', end: '+=70%', scrub: 0.5, pin: true, anticipatePin: 1 }
          : { trigger: journeys.querySelector('.journeys__chart'), start: 'top 80%', once: true },
        defaults: { ease: pin ? 'none' : 'power3.out' },
      });
      lanes.forEach((lane, i) => {
        const bar = lane.querySelector('.lane__bar');
        const drops = lane.querySelectorAll('.drop');
        tl.fromTo(lane.querySelector('.lane__label'), { opacity: 0.25 }, { opacity: 1, duration: 0.3 }, i * 0.9);
        tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: 0.8 }, i * 0.9);
        if (drops.length) tl.fromTo(drops, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, stagger: 0.15, ease: pin ? 'none' : 'back.out(2)' }, i * 0.9 + 0.5);
      });
      tl.fromTo(journeys.querySelector('.journeys__legend'), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 });
      return () => tl.scrollTrigger && tl.scrollTrigger.kill();
    };
    mm.add('(min-width: 1000px) and (min-height: 700px)', () => build(true));
    mm.add('(max-width: 999px), (max-height: 699px)', () => build(false));
  }

  // Refresh after images load to keep pin positions right
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

function initAccordions({ reduced, gsap }) {
  document.querySelectorAll('details.acc').forEach((d) => {
    d.addEventListener('toggle', () => {
      if (!d.open || reduced || !gsap) return;
      const kids = d.querySelectorAll('.acc__body > *, .acc__body li');
      gsap.fromTo(kids, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: 'expo.out', stagger: 0.035, overwrite: true });
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    });
  });
}
