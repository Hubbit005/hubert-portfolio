# English copy review, round 4: index.html

Reviewer: independent editor. I did not see how the page was made.
Fact sources: `CLAUDE.md` and `PROMPT.md` (both first committed by Hubert in `5720151`, brief revised in `91153c1`), `docs/referencja-wizualna.md`, `assets/screenshots/`, `assets/video/` (frames checked with ffmpeg), and the git log. Claims about how this portfolio was built and tested were checked against `docs/qa-log.md`, `tests/` (scripts, `package.json`, `README.md`), `docs/recenzje/`, `README.md` and `docs/do-uzupelnienia.md`. Where the page describes prototype behaviour I spot-checked `js/proto-living.js` and `proto/ak47/`.

Types: **UNSUPPORTED** (no basis or contradicted by the repo), **OVERSTATED** (some basis, but the sentence claims more), **AI-STYLE**, **ENGLISH**, **LOGIC**.
Rule: where the `CLAUDE.md` tools table assigns a tool to a type of work and the page applies it to a matching project, that is OK-INFERENCE and goes in section (c).

## (a) Status of round-3 open items

Round-2 items that were still open in round 3:

| # | Item | Status | Note |
|---|---|---|---|
| N4 | Basko D heading over non-edge-cases | FIXED | Now "Constraints I planned for". |
| N7 | Livingroom "reservation backend" | FIXED | Now "before launch, the booking form still needed an integration". |
| N12 | "ChatGPT drafted… strategy text" | NOT FIXED | Still in (c). Still sits next to "I wrote the market entry plan". |
| N13 | Wispr Flow under "Start on site" | FIXED | Removed from step 01. |
| N17 | "Wrote that brief" | NOT FIXED | Same as R10. |
| N18 | "their type of site" | FIXED | |
| N19 | "every owner section answers" | FIXED | |
| N26 | "Case 07 · Proof" kicker | FIXED | Now "Case 06". |
| N27 | "Where AI speeds me up" not parallel | FIXED | All five items are noun phrases. |

Round-3 items:

| # | Item | Status | Note |
|---|---|---|---|
| R1 | Test coverage on the Case 06 panel | FIXED | The wording now matches `tests/README.md` and `package.json`. One defect outside the page: `tests/screens.js` still lists the section id `ksk-agent`, which no longer exists in `index.html`. `npm run screens` throws after the sixth screenshot. See Housekeeping. |
| R2 | Journeys note: drawn lengths, "named in the 59-page version" | FIXED | Lanes 2 and 3 now say "Length in the full plan". One wording leftover: "plan summary", see S8. |
| R3 | Case 05 "one idea… not a document" | FIXED | |
| R4 | "One source, two language versions" | FIXED | |
| R5 | Livingroom "cannot have" a backend | FIXED | |
| R6 | Illustration gap removed | FIXED | "Illustration tool pending" is now in the Me column. |
| R7 | "German visitors come to the range" | FIXED | |
| R8 | Ebook "instead of reading a long list" | FIXED | |
| R9 | Three accounts of who made the KSK animations | FIXED | The lead is now passive. |
| R10 | "brief" in two senses, "Wrote that brief" | NOT FIXED | Livingroom Me, lines 1 and 3. |
| R11 | "from one written brief" | PARTLY | "one" is gone, but the new sentence says "two rounds of review", which the repo contradicts. See S1. |
| R12 | "160 px" vs "about 160 px" | FIXED | |
| R13 | "enquiry sent in one step" | FIXED | |
| R14 | "states before the build" said three times | NOT FIXED | The Exploring title is still "Writing the states before the build". |
| R15 | Chip grammar "Me I define" | FIXED | All chips are followed by nouns now. |
| R16 | Verbless "With the states a real booking form has to handle" | NOT FIXED | Livingroom prototype lead. |
| R17 | "The research ended with requirements" | NOT FIXED | KSK booking intro. |
| R18 | KSK E repeats B | FIXED | |
| R19 | "Built the demo to open a conversation with the owner" | NOT FIXED | It still repeats A. |
| R20 | Card numbers vs case numbers | NOT FIXED | Card 03 is "3D model" and card 04 is "Livingroom". In the case index, 03 is Livingroom. |
| Housekeeping | `do-uzupelnienia.md` 7a(4) "Tool name pending" | FIXED | It now says "An AI video model". |

Summary: of 9 carried-over round-2 items, 7 are FIXED and 2 are NOT FIXED (N12 needs Hubert, and N17 is R10). Of 20 round-3 items, 13 are FIXED, 1 is PARTLY and 6 are NOT FIXED. The six NOT FIXED items are one-line wording edits. Their replacements are in `teksty-runda-3.md` and still apply.

## (b) New issues, most serious first

| # | Location / fragment | Type | Why | Suggested replacement |
|---|---|---|---|---|
| S1 | Case 06 lead: "Built with Claude Code from a written brief, **then two rounds of review and fixes**." | UNSUPPORTED | The repo this sentence links to shows three QA rounds: `b1e12bd` (round 1), `e78360c`/`3e43fa5` (round 2) and `0c87423` (round 3). `docs/recenzje/` also holds `runda-1..3` and `teksty-runda-1..3`, and this is round 4. This is the panel meant to be checked, so the number has to be right. A count will go stale again after the next round. | "Built with Claude Code from my written brief, then revised over several rounds of automated checks and AI reviews." (This also closes R11.) |
| S2 | Basko reel figcaption: "20-second vertical reel: kinetic type, service checklist, 4-step process, before and after, logo end card." | OVERSTATED (by omission) | The reel sits under "I made the video ad", so a reader takes it to be that ad and Hubert's work. `CLAUDE.md` describes the ad with the cleaner figure as the hero, mop movement and a transition into the logo. In the reel the figure appears only on the end card (frames checked). `do-uzupelnienia.md` #14 still asks whether this reel is the ad. The KSK film got a "My role in the film: pending" marker in round 2. This reel needs the same treatment. | Append: `<span class="pending-inline">Content pending: whether this is the ad, and which tools made it</span>` |
| S3 | Hero lead: "I plan for **every state a user can reach**." Also the OG description "booking prototypes **with every state**" and the Livingroom title "Table booking, **every state**". | OVERSTATED + AI-STYLE (slogan) | This is a universal claim, and the page contradicts it: Basko E says "how the quote form handles errors" is still pending. The Livingroom prototype covers the states listed in the brief, which is a defined set, not every state. "Every state" also appears three times as a tagline. | Hero: "I design websites and clickable prototypes, and I map the states a user can reach, including errors and edge cases. I build with AI tools and decide what ships." OG: "…clickable booking prototypes with their error and edge-case states, built with AI tools." Livingroom title: "Table booking: flow and states". |
| S4 | 3D model, mini-title: "**All states** screenshots" | OVERSTATED | It shows four screenshots. The table next to it lists eight elements, with states that are not shown: FULL AUTO, SEMI AUTO, muzzle flash, charging handle, the 1080×1920 story format. | "Key states" with "screenshots" kept as the muted label. |
| S5 | Livingroom B: "**Everything**: the idea, the design, the code, the pitch." | OVERSTATED / LOGIC | Two blocks later, the AI column says Claude Code wrote the demo's code, and the illustration tool is marked pending. "Everything" contradicts both. | "The idea, the design and the pitch. I built the site with Claude Code." |
| S6 | Training plans: "…generated from one template. **I am a certified personal trainer.**" followed by "Content pending: who writes the plans…" | LOGIC (implied claim) | Placed here, the sentence implies Hubert wrote the plan content, which the next line marks as unknown. It is also present tense, while About and CV list training as "Before"/"Earlier". | Delete it here, since About and CV already say it. Put it back only if Hubert confirms he writes the plans: "I write the plans myself. I am a certified personal trainer." |
| S7 | Basko C Final: "The ad went through two directions… **The second one shipped.**" | OVERSTATED (mild) | No source says the ad was published or ran. `CLAUDE.md` says only that he made it and rejected the 3D version. | "I chose the second one for the final ad." |
| S8 | Journeys note: "Bars show the two lengths stated in the **plan summary**" | OVERSTATED (mild) / unclear | No document called "plan summary" exists. The only source is the range in `CLAUDE.md` ("from a few days to 12 months"). A reader may take "plan summary" to mean the 59-page owner version. | "Bars show the shortest and longest planning times in the plan: a few days and up to 12 months. The plan names each journey, drop-off point and lever." |
| S9 | KSK C: "**Research.** Positioning, more than 40 competitors, five personas, **SEO, ads and B2B outbound**." / "**Flow.** Four customer journeys **from first trigger to visit**…" | UNSUPPORTED (mild) + LOGIC | No source gives the start and end points of the journeys. SEO, ads and outbound are plan chapters that come after the research, so they are not research. | Research: "Positioning, more than 40 competitors, five personas." Flow: "Four customer journeys, seven drop-off points along them, and eight conversion levers." Final: "The full plan in 18 chapters, including SEO, ads and B2B outbound, then a 59-page version for the owner." |
| S10 | Caught list: "**Screen reader** · Date buttons had spoken names that did not match their visible text." | LOGIC (minor) | `qa-log.md` #5 says this rule (`label-content-name-mismatch`) affected voice-control users. | Label "Voice control". Text: "Date buttons had accessible names that did not match their visible text, so voice-control users could not say what they saw." |
| S11 | "Polish and German" / "PL and DE" appears **8 times** (KSK B constraint, KSK Me, video lead, KSK D, KSK E, Exploring 02, CV, plus the sub-lead) | AI-STYLE (repetition) | The same fact keeps returning within one case. | Keep it in the video lead, the B constraint and the CV. Delete "Polish and German versions." from KSK Me, "The intro and outro exist in Polish and German." from KSK E, and ", in Polish and German versions" from Exploring 02. |
| S12 | Basko: three of the four Me lines repeat B almost word for word (filming and editing reels, running the profiles, vectorised figure, light and dark pictures, bio). "Run the social profiles" appears three times (B, Me, E). | AI-STYLE (repetition) | Two blocks on one screen say the same thing. | B, bullets 2–3: "I made the video ad, run the social media and prepared the profile identity." Keep the details in Me only. E: delete "I continue to run Basko's social profiles." |
| S13 | KSK booking kicker "KSK Pretor · **Concept for this portfolio**" directly above the flag "◆ **Concept prototype built for this portfolio**". "Five questions" also appears three times (B, Me, C). | AI-STYLE (repetition) | Two adjacent lines say the same thing. Livingroom uses the kicker "Booking concept". | Kicker: "KSK Pretor · Booking concept". C Final: drop "where each section answers the same five questions" (see S9 replacement). |
| S14 | Livingroom: "integration" appears four times (Status, B, C Final, E) | AI-STYLE (repetition, mild) | Round 2 cut "missing piece" from three mentions to one. The same thing has come back under a new word. | C Final: "On this page the booking step is shown as a prototype with its flow and states." |
| S15 | Livingroom note: "…free tables depend on the size of the group, so **guests now come before time**." Caught list: "…so the booking now asks for **guests before the time**." | ENGLISH | "Guests come before time" reads as a sentence about punctuality. | Note: "Changed after an AI design review: free tables depend on group size, so the form now asks for the number of guests before the time." Caught: "…so the booking now asks for the number of guests first." |
| S16 | Basko figcaption "The quote form sits **in the first screen**" and Me "put the quote form **in the first screen**" | ENGLISH | The idiom is "on the first screen". | "on the first screen" (twice). |
| S17 | Livingroom A: "…used it to start **the conversation**." | ENGLISH | Definite article with nothing before it to refer to. | "…used it to start a conversation with the owner." Then R19 (delete the Me line) removes the repeat. |
| S18 | Basko facts: "Tools · Claude Code, React**; video shot and edited by me**" | ENGLISH / register | A tool list and a sentence joined with a semicolon. | "Claude Code, React. Video: my own footage and edit." |
| S19 | KSK AI column: "**Perplexity** and **Gemini**: research with sources and comparisons." | ENGLISH (consistency) | It is the only colon fragment in a column of sentences. | "Perplexity found sources and Gemini ran comparisons for the research." |
| S20 | KSK D Devices: "phones get lower render resolution **and shadows and no reflection**" | ENGLISH | "and … and" with no list structure. Rows Safety, Devices and Formats also repeat the 3D table directly above them. | "phones get a lower render resolution, simpler shadows and no floor reflection, so the model stays smooth." |
| S21 | Exploring 03: "**After the Botpress prototype for KSK Pretor: where** an agent can help a customer, and where a person has to take over." | ENGLISH | A fragment with a second colon, right under a heading. | "After the Botpress prototype for KSK Pretor, I am looking at where an agent can help a customer and where a person has to take over." (Topic still to be confirmed, see c-12.) |
| S22 | §03 step 01: "At the client's job site, or as a guest in **the restaurant**." | ENGLISH / LOGIC | "the restaurant" has no antecedent in this section, and a generic "my steps" list does not fit the psychologist site or the ebook. | "At the client's job site (Basko) or as a guest (Livingroom)." |
| S23 | Basko A lists "halls, warehouses, floors, roofs and facades". C lists "halls, floors, roofs, facades, parking lots". | LOGIC (minor) | Two different service lists in one case. Both match the live site (hero copy and offer card). | C: "The service range (halls and warehouses, floors, roofs, facades, parking lots)…" |
| S24 | Psychologist placeholder: "assets/screenshots/psycholog-1.png · 16:10 · only with client consent" | Register | An internal file path in Polish is visible to the recruiter. The other placeholders read as designed gaps. | "Screenshots pending: package selection and cart, desktop and phone. Shown only with the client's consent." Keep the path in the TODO comment. |
| S25 | CV bullet: "Psychologist website with a full purchase path (Astro, Tailwind, Cal.com). Personal training plan pages from one template." | ENGLISH (consistency) | It is the only bullet with no bold label, and it holds two projects. | Two bullets: "**Psychologist website:** full purchase path (Astro, Tailwind, Cal.com)." and "**Training plans:** personal plan pages from one template." |

Checked and fine: the page has no em-dash asides, no banned buzzwords and no "not X but Y" constructions. All KSK numbers (18, 40+, 5, 4, 7, 8, 59) match `CLAUDE.md`. Basko: the EN switch, navy palette, three form fields and service range all match `basko-hero` and the site copy. The reel caption matches the frames. The KSK film is 35.5 s and has no audio track, so "35 seconds, no sound" holds. 3D table: SAFE → FULL AUTO → SEMI AUTO matches the selector order in `proto/ak47/main.js`, and the S/Z/P keys exist. Livingroom: "Phone" state matches the validation in `proto-living.js` (9 digits or `+` and a country code). The menu alt (six numbered categories, staggered) and the dish-carousel alt match the screenshots. Training plans: name shown as "Client A", weight and height as "XX KG / XXX CM", brand header blurred. Both brief quotes match `PROMPT.md` (the KSK one is cut after "Interfejs po niemiecku", which is fair). The Case 06 Me column is backed by Hubert's commits `5720151`, `91153c1`, `91327f1` and `3762e06`. The "Where AI speeds me up" list is now parallel. "No tracking" in the footer holds: there is no analytics code in `js/`.

### Housekeeping (outside the page, not edited by me)

1. `tests/screens.js`: the default section list contains `ksk-agent`, and that id no longer exists in `index.html`. `getElementById` returns null, so `npm run screens` throws after six screenshots. The Case 06 panel invites the reader to run these scripts. Remove `ksk-agent` from the list.
2. `docs/qa-log.md` has no row for the caught item "Flow" (party size before time). The source is `docs/recenzje/runda-2.md` (finding "Livingroom asks for time before party size"), and the fix is confirmed in `runda-3.md`. Add it as row 9 so every item under the "QA log" link can be traced.

## (c) To confirm with Hubert (OK-INFERENCE)

Reasonable given the `CLAUDE.md` tools table or the project descriptions, but a recruiter may ask about each one.

1. Basko: "Claude Code writes and updates the site's code (React components) from my layout", the Tools field, and "Built directly in code with Claude Code".
2. Livingroom: "Claude Code wrote the demo's code from my layout…" and Tools "Claude Code, HTML, CSS, JS". No source states the HTML/CSS/JS stack.
3. KSK: Perplexity and Gemini for the market research (AI column and Tools field).
4. KSK: "ChatGPT drafted and restructured strategy text with me" next to "I wrote the market entry plan" (N12). Hubert should say how much ChatGPT wrote, or the line should read "helped me structure and edit the strategy text".
5. KSK: "Claude Code wrote the three.js code for the 3D model and the GSAP animations".
6. Psychologist: "Claude Code builds the pages… from my structure", "wrote the mock payment step and the thank-you screen", "Chose Cal.com", "Decided to build the payment badges now". Also A: "sells session packages" (the source says only "pakiet").
7. Training plans: "Claude built the page template in code" and "Designed one template for a phone screen: one column, large numbers, details folded away".
8. Livingroom: "used it to start a conversation" and "used as the pitch itself", meaning the demo was actually shown or sent to the restaurant. Also "no budget" in B.
9. §03 aside: "I use AI tools in every project". Hero: "decide what ships".
10. §03 steps 03 and 06 as general habits ("I list the steps and the states before the build", "Before anything goes to the client, I check it against the brief and the brand"). Both are shown only for this portfolio.
11. The "Next:" lines in Basko, KSK, Livingroom and the psychologist case are proposals. Hubert should agree with each before an interview.
12. The three "What I'm exploring now" topics, including "This portfolio is my first full run of it" (already P0 #8). Item 02 "Motion as code" describes past work, not something he is exploring.
13. Basko C: "before-and-after photos from real jobs". The slider and the reel show the same roof drain, which supports this.
14. Basko D Budget: "Content is my own footage from job sites". This presents all content as his own footage, and links the small budget to that choice. `CLAUDE.md` does invite presenting the budget as a decision.
15. Design-decision lines in the Me columns (Basko "Decided the page structure and put the quote form on the first screen", Livingroom "Chose the look", KSK "Set the structure of the plan and the five questions"). They follow from "designed" in `CLAUDE.md`, but Hubert should be able to talk through each one.

## (d) Verdict

The English is clean and consistent. It has short active sentences, no em-dash asides, no buzzwords and no "not X, but Y". The workflow chips and the "Where AI speeds me up" list are now grammatical and parallel. Most of what is left is repetition. The KSK case says "Polish and German" eight times, "five questions" three times and "concept for this portfolio" twice in adjacent lines. The Basko Me column restates block B. Livingroom mentions the integration four times. Six round-3 one-liners are still open, including the verbless fragment, "brief" in two senses, and the "states before the build" title. There are also two new idiom slips: "in the first screen" and "guests now come before time".

Factual faithfulness improved again. Every serious round-3 risk is fixed: the test coverage now matches `tests/`, the journey bars no longer invent lengths, and the invented design rationales are gone. The remaining problems are smaller but visible. The proof panel says "two rounds" where the repo shows three (S1). The Basko reel sits under "I made the video ad" without a role marker, although its link to the ad is an open question in Hubert's own to-do list (S2). The hero line and two headings claim "every state" or "all states" for work that shows a defined set (S3, S4). "Everything" in Livingroom contradicts the AI column (S5). Also check the broken `screens.js` default list before the repo goes public, since the page invites readers to run it. S1–S6 take about ten minutes of text edits. With those done and section (c) answered by Hubert, both scores would be 9.

- English copy quality: **8/10**
- Factual faithfulness: **8.5/10**
