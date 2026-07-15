/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

export default function Internship() {
  return (
    <>
      <PageHero
        eyebrow="Embark with Landmark"
        title={<>Landmark <em>Internship</em></>}
        subtitle="Grow your career while helping bring learning to life through hands, on educational travel with our internship program."
        image="/images/landmark/boston-skyline-hero.jpg"
        breadcrumb={[{ label: "Landmark Internship" }]}
      />
      <section className="ile-section ile-section--white">
        <div className="ile-container ilp-prose ilp-prose--center lm-content-prose">
            <p>Step into the world of educational travel through the Landmark Educational Tours Internship Program. Interns become part of a supportive, employee-owned company where creativity, teamwork, and leadership are at the heart of what we do.</p>
            <p>This program opens the door to real-world experience in areas such as group coordination, trip operations, marketing, and hospitality. You’ll gain practical skills while contributing to meaningful travel experiences that spark curiosity and connection for students and educators alike.</p>
            <p>An internship with Landmark is more than just work experience, it’s a chance to grow your career while helping bring learning to life beyond the classroom.</p>
        </div>
      </section>
      <section className="ile-section ile-section--cream" aria-labelledby="landmark-internship-s0">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="landmark-internship-s0" className="lm-h2-amber">Tour Manager Internship Details</h2>

            <ul className="lm-content-list">
              <li>Key Responsibilities:</li>
              <li>Ensure the safety of all travelers.</li>
              <li>Lead student groups on educational tours, adhere to the pre-planned itinerary and schedule.</li>
              <li>Assist with trip logistics, including transportation coordination, hotel check-ins, meal arrangements, and attraction admissions.</li>
              <li>Serve as the primary point of contact for teachers, chaperones, and students throughout the trip.</li>
              <li>Facilitate educational experiences by providing brief historical, cultural, or STEM/STREAM context at key sites and attractions.</li>
              <li>Resolve issues and handle emergencies calmly while maintaining professionalism.</li>
              <li>Maintain detailed records and reports, including incidents and feedback from teachers or students.</li>
              <li>Navigate public transportation systems and unfamiliar locations efficiently.</li>
              <li>Communicate with Landmark staff before and after trips to support planning, feedback, and improvement of tour operations.</li>
              <li>Problem-solve in real time to handle unexpected changes or challenges in the schedule that may occur.</li>
            </ul>
        </div>
      </section>
      <section className="ile-section ile-section--white">
        <div className="ile-container ile-center">
          <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Start Planning Your Trip</Link>
        </div>
      </section>
      <BrochureBand />
      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Landmark Internship", path: "/landmark-internship/" },
      ])} />
    </>
  )
}
