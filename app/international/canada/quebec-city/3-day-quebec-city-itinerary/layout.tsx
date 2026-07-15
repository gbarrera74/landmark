import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "3 Day Quebec City Trip Itinerary | Quebec City",
  description:
    "Spend three days exploring Quebec City's fortified old town, iconic Château Frontenac, and French-Canadian culture on an immersive student adventure. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/international/canada/quebec-city/3-day-quebec-city-itinerary/" },
  openGraph: { title: "3 Day Quebec City Trip Itinerary | Landmark Educational Tours", description: "Spend three days exploring Quebec City's fortified old town, iconic Château Frontenac, and French-Canadian culture on an immersive student adventure.", url: "/international/canada/quebec-city/3-day-quebec-city-itinerary/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
