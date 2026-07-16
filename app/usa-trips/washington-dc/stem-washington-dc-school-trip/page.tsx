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
  { title: "Day 1: Arrival & Air and Space", acts: ["Travel to Washington, D.C.", "Explore the Smithsonian National Air and Space Museum", "Group sit-down dinner", "Hotel check-in with on-site security"] },
  { title: "Day 2: Science, Nature & Innovation", acts: ["Breakfast at the hotel", "Discover earth science, dinosaurs, and the Hope Diamond at the National Museum of Natural History", "Lunch and hands-on innovation exhibits at the National Museum of American History", "Afternoon at the International Spy Museum: the science and technology of intelligence", "Evening activity and group dinner", "Return to Hotel Accommodations"] },
  { title: "Day 3: Spaceflight & Departure", acts: ["Breakfast at the hotel", "Guided visit to the Steven F. Udvar-Hazy Center to see the Space Shuttle Discovery", "Lunch Voucher or boxed sandwich lunch", "Depart for Home"] },
]

const WHY = [
  { label: "Hands-On STEM", text: "Engage with real spacecraft, specimens, and interactive labs across the capital's science museums." },
  { label: "World-Class Collections", text: "Explore the Smithsonian's Air and Space, Natural History, and American innovation exhibits." },
  { label: "Real-World Science", text: "Connect classroom physics, biology, and engineering to authentic artifacts and discoveries." },
  { label: "Memorable Experiences", text: "Create lifelong memories while exploring the nation's capital." },
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
  { title: "Civics Focused Washington, DC School Trip", img: "/images/landmark/thomas-jefferson-memorial.jpg", href: "/usa-trips/washington-dc/washington-dc-civics-student-tour/" },
  { title: "Class Trip Programs for Middle School Students", img: "/images/landmark/dc-capitol.jpg", href: "/usa-trips/washington-dc/class-trip-programs-for-middle-school-students/" },
  { title: "African American History Washington, DC School Trip", img: "/images/landmark/dc-nmaahc.jpg", href: "/usa-trips/washington-dc/african-american-history-dc-student-tour/" },
]

const DESC_P1 = "Spark curiosity with a three-day STEM and STEAM adventure in Washington, D.C.! Students go behind the science at the Smithsonian's world-renowned museums, standing beneath real spacecraft at the National Air and Space Museum, exploring earth science and biodiversity at the National Museum of Natural History, and uncovering the engineering and technology of intelligence at the International Spy Museum. From the Space Shuttle Discovery at the Steven F. Udvar-Hazy Center to hands-on innovation exhibits, this trip turns classroom concepts in science, technology, engineering, and math into unforgettable, real-world discovery."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your STEM &amp; STEAM Washington, DC School Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the Ultimate STEM &amp; STEAM Washington, DC School Trip</h2>
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

export default function Itin_usa_trips__washington_dc__stem_washington_dc_school_trip() {
  return (
    <>
      <PageHero
        eyebrow="Washington, D.C. · 3 Day / 2 Night"
        title={<>STEM &amp; STEAM Focused Washington, DC School Trip</>}
        subtitle="A three-day STEM and STEAM immersion in Washington, DC where students explore real spacecraft, science labs, and the Smithsonian's greatest discoveries."
        image="/images/landmark/dc-spy-museum.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Washington, D.C.", href: "/usa-trips/washington-dc/" },
        { label: "STEM & STEAM Focused Washington, DC School Trip" },
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
                <div><dt>Best for</dt><dd>STEM &amp; STEAM classes, grades 5&ndash;12</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/washington-dc/" className="lm-summary-link">More Washington, D.C. packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Washington, D.C. Travel Tips</span>
              <h3>Tip: Reserve Museum Timeslots</h3>
              <p>Several DC science museums use free timed-entry passes that go fast in peak season. Booking early lets our team lock in your group&rsquo;s preferred museum times and the best rates.</p>
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
        { name: "STEM & STEAM Focused Washington, DC School Trip", path: "/usa-trips/washington-dc/stem-washington-dc-school-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "STEM & STEAM Focused Washington, DC School Trip",
        description: "A three-day STEM and STEAM immersion in Washington, DC where students explore real spacecraft, science labs, and the Smithsonian's greatest discoveries.",
        path: "/usa-trips/washington-dc/stem-washington-dc-school-trip/",
        days: [{ name: "Day 1: Arrival & Air and Space", description: "Travel to Washington, D.C.; Explore the Smithsonian National Air and Space Museum; Group sit-down dinner; Hotel check-in with on-site security" }, { name: "Day 2: Science, Nature & Innovation", description: "Breakfast at the hotel; Discover earth science, dinosaurs, and the Hope Diamond at the National Museum of Natural History; Lunch and hands-on innovation exhibits at the National Museum of American History; Afternoon at the International Spy Museum: the science and technology of intelligence; Evening activity and group dinner; Return to Hotel Accommodations" }, { name: "Day 3: Spaceflight & Departure", description: "Breakfast at the hotel; Guided visit to the Steven F. Udvar-Hazy Center to see the Space Shuttle Discovery; Lunch Voucher or boxed sandwich lunch; Depart for Home" }],
      })} />
    </>
  )
}
