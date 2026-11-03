# Review round 7

| # | Category | R6 | **R7** |
|---|---|---|---|
| 1 | Wow effect and quality of motion | 8 | **8** |
| 2 | Clarity of message | 8 | **8** |
| 3 | UX thinking (states, flows) | 8 | **8** |
| 4 | Visual quality | 7 | **7** |
| 5 | Credibility of the AI work | 8 | **8** |
| 6 | Quality of the English copy | 8 | **8** |
| | **Overall** | 7.8 | **7.8** |

Reviewer: senior product designer, Flying Bisons. Blind review: I have not seen how the site was made.
Role: Junior UX/UI Designer (AI-Native). Review date: 3.11.2026, three days before the deadline.
Material: `index.html` (read in full), `js/hero.js`, `js/carousel.js`, `js/proto-living.js`, `js/proto-ksk.js`, and 42 screenshots: 19 at 1440 light, 10 at 390 phone, 6 at 768 dark, the 8-frame hero strip, 3 Livingroom states plus the "Show all states" gallery, 2 KSK states plus the gallery. I scored before I read round 6. The hero corner labels in the screenshots were removed after capture, so I ignored them.

Scoring rule: "Content pending" items (CV link, English level, LinkedIn, dates, outcomes, the Botpress agent, journeys 2 and 3, the second override, the ad tool's name, intro and outro files) are judged as if supplied.

**Verdict.** Interview, yes. For a junior this is clearly strong, and the reason is the same as last round: two booking prototypes with 14 designed states each, which is exactly the "whole behaviour, not single screens" the job ad asks for. This round fixed most of the visual bugs from round 6 (dark case on phones, sentence-case sub-titles, calmer Exploring panel, KSK full days marked in the grid, training card image, Livingroom brief under the prototype). That makes the page cleaner, but it does not move a category up a full point. What holds the score at 7.8 has not changed: the AI override is told four times and shown zero times, the copy pass from rounds 5 and 6 is still almost untouched, and a few layouts now have dead space where content used to be.

---

## 1. Wow effect and quality of motion: 8/10

The hero does its job: one fast turn that eases out exactly on the front-facing word, then a slow drift with a dwell while HUBERT faces the viewer (`hero-8-frames.png`, all eight frames readable). The mirrored back outlines no longer flash during the entrance; `hero.js` now holds `--bo` at 0 until the spin ends. With the corner labels gone, the hero is just the word, the bar, the role line, one sentence and two buttons, which is the right amount. The arc carousel is still the best interaction on the page, and the Training plans card now shows the exercise list instead of a blurred header (`1440-light-01-work.png`).

Why not 9: the concept is borrowed. Case 06 says so openly ("Picked the visual direction from a reference: a word rotating on a cylinder, project cards on an arc"), which is honest, but it means the two wow moments are a reference executed well, not an idea. The second wow moment that is his own, the KSK intro and outro, is still a pending file. At 768 the tags of cards behind Basko are still covered ("ESEARCH · DE MARKET", the Training plans tag runs under the Basko card, `768-dark-01-work.png`).

## 2. Clarity of message: 8/10

Better ordering than last round. The cases aside now says what comes next instead of describing a template: "Client work first: Basko Clean, KSK Pretor and Livingroom. Then a client site in progress and two smaller projects." On a phone the Livingroom prototype now comes right after its lead, with the brief underneath. The Exploring panel no longer outshouts the case studies.

Still unclear:
- **The Basko override is still the page's refrain.** Full sentences in the Basko AI table, in Basko step C ("The ad went through two directions…"), in "What I decide" and in the overrule block. Four tellings make it look like the only decision he ever made against an AI.
- **Case 05 is still padded.** The ebook has one sentence, a pending pill and a large illustrated stand-in cover. Case 05 still has its own AI table with a "Content pending" row.
- **The psychologist case is still the loudest headline for the thinnest case** (`1440-light-10-psychologist-site.png`: "WEBSITE FOR A PSYCHOLOGIST" runs almost the full 1320 px).

## 3. UX thinking (states, flows): 8/10

The strongest part of the portfolio, and both prototypes now treat the same problem the same way. KSK marks fully booked days in the grid ("13 VOLL", dashed and struck through, `ksk-1440-03-small.png`) and keeps the "next free day" state for the case where the user picks one anyway. Under 12 people the button is disabled with the reason under it and two ways out ("Zur Standardbuchung", "Auf 12 Personen erhöhen"); over 30 becomes a quote request; the success screen gives a reference number and a reply time (`ksk-1440-07-sent.png`). Livingroom asks for guests before time because free tables depend on group size, shows fewer slots for bigger groups, offers the nearest free date when a day is empty, moves 9+ to an enquiry that keeps the date, links each error from a summary, and keeps the data on a failed send (`lv-09-gallery.png`, 14 states). The research-to-decision table next to the KSK prototype is the kind of reasoning we ask juniors to show in a review.

Why not 9:
- **The primary button still moves.** The Livingroom frame is now capped at 880 px, but "Continue" sits at the right edge of the frame on the date and time steps (`lv-04-times.png`) and "Review booking" sits at the 580 px form edge on the details step (`lv-05-errors.png`). A user tapping through on a laptop has to hunt for it.
- **Disabled "Continue" in Livingroom looks almost enabled.** The muted gold on near-black (`1440-light-09-livingroom-booking.png`, `lv-04-times.png`) reads as a dim primary, not as unavailable, and there is no reason line under it, unlike KSK ("Weiter ist ab 12 Personen möglich").
- **No designed state from shipped client work.** Both prototypes are portfolio concepts. The Basko quote form's error handling is still a pending sentence. A 9 needs one real client screen with its error or empty state.

## 4. Visual quality: 7/10

A real improvement in detail, though not yet a different level. Fixed: the dark KSK case is full-bleed on phones with no light slivers (`390-light-03-ksk-pretor.png`, `390-light-04-journeys.png`); the concept frame on phones is a top rule instead of a dashed box (`390-light-07-ksk-booking.png`); "Four journeys, five personas", "This portfolio" and "Writing the states before the build" are in sentence case; Exploring is a neutral panel with an orange top rule (`1440-light-14-exploring.png`). The system holds in light and dark, and each prototype keeps its client's palette (black and gold for Livingroom, red and white for KSK) so they read as client work, not as the portfolio's own UI.

It stays at 7 because of hierarchy and dead space, which a design reviewer notices before any detail. The case titles are still wide black caps at near-hero size, so every case opens with the same shout. The journeys chart is still two bars, two pending pills and fifteen unlabelled marks; it counts findings but does not show any (`1440-light-04-journeys.png`). The Livingroom fix created a new empty column (see below).

**Layout bugs visible in the screenshots**
1. `1440-light-09-livingroom-booking.png`: the 880 px prototype is left-aligned with nothing to its right, so about 440 px of the 1320 px container is empty grid. KSK uses the same width for text plus prototype. Either centre it or put the states list (accordion D) in the right column.
2. `1440-light-03-ksk-pretor.png`, `768-dark-03-ksk-pretor.png`: two hairlines about 50 px apart between the facts row and the stats row. Drop one.
3. `1440-light-12-ebook.png`: the left column ends after one paragraph and a pill, leaving a 300 px empty band next to a stand-in cover. Same as round 6.
4. `1440-light-10-psychologist-site.png`: the third dash bullet in "My role and constraints" is grey, the first two orange. CSS sets every `.list li::before` to the accent, so this may be a reveal animation caught mid-way. Check it in a browser; it has now appeared in five rounds of screenshots.
5. `1440-light-07-ksk-booking.png`: the price box on the Paket step still breaks "nach Gruppengröße" into a right-aligned two-line value. It is regular weight now, so it no longer looks like a price, but it still looks like a wrapping error. Use one line, left-aligned under "Gruppe".
6. `768-dark-01-work.png`: card tags covered by the Basko card ("ESEARCH", Training plans tag). Titles now read in full.

## 5. Credibility of the AI work: 8/10

Still the most credible AI story I have seen from a junior. The split is specific ("Claude Code wrote the page, the rotating name, the card wheel, the two booking prototypes and the copy drafts"), the brief is quoted in the original Polish under each prototype, a flow change is credited to an AI design review, the tests and QA log are in the repository, and both prototypes are labelled as concepts. With the second override, the Botpress agent and the ad tool's name supplied, this is an 8 that is close to a 9.

Why not 9:
- **The one override has no picture.** No frame of the rejected 3D ad next to the shipped 2D reel. "Show me what you rejected" is the first question I would ask in the interview, and the page cannot answer it yet.
- **Case 06 is mostly choosing and briefing.** "Changed the word on the cylinder from 'Portfolio' in the reference to my name" is still its own bullet. The "What the checks and reviews caught" list is seven things AI tools caught. Not one thing Hubert caught himself or overruled while building this page. For a design role, that is the bullet I would want most.
- **Five AI tables.** By Case 05 the format reads as a form, and one cell is "Content pending: Ebook: which parts AI built".

## 6. Quality of the English copy: 8/10

The voice is plain and consistent, and the best lines sound like a person: "Nobody asked me for a redesign." "The demo had to convince on its own." The German in the KSK prototype is formal and idiomatic, and the English notes inside the German interface are gone. The new cases aside is good. But of the nine copy items from round 6, only the aside and the German UI notes were fixed. The rest are one-line edits:

- Workflow 01: "At the client's job site, or as a guest in the restaurant." A fragment. → "I start where the problem is: on Basko's job sites, or as a guest at Livingroom."
- Workflow 06: "Before anything goes to the client, I check it against the brief and the brand." Generic. Point to the overrule block.
- Basko Tools cell: "Claude Code, React; video shot and edited by me" → "Claude Code, React. Video: my own footage and edit."
- About: "I am ready to put in long hours on work that shows results." → "I work long hours when the work shows results."
- Pending markers written as questions: "Pending: is this the mascot ad, and which tools made it", "My role in the film: pending". If either survives to 6.11, it reads as a candidate unsure of his own work. Answer them or remove the figure.
- Livingroom brief translation: "flow from date to confirmation" hides the original order (date → time → guests), so the note "asks for guests before the time" has nothing to refer to. Translate the order literally.
- Exploring 01: "This portfolio is my first full run of it" → "This portfolio is the first project I built this way end to end."
- New: Case 06, "Separate AI reviewers scored the design and checked every sentence against my facts." "Scored the design" invites the question of who judged the design. Keep "checked every sentence against my facts" and say what you did with the scores.

---

## Round 6 points: fixed and not fixed

| Round 6 point | Status |
|---|---|
| **Layout bugs** | |
| 1. Card titles cut at 768 and 390 | Partly. Titles read in full at 768; tags behind the Basko card still covered |
| 2. Dark KSK case inset on phones, dashed concept frame | **Fixed** |
| 3. Dash bullet colours in Case 04 | Not fixed in the screenshot (see bug 4 above) |
| 4. KSK price box "nach Gruppengröße" | Partly. Regular weight now, still wraps to two lines |
| 5. Ebook empty column | Not fixed |
| **Visual and motion points** | |
| Wide caps sub-titles (journeys, exploring, this portfolio) | **Fixed** |
| Psychologist title smaller | Not fixed |
| Exploring panel less saturated | **Fixed** |
| Journeys chart: label the marks or use a table | Not fixed |
| Training plans card without the blur | **Fixed** |
| Back outlines during the hero entrance | **Fixed** |
| Livingroom frame capped at about 880 px | **Fixed**, but it left a new empty column (bug 1 above) |
| Primary button in one place on every step | Not fixed |
| **UX and content points** | |
| KSK full days marked in the date grid | **Fixed** |
| English and placeholder notes out of the German UI | **Fixed** |
| Livingroom brief under the prototype on phones | **Fixed** |
| Cases aside rewritten | **Fixed** |
| Basko override told once, others as references | Not fixed |
| Basko "two directions" frame with the tool's name | Not fixed (tool name pending) |
| Ebook as one line, Case 05 AI table as one sentence | Not fixed |
| AI tables only in Basko, KSK, Livingroom, Case 06 | Not fixed |
| Merge the "Portfolio → my name" bullet | Not fixed |
| Copy items (workflow 01 and 06, Basko tools, About, pending questions, brief translation, Exploring 01) | Not fixed (7 items) |

Of the round 6 layout bugs: 1 fixed, 2 partly, 2 open. Of the visual points: 5 of 8 fixed, plus 4 of 4 UX-structure points. The content and copy points are almost all open. This round fixed what CSS and JS could fix and left what needs a decision or a sentence.

---

## Top 5 remaining improvements, ranked by impact

1. **Show the override once, with pictures, and add a second one** (`index.html` Basko `.gallery`, overrule block). One frame of the rejected AI 3D ad with the tool's name next to one frame of the shipped 2D reel, and one line on why. Tell it there only; in the Basko AI table, step C and "What I decide", refer to it in a few words. Fill the second override before 6.11. In Case 06, add one thing Hubert himself caught or overruled while building this page. This is the question the AI-native role turns on.
2. **Fill the candidate-only evidence before 6.11** (`docs/do-uzupelnienia.md`): CV link, English level (the offer asks for C1, so this is a filter), LinkedIn, the Botpress agent with a screenshot, journeys 2 and 3, the intro and outro as loops, the Basko form errors. Categories 2, 3 and 5 assume these are in. Without them, take a point off each.
3. **Finish the copy pass** (`index.html`, the eight items in category 6). Under an hour of work, and it has been on the list for three rounds. The two pending markers phrased as questions matter most.
4. **Fix the dead space and the moving button** (`css/proto.css`, `css/main.css`, `index.html`). Give the Livingroom prototype a right column (the states list) or centre it; put the primary button at the same x on every step and give the disabled "Continue" a clearly disabled look and a reason line, as KSK does; drop the duplicate rule above the KSK stats; fold the ebook into one line in Case 05 so its empty column disappears.
5. **Calm the hierarchy and cut the form feel** (`css/main.css`, `index.html`). Smaller case titles, starting with the psychologist one; one sentence instead of the AI table in Cases 04 and 05; replace the journeys dots with a short journey → persona → planning time table once the names arrive. Fewer repeated blocks will let the two prototypes, the real evidence, carry the page.
