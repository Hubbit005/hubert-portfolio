# Review round 1

Reviewer: senior product designer, Flying Bisons (blind review: I have not seen how the site was made).
Role: Junior UX/UI Designer (AI-Native).
Material: `index.html`, `css/`, `js/` (hero, carousel, both booking prototypes, proto-kit, motion), `proto/ak47/`, 40 screenshots (1440 light/dark, 390 phone, both prototype state galleries).

| # | Category | Score (1–10) |
|---|---|---|
| 1 | Wow effect and quality of motion | **7** |
| 2 | Clarity of message | **6** |
| 3 | UX thinking (states, flows) | **8** |
| 4 | Visual quality | **7** |
| 5 | Credibility of the AI work | **5** |
| 6 | Quality of the English copy | **6** |
| | **Overall** | **6.5** |

**Verdict in one paragraph.** This is above the junior bar on UX craft. The two booking prototypes, each with a "Show all states" gallery, a network-failure switch and an error summary, are what I would want from a mid-level designer. They are the reason this candidate gets an interview. The site loses points in two places. First, the AI story is told rather than shown: every case has a symmetrical "What AI did / What I did" table and none of them has evidence behind it. Second, the page is long and uneven: seven projects of very different weight, 17 visible "pending" slots, and a hero whose name is unreadable in most animation frames. Cut, show evidence, and fix the hero. That moves it to 8.

---

## 1. Wow effect and quality of motion: 7/10

The first ten seconds are distinctive. The 3D word on a cylinder with the orange bar, and the fanned arc carousel, are well built: one rAF loop, paused by IntersectionObserver and `visibilitychange`, inertia on drag, keyboard steps, clones hidden from assistive tech, and a real reduced-motion path. Most portfolios at this level do not get the engineering right, and this one does.

The problem is what the motion says. In every hero frame I looked at (1440 light, 1440 dark, 390), the word reads as "TE+HUB" or "TEUB+HUB". The mirrored back outlines cross the filled front glyphs and make visual noise right behind the H. The hero is about the candidate's name, not his work, and the role is in 11 px mono in the corner. Below the hero the motion is generic: fade-up on almost every element (27 selector groups in `js/motion.js`), count-ups on "18 chapters", and a masked reveal on every heading. When everything moves, nothing stands out. The pinned journeys diagram shows an almost empty chart if you scroll at normal speed (`1440-light-04-journeys.png`: only Journey 1 drawn, lanes 2–4 almost invisible).

**Fixes**
- `js/hero.js`: make the word readable at rest. Use stepped rotation: hold on the front for about 1.5 s, then spin to the next front. Or ease `omega` close to zero when `theta` is near `theta0 + k·2π`. Fade the back glyphs (`.cyl__o`) to about 15% opacity, or hide any back glyph within ±40° of the front centre, so the outlines never cross the front word.
- `index.html` hero: the small mono line "Junior UX/UI Designer" should be a real line of type under the word, at about 24–32 px. A recruiter has to know what you are in two seconds.
- `index.html` hero, `.hero__arrow--l/--r`: the left and right arrow glyphs look like carousel controls but do nothing. Remove them.
- `js/motion.js`: cut the fade-up groups to section heads, case covers and prototypes. Remove the count-up on stats. Make the journeys diagram draw fully by the time it is 50% in view, or don't pin it.
- `js/carousel.js`: auto-rotation (`BASE_SPEED = 0.09`) moves the card the user is reading. Stop auto-rotation after the first user interaction, not just for 2.6 s (`idleUntil`).

## 2. Clarity of message: 6/10

The hero line ("I turn a client's problem into a working product you can click through") is good. After that the message gets diluted. "Selected work" says seven projects; the case index lists six (the 3D model is a card and also a sub-project). KSK Pretor alone has four sub-projects plus research, so it reads like a second portfolio inside the first. The ebook and training-plans cases add little for this role, and the ebook has no screenshot at all. About opens with "I am a freelance web designer. I also do marketing and visual content", which tells me you are a marketer-who-codes, not that you are a UX/UI designer. I count **17 visible placeholders** (10 "Content pending", 3 "Screenshot pending", 1 "Video pending", 2 "dates pending", 1 "level pending"). They are styled consistently and look planned. But 17 is too many: the page reads as unfinished, and a whole sub-project (AI agent) is nothing but a placeholder.

**Fixes**
- `index.html` `#ksk-agent`: remove the sub-project until there is a description and a screenshot. Mention the Botpress prototype in one line of the KSK facts instead.
- `index.html` `#ebook`: cut the case, or fold it into a short "Smaller projects" strip together with training plans. Remove the ebook card from the arc.
- `index.html` `.sec-head__aside` in `#work`: make the count match ("Six projects…"), or make the 3D model a full case.
- `index.html` `#about .lead`: open with the design claim, for example "I design and build user flows for small businesses, end to end", and move marketing and video to the second sentence.
- `index.html` `#cv`: until the PDF link exists, replace the pending box with a working "Download CV" that points to the Google Doc. A recruiter clicks this first.
- Before sending, resolve or hide every pending block in Basko (form errors, results). Basko is your number-one case and it currently ends on two pending boxes.

## 3. UX thinking (states, flows): 8/10

This is the strongest category. The Livingroom prototype covers fully booked days, a day with no times (with a one-tap nearest date), a failed load with retry that keeps the date, a branch for groups of 9 or more that carries over date and time, inline plus summary validation that links to each field, a send failure that keeps the data, a confirmation reference and an .ics export. The state gallery (`proto-living-gallery.png`) is a real artefact I could show a client. The KSK table "Research finding → Decision" is exactly how we want juniors to justify decisions. Focus management and live announcements are handled too (`js/proto-kit.js`).

What stops this from being a 9:
- Both prototypes are labelled "Concept prototype built for this portfolio". The client work itself shows almost no states. The Basko quote-form states are "pending" and the psychologist site has no screenshots. Expect the question: "What states did you design on a live project?"
- **KSK under 12 people is a dead end.** "Kleinere Gruppen buchen über die Standardbuchung" has no link, and *Weiter* is disabled (`ksk-1440-03-small.png`). The "weapons enthusiast" persona from your own research is often a solo booker, and this page blocks him.
- **Conflicting messages.** In the same screenshot the "Unter 12 Personen" note and a red "Bitte prüfen: Bitte wählen Sie ein Datum…" box are stacked, which gives two reasons for one blocked button. The stale `termin` error is not cleared when the size changes.
- **Livingroom phone validation** accepts only 9-digit Polish numbers (`js/proto-living.js`, `validate`) in an English interface. An English or German guest with +44 or +49 cannot book. That is exactly the kind of edge case the role description asks about.
- The KSK price box shows a group total of 1,104 € on step 1, before the user has entered a group size (default 16). That is a preselected value presented as if the user chose it.
- The success screen says "Your table is booked" with no "the restaurant may still call you" nuance. That is fine for a prototype, but say in the copy that real availability would be confirmed by the system.

**Fixes**
- `js/proto-ksk.js` `render` → `gruppe`, `msg` for `small`: add a link "Zur Standardbuchung" (and an `#` stub screen), and keep *Weiter* enabled as a secondary path. In `setSize`, clear `errors.termin` and `showSummary` when the size changes.
- `js/proto-living.js` `validate`: accept international numbers (`^\+?\d{8,15}$` after stripping spaces), with the hint "Include the country code if not Polish."
- `js/proto-ksk.js` `priceBox`: on the `paket` step show "ab 49 € p. P." and no group total until the user has seen the size step.
- `index.html` Basko accordion D: replace the pending box with the real quote-form states, even as three bullet points.

## 4. Visual quality: 7/10

There is a clear system: wide display grotesk, mono labels, a visible 12-column grid with crosshairs, one signal-orange accent, and per-client colours (navy for Basko, red for KSK, black and gold for Livingroom). Light and dark themes both work. The KSK dark card section is the best-looking part of the page. The weaknesses are the ones a junior usually has: everything is shouted (every h3, h4 and h5 is in wide caps, so hierarchy flattens), and spacing and alignment are inconsistent across sections.

**Layout bugs visible in the screenshots**
1. `ksk-1440-01.png`, `1440-light-05-ksk-booking.png`: in the selected TEAM card the price wraps to "69 € /" and then "Person" on the next line, because the check badge takes space. The other two cards stay on one line.
2. `1440-light-13-ebook.png`: the lead paragraph runs straight into the "NAVIGATION" row with no vertical gap.
3. `1440-light-18-contact.png`: the footer centre text ("Built with Claude Code…") sits about 16 px lower than the left and right footer items.
4. `1440-light-03-ksk-pretor.png`: the stats labels do not share a baseline ("chapters in the market entry plan" wraps to two lines and starts 10 px higher than the others).
5. `1440-light-09-livingroom.png`: the Livingroom cover screenshot is cropped through the logo at the top edge ("LIVINGROOM" is cut in half).
6. `390-light-08-ksk-video.png`: the "Video pending" slot text overflows and is clipped at the bottom (`assets/video/ksk-…`).
7. `1440-light-08-ksk-video.png`: the film's own timecode shows through under the native video controls. The caption says "no sound", but the native volume control is still shown.
8. Section headings use two left edges: section titles start at about x=214 (after the number column), case titles at x=60. The vertical alignment of title and aside also changes from section to section (compare "Selected work", "Case studies", "How I work with AI").
9. Large empty areas: about 140 px of empty black under the KSK stats, about 270 px under the orange "Exploring" panel (`1440-light-15-exploring.png`), and an empty right column under the KSK film strip.
10. `390-light-00-hero.png`: on the phone the word is about 60 px tall in an 840 px screen, with roughly 300 px of empty grid above it. The "AI-NATIVE" corner label breaks onto a second line under the role line.
11. `390-light-01-work.png`: the card number "01" sits on top of "CZYSTO" in the Basko card image. Meta text over images has weak contrast. The arc prev and next buttons fall below the fold.
12. The number input in the KSK prototype gets the portfolio's orange focus ring inside a red-branded UI (`ksk-1440-03-small.png`). The native spinner and the −/+ buttons duplicate each other.

**Fixes**
- `css/main.css`: keep wide caps for h2 and case titles only. Set h4 and h5 (`.block__title`, `.ai-table__title`, `.mini-title`, `.wf__t`, `.explore-list h4`) in sentence case at a normal width.
- `css/proto.css` `.ksk-pkg__p`: `white-space: nowrap`, and reserve padding-right for the check badge.
- `css/main.css`: fix bugs 2, 3, 4, 6 and 9 above (`.case__split--short .lead` margin-bottom, `.footer__inner` align-items, `.stats li` justify-content:flex-end or fixed label line-height, `.frame-slot__cap` overflow-wrap:anywhere, reduce section padding after `.stats` and `.exploring`).
- Recrop `assets/img/livingroom-hero-*` with 40 px more at the top.
- `css/proto.css`: scope `--focus` colour per prototype (`.proto--ksk { --focus: #c8102e }`), and hide the number spinner (`appearance: textfield`).

## 5. Credibility of the AI work: 5/10

The idea of a "What AI did / What I did" split in every case is right, and it is what we ask for. The execution is weak, because every table follows the same template: AI wrote the code, I made the decisions. There is no evidence for either column. Specific problems:
- No artefact of the process anywhere: no spec or state list written before building, no prompt excerpt, no first AI output next to the corrected version, no case where the AI got something wrong and the candidate caught it. "Spec-first prototyping… The prototypes on this page were made this way" is exactly the claim that needs one screenshot of the spec.
- The strongest AI decision on the site, rejecting the realistic 3D Basko ad, is described twice and never shown. One frame of the rejected version next to one frame of the shipped 2D version would be worth more than the whole AI section.
- "An **AI video model** produced a realistic 3D version" doesn't say which model. Vague attribution reads as made up even when it isn't.
- **Canva** is listed under "What AI did" for Basko. To a design reviewer that inflates the AI column.
- The AI agent is the only true "AI product" in the portfolio, and it is empty.
- Both prototypes, the most impressive AI-assisted builds, were made for the portfolio, not for a client. That is fine, but it means the "AI in client work" evidence is mostly the claim "Claude Code wrote the React components".
- The footer says "Built with Claude Code", but the site itself is not presented as a case. It is the best evidence you have.

**Fixes**
- `index.html` Basko `.gallery`: add a "Two directions" figure: one frame of the AI realistic 3D version and one of the 2D motion version, with one sentence on why. Name the tool.
- `index.html` `#exploring` item 01: add one image or a code block with the actual state list you wrote for the Livingroom prototype, the Playwright test file name and the axe result. If it isn't true, delete the sentence.
- `index.html`: add a short case, "This portfolio", with three to four honest bullets: what you asked Claude Code for, what it got wrong, what you changed (for example the hero legibility or phone layout), and how you tested.
- `index.html` Basko AI table: move Canva to the "Me" column ("made posts in Canva"). Replace "An AI video model" with the real tool name.
- In each AI table, replace one generic "Me" line with one concrete correction: "Claude Code put the form below the fold; I moved it into the first screen because…".

## 6. Quality of the English copy: 6/10

The copy is clear, short and mostly correct, which is better than most. But it is monotone: almost every sentence is a short declarative statement, lists come in threes, and the same idea ("AI does the work, the decisions stay with me") is repeated in the meta description, OG text, hero, AI section intro, workflow chips and split panel. To a reader who screens 100 portfolios a week, that repetition and rhythm read as AI-written. There are no anecdotes and nothing that sounds like the candidate talking.

**Sentences that sound AI-generated (rewrite in your own voice)**
- Hero: "AI is my everyday workshop. The decisions stay with me." The slogan rhythm, plus the same claim repeated four more times on the page.
- AI intro: "AI tools are part of every project. I use them to research faster, build faster and try more versions. I decide what the problem is, what ships, and what gets thrown away." Two triads in a row.
- Workflow 01: "I go where the problem is: the job site, the restaurant."
- Exploring title: "From a written list of states to a tested prototype in one session."
- Cases intro: "Every case uses the same frame: problem, my role and constraints, process, what AI did and what I did, states and edge cases, outcome and next steps."
- KSK states: "…so the model never suggests firing a locked weapon." This is an odd rationale. Say "so it behaves like the real safety".
- About: "When the work produces results, I can put a lot of hours into it." Awkward, and reads as translated. Try "I work hard when I can see the result."

**Errors and slips**
- Basko "What I did": "Filmed on job sites, edited the reels, **run** three social profiles." The tense breaks: "filmed" and "edited" are past, "run" is present. Use "and run" or "ran".
- KSK error summary: "Wie haben Sie von uns erfahren?**:** Bitte wählen…" has a double punctuation mark (label plus colon in `errorSummary`). Strip the trailing "?" before the colon, or use a dash.
- "Near Gorzów Wlkp., PL": "Wlkp." is opaque to non-Polish readers. Write "Gorzów Wielkopolski, Poland".
- "Livingroom restaurant, Gorzów Wlkp. Not commissioned" is a fragment. Use "Not commissioned. Built on my own initiative."
- Card cover "Read at 50+" is an unclear phrase. Use "For readers 50+".
- E-mail `hubert.austria2025@gmail.com` reads oddly for a Polish candidate applying in 2026 (it suggests Austria and a year). A name-based address is worth five minutes.

---

## Claims that look invented or need verification

These may be true. As a reviewer I cannot verify them, and some do not appear anywhere else on the page.

| Claim | Where | Why it needs checking |
|---|---|---|
| "The site has a Polish and an English version." (Basko) | Basko, accordion D | No EN screenshot. All Basko screenshots are Polish. |
| "Pitched the demo to the restaurant." | Livingroom AI table | The outcome is "pending", so was it actually pitched? |
| "Four of the five personas book for a group." | KSK map table | An inference, not a listed research finding. A weapons enthusiast may book alone. |
| "German-language film, 35 seconds" | KSK video caption | The text above talks about a 3-second intro and outro and a 10-second spot. Where does a 35-second film come from? Explain it. |
| "20-second vertical reel… logo end card" | Basko phone video | Is this the motion-graphic ad with the cleaner figure and the mop described in the case? If not, the ad itself is missing. |
| "Playwright clicks through the states, axe-core checks accessibility. The prototypes on this page were made this way." | Exploring 01 | A process claim with no evidence shown. |
| "Wrote the training content as a certified personal trainer" / "Claude built the page template and fills it" vs "I designed one template" | Training plans | The two columns contradict each other on who designed the template. |
| "Claude Code built the HTML ebook, the side panel and the checklist logic." | Ebook | No screenshot and no topic. Unverifiable. |
| "An AI video model produced a realistic 3D version." | Basko | The tool is not named. |
| Five preset shots, five disassembly steps (3D model table) | KSK 3D | Verified in `proto/ak47/photo.js` (5 `SHOTS`) and `disassembly.js`. OK. |

---

## Top 10 improvements, ranked by impact

1. **Show the AI evidence, not just the table** (`index.html`, Basko gallery and `#exploring`). Add the rejected AI 3D frame next to the shipped 2D frame, name the tool, and add one image of the written state list or spec that the Livingroom prototype was built from. This is the single biggest credibility gain.
2. **Fix the hero legibility** (`js/hero.js`, `css/main.css` `.cyl__o`). Hold the word on the front for about 1.5 s per turn, fade or hide the back glyphs near the front, and put "Junior UX/UI Designer" in real type under the word. Remove the fake ◀ ▶ arrows.
3. **Cut placeholders from 17 to about 5** (`index.html`). Remove the empty `#ksk-agent` sub-project and the "Video pending" slot. Cut or shrink the ebook. Replace the CV pending box with a working link. Fill or remove the two Basko pending boxes before 6.11.
4. **Add a short "This portfolio" case** (`index.html`, after Case 06 or in `#ai`): what you asked Claude Code for, three things it got wrong, what you changed, how you tested (Playwright, axe, 390 px). This turns the footer line into evidence.
5. **Fix the KSK small-group dead end and the conflicting messages** (`js/proto-ksk.js`). Add a link to standard booking for groups under 12, and clear `errors.termin` when the size changes. Mention the decision in the map table.
6. **Accept international phone numbers in Livingroom** (`js/proto-living.js` `validate`) and add the hint. Add it to the states list in accordion D as an edge case you designed for.
7. **Rewrite the copy in your own voice** (`index.html` hero lead, `#ai` aside, `#about`). Say "decisions stay with me" once. Add one real anecdote per case (what went wrong, what you changed). Fix the "run" tense and the "Wlkp." abbreviation.
8. **Calm the type hierarchy** (`css/main.css`). Use wide caps only for h2 and case titles. Put h4 and h5 in sentence case. Align all section titles to one left edge, and keep title and aside alignment consistent across sections.
9. **Fix the visible layout bugs** (`css/proto.css` `.ksk-pkg__p` nowrap; `css/main.css` ebook lead spacing, footer alignment, stats label baseline, `.frame-slot__cap` overflow at 390; recrop `livingroom-hero`; trim the empty space under the KSK stats and the Exploring panel).
10. **Reduce generic scroll motion and stop the carousel after interaction** (`js/motion.js` fade-up groups and count-ups; `js/carousel.js` stop auto-rotate after the first drag, key or click; make the journeys diagram fully drawn by 50% in view). Keep the motion budget for the hero and the arc.
