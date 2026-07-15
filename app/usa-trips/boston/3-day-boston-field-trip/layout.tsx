import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "3 Day Boston Field Trip | Boston",
  description:
    "Trace Boston's revolutionary roots across three days of hands-on history, iconic landmarks, and student-friendly exploration. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/boston/3-day-boston-field-trip/" },
  openGraph: { title: "3 Day Boston Field Trip | Landmark Educational Tours", description: "Trace Boston's revolutionary roots across three days of hands-on history, iconic landmarks, and student-friendly exploration.", url: "/usa-trips/boston/3-day-boston-field-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
