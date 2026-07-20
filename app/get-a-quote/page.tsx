import PageHero from '@/components/PageHero'
import HubSpotForm from '@/components/HubSpotForm'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

const TRUST = [
  { title: 'A real specialist, not a bot', text: 'A dedicated Landmark Travel Consultant builds your itinerary by hand around your group and curriculum.' },
  { title: 'Fully customizable', text: 'Every destination, date, grade level, and budget is tailored to your school. Nothing is off the shelf.' },
  { title: 'No obligation', text: 'Your quote is free. Review it, ask questions, and only move forward when the plan feels right.' },
]

export default function GetAQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        title={<>Tell Us About Your <em>Trip</em></>}
        subtitle="Share a few details and a Landmark Travel Consultant will build a custom, no-obligation quote for your group."
        image="/images/landmark/hero-nyc.jpg"
        breadcrumb={[{ label: 'Get a Quote' }]}
      />

      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="lm-form-card lm-form-card--quote">
            <h2 className="lm-h2-amber" style={{ textAlign: 'center' }}>REQUEST YOUR FREE QUOTE</h2>
            <p className="lm-form-intro" style={{ textAlign: 'center' }}>
              Tell us where you would like to go and a bit about your group. We will follow up with a customized quote and next steps.
            </p>
            <HubSpotForm formId="2bb4a315-aed5-475b-b26d-63619efafea7" sectioned />
          </div>
        </div>
      </section>

      <section className="ile-section ile-section--cream" aria-labelledby="gq-trust-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Why Landmark</span>
            <h2 id="gq-trust-h" className="lm-h2-amber">WHAT TO EXPECT</h2>
          </div>
          <div className="ilp-grid-3" style={{ marginTop: 40 }}>
            {TRUST.map((t) => (
              <div className="ilm-card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Get a Quote', path: '/get-a-quote/' },
      ])} />
    </>
  )
}
