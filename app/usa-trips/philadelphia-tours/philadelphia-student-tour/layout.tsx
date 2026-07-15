import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Philadelphia Student Tour | Philadelphia",
  description:
    "Spend two days exploring the birthplace of American democracy, from Independence Hall and the Liberty Bell to the historic streets of Old City. A customizable 2 Day / 1 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/philadelphia-tours/philadelphia-student-tour/" },
  openGraph: { title: "Philadelphia Student Tour | Landmark Educational Tours", description: "Spend two days exploring the birthplace of American democracy, from Independence Hall and the Liberty Bell to the historic streets of Old City.", url: "/usa-trips/philadelphia-tours/philadelphia-student-tour/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
