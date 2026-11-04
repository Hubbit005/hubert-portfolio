/* Language switch EN / PL.
   English lives in index.html (it is the default and what search engines and no-JS visitors get).
   Polish lives in the dictionary below. Elements carry data-i18n="key" (their content) and
   data-i18n-attr="attr:key;attr:key" (alt, aria-label, data-cursor). Scripts use i18n.t('key').
   The choice is kept in localStorage; #pl and #en in the address open that language at once.
   Loaded as a classic script at the end of <body>, so Polish is in place before the first paint
   and before the modules (carousel, roulette) read the text. */
(function () {
  'use strict';

  /* ---------- Polish content for elements and attributes (keys from index.html) ---------- */
  var PL = {
    // EN: Skip to content
    "page.1": "Przejdź do treści",
    // EN: Hubert<span class="sr-only">, back to top</span>
    "nav.1": "Hubert<span class=\"sr-only\">, na początek strony</span>",
    // EN: <span class="nav__num">01</span>Work
    "nav-list.1": "<span class=\"nav__num\">01</span>Projekty",
    // EN: <span class="nav__num">03</span>AI workflow
    "nav-list.3": "<span class=\"nav__num\">03</span>Praca z AI",
    // EN: <span class="nav__num">04</span>About
    "nav-list.4": "<span class=\"nav__num\">04</span>O mnie",
    // EN: <span class="nav__num">06</span>Contact
    "nav-list.6": "<span class=\"nav__num\">06</span>Kontakt",
    // EN: Spin my work
    "roulette-open.1": "Wylosuj projekt",
    // EN: Spin
    "roulette-spin.1": "Losuj",
    // EN: Back
    "roulette-back.1": "Wróć",
    // EN: You landed on
    "roulette-card.1": "Wylosowany projekt",
    // EN: Open project
    "roulette-go.1": "Otwórz projekt",
    // EN: Spin again
    "roulette-again.1": "Losuj jeszcze raz",
    // EN: I design websites and clickable prototypes, including the empty, error and edge states. I build with AI tools and decide what ships.
    "home.2": "Projektuję strony i klikalne prototypy, razem ze stanami pustymi, błędami i przypadkami brzegowymi. Buduję z narzędziami AI i sam decyduję, co trafia do klienta.",
    // EN: View work
    "home.3": "Zobacz projekty",
    // EN: Contact
    "home.4": "Kontakt",
    // EN: Selected work
    "work-title.1": "Wybrane projekty",
    // EN: From a live client website to a 3D model in the browser. Drag the wheel, use the arrow keys, or pick a card to open the case study.
    "work.2": "Od działającej strony klienta po model 3D w przeglądarce. Przeciągnij koło, użyj strzałek albo wybierz kartę, żeby otworzyć case study.",
    // EN: Website &amp; marketing
    "arc-track.2": "Strona i marketing",
    // EN: Marketing &amp; video
    "arc-track.5": "Marketing i wideo",
    // EN: 3D Model
    "arc-track.7": "Model 3D",
    // EN: Interactive 3D
    "arc-track.8": "Interaktywne 3D",
    // EN: Restaurant
    "arc-track.11": "Restauracja",
    // EN: Book<br>a&nbsp;session
    "arc-track.12": "Umów<br>wizytę",
    // EN: In progress
    "arc-track.13": "W budowie",
    // EN: Website for Agata Patelka
    "arc-track.15": "Strona dla Agaty Patelki",
    // EN: Psychologist
    "arc-track.16": "Psycholożka",
    // EN: Training plans
    "arc-track.18": "Plany treningowe",
    // EN: A page per client
    "arc-track.19": "Strona dla każdego klienta",
    // EN: Client work first: Basko Clean, KSK Pretor and Livingroom. Then a client site in progress and smaller projects.
    "cases.1": "Najpierw praca dla klientów: Basko Clean, KSK Pretor i Livingroom. Potem strona klientki w budowie i mniejsze projekty.",
    // EN: <span class="mono">04</span> Website for Agata Patelka
    "cases.5": "<span class=\"mono\">04</span> Strona dla Agaty Patelki",
    // EN: <span class="mono">05</span> Smaller projects
    "cases.6": "<span class=\"mono\">05</span> Mniejsze projekty",
    // EN: <span class="mono">06</span> This portfolio
    "cases.7": "<span class=\"mono\">06</span> To portfolio",
    // EN: Website, visual system and a motion ad for an industrial cleaning company from Szczecin.
    "basko-clean.2": "Strona, system wizualny i reklama motion dla firmy ze Szczecina, która zajmuje się czyszczeniem przemysłowym.",
    // EN: Client
    "basko-clean.3": "Klient",
    // EN: Basko Clean, B2B industrial cleaning
    "basko-clean.4": "Basko Clean, czyszczenie przemysłowe B2B",
    // EN: Role
    "basko-clean.5": "Rola",
    // EN: Design, code, video, social media
    "basko-clean.6": "Projekt, kod, wideo, social media",
    // EN: Live website, maintained by me
    "basko-clean.8": "Strona działa, prowadzę ją",
    // EN: What I did
    "basko-clean.9": "Co zrobiłem",
    // EN: I designed and built the company website, and I keep it up to date.
    "basko-clean.10": "Zaprojektowałem i zbudowałem stronę firmy. Na bieżąco ją aktualizuję.",
    // EN: I created a visual system for marketing: colours, a vectorised logo with the cleaner figure, light and dark profile pictures, ready-to-use materials.
    "basko-clean.11": "Stworzyłem system wizualny do marketingu: kolory, zwektoryzowane logo z postacią sprzątacza, zdjęcia profilowe w wersji jasnej i ciemnej, gotowe materiały.",
    // EN: I made a motion-graphic ad for Instagram: flat 2D, kinetic type, the cleaner figure as the hero.
    "basko-clean.12": "Zrobiłem reklamę motion graphic na Instagram: płaskie 2D, kinetyczna typografia, postać sprzątacza w roli głównej.",
    // EN: I film on job sites and edit the reels for Instagram, LinkedIn and TikTok.
    "basko-clean.13": "Nagrywam materiał na realizacjach i montuję rolki na Instagram, LinkedIn i TikTok.",
    // EN: Basko Clean · live site
    "basko-clean.14": "Basko Clean · strona na żywo",
    // EN: Home page. The quote form is visible without scrolling.
    "basko-clean.15": "Strona główna. Formularz wyceny widać bez przewijania.",
    // EN: Before-and-after slider
    "basko-clean.16": "Suwak przed i po",
    // EN: Benefits and closing call to action
    "basko-clean.17": "Korzyści i końcowe wezwanie do działania",
    // EN: 20-second vertical reel: kinetic type, service checklist, 4-step process, before and after, logo end card.
    "basko-reel-desc.1": "Pionowa rolka, 20 sekund: kinetyczna typografia, lista usług, proces w 4 krokach, przed i po, plansza z logo.",
    // EN: A shooting range and event venue in Racław near Gorzów. I work on its marketing, its growth in Germany and its digital tools.
    "ksk-pretor.2": "Strzelnica i miejsce eventów w Racławiu pod Gorzowem. Pracuję nad jej marketingiem, wejściem na rynek niemiecki i narzędziami cyfrowymi.",
    // EN: KSK Pretor, shooting range and events
    "ksk-pretor.3": "KSK Pretor, strzelnica i eventy",
    // EN: Strategy, marketing, video, 3D, AI agent
    "ksk-pretor.4": "Strategia, marketing, wideo, 3D, agent AI",
    // EN: I prepared a marketing plan for growing the business in the German market.
    "ksk-pretor.5": "Przygotowałem plan marketingowy rozwoju firmy na rynku niemieckim.",
    // EN: I brought an event agency to the range.
    "ksk-pretor.6": "Przyciągnąłem do strzelnicy agencję eventową.",
    // EN: I ran the range&#8217;s social media for a period.
    "ksk-pretor.7": "Przez jakiś czas prowadziłem social media strzelnicy.",
    // EN: I built AI agent prototypes in Botpress.
    "ksk-pretor.8": "Zbudowałem prototypy agenta AI w Botpress.",
    // EN: I created promotional films and graphics.
    "ksk-pretor.9": "Stworzyłem filmy reklamowe i grafiki promocyjne.",
    // EN: KSK Pretor · 3D model
    "ksk-3d-model.1": "KSK Pretor · model 3D",
    // EN: Interactive 3D model of an AK-47
    "ksk-3d-title.1": "Interaktywny model 3D karabinka AK-47",
    // EN: I built it in code from simple shapes in three.js, with no ready-made models. Visitors rotate it, take it apart step by step and export a photo for Instagram. Live version: <a href="https://hubbit005.github.io/ksk-ak47-3d/" rel="noopener" target="_blank">hubbit005.github.io/ksk-ak47-3d<span class="sr-only"> (opens in a new tab)</span></a>.
    "ksk-3d-model.2": "Zbudowałem go w kodzie z prostych brył w three.js, bez gotowych modeli. Można go obracać, rozkładać krok po kroku i eksportować zdjęcie na Instagram. Wersja na żywo: <a href=\"https://hubbit005.github.io/ksk-ak47-3d/\" rel=\"noopener\" target=\"_blank\">hubbit005.github.io/ksk-ak47-3d<span class=\"sr-only\"> (otwiera się w nowej karcie)</span></a>.",
    // EN: Load the 3D model
    "model-load.1": "Załaduj model 3D",
    // EN: Open full screen
    "model-embed.1": "Otwórz na pełnym ekranie",
    // EN:  (opens in a new tab)
    "model-embed.2": " (otwiera się w nowej karcie)",
    // EN: Loads about 1 MB. Interface in Polish, as built for the client.
    "model-embed.3": "Około 1 MB. Interfejs po polsku, tak jak dla klienta.",
    // EN: Part highlighted
    "ksk-3d-model.3": "Podświetlona część",
    // EN: Step 5 of 5, disassembled
    "ksk-3d-model.4": "Krok 5 z 5, rozłożony",
    // EN: Photo mode, 1080×1350
    "ksk-3d-model.5": "Tryb zdjęcia, 1080×1350",
    // EN: Phone, reduced quality
    "ksk-3d-model.6": "Telefon, niższa jakość renderu",
    // EN: KSK Pretor · Video
    "ksk-video.1": "KSK Pretor · wideo",
    // EN: Video branding
    "ksk-video-title.1": "Branding wideo",
    // EN: I created a 3-second intro and outro with the logo, in Polish and German, a “Vielen Dank” card for agencies and a 10-second spot. Animated in HTML and GSAP, rendered frame by frame.
    "ksk-video.2": "Stworzyłem 3-sekundowe intro i outro z logo w wersji polskiej i niemieckiej, planszę „Vielen Dank” dla agencji i 10-sekundowy spot. Animacje w HTML i GSAP, renderowane klatka po klatce.",
    // EN: Promo film in German, 35 seconds, 16:9.
    "ksk-film-desc.1": "Film promocyjny po niemiecku, 35 sekund, 16:9.",
    // EN: On my own initiative I designed and built a new website for the restaurant.
    "livingroom.2": "Z własnej inicjatywy zaprojektowałem i zbudowałem nową stronę restauracji.",
    // EN: Livingroom restaurant, Gorzów Wielkopolski
    "livingroom.3": "Restauracja Livingroom, Gorzów Wielkopolski",
    // EN: Idea, design, build
    "livingroom.4": "Pomysł, projekt, wykonanie",
    // EN: I designed and built the site: home page, menu with allergens, dish carousel, Polish and English versions.
    "livingroom.5": "Zaprojektowałem i zbudowałem stronę: strona główna, menu z alergenami, karuzela dań, wersja polska i angielska.",
    // EN: Home page
    "livingroom.6": "Strona główna",
    // EN: Menu categories
    "livingroom.7": "Kategorie menu",
    // EN: Dish list with allergens
    "livingroom.8": "Lista dań z alergenami",
    // EN: Dish carousel
    "livingroom.9": "Karuzela dań",
    // EN: A website for a psychologist with session packages, a cart and appointment booking. Client project in progress; the copy is still a draft.
    "psychologist-site.2": "Strona psycholożki z pakietami sesji, koszykiem i rezerwacją terminów. Projekt dla klientki w budowie, teksty są robocze.",
    // EN: Agata Patelka, psychologist
    "psychologist-site.3": "Agata Patelka, psycholożka",
    // EN: Design and build
    "psychologist-site.4": "Projekt i wykonanie",
    // EN: I designed the full purchase path: package, cart, payment step, thank-you page. It can be clicked through before the payment gateway is connected.
    "psychologist-site.5": "Zaprojektowałem całą ścieżkę zakupu: pakiet, koszyk, płatność, podziękowanie. Można ją przeklikać, zanim podłączona zostanie bramka płatności.",
    // EN: I set up booking on an embedded Cal.com calendar, so the client manages her own time slots.
    "psychologist-site.6": "Rezerwację oparłem na osadzonym kalendarzu Cal.com, więc klientka sama zarządza terminami.",
    // EN: I am building the site in Claude Code with Astro and Tailwind.
    "psychologist-site.7": "Buduję stronę w Claude Code, w Astro i Tailwind.",
    // EN: Purchase path, clickable end to end before the gateway exists
    "psy-flow-title.1": "Ścieżka zakupu, klikalna od początku do końca jeszcze przed bramką płatności",
    // EN: Choose a package
    "psychologist-site.9": "Wybór pakietu",
    // EN: Cart
    "psychologist-site.11": "Koszyk",
    // EN: Payment <em class="mono">mock</em>
    "psychologist-site.13": "Płatność <em class=\"mono\">makieta</em>",
    // EN: Stripe later. Payment method badges built, switched off.
    "psychologist-site.14": "Stripe później. Plakietki metod płatności gotowe, wyłączone.",
    // EN: Thank you
    "psychologist-site.16": "Dziękujemy",
    // EN: Book a time
    "psychologist-site.18": "Rezerwacja terminu",
    // EN: Embedded Cal.com. The client manages her own slots.
    "psychologist-site.19": "Osadzony Cal.com. Klientka sama zarządza terminami.",
    // EN: Smaller projects
    "smaller-title.1": "Mniejsze projekty",
    // EN: Training plans for clients.
    "smaller-projects.2": "Plany treningowe dla klientów.",
    // EN: 05 · Client work, anonymised
    "training-plans.1": "05 · Praca dla klientów, zanonimizowana",
    // EN: Training plans as web pages
    "training-title.1": "Plany treningowe jako strony WWW",
    // EN: I build web pages for clients&#8217; personal 8-week training plans, all from one template I designed.
    "training-plans.2": "Buduję strony z osobistymi 8-tygodniowymi planami treningowymi dla klientów. Wszystkie powstają z jednego szablonu, który zaprojektowałem.",
    // EN: Plan variants, progress tracking and day-by-day workouts.
    "training-plans.3": "Warianty planu, śledzenie postępów i treningi rozpisane na dni.",
    // EN: A calendar where the client picks the date of each workout.
    "training-plans.4": "Kalendarz, w którym klient wybiera datę każdego treningu.",
    // EN: Names and body data hidden in the screenshots.
    "training-plans.5": "Imiona i dane o ciele ukryte na zrzutach.",
    // EN: Plan overview
    "training-plans.6": "Przegląd planu",
    // EN: Workout day with calendar
    "training-plans.7": "Dzień treningowy z kalendarzem",
    // EN: How I work with AI
    "ai-title.1": "Jak pracuję z AI",
    // EN: I use AI tools in every project, mostly to research and build faster. Below: my steps and the tools.
    "ai.1": "Używam narzędzi AI w każdym projekcie, głównie po to, żeby szybciej zbierać informacje i budować. Poniżej moje kroki i narzędzia.",
    // EN: Start on site
    "ai.2": "Start u klienta",
    // EN: At the client's job site, or as a guest in the restaurant.
    "ai.3": "Na realizacji u klienta albo jako gość w restauracji.",
    // EN: Perplexity for sources, Gemini for comparisons, ChatGPT for structuring strategy, Manifold for marketing and social data.
    "ai.6": "Perplexity do źródeł, Gemini do porównań, ChatGPT do porządkowania strategii, Manifold do danych marketingowych i z social mediów.",
    // EN: Flow and states
    "ai.8": "Ścieżka i stany",
    // EN: I list the steps and the states before the build. Example: my brief for this portfolio.
    "ai.9": "Przed budową spisuję kroki i stany. Przykład: mój brief do tego portfolio.",
    // EN: Build
    "ai.11": "Budowa",
    // EN: Claude Code turns the list into a working page or prototype. Animations in GSAP and HyperFrames, rendered to MP4 with Playwright. 3D in three.js.
    "ai.12": "Claude Code zamienia listę w działającą stronę albo prototyp. Animacje w GSAP i HyperFrames, renderowane do MP4 przez Playwright. 3D w three.js.",
    // EN: Visuals
    "ai.14": "Grafika",
    // EN: Higgsfield and Leonardo AI for images and video, Canva for posts and materials.
    "ai.15": "Higgsfield i Leonardo AI do obrazów i wideo, Canva do postów i materiałów.",
    // EN: Review
    "ai.17": "Kontrola",
    // EN: Before anything goes to the client, I check it against the brief and the brand.
    "ai.18": "Zanim cokolwiek trafi do klienta, sprawdzam to z briefem i z marką.",
    // EN: Where AI speeds me up
    "ai.20": "Gdzie AI mnie przyspiesza",
    // EN: Code for pages, prototypes and animations.
    "ai.21": "Kod stron, prototypów i animacji.",
    // EN: Market and competitor data with sources.
    "ai.22": "Dane o rynku i konkurencji ze źródłami.",
    // EN: Drafts of long documents and their structure.
    "ai.23": "Szkice długich dokumentów i ich struktura.",
    // EN: Image and video variants to compare.
    "ai.24": "Warianty obrazów i wideo do porównania.",
    // EN: Dictation instead of typing.
    "ai.25": "Dyktowanie zamiast pisania.",
    // EN: What I decide
    "ai.26": "O czym decyduję",
    // EN: What the problem is and who the user is.
    "ai.27": "Jaki jest problem i kto jest użytkownikiem.",
    // EN: Which states and edge cases the product must handle.
    "ai.28": "Jakie stany i przypadki brzegowe produkt musi obsłużyć.",
    // EN: Whether a visual fits the brand. Basko's realistic 3D ad did not, so I dropped it.
    "ai.29": "Czy grafika pasuje do marki. Realistyczna reklama 3D dla Basko nie pasowała, więc ją odrzuciłem.",
    // EN: What a client's material may show: no client logos without consent, no personal data.
    "ai.30": "Co mogą pokazać materiały klienta: bez logo jego klientów bez zgody, bez danych osobowych.",
    // EN: Whether the result is ready for the client.
    "ai.31": "Czy wynik jest gotowy dla klienta.",
    // EN: Tools I use and what I made with them
    "ai.38": "Narzędzia, których używam, i co nimi zrobiłem",
    // EN: Client websites for Basko Clean and Livingroom, the interactive 3D model for KSK Pretor, brand animations in code and this portfolio. I also use it for strategy and research.
    "tool-d-1.1": "Strony klientów Basko Clean i Livingroom, interaktywny model 3D dla KSK Pretor, animacje marki w kodzie i to portfolio. Używam go też do strategii i researchu.",
    // EN: Copy, research and the strategy work behind the KSK Pretor plan for the German market.
    "tool-d-2.1": "Teksty, research i praca nad strategią do planu KSK Pretor na rynek niemiecki.",
    // EN: Research and side-by-side comparisons for client projects.
    "tool-d-3.1": "Research i zestawienia porównawcze do projektów klientów.",
    // EN: Research with sources and market analysis for client strategy.
    "tool-d-4.1": "Research ze źródłami i analiza rynku do strategii klientów.",
    // EN: Video and images for ads, generated with models such as Seedance, and video edits with person replacement.
    "tool-d-5.1": "Wideo i obrazy do reklam, generowane m.in. modelem Seedance, oraz edycja wideo z podmianą osoby.",
    // EN: Generated graphics for client marketing.
    "tool-d-6.1": "Grafiki do marketingu klientów.",
    // EN: Marketing and social media research for client profiles.
    "tool-d-7.1": "Research marketingowy i social media do profili klientów.",
    // EN: AI agent (chatbot) prototypes for the KSK Pretor shooting range.
    "tool-d-8.1": "Prototypy agenta AI (czatbota) dla strzelnicy KSK Pretor.",
    // EN: Graphics, social media posts and marketing materials for clients.
    "tool-d-9.1": "Grafiki, posty do social mediów i materiały marketingowe dla klientów.",
    // EN: Dictation and voice work: I write by speaking.
    "tool-d-10.1": "Dyktowanie i praca głosem: piszę, mówiąc.",
    // EN: Motion in code for the KSK Pretor brand animations: the logo intro and outro in Polish and German.
    "tool-d-11.1": "Ruch w kodzie do animacji marki KSK Pretor: intro i outro z logo po polsku i po niemiecku.",
    // EN: The KSK Pretor brand animations built as HTML video compositions.
    "tool-d-12.1": "Animacje marki KSK Pretor zbudowane jako kompozycje wideo w HTML.",
    // EN: Rendering the KSK Pretor animations frame by frame to MP4.
    "tool-d-13.1": "Renderowanie animacji KSK Pretor do MP4, klatka po klatce.",
    // EN: The interactive 3D model for KSK Pretor, built in code from simple shapes.
    "tool-d-14.1": "Interaktywny model 3D dla KSK Pretor, zbudowany w kodzie z prostych brył.",
    // EN: This portfolio
    "meta-title.1": "To portfolio",
    // EN: I planned and designed this site and built it in Claude Code. I tested every version for accessibility, layout and links, and refined it over several review rounds.
    "this-portfolio.2": "Zaplanowałem i zaprojektowałem tę stronę, a zbudowałem ją w Claude Code. Każdą wersję sprawdzałem pod kątem dostępności, układu i linków, a potem dopracowywałem w kilku rundach recenzji.",
    // EN: What I'm exploring now
    "exploring.1": "Co teraz zgłębiam",
    // EN: Writing the states before the build
    "exploring.2": "Stany spisane przed budową",
    // EN: Spec-first prototyping with Claude Code
    "exploring.3": "Prototypowanie od specyfikacji z Claude Code",
    // EN: I write the flow and its states first, Claude Code builds from that, and automated checks test the result. This portfolio is my first full run of it (see the case above).
    "exploring.4": "Najpierw spisuję ścieżkę i jej stany, Claude Code buduje na tej podstawie, a automatyczne testy sprawdzają wynik. To portfolio jest moim pierwszym pełnym przejściem tej metody (zobacz case wyżej).",
    // EN: Motion as code
    "exploring.5": "Ruch jako kod",
    // EN: Brand animations in HTML and GSAP, rendered frame by frame to MP4, in Polish and German versions.
    "exploring.6": "Animacje marki w HTML i GSAP, renderowane klatka po klatce do MP4, w wersji polskiej i niemieckiej.",
    // EN: AI agents for customer questions
    "exploring.7": "Agenci AI do pytań klientów",
    // EN: After the Botpress prototype for KSK Pretor: where an agent can help a customer, and where a person has to take over.
    "exploring.8": "Po prototypie w Botpress dla KSK Pretor: gdzie agent może pomóc klientowi, a gdzie musi przejąć człowiek.",
    // EN: About
    "about-title.1": "O mnie",
    // EN: I design and build websites and prototypes for companies, and I make their marketing and visual content: video, graphics, motion.
    "about.1": "Projektuję i buduję strony oraz prototypy dla firm, a do tego tworzę ich treści marketingowe i wizualne: wideo, grafiki, animacje.",
    // EN: The most satisfying part of my work is building something that works and looks good. I follow new AI tools closely and want to get much better at using them in design work.
    "about.2": "Najwięcej satysfakcji daje mi zbudowanie czegoś, co działa i dobrze wygląda. Na bieżąco śledzę nowe narzędzia AI i chcę dużo lepiej wykorzystywać je w projektowaniu.",
    // EN: I am looking for a team I can stay with for the long term and grow in. I am ready to put in long hours on work that shows results.
    "about.3": "Szukam zespołu, z którym zostanę na dłużej i w którym będę się rozwijać. Jestem gotów pracować bardzo dużo, jeśli praca daje efekt.",
    // EN: Background
    "about.4": "Doświadczenie",
    // EN: <span class="mono">Now</span>Freelance web design, marketing and visual content for companies
    "about.5": "<span class=\"mono\">Teraz</span>Freelance: projektowanie stron, marketing i treści wizualne dla firm",
    // EN: <span class="mono">Clients</span>Direct work with company owners, including filming on site
    "about.6": "<span class=\"mono\">Klienci</span>Bezpośrednia praca z właścicielami firm, także nagrania na miejscu",
    // EN: <span class="mono">Before</span>Certified personal trainer. One-to-one work with people, a plan adapted to each person
    "about.7": "<span class=\"mono\">Wcześniej</span>Trener personalny z certyfikatem. Praca jeden na jeden, plan dopasowany do każdej osoby",
    // EN: <span class="mono">Base</span>Near Gorzów Wielkopolski, Poland. Working remotely
    "about.8": "<span class=\"mono\">Baza</span>Okolice Gorzowa Wielkopolskiego. Pracuję zdalnie",
    // EN: Content pending
    "cv.1": "Do uzupełnienia",
    // EN: Link to CV (PDF)
    "cv.2": "Link do CV (PDF)",
    // EN: Experience
    "cv.3": "Doświadczenie",
    // EN: Freelance · <span class="pending-inline">dates pending</span>
    "cv.4": "Freelance · <span class=\"pending-inline\">daty do uzupełnienia</span>",
    // EN: Web designer, marketing and visual content
    "cv.5": "Web designer, marketing i treści wizualne",
    // EN: <b>Basko Clean:</b> website design and code, motion-graphic ad, social media on three platforms, profile identity.
    "cv.6": "<b>Basko Clean:</b> projekt i kod strony, reklama motion graphic, social media na trzech platformach, identyfikacja profili.",
    // EN: <b>KSK Pretor:</b> German market entry plan (18 chapters, 59-page owner version), interactive 3D model, AI agent prototype, video branding in PL and DE.
    "cv.7": "<b>KSK Pretor:</b> plan wejścia na rynek niemiecki (18 rozdziałów, wersja dla właściciela na 59 stron), interaktywny model 3D, prototyp agenta AI, branding wideo po polsku i po niemiecku.",
    // EN: <b>Livingroom:</b> restaurant website designed and built on my own initiative.
    "cv.8": "<b>Livingroom:</b> strona restauracji zaprojektowana i zbudowana z własnej inicjatywy.",
    // EN: <b>Psychologist website:</b> full purchase path (Astro, Tailwind, Cal.com).
    "cv.9": "<b>Strona psycholożki:</b> pełna ścieżka zakupu (Astro, Tailwind, Cal.com).",
    // EN: <b>Training plans:</b> personal plan pages from one template.
    "cv.10": "<b>Plany treningowe:</b> osobiste strony z planami z jednego szablonu.",
    // EN: Earlier · <span class="pending-inline">dates pending</span>
    "cv.11": "Wcześniej · <span class=\"pending-inline\">daty do uzupełnienia</span>",
    // EN: Personal trainer (certified)
    "cv.12": "Trener personalny (z certyfikatem)",
    // EN: One-to-one work with people.
    "cv.13": "Praca z ludźmi jeden na jeden.",
    // EN: Skills
    "cv.14": "Umiejętności",
    // EN: User flows, states and edge cases, personas, customer journeys, drop-off analysis
    "cv.16": "Ścieżki użytkownika, stany i przypadki brzegowe, persony, customer journey, analiza miejsc, w których klient odpada",
    // EN: Hierarchy, spacing, typography, motion, light and dark themes
    "cv.18": "Hierarchia, odstępy, typografia, ruch, motyw jasny i ciemny",
    // EN: HTML, CSS, JavaScript, React, Astro, Tailwind, three.js, GSAP (built with Claude Code)
    "cv.20": "HTML, CSS, JavaScript, React, Astro, Tailwind, three.js, GSAP (budowane z Claude Code)",
    // EN: Visual
    "cv.21": "Grafika i wideo",
    // EN: Video editing, motion graphics, graphics, social content
    "cv.22": "Montaż wideo, motion graphics, grafika, treści do social mediów",
    // EN: AI tools
    "cv.23": "Narzędzia AI",
    // EN: Languages
    "cv.25": "Języki",
    // EN: Polish (native). English: <span class="pending-inline">level pending</span>
    "cv.26": "Polski (ojczysty). Angielski: <span class=\"pending-inline\">poziom do uzupełnienia</span>",
    // EN: The fastest way to reach me is e-mail.
    "contact.1": "Najszybciej złapiesz mnie mailowo.",
    // EN: Phone
    "contact.14": "Telefon",
    // EN: Content pending: phone number
    "contact.15": "Do uzupełnienia: numer telefonu",
    // EN: Copy e-mail
    "copy-mail.1": "Kopiuj adres",
    // EN: Built with Claude Code. No tracking.
    "contact.12": "Zbudowane w Claude Code. Bez śledzenia.",
    // EN: Back to top ↑
    "contact.13": "Na górę ↑",
    // EN: Sections
    "a-nav.1": "Sekcje",
    // EN: Project roulette
    "a-roulette.1": "Ruletka projektów",
    // EN: Projects
    "a-arc-viewport.1": "Projekty",
    // EN: Open
    "a-arc-track.1": "Otwórz",
    // EN: Previous project
    "a-arc-prev.1": "Poprzedni projekt",
    // EN: Next project
    "a-arc-next.1": "Następny projekt",
    // EN: Basko Clean home page: headline about professional B2B cleaning, a free quote form with service, phone and postcode fields, and two cards linking to the process and the offer.
    "a-basko-clean.1": "Strona główna Basko Clean: nagłówek o profesjonalnym czyszczeniu B2B, formularz bezpłatnej wyceny z polami usługi, telefonu i kodu pocztowego oraz dwie karty z linkami do procesu i oferty.",
    // EN: A before-and-after slider showing a roof drain covered in dirt on the left and clean on the right, with three cards about experience, price and availability below.
    "a-basko-clean.2": "Suwak przed i po: rynna dachowa zarośnięta brudem po lewej i czysta po prawej, pod spodem trzy karty o doświadczeniu, cenie i dostępności.",
    // EN: Four benefit cards with icons, a row of key figures, and a closing call to action to order a free quote.
    "a-basko-clean.3": "Cztery karty korzyści z ikonami, rząd kluczowych liczb i końcowe wezwanie do zamówienia bezpłatnej wyceny.",
    // EN: The 3D model of the rifle on a dark stage with a red glow, the KSK Pretor label in the corner and a control panel with buttons to disassemble, assemble and enter photo mode.
    "a-model-embed.1": "Model 3D karabinka na ciemnej scenie z czerwoną poświatą, napis KSK Pretor w rogu i panel z przyciskami do rozkładania, składania i trybu zdjęcia.",
    // EN: Magazine highlighted in red with a tooltip showing its name and a short description.
    "a-ksk-3d-model.1": "Magazynek podświetlony na czerwono z dymkiem, który podaje nazwę części i krótki opis.",
    // EN: The rifle taken apart: magazine, receiver cover, recoil spring, carrier with bolt and gas tube floating apart with numbered labels.
    "a-ksk-3d-model.2": "Rozłożony karabinek: magazynek, pokrywa komory zamkowej, sprężyna powrotna, suwadło z zamkiem i rura gazowa rozsunięte z numerowanymi podpisami.",
    // EN: Photo mode with a portrait crop frame, preset shot buttons on top and format and export buttons at the bottom.
    "a-ksk-3d-model.3": "Tryb zdjęcia z pionową ramką kadru, przyciskami gotowych ujęć u góry oraz wyborem formatu i eksportem na dole.",
    // EN: The model on a phone screen with touch hints and the control panel at the bottom.
    "a-ksk-3d-model.4": "Model na ekranie telefonu z podpowiedziami gestów i panelem sterowania na dole.",
    // EN: Film frame: 45+ Waffen, 14 Kaliber, with a rifle silhouette.
    "a-ksk-video.1": "Klatka z filmu: 45+ Waffen, 14 Kaliber, z sylwetką karabinu.",
    // EN: Film frame: Bahnen bis 100 m with an aerial photo of the range.
    "a-ksk-video.2": "Klatka z filmu: Bahnen bis 100 m ze zdjęciem strzelnicy z lotu ptaka.",
    // EN: Film frame: a price comparison bar chart in red and grey.
    "a-ksk-video.3": "Klatka z filmu: wykres słupkowy z porównaniem cen w czerwieni i szarości.",
    // EN: Film frame: one instructor with every shooter, with a photo of an instructor at the range.
    "a-ksk-video.4": "Klatka z filmu: jeden instruktor przy każdym strzelcu, ze zdjęciem instruktora na strzelnicy.",
    // EN: Livingroom home page on a black background: italic serif headline welcoming guests, an illustrated arched storefront with warm lit windows, and two gold-outlined buttons to book a table and see the menu.
    "a-livingroom.1": "Strona główna Livingroom na czarnym tle: nagłówek pisany kursywą szeryfową, który wita gości, ilustracja witryny z łukami i ciepło oświetlonymi oknami oraz dwa złote przyciski do rezerwacji stolika i menu.",
    // EN: Menu page with six large serif categories, each numbered, offset in a staggered layout.
    "a-livingroom.2": "Strona menu z sześcioma dużymi, numerowanymi kategoriami w kroju szeryfowym, ułożonymi schodkowo.",
    // EN: Burger section of the menu with dish names, ingredients, allergens and prices in gold.
    "a-livingroom.3": "Sekcja burgerów w menu z nazwami dań, składnikami, alergenami i cenami w złocie.",
    // EN: An illustrated burger in the centre of a dish carousel with a drink and a steak on the sides and arrow buttons below.
    "a-livingroom.4": "Ilustrowany burger w środku karuzeli dań, po bokach napój i stek, pod spodem przyciski ze strzałkami.",
    // EN: Training plan on a phone: client shown as Client A, goal, level, 8-week duration, a progress ring and day cards for the first workouts.
    "a-training-plans.1": "Plan treningowy na telefonie: klient jako Client A, cel, poziom, czas trwania 8 tygodni, pierścień postępu i karty pierwszych treningów.",
    // EN: A workout day on a phone: a monthly calendar where the client picks the training date before the exercises appear.
    "a-training-plans.2": "Dzień treningowy na telefonie: kalendarz miesięczny, w którym klient wybiera datę treningu, zanim pojawią się ćwiczenia.",
  };

  /* ---------- Strings used by scripts ---------- */
  var STR = {
    en: {
      'meta.title': 'Hubert · Junior UX/UI Designer, AI-native · Portfolio',
      'meta.description': 'Hubert, Junior UX/UI Designer working with AI tools every day. Client websites, a visual system and motion ad, an interactive 3D model and promotional video.',
      'lang.group': 'Language',
      'theme.toDark': 'Switch to dark theme',
      'theme.toLight': 'Switch to light theme',
      'copy.ok': 'Copied to clipboard',
      'copy.fail': 'Copy failed. Select the address above.',
      'model.title': 'Interactive 3D model of an AK-47 for KSK Pretor. Drag to rotate. Keys: S trigger, Z charging handle, P selector.',
      'roulette.hintWheel': 'Drag the wheel or press Spin',
      'roulette.hintRandom': 'A random pick from my projects',
      'roulette.opened': 'Project roulette. Press Spin or drag the wheel. Escape goes back.',
      'roulette.spinning': 'Spinning',
      'roulette.result': 'Result: {name}. {cat}.',
      'roulette.typeCover': 'Book<br>a&nbsp;session',
      'p.basko.name': 'Basko Clean', 'p.basko.label': 'BASKO CLEAN', 'p.basko.cat': 'Website & marketing',
      'p.ksk.name': 'KSK Pretor', 'p.ksk.label': 'KSK PRETOR', 'p.ksk.cat': 'Marketing & video',
      'p.ak.name': '3D Model', 'p.ak.label': '3D MODEL', 'p.ak.cat': 'Interactive 3D',
      'p.living.name': 'Livingroom', 'p.living.label': 'LIVINGROOM', 'p.living.cat': 'Restaurant',
      'p.psy.name': 'Agata Patelka', 'p.psy.label': 'AGATA PATELKA', 'p.psy.cat': 'Psychologist · in progress',
      'p.training.name': 'Training plans', 'p.training.label': 'TRAINING PLANS', 'p.training.cat': 'A page per client',
    },
    pl: {
      'meta.title': 'Hubert · Junior UX/UI Designer, AI-native · Portfolio',
      'meta.description': 'Hubert, Junior UX/UI Designer, który na co dzień pracuje z narzędziami AI. Strony klientów, system wizualny i reklama motion, interaktywny model 3D i filmy promocyjne.',
      'lang.group': 'Język',
      'theme.toDark': 'Włącz ciemny motyw',
      'theme.toLight': 'Włącz jasny motyw',
      'copy.ok': 'Skopiowano do schowka',
      'copy.fail': 'Nie udało się skopiować. Zaznacz adres powyżej.',
      'model.title': 'Interaktywny model 3D karabinka AK-47 dla KSK Pretor. Przeciągnij, żeby obrócić. Klawisze: S spust, Z rączka zamka, P przełącznik trybów.',
      'roulette.hintWheel': 'Zakręć kołem albo naciśnij „Losuj”',
      'roulette.hintRandom': 'Losowy projekt z mojego portfolio',
      'roulette.opened': 'Ruletka projektów. Naciśnij „Losuj” albo zakręć kołem. Escape wraca.',
      'roulette.spinning': 'Koło się kręci',
      'roulette.result': 'Wynik: {name}. {cat}.',
      'roulette.typeCover': 'Umów<br>wizytę',
      'p.basko.name': 'Basko Clean', 'p.basko.label': 'BASKO CLEAN', 'p.basko.cat': 'Strona i marketing',
      'p.ksk.name': 'KSK Pretor', 'p.ksk.label': 'KSK PRETOR', 'p.ksk.cat': 'Marketing i wideo',
      'p.ak.name': 'Model 3D', 'p.ak.label': 'MODEL 3D', 'p.ak.cat': 'Interaktywne 3D',
      'p.living.name': 'Livingroom', 'p.living.label': 'LIVINGROOM', 'p.living.cat': 'Restauracja',
      'p.psy.name': 'Agata Patelka', 'p.psy.label': 'AGATA PATELKA', 'p.psy.cat': 'Psycholożka · w budowie',
      'p.training.name': 'Plany treningowe', 'p.training.label': 'PLANY TRENINGOWE', 'p.training.cat': 'Strona dla każdego klienta',
    },
  };

  var LANGS = ['en', 'pl'];
  var EN = {};            // English content, read from the HTML on first run
  var current = 'en';
  var doc = document.documentElement;

  function t(key, vars) {
    var s = (STR[current] && STR[current][key]) || STR.en[key] || key;
    if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    return s;
  }

  function parseAttr(spec) {
    return spec.split(';').map(function (p) { var i = p.indexOf(':'); return [p.slice(0, i), p.slice(i + 1)]; });
  }

  // Remember the English text the first time an element (or a clone with the same key) is seen.
  function collect(root) {
    (root || document).querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!(k in EN)) EN[k] = el.innerHTML;
    });
    (root || document).querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      parseAttr(el.getAttribute('data-i18n-attr')).forEach(function (a) {
        if (!(('@' + a[1]) in EN)) EN['@' + a[1]] = el.getAttribute(a[0]) || '';
      });
    });
  }

  function apply(lang) {
    var src = lang === 'pl' ? PL : EN;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      var v = src[k] != null ? src[k] : EN[k];
      if (v != null && el.innerHTML !== v) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      parseAttr(el.getAttribute('data-i18n-attr')).forEach(function (a) {
        var v = lang === 'pl' ? PL[a[1]] : EN['@' + a[1]];
        if (v == null) v = EN['@' + a[1]];
        if (v != null) el.setAttribute(a[0], v);
      });
    });
    doc.lang = lang;
    document.title = t('meta.title');
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t('meta.description'));
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    var group = document.getElementById('lang-switch');
    if (group) group.setAttribute('aria-label', t('lang.group'));
  }

  // Keep the same content under the nav while text lengths change above it:
  // the anchor is the first visible text block below the nav.
  function anchorBefore() {
    if (window.scrollY < 8) return null;
    var navH = (document.getElementById('nav') || {}).offsetHeight || 64;
    var els = document.querySelectorAll('#main h2, #main h3, #main h4, #main p, #main li, #main dt, #main figure, #main picture, #main video');
    for (var i = 0; i < els.length; i++) {
      var r = els[i].getBoundingClientRect();
      if (r.height > 0 && r.top >= navH - 1) return { el: els[i], top: r.top };
    }
    return null;
  }
  function anchorAfter(a) {
    if (!a || !a.el.isConnected) return;
    var d = a.el.getBoundingClientRect().top - a.top;
    if (Math.abs(d) < 1) return;
    var lenis = window.__lenis;
    if (lenis) lenis.scrollTo(window.scrollY + d, { immediate: true, force: true });
    else window.scrollTo(0, window.scrollY + d);
  }

  function setLang(lang, opts) {
    opts = opts || {};
    if (LANGS.indexOf(lang) < 0) lang = 'en';
    var changed = lang !== current;
    var a = changed && !opts.initial ? anchorBefore() : null;
    current = lang;
    apply(lang);
    if (opts.persist !== false) { try { localStorage.setItem('lang', lang); } catch (e) { /* storage blocked */ } }
    if (a) anchorAfter(a);
    if (changed || opts.initial) document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang, initial: !!opts.initial } }));
    if (a) requestAnimationFrame(function () { anchorAfter(a); });
  }

  function fromHash() {
    var h = (location.hash || '').toLowerCase();
    return h === '#pl' || h === '#en' ? h.slice(1) : null;
  }
  function stored() {
    try { var s = localStorage.getItem('lang'); return LANGS.indexOf(s) >= 0 ? s : null; } catch (e) { return null; }
  }

  collect();
  var first = fromHash() || stored() || 'en';
  current = 'en';
  if (first !== 'en') { current = first; apply(first); } else apply('en');
  doc.classList.remove('lang-pending');

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-lang]');
    if (!b) return;
    setLang(b.getAttribute('data-lang'));
    // An old #pl / #en in the address would override the choice on reload.
    if (fromHash()) history.replaceState(null, '', location.pathname + location.search);
  });
  window.addEventListener('hashchange', function () { var h = fromHash(); if (h) setLang(h); });

  window.i18n = {
    t: t,
    lang: function () { return current; },
    set: setLang,
    collect: collect,
    apply: function () { apply(current); },
  };
})();
