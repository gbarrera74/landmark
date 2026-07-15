import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogListing from '@/components/BlogListing'
import { getPageCount } from '@/lib/blog'

export function generateStaticParams() {
  const total = getPageCount()
  const params = []
  for (let n = 2; n <= total; n++) params.push({ n: String(n) })
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }): Promise<Metadata> {
  const { n } = await params
  return {
    title: `Blog (Page ${n}) | Landmark Educational Tours`,
    description: 'More destination guides and trip-planning tips for educational student travel.',
    alternates: { canonical: `/blog/page/${n}/` },
    robots: { index: false, follow: true },
  }
}

export default async function BlogPaged({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params
  const page = Number(n)
  if (!Number.isInteger(page) || page < 2 || page > getPageCount()) notFound()
  return <BlogListing page={page} />
}
