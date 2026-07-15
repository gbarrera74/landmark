import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "5 Day Quebec City Trip Itinerary | Quebec City",
  description:
    "Spend five days exploring Old Quebec, Montmorency Falls, and French-Canadian culture on an educational adventure built for student groups. A customizable 5 Day / 4 Night Landmark educational itinerary.",
  alternates: { canonical: "/canada/quebec-city/5-day-quebec-city-itinerary/" },
  openGraph: { title: "5 Day Quebec City Trip Itinerary | Landmark Educational Tours", description: "Spend five days exploring Old Quebec, Montmorency Falls, and French-Canadian culture on an educational adventure built for student groups.", url: "/canada/quebec-city/5-day-quebec-city-itinerary/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
