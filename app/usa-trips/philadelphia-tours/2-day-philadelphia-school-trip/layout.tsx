import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "2 Day Philadelphia School Trip | Philadelphia",
  description:
    "Spend two days exploring the birthplace of American democracy with iconic landmarks, world-class museums, and hands-on history for student groups. A customizable 2 Day / 1 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/philadelphia-tours/2-day-philadelphia-school-trip/" },
  openGraph: { title: "2 Day Philadelphia School Trip | Landmark Educational Tours", description: "Spend two days exploring the birthplace of American democracy with iconic landmarks, world-class museums, and hands-on history for student groups.", url: "/usa-trips/philadelphia-tours/2-day-philadelphia-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
