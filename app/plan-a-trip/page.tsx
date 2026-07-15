import Link from 'next/link'
import PageHero from '@/components/PageHero'
import HubSpotMeetings from '@/components/HubSpotMeetings'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

export default function PlanATripPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan a Trip"
        title={<>Let&rsquo;s Plan Your <em>Trip</em></>}
        subtitle="Book a call with a Landmark specialist. Expertise when you need it, fun when you want it."
        image="/images/landmark/dc-hero.jpg"
        breadcrumb={[{ label: 'Plan a Trip' }]}
      />

      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Book a Call</span>
            <h2 className="lm-h2-amber">TALK TO A TRAVEL CONSULTANT</h2>
            <p className="ile-lead lm-center-lead">
              Pick a time that works for you and one of our specialists will walk through your goals, group, and destinations, then handle the heavy lifting from there.
            </p>
          </div>
          <div style={{ marginTop: 36, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
            <HubSpotMeetings />
          </div>
        </div>
      </section>

      <section className="ile-section ile-section--cream" aria-labelledby="pt-quote-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Prefer to send details?</span>
            <h2 id="pt-quote-h" className="lm-h2-amber">GET A CUSTOMIZED QUOTE</h2>
            <p className="ile-lead lm-center-lead">
              Not sure what you are looking for? Provide a few details and let our specialists do all of the heavy lifting.
            </p>
          </div>
          <div className="ile-center lm-after-grid">
            <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Request a Free Quote</Link>
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Plan a Trip', path: '/plan-a-trip/' },
      ])} />
    </>
  )
}
