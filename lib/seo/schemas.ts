const SITE_URL = (process.env.SITE_URL ?? 'https://landmarkeducationaltours.com').replace(/\/$/, '')

export const SITE = {
  url: SITE_URL,
  name: 'Landmark Educational Tours',
  shortName: 'Landmark',
  phone: '+1-888-886-2781',
  phoneDisplay: '888-886-2781',
  email: 'info@landmarkeducationaltours.com',
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
