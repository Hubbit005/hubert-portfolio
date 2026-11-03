# Review round 4

Reviewer: senior product designer, Flying Bisons. Blind review: I have not seen how the site was made.
Role: Junior UX/UI Designer (AI-Native). Review date: 3.11.2026, three days before the deadline.
Material: `index.html` (read in full), `js/hero.js`, `js/carousel.js`, `js/motion.js`, `js/proto-living.js`, `js/proto-ksk.js`, `tests/README.md`, `docs/qa-log.md`, and 42 screenshots: 21 at 1440 light, 9 at 390 phone, 6 at 768 dark, the 8-frame hero strip, 3 Livingroom states plus the gallery, 2 KSK states plus the gallery. I scored before I read rounds 1–3.

| # | Category | R1 | R2 | R3 | **R4** |
|---|---|---|---|---|---|
| 1 | Wow effect and quality of motion | 7 | 7 | 7 | **8** |
| 2 | Clarity of message | 6 | 6 | 7 | **7** |
| 3 | UX thinking (states, flows) | 8 | 8 | 8 | **8** |
| 4 | Visual quality | 7 | 7 | 7 | **7** |
| 5 | Credibility of the AI work | 5 | 6 | 6 | **6** |
| 6 | Quality of the English copy | 6 | 6 | 7 | **7** |
| | **Overall** | 6.5 | 6.7 | 7.0 | **7.2** |

**Verdict.** Yes, I would invite him to the design interview. Among junior applicants this is in the top 10–15%, close to the top 10%. The two booking prototypes still carry it. They have a step indicator that finishes on success, an error summary that links to each field, a network-failure switch, a branch for groups of 9 or more, the nearest free date offered in one tap, and a "Show all states" gallery. The biggest change this round is the hero. It now reads HUBERT in full in 6 of 8 frames, so the first impression works.

What keeps the score at 7: the page explains Hubert's judgement better than it proves it. The main claims are still told and not shown: the live Basko site, the rejected AI ad, the GSAP intro and outro, and a page of the KSK plan. There is still no example of Hubert overruling the AI. A Flying Bisons interviewer will also click the Livingroom prototype and find that the reason given for the new step order (free tables depend on group size) is not modelled. Choosing 2 guests or 8 gives the same times.

---

## 1. Wow effect and quality of motion: 8/10

Up one point, because the hero is fixed where it matters. In `hero-8-frames.png`, frames 3–8 show the full word with the T readable, and the dwell holds it long enough to read. With two copies of the word, each copy now spans about 95° of the cylinder (`GAP = 2.3` in `js/hero.js`), and that was the right fix. The arc carousel is still the best interaction on the page: inertia, keyboard, it stops where the user leaves it, and clones are inert. The scroll motion is restrained (four fade groups, the journeys chart is drawn once), which is the right budget for a content-heavy page.

What stops it at 8:
- **The first frames still look broken.** In `1440-light-00-hero.png`, `768-dark-00-hero.png`, `390-light-00-hero.png` and frames 1–2 of the strip, the mirrored outline "TREBU" and the orange "+" sit left of the H, and the T is edge-on. These frames come from the entrance spin. Many people will see that moment first, and a screenshot tool will capture it too.
- **At the hold, the word sits right of centre.** The orange bar is centred and sits behind "U/B", not behind the middle of the word. If that is deliberate, it does not read as deliberate.
- **The motion work the CV is built on is not on the page.** "Motion as code" is Exploring item 02 and the KSK video lead. The 3-second intro and outro would be the second wow moment after the hero, and they are missing.

**Fixes**
- `js/hero.js`: end the entrance spin exactly at `theta0`, for example with a tween from `theta0 + 2π` to `theta0` instead of a boost that decays. The first full frame is then the readable word. Keep `--bo` at 0 until the entrance ends, so no back glyphs or separator show during it.
- `js/hero.js` / `css/main.css`: either centre the bar on the middle of the word (between U and B is fine, but then centre the word on the bar), or offset the bar on purpose and align it to a grid column.
- `index.html` `#ksk-video`: as soon as the files exist, put the PL and DE intro and outro first as muted `autoplay loop playsinline` clips (see top 6, item 1).

## 2. Clarity of message: 7/10

The hero, the work intro and About say clearly what he does. The "Content pending" markers are consistent, and they look planned. Once they are filled, the CV and Contact sections work. The KSK subtitle now says up front which part is a portfolio concept. That helps.

Still unclear:
- **The KSK case is still the longest scroll on the page**, and the portfolio concept now sits between two pieces of client work (3D model → booking concept → video). A recruiter has to work to separate what the client got from what was made for the application.
- **Journeys 2 and 3 say "Length in the full plan"** (`1440-light-04-journeys.png`, `390-light-04-journeys.png`). That tells the reader the information exists and is being kept from them. It is not marked "Content pending" either, so it reads as a final design.
- **"Every section answers the same five questions"** appears twice, and the questions are never named.
- **The ebook block is still a full sub-case** with a large cover, one sentence and a pending marker (`1440-light-01-ebook.png`). It dilutes Case 05.
- **Labels repeat.** The KSK booking has the kicker "Concept for this portfolio" and an orange flag "Concept prototype built for this portfolio" directly under it (`1440-light-05-ksk-booking.png`). Livingroom repeats the same pattern. The hero says "Junior UX/UI Designer" twice and "AI-native" twice.

**Fixes**
- `index.html` `#ksk-pretor`: order research, 3D model, video, then the booking concept last, in a dashed or outlined container that visibly differs from client work.
- `index.html` `#journeys`: replace the lane chart with a table (journey → persona → planning time → main drop-off) and mark the missing cells "Content pending". Or keep the chart and mark lanes 2–3 as pending in the same style as the rest of the page.
- `index.html`: keep only the orange flag and change the kicker to "KSK Pretor · Booking concept". In the hero, drop either the top-left corner role or the line under the word.
- `index.html` `#ebook`: fold it into one line in the Case 05 subtitle until there is a screenshot.

## 3. UX thinking (states, flows): 8/10

This is still the strongest category and the one that matters most for this role. Fixed this round: every step shows done on the success screens (`lv-08-success.png`, `ksk-1440-07-sent.png`), the step bar is hidden under the gallery (`lv-09-gallery.png`), taken times vary by date, the KSK slider follows the field (`ksk-1440-03-small.png`), and international numbers are listed as a handled state. The empty state with "nearest free date" and the under-12 dead end with two ways out are the details I would ask about in an interview.

Why it is not a 9:
- **The stated reason for the reorder is not built.** The note says "free tables depend on the size of the group, so guests now come before time". But `takenOn(iso, t)` in `js/proto-living.js` ignores the party size (its own comment says the taken slots "grow with the group size"). The time step does not show the guest count either: `lv-04-times.png` has only the date, while the details step shows a "Thu 5 Nov · 15:30 · 4 guests" pill. An interviewer will try 2 guests and then 8 guests.
- **KSK success still gives no reply time**, and there is an empty gap where it would go (`ksk-1440-07-sent.png`). A group organiser plans around that answer.
- **No designed state from client work.** Both prototypes are portfolio concepts. The psychologist's mock payment and Basko's quote form are diagrams or pending. This is planned (P1/P2 in the to-do list), but it is the gap between "good exercise" and "proven in production".

**Fixes**
- `js/proto-living.js`: `takenOn(iso, t, party)` that takes more slots for 5–8 guests. On the time step, use the subtitle "Free tables for 4 guests, Thursday 5 November" and show the `chosen()` pill. Then the reason on the page is true and testable.
- `js/proto-ksk.js` `sent`: "Wir antworten innerhalb von 24 Stunden (Beispielwert)." in the empty gap.
- `index.html` `#psychologist-site`: one anonymised screen of the mock payment step as soon as the client agrees.

## 4. Visual quality: 7/10

The system holds: a wide grotesk for display, mono labels, one orange accent, and each prototype in its client's palette (gold serif for Livingroom, red for KSK). Dark mode is complete (`768-dark-*`). The KSK dark card and the Livingroom booking frame are the best-looking parts. Fixed since round 3: the CV timeline nodes, the contact column offset, the 2×2 facts row at 768, the number spinner, and the ebook cover overflow at 1440 (re-shot in `1440-light-01-ebook.png`). The hierarchy is still loud. Every sub-section title is in wide caps at near-H2 size ("GERMAN GROUP BOOKING PAGE", "TABLE BOOKING, EVERY STATE", "VIDEO BRANDING", "THIS PORTFOLIO", "WRITING THE STATES BEFORE THE BUILD"). The thinnest case, "WEBSITE FOR A PSYCHOLOGIST", gets the widest headline on the page (`1440-light-10-psychologist-site.png`).

**Layout bugs visible in the screenshots**
1. `768-dark-01-work.png`, `390-light-01-work.png`: "01 BASKO CLEAN" still sits on top of "CZYSTO" in the card image. In `1440-light-01-work.png`, "TRAINING PLANS" collides with "3-DNIÓWKA / Upper / Lower" on card 06. The card meta needs an opaque scrim or must sit below the image. (Third round.)
2. `1440-light-05-ksk-booking.png`: in the price box, "Gruppe / nach Gruppengröße" wraps into a two-line block next to the label instead of aligning right like the other rows. `.ksk-price__total small` has no right alignment.
3. `lv-05-errors.png`: the input fields stretch to about 1260 px at desktop. A five-field form this wide is hard to scan. Cap `.pk-form` at about 560 px.
4. `ksk-1440-07-sent.png`: unexplained blank gap between "Wir melden uns per E-Mail…" and "Termin und Preis…".
5. `1440-light-07-ksk-video.png`: the right column under the 2×2 film strip is still empty (about 200 px). (Third round.)
6. `1440-light-14-exploring.png`: about 220 px of empty grid between the orange panel and About. `768-dark-00-hero.png`: about 300 px of empty grid above the word. (Third round.)
7. `390-light-12-ebook.png`: the cover card is not centred (16 px left, about 54 px right).
8. `hero-8-frames.png` frames 1–2, `1440-light-00-hero.png`, `390-light-00-hero.png`: mirrored back glyphs and the orange "+" left of the H, the T edge-on, and at 390 the word runs off the right edge in this frame. Check the 390 hold frame with its own 8-frame strip.
9. `lv-09-gallery.png`: tiles 07 and 10 are still cut mid-field. That is acceptable for thumbnails, but a fade at the bottom of each tile would make the cut look deliberate.

(`1440-light-12-ebook.png` shows "READERS" touching the card edge, but the later shot `1440-light-01-ebook.png` shows it fixed in `0923d4f`. I did not count it.)

**Fixes**
- `css/main.css` `.sub__title`, `.exploring__title`, `.meta-case__title`, `.journeys__title`: body grotesk, 32–40 px, sentence case. `.case--minor .case__title`: about 60% of the main case titles.
- `css/main.css` `.card__meta`: an opaque gradient behind the title at all widths, or the title under the image.
- `css/proto.css`: `.pk-form { max-width: 560px }`, and `.ksk-price__total small { text-align: right; margin-left: auto }`.
- `css/main.css`: shrink the section gap after `.exploring`. At 600–1000 px, `.hero { min-height: auto }` with the stage centred. Centre `.type-cover--large` at 390.

## 5. Credibility of the AI work: 6/10

Better labelled, but the same kind of evidence. Good: the Livingroom note now says "Changed after an AI design review", the QA log links each defect to a commit, the tests are in the repo, and the "This portfolio" split is honest about AI writing the code, the tests and the copy drafts. That honesty is the strongest asset in this category.

Why it stays at 6:
- **No decision is shown where Hubert went against the AI.** Every item in "What the checks and reviews caught" was found by a machine or an AI reviewer and fixed by AI. The one decision against AI on the page, rejecting the realistic 3D Basko ad, is mentioned three times and shown zero times. The tool is still "an AI video model".
- **The "What I did" column for this portfolio is thin.** "Changed the word from 'Portfolio' in the reference to my name (commit `3762e06`)" cites a commit for a one-word change. It reads as padding and draws attention to how small the item is. It also confirms that the hero concept came from a reference.
- **"Then two rounds of review and fixes"** in the Case 06 lead is out of date. This is round four.
- **The only AI product (the Botpress agent) is one pending line**, and Exploring item 03 leans on it.
- **Seven identical "What AI did / What I did" tables.** By Case 05 they read as a template.

**Fixes**
- `index.html` `#this-portfolio`: add "Where I disagreed with the AI" with two concrete items. Example format: what the AI proposed, what he chose instead, why. Remove the commit-hash bullet or merge it into "Picked the visual direction…".
- `index.html` Basko `.gallery`: a "Two directions" figure with one frame of the AI 3D version, the tool's name, and the shipped 2D frame. If no frame survives, cut the AI-video line from the AI column and keep only the decision.
- `index.html` Case 06 lead: "then several rounds of review and fixes", or the real number.
- `index.html` Case 05: replace the AI table with one sentence.

## 6. Quality of the English copy: 7/10

Fixed from round 3: the hero slogan ("I build with AI tools and decide what ships" is plain and good), "Case 06 · Proof", the KSK subtitle fragment, Basko "video editing" as a tool, the Basko D reason added afterwards, "I work a lot when…", and "AI design review". Several lines sound like a person: "Nobody asked me for a redesign." "The demo had to convince on its own." The English is clear and consistently British.

Still templated, translated or awkward:
- Livingroom lead: "With the states a real booking form has to handle: …" is still a fragment. Use "It includes the states a real booking form has to handle: …".
- KSK D: "…no reflection, so the model stays smooth." Use "so it runs smoothly on phones".
- KSK map: "…so enquiries record their source next to the analytics." Use "so each enquiry records where it came from".
- Journeys: "Length in the full plan" (see category 2).
- Cases aside: "Each case shows the problem, my role, what AI did and what I did, and the states I designed for." This still describes a template. Cut it, or use "Four client projects and one I started myself."
- Workflow 06: "Before anything goes to the client, I check it against the brief and the brand." Generic. Give one example ("I dropped the realistic Basko ad at this step").
- Workflow 01: "At the client's job site, or as a guest in the restaurant." A fragment that only makes sense if you know the cases.
- Kickers "Sub-project 1 / Sub-project 2" are document terms. "KSK Pretor · 3D model" and "· Video" read better, and the numbering skips the concept in between.
- Contact: the address `hubert.austria2025@` is a fact, not copy, but a neutral address (name@…) would look more professional on a design application.

---

## Round 3 points: fixed and not fixed

| Round 3 point | Status |
|---|---|
| Hero: the T reads in full | **Fixed** (6 of 8 frames) |
| Hero: snap to the front angle in the dwell | Mostly fixed. The word holds still but sits right of centre |
| Hero: hide the separator while the word faces front | Fixed in the dwell. Still visible during the entrance |
| Live Basko URL and social links | Not fixed (now P1 in the to-do list) |
| KSK intro and outro on the page | Not fixed (P1). The film still shows "role pending" |
| One page of the 59-page plan, name the five questions | Not fixed (P1) |
| Basko "two directions" frame with the tool name | Not fixed |
| "Where I overruled the AI" block | Not fixed |
| "design review" → "AI design review" | **Fixed** |
| CV timeline nodes on sub-bullets | **Fixed** |
| Ebook cover in dark mode / oversized below 900 px | Fixed (theme tokens); off-centre at 390 |
| Card meta over "CZYSTO" below 900 px | Not fixed |
| Neighbouring card titles cut at 1440 | Not fixed (accepted as part of the arc) |
| Contact column offset | **Fixed** |
| Facts row 2×2 at 600–1000 px | **Fixed** |
| Empty space after Exploring, above the tablet hero | Not fixed |
| Silent film volume control | Fixed (`muted`) |
| Empty column under the film strip | Not fixed |
| KSK number spinner | **Fixed** |
| KSK focus colour per prototype | Not verifiable in the screenshots |
| Wide-caps sub-section titles; psychologist headline size | Not fixed |
| Delete or fold the ebook | Not fixed |
| AI tables in Case 05 replaced with a sentence | Partly (two merged into one table) |
| KSK order: concept last, different container | Partly (3D model now first; the concept is still in the middle, same container) |
| Journeys named / table | Not fixed (dashed bars replaced by "Length in the full plan" pills) |
| Cases aside as template description | Partly (shorter, same idea) |
| Success screens: all steps done | **Fixed** |
| Step bar hidden above the gallery | **Fixed** |
| `TAKEN` varies by day | **Fixed** (but not by group size, see category 3) |
| KSK reply time | Not fixed |
| "International numbers" in accordion D | **Fixed** |
| KSK slider minimum | **Fixed** |
| Hero slogan | **Fixed** |
| "I work a lot when…" | **Fixed** |
| Basko D reason added afterwards | **Fixed** |
| KSK D "stays smooth" | Not fixed |
| KSK map "next to the analytics" | Not fixed |
| Livingroom lead fragment | Not fixed |
| KSK subtitle fragment | **Fixed** |
| "Case 06 · Proof" | **Fixed** |
| "Sub-project 1/2" kickers | Not fixed |
| Basko "video editing" as a tool | **Fixed** |
| Workflow 06 generic | Partly (rewritten, still generic) |

---

## Top 6 remaining improvements, ranked by impact

1. **Show the real work behind the four biggest claims** (`index.html` Basko facts and `.gallery`, `#ksk-video`, KSK role list). Add the live Basko URL and the three social links. Put the KSK PL and DE intro and outro first in the video section as muted loops, and keep the 35-second film only if his role is confirmed. Add one anonymised page of the KSK plan and name the five questions. Add the rejected Basko AI frame with the tool's name, or cut the line. These are already P1 in `docs/do-uzupelnienia.md`. Do them before any polish. Each one turns a sentence into evidence.
2. **Show Hubert's judgement against the AI** (`index.html` `#this-portfolio`, workflow 06). Add "Where I disagreed with the AI": two items, each with what the AI proposed, what he chose and why. Remove the commit-hash bullet, and fix "two rounds of review". This is the part of the brief ("say what AI did and what you did") a Flying Bisons interviewer will dig into.
3. **Make the Livingroom reorder reason true in the prototype** (`js/proto-living.js` `takenOn`, the time-step header; `js/proto-ksk.js` `sent`). Free times must change with the group size, the time step must show "for 4 guests", and the KSK success screen needs a reply time in the empty gap. The reason is on the page, so it will be tested.
4. **Calm the hierarchy and cut the thin blocks** (`css/main.css` sub-section and minor-case titles; `index.html` `#ebook`, the duplicated "concept" labels, the hero's repeated role line; `css/proto.css` `.pk-form` max width). Set sub-titles in sentence case at 32–40 px, shrink "WEBSITE FOR A PSYCHOLOGIST", fold the ebook into one line, and cap form widths. The page will look more senior with less shouting.
5. **Restructure KSK and the journeys chart** (`index.html` `#ksk-pretor`, `#journeys`). Order: research, 3D model, video, then the booking concept last in a visibly different frame. Replace the lanes with a journey → persona → planning time → main drop-off table, and mark empty cells "Content pending" instead of "Length in the full plan".
6. **Bug and copy sweep** (`css/main.css` `.card__meta` scrim at all widths, the space after `.exploring` and above the tablet hero, ebook cover centring at 390; `css/proto.css` `.ksk-price__total small`; `js/hero.js` entrance ending exactly on `theta0` with back glyphs hidden; `index.html` the copy lines in category 6 and the "Sub-project" kickers). These are small, but three of them are flagged for the third time.
