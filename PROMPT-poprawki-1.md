# PROMPT – poprawki, runda 1

Strona już istnieje. To jest lista poprawek Huberta po pierwszym obejrzeniu. Zrób dokładnie to, co jest tutaj, i nic ponad to.

## Budżet

Hubertowi zostało około 44 $ kredytów na sesje w chmurze i chce część zostawić na kolejne poprawki. Pracuj oszczędnie:
- bez subagentów i bez rund recenzji;
- przy każdym zadaniu najwyżej jeden zrzut Playwright do sprawdzenia, czy wygląda dobrze (desktop 1440, a przy hero i karuzeli także telefon 390);
- **Higgsfield: w tej rundzie zero generacji;**
- nie przepisuj plików od zera, edytuj istniejące;
- zadania rób w kolejności z listy i commituj po każdym. Jeśli zabraknie budżetu, najważniejsze rzeczy będą już zrobione.

Najpierw przeczytaj `CLAUDE.md`, a zwłaszcza sekcję „Nowe fakty i decyzje Huberta”. Ona ma pierwszeństwo przed wszystkim, co jest teraz na stronie.

## Zasady treści na całej stronie

1. **Nigdzie nie rozdzielaj pracy Huberta i AI.** Usuń wszystkie bloki „What AI did / What I did” (`.ai-table` i podobne). Hubert pisze w pierwszej osobie: „I designed”, „I planned”, „I built”, „I created”.
2. **Mniej tekstu.** Każde case study to krótki akapit lub kilka punktów: do czego Hubert się przyczynił i co udało się osiągnąć. Bez podziału na „Problem and context”, „My role and constraints”, „Process”, „Edge cases”, „Outcome”. Bez akordeonów ze szczegółami. Bez person i bez szczegółów procesu. Docelowo najwyżej 80–120 słów na projekt. Całej treści ma być wyraźnie mniej niż teraz, co najmniej o jedną czwartą.
3. **Bez umniejszania.** Nigdzie nie pisz, że coś powstało jednym briefem, jedną wiadomością ani że przyszło łatwo. Ton: pewny, rzeczowy, buduje wartość Huberta.
4. Fakty tylko z `CLAUDE.md`. Wolno ładnie sformułować, nie wolno dopisywać wyników, których nie ma.

## Zadania (w tej kolejności)

### 1. Hero: usuń napisy po bokach
Usuń z hero wszystkie cztery narożne i boczne napisy (`.hero__corners`, `.corner--tl/tr/bl/br`): „HUBERT · JUNIOR UX/UI DESIGNER”, „AI-NATIVE” z kropką, pionowe „NEAR GORZÓW WIELKOPOLSKI, PL · REMOTE” i „PORTFOLIO · 2026”. Zostają: nawigacja, napis 3D, pasek, „JUNIOR UX/UI DESIGNER · AI-NATIVE” pod spodem, zdanie i przyciski.

Commit.

### 2. Hero: napis „HUBERT” naprawdę w 3D, z odwróceniem kolorów w pasku
Teraz litery są płaskie. Ma być tak:
- **prawdziwie trójwymiarowe litery** z grubością (ekstruzja), obracające się na walcu jak teraz. Najlepiej three.js (`vendor/`): `TextGeometry` albo `TTFLoader`/`FontLoader` z tym samym krojem co nagłówki, `bevel` delikatny, światło, które pokazuje głębię;
- **poza paskiem litery są w wersji kontur** (widać krawędzie i boki bryły, przód prawie przezroczysty albo w kolorze tła);
- **gdy litera wchodzi w pomarańczowy pasek, jej kolory się odwracają**: wewnątrz obszaru paska litera jest pełna, w kolorze kontrastowym do paska (np. ciemna albo biała, wybierz to, co czytelniejsze), a pasek za nią zostaje pomarańczowy. Przejście ma być ostre na krawędzi paska, tak jakby pasek był maską;
- technicznie: dwa przebiegi renderu z różnymi materiałami i `scissor` na prostokącie paska w przestrzeni ekranu, albo shader z maską ekranową. Pasek może zostać elementem HTML, jeśli jego prostokąt jest zsynchronizowany z obszarem maski;
- płynnie, 60 fps, na telefonie mniejsza rozdzielczość renderu;
- bez WebGL albo przy `prefers-reduced-motion`: statyczna wersja (obecny napis lub SVG) w pozycji frontalnej.

Commit.

### 3. Selected work: dopasowane okładki kart
Teraz obrazy na kartach są poucinane albo zajmują pół karty, a reszta jest pusta. Popraw:
- każda karta ma okładkę, która **wypełnia całą powierzchnię karty** i jest skadrowana na najważniejszą część, bez uciętych napisów i bez pustych połówek;
- przygotuj osobne kadry w proporcjach karty, w rozdzielczości @2x, do `assets/cards/` (WebP plus JPG);
- okładki:
  - **Basko Clean:** prawdziwy zrzut strony (z `assets/img/basko-*` albo `assets/screenshots/`), dopasowany do karty. Bez zrzutu z nazwami klientów Basko (`Zrzut ekranu 2026-11-03 154015.png`);
  - **KSK Pretor:** kadr z filmu lub grafiki KSK, dopasowany;
  - **3D model:** zostaje, tylko dopasuj kadr;
  - **Livingroom:** prawdziwy zrzut strony, dopasowany;
  - **Website for Agata Patelka:** zrzut lub obecna okładka typograficzna, dopasowana, z małą etykietą „In progress”;
  - **Training plans:** nowe plany (zob. zadanie 7), nie grafika Panthera;
- karty na krańcach koła mogą wychodzić poza ekran, ale treść karty, która jest na środku, ma być w pełni widoczna.

Sprawdź na zrzucie desktop i telefon. Commit.

### 4. Case studies: usuń zbędne napisy i sekcje
- Usuń zdanie „Each case follows the same structure where the material allows: problem, my role and constraints, process, what AI did and what I did, states and edge cases, outcome and next steps.”
- Usuń wszystkie tabele „What AI did / What I did”.
- Usuń w całości prototyp **German booking page** (`#ksk-booking`, `js/proto-ksk.js`, powiązane style i pliki w `proto/`).
- Usuń w całości prototyp **rezerwacji stolika Livingroom** z przeglądem stanów (`#livingroom-booking`, `js/proto-living.js`, powiązane style i pliki). Jeśli `js/proto-kit.js` nie jest już nigdzie używany, też go usuń.
- Popraw nawigację i spis case studies, żeby nie prowadziły do usuniętych sekcji.

Commit.

### 5. Case studies: nowe, krótkie treści
Dla każdego projektu: krótki tytuł, 1–2 zdania wstępu i 3–5 punktów „co zrobiłem / co osiągnąłem”. Zdjęcia zostają tam, gdzie są dobre.

- **Basko Clean:** zaprojektowałem i zbudowałem stronę firmy i ją utrzymuję; stworzyłem system wizualny do marketingu (kolory, zwektoryzowane logo z postacią sprzątacza, zdjęcia profilowe, materiały); zrobiłem reklamę motion graphic na Instagram; nagrywam na realizacjach i montuję rolki. Instagram dopiero startuje, więc bez wyników.
- **KSK Pretor:** przygotowałem plan marketingowy rozwoju firmy na rynku niemieckim; przyciągnąłem do strzelnicy agencję eventową; przez jakiś czas prowadziłem social media; zbudowałem prototypy agenta AI; stworzyłem filmy reklamowe i grafiki promocyjne. Zostają podsekcje **interaktywny model 3D** (z małymi zdjęciami poglądowymi, bo dają dobry efekt) i **video branding**. Bez person, bez ścieżek klienta, bez liczb z researchu.
- **Livingroom:** krótko jako strona. Zobaczyłem, że strona restauracji nie oddaje jakości lokalu, i z własnej inicjatywy zbudowałem nową jako propozycję dla właściciela. Zdjęcia strony zostają.
- **Website for Agata Patelka:** strona psycholożki z ofertą sesji, koszykiem i rezerwacją terminów. Wyraźna etykieta „In progress”.
- **Smaller projects:** zostaje (zob. zadanie 7).
- **This portfolio:** zostaw jako krótki projekt, ale usuń każde zdanie sugerujące, że powstało jednym briefem lub jedną wiadomością. Napisz, że zaplanowałem i zaprojektowałem stronę, a zbudowałem ją w Claude Code.

Commit.

### 6. AI workflow: narzędzia z logotypami i rozwijanym opisem
Reszty sekcji AI workflow nie zmieniaj. Zmień tylko listę narzędzi:
- każde narzędzie jako kafelek z **logotypem** i nazwą. Logotypy weź z paczki npm `simple-icons` (wersja SVG, jednokolorowa, w kolorze tekstu). Gdy narzędzia nie ma w paczce, zrób czysty znak literowy w tym samym stylu. Nie rysuj logotypów od nowa i ich nie przerabiaj;
- pod nazwą mała strzałka. Kliknięcie lub Enter płynnie rozwija 1–2 zdania o tym, **co Hubert stworzył tym narzędziem** (np. Higgsfield: wideo i grafiki do reklam; Claude Code: strony klientów, model 3D, animacje w kodzie; Botpress: prototyp agenta AI dla strzelnicy). Brzmi atrakcyjnie, ale na podstawie faktów z `CLAUDE.md`. Domyślnie zwinięte. Działa klawiaturą, z `aria-expanded`;
- usuń obecne długie opisy „do czego”.

Commit.

### 7. Smaller projects: nowe plany treningowe
- Usuń grafikę w stylu Panthera.
- Sklonuj `Hubbit005/OliwiaS` i `Hubbit005/Oliwia-Kasperska` (oraz inne nowsze plany, jeśli wyglądają lepiej) i zrób z nich zrzuty desktop i telefon. Przed zrzutem zamaskuj w DOM imiona i nazwiska (np. „Client A”).
- Użyj tych zrzutów w „Smaller projects” i na karcie w karuzeli.

Commit.

### 8. Sprzątanie i kontrola
- Usuń nieużywane pliki JS, CSS i obrazy po usuniętych sekcjach.
- Jeden zrzut całej strony desktop i jeden telefon. Popraw tylko to, co jest wyraźnie zepsute.
- Sprawdź, czy wszystkie linki wewnętrzne prowadzą do istniejących sekcji.
- Zaktualizuj `docs/do-uzupelnienia.md`: usuń punkty, które przestały dotyczyć strony.
- Commit i push na `main`.

Na koniec napisz Hubertowi po polsku, w 5–8 linijkach: co zmieniłeś i co zostało do zrobienia.
