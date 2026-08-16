/**
 * Jedyne miejsce z danymi firmy. Wszystkie podstrony, stopka, JSON-LD i CTA
 * czytaja stad, zeby NAP (nazwa/adres/telefon) byl spojny w calym serwisie -
 * niespojny NAP realnie szkodzi w lokalnym SEO.
 *
 * TODO(klient): podmienic wartosci oznaczone jako PLACEHOLDER.
 */

export const site = {
  name: 'AutoImport USA',
  legalName: 'AutoImport USA Sp. z o.o.', // PLACEHOLDER
  domain: 'https://import-aut.pl', // PLACEHOLDER
  tagline: 'Sprowadzamy samochody z USA i Kanady',
  description:
    'Sprowadzamy samochody z aukcji Copart i IAAI w USA i Kanadzie. Transport, odprawa celna, akcyza i naprawa — pod klucz, ze stala cena ustalona przed zakupem.',
  foundingYear: 2016, // PLACEHOLDER
  vatId: 'PL0000000000', // PLACEHOLDER (NIP)
} as const;

export const contact = {
  phone: '+48 600 000 000', // PLACEHOLDER
  phoneHref: 'tel:+48600000000', // PLACEHOLDER
  email: 'kontakt@import-aut.pl', // PLACEHOLDER
  // Bezposredni czat 1:1 (numer w formacie miedzynarodowym bez znakow specjalnych).
  whatsapp: 'https://wa.me/48600000000', // PLACEHOLDER
  // Zaproszenie do grupy z ofertami - klient generuje je w WhatsAppie.
  whatsappGroup: 'https://chat.whatsapp.com/XXXXXXXXXXXXXXX', // PLACEHOLDER
  hours: 'Pon.–Pt. 9:00–18:00, Sob. 10:00–14:00',
} as const;

export const address = {
  street: 'ul. Przykladowa 12', // PLACEHOLDER
  city: 'Warszawa', // PLACEHOLDER
  postalCode: '00-001', // PLACEHOLDER
  region: 'mazowieckie', // PLACEHOLDER
  country: 'PL',
  // Wspolrzedne placu / biura - uzywane w JSON-LD (LocalBusiness).
  lat: 52.2297, // PLACEHOLDER
  lng: 21.0122, // PLACEHOLDER
  mapsUrl: 'https://maps.google.com/?q=52.2297,21.0122', // PLACEHOLDER
} as const;

export const social = [
  { name: 'Facebook', url: 'https://facebook.com/', icon: 'facebook' }, // PLACEHOLDER
  { name: 'Instagram', url: 'https://instagram.com/', icon: 'instagram' }, // PLACEHOLDER
  { name: 'YouTube', url: 'https://youtube.com/', icon: 'youtube' }, // PLACEHOLDER
  { name: 'TikTok', url: 'https://tiktok.com/', icon: 'tiktok' }, // PLACEHOLDER
] as const;

export const nav = [
  { label: 'Jak to dziala', href: '/jak-to-dziala' },
  { label: 'Oferta', href: '/oferta' },
  { label: 'Realizacje', href: '/realizacje' },
  { label: 'Koszty', href: '/koszty-sprowadzenia-samochodu-z-usa' },
  { label: 'Blog', href: '/blog' },
  { label: 'O nas', href: '/o-nas' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;
