import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "East Coast Destinations",
  description:
    "Educational field trips and student tours across the East Coast: Washington D.C., New York, Boston, Philadelphia, Charleston, Savannah, and more. Customizable and curriculum-aligned.",
  alternates: { canonical: "/east-coast/" },
  openGraph: {
    title: "East Coast Destinations | Landmark Educational Tours",
    description: "From the founding cities of the Republic to the living history of the coast: customizable, curriculum-aligned student trips up and down the Eastern Seaboard.",
    url: "/east-coast/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
