import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Boston & Salem School Trip | Boston",
  description:
    "Blend Boston's revolutionary landmarks with Salem's haunted history on a four day journey students will remember. A customizable 4 Day / 3 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/boston/boston-and-salem-school-trip/" },
  openGraph: { title: "Boston & Salem School Trip | Landmark Educational Tours", description: "Blend Boston's revolutionary landmarks with Salem's haunted history on a four day journey students will remember.", url: "/usa-trips/boston/boston-and-salem-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
