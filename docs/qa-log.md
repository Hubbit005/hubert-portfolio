# QA log

Problems found by automated checks and reviews while building this portfolio, and how they were fixed. Referenced from the "This portfolio" case on the page.

| # | Found by | Problem | Fix | Commit |
|---|---|---|---|---|
| 1 | Playwright screenshot of the "Show all states" gallery | The gallery of the Livingroom booking fell apart. Each tile was a `<button>` that contained the rendered screen, and the screen itself contains buttons. Browsers close a button when they meet a nested one, so the preview content spilled out of the tiles. | Tile = a `<div>` with a separate button over it. Previews have ids and focus removed and are `inert`. | `4181a86` (`js/proto-kit.js`, `buildGallery`) |
| 2 | Playwright keyboard-only run | After each step change, focus fell to `<body>`. The check `root.contains(document.activeElement)` ran after the old screen had been replaced, so it was always false. | Remember whether the prototype had focus before re-rendering, then move focus to the new step's heading. | `636bed7` |
| 3 | Playwright scroll check | Section links landed about 160 px below the target. Lenis added the CSS `scroll-padding-top` and `scroll-margin-top` on top of the JS offset. | Compute the absolute target position in JS and pass a number to Lenis. | `c5ef9e6` |
| 4 | Playwright overflow check at 360 and 390 px | The page was 462 px wide on a phone. Long words in the wide headline font ("PSYCHOLOGIST") and a two-column table forced the grid wider than the screen. | `min-width: 0` on grid children, smaller and narrower headlines below 560 px, the research table stacks into rows. | `636bed7` |
| 5 | axe-core (`label-content-name-mismatch`, serious) | Date buttons had `aria-label="Wednesday 4 November"` while the visible text read "WED 4 NOV". Voice-control users could not say what they see. | Visible abbreviations `aria-hidden`, the full date as visually hidden text inside the button. Same for taken times and guest numbers. | `636bed7` |
| 6 | Fact check (AI reviewer, `docs/recenzje/teksty-runda-1.md`) | Sentences claimed more than the sources: e.g. prototypes built for the portfolio described as client work, a link between drop-off points and levers that the plan does not state. | Rewritten or marked "Content pending". Open confirmations listed in `docs/do-uzupelnienia.md`. | `b1e12bd` |
| 7 | Design review round 1 (`docs/recenzje/runda-1.md`) | The rotating name read as "TE+HUB" in most frames. | The cylinder slows down while a full copy of the word faces the viewer; back letters are a lighter outline; the role is set as text under the word. | `b1e12bd` |
| 8 | Design review round 1 | Under 12 people the German booking page was a dead end: "Weiter" disabled with no other way forward. | Two exits: go to the standard booking or raise the group to 12; the reason is shown under the disabled button. | `b1e12bd` |
| 9 | AI design review round 2 (`docs/recenzje/runda-2.md`) and round 4 | The booking asked for the time before the party size, but free tables depend on the group size. Round 4 found the prototype still ignored group size when listing times. | Flow reordered to date → guests → time; taken slots now grow with the group; the time step names the group size. | `3e43fa5`, this round |

Checks that passed without findings: no console errors, no failed requests, no long tasks over 50 ms while scrolling, hero at 60 fps, all internal links resolve, page readable with JavaScript off and with reduced motion.

## Poprawki, runda 3 (4.11.2026)

- axe-core (jasny i ciemny motyw, EN i PL, 1440 i 390 px): 0 naruszeń. Wyłapane i poprawione: przyciski EN/PL miały `aria-label` inny niż widoczny tekst (`label-content-name-mismatch`), teraz nazwa to widoczny tekst, pełna nazwa języka w `title`.
- Linki wewnętrzne: 108 sprawdzonych, bez błędów. Przepełnienie w poziomie na 360, 390 i 768 px: brak.
- Przyciski w hero: pozycja zmierzona po 50, 300 i 1500 ms, po najechaniu i po zjechaniu. Oba na tej samej wysokości, po zjechaniu wracają dokładnie na miejsce.
- Przełącznik języka: po zmianie języka w środku strony nagłówek pod nawigacją przesuwa się o najwyżej 1 px.
- Zrzuty całej strony EN i PL (1440 i 390): jedyny błąd to słowo „czytelników” wychodzące poza okładkę ebooka w PL; poprawione mniejszym stopniem pisma dla wersji polskiej.
