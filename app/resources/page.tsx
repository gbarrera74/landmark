/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

export const BROCHURE_PDF = '/brochure/landmark-2026-2027-travel-brochure.pdf'

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

const RESOURCES = [
  {
    title: 'About Landmark',
    body: 'Meet the team behind your trip. We are an employee-owned company built by people who believe every student deserves to see the world.',
    href: '/about-landmark/',
    cta: 'Meet the team',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
  },
  {
    title: 'Travel Safety & Support',
    body: 'How we keep students safe on the road — plus travel protection you can add to any trip for peace of mind before you depart.',
    href: '/travel-safety-support/',
    cta: 'Safety & protection',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>),
  },
  {
    title: 'Frequently Asked Questions',
    body: 'You have questions, we have answers — from dietary restrictions and chaperone ratios to payments and cancellations.',
    href: '/faq/',
    cta: 'Read the FAQ',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>),
  },
  {
    title: 'Accreditations & Certifications',
    body: 'The professional standards and memberships that keep our educational travel safe, transparent, and academically sound.',
    href: '/accreditations-certifications/',
    cta: 'View credentials',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>),
  },
  {
    title: 'The Blog',
    body: 'Destination guides, itinerary ideas, fundraising tips, and planning advice written for teachers and trip organizers.',
    href: '/blog/',
    cta: 'Read the blog',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>),
  },
  {
    title: 'Testimonials',
    body: 'Hear from the teachers, organizers, and families who have travelled with Landmark.',
    href: '/testimonials/',
    cta: 'Read reviews',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>),
  },
  {
    title: 'Plan a Trip',
    body: 'Book a call with a Travel Consultant and walk through your goals, group, and destinations.',
    href: '/plan-a-trip/',
    cta: 'Book a call',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>),
  },
  {
    title: 'Privacy Policy',
    body: 'What information we collect, how we use it, and the choices you have.',
    href: '/privacy-policy/',
    cta: 'Read the policy',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>),
  },
]

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={<>Everything You Need to <em>Plan With Confidence</em></>}
        subtitle="Guides, answers, and tools for teachers and trip organizers — from the first idea to the day your group departs."
        image="/images/landmark/philadelphia-hero.jpg"
        breadcrumb={[{ label: 'Resources' }]}
      />

      {/* Brochure — the featured resource */}
      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ilm-intro-grid">
            <div className="ilm-intro-media">
              <img src="/images/landmark/brochure-cover.png" alt="The Landmark Educational Tours 2026-2027 travel brochure cover" />
            </div>
            <div className="ilm-intro-body">
              <span className="ile-eyebrow">Free Download</span>
              <h2 className="lm-h2-amber">The 2026&ndash;2027 Travel Brochure</h2>
              <p>Forty-four pages of destinations, sample itineraries, trip inclusions, and everything our team can build for your group &mdash; plus a look at the Landmark Leaders who travel alongside your students.</p>
              <p className="lm-after-grid">
                <a href={BROCHURE_PDF} className="ile-btn ile-btn--primary" target="_blank" rel="noopener noreferrer" download>
                  Download the Brochure (PDF) {ArrowR}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packing list */}
      <section className="ile-section ile-section--cream" aria-labelledby="res-packing-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Before You Go</span>
            <h2 id="res-packing-h" className="lm-h2-amber">OUR PACKING LIST</h2>
            <p className="ile-lead lm-center-lead">A detailed, student-tested packing list so nobody arrives without a toothbrush.</p>
          </div>
          <p className="ile-center" style={{ marginTop: 28 }}>
            <img
              className="lm-reg-packing-img"
              src="/register/Packling-List-for-Website-Trial.webp"
              alt="Landmark Educational Tours packing list infographic — what students should bring on a school trip"
              loading="lazy"
            />
          </p>
        </div>
      </section>

      {/* Resource cards */}
      <section className="ile-section ile-section--white" aria-labelledby="res-more-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Helpful Links</span>
            <h2 id="res-more-h" className="lm-h2-amber">MORE RESOURCES</h2>
          </div>
          <div className="ilp-grid-4" style={{ marginTop: 44 }}>
            {RESOURCES.map((r) => (
              <Link className="ilm-card lm-res-card" href={r.href} key={r.title}>
                <div className="ilm-card-ico">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
                <span className="ilm-post-more">{r.cta} {ArrowR}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready when you are"
        title="Let’s start planning your trip"
        text="Tell us your group, destination, and travel window — a Landmark Travel Consultant will build a custom itinerary and quote at no cost."
        primary={{ label: 'Get a Quote', href: '/get-a-quote/' }}
        secondary={{ label: 'Explore Destinations', href: '/destinations/' }}
      />

      <JsonLd data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Resources', path: '/resources/' },
      ])} />
    </>
  )
}
