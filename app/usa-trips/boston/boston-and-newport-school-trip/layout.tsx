import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Boston & Newport School Trip | Boston",
  description:
    "A four day journey through Boston's founding history and Newport's Gilded Age mansions built for curious student groups. A customizable 4 Day / 3 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/boston/boston-and-newport-school-trip/" },
  openGraph: { title: "Boston & Newport School Trip | Landmark Educational Tours", description: "A four day journey through Boston's founding history and Newport's Gilded Age mansions built for curious student groups.", url: "/usa-trips/boston/boston-and-newport-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
