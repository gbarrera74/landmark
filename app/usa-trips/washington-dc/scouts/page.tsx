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
  { title: "Day 1: Arrival & Illuminated Monuments Walking Tour", acts: ["Travel to Washington, D.C.", "Attend Girl Scout Program at American Art Museum", "Group Sit-Down dinner", "Illuminated Monuments Walking Tour of Lincoln Memorial, Vietnam, and Korean War Memorial, World War II Memorial and Washington Monument", "Check into Hotel Accommodations"] },
  { title: "Day 2: Girl Scout Historic Walk & White House", acts: ["Hotel Breakfast", "Visit the U.S. Capitol and Library of Congress", "Lunch Included", "Girl Scout Historic Walk", "Visit the National Museum of African American History and Culture", "Group Photo at the White House", "Group Sit-Down dinner", "Attend a show performance at the Kennedy Center for the Performing Arts", "Return to Hotel Accommodations"] },
  { title: "Day 3: Arlington National Cemetery & Departure", acts: ["Hotel Breakfast", "Guided Tour of Arlington National Cemetery (Changing of the Guard, Kennedy gravesite)", "Visit Iwo Jima", "Eat at Food Trucks for lunch", "Visit the National Museum of the American Indian", "Visit Girl Scouts D.C. HQ or Service Project", "Depart for Home"] },
]

const WHY = [
  { label: "Experience American Democracy", text: "Visit the U.S. Capitol, Supreme Court, and National Archives to see government in action and learn about the Constitution and Bill of Rights." },
  { label: "Leadership and Citizenship Development", text: "Inspire scouts with lessons in leadership, service, and responsibility through visits to historical landmarks and government institutions." },
  { label: "STEM Learning Opportunities", text: "Engage in hands-on exhibits at the National Air and Space Museum, the Smithsonian museums, and the U.S. Botanic Garden." },
  { label: "Outdoor Exploration and Conservation", text: "Discover the natural beauty of Washington, D.C., with visits to the National Mall, Rock Creek Park, and Theodore Roosevelt Island." },
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
  { title: "Civics Focused Washington, DC School Trip", img: "/images/landmark/thomas-jefferson-memorial.jpg", href: "/usa-trips/washington-dc/washington-dc-civics-student-tour/" },
]

const DESC_P1 = "Embark on an exciting three-day educational adventure in Washington, D.C., designed to inspire scouts with history, leadership, and civic engagement! Explore the nation's capital with visits to iconic landmarks such as the U.S. Capitol, the Lincoln Memorial, and Arlington National Cemetery. From engaging in hands-on activities at the Smithsonian museums to learning about service, government, and the foundations of democracy, this trip promises an immersive experience that will leave scouts inspired and excited about history, leadership, and their role in shaping the future."
const DESC_P2 = "We design our customized scout trips to Washington, D.C. to help today's youth develop leadership skills, strengthen civic awareness, and gain a deeper appreciation for American history. Whether planning boy scout tours in Washington, D.C. focused on citizenship and service or organizing a memorable girl scout trip to Washington, D.C. centered on leadership and exploration, students benefit from immersive experiences that connect national landmarks with the values of teamwork, responsibility, and community involvement. We can tailor each itinerary to meet the unique goals and interests of your scout group."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your Scout Trips to Washington, D.C. itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the Ultimate Scouts Trip Itinerary</h2>
    <p>{DESC_P1}</p>
    <p>{DESC_P2}</p>
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

export default function Itin_usa_trips__washington_d_c__scouts() {
  return (
    <>
      <PageHero
        eyebrow="Washington, D.C. · 3 Day / 2 Night"
        title={<>Scout Trips to Washington, D.C.</>}
        subtitle="Give your scout troop three unforgettable days in the nation's capital, connecting landmarks and museums with leadership, service, and civic pride."
        image="/images/landmark/dc-hero.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Washington, D.C.", href: "/usa-trips/washington-dc/" },
        { label: "Scout Trips to Washington, D.C." },
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
                <div><dt>Destination</dt><dd>Washington, D.C.</dd></div>
                <div><dt>Best for</dt><dd>Scout troops, all levels</dd></div>
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
        { name: "Scout Trips to Washington, D.C.", path: "/usa-trips/washington-dc/scouts/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Scout Trips to Washington, D.C.",
        description: "Give your scout troop three unforgettable days in the nation's capital, connecting landmarks and museums with leadership, service, and civic pride.",
        path: "/usa-trips/washington-dc/scouts/",
        days: [{ name: "Day 1: Arrival & Illuminated Monuments Walking Tour", description: "Travel to Washington, D.C.; Attend Girl Scout Program at American Art Museum; Group Sit-Down dinner; Illuminated Monuments Walking Tour of Lincoln Memorial, Vietnam, and Korean War Memorial, World War II Memorial and Washington Monument; Check into Hotel Accommodations" }, { name: "Day 2: Girl Scout Historic Walk & White House", description: "Hotel Breakfast; Visit the U.S. Capitol and Library of Congress; Lunch Included; Girl Scout Historic Walk; Visit the National Museum of African American History and Culture; Group Photo at the White House; Group Sit-Down dinner; Attend a show performance at the Kennedy Center for the Performing Arts; Return to Hotel Accommodations" }, { name: "Day 3: Arlington National Cemetery & Departure", description: "Hotel Breakfast; Guided Tour of Arlington National Cemetery (Changing of the Guard, Kennedy gravesite); Visit Iwo Jima; Eat at Food Trucks for lunch; Visit the National Museum of the American Indian; Visit Girl Scouts D.C. HQ or Service Project; Depart for Home" }],
      })} />
    </>
  )
}
