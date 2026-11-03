# Referencja wizualna – kierunek wybrany przez Huberta

Źródło: pin na Pinterest „My Portfolio | Motion Graphics | Graphic Design” (autor: DVS0204), https://pl.pinterest.com/pin/677088125275224567/

To jest wzór układu i ruchu. Nie kopiuj cudzego projektu jeden do jednego: żadnych nazwisk, logo ani grafik z referencji. Przenieś mechanikę i nastrój, a treść, karty i detale zrób z projektów Huberta.

## Co jest na referencji

**Górna część (hero)**
- Jasnoszare, prawie białe tło. Delikatne krzyżyki „+” rozsiane po siatce, małe strzałki ◀ ▶ przy krawędziach.
- Mały napis w lewym górnym rogu: „WELCOME TO MY”. W prawym górnym rogu mała ikona-znak.
- Na środku wielkie słowo „PORTFOLIO” w szerokim, grubym bezszeryfowym kroju (typ extended), czarne.
- **Napis kręci się w 3D wokół pionowej osi**, jakby był nawinięty na walec: litery z przodu są pełne i czarne, litery z tyłu walca widać jako cienki kontur, odbity lustrzanie. Obrót jest ciągły i płynny.
- Za napisem pionowy czerwony prostokąt (jedyny mocny kolor), napis przechodzi przed nim.
- Pod napisem dwa małe podpisy przy krawędziach: imię i nazwisko po lewej, rola („MULTIMEDIA DESIGNER”) po prawej.

**Dolna część (karuzela)**
- Karty projektów w pionowym formacie z zaokrąglonymi rogami, ułożone w **wachlarz na łuku dużego koła**. Każda karta jest obrócona zgodnie z łukiem, środkowa stoi prosto i jest najwyżej.
- Karty mają różne okładki: ciemne z grafiką, czerwona z logo, zdjęcie czarno-białe, jasna z typografią. Miękkie cienie, karty lekko na siebie nachodzą.
- **Całe koło z kartami powoli się obraca**, karty przesuwają się po łuku jak na diabelskim młynie widzianym od góry.
- W środku koła cienki pierścień z tekstem dookoła („• PORTFOLIO •”) i mały podpis ze strzałką („▲ ME”).

## Jak to przenieść na stronę Huberta

1. **Hero:** obracający się napis 3D. Proponowane słowo „PORTFOLIO” albo imię „HUBERT”. Zrób go w CSS 3D (litery rozłożone na obwodzie walca przez `rotateY` + `translateZ`, tylna połowa jako kontur przez `-webkit-text-stroke` i `backface-visibility`) albo w three.js, jeśli CSS nie da płynności. Ciągły obrót, przy najechaniu lub przewijaniu może przyspieszać. Kolory: jasne tło, czerń, jeden mocny akcent jako pionowy prostokąt za napisem. Akcent dobierz sam, nie musi być czerwony.
2. **Podpisy w rogach:** „WELCOME TO MY” → np. „HUBERT · JUNIOR UX/UI DESIGNER”, „AI-NATIVE”, krzyżyki siatki jako detal.
3. **Karuzela na łuku:** karty = projekty Huberta (Basko Clean, KSK Pretor, model 3D, Livingroom, psycholożka, plany treningowe, ebook). Koło obraca się powoli i samo. Użytkownik może je przeciągnąć myszą lub palcem. Najechanie zatrzymuje obrót i podnosi kartę. Kliknięcie przewija do case study albo otwiera je w panelu. Dostępne klawiaturą (strzałki), z widocznym focusem.
4. **Pierścień z tekstem** w środku koła: np. „• SELECTED WORK • AI-NATIVE DESIGN •”, obracający się w przeciwną stronę.
5. **Okładki kart:** prawdziwe zrzuty z `assets/`, a gdzie ich brak – okładki typograficzne w kodzie albo grafiki z Higgsfield (w limicie 200 kredytów).
6. **Reduced motion:** napis stoi w czytelnej pozycji frontalnej, koło nie obraca się samo, karty da się przewijać strzałkami.
7. **Telefon:** napis 3D mniejszy, ale nadal się kręci. Karuzela jako łuk z mniejszym promieniem albo poziomy pasek przewijany palcem, z tą samą logiką kart.

Reszta strony (case studies, AI, about, kontakt) trzyma ten sam język: jasne tło, siatka z krzyżykami, extended sans w nagłówkach, jeden akcent, karty z zaokrąglonymi rogami i miękkim cieniem.
