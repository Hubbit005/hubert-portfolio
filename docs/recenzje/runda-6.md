# Review round 6

Reviewer: senior product designer, Flying Bisons. Blind review: I have not seen how the site was made.
Role: Junior UX/UI Designer (AI-Native). Review date: 3.11.2026, three days before the deadline.
Material: `index.html` (read in full), `js/hero.js`, `js/carousel.js`, `js/proto-living.js`, `js/proto-ksk.js`, `docs/qa-log.md`, and 46 screenshots: all 19 at 1440 light, 9 at 390 phone, 6 at 768 dark, the 8-frame hero strip, 6 Livingroom states plus the gallery, 3 KSK states plus the gallery. I scored before I read rounds 1–5.

Scoring rule: "Content pending" items (CV link, English level, LinkedIn, dates, client outcomes, live URLs, intro/outro files, a page of the plan, the Botpress agent, a second overrule example) are judged as if supplied. They look planned: every one uses the same marker style, has a `TODO` comment at the right spot, and none is hidden in a way that would look like a final design.

| # | Category | R1 | R2 | R3 | R4 | R5 | **R6** |
|---|---|---|---|---|---|---|---|
| 1 | Wow effect and quality of motion | 7 | 7 | 7 | 8 | 8 | **8** |
| 2 | Clarity of message | 6 | 6 | 7 | 7 | 8 | **8** |
| 3 | UX thinking (states, flows) | 8 | 8 | 8 | 8 | 8 | **8** |
| 4 | Visual quality | 7 | 7 | 7 | 7 | 7 | **7** |
| 5 | Credibility of the AI work | 5 | 6 | 6 | 6 | 7 | **8** |
| 6 | Quality of the English copy | 6 | 6 | 7 | 7 | 8 | **8** |
| | **Overall** | 6.5 | 6.7 | 7.0 | 7.2 | 7.7 | **7.8** |

**Verdict.** Yes, an interview, and a confident one. Among junior applicants this is in the top 10%. The two booking prototypes are still the reason, and this round KSK caught up with Livingroom: a fully booked day now has its own state with the next free day in one tap (`ksk-1440-03b-full-day.png`), and the over-30 copy no longer contradicts the disabled button. The page now has a "Where I said no to the AI" block, which was the biggest gap last round.

What stops it at 7.8: the one override is still told, not shown, and it is the same Basko story told four times. The template (A–E blocks, an AI table in every case, wide caps headlines) still makes a strong junior read as procedural. Most of the round-5 copy fixes were not applied.

---

## 1. Wow effect and quality of motion: 8/10

The hero works. All 8 frames in `hero-8-frames.png` read HUBERT, the word sits on the bar, and the dwell makes it drift rather than spin, so the last frames (H turning edge-on) feel alive, not broken. The arc carousel is still the best interaction on the page, and at 1440 the right-hand titles are no longer cut ("KSK PRETOR" and "3D MODEL" read in full in `1440-light-01-work.png`). Scroll motion stays restrained.

Why not 9:
- **Titles are still cut at tablet and phone widths.** "SK PRETOR" in `768-dark-01-work.png` and `390-light-01-work.png`; the Training plans tag "ONE TEMPLATE · A" is cut by the Basko card at 768.
- **The first card next to Basko is a blur.** The Training plans card image is the anonymised header, a purple smear (`1440-light-01-work.png`, `768-dark-01-work.png`). Next to the crisp Basko and KSK cards it reads as a broken image.
- **Back outlines still fade during the entrance.** `hero.js` sets `--bo` to `1 - e` during the spin, so the mirrored glyphs show for the first half second.
- **The second wow moment is still pending.** Treated as supplied: the PL/DE intro and outro should open `#ksk-video` as muted loops above the 35-second film.

**Fixes**
- `js/carousel.js` `render()`: at viewport widths under 1200, raise `z-index` with distance on the right side too, or end-align `.card__meta` on right-hand cards.
- `index.html` card 06: use a crop of `training-mobile-1` below the blurred header (the "3-DNIÓWKA" block) for the card image.
- `js/hero.js` `tick()`: set `--bo` to `0` during the entrance.

## 2. Clarity of message: 8/10

The hero now states the role once under the word, and the top corners are "Hubert · Portfolio 2026" and "AI-native" on one baseline. The KSK case runs research → journeys → AI split → 3D → video → concept, with the concept in its own dashed frame. With the CV link, live Basko URL and English level in, a recruiter gets the story in one scroll.

Still unclear:
- **The Basko override is now the page's refrain.** It appears in the Basko AI table, the Basko process step, the "What I decide" panel and the overrule block. Four tellings of one decision make it look like the only one.
- **The ebook is still a sub-case** with one sentence, a pending pill and a large illustrated cover (`1440-light-12-ebook.png`). Case 05 still has its own AI table with a pending row.
- **On a phone the Livingroom brief still comes before the prototype** (`390-light-09-livingroom-booking.png`): about two screens of lead and Polish brief before anything is clickable.
- **The cases aside still describes a template**: "Each case shows the problem, my role, what AI did and what I did…".
- **The most saturated block on the page is about the future.** The full-width orange "Writing the states before the build" panel (`1440-light-14-exploring.png`) is louder than any case. What he is exploring should not outrank what he has shipped.

**Fixes**
- `index.html`: keep the Basko override in the overrule block only (with the frame, see category 5). In the Basko AI table, the "What I decide" panel and step C, refer to it in a few words.
- `index.html` `#ebook`: one line in the Case 05 subtitle until screenshots exist. Replace the Case 05 AI table with one sentence.
- `index.html` `#livingroom-booking`: below 700 px, put the brief in a `<details>` under the prototype.
- `css/main.css` `.exploring`: an outlined panel or a neutral surface with an orange rule. Keep orange for the hero bar and the "Me" chips.

## 3. UX thinking (states, flows): 8/10

Still the strongest evidence for this role, and the two prototypes are now at a similar level of care. Livingroom: guests before time, taken slots grow with the group, the time step names the group, the empty state offers the nearest free date, 9+ becomes an enquiry that carries the date over, errors are summarised and linked, loading and send failures keep the data, and the success screen has a calendar file (`lv-09-gallery.png`, 14 states). KSK: under 12 has two exits, over 30 becomes a quote request with copy that matches the button ("Wählen Sie Ihren Wunschtermin, wir prüfen ihn im Angebot"), a fully booked day offers the next free day, "Sonstiges" opens a text field, and the sent screen gives a reply time (`ksk-1440-08-gallery.png`, 14 states).

Why not 9:
- **KSK hides full days until you click them.** In `ksk-1440-03b-full-day.png` Friday 13 looks bookable in the grid and only says "ausgebucht" after selection. Livingroom crosses full days out in the grid. Same problem, two answers. The Livingroom one is better.
- **The Livingroom frame is too wide at 1440.** At 1320 px, "Back" and "Continue" are 1,180 px apart (`lv-04-times.png`, `lv-06-review.png`), while the details form is capped at 580 px with its button at the form edge (`lv-05-errors.png`). The primary action moves between steps.
- **No designed state from shipped client work is visible.** Both prototypes are portfolio concepts. The Basko quote-form errors are a pending sentence. Treated as supplied, it is text, not a screen. A 9 needs one real client screen with its error or empty state.

**Fixes**
- `js/proto-ksk.js` `gruppe`: render `fullDay(iso)` days in the grid as disabled with "voll" under the date, like `pk-day.is-full` in Livingroom. Keep the existing empty state for the case where the last slot goes while the user is on the step.
- `css/proto.css`: cap `.proto--living` at about 880 px at wide screens, or give it the KSK layout with a summary column on the right. Put the primary button at the same x on every step.
- `index.html` `#basko-clean` D: when the facts arrive, show the form errors as a two-item state list with one screenshot.

## 4. Visual quality: 7/10

The system holds in both themes: wide grotesk display, mono labels, one orange accent, each prototype in its client's palette. The KSK dark case and both prototype frames are the best-looking parts. Fixed this round: the ebook cover renders again, the hero corners share a baseline, the film fills the column at 1440, and the nav over the dark case reads as a clean light bar instead of a muddy grey.

It stays at 7 because the hierarchy is still loud and three small bugs remain. "FOUR JOURNEYS, FIVE PERSONAS", "THIS PORTFOLIO", "WRITING THE STATES BEFORE THE BUILD" and "WEBSITE FOR A PSYCHOLOGIST" are wide caps at near-H2 size, and the psychologist title is still the widest headline on the page for the thinnest case. The journeys chart is two bars, two pending pills and fifteen unlabelled dots (`1440-light-04-journeys.png`). It decorates a count instead of showing a finding.

**Layout bugs visible in the screenshots**
1. `768-dark-01-work.png`, `390-light-01-work.png`: right-hand card titles cut ("SK PRETOR"). Fixed at 1440 only.
2. `390-light-04-journeys.png`, `390-light-05-ksk-3d-model.png`, `390-light-07-ksk-booking.png`: the dark KSK case is inset about 6 px on a phone, so a light sliver runs down both edges and reads as a rendering error. Inside it, the dashed booking frame narrows the text column to about 296 px.
3. `1440-light-10-psychologist-site.png`: the dash bullets in "My role and constraints" are orange, orange, grey. Fourth round with mixed colours.
4. `1440-light-07-ksk-booking.png`: the price box on the Paket step wraps "nach Gruppengröße" into a bold, right-aligned two-line value. It looks like a price.
5. `1440-light-12-ebook.png`: a 300 px empty column left of the cover. The cover is the only visual and it shows a stand-in, not the ebook.

Not counted: `lv-02-loading.png` and `lv-03-times.png` show an older step order (Date → Time → Guests). The code and the other screenshots are guests-first, so these look like leftovers in the screenshot folder. Delete them so nobody else is confused.

**Fixes**
- `css/main.css`: below 600 px, make `.case--dark` full-bleed (no inset, no radius) and drop the dashed frame of `.sub--concept` to a top rule.
- `css/main.css`: `.exploring__title`, `.meta-case__title`, `.journeys__title` and `#psychologist-site .case__title` in the sentence-case style of `.sub__title`.
- `js/proto-ksk.js` `priceBox`: on the Paket step show "Gruppe: ab 12 Personen" in regular weight, or hide the row.
- `index.html` `#journeys`: once the plan's names arrive, label each drop-off dot (tooltip or list). Until then, a short table of journey → persona → planning time is more honest than dots.

## 5. Credibility of the AI work: 8/10

Up one. The round-5 top item is partly done: "Where I said no to the AI" now exists, in the format AI proposed → I chose → why, with a pending slot for a second example. Treated as supplied, the page will have two overrides, the Botpress agent with a screenshot, and the name of the tool behind the rejected Basko ad. That, plus what was already here, is the most credible AI story I have seen from a junior: "Claude Code wrote the page… and the copy drafts", test scripts in the repo, a QA log with commits, a flow change credited to an AI review, and both prototypes labelled as portfolio concepts.

Why not 9:
- **The override is still shown zero times.** No frame of the rejected 3D ad sits next to the shipped 2D reel. The Basko AI table says "An AI video model", without a name. The interview question "show me what you rejected" has no picture.
- **The meta-case is still mostly choosing and briefing.** "Changed the word on the cylinder from 'Portfolio' to my name" is still its own bullet, and it tells the reader the concept came from a reference.
- **Six AI tables.** By Case 05 they read as a form, and one cell says "Content pending: which parts AI built". The split looks filled in, not thought through.

**Fixes**
- `index.html` Basko `.gallery`: a "Two directions" figure: one frame of the AI 3D version with the tool's name, one frame of the shipped 2D reel, one line on why. Link the overrule block to it.
- `index.html` `#this-portfolio`: merge the "Portfolio → my name" bullet into the visual-direction bullet. Add one decision Hubert made against a reviewer or against Claude while building this page, if there is one.
- `index.html`: keep AI tables in Basko, KSK, Livingroom and Case 06. One sentence each in Cases 04 and 05.

## 6. Quality of the English copy: 8/10

The voice is plain, British and consistent, and several lines sound like a person: "Nobody asked me for a redesign." "The demo had to convince on its own." "Nothing was booked yet and your details are kept." The German in the KSK prototype is formal and idiomatic. No new errors this round. But almost none of the round-5 copy fixes were applied, so the score holds rather than rises.

Still to fix (all from round 5 unless marked new):
- Cases aside: describes a template, not the work.
- Workflow 01: "At the client's job site, or as a guest in the restaurant." A fragment. Use "I start where the problem is: on Basko's job sites, or as a guest at Livingroom."
- Workflow 06: "Before anything goes to the client, I check it against the brief and the brand." Generic. Point to the overrule block.
- Basko Tools cell: "Claude Code, React; video shot and edited by me". Use "Claude Code, React. Video: my own footage and edit."
- About: "I am ready to put in long hours on work that shows results." Use "I work long hours when the work shows results."
- Pending markers as questions: "Pending: is this the mascot ad, and which tools made it" and "My role in the film: pending". If one survives to 6.11, it makes the candidate look unsure of his own work.
- Livingroom brief translation: "flow from date to confirmation" hides the original order (date → time → guests), so the note under it ("asks for guests before the time") has nothing visible to refer to. Translate the order literally.
- New: English inside the German interface ("Sample prices for the prototype", "(sample service level)") and a German placeholder note a real organiser would see ("Paketinhalte sind Platzhalter"). Move all three into the English caption under the frame.
- New: Exploring 01 ends "This portfolio is my first full run of it". Honest, but it tells the reader his method has been used once. Use "This portfolio is the first project I built this way end to end."

---

## Round 5 points: fixed and not fixed

| Round 5 point | Status |
|---|---|
| Right-hand card titles cut on the arc | Partly. Fixed at 1440, still cut at 768 and 390 |
| Back outlines hidden during the entrance | Not fixed (`--bo` still `1 - e`) |
| Intro and outro first in `#ksk-video` | Pending (file) |
| Role stated three times in the hero | **Fixed** (corner is now "Portfolio 2026") |
| Ebook folded into one line | Not fixed |
| Case 05 AI table → one sentence | Not fixed |
| Livingroom brief below the prototype on phones | Not fixed |
| Cases aside as a template description | Not fixed |
| KSK over 30: copy vs disabled button | **Fixed** (copy now asks for a preferred date) |
| KSK "day with no free time" state | **Fixed** (gallery tile 06, next free day in one tap) |
| Basko form errors as a state list | Pending (facts) |
| Ebook cover 0 × 0 (regression) | **Fixed** |
| Empty band after Exploring | **Fixed** (normal section spacing now) |
| Hero top corners on one baseline | **Fixed** |
| Nav over the dark KSK case | **Fixed** enough (reads as a clean light bar) |
| Film not filling the column at 1440 | **Fixed** |
| Dash bullet colours in Case 04 | Not fixed |
| Exploring, Case 06, journeys titles in sentence case | Not fixed |
| Psychologist title smaller | Not fixed |
| "Where I said no to the AI" block | **Fixed** (one example, second pending) |
| Basko "two directions" frame and tool name | Not fixed (tool name pending) |
| Merge "Portfolio → my name" bullet | Not fixed |
| AI tables only in four cases | Not fixed |
| Workflow 01 fragment | Not fixed |
| Workflow 06 generic | Not fixed |
| Basko Tools cell | Not fixed |
| About "long hours" line | Not fixed |
| Pending markers phrased as questions | Not fixed |
| Literal translation of the brief's order | Not fixed |
| Live Basko URL, five questions, plan page, Botpress agent | Pending (candidate content) |

Of 30 points: 10 fixed, 1 partly fixed, 4 waiting for candidate content, 15 still open. Most of the open ones are one-line copy or CSS changes.

---

## Top 5 remaining improvements, ranked by impact

1. **Show the override, once, with pictures** (`index.html` Basko `.gallery`, overrule block, Basko AI table, "What I decide", step C). Put one frame of the rejected AI 3D ad (with the tool's name) next to one frame of the shipped 2D reel, and say it once, in the overrule block. Cut the other three retellings to a reference. Fill the second override before 6.11. This is the question the AI-native role turns on.
2. **Fill the candidate-only evidence before 6.11** (`docs/do-uzupelnienia.md`): CV link, English level (the offer asks for C1, and this is a filter, not a detail), LinkedIn, live Basko URL, the Botpress agent with a screenshot, the five questions, one page of the plan, the intro and outro as loops. Category 2 and 5 scores assume these are in. Without them, take one point off each.
3. **Break the template and calm the hierarchy** (`index.html`, `css/main.css`). One sentence instead of the AI table in Cases 04 and 05, the ebook as one line, the cases aside rewritten, sentence case for the four wide-caps sub-titles, a neutral Exploring panel, the Livingroom brief under the prototype on phones, the Livingroom frame capped at about 880 px with the primary button in one place. Fewer, calmer blocks will make the strong parts read as judgement.
4. **Fix the remaining layout bugs** (`js/carousel.js` right-hand z-order below 1200 px; `css/main.css` full-bleed dark case on phones and one bullet colour; card 06 image without the blur; KSK price box "nach Gruppengröße"; `hero.js` `--bo` at 0 during the entrance). Each is small; together they are what a design reviewer screenshots.
5. **Finish the copy pass and align KSK with Livingroom** (`index.html`: the nine copy items in category 6; `js/proto-ksk.js`: mark full days in the date grid, move the English and placeholder notes out of the German UI). All of these were listed last round and take under an hour.
