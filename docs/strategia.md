# Strategia portfolio

## Kto ogląda stronę

1. **Rekruter / HR z Flying Bisons.** Ma przed sobą kilkadziesiąt zgłoszeń. Otwiera stronę z linku w CV, przewija przez 30–60 sekund i decyduje, czy obejrzeć wideo. Szuka: czy kandydat zrobił coś prawdziwego, czy umie o tym mówić, czy pasuje do „AI-native”.
2. **Projektant (UX/UI lub product designer) z zespołu.** Ogląda stronę dłużej, przed rozmową 45 min. Ocenia stronę jak projekt: hierarchię, odstępy, typografię, ruch, dostępność. Klika w prototypy, sprawdza stany błędów i przypadki brzegowe, zagląda do kodu.

Obaj czytają po angielsku i oglądają głównie na desktopie. Część otworzy link na telefonie z maila, więc mobile musi działać tak samo dobrze.

## Co ma zostać w głowie po 30 sekundach

> Hubert zamienia problem klienta w działające, przeklikiwalne rozwiązanie. AI to jego warsztat, a decyzje zostają po jego stronie.

Konkretnie rekruter ma zapamiętać trzy rzeczy:

1. **Prawdziwi klienci, prawdziwe rzeczy w sieci.** Basko Clean (strona + reklama motion graphic + social media), KSK Pretor (research rynku niemieckiego, model 3D, film), Livingroom (demo strony z inicjatywy własnej).
2. **Myśli ścieżkami i stanami.** Na stronie są trzy prototypy z przełącznikiem „Show all states”: brak terminów, błędy walidacji, grupa powyżej limitu, błąd sieci, sukces.
3. **Umie powiedzieć, co zrobiło AI, a co on.** Każde case study ma tabelę „What AI did / What I did”.

## Główny przekaz i dopasowanie do „Invisible 90%”

Flying Bisons pisze, że warsztat projektowy to mała część sukcesu, a reszta to praca z ludźmi i interesariuszami. Hubert ma tę resztę z innego miejsca: prowadzi social media klienta, nagrywa materiał na realizacjach, sam poszedł do restauracji i zaproponował nową stronę, był trenerem personalnym. Strona pokazuje to bez przesady: w case studies jako „ograniczenia i decyzje” (zgody na logo, mały budżet, klient sam zarządza terminami), a w sekcji About jako doświadczenie pracy z ludźmi.

## Kolejność projektów i dlaczego

| # | Projekt | Dlaczego w tym miejscu |
|---|---|---|
| 1 | **Basko Clean** | Najpełniejszy projekt: strona, reklama wideo, social media, identyfikacja na profile. Trwała współpraca z klientem. Mamy zrzuty i plik MP4 reklamy. |
| 2 | **KSK Pretor** | Najmocniejszy dowód myślenia UX: persony, 4 ścieżki klienta, 7 miejsc odpadania, 8 dźwigni. Do tego model 3D (stany i interakcje) i film. Prototyp niemieckiej rezerwacji grupowej pokazuje przejście od researchu do interfejsu. |
| 3 | **Livingroom** | Inicjatywa i myślenie od problemu klienta. Brakujący element (rezerwacja) budujemy jako prototyp ze wszystkimi stanami. |
| 4 | **Strona dla psycholożki** | Pełna ścieżka zakupu przeklikiwalna przed podłączeniem płatności. Bez nazwiska klientki. |
| 5 | **Plany treningowe** | System: wiele stron z jednego szablonu. Zanonimizowane. |
| 6 | **Interaktywny ebook** | Krótko: projektowanie dla odbiorcy 50+. |

Model 3D AK-47 jest częścią case study KSK Pretor, ale w karuzeli dostaje osobną kartę, bo to najbardziej „klikalny” element portfolio.

## Struktura strony (one-pager)

1. Hero z obracającym się napisem 3D „HUBERT” i jednym zdaniem.
2. Selected work: karuzela kart na łuku.
3. Case studies: wspólny szkielet (problem → rola i ograniczenia → proces → What AI did / What I did → stany i przypadki brzegowe → wynik i dalsze kroki). Szczegóły w akordeonach, żeby strona nie była ścianą tekstu.
4. How I work with AI: workflow, tabela narzędzi, gdzie decyduje człowiek, „What I'm exploring now”.
5. About.
6. CV (skrót).
7. Contact.

## Decyzje techniczne

- **Bez frameworka.** Statyczny HTML, CSS i JS (moduły ES). Powód: GitHub Pages z gałęzi `main` bez kroku budowania, łatwy podgląd kodu przez rekrutera, pełna kontrola nad wydajnością animacji.
- **Biblioteki lokalnie w `vendor/`:** GSAP + ScrollTrigger (przejścia przy przewijaniu), Lenis (płynne przewijanie), three.js 0.160 (model 3D). Fonty z `@fontsource` w `vendor/fonts/`.
- **Napis 3D w CSS 3D** (litery na obwodzie walca), nie w WebGL. Ostry tekst, mały koszt, działa bez GPU. Obrót sterowany z `requestAnimationFrame`, animowane tylko `transform`.
- **Karuzela w czystym JS** z fizyką bezwładności, bez dodatkowej biblioteki.
- **Treść widoczna bez JS.** Animacje wejścia dodaje JS przez klasę na `<html>`, więc bez JS nic nie zostaje na `opacity: 0`.
- **Model 3D ładuje się dopiero po kliknięciu** („Load the 3D model”), żeby nie obciążać strony 670 kB three.js na starcie.
