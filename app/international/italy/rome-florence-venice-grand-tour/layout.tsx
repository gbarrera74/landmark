import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Rome, Florence & Venice Grand Tour | Italy",
  description:
    "Italy’s three essential cities in one itinerary: history, art, and language across the whole peninsula. A customizable 10 Day / 9 Night Landmark educational itinerary.",
  alternates: { canonical: "/international/italy/rome-florence-venice-grand-tour/" },
  openGraph: { title: "Rome, Florence & Venice Grand Tour | Landmark Educational Tours", description: "Italy’s three essential cities in one itinerary: history, art, and language across the whole peninsula.", url: "/international/italy/rome-florence-venice-grand-tour/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
