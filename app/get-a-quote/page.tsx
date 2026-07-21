import PageHero from '@/components/PageHero'
import HubSpotForm from '@/components/HubSpotForm'
import HubSpotMeetings from '@/components/HubSpotMeetings'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

const TRUST = [
  { title: 'A real human, not a bot', text: 'A dedicated Landmark Travel Consultant builds your itinerary by hand around your group and curriculum.' },
  { title: 'Fully customizable', text: 'Every destination, date, grade level, and budget is tailored to your school. Nothing is off the shelf.' },
  { title: 'No obligation', text: 'Your quote is free. Review it, ask questions, and only move forward when the plan feels right.' },
]

const PROCESS = [
  { title: 'Share Your Vision', body: 'Fill out the quick form below with your group, destination, and trip details.' },
  { title: 'Meet Your Travel Consultant', body: 'A dedicated Landmark Travel Consultant builds a complimentary, tailored itinerary and tour package — flights, hotels, attractions, and meals — around your group.' },
  { title: 'Review & Confirm', body: 'We walk through the proposal together, answer every question, and adjust until it is the perfect fit for your group.' },
  { title: 'Confirm & Launch', body: 'Once everything looks perfect, we open your registration portal so families can easily sign up and get ready for the adventure.' },
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

      <section className="ile-section ile-section--cream" aria-labelledby="gq-process-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="gq-process-h" className="lm-h2-amber">HOW OUR PROCESS WORKS</h2>
            <p className="ile-lead lm-center-lead">From first idea to a fully-planned trip in four simple steps.</p>
          </div>
          <div className="ilp-grid-4 lm-process" style={{ marginTop: 44 }}>
            {PROCESS.map((s, i) => (
              <div className="lm-process-card" key={s.title}>
                <span className="lm-process-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="ile-section ile-section--cream" aria-labelledby="gq-call-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Prefer to talk it through?</span>
            <h2 id="gq-call-h" className="lm-h2-amber">BOOK A CALL</h2>
            <p className="ile-lead lm-center-lead">Rather start with a conversation? Schedule a quick call with a Landmark Travel Consultant and we&apos;ll help you plan your group&apos;s trip.</p>
          </div>
          <div className="lm-narrow" style={{ marginTop: 32 }}>
            <HubSpotMeetings slug="michaelaruffino/landmark" />
          </div>
        </div>
      </section>

      <section className="ile-section ile-section--white" aria-labelledby="gq-trust-h">
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
