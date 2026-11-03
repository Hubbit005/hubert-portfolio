# Review round 2

Reviewer: senior product designer, Flying Bisons (blind review: I have not seen how the site was made).
Role: Junior UX/UI Designer (AI-Native). Review date: 3.11.2026, three days before the application deadline.
Material: `index.html` (read in full), `js/hero.js`, `js/carousel.js`, `js/motion.js`, `js/proto-living.js`, `js/proto-ksk.js`, `proto/ak47/`, the tracked files in the repository, and 40 screenshots: 19 at 1440 light, 10 at 390 phone, 7 at 768 dark, the 8-frame hero strip, both "Show all states" galleries and the KSK state screenshots.

| # | Category | Round 1 | Round 2 |
|---|---|---|---|
| 1 | Wow effect and quality of motion | 7 | **7** |
| 2 | Clarity of message | 6 | **6** |
| 3 | UX thinking (states, flows) | 8 | **8** |
| 4 | Visual quality | 7 | **7** |
| 5 | Credibility of the AI work | 5 | **6** |
| 6 | Quality of the English copy | 6 | **6** |
| | **Overall** | 6.5 | **6.7** |

**Verdict.** The site is better than in round 1 but has not moved category. The fixes were mostly local: the KSK small-group dead end, international phone numbers, the carousel stopping after interaction, the role line under the hero word, sentence-case block titles, the footer and stats alignment. All good. A new "This portfolio" case is the most useful addition. It is the first place on the page where the AI story has specifics. The structural problems are the same as in round 1: 17 visible placeholders again (some removed, others added), a whole AI-agent sub-project with nothing in it, three of seven projects without one real screenshot, and the Basko "rejected AI version" story still told and not shown. A few new visual bugs have appeared as well. I would still interview this candidate for the prototypes alone. To reach 8, the next three days should go into cutting and evidence, not into new features.

---

## 1. Wow effect and quality of motion: 7/10

The hero is better. The dwell in `js/hero.js` slows the cylinder when a copy of the word faces front, and the role now sits in real type under the word. But in `hero-8-frames.png` only 3 of 8 frames read as a complete "HUBERT". The rest read "HUBER" or "UBERT", and in `1440-light-00-hero.png` the mirrored back outlines ("ЯE") still run through the gap behind the H. On the phone the word fills the width, so the leading letter is cut at the stage edge (`390-light-00-hero.png`). Below the hero, motion is still everywhere: 21 fade-up selector groups in `js/motion.js`. The pinned journeys diagram still looks almost empty in a normal scroll: only Journey 1 is drawn in `1440-light-04-journeys.png`, and only lanes 1–2 in `390-light-04-journeys.png`. The count-ups are gone and the carousel now stays where the user leaves it. Both were good fixes.

**Fixes**
- `js/hero.js` `tick`: lower the dwell floor from `0.16` to about `0.05` and widen the window (`dist / 0.55` → `dist / 0.75`), so the full word holds for at least 1.5 s per half-turn.
- `js/hero.js` glyph build: set the opacity of each `.cyl__o` from its angle to the front, at 0 within ±50° and ramping to 0.35 at the back. The mirrored outlines then never cross the front word. This was asked for in round 1 and not done.
- `css/main.css` `.cyl`: clamp the font size so the front word is at most about 88vw on phones.
- `js/motion.js`: reduce the fade-up list to `.sec-head__aside`, `.gallery .shot`, `.sub__grid > *` and `.model-embed`. Drop the journeys pin (`mm.add('(min-width: 1000px)…')`) and use the non-pinned `once: true` build at every width, so the whole chart is drawn when it enters the screen.

## 2. Clarity of message: 6/10

The hero now says what Hubert is in two seconds, which fixes the biggest round-1 issue in this category. Everything below it has the same problems as before. I count **17 visible placeholders** again: Basko tool name, Basko outcome, KSK agent, KSK outcome, Livingroom illustrations, Livingroom outcome, psychologist screenshots, two in training plans, two in the ebook, Sendcastle, CV link, two "dates pending", English level, LinkedIn. They are styled consistently and look planned, not forgotten. Three of them sit where a recruiter looks first: the CV button, the LinkedIn row and **"English: level pending" on a role whose one hard requirement is C1**. The AI agent sub-project (`1440-light-07-ksk-agent.png`) is still a full H4 section that holds one pending card. Round 1 asked to remove it. The ebook is still a full case with no screenshot and no topic. "Six projects on seven cards" in the work intro explains the inconsistency instead of removing it. About still opens with "I am a freelance web designer. I also do marketing…", so the design claim comes second.

The journeys diagram is also unclear in what it encodes. Bar length is "planning time, relative", but the bars are drawn along a funnel axis (Trigger → Visit). So Journey 1 seems to stop at "Search", which suggests those customers never book. The note "Bar lengths and dot positions are illustrative" admits the chart shows no data.

**Fixes**
- `index.html` `#ksk-agent`: delete the section and mention Botpress in one line of the KSK facts (`Tools` already lists it). Restore it only with a description and a screenshot.
- `index.html` `#cv`: link the Google Doc version of the CV now. Fill the English level (the offer requires C1) and LinkedIn before sending, or remove the LinkedIn row.
- `index.html` `#ebook` and `#training-plans`: merge them into one "Smaller projects" block with one paragraph each and a smaller title. Remove the ebook card from the arc. Then change the work intro to "Six projects, from a live client website to a 3D model in the browser."
- `index.html` `#journeys`: either name the four journeys and the seven drop-offs (the plan exists), or replace the chart with a plain table: persona → planning time → main drop-off. Don't keep a diagram that you label as illustrative.
- `index.html` `#about .lead`: open with "I design and build websites and clickable prototypes for small businesses." Put marketing and video in the second sentence.

## 3. UX thinking (states, flows): 8/10

Still the strongest category, and the round-1 defects are fixed. The KSK under-12 state now offers "Zur Standardbuchung" and "Auf 12 Personen erhöhen", the disabled *Weiter* has a written reason, and the stale date error no longer stacks with it (`ksk-1440-03-small.png`). Livingroom accepts international numbers. The over-30 path, the "Sonstiges" free-text field and the send failure that keeps the data are all handled and shown in `ksk-1440-08-gallery.png`. What stops this from being a 9:
- **Livingroom asks for time before party size** (`js/proto-living.js`, steps `date → time → party`). In a real restaurant, free tables depend on party size, so most booking tools ask for it first. As built, a guest can pick 19:30 and then find out at step 3 that a group of 9 goes to a different flow. Either reorder, or write down why you didn't. Taken slots are also identical on every day (`TAKEN`), which flattens the demo.
- **The two prototypes handle the same problem in opposite ways.** Livingroom disables *Continue* until a date is chosen. KSK keeps *Weiter* active with no date and shows an error after the click (`ksk-1440-02-termin-fehlt.png`), but disables it for groups under 12. Inside one design system this needs a rule.
- **The required "Wie haben Sie von uns erfahren?"** adds a mandatory field at the last step of a flow whose research is about seven drop-off points. Conversion tracking can come from UTM parameters, and the question can be optional. As a reviewer I would ask why it is required.
- **The KSK price box still shows a group total of 1.104 € on step 1**, before the user has entered a group size (`1440-light-05-ksk-booking.png`). Round-1 issue, not fixed.
- The KSK success screen says "Wir melden uns" without a time frame. A group organiser plans around that reply.
- Client work still shows almost no designed states. Both prototypes are "built for this portfolio", the Basko form states are pending, and the psychologist site has no screenshots.

**Fixes**
- `js/proto-living.js`: move `party` before `time` in `steps` and `render`, or add one line to accordion D explaining the order. Make `TAKEN` depend on the day.
- `js/proto-ksk.js` `gruppe`: disable *Weiter* until a slot is chosen, with a note like the under-12 one, to match Livingroom. Or switch Livingroom to validate on click. Pick one and state the rule in the case text.
- `js/proto-ksk.js` `validateContact`: make `quelle` optional and add a line to the map table: "Conversion tracking → UTM tags, plus an optional question".
- `js/proto-ksk.js` `priceBox`: on `paket`, show "ab 49 € p. P." and no group total.
- `js/proto-ksk.js` `sent`: add "Antwort innerhalb von 24 Stunden" or a similar promise. Mark it as a sample value.
- `index.html` Livingroom accordion D: add "International numbers" as a state, since it is now handled.

## 4. Visual quality: 7/10

Several round-1 bugs are fixed: the TEAM price no longer wraps, the ebook lead has spacing, the footer aligns, the stats labels share a top line, and the section titles share one left edge. The system is still coherent: wide grotesk, mono labels, one orange accent and a per-client palette inside each prototype. The KSK dark card is still the best-looking part of the page. But new bugs have appeared, and the heading hierarchy is still loud: every sub-project title (`.sub__title`, `.journeys__title`, `.exploring__title`, `.meta-case__title`) is in wide caps at near-H2 size. The weakest cases also get the biggest headlines: "WEBSITE FOR A PSYCHOLOGIST" spans two 90 px lines above a case with no real screenshot (`1440-light-11-psychologist-site.png`).

**Layout bugs visible in the screenshots**
1. `ksk-1440-08-gallery.png`, tiles 02, 03 and 04: the dark price box overlaps the main column text ("Preis pro Person und f…", "Für große Grupp…"). New in this round.
2. `1440-light-08-ksk-video.png`, `390-light-08-ksk-video.png`: the fourth film-strip frame (`ksk-film-price`) is an empty grey frame. The alt text promises a bar chart.
3. `1440-light-13-ebook.png`: "READERS" in the large type cover runs past the card's right edge and is clipped.
4. `390-light-01-work.png`, `768-dark-01-work.png`: the card number "01" and the title sit on top of "CZYSTO" in the Basko image. Two type layers collide. Not fixed from round 1.
5. `1440-light-01-work.png`: neighbouring cards cover each other's titles ("PRETOR", "IODEL", "IGROOM"). At 1440 px only the centre card is readable, although there is room for five.
6. `1440-light-00-hero.png`, `768-dark-00-hero.png`: the hero lead ends with "me." alone on the last line. The CTAs sit at the far right, 500 px from the lead they belong to.
7. `1440-light-09-livingroom.png`: the cover is still cropped through the demo's navigation bar. Not fixed from round 1.
8. `1440-light-08-ksk-video.png`: the volume control is shown on a film captioned "no sound". There is also an empty right column under the film strip. Not fixed from round 1.
9. `1440-light-15-exploring.png`: about 300 px of empty grid under the orange panel. Not fixed from round 1.
10. `768-dark-00-hero.png`: about 450 px of empty grid above the word at tablet size. The word is about 80 px tall on a 1024 px screen.
11. `proto-living-gallery.png`, tile 10: the field hint is cut mid-line at the tile's bottom edge.
12. `ksk-1440-03-small.png`: the native number spinner and the −/+ buttons still duplicate each other. The range slider stays at 12 when the field says 8.
13. `1440-light-19-contact.png`: the left column starts about 100 px lower than the link list on the right.

**Fixes**
- `css/proto.css`: inside `.pk__tile`, stack `.ksk-price` under the main column (`grid-template-columns: 1fr`), or hide it in tiles.
- Re-export `assets/img/ksk-film-price-*` from a frame after the chart has animated in.
- `css/main.css` `.type-cover--large .type-cover__word`: `font-size: clamp(2rem, 4.2vw, 4rem)`.
- `css/main.css` `.card__meta`: add a dark gradient scrim under the meta (`linear-gradient(transparent, rgb(0 0 0 / .75))`) and move `.card__num` above the title. `js/carousel.js` `OVERLAP`: use about 1.0 when `vw ≥ 1200`.
- `css/main.css` `.hero__lead`: add `text-wrap: pretty`. Place `.hero__cta` directly under the lead (left aligned).
- `css/main.css`: set `.sub__title`, `.journeys__title`, `.exploring__title` and `.meta-case__title` in the body grotesk at about 32–40 px, sentence case. Scale `.case__title` down for cases 04–06.
- `index.html`: add `muted` and remove `controls` from the silent KSK film in favour of a play/pause button, or accept the volume icon and drop "no sound" from the caption. Fill or remove the empty column under the film strip.
- `css/proto.css`: `.ksk-size input { appearance: textfield }` and hide `::-webkit-inner-spin-button`. In `js/proto-ksk.js`, set the range `min` to 1, or show the slider at 12 with a "min." marker.
- Recrop `assets/img/livingroom-hero-*` to start below the demo's navigation bar.

## 5. Credibility of the AI work: 6/10

Up one point, for the "This portfolio" case. It names what Claude Code wrote, links the brief (`PROMPT.md`) and lists six concrete defects caught and fixed. That is the kind of specific detail round 1 asked for. Canva has been taken out of the AI column. But:
- **Everything in "What the checks caught" was caught by a machine.** The page never shows one thing Hubert noticed, disagreed with or overruled himself. That is the one thing we hire a junior for.
- **Playwright and axe-core are listed under "What AI did"**. Neither is AI; they are test tools. A design reviewer will notice the category error, and it inflates the AI column.
- **"…so you can check the split below"**: the repository has no Playwright scripts and no axe report (`git ls-files` shows none). The claim cannot be checked.
- **"Minimum 8/10 in review" as a rule you set** reads as optimising for an AI grader. It is not a design standard.
- **The Basko story is still unshown.** "An AI video model produced a realistic 3D version" still has "Tool name pending", and there is still no frame of the rejected version next to the shipped 2D one. It is the strongest AI-judgement story on the page, and it is mentioned three times and shown nowhere.
- The AI agent, the only AI product in the portfolio, is still empty.
- The "What AI did / What I did" table appears seven times in the same shape. By the fourth, the repetition reads as a template.

**Fixes**
- `index.html` `#this-portfolio`: add a third block, "What I changed by hand", with two or three items from your own review, for example something you rejected in the hero or the card wheel and why. Move Playwright and axe-core to a separate line, "Tested with Playwright and axe-core". Commit the test scripts (for example `tests/`) or remove "so you can check".
- `index.html` `#this-portfolio`: replace "minimum 8/10 in review" with a rule a designer would recognise, such as "every state has to be reachable from the gallery".
- `index.html` Basko `.gallery`: add a "Two directions" figure: one frame of the realistic AI version and one of the 2D version, with the tool name and one sentence on why. If the frame no longer exists, cut the AI-video bullet and keep only the decision.
- `index.html`: shorten the AI table to one line per column in cases 05–06, or merge them into the "Smaller projects" block.

## 6. Quality of the English copy: 6/10

The copy is clean and consistently British, and a few lines now sound like a person: "Nobody asked me for a redesign." "The demo had to convince on its own." The round-1 tense slip ("run") and "Read at 50+" are fixed. But the same claim is still repeated six times: meta description, OG text, hero, AI aside, workflow card 06 and the split panel. Most paragraphs are still built from short declaratives in threes. Several round-1 items are untouched.

**Sentences that still sound AI-generated or translated**
- Hero: "I build with AI tools every day. The decisions stay with me." It is a slogan, and the rest of the page says it five more times.
- OG description: "AI tools do the legwork, I make the decisions." The same slogan with a comma splice.
- AI aside: "I use AI tools in every project, mostly to research and build faster. I decide what the problem is and what ships."
- Workflow 06: "I review the result before it goes to the client. I keep what fits the brand and the user."
- About: "I follow the AI industry closely, and I believe working with AI tools is where design is going." This is generic. Name one thing you changed in your workflow this year.
- About: "I work a lot when I can see the work pays off." This reads as translated. Use "I work hard when I can see results."
- KSK states: "…so the model never suggests firing a locked weapon." Flagged in round 1 and still there. Use "so it behaves like a real safety catch."
- Work intro: "Six projects on seven cards…" This explains an inconsistency to the reader.
- KSK subtitle: "Plus a booking-page concept built for this portfolio." This is a fragment.
- "Case 07 · Proof": "Proof" sounds like a sales page. Use "Case 07 · Process".

**Errors and slips**
- Livingroom facts: "Livingroom restaurant, Gorzów Wlkp. Not commissioned". "Wlkp." is still opaque to non-Polish readers, and the line is still a fragment. Flagged in round 1.
- KSK error summary: "Wie haben Sie von uns erfahren?: Bitte wählen…" still has the double punctuation (`ksk-1440-05-errors.png`, `js/proto-kit.js` `errorSummary`). Flagged in round 1.
- Basko facts, "Tools: Claude Code, React, video editing": "video editing" is an activity, not a tool. Name the editor.
- "English: level pending" in the Skills list of an English-language application.

---

## Unverifiable claims

| Claim | Where | Status |
|---|---|---|
| "The site has a Polish and an English version." | Basko, accordion D | Still unsupported. All Basko screenshots are Polish. Flagged in round 1. |
| "German-language film, 35 seconds" | KSK video caption | Still unexplained. The text above it describes a 3 s intro and outro and a 10 s spot. Say what this film is and what part you made. |
| "Personas: four of the five organise for a group" | KSK map table | Still an inference presented as a research finding. |
| "I dictate notes in Wispr Flow" at the job site | Workflow 01 | A specific habit that appears nowhere else. Keep it only if it is true. |
| "Playwright … clicked through every prototype state, also with the keyboard only" plus "so you can check" | This portfolio | No test files in the repository. |
| "Profile pictures in light and dark versions, so the figure reads on both app themes" | Basko, accordion D | The fact is fine. The reason looks added afterwards. |
| "Loads about 1 MB" | 3D model | Verified: `proto/ak47` plus `vendor/three` come to about 1.1 MB. OK. |
| Five photo presets, five disassembly steps | 3D model table | Verified in round 1. OK. |

**Repository note.** The page links the GitHub repository as evidence, so a reviewer will open it. It currently holds 33 MB of raw video (`assets/video/KSK_Pretor_film_DE_16x9_under_25MB (1).mp4`, `[C] Basko Clean reel 20s.mp4`), screenshots named `Zrzut ekranu 2026-11-03 …png`, and `docs/pytania-rozmowa.md` (interview prep), `docs/wideo-skrypt-en.md` (the application video script) and the review scores. Decide what you want a recruiter to read there before the link goes out.

---

## Round 1 points: fixed and not fixed

| Round 1 point | Status |
|---|---|
| Hero: hold the word at the front | Partly. Dwell added, but only 3 of 8 frames show the full word |
| Hero: fade back glyphs near the front | Not fixed |
| Hero: role in real type under the word | Fixed |
| Hero: remove the fake arrows | Fixed |
| Carousel: stop auto-rotation after interaction | Fixed (`touched`) |
| Remove count-ups | Fixed |
| Cut fade-up groups | Not fixed (21 groups) |
| Journeys diagram drawn by 50% in view | Not fixed |
| Placeholders 17 → about 5 | Not fixed (17 again; "Video pending" removed, others added) |
| Remove empty `#ksk-agent` | Not fixed |
| Cut or fold the ebook | Not fixed |
| Card count matches the case count | Patched in copy ("six projects on seven cards"), not fixed |
| About opens with the design claim | Not fixed |
| Working CV link | Not fixed |
| KSK under-12 dead end | Fixed |
| KSK conflicting messages | Fixed |
| Livingroom international phone numbers | Fixed |
| KSK price total on step 1 | Not fixed |
| "This portfolio" case | Fixed, with the problems listed in category 5 |
| Basko two directions plus tool name | Not fixed |
| Canva out of the AI column | Fixed |
| Sentence-case h4 and h5 | Partly (block titles fixed; sub-project titles still wide caps) |
| One left edge for section titles | Fixed |
| TEAM price wrap | Fixed |
| Ebook lead spacing | Fixed |
| Footer alignment | Fixed |
| Stats label baseline | Fixed |
| Livingroom cover crop | Not fixed |
| 390 "Video pending" overflow | Fixed (slot removed) |
| Silent film shows a volume control | Not fixed |
| Empty space under Exploring and under the film strip | Not fixed |
| Card number over "CZYSTO" | Not fixed |
| KSK number spinner, focus colour | Spinner not fixed |
| "run" tense | Fixed |
| "Wlkp." | Partly (still in the Livingroom facts) |
| "Read at 50+" | Fixed |
| "?:" in the KSK error summary | Not fixed |
| "locked weapon" rationale | Not fixed |
| Slogan repetition | Not fixed |

---

## Top 10 remaining improvements, ranked by impact

1. **Close the placeholders a recruiter checks first** (`index.html` `#cv`, `#contact`, `.skills`). Add the CV link (Google Doc), the English level (C1 is the offer's hard requirement), LinkedIn or remove its row, and dates. Delete the empty `#ksk-agent` section and the Sendcastle row. Target: no more than 5 pending markers, none in the CV or Contact sections.
2. **Show your own judgement, not only the machine's** (`index.html` `#this-portfolio`, Basko `.gallery`). Add "What I changed by hand" with 2–3 concrete overrides. Move Playwright and axe-core out of "What AI did". Commit the test scripts or drop "so you can check". Add the rejected-vs-shipped Basko frame with the tool name, or cut the AI-video bullet.
3. **Fix the new visual bugs** (`css/proto.css` `.pk__tile .ksk-price`; re-export `ksk-film-price`; `css/main.css` `.type-cover--large .type-cover__word`; `.card__meta` scrim and number position; recrop `livingroom-hero`). These are what a reviewer screenshots in a rejection note.
4. **Make the hero read as HUBERT** (`js/hero.js`). Hide the back outlines within ±50° of the front, lower the dwell floor to about 0.05 and widen it, and clamp the word to 88vw on phones. In `css/main.css`, add `text-wrap: pretty` to `.hero__lead` and put the CTAs under it.
5. **Rebalance the page** (`index.html`). Merge the ebook and training plans into a "Smaller projects" block, remove the ebook card from the arc, change the work intro to "Six projects…", and scale `.case__title` down for cases 04–06 so the weakest cases stop getting the biggest headlines.
6. **Fix or replace the journeys diagram** (`index.html` `#journeys`, `js/motion.js`). Name the journeys and drop-offs, or swap the chart for a persona → planning time → main drop-off table. Remove the pin.
7. **Make the two prototypes follow one rule** (`js/proto-ksk.js`, `js/proto-living.js`). Use one pattern for "nothing selected yet" (disabled with a reason, or validate on click), make the attribution question optional, remove the step-1 group total, and ask for party size before time in Livingroom, or say in accordion D why not.
8. **Copy pass** (`index.html` hero, `#ai` aside, workflow 06, `#about`, KSK accordion D, Livingroom facts; `js/proto-kit.js` `errorSummary`). Say "the decisions stay with me" once. Rewrite the sentences listed in category 6. Fix "Wlkp.", "?:" and "locked weapon". Open About with the design claim.
9. **Back up or remove the unverifiable claims** (`index.html`). Remove Basko "Polish and English version", explain the 35-second KSK film and your part in it, label "four of the five personas organise for a group" as your inference, and confirm the Wispr Flow habit.
10. **Clean the linked repository and calm the motion** (`git rm --cached` the raw videos and the `Zrzut ekranu…` files, decide whether `docs/pytania-rozmowa.md`, `docs/wideo-skrypt-en.md` and the review scores should be public; `js/motion.js`: cut the fade-up groups to four; `js/carousel.js` `OVERLAP` about 1.0 at ≥1200 px so neighbouring card titles are readable).
