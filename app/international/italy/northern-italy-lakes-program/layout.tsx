import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Northern Italy & the Lakes Program | Italy",
  description:
    "Milan, Lake Como, and the Italian Lakes: art, geography, and Leonardo’s Last Supper. A customizable 8 Day / 7 Night Landmark educational itinerary.",
  alternates: { canonical: "/international/italy/northern-italy-lakes-program/" },
  openGraph: { title: "Northern Italy & the Lakes Program | Landmark Educational Tours", description: "Milan, Lake Como, and the Italian Lakes: art, geography, and Leonardo’s Last Supper.", url: "/international/italy/northern-italy-lakes-program/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
