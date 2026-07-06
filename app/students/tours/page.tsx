import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Tours & Excursions',
  description:
    'From the Cliffs of Moher and the Aran Islands to a live match at Croke Park and the Giant\'s Causeway — explore the guided tours and excursions of the Irish Life Experience.',
}

const FEATURED = [
  { name: 'Cliffs of Moher', d: 'Stand atop the spectacular sea cliffs of County Clare, rising over 700 feet above the Atlantic.' },
  { name: 'Aran Islands', d: "Sail to the westernmost point of Europe and practice your Gaelic with native speakers." },
  { name: 'Croke Park Match', d: 'Feel GAA football and hurling come to life at the beating heart of Irish sport.' },
  { name: "Giant's Causeway", d: 'Walk the otherworldly basalt columns flanked by the wild North Atlantic.' },
]

const TOURS = [
  ['Aillwee Caves', 'Venture underground in the heart of the Burren.'],
  ['Birds of Prey', 'Meet one of Ireland’s largest collections of raptors in the Burren.'],
  ['Book of Kells', 'See the illuminated medieval masterpiece at Trinity College Dublin.'],
  ['Blarney Castle & Stone', 'Kiss the famous stone at this medieval castle in County Cork.'],
  ['Bunratty Castle & Folk Park', 'Step into one of Ireland’s most complete medieval castles.'],
  ['The Burren', 'Experience the enthralling, lunar-like beauty of this limestone landscape.'],
  ['Burren Walking Tour', 'Trek off the beaten path across the Burren’s isolated terrain.'],
  ['Cahir Castle', 'Explore a mighty castle on a rocky island in the River Suir.'],
  ['Carrick-a-Rede Rope Bridge', 'Cross one of Northern Ireland’s most thrilling clifftop bridges.'],
  ['Charles Fort', 'Discover a striking star-shaped military fortress on the coast.'],
  ['Croke Park Museum', 'Go behind the scenes at the iconic home of Gaelic games.'],
  ["Dan O'Hara's Cottage", 'Visit a restored pre-Famine cottage beneath the Twelve Bens.'],
  ['Dingle Peninsula', 'Fall in love with one of Ireland’s most beautiful coastlines.'],
  ['Dublin City Tour', 'A local guide brings the capital’s landmarks to life.'],
  ['Dunluce Castle', 'Marvel at one of the most romantic clifftop castle ruins.'],
  ['EPIC Museum', 'Connect with Irish history through 20 interactive galleries.'],
  ['Glendalough', 'Wander a spectacular glacial valley and early monastic site.'],
  ['Guinness Storehouse', 'Explore the story of Ireland’s most famous export at St. James’s Gate.'],
  ['Howth Hill Walk', 'Set off from a pretty harbour village for coastal views.'],
  ['Irish National Heritage Park', 'Walk through 9,000 years of Ireland’s history.'],
  ['Kenmare Stone Circle', 'Stand among an ancient stone circle in County Kerry.'],
  ['Kilkenny Castle', 'Tour one of Ireland’s most continuously occupied castles.'],
  ['Kilmainham Gaol', 'Stand where the leaders of Irish independence were held.'],
  ['Kinsale', 'Wander the colourful, narrow streets of this seaside town.'],
  ['Kylemore Abbey', 'Visit a fairytale abbey in a rugged corner of Connemara.'],
  ['Muckross House', 'Explore a grand Victorian mansion on the lakes of Killarney.'],
  ['Newgrange', 'Step inside a Neolithic passage tomb older than the pyramids.'],
  ["Peter Flanagan's Hurleys", 'See traditional hurleys handmade in County Waterford.'],
  ['Ring of Kerry', 'Travel one of the most beautiful scenic routes in Ireland.'],
  ['Riverdance', 'Be swept up by the energy and spectacle of Irish dance.'],
  ['Rock of Cashel', 'Climb to an iconic ecclesiastical site in County Tipperary.'],
  ['Ross Castle', 'Discover a 15th-century tower house on the lakes of Killarney.'],
  ['Titanic Belfast', 'Trace the story of the Titanic where she was built.'],
  ['Torc Waterfall', 'Hike to a 65-foot waterfall at the base of Torc Mountain.'],
  ['Tramore', 'Relax in a lovely seaside village in County Waterford.'],
  ['Waterford Crystal', 'Watch master craftsmen create world-famous crystal.'],
  ['Waterford Greenway', 'Freewheel along a scenic paved cycle path.'],
]

export default function ToursPage() {
  return (
    <main>
      <PageHero
        eyebrow="For Students"
        title={<>The Whole Island Is Your <em>Classroom</em></>}
        subtitle="Castles and cliffs, museums and matches, ancient sites and seaside villages — guided tours and excursions woven through all 25 days."
        image="/images/ireland-cliffs-day.jpg"
        breadcrumb={[{ label: 'For Students', href: '/students/' }, { label: 'Tours' }]}
      />

      <section className="ile-section ile-section--cream">
        <div className="ile-container ile-center">
          <span className="ile-eyebrow">Marquee Moments</span>
          <h2 className="ile-h2">Trips You&apos;ll Never Forget</h2>
          <div className="ilp-grid-4" style={{ marginTop: 44 }}>
            {FEATURED.map((t) => (
              <div className="ilm-card" key={t.name}>
                <h3 style={{ fontSize: 19, marginBottom: 8 }}>{t.name}</h3>
                <p style={{ fontSize: 14, color: 'var(--lm-ink-muted)', lineHeight: 1.65 }}>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ile-section ile-section--white">
        <div className="ile-container ile-center">
          <span className="ile-eyebrow">And So Much More</span>
          <h2 className="ile-h2">Every Stop on the Map</h2>
          <p className="ile-lead">A sampling of the excursions and admissions included throughout the program.</p>
          <div className="ilp-grid-3" style={{ marginTop: 44, textAlign: 'left' }}>
            {TOURS.map(([name, d]) => (
              <div key={name} style={{ padding: '20px 22px', background: 'var(--lm-cream)', border: '1px solid var(--lm-line)', borderRadius: 'var(--lm-radius-sm)' }}>
                <h3 style={{ fontSize: 16.5, marginBottom: 5 }}>{name}</h3>
                <p style={{ fontSize: 13.5, color: 'var(--lm-ink-muted)', lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Your Adventure Is Waiting" />
    </main>
  )
}
