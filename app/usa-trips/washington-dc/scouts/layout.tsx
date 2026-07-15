import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Scout Trips to Washington, D.C. | Washington, D.C.",
  description:
    "Give your scout troop three unforgettable days in the nation's capital, connecting landmarks and museums with leadership, service, and civic pride. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/washington-dc/scouts/" },
  openGraph: { title: "Scout Trips to Washington, D.C. | Landmark Educational Tours", description: "Give your scout troop three unforgettable days in the nation's capital, connecting landmarks and museums with leadership, service, and civic pride.", url: "/usa-trips/washington-dc/scouts/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
