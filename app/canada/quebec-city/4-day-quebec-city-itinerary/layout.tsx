import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "4 Day Quebec City Trip Itinerary | Quebec City",
  description:
    "Spend four days exploring Old Quebec, the Plains of Abraham, and Montmorency Falls on an immersive French-Canadian adventure built for student groups. A customizable 4 Day / 3 Night Landmark educational itinerary.",
  alternates: { canonical: "/canada/quebec-city/4-day-quebec-city-itinerary/" },
  openGraph: { title: "4 Day Quebec City Trip Itinerary | Landmark Educational Tours", description: "Spend four days exploring Old Quebec, the Plains of Abraham, and Montmorency Falls on an immersive French-Canadian adventure built for student groups.", url: "/canada/quebec-city/4-day-quebec-city-itinerary/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
