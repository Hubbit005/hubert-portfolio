# Plan materiałów z Higgsfield

Limit sesji: **200 kredytów**. Saldo na starcie: 2310,36 kr. (log: `docs/higgsfield-log.md`).

## Zasady, które przyjąłem

- Najpierw prawdziwe materiały Huberta (zrzuty i dwa filmy z `assets/`). Generacje tylko tam, gdzie nie ma prawdziwego materiału **i** nie da się go uczciwie zastąpić. Nie generuję niczego, co udaje zrzut projektu klienta (np. „stronę psycholożki”). Taki obraz byłby zmyśleniem.
- Generacje to abstrakcyjne okładki i ilustracje nastroju. Na stronie każda jest podpisana jako „Illustrative cover, generated in Higgsfield” – to przy okazji uczciwy dowód pracy z narzędziem.
- Bez ludzi, bez logo, bez czytelnego tekstu.
- Wideo: nie planuję. Hero ma ruch w kodzie (napis 3D), a sekcje projektów mają prawdziwe filmy Huberta. Pętla wideo w tle konkurowałaby z napisem i obciążała stronę.
- Model: `gpt_image_2_5` (0,25 kr. za obraz, wycena sprawdzona narzędziem `get_cost`). Najpierw jedna wersja, najwyżej jedna poprawka na materiał.

## Materiały (od najważniejszego)

| # | Plik w `assets/img/` | Gdzie na stronie | Proporcje | Model | Koszt |
|---|---|---|---|---|---|
| 1 | `gen-ai-workbench.webp` | Sekcja „How I work with AI”, tło nagłówka | 16:9 | gpt_image_2_5 | 0,25 |
| 2 | `gen-cover-psychologist.webp` | Karta „Psychologist site” w karuzeli i okładka case study | 3:4 | gpt_image_2_5 | 0,25 |
| 3 | `gen-cover-ebook.webp` | Karta „Interactive ebook” w karuzeli i okładka case study | 3:4 | gpt_image_2_5 | 0,25 |

Suma planu: 0,75 kr. (z jedną poprawką na każdy materiał: maks. 1,50 kr.).

### Prompty (EN)

**1. gen-ai-workbench**
> Top-down editorial still life of a product designer's desk on a pale warm grey surface. Sheets of grid paper with hand-drawn user-flow boxes connected by arrows, a few index cards showing wireframe sketches, a graphite pencil, a small signal-orange (#FF4F12) sticky note as the only strong colour. Soft diffused daylight, gentle shadows, matte paper texture, minimal and calm, lots of negative space on the left. No people, no hands, no logos, no readable text, no screens.

**2. gen-cover-psychologist**
> Minimal abstract editorial cover. Soft rounded paper shapes in warm off-white, pale sage green and light stone grey, layered like a gentle landscape, one thin dark line drawing a calm winding path from bottom to top, a small circle at its end. Matte paper cut texture, soft studio light, calm and trustworthy mood, generous negative space. No people, no text, no logos.

**3. gen-cover-ebook**
> Minimal editorial still life on a light grey background. A small stack of thick matte paper pages, the top page shows a printed checklist of large empty square tick boxes with thin grey lines instead of words, one box ticked with a bold signal-orange (#FF4F12) mark. Large, legible, high-contrast shapes suggesting accessibility for older readers. Soft daylight, gentle shadow, top-down at a slight angle. No people, no readable text, no logos.

## Podmiana

Jeśli Hubert chce zastąpić okładkę prawdziwym zrzutem, wystarczy wrzucić plik o tej samej nazwie (WebP, 3:4, min. 900×1200 px) do `assets/img/`.
