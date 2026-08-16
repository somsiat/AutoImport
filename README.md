# AutoImport USA — strona informacyjna importera samochodów z USA

Statyczna strona zbudowana w Astro 7 z Tailwind CSS 4. Cały serwis kompiluje się do
czystego HTML bez JavaScriptu po stronie klienta (poza dwoma drobnymi skryptami:
menu mobilne i kalkulator kosztów), co daje dobre Core Web Vitals i pełną
indeksowalność treści.

## Stack i uzasadnienie

| Element | Wybór | Dlaczego |
| --- | --- | --- |
| Framework | Astro 7 (SSG) | Statyczny HTML w wyniku builda, zero JS domyślnie, komponenty i szablony bez kosztu wydajnościowego |
| Style | Tailwind CSS 4 (`@tailwindcss/vite`) | Krytyczny CSS inline'owany przy buildzie, brak nieużywanych klas w wyniku |
| Treść | Content Collections (Markdown + walidacja Zod) | Wpisy blogowe jako pliki, schemat pilnuje długości `title` i `description` |
| Sitemap | `@astrojs/sitemap` | Generowana automatycznie, spójna z kanonicznymi URL-ami |
| Formularz | zewnętrzny endpoint (Formspree/Resend) | Brak backendu do utrzymania, hosting pozostaje statyczny |
| Hosting | Cloudflare Pages / Netlify | Darmowy plan, globalny CDN, automatyczny deploy z gita |

## Uruchomienie

```bash
npm install
cp .env.example .env   # i uzupełnij PUBLIC_FORM_ENDPOINT
npm run dev            # http://localhost:4321
```

## Skrypty

| Komenda | Opis |
| --- | --- |
| `npm run dev` | serwer deweloperski z hot reload |
| `npm run build` | build produkcyjny do `dist/` |
| `npm run preview` | podgląd zbudowanej wersji |
| `npm run check` | kontrola typów w plikach `.astro` i `.ts` |
| `npm run check:seo` | audyt zbudowanego HTML: JSON-LD, jeden H1, długości `title` i `description`, liczba skryptów |
| `npm run smoke` | sprawdza, czy wszystkie podstrony zwracają 200 na uruchomionym serwerze dev |

`npm run check:seo` uruchamiaj po `npm run build` — kończy się kodem błędu, jeśli
któraś podstrona ma zbyt długi tytuł, brakujący opis albo niepoprawny JSON-LD.

## Struktura

```
src/
  components/     BaseHead (meta + JSON-LD), Header, Footer, StickyCta, ContactForm, Faq, CtaBanner, PageHero
  config/site.ts  dane firmy: NAP, telefon, WhatsApp, social media, menu
  content/blog/   wpisy blogowe w Markdown
  content.config.ts  schemat wpisów (walidacja długości pól SEO)
  data/           treści współdzielone (proces, FAQ, realizacje) i definicje landingów
  layouts/        BaseLayout: head, nawigacja, okruszki, stopka
  lib/schema.ts   generatory JSON-LD (AutoDealer, FAQPage, BlogPosting, BreadcrumbList, Service)
  pages/          podstrony; [slug].astro generuje landingi z data/landings.ts
  styles/         global.css z motywem Tailwind
scripts/          check-seo.mjs
```

## Co jest zrobione pod SEO

- **JSON-LD** na każdej podstronie: `AutoDealer` z NAP i godzinami otwarcia, `BreadcrumbList`,
  `FAQPage` tam, gdzie są pytania, `BlogPosting` na wpisach, `Service` na ofercie i landingach.
- **Kanoniczne URL-e** bez końcowego ukośnika, spójne z sitemapą (`trailingSlash: 'never'`).
- **Jeden H1** na podstronę i hierarchia nagłówków pilnowana przez `check:seo`.
- **Landingi długiego ogona** generowane z `src/data/landings.ts` — nowy landing to nowy wpis
  w tablicy, bez pisania kodu. Obecnie: Warszawa, Kanada, Copart.
- **Linkowanie wewnętrzne** między blogiem, stroną kosztów i landingami.
- **Zero zewnętrznych plików JS**; skrypty menu i kalkulatora są inline'owane przy buildzie.
- **Brak cookies** — zalecana analityka bez cookies (Plausible/Umami), dzięki czemu nie jest
  potrzebny banner zgody.

## Do uzupełnienia przed publikacją

Wszystkie miejsca wymagające danych klienta oznaczone są komentarzem `PLACEHOLDER`
lub `TODO(klient)`:

1. `src/config/site.ts` — nazwa firmy, NIP, adres, telefon, e-mail, linki do WhatsAppa
   (czat i grupa) oraz social mediów, współrzędne geograficzne.
2. `astro.config.mjs` i `public/robots.txt` — docelowa domena.
3. `.env` — `PUBLIC_FORM_ENDPOINT` dla formularza kontaktowego.
4. Zdjęcia: realizacje, zespół, `public/og-default.jpg` (1200×630) — wstawiać przez
   `astro:assets`, aby dostać automatyczne WebP i `srcset`.
5. `src/pages/polityka-prywatnosci.astro` — treść do weryfikacji prawnej.
6. Mapa Google na `/kontakt` — wstawiać jako iframe ładowany po kliknięciu, nie od razu
   (iframe Google waży około 1 MB i psuje LCP).

## Deploy

Cloudflare Pages lub Netlify: komenda builda `npm run build`, katalog wyjściowy `dist`.
Po pierwszym deployu dodać domenę, wysłać `sitemap-index.xml` w Google Search Console
i utworzyć Google Business Profile z tym samym NAP-em co w `src/config/site.ts`.
