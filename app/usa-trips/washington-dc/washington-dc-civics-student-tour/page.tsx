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
  { title: "Day 1: Arrival & Memorial Tours", acts: ["Travel to Washington, D.C.", "Explore Lincoln, Korean War, and World War II Memorials", "Group sit-down dinner", "Hotel check-in with on-site security"] },
  { title: "Day 2: National Landmarks & Tidal Basin Memorials Tour", acts: ["Breakfast at the hotel", "Visit the U.S. Capitol", "Lunch and explore Library of Congress and National Archives Museum", "Evening memorial visits and dinner", "Return to Hotel Accommodations"] },
  { title: "Day 3: Arlington National Cemetery & Departure", acts: ["Breakfast at the hotel", "Visit US Marine Corps Memorial", "Guided Tour of Arlington National Cemetery (Changing of the Guard, Kennedy gravesite)", "Lunch Voucher or boxed sandwich lunch", "Depart for Home"] },
]

const WHY = [
  { label: "Interactive Learning", text: "Engage with history through guided tours and museum visits." },
  { label: "Iconic Landmarks", text: "Visit renowned sites like the U.S. Capitol, Lincoln Memorial, and Smithsonian Museums." },
  { label: "Civic Understanding", text: "Gain a deeper appreciation for democracy and government." },
  { label: "Memorable Experiences", text: "Create lifelong memories while exploring this historic city." },
]

const INCLUSIONS = [
  ["Private Group Tour", "Personalized experiences for your group only."],
  ["Custom Itinerary", "Built around your educational goals and preferences."],
  ["Transportation", "Safe, reliable, and comfortable travel."],
  ["Hotel Accommodations", "Convenient and student-friendly lodging."],
  ["Attractions", "Access to top-rated sites and experiences."],
  ["Meals", "Delicious and well-balanced dining options."],
  ["Tour Manager", "Professional support throughout your journey."],
  ["Restaurant & Driver Gratuities", "Taken care of for your convenience."],
]

const RELATED = [
  { title: "HBCU Campus Tours", img: "/images/landmark/dc-howard-university.jpg", href: "/usa-trips/washington-dc/hbcu-campus-tours/" },
  { title: "Class Trip Programs for Middle School Students", img: "/images/landmark/dc-capitol.jpg", href: "/usa-trips/washington-dc/class-trip-programs-for-middle-school-students/" },
  { title: "African American History Washington, DC School Trip", img: "/images/landmark/dc-nmaahc.jpg", href: "/usa-trips/washington-dc/african-american-history-dc-student-tour/" },
]

const DESC_P1 = "Embark on an unforgettable three-day educational journey in Washington, D.C., designed to immerse students in the heart of American democracy! Explore the foundations of government through visits to the U.S. Capitol, Supreme Court, and National Archives, where history and law come to life. From touring iconic monuments and participating in civic-focused activities to engaging with the stories of leadership and decision-making, this trip promises an inspiring, hands-on learning experience that will ignite a passion for civic engagement and understanding."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your Civics Focused Washington, DC School Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the Ultimate Washington DC Civics Student Tour</h2>
    <p>{DESC_P1}</p>
    <h3>Why Choose This Trip?</h3>
    <ul>
      {WHY.map((w) => (
        <li key={w.label}><strong>{w.label}:</strong> {w.text}</li>
      ))}
    </ul>
    <p className="lm-sample-note">
      <em>Note: This is a SAMPLE itinerary provided for inspiration only. (Unless you love it!) Every trip we offer is fully customizable, ensuring a personalized experience tailored to your school&rsquo;s educational goals.</em>
    </p>
    <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Plan Your Custom Trip Today</Link>
  </div>
)

const inclusionsTab = (
  <div className="ilp-infocard ilp-check">
    <h3>Trip Inclusions: Tailored Just for You</h3>
    <p style={{ marginBottom: 20, color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>
      Work with our expert Destination Landmark Specialist team to design a trip that fits your group&rsquo;s unique needs! Our packages start fully customizable and typically include:
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

export default function Itin_usa_trips__washington_d_c__washington_dc_civics_student_tour() {
  return (
    <>
      <PageHero
        eyebrow="Washington, D.C. · 3 Day / 2 Night"
        title={<>Civics Focused Washington, DC School Trip</>}
        subtitle="A three day civics immersion in Washington, DC where students step inside the institutions that shape American democracy."
        image="/images/landmark/thomas-jefferson-memorial.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Washington, D.C.", href: "/usa-trips/washington-dc/" },
        { label: "Civics Focused Washington, DC School Trip" },
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
                <div><dt>Duration</dt><dd>3 Day / 2 Night</dd></div>
                <div><dt>Destination</dt><dd>Washington, DC</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/washington-dc/" className="lm-summary-link">More Washington, D.C. packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Washington, D.C. Travel Tips</span>
              <h3>Tip: Book Early!</h3>
              <p>Booking early secures the best rates, preferred accommodations, and prime access to popular attractions. It also allows more time for trip planning, ensuring a smooth and stress-free travel experience.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Other Travel Packages */}
      <section className="ile-section ile-section--cream" aria-labelledby="related-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">More Packages</span>
            <h2 id="related-h" className="lm-h2-amber">OTHER TRAVEL PACKAGES</h2>
            <p className="ile-lead lm-center-lead">Discover more customizable Washington, D.C. travel packages designed for educational tours and student groups.</p>
          </div>
          <div className="ilp-grid-3">
            {RELATED.map((r) => (
              <Link href={r.href} className="ilm-post" key={r.title}>
                <div className="ilm-post-img"><img src={r.img} alt="" loading="lazy" /></div>
                <div className="ilm-post-body">
                  <h3>{r.title}</h3>
                  <span className="ilm-post-more">View Itinerary {ArrowR}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BrochureBand />

      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Destinations", path: "/destinations/" },
        { name: "Washington, D.C.", path: "/usa-trips/washington-dc/" },
        { name: "Civics Focused Washington, DC School Trip", path: "/usa-trips/washington-dc/washington-dc-civics-student-tour/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Civics Focused Washington, DC School Trip",
        description: "A three day civics immersion in Washington, DC where students step inside the institutions that shape American democracy.",
        path: "/usa-trips/washington-dc/washington-dc-civics-student-tour/",
        days: [{ name: "Day 1: Arrival & Memorial Tours", description: "Travel to Washington, D.C.; Explore Lincoln, Korean War, and World War II Memorials; Group sit-down dinner; Hotel check-in with on-site security" }, { name: "Day 2: National Landmarks & Tidal Basin Memorials Tour", description: "Breakfast at the hotel; Visit the U.S. Capitol; Lunch and explore Library of Congress and National Archives Museum; Evening memorial visits and dinner; Return to Hotel Accommodations" }, { name: "Day 3: Arlington National Cemetery & Departure", description: "Breakfast at the hotel; Visit US Marine Corps Memorial; Guided Tour of Arlington National Cemetery (Changing of the Guard, Kennedy gravesite); Lunch Voucher or boxed sandwich lunch; Depart for Home" }],
      })} />
    </>
  )
}
