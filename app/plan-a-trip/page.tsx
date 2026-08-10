import Link from 'next/link'
import PageHero from '@/components/PageHero'
import HubSpotMeetings from '@/components/HubSpotMeetings'
import JsonLd from '@/lib/seo/JsonLd'
import PageFaq from '@/components/PageFaq'
import { PAGE_FAQS } from '@/lib/seo/pageFaqs'
import { breadcrumb } from '@/lib/seo/schemas'

const PROCESS = [
  { title: 'Share Your Vision', body: 'Tell us about your group, destination, and trip goals — on a call or through the quick quote form.' },
  { title: 'Meet Your Travel Consultant', body: 'A dedicated Landmark Travel Consultant builds a complimentary, tailored itinerary and tour package — flights, hotels, attractions, and meals — around your group.' },
  { title: 'Review & Confirm', body: 'We walk through the proposal together, answer every question, and adjust until it is the perfect fit for your group.' },
  { title: 'Confirm & Launch', body: 'Once everything looks perfect, we open your registration portal so families can easily sign up and get ready for the adventure.' },
]

export default function PlanATripPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan a Trip"
        title={<>Let&rsquo;s Plan Your <em>Trip</em></>}
        subtitle="Book a call with a Landmark Travel Consultant. Expertise when you need it, fun when you want it."
        image="/images/landmark/dc-hero.jpg"
        breadcrumb={[{ label: 'Plan a Trip' }]}
      />

      <section className="ile-section ile-section--cream" aria-labelledby="pt-process-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="pt-process-h" className="lm-h2-amber">HOW OUR PROCESS WORKS</h2>
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
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Book a Call</span>
            <h2 className="lm-h2-amber">TALK TO A TRAVEL CONSULTANT</h2>
            <p className="ile-lead lm-center-lead">
              Pick a time that works for you and one of our Travel Consultants will walk through your goals, group, and destinations, then handle the heavy lifting from there.
            </p>
          </div>
          <div style={{ marginTop: 36, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
            <HubSpotMeetings slug="michaelaruffino/landmark" />
          </div>
        </div>
      </section>

      <section className="ile-section ile-section--cream" aria-labelledby="pt-quote-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Prefer to send details?</span>
            <h2 id="pt-quote-h" className="lm-h2-amber">GET A CUSTOMIZED QUOTE</h2>
            <p className="ile-lead lm-center-lead">
              Not sure what you are looking for? Provide a few details and let our Travel Consultants do all of the heavy lifting.
            </p>
          </div>
          <div className="ile-center lm-after-grid">
            <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Request a Free Quote</Link>
          </div>
        </div>
      </section>
      <PageFaq items={PAGE_FAQS['/plan-a-trip/']} id="plan-faq" heading="Questions about planning" tone="white" />


      <JsonLd data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Plan a Trip', path: '/plan-a-trip/' },
      ])} />
    </>
  )
}
