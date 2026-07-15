import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mackinac Island Field Trip | Mackinac Island",
  description:
    "Give students a hands-on field trip to historic Mackinac Island, where preserved sites and interactive activities bring classroom lessons to life. A customizable 2 Day / 1 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/mackinac-island-tours/mackinac-island-field-trip/" },
  openGraph: { title: "Mackinac Island Field Trip | Landmark Educational Tours", description: "Give students a hands-on field trip to historic Mackinac Island, where preserved sites and interactive activities bring classroom lessons to life.", url: "/usa-trips/mackinac-island-tours/mackinac-island-field-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
