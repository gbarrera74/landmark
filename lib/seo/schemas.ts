const SITE_URL = (process.env.SITE_URL ?? 'https://landmarkeducationaltours.com').replace(/\/$/, '')

export const SITE = {
  url: SITE_URL,
  name: 'Landmark Educational Tours',
  shortName: 'Landmark',
  phone: '+1-888-886-2781',
  phoneDisplay: '888-886-2781',
  email: 'Hello@landmarkeducationaltours.com',
  // California Seller of Travel registration (shown in footer)
  cst: '2168995-50',
  address: {
    street: '1 Central Street, Suite 205',
    city: 'Middleton',
    region: 'MA',
    postalCode: '01949',
    country: 'US',
  },
  social: {
    facebook: 'https://www.facebook.com/LandmarkEducationalTours/',
    instagram: 'https://www.instagram.com/landmarkedutours/',
    linkedin: 'https://www.linkedin.com/company/landmarkeducationaltours/',
    tiktok: 'https://www.tiktok.com/@landmarkedutours',
  } as Record<string, string>,
}

export function organization(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: 'Landmark',
    url: SITE.url,
    logo: `${SITE.url}/images/landmark-logo.png`,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    sameAs: Object.values(SITE.social).filter(Boolean),
  }
}

export function website(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': `${SITE.url}/#organization` },
  }
}

export function breadcrumb(items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  }
}

export function touristTrip(t: {
  name: string
  description: string
  path: string
  days?: { name: string; description?: string }[]
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: t.name,
    description: t.description,
    url: `${SITE.url}${t.path}`,
    provider: { '@id': `${SITE.url}/#organization` },
    ...(t.days
      ? {
          itinerary: {
            '@type': 'ItemList',
            numberOfItems: t.days.length,
            itemListElement: t.days.map((d, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: { '@type': 'TouristAttraction', name: d.name, ...(d.description ? { description: d.description } : {}) },
            })),
          },
        }
      : {}),
  }
}
