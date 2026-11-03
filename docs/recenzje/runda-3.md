# Review round 3

Reviewer: senior product designer, Flying Bisons (blind review: I have not seen how the site was made).
Role: Junior UX/UI Designer (AI-Native). Review date: 3.11.2026, three days before the deadline.
Material: `index.html` (read in full), `js/proto-living.js`, `js/proto-ksk.js`, `js/proto-kit.js`, `js/hero.js`, `js/carousel.js`, `js/motion.js`, `tests/`, `docs/qa-log.md`, and 52 screenshots: all 19 at 1440 light, 12 at 390 phone, 9 at 768 dark, the 8-frame hero strip, 6 Livingroom states including the gallery, 4 KSK states including the gallery. I formed my scores before reading rounds 1 and 2.

| # | Category | Round 1 | Round 2 | Round 3 |
|---|---|---|---|---|
| 1 | Wow effect and quality of motion | 7 | 7 | **7** |
| 2 | Clarity of message | 6 | 6 | **7** |
| 3 | UX thinking (states, flows) | 8 | 8 | **8** |
| 4 | Visual quality | 7 | 7 | **7** |
| 5 | Credibility of the AI work | 5 | 6 | **6** |
| 6 | Quality of the English copy | 6 | 6 | **7** |
| | **Overall** | 6.5 | 6.7 | **7.0** |

**Verdict.** Yes, this gets an interview. Among junior applicants I would put it in the top 10–15%. The reason is still the two booking prototypes: a step indicator, an error summary that links to each field, a network-failure switch, a branch for large groups and a "Show all states" gallery. Most juniors show screens. This candidate shows behaviour. This round fixed real things: Livingroom now asks for party size before time and says why, both prototypes use one rule for "nothing selected yet", the KSK attribution question is optional, the journeys chart draws fully, motion is down to four fade groups, About opens with the design claim, and `tests/` is committed. The page is calmer and more honest.

Three things still keep it at 7. First, the hero never shows the full name. In all 8 frames the T is a sliver. Second, the work that would prove the claims is described but not shown. There is no link to the live Basko site or its social profiles, no frame of the rejected AI ad, no page of the 59-page plan, and the KSK "video branding" section shows a 35-second film where the candidate's role is "pending" instead of the 3-second intro and outro he says he made. Third, the page still says "what I decided" more often than it shows a decision Hubert made against the AI or a reviewer.

---

## 1. Wow effect and quality of motion: 7/10

The arc carousel is still the best motion on the page: inertia on drag, arrow keys, it stops where the user leaves it, and clones are hidden from assistive tech. The scroll motion is now restrained (four fade groups in `js/motion.js`, journeys drawn once, no pin). That is the right budget. The hero is the problem, and it is the first thing anyone sees. In `hero-8-frames.png`, all 8 frames read "HUBER" plus a 5–10 px sliver of T. The same happens in `1440-light-00-hero.png`, `390-light-00-hero.png` and `768-dark-00-hero.png`. The cause is geometric: two copies of the word plus two separators fill the cylinder, so one word covers about 145° of the cylinder and its first and last letters sit almost side-on to the viewer. The dwell cannot fix that, because even at the exact front angle the outer letters are compressed. In two of the frames, a mirrored back glyph ("Я" and the orange "+") still sits left of the H.

**Fixes**
- `js/hero.js`, `seq`: make the front word use a smaller angle of the cylinder. For example use one copy of `HUBERT` followed by a longer, quieter phrase (`' · JUNIOR UX/UI · AI-NATIVE · '` in the outline style), so the word covers no more than about 90° (±45°). The radius grows and the T reads in full.
- `js/hero.js`, `tick`: snap `theta` to `theta0` during the dwell, so the hold frame is exactly centred and not a few degrees past it.
- `js/hero.js`: hide the separator glyph (`.is-sep`) while `--bo` is 0, so nothing in orange appears left of the H while the word faces the viewer.
- Check the result with the same 8-frame strip. The bar is the full word, readable, in at least 5 of 8 frames.

## 2. Clarity of message: 7/10

Up one point. The hero says what he is. The work intro no longer explains a mismatch. The KSK agent no longer has its own empty section. About opens with "I design and build websites and prototypes". The "Content pending" markers (13 visible) look planned and consistent. Once they are filled, the structure works. The CV and Contact sections are fine as structures.

What is still unclear:
- **The KSK case is overloaded.** One article holds a stats row, a journeys chart, an AI table, three sub-projects (booking concept, 3D model, video) and three accordions. A recruiter scrolling it loses which part is client work and which part is a portfolio concept. The orange "Concept prototype built for this portfolio" flag helps. The order does not: the concept comes before the real 3D model.
- **The journeys chart still encodes little.** The lanes are "Journey 1–4" and are not linked to the five persona chips above them, and journeys 2 and 3 are dashed bars at lengths the note says are not known (`1440-light-04-journeys.png`). The plan exists, so the journeys have names.
- **"Every section answers the same five questions"** appears twice (KSK role, KSK process). The five questions are never named. That is the most interesting detail of the whole research case.
- **The ebook (05b) has no screenshot, no topic, and an empty AI column.** It is the thinnest block on the page and it gets a full heading and a large cover. Cut it, or reduce it to one line under the training plans.
- **The cases sub-head** ("Each case follows the same structure where the material allows: …") is a template description. The reader sees the structure anyway.

**Fixes**
- `index.html` `#ksk-pretor`: reorder the sub-projects to 3D model (live client work), video, then the booking concept, and put the concept in a visibly different container (for example, a dashed frame). Name the five questions in the role list.
- `index.html` `#journeys`: give each lane its persona or journey name, and either remove the dashed bars or replace the chart with a table: journey → who → planning time → main drop-off.
- `index.html` `#ebook`: delete the block, or fold it into one sentence in the case 05 subtitle.
- `index.html` `#cases .sec-head__aside`: replace it with one sentence, such as "Four client projects and one I started myself." Or drop it.

## 3. UX thinking (states, flows): 8/10

This is still the strongest category and the most important one for this role. Round-2 issues are fixed: party size comes before time, and the note under the title says why (`1440-light-09-livingroom-booking.png`). KSK *Weiter* is disabled with a written reason, as in Livingroom (`ksk-1440-03-small.png`). The attribution question is optional. The step-1 price box shows "nach Gruppengröße" instead of a fake total. The gallery tiles stack the price box (`ksk-1440-08-gallery.png`). The error summary pattern (`lv-05-errors.png`, `ksk-1440-05-errors.png`) is correct: a summary that links to each field, inline messages that say what to type, and live clearing once a field is fixed. The empty state offers the nearest free date in one tap. That is the detail I would ask about in an interview.

What stops this from being a 9:
- **No designed state is shown from client work.** Both prototypes are concepts made for the portfolio. Basko's quote-form error handling is "pending". The psychologist path is a 4-step diagram with no screen. One real screen of the psychologist's mock payment or thank-you page (anonymised) would show the same thinking in work a client uses.
- **On the success screen the last step is still "current", not done** (`lv-08-success.png`, `ksk-1440-07-sent.png`). The flow is finished, but the indicator says it is not.
- **The step bar stays visible above the "Show all states" gallery**, with "Confirm" or "Prüfen" marked current (`lv-09-gallery.png`, `ksk-1440-08-gallery.png`). `createFrame` sets `stepsEl.hidden`, so either the screenshots are from an older build or something overrides it. Check it.
- **Taken times are the same every day** (`TAKEN` in `js/proto-living.js`). That flattens the demo.
- **KSK "Anfrage gesendet" gives no reply time.** A group organiser plans around that reply.
- **International phone numbers are handled but not listed** in Livingroom accordion D. It is a good edge case, and it is not on the list.
- The KSK slider sits at 12 while the field says 8 (`ksk-1440-03-small.png`).

**Fixes**
- `js/proto-kit.js` `drawSteps`: when the step is a done step (`success`, `enquirySent`, `sent`), mark every step done. Add a `stepOf` value such as `'done'` that sets `idx = steps.length`.
- `js/proto-living.js`: make `TAKEN` a function of the date. Add "International numbers" to accordion D in `index.html`.
- `js/proto-ksk.js` `sent`: add "Wir antworten innerhalb von 24 Stunden (Beispielwert)."
- `js/proto-ksk.js` `gruppe`: set the range `min` to 1, or show a "min. 12" mark when the size is below 12.
- `index.html` `#psychologist-site`: replace the wireframe slot with one anonymised screen of the mock payment step as soon as the client agrees.

## 4. Visual quality: 7/10

The system holds: wide grotesk for display, mono labels, one orange accent, and each prototype in its client's own palette (gold serif for Livingroom, red for KSK). The KSK dark card and the Livingroom booking frame are the best-looking parts of the page. The round-2 fixes are visible: no tile overlap, the film-strip chart frame is fixed, the Livingroom cover is recropped, and the hero CTAs sit under the lead. But the heading hierarchy is still loud. Every sub-section title ("GERMAN GROUP BOOKING PAGE", "TABLE BOOKING, EVERY STATE", "VIDEO BRANDING", "THIS PORTFOLIO", "WRITING THE STATES BEFORE THE BUILD") is in wide caps at near-H2 size, and the weakest case ("WEBSITE FOR A PSYCHOLOGIST", two lines, `1440-light-10-psychologist-site.png`) gets the biggest headline.

**Layout bugs visible in the screenshots**
1. `1440-light-17-cv.png`, `390-light-17-cv.png`: every sub-bullet under "Web designer…" gets an orange timeline node, so the four client lines look like four separate jobs. Cause: `.timeline li::before` in `css/main.css` also matches the nested list. **New.**
2. `768-dark-12-ebook.png`: the ebook cover is a full-width cream card about 600 px tall, mostly empty, and it does not follow the dark theme (`.type-cover--ebook { background: #f4f3ef }`). **New.**
3. `hero-8-frames.png`, `1440-light-00-hero.png`, `390-light-00-hero.png`, `768-dark-00-hero.png`: the T of HUBERT is a sliver in every frame (see category 1).
4. `390-light-01-work.png`, `768-dark-01-work.png`: on the centre card, "01 BASKO CLEAN" still sits on top of "CZYSTO" in the image. Fixed at 1440, not at 768 and below.
5. `1440-light-01-work.png`: the neighbouring cards still cut off each other's titles ("SK PRETOR", "D MODEL", "IVINGROOM").
6. `lv-09-gallery.png`, `ksk-1440-08-gallery.png`: the step bar shows above the gallery with the last step marked current. In `lv-09-gallery.png`, tiles 07, 09 and 10 are also cut mid-field at the tile edge.
7. `1440-light-18-contact.png`: the left column (lead, e-mail, button) starts about 95 px below the link list. `.contact__grid { align-items: end }` causes it.
8. `1440-light-07-ksk-video.png`: the volume control shows on a film captioned "no sound", and the right column is empty under the 2×2 film strip.
9. `1440-light-14-exploring.png`: about 300 px of empty grid under the orange panel. `768-dark-00-hero.png`: about 450 px of empty grid above the word.
10. `ksk-1440-03-small.png`: the native number spinner duplicates the −/+ buttons, and the portfolio's orange focus ring sits inside a red-branded UI.
11. `768-dark-02-basko-clean.png`, `768-dark-03-ksk-pretor.png`: the four-item facts row breaks 3 + 1, which leaves "Tools" alone on a second row.

(`lv-sheet.png` shows the old step order, time before guests. It is stale and I did not score it.)

**Fixes**
- `css/main.css`: `.timeline > li::before` instead of `.timeline li::before`.
- `css/main.css` `.type-cover--ebook`: use the theme surface token, and cap `.type-cover--large` at `max-height: 420px` below 900 px. Or delete the block (category 2).
- `css/main.css` `.card__meta`: below 900 px, raise `padding-top` and make the gradient opaque behind the title. Or move the title under the image.
- `css/main.css` `.contact__grid`: `align-items: start`.
- `css/main.css` `.facts`: use `repeat(2, 1fr)` between 600 and 1000 px.
- `css/main.css` `.sub__title`, `.exploring__title`, `.meta-case__title`, `.journeys__title`: body grotesk, 32–40 px, sentence case. Scale `.case--minor .case__title` to about 60% of the other case titles.
- `css/main.css`: reduce the section spacing after `.exploring`, and make `.hero` at 600–1000 px `min-height: auto` with the stage centred.
- `index.html` KSK film: add `muted` and drop "no sound" from the caption, or keep the sound. Use the empty column for the 3-second intro and outro (see category 5).
- `css/proto.css`: hide the number spinner (`appearance: textfield`) and set the focus colour per prototype (`.proto--ksk :focus-visible { outline-color: #c8102e }`).

## 5. Credibility of the AI work: 6/10

Better in detail, the same in kind. Good changes: `tests/` is committed, so "the test scripts are in the repository" is now true. Playwright is described as scripts the AI wrote, not as AI. "Minimum 8/10" is gone. The QA log links each defect to a commit. The "This portfolio" Me column is specific: picking the reference, renaming the hero word (with a commit hash), writing the brief, setting the rules.

Why it stays at 6:
- **The most persuasive AI story is still not shown.** "An AI video model produced a realistic 3D version" (Basko) has no tool name and no frame. "Rejected the realistic 3D version" is said in three places on the page and shown in none.
- **The described AI-built motion work is not on the page.** The KSK video section says "I built the animations in HTML and GSAP and rendered them frame by frame" and describes a 3-second intro and outro, but it shows a 35-second film with "My role in the film: pending". The one artefact that would prove the GSAP-to-MP4 skill is missing. The `TODO` in `index.html` (`ksk-intro.mp4`, `ksk-outro.mp4`) suggests the files exist.
- **Almost every "caught" item was caught by a machine or an AI reviewer.** The Livingroom note says "Changed after design review: my brief had time before party size". That was an AI reviewer, but a recruiter will read it as a human review. It is honest to say it, and it would be stronger to say: "An AI review flagged it. I checked how two booking tools handle it and agreed."
- **The AI agent is the only AI product, and it is one line marked "pending".** Fine to keep for now, but the "Exploring 03" item leans on it.
- **The same two-column AI table appears seven times.** By the fifth one (training plans), it reads as a template. In the ebook, one side is empty.

**Fixes**
- `index.html` Basko `.gallery`: add a "Two directions" figure: one frame of the AI 3D version next to one frame of the shipped 2D ad, the tool's name, and one sentence on why. If no frame survives, cut the AI-video line and keep only the 2D decision.
- `index.html` `#ksk-video`: put the 3-second intro and outro (PL and DE) first, as small looping, muted videos. Keep the 35-second film only once his role in it is confirmed. Otherwise remove it.
- `index.html` `#this-portfolio`: add a block "Where I overruled the AI or a reviewer" with two concrete items. In the Livingroom note, write "AI design review" instead of "design review".
- `index.html` cases 05a and 05b: remove the compact AI tables and replace each with one sentence ("Claude built the template; I designed it for one column on a phone").

## 6. Quality of the English copy: 7/10

Up one point. Most round-2 items are fixed: "locked weapon" is gone, "Wlkp." is gone, "Case 06" is numbered correctly, the work intro is clean, the error summary uses a dash, and the AI aside no longer repeats the slogan. Several lines sound like a person: "Nobody asked me for a redesign." "The demo had to convince on its own." "Two projects built on one idea: a page people use on their phone, not a document they download." The English is clear and consistently British.

**Sentences that still sound AI-generated, translated or templated**
- Hero: "I build with AI tools every day. The decisions stay with me." It is still a slogan. Try: "I design with AI tools and decide what ships."
- Cases aside: "Each case follows the same structure where the material allows: problem, my role and constraints, process, what AI did and what I did, states and edge cases, outcome and next steps." A template described in prose.
- Workflow 06: "I review the result before it goes to the client. I keep what fits the brand and the user." Generic. Give one example.
- About: "I follow the AI industry closely, and I believe working with AI tools is where design is going. I want to get much better at it." Name one thing you changed in your workflow this year.
- About: "I work a lot when I can see the work pays off." This reads as translated. Use "I work hard when I can see results."
- Basko D: "Profile pictures in light and dark versions, so the figure reads on both app themes." The reason sounds added afterwards.
- KSK D: "…no reflection, so the model stays smooth." Use "so it runs smoothly on phones".
- KSK booking map: "…so enquiries record their source next to the analytics". Use "so each enquiry records where it came from".
- Livingroom lead: "With the states a real booking form has to handle: …". This is a fragment. Use "It includes the states a real booking form has to handle: …".
- KSK subtitle: "Plus a booking-page concept built for this portfolio." Still a fragment. Flagged in round 2.
- "Case 06 · Proof" still reads like a sales page. Use "Case 06 · Process".

**Errors and slips**
- Basko facts, "Tools: Claude Code, React, video editing": "video editing" is an activity, not a tool. Name the editor. Flagged in round 2.
- "Sub-project 1/2/3" in the KSK kickers is a document term. "KSK Pretor · Booking concept", "· 3D model" and "· Video" read better.

---

## Unverifiable claims

| Claim | Where | Status |
|---|---|---|
| "Live website, maintained and updated by me" | Basko facts | No link to the live site. This is the most important project, and the one fact a recruiter can verify in 5 seconds. Add the URL. |
| "I still run the three social profiles" | Basko AI table | No links to Instagram, LinkedIn or TikTok. Add them. |
| "A language switch, Polish and English" | Basko accordion D | Third round with no evidence. All Basko screenshots are Polish. Show the EN version or remove the line. |
| "An AI video model produced a realistic 3D version" | Basko | Tool not named, no frame. |
| "20-second vertical reel…" vs the "motion-graphic ad" with the cleaner figure and the mop | Basko | The caption does not mention the figure or the mop. Is the reel the ad? If not, the ad is missing. |
| "Every section answers the same five questions" | KSK, twice | The questions are not named. |
| 59-page owner version, 40+ competitors, 7 drop-offs, 8 levers | KSK | Plausible, but nothing is shown. One anonymised page of the plan (the persona or journey page) would carry the whole research case. |
| "I built the animations in HTML and GSAP and rendered them frame by frame" | KSK video | The intro and outro are not on the page. The film that is shown has the role marked "pending". |
| Wispr Flow "for dictation" at the job site | Workflow 01 | A specific habit that appears nowhere else. Keep it only if it is true. |
| Five photo presets, five disassembly steps, ~1 MB | 3D model | Verified in earlier rounds. OK. |
| Tests in `tests/`, QA log with commits | This portfolio | Verified: the scripts and `docs/qa-log.md` exist, and commit `3762e06` ("Napis w hero: HUBERT") exists. OK. |

---

## Round 2 points: fixed and not fixed

| Round 2 point | Status |
|---|---|
| Hero: lower the dwell floor, widen the window | Done (0.05, /0.62), but the word still never reads in full (geometry, see category 1) |
| Hero: fade back outlines near the front | Mostly fixed (`--bo`). The orange separator still shows in some frames |
| Hero: CTAs under the lead | Fixed |
| Fade-up groups cut to four | Fixed |
| Journeys: no pin, drawn on entry | Fixed |
| Journeys: name them or use a table | Not fixed (lanes "Journey 1–4", two dashed) |
| Remove the empty `#ksk-agent` section | Fixed (one line now) |
| Ebook folded or cut | Not fixed (worse at 768 dark) |
| Work intro "six projects on seven cards" | Fixed |
| About opens with the design claim | Fixed |
| Livingroom: party size before time | Fixed, with the reason on the page |
| `TAKEN` per day | Not fixed |
| One rule for "nothing selected" across both prototypes | Fixed |
| Attribution question optional | Fixed |
| KSK step-1 group total | Fixed |
| KSK reply time frame | Not fixed |
| "International numbers" in accordion D | Not fixed |
| Tile overlap of the KSK price box | Fixed |
| `ksk-film-price` empty frame | Fixed |
| Ebook "READERS" clipped at 1440 | Fixed at 1440; new problem at 768 |
| Card number over "CZYSTO" | Fixed at 1440, not at 768 and 390 |
| Neighbouring card titles cut at 1440 | Partly |
| Livingroom cover crop | Fixed |
| Silent film volume control, empty column | Not fixed |
| Empty space under Exploring, above the tablet hero | Not fixed |
| Gallery tile 10 cut | Not fixed |
| KSK spinner, slider mismatch | Not fixed |
| Contact column offset | Not fixed |
| Sub-project titles in wide caps; psychologist headline size | Not fixed |
| Playwright and axe out of "What AI did" | Fixed |
| Commit the test scripts | Fixed |
| "Minimum 8/10" rule | Fixed |
| "What I changed by hand" | Partly (the commit for the hero word; no overrides) |
| Basko two directions with the tool name | Not fixed |
| AI table repetition | Not fixed |
| "locked weapon", "Wlkp.", "?:" | Fixed |
| Hero slogan | Not fixed (now said in fewer places) |
| "I work a lot when…" | Not fixed |
| KSK subtitle fragment, "Proof" | Not fixed |
| Basko "video editing" as a tool | Not fixed |
| Basko PL/EN claim | Not fixed |
| 35-second film explained | Partly (role marked "pending", honest) |

---

## Top 8 remaining improvements, ranked by impact

1. **Make the hero read "HUBERT" in full** (`js/hero.js`, `seq` and `tick`). Change the sequence so one word covers about 90° of the cylinder (one copy of the name plus a longer outline phrase), snap to the front angle during the dwell, and hide the separator while the word faces front. Accept the change only when the 8-frame strip shows the full word in at least 5 frames. It is the first impression, and a recruiter will read "HUBER".
2. **Link and show the real work behind the main claims** (`index.html` Basko facts and `.gallery`; `#ksk-video`). Add the live Basko URL and the three social profile links. Put the 3-second KSK intro and outro (PL and DE) on the page as muted loops, and keep the 35-second film only if his role in it is confirmed. Add one anonymised page of the 59-page plan and name the five questions.
3. **Show Hubert's own judgement against the AI** (`index.html` Basko `.gallery`, `#this-portfolio`, the Livingroom note). Add the "two directions" Basko frame with the tool name, or cut the AI-video line. Add a block "Where I overruled the AI or a reviewer" with two concrete items. Change "design review" to "AI design review" in the Livingroom note and the caught list.
4. **Fix the visible layout bugs** (`css/main.css` `.timeline > li::before`, `.contact__grid { align-items: start }`, `.card__meta` below 900 px, `.facts` 2 columns at 600–1000 px, empty space after `.exploring` and above the tablet hero; `css/proto.css` number spinner and KSK focus colour; `index.html` film `muted`). These are what a reviewer screenshots in a rejection note.
5. **Cut the ebook and calm the hierarchy** (`index.html` `#ebook`; `css/main.css` `.sub__title`, `.exploring__title`, `.meta-case__title`, `.journeys__title`, `.case--minor .case__title`). Delete or fold the ebook. Set sub-section titles in the body grotesk, sentence case, 32–40 px. Shrink the minor case titles. Replace the AI tables in case 05 with one sentence each.
6. **Restructure the KSK case and the journeys chart** (`index.html` `#ksk-pretor`, `#journeys`). Order: research, 3D model, video, then the booking concept in a visibly different frame. Name the journeys, link them to the personas, and drop the dashed bars, or replace the chart with a journey → persona → planning time → main drop-off table.
7. **Polish the prototype states** (`js/proto-kit.js` `drawSteps`; `js/proto-living.js` `TAKEN`; `js/proto-ksk.js` `sent` and the range `min`; `index.html` Livingroom accordion D). Mark all steps done on success screens, check that the step bar hides under the gallery, vary taken times by day, add a reply time to the KSK success screen, and list "International numbers" as a handled state.
8. **Copy pass** (`index.html` hero lead, `#cases .sec-head__aside`, workflow 06, `#about`, Basko and KSK accordions D, KSK subtitle and kickers, "Case 06 · Proof", Basko tools). Rewrite the sentences listed in category 6, and keep one plain, specific version of "the decisions stay with me".
