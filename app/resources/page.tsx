/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={<><em>Resources</em></>}
        subtitle="Everything you need to feel ready and confident before your group departs on its next adventure."
        image="/images/landmark/philadelphia-hero.jpg"
        breadcrumb={[{ label: "Resources" }]}
      />
      <section className="ile-section ile-section--white">
        <div className="ile-container ilp-prose ilp-prose--center lm-content-prose">
            <p>There is a lot of unknown when traveling. Take a minute to check out all of our great resources to help prepare you for your upcoming group trip.</p>
        </div>
      </section>
      <section className="ile-section ile-section--cream" aria-labelledby="resources-s0">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="resources-s0" className="lm-h2-amber">About Us</h2>
            <p>Get to know Landmark! We have over 50 years of combined experience in the tourism industry and we love to share our knowledge with our customers.</p>

        </div>
      </section>
      <section className="ile-section ile-section--white" aria-labelledby="resources-s1">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="resources-s1" className="lm-h2-amber">Landmark Leaders</h2>
            <p>As your tour manager, Landmark Leaders manage the logistics of your trip allowing you to savor the new adventure with your students.</p>

        </div>
      </section>
      <section className="ile-section ile-section--cream" aria-labelledby="resources-s2">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="resources-s2" className="lm-h2-amber">Travel Protection</h2>
            <p>Unfortunately not everything is predictable. Luckily, we offer Travel Protection as an add-on to any trip to help ease the worry of the unknown.</p>

        </div>
      </section>
      <section className="ile-section ile-section--white" aria-labelledby="resources-s3">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="resources-s3" className="lm-h2-amber">Frequently Asked Questions</h2>
            <p>You have questions, we’ve got answers. Our travel specialists have answers all of your burning questions to help prepare you for your upcoming trip.</p>

        </div>
      </section>
      <section className="ile-section ile-section--cream" aria-labelledby="resources-s4">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="resources-s4" className="lm-h2-amber">Packing List</h2>
            <p>Not sure what to pack? That’s okay, we have created a full and detailed packing list for any trip. We got into the nitty gritty of all items to make sure that forgetting a toothbrush does not end up on your itinerary.</p>

        </div>
      </section>
      <section className="ile-section ile-section--white" aria-labelledby="resources-s5">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="resources-s5" className="lm-h2-amber">Blog</h2>
            <p>We have a passion for travel, and we love to share our journeys, stories, and tips with the world. Check out our articles to learn a tip or two before you go on your next trip.</p>

        </div>
      </section>
      <section className="ile-section ile-section--cream" aria-labelledby="resources-s6">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="resources-s6" className="lm-h2-amber">Brochure</h2>
            <p>Check out our 2024 Travel Brochure! It is full of hidden goodies, tips, and all of our amazing destinations. Meet our team, learn about our company, and so much more.</p>

        </div>
      </section>
      <section className="ile-section ile-section--white" aria-labelledby="resources-s7">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="resources-s7" className="lm-h2-amber">Privacy Policy</h2>


        </div>
      </section>
      <section className="ile-section ile-section--cream">
        <div className="ile-container ile-center">
          <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Start Planning Your Trip</Link>
        </div>
      </section>
      <BrochureBand />
      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources/" },
      ])} />
    </>
  )
}
