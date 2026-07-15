import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Classical Rome & Ancient History Tour | Italy",
  description:
    "The Colosseum, Roman Forum, Palatine Hill, and Vatican: antiquity made real for history and Latin students. A customizable 7 Day / 6 Night Landmark educational itinerary.",
  alternates: { canonical: "/europe/italy/classical-rome-ancient-history-tour/" },
  openGraph: { title: "Classical Rome & Ancient History Tour | Landmark Educational Tours", description: "The Colosseum, Roman Forum, Palatine Hill, and Vatican: antiquity made real for history and Latin students.", url: "/europe/italy/classical-rome-ancient-history-tour/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
