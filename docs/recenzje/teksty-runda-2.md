# English copy review, round 2: index.html

Reviewer: independent editor (did not see how the page was made).
Fact sources: `CLAUDE.md`, `PROMPT.md` (Hubert's brief), `docs/referencja-wizualna.md`, the 8 screenshots in `assets/screenshots/`, both videos (contact sheets extracted: Basko reel 20 s, KSK film 35 s). Claims about how this portfolio was built and tested were checked against `docs/recenzje/runda-1.md`, `teksty-runda-1.md`, `README.md`, `docs/do-uzupelnienia.md` and the git log and diffs. I also read the visible strings in `js/proto-living.js`, `js/proto-ksk.js` and `js/proto-kit.js`.

Types: **UNSUPPORTED** (no basis), **OVERSTATED** (basis exists, sentence claims more), **OK-INFERENCE** (fine, confirm if asked), **AI-STYLE**, **ENGLISH**, **LOGIC**.

General note: `docs/do-uzupelnienia.md` now lists most open AI-split claims for Hubert to confirm (P0 #6, #7, #7a, #7b, #7c). That is the right process, but the recruiter sees only the page. Where the visible sentence is unchanged, the row below is marked NOT FIXED or PARTLY, even if a TODO exists.

## (a) Status of round-1 rows

| # | Round-1 issue (short) | Status | Note |
|---|---|---|---|
| 1 | "Spec-first", axe-core, "prototypes on this page were made this way" | FIXED | Now backed by `PROMPT.md` (Etap 4 and 7 name the flows, states, Playwright and axe-core) and Case 07. "My first full run of it" is fine. |
| 2 | Livingroom: "from my list of steps and states" | FIXED | AI: "from my written brief (PROMPT.md)". Me: "Wrote that brief: five steps…". `PROMPT.md` Etap 4.1 has exactly that flow and the 8+ branch. |
| 3 | Livingroom D heading "I planned for" | FIXED | "States the booking step has to handle (prototype above)". |
| 4 | Basko consent contradicted by screenshot | FIXED | "Next: add logos" removed. Consent line now neutral. |
| 5 | "Four of the five personas book for a group" as a research finding | FIXED | Now "Personas: four of the five organise for a group (…)". |
| 6 | Levers "answer" drop-offs | PARTLY | Diagram text and legend fixed. Process step C2 still says "eight levers **to fix them**". See N9. |
| 7 | "Every video in Polish and German" | FIXED | D and E rewritten correctly. A milder version survives in B, see N10. |
| 8 | 35-second German film presented as Hubert's | NOT FIXED | Still in Outputs ("film") and shown under "Video branding", directly after "I built the animations in HTML and GSAP". Listed as P0 #7b. The film contains photos and live footage, so "built in HTML and GSAP" may not even describe it. |
| 9 | Booking page listed as KSK client work | FIXED | |
| 10 | Prototype inside the client process | FIXED | |
| 11 | 12/30 thresholds under client edge cases | FIXED | Moved to the prototype note. Matches `proto-ksk.js` (MIN 12, MAX 30). |
| 12 | Basko: Claude Code wrote the site "from my layout and copy" | PARTLY | "and copy" removed. "Claude Code writes and updates…", Tools "Claude Code" and Process "Built directly in code with Claude Code" are still unconfirmed (P0 #7a). |
| 13 | Basko: "Canva sped up posts" | FIXED | Removed. |
| 14 | Livingroom tools and AI split | NOT FIXED | Tools "Claude Code, HTML, CSS, JS" and "Claude Code wrote the demo's code from my layout…" unchanged (P0 #7a). The illustration tool is now correctly pending. |
| 15 | Training plans AI split | PARTLY | Generation method and content author now pending. "Claude built the page template in code", Tools "Claude", and "I designed one template and generate a page per client" are still stated as fact. See N5. |
| 16 | Ebook AI split | FIXED | AI column pending. "Chose the format and the audience" is OK-INFERENCE (own project). |
| 17 | "I write every state: empty, loading…" as a habit | PARTLY | Softened to the suggested text. `PROMPT.md` proves it for this portfolio only; as a general habit it still needs Hubert's yes. |
| 18 | "I test on desktop and phone", "Me checks sources" | FIXED | |
| 19 | Perplexity and Gemini on KSK | PARTLY | Process step no longer names them. AI column ("Perplexity and Gemini: research with sources and comparisons") and Tools row still do (P0 #7a). |
| 20 | "post, story" versions of motion | FIXED | |
| 21 | Personas / timelines wording | FIXED | |
| 22 | Budget causal link | FIXED | |
| 23 | "Missing piece: the booking form" | FIXED | |
| 24 | "today's exercises" | FIXED | |
| 25 | "Seven projects" | FIXED | "Six projects on seven cards". |
| 26 | "Every case uses the same frame" | FIXED | "where the material allows". |
| 27 | Briefs, feedback, approvals | FIXED | See N22 for a small leftover. |
| 28 | Front-end skills without qualifier | FIXED | "(built with Claude Code)". |
| 29 | "working product" | FIXED | Hero and meta. The OG description has a new overstatement, see N3. |
| 30 | Claude Code wrote three.js and GSAP | OK-INFERENCE | Unchanged. Covered by P0 #6. |
| 31 | "The owner received the full plan" | FIXED | |
| 32 | Pitch actually sent | OK-INFERENCE | Unchanged ("used it to start the conversation"). Confirm. |
| 33 | Training-plan details | OK-INFERENCE | Kept. |
| 34 | 3D model details | OK-INFERENCE | Kept. |
| 35 | "everyday workshop" | FIXED | |
| 36 | Two triplets in the AI intro | FIXED | |
| 37 | Slogan "the decisions stay with me" repeated | PARTLY | Still five variants. See N14. |
| 38 | "I go where the problem is" | FIXED | |
| 39 | "Me checks sources" | FIXED | |
| 40 | "I set the question" | FIXED | |
| 41 | Tense break "run" | FIXED | |
| 42 | Verbless "Research." fragment | FIXED | |
| 43 | Hyphenation of before-and-after | FIXED | |
| 44 | "cut it into" | FIXED | |
| 45 | "logo appears behind it" | FIXED | |
| 46 | "Following the Botpress prototype" | FIXED | |
| 47 | "Read at 50+" | FIXED | |
| 48 | "frame" | FIXED | |
| 49 | "wrote and changed" | FIXED | |
| 50 | "Psychologist site" | FIXED | |
| 51 | "solution" | FIXED | |
| 52 | Content pending in third person | PARTLY | Basko now first person. KSK E and Livingroom E still say "what Hubert learned". |

Summary: 37 FIXED, 9 PARTLY, 2 NOT FIXED, 4 kept as OK-INFERENCE.

## (b) New issues, most serious first

| # | Location / fragment | Type | Why | Suggested replacement |
|---|---|---|---|---|
| N1 | Case 07, What AI did: "**Playwright** took screenshots at three widths in light and dark themes and clicked through every prototype state…" / "**axe-core** checked accessibility." | OVERSTATED + LOGIC | (1) Playwright and axe-core are not AI. Putting them in the "What AI did" column muddles the split the page is selling. A designer will notice. (2) "Three widths": the repo evidence (`runda-1.md`: "1440 light/dark, 390 phone") shows two widths. No 768 px screenshots are referenced anywhere. | "**Claude Code** ran the checks: Playwright screenshots on desktop and phone in light and dark themes, a click-through of every prototype state (also keyboard only), and an axe-core accessibility scan." Keep "A separate AI reviewer…" as a separate bullet. |
| N2 | KSK, "Video branding" lead + film (round-1 #8) | UNSUPPORTED | The film is still not in `CLAUDE.md`, and the lead sentence "I built the animations in HTML and GSAP…" sits directly above it, so the reader assumes the film was made that way. The film has live footage and photos. | Until Hubert confirms: remove "film" from Outputs and caption the video "[Content pending: who made this film and how]". If confirmed, add one sentence on how it was made. |
| N3 | `og:description`: "Flows, states and clickable prototypes **for real clients**. AI tools do the legwork, I make the decisions." | OVERSTATED + AI-STYLE | Two of the three prototypes were built for this portfolio, not for clients. This is the text people see when the link is shared. The second sentence is a slogan with a comma splice. | "Case studies with flows, states and three clickable prototypes, and a clear split of what AI did and what I did." |
| N4 | Basko D heading "States and edge cases I planned for" over Consent / Theme / Budget / Language. KSK D lists Language and Formats under the same heading | LOGIC (OVERSTATED) | None of the Basko items is a UI state or edge case. They are constraints and variants. A UX reviewer reads this heading as the test of point 1 in `CLAUDE.md` and will see that it is mislabelled. | Basko: rename to "Constraints and variants I designed for". KSK: keep "States and edge cases" for Safety and Devices, and move Formats and Language under "Variants". |
| N5 | Training plans, B: "I designed one template and **generate a page per client** from it." + Me: "Designed the template **mobile-first**…" + AI: "**Claude** built the page template in code." + Tools "Claude" | UNSUPPORTED + internal contradiction | B states that Hubert generates the pages. The AI column, two lines lower, says *how* pages are generated is pending. "Mobile-first" is a process claim with no source. `CLAUDE.md` does not say who built the template. | B: "One template, one page per client." Me: "Laid out the template for phones: one column, large numbers, details folded away." AI: fold "Claude built the page template" into the pending item until confirmed. |
| N6 | Case 07, What the checks caught: "Section links landed **160 px** too low…" and "buttons were nested inside buttons" | UNSUPPORTED (unverifiable) | The scroll fix is in commit `c5ef9e6`, but the 160 px figure appears nowhere in the repo. The nested-button bug has no trace in reviews or diffs (the gallery code has not changed since it was first committed). The focus, 360 px and screen-reader items *are* confirmed by commit `636bed7`. On a "Proof" panel every item should be checkable. | "Section links landed too low: the smooth-scroll library counted the CSS offset twice." Keep the nested-button item only if Hubert or the session log can show it. |
| N7 | Livingroom B: "the booking form needed an integration **with the restaurant's system**, which a demo cannot have." + E Next: "connect the booking flow to **the restaurant's reservation system**" | OVERSTATED | Assumes the restaurant has a reservation system. `CLAUDE.md` says only that the booking-form integration was missing. | B: "**Constraint:** the booking form was not integrated yet. That was the missing piece." Next: "connect the booking form to the restaurant's bookings, then test it with guests on phones." |
| N8 | Case 07, Me: "Wrote the brief: … the flow and states **of each prototype**." | OVERSTATED (mild) | `PROMPT.md` gives flow and states for Livingroom, requirements (not states) for the KSK page, and "describe the interaction design" for the 3D model. | "…the booking flow and its states for Livingroom, the requirements for the KSK booking page." |
| N9 | KSK C, step 2: "seven drop-off points along them, eight levers **to fix them**." | OVERSTATED | Same problem as round-1 #6: no source says the levers map onto the drop-off points. | "…seven drop-off points along them. The plan proposes eight conversion levers." |
| N10 | KSK B: "**Constraint:** video assets in two languages, Polish and German." | OVERSTATED (mild) | Only the intro and outro are documented in both languages. The film is German only. The language of the 10-second spot is not known. | "**Constraint:** the intro and outro needed Polish and German versions." |
| N11 | KSK map table: "Landing page requirement: conversion tracking → Required question 'Wie haben Sie von uns erfahren?'" | LOGIC | A "how did you hear about us" field is self-reported attribution, not conversion tracking. A designer may challenge this row. | Decision cell: "Required 'Wie haben Sie von uns erfahren?' question, as self-reported source next to analytics tracking". |
| N12 | KSK AI: "**ChatGPT** drafted and restructured strategy text with me." | OK-INFERENCE (confirm) | `CLAUDE.md`: ChatGPT for "praca nad strategią KSK Pretor". "Drafted" implies ChatGPT wrote parts of a plan that the Me column and section B present as written by Hubert. Expect the question "How much of the 18 chapters did ChatGPT write?" | Confirm with Hubert. Neutral version: "**ChatGPT** helped me structure and edit the strategy text." |
| N13 | §03 step 01: "I dictate notes in **Wispr Flow**." (on site) | UNSUPPORTED (mild) | Wispr Flow is listed for dictation in general, not for on-site notes. | Confirm, or move it to the AI list only ("Dictation instead of typing" already covers it). |
| N14 | Slogan repeated: hero "The decisions stay with me." / §03 aside "I decide what the problem is and what ships." / step 06 tag "Me I decide." / panel "What I decide" / OG "I make the decisions" | AI-STYLE | Five versions of one line. Round 1 asked to keep one. | Keep the hero line and the panel heading. Step 06 tag: "Me: final review". Remove the OG version (see N3). |
| N15 | Livingroom: "Missing piece" in Status, in B ("That was the missing piece") and as the prototype kicker "The missing piece" | AI-STYLE | Three uses of the same phrase in one case reads as a tagline. | Kicker: "Booking flow". Keep it in Status and B. |
| N16 | Livingroom AI column: link "(PROMPT.md)" | ENGLISH / UX | The brief is in Polish. A recruiter who clicks lands on Polish text and may think the link is broken or the wrong file. | "(PROMPT.md, in Polish)". |
| N17 | Livingroom Me: "Wrote **that** brief: five steps…" | ENGLISH | "That" points to the other column. On a phone the columns stack and the reference is far away. | "Wrote the brief for it: five steps and the states the booking must handle, including groups above 8." |
| N18 | Basko A: "whether Basko handles their type of **site**" | ENGLISH | On a page about websites, "site" reads as "website". | "whether Basko handles their type of building" |
| N19 | KSK Me: "the five questions every **owner section** answers" | ENGLISH | "Owner section" is unclear. | "the five questions every section of the owner version answers" |
| N20 | KSK: "Their planning time ranges from a few days to twelve months." (A) and "Planning time ranges from a few days to twelve months." (diagram lead) | AI-STYLE (repetition) | The same sentence appears twice, a few hundred pixels apart. | Diagram lead: "The plan marks seven points where customers drop off and proposes eight conversion levers." (delete the first sentence) |
| N21 | KSK diagram axis "Trigger · Search · Compare · Enquire · Book · Visit" + note "Bar lengths and dot positions are illustrative." | OK-INFERENCE | The stage names are not in `CLAUDE.md` but look like research output. The note covers bars and dots, not the stages. | "Stage names, bar lengths and dot positions are illustrative." |
| N22 | About, Background: "Direct work with **small-business** owners" | OVERSTATED (mild) | `CLAUDE.md` says "firms". Basko's own site claims 480+ B2B jobs since 2016, so "small" is an assumption. | "Direct work with business owners, including filming on site" |
| N23 | Card tag "One template · **Many** clients" | OVERSTATED (mild) | No client count in the sources. | "One template · One page per client" |
| N24 | Livingroom prototype: error "Keep notes **under** 200 characters." vs hint "**Up to** 200 characters." | ENGLISH / consistency | Validation allows exactly 200, so "under 200" is wrong. | "Keep notes to 200 characters or fewer." |
| N25 | Livingroom prototype hint: "Polish number or with a country code." | ENGLISH | Not grammatical as a phrase. | "A Polish number, or any number with a country code." |
| N26 | "Case 07 · Proof" while the case index and "Six projects on seven cards" count six cases | ENGLISH / consistency | The numbering jumps into another section, and "Proof" reads like a slogan. | "Behind this page" as the kicker, with no case number. |
| N27 | §03 "Where AI speeds me up" list: "Writing and changing code…", "Collecting market…", "Drafts of long documents…", "Image and video variants…", "Dictation instead of typing." | ENGLISH (parallelism) | The first two items are gerunds and the rest are nouns. | "Writing and changing code…", "Collecting market and competitor data with sources", "Drafting long documents and their structure", "Generating image and video variants to compare", "Dictating instead of typing". |
| N28 | Content pending, KSK E and Livingroom E: "…and what **Hubert** learned." | ENGLISH (register) | Third person on a first-person page (round-1 #52 leftover). | "…and what I learned." |

Checked and fine: the Basko reel caption (kinetic type, a service checklist, the 4 steps Zapytanie / Kosztorys / Termin / Realizacja, before and after, the logo end card) matches the video. The KSK film caption and all four frame alt texts, including the new instructor frame, match the film. Basko's EN switch, the navy palette, the three form fields, the service range and "warehouses" ("hale i magazyny") match the screenshots. The Livingroom PL/EN switch, the nav items (menu, gallery, about, chef, contact, booking) and the black/gold/serif look match the screenshots. All KSK numbers (18, 40+, 5, 4, 7, 8, 59) match `CLAUDE.md`. The psychologist case matches `CLAUDE.md` line by line. The prototype microcopy is clear and specific and tells the user what to fix, apart from N24 and N25. No em-dash asides, no "not X, but Y" and no banned buzzwords anywhere in the visible copy.

## (c) Verdict

The English is now clean and consistent: short sentences, active voice, concrete nouns, correct hyphenation, almost no calques. What remains is mostly polish. One slogan still repeats in five forms, "missing piece" appears three times, and two sentences repeat inside the KSK case. There are a few small grammar and parallelism slips, and two prototype strings need fixing.

Factual faithfulness has improved a lot. The worst round-1 problems are gone: portfolio prototypes presented as client work, the contradicted Basko consent line, and the unsupported "spec-first" claim. Case 07 and the `PROMPT.md` link now give real evidence for the AI/me split on this portfolio. The remaining risk sits in the same place as before, the "What AI did" columns. The tool attributions for Basko, Livingroom, KSK research and the training plans, plus authorship of the KSK film, are still stated as fact, although they are only queued for confirmation in `do-uzupelnienia.md`. The new Case 07 adds its own small overstatements: non-AI tools in the AI column, "three widths", and an unverifiable "160 px". The OG text also claims "prototypes for real clients". If Hubert confirms the P0 #6/#7a/#7b items and N1–N3 are fixed, factual faithfulness would reach 9.

- English copy quality: **8/10**
- Factual faithfulness: **7/10**
