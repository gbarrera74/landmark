import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "Paris & the French Riviera Educational Tour | Landmark Educational Tours" },
  description:
    "Nine days in France, from Versailles, the Louvre, and a Seine cruise in Paris to Saint-Paul-de-Vence, Monaco, and Disneyland Paris. A customizable 9 Day / 8 Night Landmark educational itinerary.",
  alternates: { canonical: "/europe/france/paris-french-riviera-educational-tour/" },
  openGraph: { title: "Paris & the French Riviera Educational Tour | Landmark Educational Tours", description: "Nine days in France, from Versailles, the Louvre, and a Seine cruise in Paris to Saint-Paul-de-Vence, Monaco, and Disneyland Paris.", url: "/europe/france/paris-french-riviera-educational-tour/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
