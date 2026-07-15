import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Tours to Canada",
  description:
    "Customizable Canada educational tours and student trips to Quebec City and Montreal: French immersion, colonial history, and safe, guided, curriculum-aligned travel.",
  alternates: { canonical: "/canada/" },
  openGraph: {
    title: "Educational Tours to Canada | Landmark Educational Tours",
    description: "French heritage and walled cities just across the northern border: safe, guided, curriculum-aligned student trips to Quebec City and Montreal.",
    url: "/canada/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
