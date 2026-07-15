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
  { title: "Day 1: Arrival & Explore Oslo, Norway", acts: ["International Flight to Oslo, Norway", "Meet Motorcoach Shuttle and Leader & Tour Manager", "Check into Hotel Accommodations Oslo Noway", "Optional Points of Interest:", "The Vigeland Sculpture Park", "Viking Ship Museum", "Akershus Fortress", "Oslo Opera House", "Kon-Tiki Museum", "The Norwegian Museum History of Culture", "Skiing Adventure", "Fjord Tour", "University of Oslo", "Group sit-down dinner", "Return to Hotel Accommodations"] },
  { title: "Day 2: Explore Oslo & Bergen, Norway", acts: ["Breakfast at the hotel", "Oslo, Norway Optional Points of Interest:", "The Vigeland Sculpture Park", "Viking Ship Museum", "Akershus Fortress", "Oslo Opera House", "Kon-Tiki Museum", "The Norwegian Museum History of Culture", "Skiing Adventure", "Fjord Tour", "University of Oslo", "Group sit-down lunch", "Domestic Flight from Oslo International Airport to Bergen, Norway", "Arrival Airport into Bergen, Norway", "Check into Hotel Accommodations", "Group Sit Down Dinner", "Return to Hotel Accommodations"] },
  { title: "Day 3: Guided City Tour of Bergen & Souvenir Shopping", acts: ["Breakfast at the hotel", "Guided City Tour of Bergen with a Local Guide", "Group sit-down lunch", "Funicular Admission: Mount Floyen", "Group Exploration of City Center- Souvenir Shopping", "Group sit-down dinner", "Return to Hotel Accommodations"] },
  { title: "Day 4: Explore Flam, Norway", acts: ["Breakfast at the hotel", "Train Station Admission from Bergen, Norway to Flam, Norway (Flam Scenic Railway)", "Check into Hotel Accommodations", "Group sit-down lunch", "Flam Norway Optional Points of Interest:", "Flam Railway Museum", "Fjord Tour to Gudvangen Viking Village", "FjordSafari- Guided Boat Tour", "Stegastein Viewpoint", "Group sit-down dinner", "Return to Hotel Accommodations"] },
  { title: "Day 5: Guided Winter Hike & Explore Sogndal, Norway", acts: ["Breakfast at the hotel", "Shuttle Transfer to Ardal, Norway", "Guided Winter Hike (Moderate Hike) to Farmhouse", "Lunch: Group Meal at Farm House", "Sogndal, Norway Optional Points of Interest:", "Glacier Museum", "Sogn Folkmuseum", "Kaupanger Stave Church", "Hotel Accommodations", "Group sit-down dinner", "Return to Hotel Accommodations"] },
  { title: "Day 6: RIB Boat Fjord Adventure & Orchard Apple/Fruit Juice Tasting", acts: ["Breakfast at the hotel", "Shuttle Transfer for Balestrand, Norway", "RIB Boat Fjord Adventure", "Lunch: Group Meal at Orchard", "Orchard Apple/Fruit Juice Tasting", "Group Walking Town Tour of St. Olaf’s Church", "Hotel Accommodations", "Group sit-down dinner", "Return to Hotel Accommodations"] },
  { title: "Day 7: Trondelag Folk Museum & Saint Olav’s Cathedral", acts: ["Breakfast at the hotel", "Bergen, Norway Optional Points of Interest:", "Troldhaugen (Edvard Grieg Museum)", "Bergenhus Fortress", "Bergen Science Center", "West Norway Museum of Decorative Art", "Norway Fisheries Museum", "Group Exploration of City Center", "Domestic Flight from Bergen, Norway to Trondheim, Norway", "Trondelag Folk Museum", "Saint Olav’s Cathedral", "Hotel Accommodations", "Group sit-down dinner", "Return to Hotel Accommodations"] },
  { title: "Day 8: Guided City Walking Tour of Trondheim & Train Ride to Roros", acts: ["Breakfast at the Hotel", "Guided City Walking Tour of Trondheim, Norway with Local Guide", "Train Ride Admission to Roros, Norway", "Hotel Accommodations", "Roros, Norway Optional Points of Interests:", "Guided Tour of Olavs Mine (Copper!)", "Reindeer Experience and Sami Culture Workshop (Includes Dinner)", "Kennel Dolanvollen Dog Sledding Roros", "Guided City Walking Tour of Roros, Norway with Local Guide", "Group sit-down dinner", "Return to Hotel Accommodations"] },
  { title: "Day 9: Explore Roros, Norway", acts: ["Breakfast at the Hotel", "Roros, Norway Optional Points of Interests:", "Guided Tour of Olavs Mine (Copper!)", "Reindeer Experience and Sami Culture Workshop (Includes Dinner)", "Kennel Dolanvollen Dog Sledding Roros", "Guided City Walking Tour of Roros, Norway with Local Guide", "Lunch: Local Speciality Lunch", "Group Exploration and Free Time", "Group sit-down dinner", "Return to Hotel Accommodations"] },
  { title: "Day 10: Departure", acts: ["Breakfast at the Hotel", "Domestic Flight from Roros, Norway to Oslo International Airport", "Departure for Home Based Airport"] },
]

const WHY = [
  { label: "Breathtaking Natural Landscapes", text: "Explore Norway’s stunning fjords, glaciers, and mountains, offering students a firsthand look at some of the world’s most incredible natural wonders." },
  { label: "Outdoor Adventure", text: "Experience thrilling activities such as hiking, glacier trekking, dog sledding, and even spotting the Northern Lights in the Arctic Circle." },
  { label: "Cultural Immersion", text: "Visit charming cities like Oslo and Bergen, explore traditional fishing villages, and learn about Norwegian customs and folklore." },
  { label: "Historical Landmarks", text: "Explore medieval stave churches, royal palaces, and World War II sites that provide deep insights into Norway’s past." },
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

]

const DESC_P1 = "Set out on an exciting ten-day educational adventure in Norway, designed to inspire students with breathtaking landscapes, rich history, and cutting-edge sustainability initiatives! Discover the beauty of Norway’s fjords, glaciers, and Viking heritage while engaging in hands-on learning experiences in environmental science, cultural traditions, and renewable energy. From exploring historic cities like Oslo and Bergen to venturing into the Arctic wilderness, this trip promises an immersive, hands-on learning experience that will leave students excited about history, nature, and the forward-thinking innovations of Norway."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your 10 Day Norway School Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>The Ultimate 10 Day Norway School Trip for Students</h2>
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

export default function Itin_international__norway__10_day_norway_school_trip() {
  return (
    <>
      <PageHero
        eyebrow="Norway · 10 Day / 9 Night"
        title={<>10 Day Norway School Trip</>}
        subtitle="Ten days across Oslo, Bergen, and Norway's fjords, where students explore Viking heritage, glaciers, and sustainability up close."
        image="/images/landmark/norway-1.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "International", href: "/international/" },
        { label: "Norway", href: "/international/norway/" },
        { label: "10 Day Norway School Trip" },
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
                <div><dt>Duration</dt><dd>10 Day / 9 Night</dd></div>
                <div><dt>Destination</dt><dd>Norway</dd></div>
                <div><dt>Best for</dt><dd>High School</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/international/norway/" className="lm-summary-link">More Norway packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Norway Travel Tips</span>
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
        { name: "International", path: "/international/" },
        { name: "Norway", path: "/international/norway/" },
        { name: "10 Day Norway School Trip", path: "/international/norway/10-day-norway-school-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "10 Day Norway School Trip",
        description: "Ten days across Oslo, Bergen, and Norway's fjords, where students explore Viking heritage, glaciers, and sustainability up close.",
        path: "/international/norway/10-day-norway-school-trip/",
        days: [{ name: "Day 1: Arrival & Explore Oslo, Norway", description: "International Flight to Oslo, Norway; Meet Motorcoach Shuttle and Leader & Tour Manager; Check into Hotel Accommodations Oslo Noway; Optional Points of Interest:; The Vigeland Sculpture Park; Viking Ship Museum; Akershus Fortress; Oslo Opera House; Kon-Tiki Museum; The Norwegian Museum History of Culture; Skiing Adventure; Fjord Tour; University of Oslo; Group sit-down dinner; Return to Hotel Accommodations" }, { name: "Day 2: Explore Oslo & Bergen, Norway", description: "Breakfast at the hotel; Oslo, Norway Optional Points of Interest:; The Vigeland Sculpture Park; Viking Ship Museum; Akershus Fortress; Oslo Opera House; Kon-Tiki Museum; The Norwegian Museum History of Culture; Skiing Adventure; Fjord Tour; University of Oslo; Group sit-down lunch; Domestic Flight from Oslo International Airport to Bergen, Norway; Arrival Airport into Bergen, Norway; Check into Hotel Accommodations; Group Sit Down Dinner; Return to Hotel Accommodations" }, { name: "Day 3: Guided City Tour of Bergen & Souvenir Shopping", description: "Breakfast at the hotel; Guided City Tour of Bergen with a Local Guide; Group sit-down lunch; Funicular Admission: Mount Floyen; Group Exploration of City Center- Souvenir Shopping; Group sit-down dinner; Return to Hotel Accommodations" }, { name: "Day 4: Explore Flam, Norway", description: "Breakfast at the hotel; Train Station Admission from Bergen, Norway to Flam, Norway (Flam Scenic Railway); Check into Hotel Accommodations; Group sit-down lunch; Flam Norway Optional Points of Interest:; Flam Railway Museum; Fjord Tour to Gudvangen Viking Village; FjordSafari- Guided Boat Tour; Stegastein Viewpoint; Group sit-down dinner; Return to Hotel Accommodations" }, { name: "Day 5: Guided Winter Hike & Explore Sogndal, Norway", description: "Breakfast at the hotel; Shuttle Transfer to Ardal, Norway; Guided Winter Hike (Moderate Hike) to Farmhouse; Lunch: Group Meal at Farm House; Sogndal, Norway Optional Points of Interest:; Glacier Museum; Sogn Folkmuseum; Kaupanger Stave Church; Hotel Accommodations; Group sit-down dinner; Return to Hotel Accommodations" }, { name: "Day 6: RIB Boat Fjord Adventure & Orchard Apple/Fruit Juice Tasting", description: "Breakfast at the hotel; Shuttle Transfer for Balestrand, Norway; RIB Boat Fjord Adventure; Lunch: Group Meal at Orchard; Orchard Apple/Fruit Juice Tasting; Group Walking Town Tour of St. Olaf’s Church; Hotel Accommodations; Group sit-down dinner; Return to Hotel Accommodations" }, { name: "Day 7: Trondelag Folk Museum & Saint Olav’s Cathedral", description: "Breakfast at the hotel; Bergen, Norway Optional Points of Interest:; Troldhaugen (Edvard Grieg Museum); Bergenhus Fortress; Bergen Science Center; West Norway Museum of Decorative Art; Norway Fisheries Museum; Group Exploration of City Center; Domestic Flight from Bergen, Norway to Trondheim, Norway; Trondelag Folk Museum; Saint Olav’s Cathedral; Hotel Accommodations; Group sit-down dinner; Return to Hotel Accommodations" }, { name: "Day 8: Guided City Walking Tour of Trondheim & Train Ride to Roros", description: "Breakfast at the Hotel; Guided City Walking Tour of Trondheim, Norway with Local Guide; Train Ride Admission to Roros, Norway; Hotel Accommodations; Roros, Norway Optional Points of Interests:; Guided Tour of Olavs Mine (Copper!); Reindeer Experience and Sami Culture Workshop (Includes Dinner); Kennel Dolanvollen Dog Sledding Roros; Guided City Walking Tour of Roros, Norway with Local Guide; Group sit-down dinner; Return to Hotel Accommodations" }, { name: "Day 9: Explore Roros, Norway", description: "Breakfast at the Hotel; Roros, Norway Optional Points of Interests:; Guided Tour of Olavs Mine (Copper!); Reindeer Experience and Sami Culture Workshop (Includes Dinner); Kennel Dolanvollen Dog Sledding Roros; Guided City Walking Tour of Roros, Norway with Local Guide; Lunch: Local Speciality Lunch; Group Exploration and Free Time; Group sit-down dinner; Return to Hotel Accommodations" }, { name: "Day 10: Departure", description: "Breakfast at the Hotel; Domestic Flight from Roros, Norway to Oslo International Airport; Departure for Home Based Airport" }],
      })} />
    </>
  )
}
