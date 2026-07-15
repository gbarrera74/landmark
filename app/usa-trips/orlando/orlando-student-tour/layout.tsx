import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Orlando Student Trip | Orlando",
  description:
    "Give your students three action packed days in Orlando exploring Disney, Universal Studios, and hands on STEM learning at the Kennedy Space Center. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/orlando/orlando-student-tour/" },
  openGraph: { title: "Orlando Student Trip | Landmark Educational Tours", description: "Give your students three action packed days in Orlando exploring Disney, Universal Studios, and hands on STEM learning at the Kennedy Space Center.", url: "/usa-trips/orlando/orlando-student-tour/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
