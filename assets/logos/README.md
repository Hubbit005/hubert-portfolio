# Logotypy narzędzi (sekcja AI workflow)

Kolorowe wersje logo, które pokazują się po najechaniu na kafelek. Wersja monochromatyczna jest wpisana w `index.html` jako SVG w kolorze tekstu.

| Plik | Źródło |
|---|---|
| `claude.svg`, `gemini.svg`, `perplexity.svg`, `higgsfield.svg`, `playwright.svg` | npm `@iconify-json/logos` |
| `canva.svg` | npm `@iconify-json/devicon` |
| `botpress.svg` | favicon z oficjalnego repo dokumentacji `botpress/docs` |
| `hyperframes.svg` | favicon z oficjalnego repo `heygen-com/hyperframes` (`docs/favicon.svg`) |
| `leonardo.svg` | oficjalna ikona aplikacji Leonardo.Ai (App Store), zwektoryzowana (potrace) |
| `wispr-flow.svg` | oficjalna ikona aplikacji Wispr Flow (App Store), przerysowana w SVG (5 słupków, wymiary z ikony) |
| `manifold.svg` | oficjalny favicon Manifold (manifoldmcp.com), przerysowany w SVG (siatka 5×5 kropek z falą) |

Wersje mono: `simple-icons` (Claude, Gemini, Perplexity, Canva, GSAP, three.js), `@lobehub/icons-static-svg` (OpenAI), pozostałe z tych samych plików co wersje kolorowe.

## Jak powstały Leonardo, Wispr Flow i Manifold

Sieć sesji blokuje pobieranie plików z tych stron, więc ikony odtworzyłem z zrzutów oficjalnych stron (App Store i manifoldmcp.com): Leonardo przez wektoryzację, Wispr Flow i Manifold przez przerysowanie prostych kształtów. Jeśli masz oryginalne pliki, podmień je pod tymi samymi nazwami.

Wersje mono są wpisane w `index.html` (kwadrat w kolorze tekstu, znak wycięty w kolorze tła), tak jak przy Botpress i Higgsfield.

## Nowe logo – wrzuć plik tutaj

Kafelek z atrybutem `data-logo-file="nazwa"` sam podchwyci `assets/logos/nazwa.svg` (albo `.png`), bez zmian w JS.
