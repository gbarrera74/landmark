import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "African American History Washington, DC School Trip | Washington, D.C.",
  description:
    "Trace three days of African American history across Washington, D.C., from the MLK Memorial to the Smithsonian and Frederick Douglass's home. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/washington-d-c/african-american-history-dc-student-tour/" },
  openGraph: { title: "African American History Washington, DC School Trip | Landmark Educational Tours", description: "Trace three days of African American history across Washington, D.C., from the MLK Memorial to the Smithsonian and Frederick Douglass's home.", url: "/usa-trips/washington-d-c/african-american-history-dc-student-tour/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
