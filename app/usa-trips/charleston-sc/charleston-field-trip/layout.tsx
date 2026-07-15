import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Charleston Field Trip | Charleston",
  description:
    "Students explore Charleston's cobblestone streets, historic homes, and waterfront landmarks on an immersive educational journey through the Lowcountry. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/charleston-sc/charleston-field-trip/" },
  openGraph: { title: "Charleston Field Trip | Landmark Educational Tours", description: "Students explore Charleston's cobblestone streets, historic homes, and waterfront landmarks on an immersive educational journey through the Lowcountry.", url: "/usa-trips/charleston-sc/charleston-field-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
