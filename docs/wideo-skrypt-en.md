# Scenariusz wideo do aplikacji (EN, 8–9 min) z tłumaczeniem PL

**Wymóg z oferty:** ok. 5 minut o projekcie z AI (co zbudowałeś, jakimi narzędziami, co zrobiło AI, a co Ty, czego się nauczyłeś) + 3–5 minut o tym, co teraz badasz i dlaczego. Bez poufnych materiałów klientów.

## Którą historię wybrać na część 1

**Rekomendacja: interaktywny model 3D AK-47 dla KSK Pretor.**

- To prawdziwy projekt dla klienta, działa publicznie (`hubbit005.github.io/ksk-ak47-3d`), więc rekruter może go sam otworzyć.
- Najlepiej pokazuje to, czego szuka Flying Bisons: stany i interakcje (ZABEZPIECZONY nie strzela, rozkładanie krok po kroku, tryb zdjęcia z dwoma formatami, niższa jakość na telefonie).
- Podział pracy AI / Ty jest czytelny: Claude Code pisze kod three.js, Ty decydujesz, jak model ma się zachowywać.
- Brak danych klientów, brak wrażliwych materiałów.

Wersja zapasowa: prototyp rezerwacji Livingroom z portfolio (lista stanów → Claude Code → test w Playwright). Wtedy część 1 i 2 mocno się pokrywają, więc lepiej zostawić go na część 2.

**Zanim nagrasz:** uzupełnij miejsca oznaczone `[TODO]`. To Twoje doświadczenia, których nie znam. Nie czytaj z kartki słowo w słowo. Ten tekst to szkielet, mów własnymi słowami.

**Ustawienia nagrania:** nagranie ekranu 1920×1080, kamera w rogu (opcjonalnie), mikrofon blisko. Otwarte karty: model 3D na żywo, kod w edytorze, portfolio (sekcja KSK i „How I work with AI”).

---

## Część 1 – projekt z AI (0:00–5:00)

### 0:00–0:30 · Kim jestem
**Na ekranie:** hero portfolio z obracającym się napisem HUBERT, potem przewinięcie do karuzeli.

> Hi, I'm Hubert. I'm a freelance web designer from near Gorzów in Poland. I build websites, prototypes and video for small companies. In this video I'll show one project I built with AI, and then what I'm exploring now.

**PL:** Cześć, jestem Hubert. Jestem freelancerem, projektuję strony internetowe, mieszkam niedaleko Gorzowa. Buduję strony, prototypy i wideo dla małych firm. W tym filmie pokażę jeden projekt zbudowany z AI, a potem to, co teraz badam.

### 0:30–1:15 · Problem klienta
**Na ekranie:** sekcja KSK Pretor w portfolio, liczby z researchu (18 rozdziałów, 5 person, 4 ścieżki).

> The client is KSK Pretor, a shooting range near Gorzów. They want more guests, also from Germany. I wrote a market entry plan for them, with personas and customer journeys. One thing was clear: people need to see and understand the weapons before they book. So I built an interactive 3D model they can use on the website and on Instagram.

**PL:** Klient to KSK Pretor, strzelnica koło Gorzowa. Chcą więcej gości, także z Niemiec. Napisałem dla nich plan wejścia na rynek, z personami i ścieżkami klienta. Jedno było jasne: ludzie muszą zobaczyć i zrozumieć broń, zanim zarezerwują. Dlatego zbudowałem interaktywny model 3D, którego mogą użyć na stronie i na Instagramie.

> `[TODO: sprawdź, czy to zdanie o „zobaczeniu broni przed rezerwacją” zgadza się z tym, dlaczego naprawdę powstał model. Jeśli powód był inny, powiedz prawdziwy.]`

### 1:15–2:30 · Co zbudowałem (demo)
**Na ekranie:** model na żywo. Obróć go. Najedź na magazynek (podświetlenie + podpis). Kliknij spust w trybie ZABEZPIECZONY (nic się nie dzieje, komunikat). Przełącz na ogień pojedynczy, kliknij spust (błysk). Kliknij ROZŁÓŻ, przejdź krokami DALEJ. Otwórz TRYB ZDJĘCIA, pokaż format post i relacja.

> This is the model. It runs in the browser on a computer and on a phone. You can rotate it. When you hover a part, it lights up in red and shows its name. The trigger has states. In SAFE mode it does not fire. I switch to single fire, and now it fires. You can take it apart step by step: magazine, cover, spring, carrier, gas tube. And there is a photo mode. It exports a PNG in the two Instagram formats, post and story, with the club's name.

**PL:** To jest model. Działa w przeglądarce na komputerze i na telefonie. Można go obracać. Kiedy najedziesz na część, podświetla się na czerwono i pokazuje nazwę. Spust ma stany. W trybie ZABEZPIECZONY nie strzela. Przełączam na ogień pojedynczy i teraz strzela. Można go rozłożyć krok po kroku: magazynek, pokrywa, sprężyna, suwadło, rura gazowa. Jest też tryb zdjęcia. Eksportuje PNG w dwóch formatach Instagrama, post i relacja, z nazwą klubu.

### 2:30–3:30 · Narzędzia i podział pracy
**Na ekranie:** kod w edytorze (`model.js`, `disassembly.js`), potem tabela „What AI did / What I did” w portfolio.

> I built it with Claude Code and three.js. There are no ready-made 3D files. Every part is made in code from simple shapes. Claude Code wrote most of that code. My job was to decide how the model behaves. I wrote the list of states and interactions first: what the selector does, when the trigger is blocked, what the steps of disassembly are, what the photo export needs. Then I checked every state myself and asked for changes.

**PL:** Zbudowałem go w Claude Code i three.js. Nie ma tu gotowych plików 3D. Każda część jest zrobiona w kodzie z prostych brył. Większość tego kodu napisał Claude Code. Moją pracą było zdecydować, jak model się zachowuje. Najpierw spisałem listę stanów i interakcji: co robi przełącznik, kiedy spust jest zablokowany, jakie są kroki rozkładania, czego potrzebuje eksport zdjęcia. Potem sam sprawdziłem każdy stan i prosiłem o poprawki.

> `[TODO: jeden konkretny przykład poprawki, o którą prosiłeś, np. coś, co AI zrobiło źle albo inaczej, niż chciałeś.]`

### 3:30–4:15 · Telefon i wydajność
**Na ekranie:** model na telefonie (albo DevTools w trybie mobilnym).

> On phones the first version was `[TODO: np. wolna / gorąca / zacinała się]`. So the model now lowers the render resolution and shadow quality on phones and turns off the floor reflection. It looks a bit simpler, but it stays smooth.

**PL:** Na telefonach pierwsza wersja była `[TODO]`. Dlatego model teraz na telefonach obniża rozdzielczość renderu i jakość cieni oraz wyłącza odbicie w podłodze. Wygląda trochę prościej, ale działa płynnie.

### 4:15–5:00 · Czego się nauczyłem
**Na ekranie:** wróć do portfolio, sekcja „How I work with AI”, kolumna „Where the decision stays with me”.

> What I learned: AI writes code fast, but it does not know what the product should do. If I give it a clear list of states, the result is good. If I give it a vague idea, I get something that looks nice but behaves wrong. `[TODO: Twoje drugie wnioski, jednym zdaniem.]`

**PL:** Czego się nauczyłem: AI szybko pisze kod, ale nie wie, co produkt ma robić. Jeśli dam mu jasną listę stanów, wynik jest dobry. Jeśli dam mu ogólny pomysł, dostaję coś, co ładnie wygląda, ale źle się zachowuje. `[TODO]`

---

## Część 2 – co teraz badam (5:00–9:00)

Spójne z sekcją **„What I'm exploring now”** w portfolio.

### 5:00–5:40 · Temat
**Na ekranie:** sekcja „What I'm exploring now” (pomarańczowy blok).

> What I'm exploring now is spec-first prototyping. I write the flow and every state first. Then Claude Code builds the prototype. Then I check it automatically: Playwright clicks through the states and axe-core checks accessibility.

**PL:** Teraz badam prototypowanie zaczynające się od specyfikacji. Najpierw spisuję przepływ i każdy stan. Potem Claude Code buduje prototyp. Potem sprawdzam go automatycznie: Playwright przeklikuje stany, a axe-core sprawdza dostępność.

### 5:40–6:20 · Dlaczego
**Na ekranie:** oferta Flying Bisons albo fragment „Invisible 90%” (bez logotypów firmy), potem portfolio.

> Why this? Because the expensive part of a product is not the main screen. It is everything around it: empty states, errors, limits, a slow network. Those are easy to forget in a static mockup. When I write them down first, the AI builds them, and a test checks them, nothing gets forgotten.

**PL:** Dlaczego to? Bo najdroższa część produktu to nie główny ekran. To wszystko dookoła: puste stany, błędy, limity, wolna sieć. Łatwo o nich zapomnieć w statycznej makiecie. Kiedy najpierw je spiszę, AI je zbuduje, a test je sprawdzi, nic nie ginie.

### 6:20–7:40 · Przykład na żywo
**Na ekranie:** prototyp rezerwacji Livingroom w portfolio. Przejdź ścieżkę: data → godzina → liczba osób. Wybierz „9 or more” (przejście na zapytanie grupowe). Wróć, wyślij pusty formularz (błędy z podsumowaniem). Włącz „Simulate network failure” i potwierdź (błąd z zachowaniem danych). Na koniec włącz „Show all states”.

> Here is an example. Livingroom is a restaurant in Gorzów. I built a demo website for them on my own initiative. The missing piece was table booking. So I wrote the flow: date, time, party size, details, confirmation. And the states: a fully booked day, no free times, groups above eight, validation errors, loading, a network error, success. Claude Code built it from that list. With "Show all states" you can see every state at once.

**PL:** Oto przykład. Livingroom to restauracja w Gorzowie. Z własnej inicjatywy zbudowałem dla nich demo strony. Brakowało rezerwacji stolika. Spisałem więc przepływ: data, godzina, liczba osób, dane, potwierdzenie. I stany: pełny dzień, brak wolnych godzin, grupy powyżej ośmiu osób, błędy walidacji, ładowanie, błąd sieci, sukces. Claude Code zbudował to z tej listy. Przełącznikiem „Show all states” widać wszystkie stany naraz.

### 7:40–8:20 · Druga rzecz: ruch w kodzie
**Na ekranie:** film KSK Pretor w portfolio (sekcja Video branding).

> A second thing I explore is motion as code. For KSK Pretor I built the intro and outro in HTML and GSAP and rendered them frame by frame to MP4. One source gives me a Polish and a German version, a post and a story. When the client wants a change, I change one line, not ten files.

**PL:** Druga rzecz, którą badam, to ruch jako kod. Dla KSK Pretor zbudowałem intro i outro w HTML i GSAP i wyrenderowałem je klatka po klatce do MP4. Z jednego źródła mam wersję polską i niemiecką, post i relację. Kiedy klient chce zmiany, zmieniam jedną linijkę, a nie dziesięć plików.

> `[TODO: sprawdź, czy „zmieniam jedną linijkę” to prawda w Twoim projekcie. Jeśli nie, powiedz, jak było naprawdę.]`

### 8:20–9:00 · Zakończenie
**Na ekranie:** sekcja Contact w portfolio.

> I want to grow as a designer who can turn a problem into something people can click and test. That is why I applied. Thank you for watching. My portfolio and contact are in the link.

**PL:** Chcę rozwijać się jako projektant, który potrafi zamienić problem w coś, co ludzie mogą kliknąć i sprawdzić. Dlatego aplikuję. Dziękuję za obejrzenie. Portfolio i kontakt są w linku.

---

## Ściąga: czego nie mówić

- Nie podawaj liczb, których nie masz (ruch na stronie, sprzedaż, zapytania).
- Nie mów, że prototypy rezerwacji są wdrożone. To koncepty zbudowane do portfolio.
- Nie pokazuj nazw klientów Basko ani danych psycholożki i klientów planów treningowych.
