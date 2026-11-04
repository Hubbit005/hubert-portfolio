# hubert-portfolio

Portfolio Huberta na stanowisko **Junior UX/UI Designer (AI-Native)** w Flying Bisons. Jedna strona po angielsku, statyczna (HTML, CSS, JS), bez zależności od CDN.

Adres po włączeniu GitHub Pages: **https://hubbit005.github.io/hubert-portfolio/**

## Co jest w repozytorium

| Ścieżka | Co to jest |
|---|---|
| `index.html` | Cała strona: hero z obracającym się napisem 3D, karuzela projektów na łuku, 6 case studies, sekcja o pracy z AI, About, CV, kontakt |
| `css/tokens.css` | Tokeny: kolory (jasny i ciemny motyw), typografia, odstępy, promienie, cienie, czasy animacji |
| `css/main.css` | Style strony |
| `js/hero.js` | Napis HUBERT na walcu (CSS 3D) |
| `js/carousel.js` | Karuzela kart na łuku: obrót, przeciąganie z bezwładnością, strzałki |
| `js/motion.js` | Ruch przy przewijaniu (GSAP ScrollTrigger + Lenis) |
| `tests/` | Skrypty Playwright i axe-core, którymi sprawdzana była strona (opis w `tests/README.md`) |
| `proto/ak47/` | Model 3D AK-47 (kopia `Hubbit005/ksk-ak47-3d`, lokalny three.js, obsługa klawiatury) |
| `vendor/` | Biblioteki i fonty z npm: GSAP, ScrollTrigger, Lenis, three.js 0.160, Archivo, Inter, JetBrains Mono |
| `assets/img/` | Zoptymalizowane obrazy (WebP + JPEG w kilku szerokościach) |
| `assets/screenshots/`, `assets/video/` | Materiały od Huberta (oryginały) i zrzuty z Playwright (`raw/`); `video/web/` to lekkie wersje filmów |
| `assets/og/` | Obraz Open Graph 1200×630 i jego źródło HTML |
| `404.html`, `sitemap.xml`, `robots.txt`, `favicon*` | Pliki techniczne strony |
| `docs/` | Strategia, kierunek wizualny, plan i log Higgsfield, recenzje, scenariusz wideo, pytania na rozmowę, CV, lista do uzupełnienia |

## Najważniejsze dokumenty dla Huberta

1. `docs/do-uzupelnienia.md` – co musisz dostarczyć lub potwierdzić, w kolejności ważności.
2. `docs/wideo-skrypt-en.md` – scenariusz wideo (EN z tłumaczeniem PL).
3. `docs/pytania-rozmowa.md` – 15 pytań na rozmowę z odpowiedziami.
4. `docs/cv-en.md` – treść CV do przeniesienia do Google Docs.
5. `docs/recenzje/` – recenzje portfolio z kolejnych rund.

## Jak otworzyć lokalnie

Strona używa modułów ES, więc trzeba ją otworzyć przez serwer (nie przez `file://`):

```bash
cd hubert-portfolio
```

```bash
python3 -m http.server 8000
```

Potem w przeglądarce: http://localhost:8000

## Jak włączyć GitHub Pages

1. Na GitHubie otwórz repozytorium `Hubbit005/hubert-portfolio`.
2. **Settings → Pages**.
3. W **Build and deployment → Source** wybierz **Deploy from a branch**.
4. Gałąź **`main`**, folder **`/ (root)`** → **Save**.
5. Po 1–2 minutach strona będzie pod adresem **https://hubbit005.github.io/hubert-portfolio/**.

Plik `.nojekyll` wyłącza przetwarzanie przez Jekyll, więc wszystkie pliki są serwowane bez zmian.

Jeśli zmienisz nazwę repozytorium, popraw adres w: `404.html` (`<base href>`), `sitemap.xml`, `robots.txt`, oraz `canonical` i `og:url` / `og:image` w `index.html`.

## Wersja polska (przełącznik EN / PL)

- Angielski tekst jest w `index.html`. Polski jest w słowniku `js/i18n.js` (obiekt `PL`), przy każdym wpisie w komentarzu stoi oryginał angielski.
- Element do tłumaczenia ma atrybut `data-i18n="klucz"` (cała treść) albo `data-i18n-attr="alt:klucz"` (atrybuty `alt`, `aria-label`). Teksty pisane przez skrypty (ruletka, komunikaty, etykieta motywu) są w obiekcie `STR` w tym samym pliku.
- Zmiana tekstu angielskiego: popraw go w `index.html`, a polski odpowiednik w `js/i18n.js` pod tym samym kluczem.
- Linki `…/#pl` i `…/#en` otwierają od razu wybrany język. Wybór zapamiętuje przeglądarka.

## Jak podmienić materiały

- **Brakujący zrzut lub film:** każde miejsce ma ramkę z podpisem, jaki plik ma tam trafić (nazwa i proporcje). Lista: `docs/do-uzupelnienia.md`.
- **Treść „Content pending”:** wyszukaj w `index.html` komentarz `TODO` z opisem i podmień blok `.pending` na zwykły akapit.
- **Nowe obrazy:** najlepiej WebP + JPEG w szerokościach 480/960/1600 (jak w `assets/img/`).

## Dostępność i jakość

Szczegóły i historia poprawek: `docs/qa-log.md`, recenzje: `docs/recenzje/`.


- axe-core: 0 błędów krytycznych i poważnych (motyw jasny i ciemny, także galeria stanów).
- Karuzela, kafelki narzędzi i model 3D działają samą klawiaturą (kafelki z `aria-expanded`).
- `prefers-reduced-motion`: napis stoi czytelnie, karuzela nie obraca się sama, brak płynnego przewijania i przypinania sekcji.
- Treść jest widoczna bez JavaScriptu.
