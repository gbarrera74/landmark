import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Orlando Extended Student Tour | Orlando",
  description:
    "A five day Orlando adventure pairing Walt Disney World and Universal Studios with immersive group activities students will remember forever. A customizable 5 Day / 4 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/orlando-schooltrips/orlando-student-tour-extended/" },
  openGraph: { title: "Orlando Extended Student Tour | Landmark Educational Tours", description: "A five day Orlando adventure pairing Walt Disney World and Universal Studios with immersive group activities students will remember forever.", url: "/usa-trips/orlando-schooltrips/orlando-student-tour-extended/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
