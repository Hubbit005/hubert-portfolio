# English copy review, round 3: index.html

Reviewer: independent editor. I did not see how the page was made.
Fact sources: `CLAUDE.md`, `PROMPT.md` (Hubert's brief, commit `91153c1` by Hubert), `docs/referencja-wizualna.md`, the screenshots and videos in `assets/`, and the git log. Claims about how this portfolio was built and tested were checked against `docs/qa-log.md`, `tests/` (scripts and `tests/README.md`), `docs/recenzje/`, `README.md` and `docs/do-uzupelnienia.md`. I also checked the visible strings in `js/proto-living.js` and `js/proto-ksk.js` where the page describes them.

Types: **UNSUPPORTED** (no basis), **OVERSTATED** (some basis, but the sentence claims more), **AI-STYLE**, **ENGLISH**, **LOGIC**.
Rule used this round: where the `CLAUDE.md` tools table assigns a tool to a type of work and the page applies it to a matching project, I count that as OK-INFERENCE. Those items are in section (c), not in the main table.

## (a) Status of round-2 items

| # | Round-2 issue (short) | Status | Note |
|---|---|---|---|
| N1 | Playwright and axe-core listed as AI, "three widths" | FIXED | Now "Claude Code … wrote the test scripts", and 768 px is in `tests/README.md`. The sentence now overstates in a different way, see R1. |
| N2 | KSK film shown as Hubert's work | FIXED | Removed from Outputs. The caption now says "My role in the film: pending". The lead above it still says "I built the animations…", see R9. |
| N3 | OG description: "for real clients", slogan | FIXED | |
| N4 | Basko D heading over non-edge-cases | PARTLY | KSK is fixed ("States, variants and edge cases"). Basko now reads "Constraints and edge cases I planned for", but Consent, Theme, Budget and Language are still not edge cases. Use "Constraints and variants I planned for". |
| N5 | Training plans: generation, mobile-first, template authorship | FIXED | "Claude built the page template" is now OK-INFERENCE (Claude → websites). |
| N6 | "160 px" and nested buttons not traceable | FIXED | Both are now in `docs/qa-log.md` with commits. Small leftover: the log says "about 160 px", see R12. |
| N7 | Livingroom: "the restaurant's system" | PARTLY | Now "needs a live reservation backend, which a demo cannot have". This still assumes a backend, and the second half is not true. See R5. |
| N8 | Case 07 brief: "flow and states of each prototype" | FIXED | |
| N9 | "eight levers to fix them" | FIXED | |
| N10 | KSK B: all video in two languages | FIXED | |
| N11 | "How did you hear" as conversion tracking | FIXED | |
| N12 | "ChatGPT drafted… strategy text" | NOT FIXED | Moved to the to-confirm list (c). It also conflicts with "I wrote the market entry plan" in B. |
| N13 | Wispr Flow "on site" | PARTLY | Wording is neutral now ("Wispr Flow for dictation"), but it still sits in step 01 "Start on site", so it still reads as dictating on site. Move it to step 02 or drop it from the steps. |
| N14 | Slogan in five forms | FIXED | The hero line and the "What I decide" heading remain. A new repeated phrase appeared, see R14. |
| N15 | "Missing piece" three times | FIXED | |
| N16 | PROMPT.md link without "(in Polish)" | FIXED | |
| N17 | "Wrote that brief" | NOT FIXED | See R10. |
| N18 | "their type of site" | NOT FIXED | Basko A. Use "type of building". |
| N19 | "every owner section answers" | NOT FIXED | KSK Me. Use "every section of the owner version answers". |
| N20 | Planning-time sentence repeated | FIXED | |
| N21 | Stage names illustrative | FIXED differently | The stage axis is gone. The new note under the diagram has its own problem, see R2. |
| N22 | "small-business owners" | FIXED | "company owners". |
| N23 | "Many clients" | FIXED | |
| N24 | Notes "under 200" | FIXED | |
| N25 | Phone hint grammar | FIXED | |
| N26 | "Case 07 · Proof" | PARTLY | Numbering now matches the case index (06). The kicker still says "Proof", which reads like a slogan. Use "Case 06 · Behind this page". |
| N27 | Parallelism in "Where AI speeds me up" | NOT FIXED | Still two gerunds and three nouns. Use: "Writing and changing code…", "Collecting market and competitor data with sources", "Drafting long documents and their structure", "Generating image and video variants to compare", "Dictating instead of typing". |
| N28 | "what Hubert learned" | FIXED | |

Summary: 18 FIXED (one of them fixed differently), 5 PARTLY, 5 NOT FIXED. Of the five NOT FIXED, N12 needs Hubert to confirm. The other four are one-line wording edits.

## (b) New issues, most serious first

| # | Location / fragment | Type | Why | Suggested replacement |
|---|---|---|---|---|
| R1 | Case 06, What AI did: "screenshots at 1440, 768 and 390 px **in both themes**, a click-through of **every prototype state with mouse and keyboard**" | OVERSTATED | Per `tests/README.md`, `screens` runs 1440 light, 768 dark and 390 light, so each width is in one theme only. The two `proto-*.js` scripts click the main path with validation errors and then open the "Show all states" gallery. They do not click the no-times, load-error, send-error or group-enquiry branches. `keyboard.js` covers only the Livingroom booking and the carousel. Nothing tests the KSK prototype by keyboard, and nothing tests the 3D model. This sits on the "Proof" panel, so every word should be checkable in the repo it links to. | "It wrote the test scripts in `tests/`: section screenshots at 1440, 768 and 390 px in light and dark themes, a click-through of both booking prototypes with validation errors, a keyboard-only Livingroom booking, and an accessibility scan in both themes." |
| R2 | KSK diagram note: "Dashed bars: journeys 2 and 3, **lengths in the full report**. Each drop-off point and lever is **named in the 59-page owner version**." | UNSUPPORTED | The dashed bars are drawn at fixed lengths (42% and 70%). No source gives those lengths, and the round-2 "illustrative" disclaimer has been removed. `CLAUDE.md` places the 7 drop-off points and 8 levers in the 18-chapter plan. It does not say the 59-page version names each one. | "Solid bars: the shortest and longest planning times in the plan. Dashed bars: journeys 2 and 3, lengths illustrative. The drop-off points and levers are named in the full plan." |
| R3 | Case 05 subtitle: "Two projects built on one idea: **a page people use on their phone, not a document they download**." | UNSUPPORTED + AI-STYLE | The sources mention neither phones nor downloads for either project. The "one idea" framing is invented, and "X, not Y" is the construction the brief bans. | "Two smaller projects in HTML: training plans as web pages and an interactive ebook." |
| R4 | §03 Exploring 02: "Brand animations in HTML and GSAP, rendered frame by frame to MP4. **One source, two language versions**: Polish and German." | UNSUPPORTED | `CLAUDE.md` says only that PL and DE versions exist. It does not say they come from one source file. A designer may ask how that works. | "Brand animations in HTML and GSAP, rendered frame by frame to MP4. The KSK Pretor intro and outro exist in Polish and German." |
| R5 | Livingroom B: "the booking form needs a **live reservation backend, which a demo cannot have**." / E: "connect the booking flow to **a real reservation backend**" | OVERSTATED | `CLAUDE.md` says only that the booking-form integration was missing. A demo could have one, so "cannot have" is false. | B: "**Constraint:** the booking form was not integrated yet." E: "**Next:** connect the booking form so bookings reach the restaurant, then test it with guests on phones." |
| R6 | Livingroom, What AI did: the visible "Content pending: which tool made the storefront and food illustrations" line was removed in `2f62ec1`. The Me column says "Chose the look: … **illustrated dishes**". | OVERSTATED (by omission) | The case now never says who or what made the illustrations, so a reader will assume Hubert drew them. `do-uzupelnienia.md` P1 #20 still lists the question as open. | Put the line back: "Content pending: which tool made the storefront and dish illustrations." |
| R7 | KSK A: "**German visitors come to the range** from different starting points: an HR team…, an agency…, a group of friends…" | OVERSTATED | These are the five personas from the plan, which are research hypotheses. The previous sentence says the client *wanted* German guests, so this reads as observed traffic. | "The plan describes five types of German customer: an HR team planning a company event, an agency booking for a client, a group of friends, a weapons enthusiast, a bachelor party organiser." |
| R8 | Case 05b ebook: "The reader ticks what applies **instead of reading a long list**." | OVERSTATED (mild) | The design rationale is invented. The source says only "interactive symptom checklist". | "The reader ticks the symptoms that apply." |
| R9 | KSK video lead: "**I built** the animations in HTML and GSAP" vs. KSK Me: "**Directed** the motion" vs. KSK AI: "**Claude Code wrote** … the GSAP animations" | LOGIC | The case gives three different accounts of who made the same animations. `CLAUDE.md` puts it in the passive ("zbudowane w HTML/GSAP"). | Lead: "The animations are HTML and GSAP, rendered frame by frame." Keep "Directed the motion" (Me) and the Claude Code line (AI). |
| R10 | Livingroom Me: "Noticed the problem as a guest and decided to act **without a brief**." … "Wrote **that brief**: five steps…" | ENGLISH + LOGIC | The column uses "brief" in two senses, three lines apart. N17 is also still open. | Line 1: "Noticed the problem as a guest and acted without being asked." Line 3: "Wrote the brief for the booking prototype: five steps and the states it must handle, including groups above 8." |
| R11 | Case 06 lead: "Built with Claude Code **from one written brief**." | OVERSTATED (mild) | The git log shows a brief, then Hubert's own commits (visual reference, hero word), then two review-and-fix rounds. The Me column on the same panel lists inputs added after the brief. | "Built with Claude Code from my written brief, then revised after automated checks and reviews." |
| R12 | Case 06, caught: "Section links landed **160 px** too low" | OVERSTATED (mild) | `qa-log.md` #3 says "about 160 px". | "Section links landed about 160 px too low…" |
| R13 | KSK prototype table: "Date and time slot chosen on the page, **enquiry sent in one step**" | LOGIC | The prototype has four steps (Paket, Gruppe, Kontakt, Prüfen) before it sends. "One step" contradicts what the reader clicks. | "Date and time slot chosen on the page, and the enquiry is sent from the page, with no phone call." |
| R14 | §03 step 03: "I list the steps and the states before the build." / Exploring title: "**Writing the states before the build**" / Exploring 01: "I write the flow and its states first…" | AI-STYLE (repetition) | One idea, stated three times within one screen. The title reads as a slogan. | Exploring title: "Three topics I am working on". Keep step 03 and item 01 as they are. |
| R15 | §03 workflow chips: "[Me] I define the problem." / "[Me] I write the list." / "[AI] gathers [Me] I choose what to use" / "[AI] generates [Me] selects" / "[Me] I sign off." | ENGLISH (consistency) | The text after a chip switches between "I …" and a bare verb, so it reads "Me I define" (screen readers say it that way too). AI chips use third person ("gathers"). | Use noun labels after every chip: "[Me] problem definition", "[AI] research · [Me] selection", "[Me] the list", "[AI] code", "[AI] generation · [Me] selection", "[Me] sign-off". |
| R16 | Livingroom prototype lead: "Date, party size, time, details, confirmation. **With the states** a real booking form has to handle: …" | ENGLISH | Verbless fragment. | "Date, party size, time, details, confirmation. It covers the states a real booking form has to handle: …" |
| R17 | KSK prototype lead: "The research **ended with** requirements for a German landing page." | ENGLISH / LOGIC | The plan does not end there. SEO, ads, outbound and KPIs come after the landing-page requirements. | "The research produced requirements for a German landing page." |
| R18 | KSK E: "I wrote the full plan and the 59-page version for the owner." | AI-STYLE (repetition) | Nearly the same sentence as B, two bullets earlier. An outcome section should add something new. | Delete the sentence and start E with "The 3D model is live on GitHub Pages." |
| R19 | Livingroom Me: "Built the demo to open a conversation with the owner." | AI-STYLE (repetition) | Repeats A ("used it to start the conversation"). | Delete, or replace with a fact that is not on the page yet (once Hubert confirms one). |
| R20 | Card numbers vs case numbers: card 03 "3D model" is part of Case 02, and card 04 "Livingroom" is Case 03 | LOGIC (minor) | Two numbering systems a few hundred pixels apart. | Drop the numbers on the cards, or label card 03 "02b". |

Checked and fine: there are no em-dash asides, no banned buzzwords and no "not X but Y" constructions outside R3. All KSK numbers (18, 40+, 5, 4, 7, 8, 59) match `CLAUDE.md`. The Basko alt texts match the screenshots: three form fields, three cards under the slider, four benefit cards, the figures row and the CTA. The Basko service range matches the site's hero copy. On Livingroom, the PL/EN switch, the nav items and the "Zarezerwuj" button in the header (so "a booking button on every screen" holds) match the screenshots. Every claim in Livingroom D (fully booked days disabled, nearest free date, carry-over into the 9+ enquiry, error summary, retry that keeps data) is in `js/proto-living.js`. "Loads about 1 MB" fits `proto/ak47` (324 KB) plus `vendor/three` (824 KB). The Case 06 Me column is backed by Hubert's commits `91327f1` and `3762e06` and by `PROMPT.md`. All five items in the "caught" list are now in `qa-log.md` with commit references. The psychologist case still matches `CLAUDE.md` line by line.

Housekeeping (outside the page, not edited by me): `do-uzupelnienia.md` P0 #7a(4) says the page shows "Tool name pending" for the rejected Basko 3D ad. The page now says "An AI video model", so that note is out of date.

## (c) To confirm with Hubert (OK-INFERENCE)

These are reasonable given the `CLAUDE.md` tools table or the project descriptions. A recruiter may still ask about each one.

1. Basko: "Claude Code writes and updates the site's code (React components) from my layout", Tools "Claude Code", Process "Built directly in code with Claude Code".
2. Livingroom: "Claude Code wrote the demo's code from my layout…", Tools "Claude Code, HTML, CSS, JS" (the HTML/CSS/JS stack is not stated anywhere).
3. KSK: Perplexity and Gemini for the market research (AI column and Tools row).
4. KSK: "ChatGPT drafted and restructured strategy text with me" (round-2 N12). "Drafted" sits next to "I wrote the market entry plan". Hubert should say how much ChatGPT wrote, or use "helped me structure and edit the strategy text".
5. KSK: "Claude Code wrote the three.js code for the 3D model and the GSAP animations".
6. Psychologist: "Claude Code builds the pages… from my structure", "wrote the mock payment step", "Chose Cal.com", "Decided to build the payment badges now".
7. Training plans: "Claude built the page template in code", "Designed one template for a phone screen".
8. Livingroom: "used it to start the conversation", meaning the demo was actually shown or sent to the restaurant.
9. Hero and §03: "I build with AI tools every day", "I use AI tools in every project".
10. §03 step 03 as a general habit ("I list the steps and the states before the build"). It is proven only for this portfolio.
11. The "Next:" lines in Basko, KSK, Livingroom and the psychologist case are proposals written for Hubert. He should agree with each before an interview.
12. The three "What I'm exploring now" topics (already P0 #8).
13. Basko C: "before-and-after photos from real jobs" (the slider image suggests so).

## (d) Verdict

The English is clean, short and consistent. It has no em-dash asides, no buzzwords, active voice throughout, and correct hyphenation. Most round-2 language items are fixed. What is left is small: one verbless fragment, inconsistent chip grammar in the workflow, one list that is still not parallel, "brief" used in two senses, and three spots where the same idea is repeated (states before the build, the plan written for the owner, the conversation with the owner). One new "X, not Y" sentence crept into Case 05.

Factual faithfulness improved again. The biggest round-2 risks are gone: the KSK film is now flagged as role pending, the OG text no longer claims client prototypes, the test tools are no longer called AI, and every "caught" item now traces to `qa-log.md` and a commit. The remaining problems are smaller but real. The most visible is on the "Proof" panel, which overstates the test coverage (R1). The journeys note now presents drawn bar lengths as sourced and claims the 59-page version names every point (R2). Several framing sentences add design rationale that no source gives (R3, R4, R7, R8). The Livingroom illustration gap disappeared from the page while it is still open (R6). Fixing R1–R9 is about twenty minutes of text edits. With those done and the to-confirm list answered by Hubert, faithfulness would reach 9.

- English copy quality: **8/10**
- Factual faithfulness: **8/10**
