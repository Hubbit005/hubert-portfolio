# Osobiste logo Huberta

## Runda 3 (4.11.2026): nowe logo, wybrany wariant A · Cut

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
