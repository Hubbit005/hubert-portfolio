# PROMPT – zbuduj portfolio Huberta od początku do końca

Wklej całość jako pierwszą wiadomość sesji Claude Code w tym repozytorium.

---

## Rola

Jesteś starszym product designerem i front-end developerem w jednej osobie. Budujesz portfolio juniora, który aplikuje do studia projektowego Flying Bisons na stanowisko Junior UX/UI Designer (AI-Native). Masz dużo czasu i budżetu. Wykorzystaj go na jakość: badaj, buduj, testuj, poprawiaj. Nie kończ po pierwszej działającej wersji.

## Zanim zaczniesz

1. Przeczytaj `CLAUDE.md` (fakty o Hubercie i zasady) oraz `docs/oferta-flying-bisons.md` (czego szuka rekruter).
2. Sprawdź, co leży w `assets/` (zrzuty, filmy od Huberta). Jeśli coś jest, użyj tego w pierwszej kolejności.
3. Nie zadawaj mi pytań w trakcie. Gdy czegoś brakuje, przyjmij rozsądne założenie, oznacz je `[TODO: …]` i dopisz do `docs/do-uzupelnienia.md`. Pracuj do końca listy odbioru na dole.

## Najważniejsze zasady

1. **Zbuduj całą stronę od początku do końca w tej sesji.** Nie zostawiaj połowy pracy na później.
2. **Fakty tylko z `CLAUDE.md`.** Nie wymyślaj liczb, wyników, klientów, opinii ani cytatów. Rekruter będzie o to pytał na rozmowie.
3. **Gdy nie znasz treści, zostaw widoczną lukę.** Wstaw w tym miejscu dopracowany wizualnie blok z napisem „Content pending: [czego brakuje]” (np. „Content pending: description of the KSK Pretor AI agent”). Dla brakującego obrazu lub filmu zrób ramkę w docelowym rozmiarze z podpisem, co ma się tam znaleźć. Każdą lukę oznacz w kodzie komentarzem `<!-- TODO: … -->` i dopisz do `docs/do-uzupelnienia.md`. Luka ma wyglądać na zaplanowany element układu, a nie na błąd.
4. **Higgsfield: twardy limit 200 kredytów na całą sesję.** Możesz generować grafiki i krótkie wideo do strony, ale:
   - na starcie sprawdź saldo (`balance`) i zapisz je w `docs/higgsfield-log.md`;
   - przed każdą generacją sprawdź jej koszt (wycena narzędzia albo cennik modelu). Jeśli kosztu nie da się ustalić, nie generuj;
   - po każdej generacji dopisz do logu: co, model, koszt, suma narastająco. Generuj tylko wtedy, gdy suma po tej generacji nie przekroczy 200 kredytów. Gdy zostanie mniej niż koszt kolejnej generacji, kończysz z Higgsfield i nie wracasz do niego;
   - najpierw zaplanuj wszystkie materiały w `docs/higgsfield-plan.md` (gdzie na stronie, proporcje, prompt po angielsku, model, koszt, nazwa pliku w `assets/`) i ułóż je od najważniejszego. Generuj w tej kolejności;
   - wybieraj tańsze opcje: najpierw obrazy, wideo tylko tam, gdzie ruch naprawdę coś daje (np. pętla w tle hero, 5 sekund). Testuj w niskiej rozdzielczości, finalną wersję generuj raz;
   - najwyżej jedna poprawka na materiał. Jeśli druga wersja też nie pasuje, użyj animacji w kodzie zamiast generacji;
   - jeśli Higgsfield nie jest dostępny w tej sesji, zostaw w układzie ramki w docelowych proporcjach z animacją w kodzie (canvas, SVG, CSS), a plan z promptami zostaw w `docs/higgsfield-plan.md`. Podmiana ma polegać tylko na wrzuceniu pliku o podanej nazwie do `assets/`.
   - Żadnych wizerunków prawdziwych osób ani logo klientów w generacjach.

## Etap 1 – Strategia i kierunek wizualny

- Zapisz w `docs/strategia.md`: kto ogląda stronę (rekruter i designer z Flying Bisons), co ma zapamiętać po 30 sekundach, jaka jest kolejność projektów i dlaczego.
- Główny przekaz: Hubert zamienia problem klienta w działające, przeklikiwalne rozwiązanie, a AI traktuje jako warsztat, nad którym ma kontrolę. Jego doświadczenie z marketingu i pracy z klientami pasuje do ich „Invisible 90%”.
- **Kierunek wizualny jest już wybrany przez Huberta:** przeczytaj `docs/referencja-wizualna.md`. Najważniejsze: w hero napis „HUBERT” kręcący się w 3D jak na walcu (przód pełny, tył jako kontur), pionowy prostokąt w kolorze akcentu za nim, a niżej karuzela kart projektów ułożonych w wachlarz na łuku koła, które powoli się obraca. To dwa kluczowe elementy strony i mają działać perfekcyjnie płynnie. Zapisz w `docs/kierunek-wizualny.md`, jak go przenosisz na portfolio Huberta: paleta, kroje (extended sans w nagłówkach), siatka, ruch. Nie kopiuj cudzych grafik, nazwisk ani logo z referencji.
- Poza tym unikaj generycznych wyglądów AI: gradientu fiolet–niebieski, kremu z serifem i terakotą, emoji zamiast ikon, identycznych kart bez charakteru.
- Zdefiniuj tokeny (kolory, typografia, odstępy, promienie, cienie, czasy animacji) w `css/tokens.css`. Wersja jasna i ciemna.

Commit.

## Etap 2 – Materiały wizualne z prawdziwych projektów

Strona bez prawdziwych obrazów nie przekona projektanta. Zdobądź je tak:

1. Sklonuj publiczne repozytoria Huberta: `Hubbit005/ksk-ak47-3d`, `Hubbit005/BaskoClean`, jedno z `Hubbit005/*-workout`.
2. CDN-y (unpkg, jsdelivr, Google Fonts) mogą być w tym środowisku zablokowane, a rejestr npm działa. Zainstaluj biblioteki z npm (`react@18.3.1`, `react-dom@18.3.1`, `@babel/standalone`, `three@0.160.0`, potrzebne `@fontsource/*`). W Playwright przechwyć żądania przez `page.route` i podstaw lokalne pliki. Do WebGL uruchom Chromium z `--use-angle=swiftshader --enable-unsafe-swiftshader` i daj modelowi kilka sekund na render.
3. Zrób zrzuty desktop (1440×900) i mobile (390×844, deviceScaleFactor 2) do `assets/screenshots/`. Dla modelu 3D zrób kilka ujęć w różnych stanach: podświetlona część, rozłożona broń, tryb zdjęcia.
4. W repo BaskoClean może brakować plików `.jsx`. Jeśli strona się nie renderuje, nie odtwarzaj jej. Wpisz do `docs/do-uzupelnienia.md`, że Hubert ma wrzucić zrzuty strony Basko i plik MP4 reklamy do `assets/`. Na stronie zostaw dopracowane miejsce na te materiały, z ramką przeglądarki lub telefonu, a nie szary prostokąt.
5. Plany treningowe: zrzuty tylko po zanonimizowaniu imion i nazwisk w DOM przed zrobieniem zrzutu.
6. Optymalizuj obrazy: WebP plus fallback, `srcset`, `loading="lazy"`, wymiary w atrybutach.

Commit.

## Etap 3 – Struktura i treść: jedna długa strona

To ma być **jedna strona (one-pager)**, na której jest wszystko. Ma robić efekt „wow” od pierwszego ekranu, a jednocześnie dawać się szybko przeskanować. Po angielsku. Sekcje w tej kolejności:

1. **Hero** – obracający się napis 3D „HUBERT” według `docs/referencja-wizualna.md`, podpisy w rogach (imię, rola, „AI-native”), pod spodem jedno zdanie o tym, co Hubert robi, i przyciski „View work” oraz „Contact”.
2. **Selected work** – karuzela kart na obracającym się łuku według `docs/referencja-wizualna.md`, z pierścieniem tekstu w środku. Przeciąganie myszą i palcem, zatrzymanie przy najechaniu, obsługa strzałkami. Kliknięcie karty przewija do case study albo otwiera je w panelu na tej samej stronie.
3. **Case studies** – kolejno: Basko Clean, KSK Pretor, Livingroom, strona dla psycholożki (bez nazwiska), plany treningowe (anonimowo), ebook (krótko). Każde ma ten sam szkielet:
   - Problem i kontekst (kto jest użytkownikiem, co mu przeszkadza),
   - Moja rola i ograniczenia (budżet, zgody, czas),
   - Proces: research → przepływ → prototyp → wersja finalna,
   - **What AI did / What I did** – tabela w dwóch kolumnach. To jest kluczowe dla tej oferty,
   - Stany i przypadki brzegowe, które przewidział,
   - Wynik i czego się nauczył, co zrobiłby dalej.
   Szczegóły mogą się rozwijać (akordeon albo panel boczny), żeby strona nie była ścianą tekstu.
4. **KSK Pretor** to kilka projektów w jednym case study: research rynku niemieckiego (persony, 4 ścieżki klienta, 7 miejsc odpadania, 8 dźwigni), model 3D, prototyp agenta AI, branding wideo. Narysuj ścieżki klienta jako animowany diagram w SVG lub HTML, nie jako obrazek tekstu.
5. **How I work with AI** – workflow krok po kroku, tabela narzędzi z `CLAUDE.md` (do czego każde), gdzie AI przyspiesza, a gdzie decyzja zostaje po stronie Huberta. Podsekcja „What I'm exploring now”, spójna z drugą częścią wideo (Etap 6).
6. **About** – motywacja: szuka miejsca na dłużej, chce się rozwijać w pracy z AI, satysfakcja z budowania rzeczy, które działają. Krótko o tle: marketing, praca z klientami, trener personalny jako doświadczenie pracy z ludźmi.
7. **CV** – skrócona wersja CV w sekcji plus link „Content pending: link to CV”.
8. **Contact** – e-mail jako tekst i link, GitHub, luka na LinkedIn.

Nawigacja: przyklejony pasek z kotwicami do sekcji i wskaźnikiem aktualnej sekcji. Linki z `#nazwa-sekcji` działają po wklejeniu w przeglądarkę.

Styl tekstów: jak dokument konsultingowy. Krótkie zdania, konkret, aktywna strona, każde zdanie coś wnosi. Bez „passionate”, „leverage”, „cutting-edge”, „in today's fast-paced world”, bez myślników jako wtrąceń i bez konstrukcji „not X, but Y”.

Commit.

## Etap 3b – Motion i przejścia

Ruch ma być płynny i dopracowany, na poziomie stron nagradzanych na Awwwards, ale nie może utrudniać czytania.

- Biblioteki trzymaj lokalnie w `vendor/`, zainstalowane z npm: GSAP z ScrollTrigger (`gsap`), płynne przewijanie Lenis (`lenis`), opcjonalnie SplitType do animacji liter.
- Hero: ciągły obrót napisu 3D bez szarpnięć, płynne wejście przy ładowaniu. Karuzela na łuku: płynny obrót z bezwładnością po puszczeniu przeciągania. Sprawdź oba na telefonie.
- Między sekcjami: przejścia przy przewijaniu (odsłanianie maską, parallax okładek, przypinanie sekcji tam, gdzie opowiada historię, np. ścieżki klienta KSK krok po kroku).
- Mikrointerakcje: przyciski, karty projektów, kursor przy okładkach na desktopie, płynne otwieranie case study.
- Animuj tylko `transform` i `opacity`. Utrzymuj 60 fps; sprawdź w Playwright, czy nie ma długich zadań powyżej 50 ms przy przewijaniu.
- `prefers-reduced-motion`: wszystko widoczne od razu, bez przewijania Lenis, bez przypinania.
- Treść jest widoczna także bez JavaScriptu i przed startem animacji. Nic nie czeka na `opacity: 0`.

Commit.

## Etap 4 – Interaktywne prototypy (tu pokazujesz UX, nie tylko UI)

Zbuduj trzy działające prototypy osadzone w case studies na tej samej stronie (w sekcji albo w panelu, który otwiera się nad stroną). Każdy oznacz jasno jako „Concept prototype built for this portfolio”, żeby nikt nie pomyślał, że to wdrożony produkt.

1. **Livingroom: rezerwacja stolika.** To brakujący element prawdziwego projektu. Przepływ: data → godzina → liczba osób → dane → potwierdzenie. Stany: brak wolnych godzin, błędy walidacji przy polach, grupa powyżej 8 osób przechodzi na formularz zapytania, ładowanie, błąd sieci z ponowieniem, sukces z podsumowaniem. Dodaj przełącznik „Show all states”, który pozwala rekruterowi przejrzeć każdy stan bez klikania całej ścieżki.
2. **KSK Pretor: niemiecka strona rezerwacji grupowej.** Zbudowana z wymagań z researchu: pakiety z ceną w EUR, wybór wielkości grupy (12–30), widoczna cena za osobę i za grupę, rezerwacja terminu, pytanie „Wie haben Sie von uns erfahren?”. Interfejs po niemiecku, obok krótki opis po angielsku, które decyzje wynikają z których ustaleń researchu. Ceny oznacz jako przykładowe.
3. **Model 3D AK-47.** Osadź istniejący projekt z `Hubbit005/ksk-ak47-3d` (skopiuj kod, bibliotekę three.js trzymaj w `vendor/`). Obok opisz projekt interakcji: stany przełącznika, blokada spustu w trybie zabezpieczonym, tryb zdjęcia, obniżanie jakości na telefonach.

Każdy prototyp: działa klawiaturą, ma widoczny focus, opisane pola formularzy, komunikaty błędów mówią, co poprawić. Działa na telefonie.

Commit po każdym prototypie.

## Etap 5 – Budowa i dopracowanie

- Statyczny HTML, CSS i JS. Bez frameworka, chyba że uzasadnisz go w `docs/strategia.md`. Strona musi działać na GitHub Pages z gałęzi `main`, katalog główny.
- Wszystko lokalnie w `vendor/`, żadnych zależności od CDN.
- Responsywność od 360 px do 1920 px. Szerokość tekstu około 65 znaków.
- Jedna strona `index.html`; style i skrypty możesz dzielić na pliki w `css/` i `js/`.
- Meta tagi, Open Graph z obrazem 1200×630, favicon, `404.html`, `sitemap.xml`.
- Wydajność: obrazy zoptymalizowane, fonty z `font-display: swap`, brak blokującego JS.

## Etap 6 – Materiały do aplikacji (poza stroną)

1. `docs/wideo-skrypt-en.md` – scenariusz wideo po angielsku, 8–9 minut, z czasami:
   - 0:00–5:00 – jeden projekt z AI. Zaproponuj, który najlepiej pasuje (raczej model 3D albo prototyp rezerwacji z portfolio), i rozpisz: co zbudował, jakie narzędzia, co zrobiło AI, a co on, czego się nauczył. Wskaż, co pokazać na ekranie w każdej minucie.
   - 5:00–9:00 – co teraz bada i dlaczego. Spójnie z sekcją „What I'm exploring now”.
   - Proste zdania na poziomie, który da się powiedzieć naturalnie. Dopisz polskie tłumaczenie pod każdym blokiem, żeby Hubert rozumiał każde zdanie.
2. `docs/pytania-rozmowa.md` – 15 pytań, które prawdopodobnie padną na rozmowie z HR i z designerem, z krótkimi odpowiedziami opartymi na faktach z `CLAUDE.md`. Uwzględnij trudne pytania: brak Figmy, brak formalnego doświadczenia UX, poziom angielskiego.
3. `docs/cv-en.md` – treść CV po angielsku dopasowana do oferty, z Basko Clean na pierwszym miejscu. Hubert przeniesie ją do Google Docs.

Commit.

## Etap 7 – Kontrola jakości w pętli

Powtarzaj, aż lista odbioru będzie spełniona, minimum trzy rundy:

1. Zrzuty Playwright każdej sekcji: 1440, 768, 390 px, tryb jasny i ciemny. Obejrzyj każdy zrzut i popraw to, co widać: nachodzący tekst, uciekające elementy, złą hierarchię, za małe odstępy.
2. Testy dostępności przez `axe-core` z npm na całej stronie. Zero błędów krytycznych i poważnych.
3. Przeklikaj każdy prototyp w Playwright, łącznie ze stanami błędów. Sprawdź obsługę samą klawiaturą.
4. Sprawdź linki (wewnętrzne bez błędów 404).
5. **Recenzja świeżym okiem:** uruchom osobnego subagenta, który nie widział procesu. Ma wcielić się w seniora z Flying Bisons, obejrzeć zrzuty i kod, i ocenić portfolio w skali 1–10 w sześciu kategoriach: efekt „wow” i jakość ruchu, jasność przekazu, myślenie UX (stany, przepływy), jakość wizualna, wiarygodność pracy z AI, jakość tekstów po angielsku. Zapisz recenzję w `docs/recenzje/runda-N.md`. Popraw wszystko poniżej 8 i uruchom kolejną rundę.
6. Osobny subagent sprawdza teksty: czy każde zdanie ma pokrycie w `CLAUDE.md`, czy nie brzmi jak AI, czy angielski jest naturalny.

Commit po każdej rundzie.

## Etap 8 – Oddanie

1. `README.md` po polsku: co jest w repo, jak otworzyć lokalnie (`python3 -m http.server 8000`), jak włączyć GitHub Pages (Settings → Pages → Deploy from a branch → `main` / root), pod jakim adresem będzie strona (`https://hubbit005.github.io/<nazwa-repo>/`).
2. `docs/do-uzupelnienia.md` – pełna lista tego, co Hubert musi dostarczyć lub potwierdzić, z priorytetem i miejscem w kodzie, w kolejności: najpierw to, bez czego nie można wysłać aplikacji 6.11.
3. Na koniec napisz mi po polsku krótkie podsumowanie: co powstało, ocena z ostatniej recenzji, 5 najważniejszych rzeczy do uzupełnienia przed wysłaniem.

## Lista odbioru

- [ ] Jedna strona ze wszystkimi sekcjami z Etapu 3 działa na GitHub Pages bez CDN.
- [ ] Obracający się napis 3D i karuzela na łuku działają płynnie na desktopie i telefonie, zgodnie z `docs/referencja-wizualna.md`.
- [ ] Płynny ruch i przejścia działają; przy `prefers-reduced-motion` strona jest w pełni czytelna bez animacji.
- [ ] Higgsfield: wydane najwyżej 200 kredytów, każda generacja z kosztem w `docs/higgsfield-log.md`, plan w `docs/higgsfield-plan.md`.
- [ ] Każda luka w treści widoczna jako „Content pending: …” i wpisana do `docs/do-uzupelnienia.md`.
- [ ] Każde case study ma tabelę „What AI did / What I did”.
- [ ] Trzy prototypy działają, każdy z przeglądem wszystkich stanów.
- [ ] Prawdziwe zrzuty projektów tam, gdzie udało się je zrobić; dopracowane miejsca tam, gdzie nie.
- [ ] Zero zmyślonych faktów. Braki oznaczone `[TODO]` i zebrane w `docs/do-uzupelnienia.md`.
- [ ] axe-core: zero błędów krytycznych i poważnych.
- [ ] Ostatnia recenzja: wszystkie kategorie co najmniej 8/10.
- [ ] Scenariusz wideo, pytania na rozmowę i CV po angielsku w `docs/`.
- [ ] README z instrukcją GitHub Pages.
