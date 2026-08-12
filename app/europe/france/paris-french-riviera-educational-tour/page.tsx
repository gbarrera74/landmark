/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import ItineraryTabs from '@/components/home/ItineraryTabs'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb, touristTrip } from '@/lib/seo/schemas'

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

const DAYS = [
  { title: "Day 1: Departure", acts: ["Depart the Cayman Islands for Paris"] },
  { title: "Day 2: Arrival in Paris", acts: ["Meet your local French guide and Landmark Tour Director", "Guided walking tour of Paris", "Group dinner", "Return to Hotel Accommodations"] },
  { title: "Day 3: Versailles & the Seine", acts: ["Breakfast at the hotel", "Visit the Palace of Versailles", "Packed lunch", "One-hour cruise on the River Seine", "French-speaking macaron workshop", "Group dinner", "Return to Hotel Accommodations"] },
  { title: "Day 4: The Louvre & Travel to Nice", acts: ["Breakfast at the hotel", "Visit the Louvre Museum", "Travel to Nice", "Group dinner", "Return to Hotel Accommodations"] },
  { title: "Day 5: Saint-Paul-de-Vence", acts: ["Breakfast at the hotel", "Guided trip to Saint-Paul-de-Vence", "Introduction to pétanque", "Group dinner", "Return to Hotel Accommodations"] },
  { title: "Day 6: Monaco", acts: ["Breakfast at the hotel", "Guided day trip to Monaco", "Visit the Prince of Monaco's Private Car Collection", "Group dinner", "Return to Hotel Accommodations"] },
  { title: "Day 7: Return to Paris", acts: ["Breakfast at the hotel", "Travel to Paris", "Group dinner", "Return to Hotel Accommodations"] },
  { title: "Day 8: Disneyland Paris", acts: ["Breakfast at the hotel", "Full day at Disneyland Paris", "Dinner at Disneyland Paris", "Return to Hotel Accommodations"] },
  { title: "Day 9: Return Home", acts: ["Breakfast at the hotel", "Depart for Home"] },
]

const WHY = [
  { label: "Two Sides of France", text: "Pair the landmarks of Paris with the coastal towns of the French Riviera." },
  { label: "World-Class Museums", text: "Visit the Louvre and the Palace of Versailles." },
  { label: "French in Practice", text: "A local French guide throughout, plus a French-speaking macaron workshop." },
  { label: "Culture & Fun", text: "Saint-Paul-de-Vence, Monaco, a Seine cruise, and a full day at Disneyland Paris." },
]

const INCLUSIONS = [
  ["Private Group Tour", "Personalized experiences for your group only."],
  ["Custom Itinerary", "Built around your educational goals and preferences."],
  ["Transportation", "Safe, reliable, and comfortable travel."],
  ["Hotel Accommodations", "Convenient and student-friendly lodging."],
  ["Attractions", "Access to top-rated sites and experiences."],
  ["Meals", "Delicious and well-balanced dining options."],
  ["Tour Director", "A Landmark Tour Director and a local French guide throughout."],
  ["Restaurant & Driver Gratuities", "Taken care of for your convenience."],
]

const DESC_P1 = "Embark on an unforgettable nine-day educational journey through France! This itinerary pairs the landmarks of Paris with the sunshine and hill towns of the French Riviera. Students visit the Palace of Versailles and the Louvre, cruise the River Seine, and take part in a French-speaking macaron workshop before heading south to Nice, Saint-Paul-de-Vence, and Monaco."
const DESC_P2 = "An educational trip to France gives students the chance to practice the language where it is spoken and to see how one country holds both grand royal history and a relaxed Mediterranean coast. A local French guide travels with the group throughout, adding context at every stop. The trip finishes back in Paris with a full day at Disneyland Paris. Landmark Educational Tours coordinates every detail, from international flights to on-the-ground logistics, so educators can focus on the learning."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your Paris &amp; the French Riviera Educational Tour itinerary with our team.</p>
    <div className="ilp-timeline lm-day-timeline">
      {DAYS.map((d, i) => (
        <div className="ilp-step" key={d.title}>
          <span className="ilp-step-num">{i + 1}</span>
          <h3>{d.title}</h3>
          <ul className="lm-day-acts">
            {d.acts.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
)

const descriptionTab = (
  <div className="ilp-prose">
    <h2 style={{ marginTop: 0 }}>Explore the Paris &amp; the French Riviera Educational Tour Itinerary</h2>
    <p>{DESC_P1}</p>
    <p>{DESC_P2}</p>
    <h3>Why Choose This Trip?</h3>
    <ul>
      {WHY.map((w) => (
        <li key={w.label}><strong>{w.label}:</strong> {w.text}</li>
      ))}
    </ul>
    <p className="lm-sample-note">
      <em>Note: This is a SAMPLE itinerary provided for inspiration only. (Unless you love it!) Every trip we offer is fully customizable, ensuring a personalized experience tailored to your school&rsquo;s educational goals. Full itinerary is subject to availability.</em>
    </p>
    <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Plan Your Custom Trip Today</Link>
  </div>
)

const inclusionsTab = (
  <div className="ilp-infocard ilp-check">
    <h3>Trip Inclusions: Tailored Just for You</h3>
    <p style={{ marginBottom: 20, color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>
      Work with our expert team of Landmark Travel Consultants to design a trip that fits your group&rsquo;s unique needs! Our packages start fully customizable and typically include:
    </p>
    <ul>
      {INCLUSIONS.map(([label, text]) => (
        <li key={label}><strong>{label}</strong>: {text}</li>
      ))}
      <li><strong>&amp; More!</strong></li>
    </ul>
    <p style={{ marginTop: 20, color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>
      You have the flexibility to include or exclude specific services based on your group&rsquo;s preferences. While we recommend the value of an all-inclusive travel experience, the final decision is yours!
    </p>
    <Link href="/get-a-quote/" className="ile-btn ile-btn--primary" style={{ marginTop: 8 }}>Get a Custom Quote</Link>
  </div>
)

export default function Itin_europe__france__paris_french_riviera_educational_tour() {
  return (
    <>
      <PageHero
        eyebrow="France · 9 Day / 8 Night"
        title={<>Paris &amp; the French Riviera Educational Tour</>}
        subtitle="Nine days in France, from Versailles, the Louvre, and a Seine cruise in Paris to Saint-Paul-de-Vence, Monaco, and Disneyland Paris."
        image="/images/landmark/france-paris-riviera-versailles.jpg"
        breadcrumb={[
          { label: "Destinations", href: "/destinations/" },
          { label: "Europe", href: "/europe/" },
          { label: "France", href: "/europe/france/" },
          { label: "Paris & the French Riviera Educational Tour" },
        ]}
      />

      <section className="ile-section ile-section--white">
        <div className="ile-container lm-itin-grid">
          <div className="lm-itin-main">
            <ItineraryTabs
              tabs={[
                { id: 'itinerary', label: 'Sample Itinerary', content: sampleTab },
                { id: 'description', label: 'Description', content: descriptionTab },
                { id: 'inclusions', label: 'Trip Inclusions', content: inclusionsTab },
              ]}
            />
          </div>

          <aside className="lm-itin-side">
            <div className="lm-summary-card">
              <h2 className="lm-summary-title">Trip Snapshot</h2>
              <dl className="lm-summary-list">
                <div><dt>Duration</dt><dd>9 Day / 8 Night</dd></div>
                <div><dt>Destination</dt><dd>France</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/europe/france/" className="lm-summary-link">More France packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">France Travel Tips</span>
              <h3>Tip: Book Early!</h3>
              <p>Booking early secures the best rates, preferred accommodations, and prime access to popular attractions. It also allows more time for trip planning, ensuring a smooth and stress-free travel experience.</p>
            </div>
          </aside>
        </div>
      </section>

      <BrochureBand />

      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Destinations", path: "/destinations/" },
        { name: "Europe", path: "/europe/" },
        { name: "France", path: "/europe/france/" },
        { name: "Paris & the French Riviera Educational Tour", path: "/europe/france/paris-french-riviera-educational-tour/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Paris & the French Riviera Educational Tour",
        description: "Nine days in France, from Versailles, the Louvre, and a Seine cruise in Paris to Saint-Paul-de-Vence, Monaco, and Disneyland Paris.",
        path: "/europe/france/paris-french-riviera-educational-tour/",
        days: DAYS.map((d) => ({ name: d.title, description: d.acts.join('; ') })),
      })} />
    </>
  )
}
