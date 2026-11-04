# Kierunek wizualny

Punkt wyjścia: `docs/referencja-wizualna.md` (wybór Huberta). Przenosimy mechanikę i nastrój: jasne tło, siatka z krzyżykami, wielki extended sans kręcący się na walcu, jeden mocny akcent, karty w wachlarzu na łuku. Nie przenosimy żadnych grafik, nazwisk ani logo z referencji.

## Paleta

| Token | Jasny | Ciemny | Użycie |
|---|---|---|---|
| `--bg` | `#ECECE9` | `#0F0F10` | tło strony (prawie białe, lekko ciepłe szare) |
| `--surface` | `#F7F7F5` | `#18181A` | karty, panele |
| `--surface-2` | `#E2E2DE` | `#222225` | pola, ramki, tła tabel |
| `--ink` | `#0D0D0D` | `#EEEEEA` | tekst główny, napis HUBERT |
| `--ink-2` | `#55554F` | `#A3A39C` | tekst pomocniczy (kontrast ≥ 4.5:1) |
| `--line` | `rgba(13,13,13,.14)` | `rgba(238,238,234,.14)` | linie siatki, obramowania |
| `--accent` | `#FF4F12` | `#FF5A1F` | jedyny mocny kolor: prostokąt w hero, akcenty, focus |
| `--on-accent` | `#0D0D0D` | `#0D0D0D` | tekst na akcencie |

**Dlaczego pomarańcz sygnałowy.** Referencja ma czerwień. Czerwień jest kolorem KSK Pretor, a granat kolorem Basko Clean, więc akcent portfolio nie może zlać się z żadnym klientem. Pomarańcz sygnałowy jest ciepły, czytelny na jasnym i ciemnym tle, kojarzy się z narzędziami i oznaczeniami roboczymi. Nie używamy go jako koloru tekstu na jasnym tle (za niski kontrast). Na akcencie zawsze czarny tekst (kontrast ok. 7:1).

Czego unikamy: gradientów fiolet–niebieski, kremu z serifem i terakotą, emoji jako ikon, „szklanych” kart.

## Kroje

- **Nagłówki: Archivo, oś szerokości 125% (Expanded), grubość 800–900.** Extended grotesk jak na referencji. Napis HUBERT, tytuły sekcji, numery projektów. Wersaliki z lekko zaciśniętym odstępem.
- **Tekst: Inter (zmienny).** 17–18 px na desktopie, interlinia 1.6, szerokość akapitu ok. 65 znaków.
- **Etykiety: JetBrains Mono 400/500.** Małe wersaliki w rogach („HUBERT · JUNIOR UX/UI DESIGNER”, „AI-NATIVE”), numery, podpisy stanów w prototypach. Nadaje warsztatowy, „roboczy” charakter.

Wszystkie fonty lokalnie w `vendor/fonts/` z `font-display: swap`.

## Siatka

- 12 kolumn, maksymalna szerokość treści 1320 px, marginesy `clamp(16px, 4vw, 56px)`.
- Tło (od poprawek, runda 2): pionowe linie siatki co 1/6 szerokości (kolor `--line`) i duże, miękkie pomarańczowe światło na tle (przy hero i słabsze powtórzenia niżej), wolno przesuwane przy przewijaniu. Krzyżyki „+” usunięte.
- Sekcje otwiera wiersz meta: numer sekcji w mono, cienka linia, tytuł extended.
- Karty: promień 20 px (duże), 12 px (małe), miękki cień w dwóch warstwach.

## Ruch

- **Hero:** napis HUBERT na walcu, ciągły obrót wokół osi Y (ok. 14 s na pełny obrót), przyspiesza przy przewijaniu i najechaniu, płynnie wraca do bazowej prędkości. Litery z przodu pełne, z tyłu kontur (przez sprawdzenie kąta każdej litery w każdej klatce, bo `backface-visibility` nie zmienia wypełnienia na kontur). Za napisem pionowy prostokąt w akcencie, który przy wejściu „rośnie” od dołu.
- **Karuzela:** karty na łuku dużego koła, kąt między kartami stały, środkowa prosto i najwyżej. Koło samo obraca się powoli, przeciąganie z bezwładnością, najechanie zatrzymuje obrót i unosi kartę, strzałki obracają o jedną kartę. Pierścień tekstu w środku obraca się w przeciwną stronę.
- **Przewijanie:** Lenis, odsłanianie maską nagłówków, lekki parallax okładek, przypięta sekcja ścieżek klienta KSK (cztery ścieżki rysowane krok po kroku).
- **Krzywe:** `--ease-out: cubic-bezier(.16,1,.3,1)` dla wejść, `--ease-in-out: cubic-bezier(.65,0,.35,1)` dla przejść między stanami. Czasy 160 / 320 / 640 / 1000 ms.
- Animujemy tylko `transform` i `opacity`.
- **`prefers-reduced-motion`:** napis stoi frontalnie, karuzela nie obraca się sama (strzałki i przeciąganie działają bez bezwładności), brak Lenis i przypinania, treść widoczna od razu.

## Okładki kart

- Basko Clean: zrzut strony od Huberta (granat) + kadr z reklamy.
- KSK Pretor: kadr z filmu (czerń i czerwień).
- Model 3D: zrzut modelu w przeglądarce.
- Livingroom: zrzut hero (czerń i złoto).
- Psycholożka i ebook: okładki typograficzne w kodzie (brak zrzutów, bez danych klientki).
- Plany treningowe: zrzut po anonimizacji.

Różne kolory okładek dają rytm jak na referencji (ciemne, kolorowe, jasne typograficzne).
