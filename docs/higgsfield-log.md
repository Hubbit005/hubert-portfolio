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
