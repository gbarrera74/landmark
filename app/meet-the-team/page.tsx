import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Meet the Team',
  description:
    'Meet the people behind the Irish Life Experience — founder Taryn Harrison, finance director Gerardo Barrera, and Waterford-born history teacher Mark Cooney.',
}

const TEAM = [
  {
    name: 'Taryn Harrison', role: 'President & Founder', where: 'Polson, Montana', initials: 'TH',
    bio: 'Taryn caught the travel bug early — at 16 she joined a summer study-abroad in Ireland. After college she served in the Peace Corps in Kyrgyzstan, then lived in Camlough, County Armagh. Having visited 28 countries, she has led high school students to Ireland for over 25 years. She loves hiking, running, singing, skiing, and Gonzaga basketball.',
  },
  {
    name: 'Gerardo Barrera', role: 'Finance Director', where: 'Boston, Massachusetts', initials: 'GB',
    bio: 'Gerardo began his travel-industry career over 21 years ago and went on to become CFO of TUI Education North America, overseeing brands including Brightspark, Educatours, and Jumpstreet. He co-founded Go Blue Tours, Juniper Tours, and Landmark Educational Tours. He lives in Boston with his wife and two sons.',
  },
  {
    name: 'Mark Cooney', role: 'History Teacher', where: 'Waterford, Ireland', initials: 'MC',
    bio: 'Born in Waterford — home of the famous Waterford Crystal — Mark has worked in education for over 21 years and been part of the Irish Life Experience for more than a decade, coaching traditional Irish sports. A devoted GAA fan, he loves football, hurling, music, film, and time with family and friends.',
  },
]

export default function TeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title={<>Meet the <em>Team</em></>}
        subtitle="With nearly 150 years of combined experience leading students around the world, our team has the knowledge and the know-how to make every summer unforgettable."
        image="/images/photo-1979.jpg"
        breadcrumb={[{ label: 'About Us', href: '/about-us/' }, { label: 'Meet the Team' }]}
      />
      <section className="ile-section ile-section--cream">
        <div className="ile-container">
          <div className="ilp-team-grid">
            {TEAM.map((m) => (
              <div className="ilp-member" key={m.name}>
                <div className="ilp-member-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(150deg, var(--lm-primary), var(--lm-primary-900))' }}>
                  <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 64, color: '#fff', letterSpacing: 1 }}>{m.initials}</span>
                </div>
                <h3>{m.name}</h3>
                <div className="ilp-member-role">{m.role} · {m.where}</div>
                <p>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  )
}
