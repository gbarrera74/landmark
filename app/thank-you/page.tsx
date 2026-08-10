import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import ThankYouConversion from '@/components/ThankYouConversion'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thanks for reaching out to Landmark Educational Tours — a travel specialist will be in touch shortly.',
  robots: { index: false, follow: true },
}

export default function ThankYou() {
  return (
    <>
      {/* Google Ads conversion. See the component for why this is sent
          explicitly rather than left to a GA4 URL-matching rule. */}
      <ThankYouConversion />
      <PageHero
        eyebrow="We got it"
        title={<>Thank <em>you</em></>}
        subtitle="Your request is in — a Landmark travel specialist will reach out shortly to start planning your trip."
        breadcrumb={[{ label: 'Thank You' }]}
      />

      <section className="ile-section ile-section--white">
        <div className="ile-container ile-center lm-narrow">
          <span className="ile-eyebrow">What happens next</span>
          <h2 className="lm-h2-amber">We&rsquo;ll be in touch within one business day</h2>
          <p className="ile-lead lm-center-lead">A specialist will review your request and follow up to learn more about your group and start shaping the itinerary. In the meantime, feel free to explore where your students could go.</p>
        </div>
      </section>

      <CtaBand
        eyebrow="While you wait"
        title="Explore where your students could go"
        text="Browse our destinations and itineraries for inspiration on your group’s next educational adventure."
        primary={{ label: 'Explore Destinations', href: '/destinations/' }}
        secondary={{ label: 'Read the Blog', href: '/blog/' }}
      />
    </>
  )
}
