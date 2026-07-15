import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "New Orleans Field Trip | New Orleans",
  description:
    "A four day educational journey through New Orleans culture, history, and HBCU campuses built for student groups. A customizable 4 Day / 3 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/new-orleans/new-orleans-field-trip/" },
  openGraph: { title: "New Orleans Field Trip | Landmark Educational Tours", description: "A four day educational journey through New Orleans culture, history, and HBCU campuses built for student groups.", url: "/usa-trips/new-orleans/new-orleans-field-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
