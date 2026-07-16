import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "STEM & STEAM Focused Washington, DC School Trip | Washington, D.C.",
  description:
    "A three-day STEM and STEAM immersion in Washington, DC: the National Air and Space Museum, Natural History, the International Spy Museum, and the Space Shuttle Discovery. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/washington-dc/stem-washington-dc-school-trip/" },
  openGraph: { title: "STEM & STEAM Focused Washington, DC School Trip | Landmark Educational Tours", description: "A three-day STEM and STEAM immersion in Washington, DC where students explore real spacecraft, science labs, and the Smithsonian's greatest discoveries.", url: "/usa-trips/washington-dc/stem-washington-dc-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
