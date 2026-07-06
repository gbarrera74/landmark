import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import FaqAccordion, { type Faq } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Parent FAQ',
  description:
    'Answers to the questions parents ask most about the Irish Life Experience — eligibility, cost and payment, daily life, safety, communication, money, and travel.',
}

const APPLYING: Faq[] = [
  { q: 'Who is eligible for the Irish Life Experience?', a: 'The program is open to students who have graduated from the eighth grade and are entering high school, through those finishing high school before the program begins — typically ages 14–18.' },
  { q: 'How do students apply?', a: 'Applicants complete an application with student and parent sections, provide written recommendations from at least one teacher and one counselor, and submit a current school transcript.' },
  { q: 'Is acceptance competitive?', a: 'Yes. We look for intelligent, independent, motivated, enthusiastic, and well-rounded young men and women with a genuine passion for experiencing new cultures.' },
  { q: 'When should I submit my application?', a: 'As soon as possible, to avoid capacity limits. The final deadline is April 1st, though applications may continue if space remains (sometimes with increased fares or a waiting list).' },
  { q: 'When will I find out if I have been accepted?', a: 'Once your completed application, recommendations, and deposit are received, it should take about 2–3 weeks to review and notify you of the decision.' },
  { q: 'Can I bring a friend or relative with me?', a: 'Absolutely! Most students attend on their own, but some choose to bring a friend along — and nearly everyone returns home with lifelong friends.' },
  { q: 'Can I speak with past students and parents?', a: 'Yes. Our Alumni Ambassadors act as advocates for the program, and prospective families can connect with past students directly to ask first-hand questions.' },
]

const COST: Faq[] = [
  { q: 'What is the cost and what does it include?', a: 'Tuition is $6,050 if you apply and pay in full before January 1st, and $6,550 after (plus a $140 credit-card fee). This covers round-trip airfare from Logan Airport (BOS), room and board, tuition, group tours, transportation, and activities. Personal items and optional activities are extra.' },
  { q: 'Is full payment required with the application?', a: 'No. A $600 deposit accompanies the application ($100 is non-refundable if not accepted). Upon acceptance, an additional $1,000 is due by March 1st and the balance by June 1st, unless you qualify for the early-bird rate.' },
  { q: 'How much spending money should students bring?', a: 'We recommend a budget of $500–$700 for out-of-pocket expenses. It helps to discuss a spending plan with your child beforehand to set expectations.' },
]

const LIFE: Faq[] = [
  { q: 'What kind of classes will students take?', a: 'The core curriculum includes Gaelic language, Irish history, Irish-American history, Irish studies, literature, dance, and drama — plus a range of hands-on workshops, for a comprehensive introduction to Irish culture.' },
  { q: 'Are the classes hard?', a: 'Classes are not rigorous. This is your summer vacation, so teachers do their best to keep each class fun and interactive.' },
  { q: 'How are students graded?', a: 'Each student receives a grade at the end of the program based on attendance, class participation, note-taking, drama presentations, completion of three workshops, and overall behavior.' },
  { q: 'Where will students live?', a: 'Students live in boarding schools and apartments with comfortable accommodations that provide the basic necessities. See our Accommodations page for details on each city.' },
  { q: 'Will there be free time?', a: 'Yes — the program is designed to give students free time in every location, with time to reflect, write home, and explore with friends.' },
  { q: 'Is there a curfew?', a: 'Yes. Students must be on campus for dinner before free time, with bed check at 10:45 PM and lights-out at 11:00 PM, given the demanding daily schedule.' },
  { q: 'What is the food like?', a: 'Meals are healthy, balanced, and nutritious — typical dormitory fare, which can take some adjustment. In Galway, students shop and prepare some meals themselves. Care packages from home are always welcome.' },
  { q: 'Can you accommodate dietary needs?', a: 'Yes — the Irish Life Experience can accommodate almost all dietary needs. Please indicate any restrictions or allergies in advance so we can make proper arrangements.' },
  { q: 'Will students have access to laundry?', a: 'There are two laundry pick-up dates — about six days into the Waterford stay, and about a week before departure in Dublin. Some locations have facilities; laundry is student-funded.' },
]

const SAFETY: Faq[] = [
  { q: 'How are students supervised?', a: 'Coordinators, teachers, and counselors supervise students, with a staff member on duty at all times and a typical student-to-staff ratio of 7:1.' },
  { q: 'Are staff qualified in First Aid?', a: 'Yes. Every staff member is required to be trained and certified in CPR and First Aid, with emergency-response training during orientation.' },
  { q: 'How will I reach my child in an emergency?', a: "Parents receive the Irish Life Experience Coordinator's mobile number before departure. It's reserved for emergency purposes only." },
  { q: 'Is health insurance included?', a: 'No. Participants must carry valid international health coverage for the duration of the program and submit proof before departure.' },
  { q: 'What happens if my child gets sick abroad?', a: 'We take precautions to keep students in a safe environment with well-prepared meals and adequate rest. When care is needed, staff arrange medical attention, accompany the student, and alert the family.' },
  { q: 'Are there special rules or policies?', a: 'Every student and parent signs a Participant and Parent Release. We take student safety and behavior seriously; serious violations can result in a call home, suspension from activities, or being sent home.' },
]

const COMMS: Faq[] = [
  { q: 'How do students communicate with home?', a: 'Students have limited phone access during the program. An international data plan or WiFi hotspots are the easiest way to stay in touch with family overseas.' },
  { q: 'Can students bring a cell phone?', a: 'Yes, cell phones are allowed — though they can be a distraction. We encourage students to step outside their everyday world and be present for the experience.' },
  { q: 'When can parents expect to hear from their child?', a: 'Students are very busy with classes and tours the first week, so please be patient as they settle into their new environment.' },
  { q: 'What is the best way to carry money?', a: 'Carry a limited amount of cash and use a credit/debit card as needed. Notify your bank in advance, and make infrequent larger ATM withdrawals rather than frequent small ones.' },
]

const TRAVEL: Faq[] = [
  { q: 'Where are students from?', a: 'Students come from every corner of America, and some from Canada and Europe. Social-media groups help everyone connect before departure.' },
  { q: 'How many students participate each year?', a: 'There are typically between 30 and 60 students each summer, with a good mix of ages from 14 to 18.' },
  { q: 'Will someone meet my child at the airport?', a: 'Yes. Students with connecting flights into Logan (BOS) are met after security by ILE counselors, escorted to the Aer Lingus terminal, and helped with check-in. Staff assist on the return as well.' },
  { q: 'Can parents attend the program?', a: 'The program is reserved for students only. Parents may meet their child afterward and travel together — Juniper Tours offers a specially designed package at a discounted rate.' },
  { q: 'Can my child visit family in Ireland?', a: 'Students with Irish relatives may visit during free time, as long as it does not interfere with required classes and tours, with a pre-approved parental permission slip.' },
  { q: 'What if I want to extend my trip?', a: 'Extending is common and even encouraged, arranged through Juniper Tours. Any difference in airfare from an itinerary change is the responsibility of the passenger.' },
]

const GROUPS: { title: string; items: Faq[] }[] = [
  { title: 'Eligibility & Applying', items: APPLYING },
  { title: 'Cost & Payment', items: COST },
  { title: 'Classes & Daily Life', items: LIFE },
  { title: 'Safety & Supervision', items: SAFETY },
  { title: 'Communication & Money', items: COMMS },
  { title: 'Students & Travel', items: TRAVEL },
]

export default function FaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="For Parents"
        title={<>Frequently Asked <em>Questions</em></>}
        subtitle="Everything we get asked most — from applying and payment to safety, daily life, and travel. Don't see your question? We're always happy to help."
        image="/images/photo-8282.jpg"
        breadcrumb={[{ label: 'For Parents', href: '/parents/' }, { label: 'FAQ' }]}
      />
      {GROUPS.map((g, i) => (
        <section key={g.title} className={`ile-section ${i % 2 === 0 ? 'ile-section--cream' : 'ile-section--white'} ile-section--tight`}>
          <div className="ile-container">
            <h2 className="ile-h2 ile-center" style={{ marginBottom: 36 }}>{g.title}</h2>
            <FaqAccordion items={g.items} />
          </div>
        </section>
      ))}
      <CtaBand title="Still Have Questions?" text="We'd love to help. Reach out and a real member of our team will get back to you." primary={{ label: 'Contact Us', href: '/contact/' }} secondary={{ label: 'Apply Now', href: '/apply/' }} />
    </main>
  )
}
