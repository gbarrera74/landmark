import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "NYC Performing Arts Tour | New York City",
  description:
    "Immerse your student performers in the magic of Broadway with backstage access, hands-on workshops, and a world-class show in the heart of Times Square. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/new-york-city-tours/nyc-performing-arts-tour/" },
  openGraph: { title: "NYC Performing Arts Tour | Landmark Educational Tours", description: "Immerse your student performers in the magic of Broadway with backstage access, hands-on workshops, and a world-class show in the heart of Times Square.", url: "/usa-trips/new-york-city-tours/nyc-performing-arts-tour/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
