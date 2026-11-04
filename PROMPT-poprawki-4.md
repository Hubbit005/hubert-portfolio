# PROMPT – poprawki, runda 4

Strona jest po rundzie 3. To lista poprawek Huberta z 4.11.2026, godz. 15:00. Zrób dokładnie to, co jest tutaj. Każdą zmianę treści wprowadź **w obu językach** (HTML z `data-i18n` dla EN i słownik PL w `js/i18n.js`).

Najpierw przeczytaj `CLAUDE.md`. Zasady z poprzednich rund nadal obowiązują.

## Budżet

Bez subagentów i bez rund recenzji. Higgsfield: zero generacji. Na koniec jeden zrzut całej strony desktop w EN i PL oraz jeden telefon. Commituj po każdym zadaniu.

## Zadania

### 1. Usuń treści, których Hubert nie chce
- **Basko Clean, pod rolką:** usuń dopisek „Do potwierdzenia: czy to reklama z ludzikiem i jakimi narzędziami powstała” (EN: odpowiednik „Content pending…”). Podpis rolki zostaje.
- **Ebook:** Hubert nie zrobił ebooka. Usuń całą podsekcję `#ebook` (HTML, klucze `ebook*` w `js/i18n.js`, okładkę, style). W podtytule „Smaller projects” usuń wzmiankę o ebooku (np. EN: „Training plans for clients.”, PL: „Plany treningowe dla klientów.”). Usuń ebook też z nawigacji, karuzeli i ruletki, jeśli tam jest.
- **AI workflow, 6 kroków:** usuń małe znaczki „AI” i „JA/ME” pod każdym krokiem razem z podpisami (np. „DEFINICJA PROBLEMU”, „ZBIERANIE / WYBÓR”, „KOD”, „AKCEPTACJA”). Same kroki i ich opisy zostają.
- **Sekcja „Gdzie powiedziałem AI »nie«” / „Where I said no to AI”:** usuń całą sekcję (klucze `overrule*`).
- **„To portfolio” / „This portfolio”:** usuń blok „Co wyłapały testy i recenzje” / „What the tests and reviews caught” w całości, razem z linkiem „Dziennik QA” i linkiem do repozytorium. Zostaje tytuł i krótki opis z zadania 2.
- **Kontakt:** usuń wiersze LinkedIn, GitHub i Lokalizacja. Zostaje adres e-mail. Dodaj wiersz **Telefon / Phone** z numerem z `CLAUDE.md`. Jeśli numeru tam nie ma, wstaw blok „Content pending: phone number” i dopisz do `docs/do-uzupelnienia.md` jako P0.
- **Stopka:** usuń napis „Zbudowane w statycznym HTML, CSS i JS” / „Built with static HTML, CSS and JS”.
- Usuń GitHuba i LinkedIna także z sekcji CV, jeśli tam są.

Commit.

### 2. Nowe teksty
- **Hero (zdanie pod napisem):** polska wersja jest niezręczna. Zamień na:
  - PL: „Projektuję i buduję strony internetowe oraz klikalne prototypy. Pracuję z narzędziami AI, a decyzje projektowe podejmuję sam.”
  - EN: „I design and build websites and clickable prototypes. I work with AI tools and make the design decisions myself.”
- **KSK Pretor, Branding wideo:** obecny opis nie zgadza się z filmem. Film to 35-sekundowy film promocyjny, który pokazuje wszystkie strony strzelnicy. Zamień opis na:
  - PL: tytuł „Film promocyjny”, opis „Stworzyłem 35-sekundowy film promocyjny, który pokazuje wszystkie strony strzelnicy: stanowiska, broń, instruktorów i ofertę.”
  - EN: tytuł „Promo film”, opis „I created a 35-second promo film that shows every side of the range: the lanes, the weapons, the instructors and the offer.”
  - Jeśli w kadrach filmu nie ma którejś z tych rzeczy, skróć listę do tego, co faktycznie widać (kadry są w `assets/img/ksk-film-*`).
- **Livingroom:** wstęp zamień na PL „Zaprojektowałem i zbudowałem nową stronę restauracji.”, EN „I designed and built a new website for the restaurant.” Bez „z własnej inicjatywy”.
- **Agata Patelka:** punkt o technologii zamień na PL „Buduję stronę w Claude Code przy pomocy Astro i Tailwind.”, EN „I am building the site in Claude Code with Astro and Tailwind.”
- **To portfolio / This portfolio:** zamień opis na:
  - PL: „Zaprojektowałem i zbudowałem tę stronę od podstaw: układ, ruch, interaktywny napis 3D z ruletką i dwie wersje językowe. Powstała w Claude Code.”
  - EN: „I designed and built this site from the ground up: the layout, the motion, the interactive 3D lettering with the roulette, and two language versions. I built it in Claude Code.”
- **Polski na całej stronie:** przeczytaj wszystkie teksty PL w `js/i18n.js` i popraw te, które brzmią jak kalka z angielskiego albo nie mają sensu. Ma to brzmieć tak, jak napisałby to Polak w dobrym dokumencie biznesowym. Nie zmieniaj znaczenia ani nie dodawaj nowych faktów.

Commit.

### 3. Logo od Huberta (jeśli jest)
Sprawdź folder `assets/logos/hubert/`. Jeśli są tam pliki nowego logo (SVG lub PNG z Higgsfield):
- wybierz plik wskazany w `assets/logos/hubert/WYBOR.txt`, a jeśli go nie ma, pierwszy wariant;
- jeśli to PNG, zwektoryzuj go do czystego SVG (`potrace` lub `imagetracerjs` z npm), uprość ścieżki, kolory ustaw z tokenów strony;
- sprawdź czytelność w 16, 32 i 128 px;
- wstaw do wszystkich miejsc z `docs/logo/README.md` (nawigacja, stopka, `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, obraz OG, środek koła ruletki);
- dopisz w `docs/logo/README.md` sekcję „Runda 4: logo z Higgsfield”.

Jeśli folderu nie ma albo jest pusty, nic nie zmieniaj w logo.

Commit.

### 4. Kontrola i oddanie
- Sprawdź, czy żaden link ani element ruletki/karuzeli nie prowadzi do usuniętych sekcji.
- Zrzuty: desktop EN, desktop PL, telefon. Popraw tylko to, co wyraźnie zepsute.
- Zaktualizuj `docs/do-uzupelnienia.md` (usuń punkty o ebooku, LinkedInie, GitHubie, drugim przykładzie „AI nie”).
- Commit i push na `main`.

Na koniec napisz Hubertowi po polsku, w 4–6 linijkach, co zmieniłeś i co zostało.
