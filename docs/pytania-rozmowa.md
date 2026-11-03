# Pytania na rozmowę (HR i projektant) z krótkimi odpowiedziami

Odpowiedzi po angielsku, bo rozmowa może być po angielsku. Pod każdą jest wskazówka po polsku. Opierają się tylko na faktach z `CLAUDE.md`. Gdzie potrzebny jest Twój przykład, jest `[TODO]`.

Zasada na rozmowę: krótka odpowiedź (2–4 zdania), jeden konkretny przykład z projektu, uczciwe przyznanie, czego jeszcze nie umiesz, i co z tym robisz.

---

## Rozmowa z HR (30 min)

### 1. Tell us about yourself.
> I'm a freelance web designer. I build websites, prototypes and visual content for small companies, for example Basko Clean, an industrial cleaning company, and KSK Pretor, a shooting range. Before that I was a certified personal trainer. I work with AI tools every day and I want to grow in a team of designers.

**Wskazówka:** 45 sekund. Zakończ tym, dlaczego Flying Bisons.

### 2. Why Flying Bisons and why this role?
> I like that you treat AI as a tool for testing ideas quickly, and that you care about states and edge cases, not only screens. That is how I work on my own projects. I also like the idea of the "Invisible 90%". In my freelance work most of the effort is with people: the owner, feedback, approvals.

**Wskazówka:** dodaj jedno zdanie o projekcie Flying Bisons, który Ci się spodobał. `[TODO: przejrzyj ich stronę i wybierz jeden]`

### 3. Why are you looking for a job now, after freelancing?
> I want to stay somewhere for the long term and learn from senior designers. As a freelancer I do everything alone. I want feedback from people who are better than me.

**Wskazówka:** nie krytykuj freelancingu. Mów o rozwoju.

### 4. What is your English level? The offer asks for C1.
> `[TODO: podaj uczciwy poziom.]` I use English every day for work: documentation, AI tools, research. This video and this conversation show my real level. I am working on speaking fluency by `[TODO: np. rozmowy, kurs, nagrywanie się]`.

**Wskazówka:** nie zawyżaj. Jeśli to B2, powiedz B2 i pokaż plan.

### 5. You don't have formal UX experience. Why should we hire you?
> I don't have a UX job title yet, but I have done the work. For KSK Pretor I made five personas, four customer journeys and found seven points where customers drop off. For Livingroom I designed a booking flow with all its states. And I build what I design, so it can be tested.

**Wskazówka:** liczby z KSK są Twoją najmocniejszą kartą. Miej otwarty dokument z planem.

### 6. How do you work with clients?
> I go where the problem is. I film on Basko's job sites, I visited Livingroom as a guest. I keep client data private: Basko's client logos only with consent, no names of the psychologist or the training clients. I show work early as something clickable, so feedback is concrete.

### 7. What are your salary expectations and availability?
> `[TODO: kwota netto B2B / zlecenie, od kiedy możesz zacząć, ile godzin tygodniowo.]`

**Wskazówka:** sprawdź widełki juniorów UX w Warszawie (zdalnie) przed rozmową.

---

## Rozmowa z projektantem (45 min)

### 8. You don't use Figma. How would you work in our team?
> That's true, I haven't used Figma in projects yet. I design directly in code with AI tools, which is close to how you test ideas in Claude Code or v0. I know the team uses Figma where it works best, and I'll learn it quickly. `[TODO: jeśli zaczniesz kurs Figmy przed rozmową, powiedz który i co już zrobiłeś.]`

**Wskazówka:** to pytanie padnie na pewno. Nie przepraszaj. Pokaż plan nauki i to, że rozumiesz, po co Figma jest zespołowi (współpraca, handoff, design system).

### 9. Walk me through one project from problem to result.
> KSK Pretor, German market. Problem: the owner wanted German guests. I did positioning, analysed more than 40 competitors, built five personas and four customer journeys, from a few days to twelve months of planning. I found seven drop-off points and eight levers. Then I wrote the requirements for a German landing page: packages in EUR, booking, conversion tracking. On my portfolio there's a prototype of that page.

**Wskazówka:** pokaż diagram ścieżek i prototyp DE na stronie.

### 10. What did AI do and what did you do?
> AI wrote most of the code and helped with research and drafts. I decided the structure, the states, and what fits the brand. A good example: for Basko's ad, an AI video model gave me a realistic 3D version. It did not fit the brand, so I rejected it and made a flat 2D motion graphic instead.

### 11. How do you design for errors and edge cases?
> I list them before building: empty, loading, error, limit, success. In the Livingroom prototype that means a fully booked day, no free times, groups above eight, validation errors, a network error with retry that keeps the data. I added a "Show all states" switch so anyone can review them in one place.

### 12. How do you check that what AI built is correct?
> I click through every state on desktop and phone. For the portfolio I also used Playwright to click through the prototypes automatically and axe-core to check accessibility.

**Wskazówka:** to prawda dla portfolio. Dla starszych projektów mów tylko to, co faktycznie robiłeś.

### 13. Tell me about a design decision you'd defend.
> On the psychologist's site the payment gateway isn't connected yet. I built the whole purchase path with a mock payment step, so the client can click through it now. The payment badges are built but switched off, so the site never promises a payment method that doesn't work.

### 14. What would you improve in your portfolio projects?
> Basko: add the client logos section once consents arrive and track which channel brings quote requests. Livingroom: connect the booking flow to the restaurant's system and test it with guests on phones. KSK: build the German landing page from the prototype and test it with German organisers.

### 15. Which AI tool or workflow are you exploring now, and why?
> Spec-first prototyping: I write the flow and every state, Claude Code builds it, and automated tests check it. The edge cases are where products fail, and this way they don't get forgotten. I'm also exploring motion as code with GSAP and AI agents for customer questions, starting from my Botpress prototype for KSK.

**Wskazówka:** to samo co w części 2 wideo i w sekcji „What I'm exploring now”.

---

## Pytania, które warto zadać Wam
1. How does a junior get feedback here, and how often?
2. Which AI tools does the team use in real client projects today?
3. What does a good first three months look like for this role?
