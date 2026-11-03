# Testy portfolio

Skrypty, którymi sprawdzana była strona (Playwright + axe-core). Wyniki i poprawki: `../docs/qa-log.md`.

```bash
cd tests && npm install && npx playwright install chromium
```

W drugim terminalu, w katalogu głównym repo:

```bash
python3 -m http.server 8000
```

| Skrypt | Co sprawdza |
|---|---|
| `npm run a11y` | axe-core (jasny i ciemny motyw, z galerią stanów), linki wewnętrzne i pliki, długie zadania przy przewijaniu, tryb reduced motion |
| `npm run overflow` | czy nic nie wychodzi poza ekran na 360, 390 i 768 px |
| `npm run keyboard` | pełna rezerwacja Livingroom samą klawiaturą, focus po zmianie kroku, karuzela strzałkami |
| `npm run proto` | przeklikanie obu prototypów z błędami i zrzuty stanów do `out/` |
| `npm run screens` | zrzuty każdej sekcji (1440 jasny, 768 ciemny, 390 jasny) do `out/` |

Inny adres: `BASE=https://hubbit005.github.io/hubert-portfolio node keyboard.js`.
