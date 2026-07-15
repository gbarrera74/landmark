import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "New Orleans Student Tour | New Orleans",
  description:
    "Spend two immersive days exploring the French Quarter, Cajun cooking, and jazz heritage that make the Crescent City unforgettable for student groups. A customizable 2 Day / 1 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/new-orleans-tours/new-orleans-student-tour/" },
  openGraph: { title: "New Orleans Student Tour | Landmark Educational Tours", description: "Spend two immersive days exploring the French Quarter, Cajun cooking, and jazz heritage that make the Crescent City unforgettable for student groups.", url: "/usa-trips/new-orleans-tours/new-orleans-student-tour/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
