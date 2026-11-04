# PROMPT – poprawki, runda 5: płynność

Hubert: po rundach 2–4 strona chodzi wyraźnie gorzej niż po rundzie 1. Płynność jest dla niego priorytetem. Cel tej rundy: **strona ma być co najmniej tak płynna jak po rundzie 1 (commit `1be117c`), bez zmiany wyglądu ani funkcji.** Nie dodawaj nic nowego.

Najpierw przeczytaj `CLAUDE.md`.

## Budżet

Bez subagentów i bez rund recenzji. Higgsfield: zero. Commituj po każdym zadaniu.

## Podejrzani (sprawdzone w kodzie)

Od rundy 1 doszły:
1. **Poświaty w tle** (`.glow`, `.glow__b--1..4` w `css/main.css`, przesuwanie w `js/main.js` „Background glow”): cztery elementy o szerokości do 1500 px z `radial-gradient`, przesuwane z JS przy każdym zdarzeniu `scroll`, w warstwie o wysokości całej strony.
2. **Rozmycie pod nawigacją** (`backdrop-filter: saturate(1.4) blur(14px)`, ok. linii 144 w `css/main.css`): przy ruchomym tle i animowanym płótnie WebGL przeglądarka musi rozmywać obraz w każdej klatce. Drugi `backdrop-filter: blur(6px)` ok. linii 895.
3. **Maska zanikania karuzeli** (`mask-image` na `.arc__viewport`): maska na kontenerze z obracanymi kartami wymusza przerysowanie całej warstwy w każdej klatce ruchu.
4. **Płótno 3D w hero** (`js/hero.js`): pełna wysokość hero, `pixelRatio` do 2, antyaliasing, dwa przebiegi renderu, ruletka w tej samej scenie.
5. Pętle `requestAnimationFrame` karuzeli i hero: sprawdź, czy stoją, gdy sekcja jest poza ekranem, i czy w pętli nie ma odczytów układu (`getBoundingClientRect`, `offsetWidth`), które wymuszają przeliczenie strony.

## Zadania

### 1. Pomiar przed zmianami
Napisz skrypt `tests/perf.mjs` (Playwright, Chromium): ładuje stronę 1440×900, przewija ją płynnie od góry do dołu w ok. 8 s (kółkiem myszy, żeby działał Lenis), potem 3 s obraca karuzelę przeciąganiem. Mierzy czasy klatek przez `requestAnimationFrame` i zapisuje: średni czas klatki, 95. percentyl, liczbę klatek > 33 ms i liczbę długich zadań > 50 ms (`PerformanceObserver` typu `longtask`). Uruchom go na obecnym `main` i na commicie `1be117c` (np. przez `git worktree`). Zapisz oba wyniki w `docs/perf.md`. WebGL w tym środowisku jest programowy, więc liczby są tylko do porównania między wersjami.

Commit.

### 2. Tło: tańsze poświaty
- Zastąp cztery ruchome poświaty **jedną warstwą `position: fixed`** pod treścią (`inset: 0`, `z-index: -1`, `pointer-events: none`), z dwoma–trzema `radial-gradient` w jednym `background`. Wygląd: ten sam pomarańczowy blask na czerni, najmocniejszy przy hero.
- Usuń przesuwanie poświat z JS (`measureGlows` i obsługę w `onScroll`). Tło stoi w miejscu, a treść przewija się nad nim.
- Jeśli chcesz zachować różnicę między górą a dołem strony, zmieniaj tylko `opacity` jednej warstwy przez GSAP `scrub`, bez `transform` dużych elementów.
- Tryb jasny analogicznie.

Commit.

### 3. Nawigacja bez rozmycia
- Zamień `backdrop-filter` w nawigacji na pełne tło półprzezroczyste (np. kolor tła strony z kanałem alfa 0.88) i cienką dolną linię. Wizualnie ma być prawie identycznie.
- To samo w drugim miejscu z `backdrop-filter: blur(6px)`, chyba że to element, który pojawia się rzadko i na krótko (np. panel ruletki). Wtedy zostaw.

Commit.

### 4. Karuzela: zanik bez maski
- Usuń `mask-image` z `.arc__viewport`.
- Zrób zanik nakładką: osobny element na dole sekcji (`position: absolute`, `pointer-events: none`), `linear-gradient` od przezroczystego do koloru tła, nad kartami. Efekt ma wyglądać tak samo.
- Pętla animacji karuzeli: zatrzymuje się, gdy karuzela jest poza ekranem (`IntersectionObserver`) i gdy karta stoi w miejscu (bez przeciągania i bezwładności). Żadnych odczytów układu w każdej klatce. Wymiary mierz przy `resize`.
- Karty animuj tylko przez `transform` (bez `top`, `left`, `filter`, `box-shadow` zmienianych w klatce). Poświata karty środkowej: osobny element, który zmienia tylko `opacity`.

Commit.

### 5. Hero 3D: lżejszy render
- `pixelRatio`: maks. 1.5 na desktopie i 1 na telefonie.
- Antyaliasing WebGL wyłączony, gdy `pixelRatio` ≥ 1.5 (krawędzie i tak są gładkie).
- Obiekty ruletki: `visible = false`, dopóki widok ruletki jest zamknięty (nie tylko poza kadrem).
- Drugi przebieg (odwrócenie w pasku) tylko na prostokącie paska, jak teraz. Sprawdź, czy prostokąt paska nie jest liczony przez `getBoundingClientRect` w każdej klatce. Licz go przy `resize` i przy przewijaniu, jeśli pasek się przesuwa.
- Mniej wierzchołków: `curveSegments` 6 na desktopie, 4 na telefonie, `bevelSegments` 1, jeśli różnicy nie widać na zrzucie.
- Pętla stoi, gdy hero jest poza ekranem i gdy karta jest ukryta (to już jest, sprawdź, czy działa).
- Napis wygląda tak samo jak teraz. Porównaj zrzutem przed i po.

Commit.

### 6. Pozostałe
- Jedna pętla klatek: Lenis napędzany z `gsap.ticker` (`gsap.ticker.add(t => lenis.raf(t*1000))`, `gsap.ticker.lagSmoothing(0)`), bez osobnego `requestAnimationFrame` dla Lenisa.
- Obsługa `scroll` w `js/main.js` (pasek postępu) tylko przez `requestAnimationFrame` z flagą, bez pracy w samym zdarzeniu.
- `will-change` tylko na elementach, które się w danej chwili animują (nie na stałe na wielu dużych elementach, np. wszystkich obrazach z parallaxą).
- Sprawdź, czy przełącznik języka (`js/i18n.js`) nie robi niczego w pętli ani przy przewijaniu.

Commit.

### 7. Pomiar po zmianach i oddanie
- Uruchom `tests/perf.mjs` ponownie i dopisz wyniki do `docs/perf.md` (przed / po / runda 1).
- Zrzuty desktop i telefon: wygląd ma być taki sam jak przed tą rundą (tło, nawigacja, zanik karuzeli, napis 3D).
- Dopisz do `CLAUDE.md` w „Zasadach” zasadę: „Płynność jest priorytetem. Każda nowa funkcja nie może pogorszyć wyniku `tests/perf.mjs` względem poprzedniej wersji.”
- Commit i push na `main`.

Na koniec napisz Hubertowi po polsku, w 4–6 linijkach, co zmieniłeś i jak zmieniły się wyniki pomiaru.
