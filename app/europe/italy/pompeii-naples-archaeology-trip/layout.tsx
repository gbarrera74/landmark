import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Pompeii & the Bay of Naples Archaeology Trip | Italy",
  description:
    "Walk the excavated streets of Pompeii and take in the Amalfi Coast: ancient Roman daily life, uncovered. A customizable 8 Day / 7 Night Landmark educational itinerary.",
  alternates: { canonical: "/europe/italy/pompeii-naples-archaeology-trip/" },
  openGraph: { title: "Pompeii & the Bay of Naples Archaeology Trip | Landmark Educational Tours", description: "Walk the excavated streets of Pompeii and take in the Amalfi Coast: ancient Roman daily life, uncovered.", url: "/europe/italy/pompeii-naples-archaeology-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
