import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import BlogExplorer from '@/components/BlogExplorer'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb, itemList } from '@/lib/seo/schemas'
import { getIndex } from '@/lib/blog'
import { tagCards, facetLists } from '@/lib/blogFacets'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Destination guides, trip-planning tips, and educational travel ideas for teachers and group leaders planning student trips with Landmark Educational Tours. Filter by destination or trip type.',
  alternates: { canonical: '/blog/' },
  openGraph: { title: 'Blog | Landmark Educational Tours', description: 'Destination guides and planning tips for student group travel.', url: '/blog/' },
}

export default function BlogIndex() {
  const cards = tagCards(getIndex())
  // Only show chips with real depth (>= 5 posts); thinner destinations/types
  // still appear under "All". Keeps the filter to ~14 useful chips, not 27.
  const { destinations, types } = facetLists(cards, 5)

  return (
    <>
      <PageHero
        eyebrow="The Landmark Blog"
        title={<>Travel Inspiration &amp; <em>Trip Ideas</em></>}
        subtitle="Destination guides, planning tips, and classroom-to-landmark ideas for educators leading student groups. Filter by destination or trip type."
        image="/images/landmark/hero-nyc.jpg"
        breadcrumb={[{ label: 'Blog' }]}
      />
      <section className="ile-section ile-section--cream">
        <div className="ile-container">
          <BlogExplorer cards={cards} destinations={destinations} types={types} />
        </div>
      </section>
      <BrochureBand />
      <JsonLd data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog/' }])} />
      <JsonLd data={itemList('Landmark Educational Tours blog', cards.map((p) => ({ name: p.title, path: `/blog/${p.slug}/` })))} />
    </>
  )
}
