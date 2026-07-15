import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "5 Day Quebec City Winter Itinerary | Quebec City",
  description:
    "Give students five winter days in Quebec City exploring historic landmarks, French-Canadian culture, and snowy outdoor adventures. A customizable 5 Day / 4 Night Landmark educational itinerary.",
  alternates: { canonical: "/canada/quebec-city/5-day-quebec-city-winter-itinerary/" },
  openGraph: { title: "5 Day Quebec City Winter Itinerary | Landmark Educational Tours", description: "Give students five winter days in Quebec City exploring historic landmarks, French-Canadian culture, and snowy outdoor adventures.", url: "/canada/quebec-city/5-day-quebec-city-winter-itinerary/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
