/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import TeamGrid from '@/components/TeamGrid'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

const TEAM = [
  { name: `Maya Slavkin`, title: `Travel Consultant`, bio: `Originally from Los Angeles CA, Maya has a profound passion for travel and has spent the past three years working in international education, holding teaching positions in Spain and New Zealand. She has various hospitality and sales experience that she is excited to bring to Landmark Educational Tours. She graduated from George Washington University in 2020 with a B.A. in Sociology. Maya 's love of travel has taken her to 28 countries and some of her dream destinations include Iceland, Brazil, and Colombia! In her free time, Maya enjoys reading, spending time at the beach, cycling, and of course, traveling!` },
  { name: `Maggie Shelton`, title: `Travel Consultant and Landmark Leader`, bio: `Maggie is originally from Richmond, VA! She enjoys traveling, hiking, yoga, and history. In her free time she loves going on walks or reading! She loves helping people discover new places and learning new things. She is super passionate about forever learning and trying new things! Dream Destinations: Greece or Australia one day and spend the whole day on the beach!`, photo: `/images/landmark/team/maggie.jpg` },
  { name: `Michaela Ruffino`, title: `Managing Director`, bio: `Currently residing in Rhode Island, Michaela is an accomplished leader in the hospitality industry. With a rich background and experience, she has honed her expertise in the field and possesses an impressive portfolio of travel knowledge. Michaela holds a bachelor's degree in Travel and Tourism Hospitality Management from Johnson &amp; Wales University, which has equipped her with the skills and knowledge necessary to excel in her career. In her spare time, Michaela likes to spend time with her beloved dogs and indulges in baking. She also has an insatiable appetite for travel and has set her sights on visiting some of the most breathtaking countries in the world. Her current bucket list includes Japan, Greece, Maldives, and many more. Michaela is passionate about exploring new cultures and experiencing everything the world has to offer.` },
  { name: `Tara Marcucci`, title: `Travel Consultant and Senior Landmark Leader`, bio: `Tara is one of our Landmark Specialists and Trip Leader. Currently living in Rhode Island, Tara shares her passion for travel and experience in trip management with every trip. Boasting her U.S. National Parks pass, Tara hopes to one day visit every U.S. National Park with her dogs.` },
  { name: `Ericka Montano`, title: `Operations Director`, bio: `Ericka is our Director of Operations at Landmark Educational Tours. She has never stopped learning and is about to graduate from Tourism Business Administration. Ericka is fully bilingual and has more than 20 years of experience working in operations activities such as group management, financial management, contract management, logistics, and customer service. Her experience working with large corporations such as TUI and First Choice has given her the knowledge and skills to help improve our product. Ericka's signature is her strong service philosophy and focuses on achieving all aspects of our elite service.` },
  { name: `Angela Gallagher`, title: `Account Manager`, bio: `Hi my name is Angela and I am so excited to be apart of the Landmark team. I currently live in Phoenix, AZ with my husband and golden doodle puppy named Stella! I graduated from the University of Arizona with a degree in Elementary Education. During my time at Arizona I was able to study Art History abroad in Prague, Czech Republic where my love for travel and history began. I have been to 25 different states and 12 countries. In my free time I love to go for walks, go to Orangetheory, and be with friends and family.` },
  { name: `Martha Montano`, title: `Operations Specialist`, bio: `Martha, hailing all the way from Cancún, México, is a true globetrotter with a passion for travel and a thirst for cultural exploration. Over the past 16 years, she has embarked on extraordinary adventures, living on the ocean and visiting over 48 countries and counting. With a dream of completing the seven wonders of the world, Martha has already checked off five and eagerly anticipates visiting Petra and The Taj Mahal to fulfill her goal. Her experiences working for a cruise line have honed her skills in understanding diverse customer needs and providing unique and unforgettable experiences. Martha is known for her dedication, organization, trustworthiness, and ability to work efficiently under pressure. Thriving in a culture of positive customer service, Martha enjoys engaging with customers and delivering exceptional experiences. Her passion for travel, coupled with her customer-centric approach, makes her a valuable asset at Landmark.` },
  { name: `Emily Wilson`, title: `Account Manager`, bio: `Currently residing in Atlanta, GA, Emily brings years of experience as an elementary educator and community engagement leader. She is deeply passionate about travel, education, and enhancing client experiences. Emily excels in sharing ideas and fostering collaboration to achieve common goals. Outside of work, Emily enjoys live music, teaching Pure Barre classes, and spending quality time with her husband, son, and two dogs. Dream Destinations: Italy, Japan, New Zealand, and Tanzania!`, photo: `/images/landmark/team/emily.jpg` },
  { name: `Briana Kotchen`, title: `Marketing Specialist`, bio: `Currently, in Minneapolis Minnesota, Briana is a new addition to our marketing team! She is passionate about marketing, social media, and traveling. Briana is a creative individual, she enjoys sharing her ideas with others and being able to come together as a team to achieve different goals. In her free time, she enjoys watching sports, baking, and spending time with her family and friends. Dream Destinations: Greece, Australia, London, and Puerto Rico!` },
  { name: `Lupita Ramirez`, title: `Operations Specialist`, bio: `45 years Married Tourist profession 28 years of experience as a travel consultant, sales, supervision, coordination, group logistics and operations of a receptive travel company. I think that tourism in general has the most magical vibe, people as tourists, travelers, look for the best and safest option to go out to see the world and one receives all that positive emotion that keeps us giving our best every day.`, photo: `/images/landmark/team/lupita.jpg` },
  { name: `Iliana Arista`, title: `Operations Specialist`, bio: `From Cancun, Mexico to the world! Iliana is a Passionate of traveling since she can remember. With nineteen years of experience in the Tourism field is able to identify the best options for an unforgettable lifetime trip. In her professional background we can find restaurants, hotels and cruise ships. She likes to spend time with friends and family, enjoys to explore new destinations and to go back to her favorite spots such as Mexico City, Disney parks, NY, Las Vegas, Madrid and London just to mention few. Bucket List: Japan, Thailand, Cambodia and the list goes on!`, photo: `/images/landmark/team/iliana.jpg` },
  { name: `Katherine Faucher`, title: `Travel Consultant`, bio: `Katherine is originally from Hubbardston, Massachusetts, and is currently finishing her senior year at Johnson &amp; Wales University, where she is earning a bachelor's degree in Hospitality Management. She enjoys traveling, thrifting, sewing, and attending concerts. In her free time, Katherine loves cooking and going on long walks. Her dream travel destinations include Iceland, the Philippines, and Brazil!` },
  { name: `Edwin Yip`, title: `IT Specialist`, bio: `Edwin Yip has decades of commerce system experience. Most recent is his 15 years of building systems for the travel industry. This experience began with First Choice in the United Kingdom which merged with TUI Travel PLC which became the largest tour operator in the world with over 60 thousand employees. While as the Director of Application Development at TUI Student Travel he worked with Brightspark , Jumpstreet, Education Tours, and other student brands of the company in building out their commerce platforms.`, photo: `/images/landmark/team/edwin.jpg` },
  { name: `Maren Eramo`, title: `Human Resources Manager`, bio: `My name is Maren, and I am part of the Human Resources team, based in Haverhill, Massachusetts. I am passionate about supporting others and being a reliable resource for employees whenever they need assistance. Always looking at the glass half full, I take pride in being dependable, hardworking, and collaborative. I enjoy working with teams to help create a smooth and supportive work environment. Outside of work, I enjoy surfing, working out, and spending time with the people I love. Dream Destinations : Bali, British Columbia, Greece, St. Croix !` },
  { name: `Josh Segedy`, title: `Accounting Executive`, bio: `Josh serves as a key member of the Landmark accounting team, handling the financial side of things from our Middleton, MA office. With a Finance degree from UMass Amherst, he enjoys the challenge of managing the complex logistics and financial details that allow our tours to run without a hitch. In his free time, Josh enjoys working out, watching sports, and spending time at the beach. Dream Destinations: Greece, Iceland, and Japan!` },
  { name: `Gerardo Barrera`, title: `Finance Director`, bio: `Gerardo Barrera began his journey in the travel Industry 20+ years ago when he joined as a Finance Director for StudentCity.com. He gradually became the Chief Financial Officer of the parent company, TUI Education North America which portfolio includes Brightspark, Educational Tours, Jumpstreet, Educatours, Travel Adventures, and New Horizons. Now, Gerardo lives in Boston with his wife and two sons. He also is the Co-Founder of Go Blue Tours, Juniper Tours, and Landmark Educational Tours.`, photo: `/images/landmark/team/gerardo.jpg` },
]


export default function AboutLandmark() {
  return (
    <>
      <PageHero
        eyebrow="Our passion for travel is indescribable"
        title={<>About <em>Landmark</em></>}
        subtitle="We are an employee-owned team crafting educational group journeys that inspire, educate, and connect travelers of every age."
        image="/images/landmark/about-team.jpg"
        breadcrumb={[{ label: "About Landmark" }]}
      />
      <section className="ile-section ile-section--white">
        <div className="ile-container ilp-prose ilp-prose--center lm-content-prose">
            <p>Discover the world's most iconic destinations with Landmark Educational Tours. As an employee-owned travel company, we specialize in creating exceptional group tours designed to inspire, educate, and connect. Our passionate team of travel experts is committed to delivering top-tier educational experiences rooted in hospitality. Whether you're a student, educator, or lifelong learner, join us for unforgettable journeys that bring history, culture, and adventure to life.</p>
        </div>
      </section>
      <section className="ile-section ile-section--cream" aria-labelledby="about-landmark-s0">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="about-landmark-s0" className="lm-h2-amber">Meet Our Team</h2>

            <TeamGrid members={TEAM} />
        </div>
      </section>
      <section className="ile-section ile-section--white" aria-labelledby="about-landmark-s1">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="about-landmark-s1" className="lm-h2-amber">We work with only the best.</h2>
            <p>Building a community that works with you and your group in mind.</p>

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
        { name: "About Landmark", path: "/about-landmark/" },
      ])} />
    </>
  )
}
