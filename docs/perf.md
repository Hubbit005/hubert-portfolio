# Pomiar płynności (`tests/perf.mjs`)

Skrypt: Playwright + Chromium, okno 1440×900. Przewija stronę kółkiem myszy od góry do dołu w ok. 8 s (przez Lenis), potem przez 3 s przeciąga karuzelę w lewo i w prawo. Czas klatek mierzy `requestAnimationFrame`, długie zadania `PerformanceObserver` (`longtask`, > 50 ms). Każda wersja: 3 przebiegi, w tabeli mediana.

```bash
node tests/perf.mjs            # bieżąca wersja (repo)
node tests/perf.mjs /ścieżka/do/innej/wersji 3
```

WebGL w środowisku sesji jest programowy (bez GPU), a Chromium działa bez okna, więc liczby służą tylko do porównania wersji między sobą, nie do oceny płynności na prawdziwym komputerze. Najwięcej mówią kolumny „klatki > 33 ms” (widoczne szarpnięcia) i „długie zadania”.

## Przed rundą 5 (4.11.2026)

| Wersja | Faza | Średnia klatka (ms) | 95. percentyl (ms) | Klatki > 33 ms | Długie zadania |
|---|---|---|---|---|---|
| Runda 1 (`1be117c`) | przewijanie | 17.5 | 16.8 | 32 / 937 | 2 |
| Runda 1 (`1be117c`) | karuzela | 16.7 | 16.8 | 0 / 199 | 0 |
| Po rundzie 4 (`10cd32d`) | przewijanie | 18.0 | 16.8 | 42 / 977 | 20 |
| Po rundzie 4 (`10cd32d`) | karuzela | 16.8 | 16.8 | 1 / 197 | 0 |

Wniosek: po rundach 2–4 przy przewijaniu jest ok. 30% więcej szarpnięć (42 zamiast 32 klatek > 33 ms) i dziesięć razy więcej długich zadań (20 zamiast 2). Przeciąganie karuzeli w obu wersjach trzyma 60 kl./s.

## Po rundzie 5 (4.11.2026)

Wszystkie trzy wersje zmierzone ponownie, jedna po drugiej, w tych samych warunkach (3 przebiegi, mediana).

| Wersja | Faza | Średnia klatka (ms) | 95. percentyl (ms) | Klatki > 33 ms | Długie zadania |
|---|---|---|---|---|---|
| Runda 1 (`1be117c`) | przewijanie | 17.4 | 16.8 | 28 / 955 | 2 |
| Runda 1 (`1be117c`) | karuzela | 16.7 | 16.8 | 0 / 198 | 0 |
| Przed rundą 5 (`10cd32d`) | przewijanie | 18.0 | 16.8 | 40 / 965 | 16 |
| Przed rundą 5 (`10cd32d`) | karuzela | 16.9 | 16.8 | 3 / 195 | 0 |
| **Po rundzie 5** | przewijanie | **17.2** | 16.8 | **24 / 962** | **0** |
| **Po rundzie 5** | karuzela | 16.8 | 16.8 | 1 / 198 | 0 |

Po zmianach z zadań 2–6 (bez płótna w rozmiarze pasa) wynik przewijania wynosił 37 / 905 i 0 długich zadań. Pomiar z zapisem położenia wolnych klatek pokazał, że niemal wszystkie przypadają na hero, czyli na render WebGL. Dlatego płótno hero ma teraz wysokość pasa z napisem, a do pełnej wysokości hero rośnie tylko przy otwartej ruletce. Dopiero to dało wynik z tabeli.

Co zmieniło się w rundzie 5:
- tło: jedna nieruchoma warstwa `position: fixed` zamiast czterech poświat przesuwanych z JS przy każdym przewinięciu; przejście z hero do reszty strony tylko przez `opacity`;
- nawigacja i przycisk ruletki bez `backdrop-filter`;
- karuzela: zanik jako statyczna nakładka zamiast `mask-image`, poświata karty środkowej jako osobny element (tylko `opacity`), pętla śpi, gdy koło stoi albo jest poza ekranem;
- hero 3D: `pixelRatio` maks. 1.5 (telefon 1), mniej wierzchołków, prostokąt paska liczony przy zmianie rozmiaru zamiast w każdej klatce, płótno tylko na pas z napisem;
- przewijanie: aktywna sekcja z `IntersectionObserver`, pasek postępu bez pomiarów strony, `will-change` tylko tam, gdzie coś się stale animuje.

Wniosek: przy przewijaniu jest mniej szarpnięć niż w rundzie 1 (24 zamiast 28) i nie ma długich zadań (0 zamiast 2). Przeciąganie karuzeli trzyma 60 kl./s jak wcześniej (1 wolna klatka na 198 mieści się w rozrzucie pomiaru).
