import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "7 Day Costa Rica School Trip | Costa Rica",
  description:
    "A seven day journey through Costa Rica's rainforests, volcanoes, and wildlife, blending outdoor adventure with hands on lessons in conservation and culture. A customizable 7 Day / 6 Night Landmark educational itinerary.",
  alternates: { canonical: "/international/costa-rica/7-day-costa-rica-school-trip/" },
  openGraph: { title: "7 Day Costa Rica School Trip | Landmark Educational Tours", description: "A seven day journey through Costa Rica's rainforests, volcanoes, and wildlife, blending outdoor adventure with hands on lessons in conservation and culture.", url: "/international/costa-rica/7-day-costa-rica-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
