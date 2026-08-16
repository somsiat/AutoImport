import { site, contact, address, social } from '~/config/site';

const abs = (path: string) => new URL(path, site.domain).href;

/** Glowna encja firmy. Jeden @id, do ktorego odwoluja sie pozostale schematy. */
export const organizationId = `${site.domain}/#organization`;

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    '@id': organizationId,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.domain,
    telephone: contact.phone,
    email: contact.email,
    vatID: site.vatId,
    foundingDate: String(site.foundingYear),
    image: abs('/og-default.jpg'),
    priceRange: 'PLN',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      postalCode: address.postalCode,
      addressRegion: address.region,
      addressCountry: address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: address.lat,
      longitude: address.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '14:00',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Polska',
    },
    sameAs: social.map((s) => s.url),
  };
}

export function faqSchema(items: readonly { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: readonly { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.href),
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  publishedAt: Date;
  updatedAt?: Date;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    url: abs(input.path),
    mainEntityOfPage: abs(input.path),
    image: abs(input.image ?? '/og-default.jpg'),
    datePublished: input.publishedAt.toISOString(),
    dateModified: (input.updatedAt ?? input.publishedAt).toISOString(),
    author: { '@type': 'Person', name: input.author },
    publisher: { '@id': organizationId },
  };
}

export function serviceSchema(input: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: abs(input.path),
    serviceType: 'Import samochodow z USA',
    provider: { '@id': organizationId },
    areaServed: { '@type': 'Country', name: 'Polska' },
  };
}
