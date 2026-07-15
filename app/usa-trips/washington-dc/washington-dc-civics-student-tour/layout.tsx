import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Civics Focused Washington, DC School Trip | Washington, D.C.",
  description:
    "A three day civics immersion in Washington, DC where students step inside the institutions that shape American democracy. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/washington-dc/washington-dc-civics-student-tour/" },
  openGraph: { title: "Civics Focused Washington, DC School Trip | Landmark Educational Tours", description: "A three day civics immersion in Washington, DC where students step inside the institutions that shape American democracy.", url: "/usa-trips/washington-dc/washington-dc-civics-student-tour/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
