import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Historic Philadelphia School Trip | Philadelphia",
  description:
    "Trace the birthplace of American democracy across three days of hands-on history, iconic landmarks, and world-class museums. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/philadelphia-tours/historic-philadelphia-school-trip/" },
  openGraph: { title: "Historic Philadelphia School Trip | Landmark Educational Tours", description: "Trace the birthplace of American democracy across three days of hands-on history, iconic landmarks, and world-class museums.", url: "/usa-trips/philadelphia-tours/historic-philadelphia-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
