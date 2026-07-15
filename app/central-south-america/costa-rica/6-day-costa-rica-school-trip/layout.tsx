import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "6 Day Costa Rica School Trip | Costa Rica",
  description:
    "Give students six days of rainforests, volcanoes, and coastlines with hands-on eco-adventures and cultural immersion across Costa Rica. A customizable 6 Day / 5 Night Landmark educational itinerary.",
  alternates: { canonical: "/central-south-america/costa-rica/6-day-costa-rica-school-trip/" },
  openGraph: { title: "6 Day Costa Rica School Trip | Landmark Educational Tours", description: "Give students six days of rainforests, volcanoes, and coastlines with hands-on eco-adventures and cultural immersion across Costa Rica.", url: "/central-south-america/costa-rica/6-day-costa-rica-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
