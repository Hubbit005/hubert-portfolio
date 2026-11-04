# Osobiste logo Huberta

## Runda 4 (4.11.2026): logo z Higgsfield

**Źródło.** Hubert wygenerował 4 warianty w Higgsfield (Recraft V4.1, tryb wektorowy, 10 kr., wpis w `docs/higgsfield-log.md`) i wrzucił wybrany plik do `assets/logos/hubert/`: `hf_20261104_140708_08efb43a-2479-4b21-b978-ee4f7d2cae4f.svg`. W folderze był tylko ten jeden wariant i nie było `WYBOR.txt`, więc użyłem go i zapisałem jego nazwę w `assets/logos/hubert/WYBOR.txt`. W tej sesji Higgsfield nie był używany (0 kr.).

**Znak.** Jasne H na czarnym kwadracie. Poprzeczka biegnie ukośnie w górę, w lewą nogę wpisany jest pomarańczowy pionowy pas, ten sam motyw co pas w hero.

**Co zrobiłem z plikiem.** Plik był już wektorem (SVG, 4 ścieżki), więc nie trzeba było go wektoryzować z PNG. Ścieżki miały jednak drobne nierówności po automatycznym śledzeniu (krzywe w miejscach prostych linii), a litera zajmowała tylko ok. 37% kadru, przez co w 16 px była nieczytelna. Przerysowałem ją na siatce 64×64 z zachowaniem proporcji i nachylenia poprzeczki (ok. 26°): trzy prostokąty i jeden równoległobok, razem 3 ścieżki zamiast 4 i bez krzywych. Litera ma teraz 40 jednostek wysokości, tak jak poprzednie logo. Kolory z tokenów strony: `--ink` `#0d0d0d` (tło), `--bg` `#ecece9` (litera), `--accent` `#ff4f12` (pas). Zaokrąglone rogi (rx 14) jak w poprzednich wersjach.

Pliki w `docs/logo/runda-4/`:
- `logo-hubert-r4.svg`: logo użyte na stronie,
- `zrodlo-higgsfield.svg`: oryginał z Higgsfield do porównania,
- `preview.png`: oryginał i wersja oczyszczona w 128 px oraz wersja oczyszczona w 32 i 16 px, na jasnym i ciemnym tle.

**Czytelność.** W 128 i 32 px widać wszystkie trzy elementy. W 16 px nogi mają 2,5 px, pas 1,5 px, a ukośna poprzeczka nadal jest widoczna, więc znak czyta się jako H. Oryginał w 16 px zamieniał się w plamkę o szerokości ok. 6 px.

**Gdzie jest użyte:** nawigacja i stopka (`index.html`), `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` (180×180, pełne tło bez zaokrągleń, iOS sam je dodaje), `assets/og/og-image.png` (źródło `assets/og/og-source.html`) i środek koła ruletki (`js/hero.js`: czarne koło z pomarańczowym obrysem, w nim litera i pas).

## Runda 3 (4.11.2026, archiwum): wariant A · Cut

Plan zakładał generację w Higgsfield (limit 40 kredytów), ale w tej sesji Higgsfield nie odpowiadał (4 próby, każda zakończona limitem czasu 60 s, także zwykłe sprawdzenie salda), a serwer z wynikami generacji jest zablokowany przez sieć sesji. Zgodnie z planem awaryjnym zaprojektowałem logo ręcznie w SVG według tego samego briefu: prosty, geometryczny monogram H, kolory strony (pomarańcz `#ff4f12`, czerń `#0d0d0d`, złamana biel `#ecece9`), płaski, bez gradientów, czytelny w 16 px. **Wydane kredyty Higgsfield: 0.**

Pliki w `docs/logo/runda-3/`: każdy wariant jako SVG (64×64) i PNG (512×512), do tego `preview.png` (128, 32 i 16 px na jasnym i ciemnym tle).

| Plik | Pomysł |
|---|---|
| `logo-a-cut.svg` | **A · Cut (wybrane).** Pomarańczowy kwadrat przecięty z góry i z dołu pionowym pasem, tym samym motywem co pas w hero. Z kwadratu zostaje H. Czarne tło z zaokrąglonymi rogami. |
| `logo-b-pillars.svg` | B · Pillars. Dwa czarne filary i pomarańczowa poprzeczka na jasnym tle. |
| `logo-c-shift.svg` | C · Shift. Czarne H na pomarańczowym kole, prawa noga przesunięta w dół: litera w ruchu, jak obracający się walec w hero. |

**Dlaczego A.** Ma najmocniejszą sylwetkę: dwa szerokie filary i gruba poprzeczka, bez cienkich detali, więc w 16 px w karcie przeglądarki nadal jest to wyraźne H. Pomarańcz na czerni ma najwyższy kontrast ze wszystkich wariantów i działa na jasnym i ciemnym motywie strony. Pomysł jest związany ze stroną: wycięcia to pionowy pas z hero. B na jasnym tle traci obrys kwadratu i w 16 px poprzeczka znika. C jest najbardziej charakterystyczny, ale w 16 px przesunięcie nóg wygląda jak błąd renderu.

**Jak podmienić na inny wariant.** Logo jest w pięciu miejscach. Skopiuj `<rect>` i `<path>` z wybranego pliku SVG do:
1. `index.html`: `.nav__mark` (nawigacja) i `.footer__mark` (stopka),
2. `favicon.svg`,
3. `assets/og/og-source.html` (potem wyrenderuj `assets/og/og-image.png` w 1200×630),
4. `js/hero.js`: ścieżka `Path2D` w środku koła ruletki (sama ścieżka litery),
5. `favicon-32.png` i `apple-touch-icon.png` (180×180, pełne tło, iOS sam zaokrągla rogi): wyrenderuj z SVG.

## Runda 2 (archiwum)

Trzy warianty (SVG, 64×64) i podgląd `preview.png` (duży rozmiar, 16/32/48 px, na jasnym i ciemnym tle, w nawigacji).

| Plik | Pomysł |
|---|---|
| `logo-a-turn.svg` | **A · Turn (wybrane).** Litera H w pomarańczowym kwadracie, prawa noga węższa i krótsza, poprzeczka zbiega się w perspektywie: H w trakcie obrotu. |
| `logo-b-bar.svg` | B · Bar. Jasne H na czarnym kwadracie, przecięte pomarańczowym pionowym pasem z hero, poprzeczka w pasie odwraca kolor. |
| `logo-c-hb.svg` | C · Hb. Monogram od nicku Hubibi: H, którego prawa noga przechodzi w małe „b”. |

**Dlaczego wtedy A.** Zachowuje to, co już działa w nawigacji (pomarańczowy kwadrat z ciemnym H), więc nie zmienia rozpoznawalności strony, a dodaje jedną własną myśl: H, które się obraca, tak jak walec z napisem HUBERT w hero. To trzy proste kształty bez cienkich detali, dlatego czyta się w 16 px w zakładce przeglądarki i nie rozpada się w dużym rozmiarze. Wariant B najmocniej cytuje hero, ale w 16 px pas i odwrócona poprzeczka zlewają się w plamę. Wariant C jest najbardziej osobisty, tylko że w małym rozmiarze „b” zamienia się w kropkę i znak przestaje być jednoznaczny.

Gdzie było użyte: nawigacja i stopka (`index.html`, SVG w kodzie), `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` (180×180, pełne tło, bo iOS sam zaokrągla rogi), `assets/og/og-image.png` (źródło: `assets/og/og-source.html`).
