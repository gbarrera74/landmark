import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "New Mexico School Trip | New Mexico",
  description:
    "Explore the Land of Enchantment as students connect with Native American heritage, Spanish colonial history, art, and stunning desert landscapes. A customizable 4 Day / 3 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/new-mexico-tours/new-mexico-school-trip/" },
  openGraph: { title: "New Mexico School Trip | Landmark Educational Tours", description: "Explore the Land of Enchantment as students connect with Native American heritage, Spanish colonial history, art, and stunning desert landscapes.", url: "/usa-trips/new-mexico-tours/new-mexico-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
