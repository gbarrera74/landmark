import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'News and stories from the Irish Life Experience — meet this summer\'s team, follow student adventures, and get a feel for the ILE family.',
}

const POSTS = [
  { title: 'Meet James Stone', date: 'May 12, 2026', img: '/images/photo-0887.jpg', excerpt: "James began his ILE journey back in 2014 — discover what's kept him coming back to Ireland summer after summer." },
  { title: 'Meet Natalie Helser', date: 'May 10, 2026', img: '/images/testimonial-eva.jpg', excerpt: 'For Natalie, Ireland holds a very special place in her heart. Meet one of the friendly faces guiding students this summer.' },
  { title: 'Meet Tyler Krell', date: 'May 7, 2026', img: '/images/photo-9343.jpg', excerpt: 'Tyler is committed to making this the most unforgettable summer yet. Get to know one of our 2026 counsellors.' },
  { title: 'Up Galway!', date: 'July 2, 2024', img: '/images/photo-8282.jpg', excerpt: 'A roar from the stands at Croke Park as Galway take the Leinster Hurling Final — a day our students will never forget.' },
  { title: 'An International Perspective', date: 'June 18, 2024', img: '/images/photo-1749.jpg', excerpt: 'What happens when teenagers from across North America trade their hometowns for a summer in Ireland? Perspective.' },
  { title: 'A Day on the Aran Islands', date: 'June 5, 2024', img: '/images/photo-2063.jpg', excerpt: 'Bicycles, sea air, and Gaelic spoken by locals — a look at one of the most magical days of the program.' },
]

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title={<>News &amp; <em>Stories</em></>}
        subtitle="Meet the team, follow this summer's adventures, and get a feel for the ILE family."
        breadcrumb={[{ label: 'Blog' }]}
      />
      <section className="ile-section ile-section--cream">
        <div className="ile-container">
          <div className="ilm-blog-grid">
            {POSTS.map((p) => (
              <article className="ilm-post" key={p.title}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="ilm-post-img"><img src={p.img} alt={p.title} loading="lazy" /></div>
                <div className="ilm-post-body">
                  <div className="ilm-post-date">{p.date}</div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Want to Be Part of the Story?" />
    </main>
  )
}
