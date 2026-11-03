# Review round 5

Reviewer: senior product designer, Flying Bisons. Blind review: I have not seen how the site was made.
Role: Junior UX/UI Designer (AI-Native). Review date: 3.11.2026, three days before the deadline.
Material: `index.html` (read in full), `js/proto-living.js`, `js/proto-ksk.js`, `js/hero.js`, `js/carousel.js`, `js/motion.js`, `tests/` (README and scripts), `docs/qa-log.md`, `docs/do-uzupelnienia.md`, and 49 screenshots: all 19 at 1440 light, 12 at 390 phone, 8 at 768 dark, the 8-frame hero strip, 4 Livingroom states plus the gallery, 3 KSK states plus the gallery. I also measured one layout bug in a live browser (see the bug list). I scored before I read rounds 1–4.

Scoring rule for this round: facts and files only the candidate can supply ("Content pending") are treated as supplied. I did not lower scores for them.

| # | Category | R1 | R2 | R3 | R4 | **R5** |
|---|---|---|---|---|---|---|
| 1 | Wow effect and quality of motion | 7 | 7 | 7 | 8 | **8** |
| 2 | Clarity of message | 6 | 6 | 7 | 7 | **8** |
| 3 | UX thinking (states, flows) | 8 | 8 | 8 | 8 | **8** |
| 4 | Visual quality | 7 | 7 | 7 | 7 | **7** |
| 5 | Credibility of the AI work | 5 | 6 | 6 | 6 | **7** |
| 6 | Quality of the English copy | 6 | 6 | 7 | 7 | **8** |
| | **Overall** | 6.5 | 6.7 | 7.0 | 7.2 | **7.7** |

Note on the jump: about half of it comes from real fixes this round. The other half comes from the rule above. Clarity and AI credibility were held back in earlier rounds by evidence that is now on the to-do list as P0/P1 (live Basko link, the five questions, the Botpress agent, the AI tool behind the rejected ad). Those gaps are listed, located in the code and look planned. If they are not filled before 6.11, take one point off categories 2 and 5.

**Verdict.** Yes, an interview. Among junior applicants this is in the top 10%. The two booking prototypes are still the reason. This round they also tell the truth about themselves. Free times now shrink with the group size (`takenOn(iso, t, party)`), the time step says "Choose a time for 4 guests", and the KSK confirmation gives a reply time. A Flying Bisons interviewer who tries 2 guests and then 8 will now see the difference. The hero reads HUBERT in all 8 frames, centred on the bar. The KSK case is in a sensible order, with the concept last in a dashed frame.

What stops it at 8: no moment where Hubert overrules the AI is shown on the page, one regression left an empty column in Case 05, and the page is still built from one repeated template (A–E blocks and an AI table in every case). That template makes a strong junior look procedural.

---

## 1. Wow effect and quality of motion: 8/10

The hero now does what it promises. In `hero-8-frames.png` every frame shows the full word. The entrance eases out exactly on the front angle (`theta = theta0 + ENTER_TURN * (1 - e)`), and at 1440 the word is centred on the orange bar (`1440-light-00-hero.png`: word centre at about 712 px, bar centre at 720 px). The dwell then lets the word drift slowly, so by frame 8 the H is turning edge-on. That reads as alive, not broken. The arc carousel is still the best interaction on the page. Scroll motion stays restrained, which is right for a page this long.

Why not 9:
- **Neighbouring card titles are cut on the arc.** Cards right of centre lose the start of their title under the card to their left: "(SK PRETOR", "D MODEL", "IVINGROOM" (`1440-light-01-work.png`), "K PRETOR" (`768-dark-01-work.png`, `390-light-01-work.png`). The motion looks deliberate. The cropped labels do not.
- **Back outlines still show during the entrance.** `--bo` runs from 1 to 0 over the spin, so the mirrored glyphs are visible for the first half second. It is brief, but it is the first thing anyone sees.
- **The second wow moment is still a placeholder.** I am treating the PL/DE intro and outro as supplied. Once they are in, they belong first in `#ksk-video` as muted loops, above the 35-second film.

**Fixes**
- `js/carousel.js` `render()`: for cards right of centre, set `z-index` to rise with distance (mirror the left side), or end-align `.card__meta` text on those cards. Either way the start of every title stays visible.
- `js/hero.js` `tick()`: keep `--bo` at 0 until `te >= 1`.
- `index.html` `#ksk-video`: intro and outro as `autoplay muted loop playsinline` above the film when the files arrive.

## 2. Clarity of message: 8/10

Up one. The KSK case now runs research → journeys → AI split → 3D model → video → booking concept, and the concept sits in a dashed, hatched frame with "Concept prototype built for this portfolio". Journeys 2 and 3 say "Content pending: length" in the page's own pending style, so they read as planned. The repeated "concept" kicker is gone. With the CV link, the live Basko URL and the five questions filled in, a recruiter gets the story in one scroll.

Still unclear:
- **The role appears three times in the hero**: top-left corner "Hubert · Junior UX/UI Designer", the line under the word, and "AI-native" again top right (`1440-light-00-hero.png`).
- **The ebook is still a full sub-case** with one sentence and a pending marker. Because of the cover bug (category 4), it now also has an empty right half.
- **Case 05 still has its own AI table**, and one of its two rows is "Content pending".
- **On a phone the Livingroom brief sits before the prototype.** In `390-light-09-livingroom-booking.png` the lead and the Polish brief take about two screens before the booking starts. The thing worth clicking arrives late.
- **The cases aside still describes a template**: "Each case shows the problem, my role, what AI did and what I did, and the states I designed for."

**Fixes**
- `index.html` hero: keep the line under the word. Change the top-left corner to "Hubert · Portfolio 2026" and drop the bottom-right duplicate.
- `index.html` `#ebook`: one line in the Case 05 subtitle until screenshots exist. Replace the Case 05 AI table with one sentence.
- `index.html` `#livingroom-booking`: put the brief in a `<details>` ("My brief for this prototype") below the prototype, at least below 700 px.
- `index.html` `#cases` aside: "Four client projects and one I started myself. Each one ends with what I would do next."

## 3. UX thinking (states, flows): 8/10

Still the strongest evidence for this role, now without the hole round 4 found. Livingroom: date → guests → time, taken slots grow for 5–8 guests, the time step names the group, the empty state offers the nearest free date in one tap, the 9+ branch carries the date over and says "No table is held yet", errors are summarised and linked, a network-failure switch covers loading times and sending, and the gallery shows 14 states (`lv-09-gallery.png`). KSK: the under-12 dead end has two exits, over-30 becomes a quote request, prices update live, "Sonstiges" opens a text field, and the success screen sets expectations ("innerhalb von 24 Stunden"). The `.ics` download on the Livingroom success screen is a nice touch.

Why not 9:
- **KSK over 30 contradicts itself.** The message says "Den Termin können Sie trotzdem schon wählen" (you *can* already pick a date), but "Individuelles Angebot anfragen" stays disabled until both date and slot are set (`js/proto-ksk.js`, `data-to="kontakt"`). For a custom quote the slot should be optional, or the text should say it is required.
- **KSK has fewer designed states than Livingroom.** Booked slots exist in `BOOKED`, but there is no gallery tile for a day with no free slot and no loading state for slots. The two prototypes look like they come from two levels of care.
- **No designed state from shipped client work is visible yet.** Basko's quote-form error handling is a pending sentence, and the psychologist screenshots are P2. Treating them as supplied, this is text, not a screen. A 9 needs one real client screen with its error or empty state.

**Fixes**
- `js/proto-ksk.js`: in quote mode, enable the button with only a date (slot optional), and add "Uhrzeit optional" next to the slot list. Or change the copy to "Bitte wählen Sie trotzdem einen Wunschtermin."
- `js/proto-ksk.js` gallery: add "Tag ohne freie Uhrzeit" with a nearest-free-day offer, mirroring Livingroom.
- `index.html` `#basko-clean` D: when the form-error facts arrive, show them as a two-item state list (empty field, wrong phone), not a paragraph.

## 4. Visual quality: 7/10

The system holds in both themes: wide grotesk display, mono labels, one orange accent, and each prototype in its client's palette. Fixed this round: card labels are solid and no longer sit on the image, sub-section titles are in sentence case, forms are capped at 560 px (`lv-05-errors.png`), the KSK price box aligns, the film runs full width with the frames in one row, and the tablet hero no longer has a large empty band (`768-dark-00-hero.png`). The KSK dark card and the Livingroom booking frame are still the best-looking parts.

It stays at 7 because of one regression, two bugs flagged for the fourth time, and a hierarchy that is still loud. "WRITING THE STATES BEFORE THE BUILD", "THIS PORTFOLIO" and "FOUR JOURNEYS, FIVE PERSONAS" are still wide caps at near-H2 size. "WEBSITE FOR A PSYCHOLOGIST" is smaller than before but still the widest headline on the page, for the thinnest case.

**Layout bugs visible in the screenshots**
1. **Regression.** `1440-light-12-ebook.png`, `768-dark-12-ebook.png`, `390-light-12-ebook.png`: the ebook cover is gone and the right column is empty. Measured in Chromium: `.type-cover--ebook` is 0 × 0 px at 1440 and at 390. Cause: `css/main.css` line 994 gives `.minor .type-cover--large` `justify-self: center`. The grid item then shrinks to its content width, all of its content is absolutely positioned, so the width is 0, and `aspect-ratio` makes the height 0. The `.case--short` rule on line 729 has `width: 100%`, but the `.minor` rule does not. Fix: add `width: 100%` to the line-994 rule (it already has `max-width: 320px`).
2. `1440-light-01-work.png`, `768-dark-01-work.png`, `390-light-01-work.png`: card titles right of centre are cut by the neighbouring card (see category 1). This is the fourth round.
3. `1440-light-14-exploring.png`: about 190 px of empty grid between the orange panel and the About rule. Flagged for the fourth time.
4. `1440-light-00-hero.png`: the top corners do not share a baseline. Top left sits at y ≈ 96, top right ("AI-NATIVE" with its dot) at y ≈ 112.
5. `1440-light-04-journeys.png`, `-05-ksk-3d-model.png`, `-06-ksk-video.png`, `-07-ksk-booking.png`: over the dark KSK case the frosted light nav turns into a muddy mid-grey band. Switch the nav to its dark variant while it is over `.case--dark`.
6. `1440-light-06-ksk-video.png`: `max-height: 72vh` caps the film at about 1150 px, left-aligned in a 1300 px column, which leaves a 150 px gap on the right. Centre it (`margin-inline: auto`) or drop the cap at wide screens.
7. `1440-light-10-psychologist-site.png`, `768-dark-10-psychologist-site.png`: the dash bullets in "My role and constraints" change colour between items and between screenshots (grey/orange/grey at 1440, orange/orange/grey at 768). Pick one rule.

**Fixes**
- `css/main.css`: the bug fixes above, then `.exploring__title`, `.meta-case__title`, `.journeys__title` in the same sentence-case style as `.sub__title`. Set `#psychologist-site .case__title` in sentence case or at the `.sub__title` size.

## 5. Credibility of the AI work: 7/10

Up one, partly from fixes and partly from the scoring rule. Fixed: the Case 06 lead now says "several rounds", the commit-hash bullet is gone, and "What the checks and reviews caught" now includes a flow change from an AI design review, as well as the technical bugs. Treated as supplied: the Botpress agent description and screenshot, the name of the AI tool behind the rejected Basko ad, and the five questions. With those, the page has one real AI product and a named tool. The honesty is the strongest asset: "Claude Code wrote the page… the copy drafts", tests in the repo, a QA log with commits, and both prototypes labelled as portfolio concepts.

Why not 8:
- **Still no decision against the AI is shown.** Every item in "What the checks and reviews caught" was found by a machine or an AI reviewer. The one human override, dropping the realistic Basko ad, is described three times and shown zero times. Flying Bisons will ask "when did you say no to Claude?". The page should answer before the interview does.
- **"What I did" on this portfolio is still mostly choosing and briefing.** "Changed the word on the cylinder from 'Portfolio' to my name" is a small item for a whole bullet, and it tells the reader the concept came from a reference.
- **Six identical AI tables.** By Case 05 they read as a form to fill in, and that undermines the claim that the split was thought through for each case.

**Fixes**
- `index.html` `#this-portfolio`: a block "Where I said no to the AI", with two items in the format *AI proposed → I chose → why*. Candidate material already on the page: the brief's order (date → time → guests) versus the reorder. Hubert can say whether he accepted or challenged that change. Merge the "Portfolio → my name" bullet into the visual-direction bullet.
- `index.html` Basko `.gallery`: a "Two directions" figure with one frame of the AI 3D version, the tool's name, and the shipped 2D frame. If no frame exists, keep the decision and remove the AI-video line from the AI column.
- `index.html`: keep the AI table in Basko, KSK, Livingroom and Case 06. Replace it with one sentence in Cases 04 and 05.

## 6. Quality of the English copy: 8/10

Up one. Fixed from round 4: the Livingroom lead ("It covers the states a real booking form has to handle"), KSK D ("to keep the model responsive"), the KSK map ("so each enquiry records where it came from"), the "Sub-project" kickers, and "several rounds". The voice is plain, British and consistent, and some lines sound like a person: "Nobody asked me for a redesign." "The demo had to convince on its own." "No table is held yet." The German in the KSK prototype is idiomatic and formal (Sie), which suits B2B organisers.

Still to fix:
- Cases aside (see category 2): describes a template, not the work.
- Workflow 01: "At the client's job site, or as a guest in the restaurant." A fragment that only works if you already know the cases. Use "I start where the problem is: on Basko's job sites, or as a guest at Livingroom."
- Workflow 06: "Before anything goes to the client, I check it against the brief and the brand." Generic. Name the example: "This is where I dropped the realistic Basko ad."
- Basko facts, Tools: "Claude Code, React; video shot and edited by me". A tool list and a sentence in one cell. Use "Claude Code, React. Video: my own footage and edit."
- About: "I am ready to put in long hours on work that shows results." Stiff. Use "I work long hours when the work shows results."
- Pending markers phrased as internal questions: "Pending: is this the mascot ad, and which tools made it" and "My role in the film: pending". They will be filled, but if one survives, it makes the candidate look unsure about his own work. Write markers as statements, like the others ("Content pending: tools used").
- The Livingroom brief translation, "flow from date to confirmation", hides the original order (date → time → guests). The note below explains the change. Translate the order literally, so the reader sees what changed.

---

## Round 4 points: fixed and not fixed

| Round 4 point | Status |
|---|---|
| Hero entrance ends exactly on the front angle | **Fixed** |
| Hero: back glyphs hidden during the entrance | Partly. They fade out during the spin instead of staying hidden |
| Hero: word centred on the bar | **Fixed** |
| KSK intro and outro first in the video section | Not yet (file pending, P1 18) |
| Card meta over "CZYSTO" / "3-DNIÓWKA" | **Fixed** (solid label under the image) |
| `.ksk-price__total small` alignment | **Fixed** |
| `.pk-form` max width | **Fixed** |
| KSK sent: blank gap, reply time | **Fixed** ("innerhalb von 24 Stunden") |
| Empty column under the film strip | **Fixed** (film full width, strip in one row). New: the film does not fill the width at 1440 |
| Empty space after Exploring | Not fixed (fourth round) |
| Empty band above the tablet hero | **Fixed** |
| Ebook cover centred at 390 | Regressed: the cover is now 0 × 0 at every width |
| Fade at the bottom of gallery tiles | **Fixed** in KSK, partly in Livingroom |
| `takenOn` uses group size | **Fixed** |
| Time step names the group size | **Fixed** ("Choose a time for 4 guests") |
| Psychologist mock-payment screen | Pending (P2, consent) |
| Sub-section titles in sentence case | **Fixed** for `.sub__title`. Exploring, Case 06 and journeys titles still wide caps |
| Smaller minor-case titles | Partly. Smaller, but "WEBSITE FOR A PSYCHOLOGIST" is still the widest headline |
| Ebook folded into one line | Not fixed |
| Duplicate "concept" kicker and flag | **Fixed** |
| Hero role stated twice | Not fixed (three times now, counting "AI-native") |
| KSK order: concept last, different container | **Fixed** |
| Journeys 2–3 marked pending (or table) | **Fixed** (pending pills; no table) |
| Name the five questions | Pending (P1 10b) |
| "Where I disagreed with the AI" block | Not fixed |
| Remove the commit-hash bullet | **Fixed** (hash removed; the bullet stays) |
| "two rounds of review" | **Fixed** ("several rounds") |
| Basko "two directions" frame and tool name | Not fixed (tool pending, P0 7a) |
| Case 05 AI table → one sentence | Not fixed |
| Livingroom lead fragment | **Fixed** |
| KSK D "stays smooth" | **Fixed** |
| KSK map "next to the analytics" | **Fixed** |
| Cases aside as a template description | Not fixed |
| Workflow 06 generic | Not fixed |
| Workflow 01 fragment | Not fixed |
| "Sub-project 1/2" kickers | **Fixed** |
| Live Basko URL and social links | Pending (P1 10a) |
| One page of the KSK plan | Pending (P1 10c) |

Of 38 points: 21 fixed, 2 partly fixed, 5 waiting for candidate content, 9 still open, 1 regressed.

---

## Top 5 remaining improvements, ranked by impact

1. **Show one decision where Hubert overruled the AI** (`index.html` `#this-portfolio`, Basko `.gallery`, workflow 06). Add "Where I said no to the AI" with two items (*AI proposed → I chose → why*). Add the rejected Basko 3D frame with the tool's name next to the shipped 2D frame, or remove the AI-video line. This is the question the AI-native role turns on, and right now the page only asserts the answer.
2. **Fix the regression and the four-time layout bugs** (`css/main.css` line 994 `width: 100%` for the ebook cover; `js/carousel.js` z-order or end-aligned meta so right-hand card titles are not cut; the gap after `.exploring`; the dark nav over `.case--dark`; the hero corner baselines; the film width at 1440). The ebook bug leaves an empty half-screen in Case 05, and a reviewer will see it as unfinished.
3. **Fill the P0/P1 evidence before 6.11** (`docs/do-uzupelnienia.md` 7a, 10a–c, 11–12, 18). This covers the live Basko link and social profiles, the five questions, one page of the plan, the Botpress agent with a screenshot, and the KSK intro and outro as loops at the top of `#ksk-video`. Category 2 and 5 scores above assume these are in. Without them, both drop by one.
4. **Break the template and calm the hierarchy** (`index.html`, `css/main.css`). Cut the AI tables and the A–E blocks from Cases 04–05 to a sentence each, fold the ebook into one line, state the role once in the hero, move the Livingroom brief into a `<details>` below the prototype on phones, and set the Exploring, Case 06 and journeys titles in sentence case. Fewer, calmer blocks will make the strong parts read as judgement rather than process.
5. **Make KSK as careful as Livingroom, and finish the copy** (`js/proto-ksk.js`: slot optional in quote mode or the copy changed; a "no free time on this day" state; `index.html`: cases aside, workflow 01 and 06, the Basko tools cell, the About "long hours" line, pending markers phrased as statements, a literal translation of the brief's original order). These are small, and an interviewer clicking the KSK prototype will find the over-30 contradiction in a minute.
