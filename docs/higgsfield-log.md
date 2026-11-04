# Log Higgsfield

Limit sesji: 200 kredytów. Plan: `docs/higgsfield-plan.md`.

- **Saldo na starcie sesji (2026-11-03):** 2310,36 kr. (plan: ultra)
- Wycena przed generacją (`get_cost`): `gpt_image_2_5` 3:4 = 0,25 kr.; `recraft_v4_1` 1k = 1,25 kr.; `z_image` = 0,15 kr. Wybrany `gpt_image_2_5`.

| # | Co | Model | Proporcje | Koszt | Suma narastająco | Wynik |
|---|---|---|---|---|---|---|
| 1 | Okładka sekcji AI `gen-ai-workbench` | gpt_image_2_5 (low, 1k) | 16:9, 1344×752 | 0,25 | 0,25 | job `2bc7705b-ce18-4a27-99f7-4a7c23184b30` |
| 2 | Okładka `gen-cover-psychologist` | gpt_image_2_5 (low, 1k) | 3:4, 880×1168 | 0,25 | 0,50 | job `32e1c6c8-9d87-4005-a2ed-ac7ea8619686` |
| 3 | Okładka `gen-cover-ebook` | gpt_image_2_5 (low, 1k) | 3:4, 880×1168 | 0,25 | 0,75 | job `988b1198-99c9-4112-98d6-a1ab4a08120e` |

- **Saldo po generacjach:** 2309,61 kr. (różnica 0,75 kr. zgadza się z wyceną).
- **Suma wydana w sesji: 0,75 kr. z limitu 200.**

## Dlaczego tylko trzy generacje

Pliki wygenerowały się poprawnie, ale serwer z wynikami (`d8j0ntlcm91z4.cloudfront.net`) jest zablokowany przez politykę sieci tej sesji (proxy odpowiada 403). Nie mogłem pobrać obrazów do repo, więc dalsze generowanie nie miało sensu i zakończyłem pracę z Higgsfield.

Strona jest na to przygotowana: w miejscach okładek są kompozycje w kodzie (CSS/SVG). Wystarczy, że Hubert:

1. otworzy w Higgsfield (zakładka z historią generacji) trzy obrazy o podanych `job` wyżej,
2. pobierze je i zapisze jako WebP pod nazwami z `docs/higgsfield-plan.md` w `assets/img/`,
3. odświeży stronę. Obraz sam przykryje kompozycję w kodzie (jeśli pliku nie ma, zostaje wersja w kodzie).

Przed użyciem obejrzyj je. Jeśli któryś wygląda „AI-owo” albo nie pasuje do strony, zostaw kompozycję w kodzie.

## Poprawki, runda 3 (4.11.2026): nowe logo, limit 40 kr.

- `balance` i `models_explore` (rekomendacja modelu do logo): limit czasu 60 s, cztery próby w odstępie kilku minut. Żadna generacja nie została wysłana.
- Serwer z wynikami (`d8j0ntlcm91z4.cloudfront.net`) nadal zablokowany przez sieć sesji, więc nawet udanych obrazów nie dałoby się pobrać i zwektoryzować.
- Logo zaprojektowane ręcznie w SVG (3 warianty), opis w `docs/logo/README.md`.
- **Wydane w rundzie 3: 0 kr. z limitu 40.**

## Logo Huberta (4.11.2026, czat z Claude): Recraft V4.1, tryb wektorowy

- 4 warianty jednym zleceniem, 1:1, 1k, paleta #FF4F12 / #0D0D0D / #ECECE9. **Koszt: 10 kr.**
- Zadania: `82d919f1-0783-4c94-8ee1-0c80acb8c23f`, `3785cd2c-a2cc-4f99-ad39-67bf8548c69e`, `5ec708eb-4b06-41b3-a304-76c971b6e6fd`, `08efb43a-2479-4b21-b978-ee4f7d2cae4f`.
- Wyniki to pliki SVG. Serwer z wynikami jest zablokowany dla sesji, więc Hubert pobiera wybrany plik z Higgsfield i wrzuca go do `assets/logos/hubert/` (nazwa wybranego pliku w `WYBOR.txt`).
