# Do uzupełnienia i potwierdzenia

Lista wszystkiego, co Hubert musi dostarczyć albo potwierdzić. Kolejność: najpierw to, bez czego nie można wysłać aplikacji **6.11.2026**.

Jak znaleźć miejsce w kodzie: w `index.html` każde miejsce ma komentarz `<!-- TODO: … -->` (wyszukaj podany tekst). Na stronie widać je jako blok „Content pending”.

---

## P0 – przed wysłaniem 6.11 (blokujące)

| # | Co | Gdzie | Uwagi |
|---|---|---|---|
| 1 | **Włącz GitHub Pages** i sprawdź, czy strona działa pod `https://hubbit005.github.io/hubert-portfolio/` | Ustawienia repo | Instrukcja w `README.md` |
| 2 | **Nazwisko** | `index.html`: `TODO: add surname`; `docs/cv-en.md` | W podłączonym koncie Wispr Flow widnieje „Hubert Józef Skonieczny”. Nie wpisałem tego, bo `CLAUDE.md` mówi „do uzupełnienia”. Potwierdź, a wstawię w róg hero i w tytuł strony. |
| 3 | **Link do CV (PDF)** | `index.html`: `TODO: link to the CV` | Treść CV jest w `docs/cv-en.md`. Przenieś do Google Docs, wyeksportuj PDF, wstaw link (np. Google Drive, „każdy z linkiem”). |
| 4 | **LinkedIn** (link) | `index.html`: `TODO: LinkedIn URL`; CV | Jeśli nie masz profilu, usuń wiersz. |
| 5 | **Poziom angielskiego** | `index.html` sekcja CV (`level pending`); `docs/cv-en.md`; `docs/pytania-rozmowa.md` pyt. 4 | Oferta wymaga C1. Podaj uczciwie. |
| 6 | **Potwierdź podział „What AI did / What I did”** w każdym case study | `index.html`, bloki `.ai-table` | Opisałem go z `CLAUDE.md` (Claude Code = kod, Ty = decyzje). Rekruter zapyta o szczegóły. Popraw każde zdanie, które nie jest dokładnie prawdziwe. |
| 7 | **Plany treningowe: kto pisze treść i jak powstają strony z szablonu** | `index.html`: `TODO: confirm who wrote the training content` | Na stronie jako „Content pending”. Claude zbudował szablon (założenie z `CLAUDE.md`), reszta do potwierdzenia. |
| 7a | **Potwierdź zdania o narzędziach, których `CLAUDE.md` nie przypisuje do projektu** | `index.html` | (1) Basko: strona pisana w Claude Code; (2) KSK: Perplexity i Gemini przy researchu; (3) Livingroom: demo w Claude Code; (4) jakim narzędziem AI powstała odrzucona wersja 3D reklamy Basko (na stronie ogólnie „An AI video model”). |
| 7b | **Film KSK (35 s, niemiecki)**: czy to Twoja praca i jak powstał | sekcja KSK „Video branding” | `CLAUDE.md` wymienia intro, outro, planszę „Vielen Dank” i spot 10 s, ale nie ten film. Wrzuciłeś go do `assets/`, więc pokazuję go jako Twój. Jeśli to nie Twoja praca, usuń wideo. |
| 7c | **Status logo klientów na stronie Basko** | sekcja Basko, stan „Consent” | Twój zrzut pokazuje już sekcję „Klienci” z nazwami firm. Na portfolio piszę tylko, że nazwy i logo są na stronie Basko wyłącznie za zgodą klientów. Sprawdź, czy to prawda. |
| 8 | **Potwierdź „What I'm exploring now”** (3 tematy) | `index.html`: `TODO: Hubert to confirm these three topics` | Muszą się zgadzać z częścią 2 wideo (`docs/wideo-skrypt-en.md`). |
| 9 | **Uzupełnij `[TODO]` w scenariuszu wideo** i nagraj | `docs/wideo-skrypt-en.md` | Własne przykłady: poprawka, o którą prosiłeś AI; jak działała pierwsza wersja na telefonie; wnioski. |
| 9a | **Zdecyduj, co w repozytorium ma być publiczne** | całe repo | Portfolio linkuje do repo (Case 06 „This portfolio”). W `docs/` są Twoje przygotowania do rozmowy, scenariusz wideo i recenzje z ocenami, a w `assets/` surowe filmy (33 MB) i pliki „Zrzut ekranu…”. Rekomendacja: przenieś `docs/pytania-rozmowa.md`, `docs/wideo-skrypt-en.md` i `docs/cv-en.md` do prywatnego miejsca (np. Google Docs) przed wysłaniem linku. Recenzje i `qa-log.md` mogą zostać, bo są dowodem procesu. |
| 10 | **Zgoda na pokazanie filmu KSK i zrzutów Basko** | sekcje Basko i KSK | Zakładam, że to materiały publiczne klienta. Jeśli nie, napisz, usunę. Zrzut z nazwami klientów Basko (`Zrzut ekranu 2026-11-03 154015.png`) celowo nie jest użyty. |

## P1 – mocno wzmacnia aplikację (najlepiej przed 6.11)

| # | Co | Gdzie | Format |
|---|---|---|---|
| 11 | **Opis agenta AI KSK Pretor**: na co odpowiada, co zbiera z zapytania grupowego, w jakich językach, kiedy przejmuje człowiek | `index.html`: `TODO: describe what the KSK Pretor agent does` | 3–4 zdania |
| 12 | **Zrzut rozmowy z agentem** (Botpress) | `assets/screenshots/ksk-agent-1.png` | 4:5, min. 800×1000 px. Sekcja agenta została skrócona do jednej linijki w KSK; ze zrzutem i opisem warto przywrócić osobny blok. |
| 13 | **Wyniki i wnioski Basko** (tylko te, które możesz udowodnić: zapytania, zasięgi) | `index.html`: `TODO: results (e.g. enquiries, reach)` | 2–3 zdania |
| 14 | **Czy reel na stronie to ta reklama z ludzikiem i mopem?** | sekcja Basko, wideo w ramce telefonu | `CLAUDE.md` opisuje reklamę z ludzikiem jako bohaterem i ruchem mopa. Reel w `assets/video` pokazuje typografię, proces, przed/po i logo. Jeśli to dwa różne filmy, wrzuć reklamę jako `assets/video/basko-reklama.mp4`. |
| 15 | **Obsługa błędów formularza wyceny Basko** (puste pola, zły telefon, brak sieci) | `index.html`: `TODO: quote form validation` | 2–3 zdania |
| 16 | **Co właściciel KSK zrobił z planem** + Twoje wnioski | `index.html`: `TODO: what the owner did with the plan` | 2–3 zdania |
| 17 | **Nazwy ścieżek 2 i 3 oraz 7 punktów odpadania** | `index.html`: `TODO: Hubert to name journeys 2 and 3` | Diagram ma podpis „ilustracyjny”. Z prawdziwymi danymi będzie mocniejszy. |
| 18 | **Intro i outro KSK** (3 s, PL i DE) | `assets/video/ksk-intro.mp4`, `ksk-outro.mp4` | 16:9, H.264, do 5 MB |
| 19 | **Reakcja Livingroom na demo** + wnioski | `index.html`: `TODO: outcome of the pitch` | 1–2 zdania |
| 20 | **Narzędzie do ilustracji Livingroom** (fasada, dania) | `index.html`: `TODO: which tool made the storefront` | np. Leonardo AI / Higgsfield |
| 21 | **Daty doświadczenia** (freelance, trener) | `index.html` sekcja CV: `TODO: dates`; `docs/cv-en.md` | miesiąc/rok |

## P2 – po wysłaniu albo gdy będzie czas

| # | Co | Gdzie | Format |
|---|---|---|---|
| 22 | Zrzuty strony psycholożki **bez danych klientki i tylko za jej zgodą** | `assets/screenshots/psycholog-1.png` (desktop 16:10), `psycholog-2.png` (telefon) | Podmień ramki `frame-slot--browser` / `frame-slot--phone` |
| 23 | Temat ebooka i zrzuty (panel boczny, lista kontrolna) | `index.html`: `TODO: ebook topic` | 2 zrzuty |
| 24 | Do czego używasz **Sendcastle** (wiersz usunięty z tabeli narzędzi do czasu potwierdzenia) | `index.html`: `TODO: Sendcastle`; `CLAUDE.md` | 1 zdanie |
| 25 | Telefon (opcjonalnie) | sekcja Contact, CV | |
| 26 | Okładki z Higgsfield (3 obrazy już wygenerowane, nie dało się ich pobrać w tej sesji) | `docs/higgsfield-log.md` | Opcjonalne. Strona ma okładki typograficzne w kodzie. |
| 27 | Jeśli zmienisz nazwę repozytorium: popraw adres w `<base>` w `404.html`, w `sitemap.xml`, `robots.txt` i meta `og:url` / `canonical` w `index.html` | | |

---

## Założenia, które przyjąłem (sprawdź)

- Akcent kolorystyczny: pomarańcz sygnałowy `#FF4F12` (czerwień zarezerwowana dla KSK, granat dla Basko). Uzasadnienie w `docs/kierunek-wizualny.md`.
- Prototypy rezerwacji (Livingroom, KSK DE) są oznaczone „Concept prototype built for this portfolio”. Ceny KSK, nazwy i zawartość pakietów są przykładowe i tak opisane.
- Model 3D w portfolio to kopia repo `ksk-ak47-3d` z three.js w `vendor/`. Dodałem obsługę klawiatury (S, Z, P) i widoczny focus. Zmiany są tylko w kopii w `proto/ak47/`, oryginalne repo nietknięte.
- Plany treningowe: na zrzutach zastąpiłem imię i nazwisko „Client A”, wagę i wzrost „XX / XXX”, a nagłówek z marką rozmyłem. Nazwy marki („Panthera”) nie pokazuję, bo nie ma jej w `CLAUDE.md`.
