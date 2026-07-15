import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Montreal Student Trip | Montreal",
  description:
    "Explore Old Montreal, immerse in French-Canadian culture, and enjoy hands-on learning across three unforgettable days built for student groups. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/canada/montreal/montreal-student-trip/" },
  openGraph: { title: "Montreal Student Trip | Landmark Educational Tours", description: "Explore Old Montreal, immerse in French-Canadian culture, and enjoy hands-on learning across three unforgettable days built for student groups.", url: "/canada/montreal/montreal-student-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
