import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "4 Day Quebec City Winter Itinerary | Quebec City",
  description:
    "Give students four unforgettable days exploring historic Old Quebec, iconic landmarks, and thrilling winter activities in Canada's oldest fortified city. A customizable 4 Day / 3 Night Landmark educational itinerary.",
  alternates: { canonical: "/canada/quebec-city/4-day-quebec-city-winter-itinerary/" },
  openGraph: { title: "4 Day Quebec City Winter Itinerary | Landmark Educational Tours", description: "Give students four unforgettable days exploring historic Old Quebec, iconic landmarks, and thrilling winter activities in Canada's oldest fortified city.", url: "/canada/quebec-city/4-day-quebec-city-winter-itinerary/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
