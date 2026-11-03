# CLAUDE.md – portfolio Huberta

Ten plik czytasz na początku każdej sesji. Masz tu wszystko, co wiadomo o Hubercie, jego projektach i celu tego repozytorium. Zadanie do wykonania jest w `PROMPT.md`.

## Cel repozytorium

Strona portfolio Huberta, którą wyśle razem z CV na stanowisko **Junior UX/UI Designer (AI-Native) w Flying Bisons** (Warszawa, zdalnie). Termin aplikacji: **6.11.2026**. Szczegóły oferty: `docs/oferta-flying-bisons.md`.

Strona ma pokazać trzy rzeczy, których szuka rekruter:
1. Hubert projektuje całe ścieżki użytkownika, ze stanami, błędami i przypadkami brzegowymi, a nie pojedyncze ekrany.
2. Pracuje z narzędziami AI jako codziennym warsztatem i umie powiedzieć, co zrobiło AI, a co on.
3. Ma wyczucie wizualne: hierarchia, odstępy, typografia, ruch.

Sama strona jest dowodem kompetencji. Rekruter oceni ją jak projekt UX/UI.

## Kim jest Hubert

- Imię: Hubert (nick: Hubibi). Nazwisko: `[DO UZUPEŁNIENIA]`.
- Mieszka w okolicach Gorzowa Wielkopolskiego. Pracuje zdalnie.
- E-mail: hubert.austria2025@gmail.com. Telefon i LinkedIn: `[DO UZUPEŁNIENIA]`.
- GitHub: github.com/Hubbit005
- Freelance web designer. Robi też marketing i treści wizualne dla firm.
- Potrafi obrabiać wideo i tworzyć grafiki, w tym motion graphics.
- Bardzo interesuje się branżą AI i na bieżąco śledzi nowości.
- Jest kreatywny. Potrafi pracować bardzo dużo, jeśli praca daje efekt.
- Szuka miejsca na dłużej. Najbardziej zależy mu na rozwoju i doskonaleniu pracy z narzędziami AI, bo uważa, że to przyszłość. Największą satysfakcję daje mu zbudowanie czegoś, co działa i dobrze wygląda.
- Wcześniej: trener personalny (ma certyfikat), kilka miesięcy e-commerce (dropshipping na Amazonie). E-commerce to tylko informacja dodatkowa, nie eksponuj jej.
- Język: polski ojczysty, angielski `[POZIOM DO POTWIERDZENIA, oferta wymaga C1]`.

## Narzędzia, których używał

| Narzędzie | Do czego |
|---|---|
| Claude, Claude Code | strony internetowe, prototypy, kod, motion graphics w kodzie, strategia i research |
| ChatGPT | teksty, research, praca nad strategią KSK Pretor |
| Google Gemini | research, porównania |
| Perplexity | research ze źródłami, analiza rynku |
| Higgsfield | generowanie wideo i obrazów (np. Seedance), edycja wideo z podmianą osoby |
| Leonardo AI | generowanie grafik |
| Manifold | research marketingowy i social media |
| Sendcastle | `[DO UZUPEŁNIENIA: do czego używał]` |
| Botpress | prototyp agenta AI (czatbota) dla KSK Pretor |
| Canva | grafiki, posty, materiały |
| Wispr Flow | dyktowanie, praca głosowa |
| GSAP, HyperFrames, Playwright | animacje w kodzie renderowane do MP4 |
| three.js | interaktywny model 3D |

Figmy na razie nie używa. Nie wpisuj jej jako umiejętności.

## Projekty (w kolejności ważności dla tej strony)

### 1. Basko Clean – strona internetowa i reklama motion graphic (NAJWAŻNIEJSZY)
- Klient: Basko Clean, firma z Szczecina, czyszczenie przemysłowe B2B.
- Hubert zaprojektował i zakodował stronę firmy. Kod: repozytorium `Hubbit005/BaskoClean` (tytuł strony „Basko Clean — Profesjonalne czyszczenie B2B”, fonty Inter i Plus Jakarta Sans, React przez Babel w przeglądarce, komponenty Navbar, Hero, Galeria, ui). Uwaga: w repo jest tylko `index.html`, pliki `.jsx` mogą być gdzie indziej. Strona jest utrzymywana i aktualizowana.
- Zrobił reklamę wideo w stylu motion graphic: płaska grafika 2D, kinetyczna typografia, ludzik z logo (postać sprzątacza) jako bohater, ruch mopa, przejście w logo. Świadomie odrzucił wersję realistyczną 3D z AI, bo nie pasowała do marki.
- Prowadzi ich social media (Instagram, LinkedIn, TikTok). Sam nagrywa materiał na realizacjach i montuje rolki.
- Przygotował identyfikację na profile: wektoryzacja ludzika z logo, zdjęcia profilowe w wersji jasnej i ciemnej, biogram IG.
- Ograniczenia, które warto pokazać jako decyzje: logo i nazwy klientów Basko tylko za zgodą, mały budżet reklamowy.

### 2. Livingroom – strona restauracji w Gorzowie Wlkp.
- Hubert odwiedził restaurację i uznał, że jej strona nie oddaje jakości lokalu.
- Z własnej inicjatywy zbudował prawie gotową stronę jako demo do oferty (cold outreach). Do wdrożenia brakowało integracji formularza rezerwacji.
- Pokazuje inicjatywę i myślenie od problemu klienta. Materiały: `[DO UZUPEŁNIENIA: zrzuty ekranu lub link do demo]`.

### 3. KSK Pretor – strzelnica i eventy (Racław k. Gorzowa)
Tu jest kilka projektów naraz:
- **Plan wejścia na rynek niemiecki.** 18 rozdziałów: pozycjonowanie, analiza ponad 40 konkurentów, 5 person (organizator HR, agencja eventowa, grupa znajomych, pasjonat broni, organizator wieczoru kawalerskiego), 4 osobne ścieżki klienta (od kilku dni do 12 miesięcy planowania), 7 miejsc, w których klient odpada, 8 dźwigni konwersji, wymagania dla niemieckiej strony docelowej (pakiety w EUR, rezerwacja, śledzenie konwersji), SEO, reklamy, outbound B2B, KPI. Potem skrócona wersja na 59 stron dla właściciela, gdzie każda sekcja odpowiada na te same pięć pytań. To jest research UX w czystej postaci: persony, journey mapy, punkty bólu.
- **Prototyp agenta AI** dla strzelnicy (Botpress). Szczegóły: `[DO UZUPEŁNIENIA: co agent robi, np. odpowiada na pytania o pakiety, zbiera zapytania grupowe, w jakim języku]`.
- **Interaktywny model 3D AK-47** w przeglądarce. Repo `Hubbit005/ksk-ak47-3d`, na żywo: https://hubbit005.github.io/ksk-ak47-3d/ . Model zbudowany w kodzie z prostych brył (three.js), bez gotowych modeli. Obracanie, podświetlanie części z podpisem, klikalny spust (w trybie ZABEZPIECZONY nie strzela), rączka zamka, przełącznik trybów, rozkładanie krok po kroku, tryb zdjęcia z eksportem PNG 1080×1350 i 1080×1920 na Instagram. Na telefonach sam obniża jakość renderu. To świetny przykład projektowania stanów i interakcji.
- **Branding wideo:** 3-sekundowe intro i outro z logo (kula przelatuje przez kadr, logo wyłania się zza niej), wersje polska i niemiecka, plansza „Vielen Dank” dla agencji, 10-sekundowy spot. Animacje zbudowane w HTML/GSAP i wyrenderowane klatka po klatce. Kolory marki: czerwień, czerń, biel.

### 4. Strona dla psycholożki (projekt klienta, w budowie)
- Astro 5 + Tailwind 4, budowana w Claude Code.
- Pełna ścieżka zakupu: wybór pakietu, koszyk, makieta płatności, ekran „dziękuję”. Dzięki temu ścieżkę można przeklikać, zanim podłączona zostanie bramka (Stripe).
- Rezerwacja przez osadzony Cal.com, żeby klientka sama zarządzała terminami.
- Plakietki metod płatności zbudowane, ale wyłączone do czasu uruchomienia bramki.
- Pokaż bez nazwiska klientki i bez jej danych, chyba że Hubert potwierdzi zgodę. Treści na stronie są robocze.

### 5. Spersonalizowane plany treningowe jako strony WWW
- Seria stron z 8-tygodniowymi planami treningowymi dla klientów (repozytoria `Hubbit005/*-workout`, `Amelka-`, `Zosia-` itd.), generowanych z jednego szablonu.
- Pokazuj tylko zanonimizowane. Nie używaj imion ani nazwisk klientów.

### 6. Interaktywny ebook (projekt własny)
- Ebook w HTML z nawigacją w panelu bocznym i interaktywną listą kontrolną objawów, dla czytelników 50+.

## Zasady dla Claude Code w tym repo

- Strona po angielsku (aplikacja jest po angielsku). Instrukcje i komunikacja z Hubertem po polsku.
- Fakty tylko z tego pliku. Nie wymyślaj klientów, liczb, wyników ani opinii. Czego brakuje, oznacz `[TODO: …]` w kodzie i dopisz do `docs/do-uzupelnienia.md`.
- Bez poufnych materiałów klientów (wymóg z oferty). Nazwy klientów: Basko Clean, KSK Pretor i Livingroom można pokazać. Psycholożki i klientów planów treningowych nie nazywaj.
- Teksty jak w dobrym dokumencie konsultingowym: proste, konkretne, logiczne. Bez typowego dla AI języka, bez waty, bez ozdobników.
- Pliki biurowe wyłącznie w formatach Google. Nigdy .docx, .xlsx ani .pptx.
- Strona statyczna, gotowa pod GitHub Pages (gałąź `main`, katalog główny). Biblioteki i fonty trzymaj lokalnie w `vendor/`, bo w środowisku sesji CDN-y mogą być zablokowane, a strona ma się dać przetestować.
- Higgsfield: limit 200 kredytów na sesję, każda generacja z kosztem w `docs/higgsfield-log.md`. Szczegóły w `PROMPT.md`.
- Commituj po każdym zakończonym etapie, z opisem po polsku.
