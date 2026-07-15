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

// Countries Landmark actually operates trips in — grounds `areaServed`.
const SERVED_COUNTRIES = [
  'United States', 'Canada', 'Italy', 'Ireland', 'England',
  'France', 'Norway', 'Japan', 'South Korea', 'Costa Rica',
]

// Topics/entities Landmark is demonstrably expert in — strong AEO/AIO entity
// association (helps AI answer engines recommend Landmark for these).
const KNOWS_ABOUT = [
  'Educational travel', 'Student group travel', 'School field trips',
  'Curriculum-aligned educational tours', 'K-12 class trips',
  'Washington D.C. student trips', 'Historical and cultural field trips',
  'Performing arts student trips', 'STEM field trips',
  'Civics and government student trips', 'International educational tours',
  'Private group travel for schools and youth organizations',
]

export function organization(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: 'Landmark',
    url: SITE.url,
    logo: { '@type': 'ImageObject', url: `${SITE.url}/images/landmark-logo.png` },
    image: `${SITE.url}/images/landmark-logo.png`,
    description:
      'Landmark Educational Tours is a full-service student travel company that plans and operates safe, fully customized, curriculum-aligned educational field trips and group tours for schools, teachers, and youth organizations across the United States and internationally. Every trip is private to the group and hand-built by a dedicated Travel Consultant.',
    slogan: 'Safe, custom, curriculum-aligned student travel.',
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
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      email: SITE.email,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
    areaServed: SERVED_COUNTRIES.map((name) => ({ '@type': 'Country', name })),
    knowsAbout: KNOWS_ABOUT,
    // California Seller of Travel registration (real, shown in the footer).
    identifier: {
      '@type': 'PropertyValue',
      name: 'California Seller of Travel (CST)',
      value: SITE.cst,
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
    description:
      'Safe, fully customized, curriculum-aligned educational field trips and student group tours across the U.S. and internationally.',
    inLanguage: 'en-US',
    publisher: { '@id': `${SITE.url}/#organization` },
  }
}

// ItemList for listing/catalog pages (destination indexes, region hubs, blog
// index). Enumerates real links so AI answer engines can see the catalog.
export function itemList(name: string, items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: `${SITE.url}${it.path}`,
    })),
  }
}

// A destination hub: the place + the trips Landmark runs there, as one @graph.
export function destinationGraph(d: {
  name: string
  description: string
  path: string
  image?: string
  trips: { name: string; path: string }[]
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristDestination',
        '@id': `${SITE.url}${d.path}#destination`,
        name: d.name,
        description: d.description,
        url: `${SITE.url}${d.path}`,
        ...(d.image ? { image: `${SITE.url}${d.image}` } : {}),
        includesAttraction: d.trips.map((t) => ({ '@type': 'TouristAttraction', name: t.name })),
      },
      {
        '@type': 'ItemList',
        name: `${d.name} student trips`,
        numberOfItems: d.trips.length,
        itemListElement: d.trips.map((t, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: t.name,
          url: `${SITE.url}${t.path}`,
        })),
      },
    ],
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
    touristType: ['Students', 'Educational groups', 'K-12 school groups'],
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
