# PROMPT – poprawki, runda 2

Strona jest po rundzie 1. To lista poprawek Huberta z 4.11.2026. Zrób dokładnie to, co jest tutaj.

Najpierw przeczytaj `CLAUDE.md`, zwłaszcza sekcje „Nowe fakty i decyzje Huberta”. Zasady z rundy 1 nadal obowiązują: bez podziału na pracę Huberta i AI, pierwsza osoba, krótko.

## Budżet

Pracuj oszczędnie: bez subagentów i bez rund recenzji. Przy każdym zadaniu najwyżej jeden albo dwa zrzuty Playwright do sprawdzenia (desktop 1440, przy karuzeli i hero także telefon 390). Higgsfield: zero generacji. Edytuj istniejące pliki zamiast przepisywać je od zera. Zadania rób w kolejności z listy i commituj po każdym, żeby najważniejsze rzeczy były gotowe, nawet jeśli skończy się budżet. Zadanie 9 (ruletka) jest największe, dlatego jest na końcu.

## Zadania

### 1. Karuzela Selected work: podpisy, wyrównanie, kółko „DRAG”
- **Podpisy pod tytułami:** zostaw na każdej karcie tylko numer, tytuł i **jedną krótką kategorię**. Usuń wszystkie listy tagów typu „RESTAURANT · OWN INITIATIVE”, „RESEARCH · DE MARKET · VIDEO”, „THREE.JS · STATES · PHOTO MODE”. Kategorie:
  - Basko Clean → „Website & marketing”
  - KSK Pretor → „Marketing & video”
  - 3D Model → „Interactive 3D”
  - Livingroom → „Restaurant”
  - Website for Agata Patelka → „Psychologist” (etykieta „In progress” zostaje)
  - Training plans → „A page per client”
- **Wyrównanie:** teraz tytuł na karcie w środku jest wyrównany do lewej, a na kartach po prawej do prawej, i przy przesuwaniu przeskakuje. Ustaw jedno wyrównanie dla wszystkich kart, do lewej, niezależnie od pozycji na kole. Tekst ma się obracać razem z kartą i nigdy nie zmieniać pozycji ani wyrównania w trakcie ruchu. Sprawdź to w trakcie przeciągania na desktopie i na telefonie.
- **Usuń całkowicie kółko pod karuzelą** z napisem „DRAG” i tekstem dookoła (pierścień „SELECTED WORK • AI-NATIVE DESIGN”), razem z jego JS i CSS.
- **Karta na środku:** gdy karta dojeżdża na środek, płynnie wysuwa się trochę do góry (np. 12–16 px) i podświetla od dołu: miękka poświata w kolorze akcentu pod kartą i delikatne rozjaśnienie dolnej krawędzi. Przy przewijaniu efekt płynnie przechodzi na nową kartę środkową.
- **Kliknięcie karty** płynnie przewija stronę do opisu tego projektu (case study). Przeciąganie nie może wywoływać kliknięcia (próg ruchu kilka pikseli). Działa też Enter na karcie z focusem.

Commit.

### 2. Livingroom: krótszy wstęp, bez statusu
- Zamień wstęp na jedno zdanie w stylu: „On my own initiative I designed and built a new website for the restaurant.” Usuń zdanie o tym, że stara strona nie oddawała jakości lokalu, i wszystko o oferowaniu strony właścicielowi.
- Usuń wiersz **Status** w Livingroom (tylko tam, w innych case studies statusy zostają).
- W „Role” usuń „pitch”. W pasku przeglądarki nad zrzutem zamień „Livingroom · proposal” na „Livingroom”.
- Punkt „I brought it close to launch. Only the booking-form integration was left.” usuń.

Commit.

### 3. Narzędzia w AI workflow: logo dla każdego
Każde narzędzie musi mieć prawdziwe logo, bez znaków literowych. Źródła w tej kolejności:
1. npm `@iconify-json/logos` (są tam: `claude-icon`, `claude-code`, `openai-icon`, `google-gemini-icon`, `perplexity-icon`, `higgsfield-icon`, `playwright`, `threejs`);
2. npm `@lobehub/icons-static-svg` i `simple-icons` (np. `gsap`, `claude`, `perplexity`);
3. dla brakujących (Leonardo AI, Manifold, Botpress, Wispr Flow, Canva, HyperFrames): spróbuj oficjalnych repozytoriów lub organizacji na GitHubie (np. `botpress/botpress`, `heygen-com/hyperframes`), a potem favicon lub apple-touch-icon z oficjalnej strony narzędzia, jeśli sieć na to pozwala;
4. jeśli nadal brakuje, sprawdź `assets/logos/`. Hubert może tam wrzucić pliki o nazwach `leonardo.svg|png`, `manifold.svg|png`, `botpress.svg|png`, `wispr-flow.svg|png`, `canva.svg|png`, `hyperframes.svg|png`. Kod ma je sam podchwycić. Dopisz brakujące do `docs/do-uzupelnienia.md` jako P0.

Logotypy pokaż w jednym stylu: jednakowa wysokość, wyśrodkowane w kwadracie, w wersji monochromatycznej (kolor tekstu), a w kolorze po najechaniu. Nie przerabiaj kształtów logo. Grupę „GSAP, HyperFrames, Playwright” rozbij na trzy osobne kafelki, a „Claude, Claude Code” zostaw jako jeden kafelek z logo Claude.

Commit.

### 4. E-mail w stopce bez kółka kursora
Przy najechaniu na adres e-mail w kontakcie pojawia się podkreślenie i kółko przy kursorze. Podkreślenie zostaw, kółko (efekt kursora lub `data-magnetic`) usuń dla tego linku. Sprawdź, czy kółko nie pojawia się też przy innych zwykłych linkach tekstowych. Tam też ma go nie być.

Commit.

### 5. Tło: bez plusików, z gradientem
- Usuń wzór z plusikami z tła całej strony.
- Pionowe pasy (linie siatki) zostaw.
- Dodaj gradient w kolorach pomarańczowym i czarnym: duże, miękkie, pomarańczowe światło na czarnym tle, np. jedno przy hero (od góry lub z boku) i delikatne powtórzenia niżej. Może się bardzo powoli przesuwać przy przewijaniu (tylko `transform` i `opacity`, wyłączone przy `prefers-reduced-motion`). Tekst wszędzie ma być czytelny (kontrast WCAG AA). W trybie jasnym odpowiednik w jasnych tonach z pomarańczem.

Commit.

### 6. Osobiste logo Huberta
- Zaprojektuj osobiste logo Huberta jako SVG. Punkt wyjścia: obecny znak „H” w pomarańczowym kwadracie w nawigacji. Ma być prostsze i bardziej charakterystyczne, czytelne w 16 px (favicon) i w dużym rozmiarze. Kroje i kolory zgodne ze stroną.
- Przygotuj 3 warianty w `docs/logo/` (SVG plus podgląd PNG z wszystkimi trzema obok siebie), wybierz najlepszy i uzasadnij w jednym akapicie w `docs/logo/README.md`.
- Wstaw wybrane logo do nawigacji, stopki, favicon (`favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`) i obrazu Open Graph.
- Bez wzorowania się na logo istniejących marek.

Commit.

### 7. Hero: napis 3D da się złapać i zakręcić
- Napis „HUBERT” można złapać myszą lub palcem: przeciąganie w poziomie kręci walcem z liter (z bezwładnością po puszczeniu, potem płynny powrót do zwykłego obrotu), przeciąganie w pionie przechyla go i lekko przesuwa w górę lub w dół, a po puszczeniu wraca sprężyście na miejsce.
- Kursor „grab/grabbing” nad napisem. Na telefonie przeciąganie w pionie nie może blokować przewijania strony: kręcenie palcem tylko w poziomie, a ruch pionowy przewija stronę.
- Efekt odwrócenia kolorów w pomarańczowym pasku musi działać także w trakcie przeciągania.

Commit.

### 8. Sprzątanie
- Usuń nieużywany kod po usuniętym kółku „DRAG” i znakach literowych.
- Sprawdź linki wewnętrzne.
- Zaktualizuj `docs/do-uzupelnienia.md`.

Commit i push na `main`.

### 9. Ruletka w hero (największe zadanie, na końcu)
Pomysł Huberta: wewnątrz walca z napisem „HUBERT” stoi ruletka.
- **Przycisk** u góry hero, np. „Spin my work” (mały, wyraźny, w stylu strony).
- Po kliknięciu kamera płynnie zjeżdża w dół i przechyla się tak, że widać ruletkę od góry, skierowaną do użytkownika. Napis „HUBERT” zostaje dookoła jako pierścień.
- Koło ruletki ma pola z projektami Huberta: Basko Clean, KSK Pretor, 3D Model, Livingroom, Agata Patelka, Training plans (w kolorach strony, z krótkimi nazwami, czytelnymi).
- Użytkownik kręci kołem: przeciągnięciem lub przyciskiem „Spin”. Koło zwalnia realistycznie i zatrzymuje się na polu, wskaźnik pokazuje wylosowany projekt.
- Po zatrzymaniu pojawia się karta wyniku: nazwa projektu, kategoria, mała okładka (z `assets/cards/`) i przycisk „Open project”. Kliknięcie przewija do case study tego projektu. Obok przycisk „Spin again” i „Back”, który płynnie wraca kamerą do zwykłego widoku hero.
- Escape zamyka widok ruletki. Całość działa klawiaturą (przycisk, Spin, Open project, Back), z widocznym focusem i ogłoszeniem wyniku przez `aria-live`.
- Wydajność: to ta sama scena three.js co napis, nie druga. 60 fps na desktopie, na telefonie niższa rozdzielczość renderu.
- `prefers-reduced-motion` albo brak WebGL: przycisk otwiera prosty panel, który losuje projekt bez animacji koła i pokazuje tę samą kartę wyniku.

Sprawdź na zrzutach: widok hero, widok ruletki, karta wyniku, desktop i telefon. Commit i push na `main`.

Na koniec napisz Hubertowi po polsku, w 5–8 linijkach: co zmieniłeś, którego logo nie udało się zdobyć i co jeszcze zostało do zrobienia.
