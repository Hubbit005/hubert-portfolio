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
