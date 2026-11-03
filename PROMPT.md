# PROMPT – zbuduj portfolio Huberta od początku do końca

Wklej całość jako pierwszą wiadomość sesji Claude Code w tym repozytorium.

---

## Rola

Jesteś starszym product designerem i front-end developerem w jednej osobie. Budujesz portfolio juniora, który aplikuje do studia projektowego Flying Bisons na stanowisko Junior UX/UI Designer (AI-Native). Masz dużo czasu i budżetu. Wykorzystaj go na jakość: badaj, buduj, testuj, poprawiaj. Nie kończ po pierwszej działającej wersji.

## Zanim zaczniesz

1. Przeczytaj `CLAUDE.md` (fakty o Hubercie i zasady) oraz `docs/oferta-flying-bisons.md` (czego szuka rekruter).
2. Sprawdź, co leży w `assets/` (zrzuty, filmy od Huberta). Jeśli coś jest, użyj tego w pierwszej kolejności.
3. Nie zadawaj mi pytań w trakcie. Gdy czegoś brakuje, przyjmij rozsądne założenie, oznacz je `[TODO: …]` i dopisz do `docs/do-uzupelnienia.md`. Pracuj do końca listy odbioru na dole.

## Najważniejsza zasada

Wszystkie fakty bierz z `CLAUDE.md`. Nie wymyślaj liczb, wyników, klientów, opinii ani cytatów. Rekruter będzie o to pytał na rozmowie. Lepszy uczciwy `[TODO]` niż ładne zmyślenie.

## Etap 1 – Strategia i kierunek wizualny

- Zapisz w `docs/strategia.md`: kto ogląda stronę (rekruter i designer z Flying Bisons), co ma zapamiętać po 30 sekundach, jaka jest kolejność projektów i dlaczego.
- Główny przekaz: Hubert zamienia problem klienta w działające, przeklikiwalne rozwiązanie, a AI traktuje jako warsztat, nad którym ma kontrolę. Jego doświadczenie z marketingu i pracy z klientami pasuje do ich „Invisible 90%”.
- Zaproponuj w `docs/kierunek-wizualny.md` trzy różne kierunki (paleta, typografia, układ, ruch, jedno zdanie uzasadnienia). Wybierz jeden i uzasadnij wybór.
- Unikaj generycznych wyglądów AI: gradientu fiolet–niebieski, kremu z serifem i terakotą, czerni z jednym kwasowo-zielonym akcentem, Inter jako jedynego fontu, emoji zamiast ikon, wszystkiego wyśrodkowanego, identycznych zaokrąglonych kart.
- Hubert ma wyczucie streetwearowe: mocna typografia, wysoki kontrast. Możesz to wykorzystać, ale strona ma wyglądać profesjonalnie dla firmy doradczej, która pracuje z bankami i administracją.
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

## Etap 3 – Struktura i treść

Strona po angielsku. Podstrony:

1. **Home** – kim jest Hubert w jednym zdaniu, 3–4 wybrane projekty, przycisk do CV i kontaktu. Bez ogromnego hero na cały ekran.
2. **Case studies** – osobna podstrona na każdy projekt. Kolejność: Basko Clean, KSK Pretor, Livingroom, strona dla psycholożki (bez nazwiska), plany treningowe (anonimowo), ebook (krótko). Każde case study ma ten sam szkielet:
   - Problem i kontekst (kto jest użytkownikiem, co mu przeszkadza),
   - Moja rola i ograniczenia (budżet, zgody, czas),
   - Proces: research → przepływ → prototyp → wersja finalna,
   - **What AI did / What I did** – tabela w dwóch kolumnach. To jest kluczowe dla tej oferty,
   - Stany i przypadki brzegowe, które przewidział,
   - Wynik i czego się nauczył,
   - Co zrobiłby dalej.
3. **KSK Pretor** to kilka projektów w jednym case study: research rynku niemieckiego (persony, 4 ścieżki klienta, 7 miejsc odpadania, 8 dźwigni), model 3D, prototyp agenta AI, branding wideo. Narysuj ścieżki klienta jako czytelny diagram w SVG lub HTML, nie jako obrazek tekstu.
4. **How I work with AI** – workflow Huberta krok po kroku, tabela narzędzi z `CLAUDE.md` (do czego każde), gdzie AI przyspiesza, a gdzie decyzja zostaje po jego stronie, czego się nauczył o pisaniu promptów i weryfikacji wyników. Sekcja „What I'm exploring now”, spójna z drugą częścią wideo (zob. Etap 6).
5. **About** – motywacja: szuka miejsca na dłużej, chce się rozwijać w pracy z AI, satysfakcja z budowania rzeczy, które działają. Krótko o tle: marketing, praca z klientami, trener personalny jako doświadczenie pracy z ludźmi. Bez lania wody.
6. **CV** – wersja HTML CV na stronie plus link `[TODO: link do CV w PDF lub Google Docs]`.
7. **Contact** – e-mail jako tekst i link, GitHub, `[TODO: LinkedIn]`.

Styl tekstów: jak dokument konsultingowy. Krótkie zdania, konkret, aktywna strona, każde zdanie coś wnosi. Bez „passionate”, „leverage”, „cutting-edge”, „in today's fast-paced world”, bez myślników jako wtrąceń i bez konstrukcji „not X, but Y”.

Commit.

## Etap 4 – Interaktywne prototypy (tu pokazujesz UX, nie tylko UI)

Zbuduj trzy działające prototypy osadzone w case studies. Każdy oznacz jasno jako „Concept prototype built for this portfolio”, żeby nikt nie pomyślał, że to wdrożony produkt.

1. **Livingroom: rezerwacja stolika.** To brakujący element prawdziwego projektu. Przepływ: data → godzina → liczba osób → dane → potwierdzenie. Stany: brak wolnych godzin, błędy walidacji przy polach, grupa powyżej 8 osób przechodzi na formularz zapytania, ładowanie, błąd sieci z ponowieniem, sukces z podsumowaniem. Dodaj przełącznik „Show all states”, który pozwala rekruterowi przejrzeć każdy stan bez klikania całej ścieżki.
2. **KSK Pretor: niemiecka strona rezerwacji grupowej.** Zbudowana z wymagań z researchu: pakiety z ceną w EUR, wybór wielkości grupy (12–30), widoczna cena za osobę i za grupę, rezerwacja terminu, pytanie „Wie haben Sie von uns erfahren?”. Interfejs po niemiecku, obok krótki opis po angielsku, które decyzje wynikają z których ustaleń researchu. Ceny oznacz jako przykładowe.
3. **Model 3D AK-47.** Osadź istniejący projekt z `Hubbit005/ksk-ak47-3d` (skopiuj kod, bibliotekę three.js trzymaj w `vendor/`). Obok opisz projekt interakcji: stany przełącznika, blokada spustu w trybie zabezpieczonym, tryb zdjęcia, obniżanie jakości na telefonach.

Każdy prototyp: działa klawiaturą, ma widoczny focus, opisane pola formularzy, komunikaty błędów mówią, co poprawić. Działa na telefonie.

Commit po każdym prototypie.

## Etap 5 – Budowa i dopracowanie

- Statyczny HTML, CSS i JS. Bez frameworka, chyba że uzasadnisz go w `docs/strategia.md`. Strona musi działać na GitHub Pages z gałęzi `main`, katalog główny.
- Wszystko lokalnie w `vendor/`, żadnych zależności od CDN.
- Responsywność od 360 px do 1920 px. Szerokość tekstu około 65 znaków.
- Ruch oszczędny i celowy. Szanuj `prefers-reduced-motion`. Animuj tylko `transform` i `opacity`.
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

1. Zrzuty Playwright każdej podstrony: 1440, 768, 390 px, tryb jasny i ciemny. Obejrzyj każdy zrzut i popraw to, co widać: nachodzący tekst, uciekające elementy, złą hierarchię, za małe odstępy.
2. Testy dostępności przez `axe-core` z npm na każdej podstronie. Zero błędów krytycznych i poważnych.
3. Przeklikaj każdy prototyp w Playwright, łącznie ze stanami błędów. Sprawdź obsługę samą klawiaturą.
4. Sprawdź linki (wewnętrzne bez błędów 404).
5. **Recenzja świeżym okiem:** uruchom osobnego subagenta, który nie widział procesu. Ma wcielić się w seniora z Flying Bisons, obejrzeć zrzuty i kod, i ocenić portfolio w skali 1–10 w pięciu kategoriach: jasność przekazu, myślenie UX (stany, przepływy), jakość wizualna, wiarygodność pracy z AI, jakość tekstów po angielsku. Zapisz recenzję w `docs/recenzje/runda-N.md`. Popraw wszystko poniżej 8 i uruchom kolejną rundę.
6. Osobny subagent sprawdza teksty: czy każde zdanie ma pokrycie w `CLAUDE.md`, czy nie brzmi jak AI, czy angielski jest naturalny.

Commit po każdej rundzie.

## Etap 8 – Oddanie

1. `README.md` po polsku: co jest w repo, jak otworzyć lokalnie (`python3 -m http.server 8000`), jak włączyć GitHub Pages (Settings → Pages → Deploy from a branch → `main` / root), pod jakim adresem będzie strona (`https://hubbit005.github.io/<nazwa-repo>/`).
2. `docs/do-uzupelnienia.md` – pełna lista tego, co Hubert musi dostarczyć lub potwierdzić, z priorytetem i miejscem w kodzie, w kolejności: najpierw to, bez czego nie można wysłać aplikacji 6.11.
3. Na koniec napisz mi po polsku krótkie podsumowanie: co powstało, ocena z ostatniej recenzji, 5 najważniejszych rzeczy do uzupełnienia przed wysłaniem.

## Lista odbioru

- [ ] Wszystkie podstrony z Etapu 3 istnieją i działają na GitHub Pages bez CDN.
- [ ] Każde case study ma tabelę „What AI did / What I did”.
- [ ] Trzy prototypy działają, każdy z przeglądem wszystkich stanów.
- [ ] Prawdziwe zrzuty projektów tam, gdzie udało się je zrobić; dopracowane miejsca tam, gdzie nie.
- [ ] Zero zmyślonych faktów. Braki oznaczone `[TODO]` i zebrane w `docs/do-uzupelnienia.md`.
- [ ] axe-core: zero błędów krytycznych i poważnych.
- [ ] Ostatnia recenzja: wszystkie kategorie co najmniej 8/10.
- [ ] Scenariusz wideo, pytania na rozmowę i CV po angielsku w `docs/`.
- [ ] README z instrukcją GitHub Pages.
