import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "3 Day Quebec City Winter Itinerary | Quebec City",
  description:
    "A three day winter journey through historic Quebec City, blending French Canadian culture, iconic landmarks, and hands-on seasonal adventure for student groups. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/international/canada/quebec-city/3-day-quebec-city-winter-itinerary/" },
  openGraph: { title: "3 Day Quebec City Winter Itinerary | Landmark Educational Tours", description: "A three day winter journey through historic Quebec City, blending French Canadian culture, iconic landmarks, and hands-on seasonal adventure for student groups.", url: "/international/canada/quebec-city/3-day-quebec-city-winter-itinerary/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
