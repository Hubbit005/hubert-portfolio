# Do uzupełnienia i potwierdzenia

Lista wszystkiego, co Hubert musi dostarczyć albo potwierdzić. Kolejność: najpierw to, bez czego nie można wysłać aplikacji **6.11.2026**.

Jak znaleźć miejsce w kodzie: w `index.html` każde miejsce ma komentarz `<!-- TODO: … -->` (wyszukaj podany tekst). Na stronie widać je jako blok „Content pending”.

---

## P0 – przed wysłaniem 6.11 (blokujące)

| # | Co | Gdzie | Uwagi |
|---|---|---|---|
| 1 | **Włącz GitHub Pages** i sprawdź, czy strona działa pod `https://hubbit005.github.io/hubert-portfolio/` | Ustawienia repo | Instrukcja w `README.md` |
| 2 | **Nazwisko** | `index.html`: `<title>`, meta `author`; `docs/cv-en.md` | W podłączonym koncie Wispr Flow widnieje „Hubert Józef Skonieczny”. Nie wpisałem tego, bo `CLAUDE.md` mówi „do uzupełnienia”. Potwierdź, a wstawię w tytuł strony i stopkę (napisy w rogach hero zostały usunięte). |
| 3 | **Link do CV (PDF)** | `index.html`: `TODO: link to the CV` | Treść CV jest w `docs/cv-en.md`. Przenieś do Google Docs, wyeksportuj PDF, wstaw link (np. Google Drive, „każdy z linkiem”). |
| 4 | **LinkedIn** (link) | `index.html`: `TODO: LinkedIn URL`; CV | Jeśli nie masz profilu, usuń wiersz. |
| 5 | **Poziom angielskiego** | `index.html` sekcja CV (`level pending`); `docs/cv-en.md`; `docs/pytania-rozmowa.md` pyt. 4 | Oferta wymaga C1. Podaj uczciwie. |
| 6a | **Przejdź listę „to confirm” z ostatniej kontroli tekstów** | `docs/recenzje/teksty-runda-4.md` (sekcja „to confirm”) | Zdania wywnioskowane z tabeli narzędzi w `CLAUDE.md`. Każde, które nie jest prawdą, popraw albo usuń. |
| 7a | **Potwierdź opisy w rozwijanych kafelkach narzędzi** (sekcja AI workflow) | `index.html`, lista `.tool-grid` | Każdy kafelek mówi, co stworzyłeś danym narzędziem. Sprawdź zwłaszcza: Claude Code przy stronach Basko i Livingroom, Leonardo AI („grafiki do marketingu klientów”), Manifold, Canva. Do tego: jakim narzędziem AI powstała odrzucona wersja 3D reklamy Basko (na stronie ogólnie „A video model”). |
| 7b | **Film KSK (35 s, niemiecki)**: czy to Twoja praca | sekcja KSK „Video branding” | Pokazuję go w sekcji Video branding obok punktu „I created promotional films and graphics”. Jeśli to nie Twoja praca, usuń wideo. |
| 8 | **Potwierdź „What I'm exploring now”** (3 tematy) | `index.html`: `TODO: Hubert to confirm these three topics` | Muszą się zgadzać z częścią 2 wideo (`docs/wideo-skrypt-en.md`). |
| 9 | **Uzupełnij `[TODO]` w scenariuszu wideo** i nagraj | `docs/wideo-skrypt-en.md` | Własne przykłady: poprawka, o którą prosiłeś AI; jak działała pierwsza wersja na telefonie; wnioski. |
| 9a | **Zdecyduj, co w repozytorium ma być publiczne** | całe repo | Portfolio linkuje do repo (Case 06 „This portfolio”). W `docs/` są Twoje przygotowania do rozmowy, scenariusz wideo i recenzje z ocenami, a w `assets/` surowe filmy (33 MB) i pliki „Zrzut ekranu…”. Rekomendacja: przenieś `docs/pytania-rozmowa.md`, `docs/wideo-skrypt-en.md` i `docs/cv-en.md` do prywatnego miejsca (np. Google Docs) przed wysłaniem linku. Recenzje i `qa-log.md` mogą zostać, bo są dowodem procesu. |
| 10 | **Zgoda na pokazanie filmu KSK i zrzutów Basko** | sekcje Basko i KSK | Zakładam, że to materiały publiczne klienta. Jeśli nie, napisz, usunę. Zrzut z nazwami klientów Basko (`Zrzut ekranu 2026-11-03 154015.png`) celowo nie jest użyty. |

## P1 – mocno wzmacnia aplikację (najlepiej przed 6.11)

| # | Co | Gdzie | Format |
|---|---|---|---|
| 9b | **Drugi przykład „Where I said no to the AI”** | `index.html`: `TODO: one more example from Hubert's own work` | AI zaproponowało → wybrałem → dlaczego. Recenzenci we wszystkich rundach pytali o Twój osąd wobec AI. |
| 10a | **Link do strony Basko Clean** (i ewentualnie profili społecznościowych) | sekcja Basko, wiersz „Status” | Link to najprostszy dowód „live website”. Bez wyników Instagrama, bo profil dopiero startuje. |
| 12 | **Zrzut rozmowy z agentem** (Botpress), opcjonalnie | `assets/screenshots/ksk-agent-1.png` | 4:5, min. 800×1000 px. Na stronie agent to jeden punkt w KSK; zrzut można dodać jako miniaturę. |
| 14 | **Czy reel na stronie to ta reklama z ludzikiem i mopem?** | sekcja Basko, wideo w ramce telefonu | `CLAUDE.md` opisuje reklamę z ludzikiem jako bohaterem i ruchem mopa. Reel w `assets/video` pokazuje typografię, proces, przed/po i logo. Jeśli to dwa różne filmy, wrzuć reklamę jako `assets/video/basko-reklama.mp4`. |
| 18 | **Intro i outro KSK** (3 s, PL i DE) | `assets/video/ksk-intro.mp4`, `ksk-outro.mp4` | 16:9, H.264, do 5 MB |
| 21 | **Daty doświadczenia** (freelance, trener) | `index.html` sekcja CV: `TODO: dates`; `docs/cv-en.md` | miesiąc/rok |

## P2 – po wysłaniu albo gdy będzie czas

| # | Co | Gdzie | Format |
|---|---|---|---|
| 22 | Zrzuty strony Agaty Patelki (desktop i telefon), gdy treści będą gotowe | `assets/screenshots/patelka-1.png` (desktop 16:10), `patelka-2.png` (telefon) | Dodam je do case 04 i na kartę w karuzeli (teraz okładka typograficzna z etykietą „In progress”). |
| 23 | Temat ebooka i zrzuty (panel boczny, lista kontrolna) | `index.html`: `TODO: ebook topic` | 2 zrzuty |
| 24 | Do czego używasz **Sendcastle** (wiersz usunięty z tabeli narzędzi do czasu potwierdzenia) | `index.html`: `TODO: Sendcastle`; `CLAUDE.md` | 1 zdanie |
| 25 | Telefon (opcjonalnie) | sekcja Contact, CV | |
| 27 | Jeśli zmienisz nazwę repozytorium: popraw adres w `<base>` w `404.html`, w `sitemap.xml`, `robots.txt` i meta `og:url` / `canonical` w `index.html` | | |

---

## Założenia, które przyjąłem (sprawdź)

- Akcent kolorystyczny: pomarańcz sygnałowy `#FF4F12` (czerwień zarezerwowana dla KSK, granat dla Basko). Uzasadnienie w `docs/kierunek-wizualny.md`.
- Model 3D w portfolio to kopia repo `ksk-ak47-3d` z three.js w `vendor/`. Dodałem obsługę klawiatury (S, Z, P) i widoczny focus. Zmiany są tylko w kopii w `proto/ak47/`, oryginalne repo nietknięte.
- Plany treningowe: zrzuty z repozytoriów `OliwiaS` i `Oliwia-Kasperska`. Imiona i nazwiska zamaskowane w DOM przed zrzutem („Client A”, „Client B”), waga jako „XX kg”. Opis: „I build web pages for clients’ personal 8-week training plans, all from one template I designed” – potwierdź, że szablon jest Twój.
- Na stronie nie ma już podziału „What AI did / What I did”, prototypów rezerwacji ani person i liczb z researchu KSK (poprawki, runda 1).
- Poprawki, runda 2: karty w karuzeli mają tylko numer, tytuł i jedną kategorię; po przeciągnięciu koło zatrzymuje się z kartą dokładnie na środku. Livingroom bez statusu i bez wzmianki o ofercie dla właściciela (także w CV: „designed and built on my own initiative”).
- Opisy trzech nowych kafelków (GSAP, HyperFrames, Playwright) rozdzieliłem z jednego wspólnego opisu animacji KSK. Sprawdź, czy podział pasuje do tego, jak naprawdę używałeś każdego narzędzia (P0 #7a).
- Logo Huberta: wybrałem wariant A „Turn” (uzasadnienie w `docs/logo/README.md`). Jeśli wolisz B albo C, podmiana to jedna ścieżka SVG w `index.html` (nawigacja, stopka), `favicon.svg` i `assets/og/og-source.html`.
- Obraz Open Graph jest teraz ciemny, z pomarańczowym światłem, jak tło strony w trybie ciemnym.
- Ruletka w hero („Spin my work”): pola i kategorie biorę z kart w karuzeli; okładki z `assets/cards/`, a dla Agaty Patelki okładka typograficzna. W trybie „reduced motion” albo bez WebGL przycisk otwiera prosty panel z losowym projektem. Płynność 60 kl./s trzeba sprawdzić na prawdziwym komputerze: w sesji Chromium działa bez GPU (programowo) i osiąga ok. 17 kl./s, tyle samo co napis 3D przed tą zmianą (ok. 21).
