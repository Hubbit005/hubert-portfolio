# PROMPT – poprawki, runda 3

Strona jest po rundzie 2. To lista poprawek Huberta z 4.11.2026, godz. 14:15. Zrób dokładnie to, co jest tutaj.

Najpierw przeczytaj `CLAUDE.md`. Zasady z poprzednich rund nadal obowiązują.

## Budżet

Bez subagentów i bez rund recenzji. Przy każdym zadaniu najwyżej dwa zrzuty Playwright (desktop 1440 i telefon 390). Edytuj istniejące pliki. Commituj po każdym zadaniu. **Higgsfield tylko w zadaniu 5, z limitem 40 kredytów.**

## Zadania

### 1. Brakujące logotypy: Leonardo AI, Manifold, Wispr Flow
Te trzy kafelki w „Tools I use” mają puste ramki.
- Sprawdź najpierw `assets/logos/`: Hubert mógł już wrzucić pliki `leonardo.*`, `manifold.*`, `wispr-flow.*`. Jeśli są, użyj ich.
- Jeśli nie ma, spróbuj pobrać oficjalne ikony: Leonardo `https://leonardo.ai/images/leonardo_favicon.png`, Wispr Flow favicon lub apple-touch-icon z `https://wisprflow.ai`, Manifold z oficjalnej strony narzędzia. Jeśli sieć blokuje, zostaw obecną ramkę i dopisz te trzy pliki do `docs/do-uzupelnienia.md` jako P0.
- Logo wyświetlaj w tym samym stylu co pozostałe (ta sama wysokość, monochromatycznie, kolor po najechaniu). Kafelek pokazuje logo automatycznie, gdy plik się pojawi, bez zmian w kodzie.

Commit.

### 2. Karuzela: nie ucina się na dole
Teraz karty na łuku są ucięte ostrą poziomą krawędzią na dole sekcji. Ma być tak:
- dolna część karuzeli **płynnie zanika** (np. `mask-image: linear-gradient(to bottom, #000 70%, transparent)` na kontenerze albo gradient w kolorze tła nałożony na dół), bez żadnej twardej linii;
- dodaj tyle wysokości lub dolnego odstępu, żeby karta na środku i jej podświetlenie od dołu były w całości widoczne nad strefą zaniku;
- strzałki i licznik „01 / 06 · BASKO CLEAN” zostają czytelne pod spodem;
- tak samo na telefonie.

Commit.

### 3. Hero: przyciski „View work” i „Contact” w jednej linii
Po świeżym załadowaniu strony „Contact” stoi niżej niż „View work”, a po najechaniu podjeżdża w górę. Hubertowi podoba się animacja przy najechaniu (ruch magnetyczny), ale nie podoba mu się to podjeżdżanie.
- Znajdź przyczynę: najpewniej animacja wejścia albo efekt `data-magnetic` zostawia na przycisku przesunięcie `y`, które znika dopiero przy najechaniu.
- Po załadowaniu oba przyciski mają stać równo w jednej linii, od pierwszej klatki.
- Ruch przy najechaniu zostaje, ale bez trwałego przesunięcia w pionie: po zjechaniu kursora przycisk płynnie wraca dokładnie na swoje miejsce.
- Sprawdź zrzutem zaraz po załadowaniu, po najechaniu i po zjechaniu.

Commit.

### 4. Przełącznik języka PL / EN
- W nawigacji, obok przełącznika jasny/ciemny, dodaj przełącznik **EN / PL** (mały, w stylu strony). Domyślnie EN.
- Cała treść strony w dwóch wersjach: nawigacja, hero (łącznie z ruletką i kartą wyniku), karuzela, case studies, AI workflow, about, CV, kontakt, teksty `aria-label` i komunikaty `aria-live`. Napis 3D „HUBERT” zostaje bez zmian.
- Teksty polskie piszesz od nowa po polsku, w tym samym stylu: krótko, konkretnie, pierwsza osoba, jak dobry dokument konsultingowy. Bez kalek z angielskiego.
- Technicznie: słownik w `js/i18n.js` (albo `data/pl.json` i `data/en.json`), atrybuty `data-i18n` w HTML, aktualizacja `<html lang>`, `<title>` i opisu meta. Wybór zapamiętany w `localStorage` (w `try/catch`). Linki `#pl` i `#en` otwierają od razu właściwy język.
- Przełączenie bez przeładowania strony i bez skoku przewijania.

Commit.

### 5. Nowe osobiste logo z Higgsfield
Hubert uważa obecne logo za słabe. Zrób nowe w Higgsfield.
- **Limit: 40 kredytów na całe zadanie.** Przed generacją sprawdź saldo i koszt każdej generacji. Wszystko zapisz w `docs/higgsfield-log.md` (co, model, koszt, suma). Nie przekraczaj 40.
- Wybierz model, który dobrze robi logo i tekst (sprawdź `models_explore` z prośbą o rekomendację do logo).
- Brief logo: osobisty znak Huberta, junior UX/UI designera pracującego z AI. Prosty, geometryczny monogram z litery „H” (może łączyć się z motywem pionowego paska z hero albo obrotu). Kolory strony: pomarańcz akcentu, czerń, złamana biel. Płaski, wektorowy, bez gradientów, bez tekstur, bez efektów 3D, czytelny w 16 px. Bez podobieństwa do logo istniejących marek. Tło jednolite.
- Wygeneruj 4 warianty w jednym przebiegu (lub w dwóch tańszych), wybierz najlepszy według czytelności w małym rozmiarze i spójności ze stroną.
- Zwektoryzuj wybrany wariant do czystego SVG (np. `potrace` lub `imagetracerjs` z npm), uprość ścieżki, ustaw kolory z tokenów strony. Sprawdź podgląd w 16, 32 i 128 px.
- Zapisz wszystkie warianty (PNG) i SVG w `docs/logo/higgsfield/`. Uzupełnij `docs/logo/README.md`: który wybrałeś i dlaczego, oraz jak podmienić na inny wariant.
- Wstaw nowe logo do nawigacji, stopki, favicon (`favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`) i obrazu Open Graph.
- Jeśli Higgsfield nie jest dostępny w tej sesji, zaprojektuj logo w SVG ręcznie według tego samego briefu, w 3 wariantach, i opisz to w `docs/logo/README.md`.

Commit.

### 6. Kontrola i oddanie
- Jeden zrzut całej strony desktop i telefon, w EN i PL. Popraw tylko to, co wyraźnie zepsute.
- Zaktualizuj `docs/do-uzupelnienia.md`.
- Commit i push na `main`.

Na koniec napisz Hubertowi po polsku, w 5–8 linijkach: co zmieniłeś, ile kredytów Higgsfield wydałeś i co zostało do zrobienia.
