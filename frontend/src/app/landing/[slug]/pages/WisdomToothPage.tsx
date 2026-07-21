import Image from 'next/image';
import { Users, Star, ShieldCheck, ScanLine, Zap, Clock3, Award, ArrowRight } from 'lucide-react';
import type { LocationData } from '../shared';
import {
  TopTrustBar, LandingHero, StatsBar, DoctorProfileCard, QuoteCard, WhyChooseRow,
  HowItWorksFlow, KeywordChecklist, FaqReviewsCta, LocationsSection, StickyBottomBar,
  BookingFormSection, NAVY, NAVY_LIGHT,
} from '@/components/landing/LandingKit';

export default function WisdomToothPage({ branch, locations, whatsappUrl }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
}) {
  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['Advanced Surgical Care', 'Painless & Comfortable', '3D Imaging Technology', 'Sterile & Safe Environment']} />

      <LandingHero
        eyebrow="Expert Oral & Maxillofacial Care in Bachupally & Pragathi Nagar, Hyderabad"
        headlineLead="Best Oral & Maxillofacial Surgeon for"
        headlineMain="Wisdom Tooth Treatment"
        subtitle="Safe. Painless. Precise."
        desc="Dental World offers expert wisdom tooth treatment, surgical dental care, and advanced treatment for complex oral conditions."
        bullets={['Expert Oral Surgeons', 'Painless Treatment', '3D Imaging Precision', 'Minimal Swelling', 'Faster Recovery', 'Sterile & Safe']}
        image="/images/new images/Treatments Theme Images/Wisdom tooth Extraction.png"
        imageAlt="Wisdom tooth 3D illustration"
        bookLabel="Book Your Surgical Consultation Today"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        badgeTop="19+ Years Experience"
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DoctorProfileCard
            name="Dr. Yousuf Qureshi"
            title="MDS – Oral & Maxillofacial Surgery"
            experienceBadge="19+ Years of Surgical Experience"
            bullets={[
              'Specialist in Wisdom Tooth Removal',
              'Expert in Complex Oral & Maxillofacial Surgeries',
              'Advanced Training in Implant & Facial Trauma',
              'Thousands of Successful Surgeries',
            ]}
            eyebrow="Meet Our Oral & Maxillofacial Surgeon"
          />
          <QuoteCard
            quote="Our goal is simple – relieve your pain, restore your oral health, and give you the confidence to smile again."
            author="Dr. Yousuf Qureshi, MDS – Oral & Maxillofacial Surgery"
          />
        </div>
      </section>

      <WhyChooseRow
        title="Why Dental World for Wisdom Tooth Treatment?"
        items={[
          { icon: <ScanLine className="w-6 h-6" />, title: 'Advanced 3D', desc: 'Imaging' },
          { icon: <Zap className="w-6 h-6" />, title: 'Painless Laser', desc: 'Technology' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Minimal Swelling', desc: '& Discomfort' },
          { icon: <Clock3 className="w-6 h-6" />, title: 'Faster Recovery', desc: 'Time' },
          { icon: <Award className="w-6 h-6" />, title: 'Sterile & Safe', desc: 'Environment' },
          { icon: <Users className="w-6 h-6" />, title: 'Affordable', desc: 'Treatment' },
        ]}
      />

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-center text-lg md:text-xl font-heading font-black mb-8" style={{ color: NAVY }}>
            Wisdom Tooth Extraction &ndash; Before &amp; After
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="border-2 border-slate-200 rounded-2xl overflow-hidden max-w-sm w-full">
              <div className="px-4 py-2 text-sm font-black text-slate-800">Before Extraction <span className="text-slate-400 font-semibold">&middot; Impacted &amp; Inflamed</span></div>
              <div className="relative aspect-video"><Image src="/images/cases/rct_xray_before.png" alt="Before wisdom tooth extraction" fill className="object-cover" sizes="400px" /></div>
            </div>
            <ArrowRight className="w-6 h-6 shrink-0 hidden sm:block" style={{ color: NAVY_LIGHT }} />
            <div className="border-2 border-emerald-200 rounded-2xl overflow-hidden max-w-sm w-full">
              <div className="px-4 py-2 text-sm font-black text-emerald-700">After Extraction <span className="text-slate-400 font-semibold">&middot; Clean Healing Zone</span></div>
              <div className="relative aspect-video"><Image src="/images/cases/rct_xray_after.png" alt="After wisdom tooth extraction" fill className="object-cover" sizes="400px" /></div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorksFlow
        title="Treatment Journey — From Pain Diagnosis to Precision Extraction"
        steps={[
          { icon: <span className="font-black">1</span>, title: 'Consultation & 3D Scan', desc: 'Detailed digital evaluation' },
          { icon: <span className="font-black">2</span>, title: 'Diagnosis & Treatment Plan', desc: 'Personalized plan for safe care' },
          { icon: <span className="font-black">3</span>, title: 'Painless Anesthesia', desc: 'Comfort first approach' },
          { icon: <span className="font-black">4</span>, title: 'Precision Extraction', desc: 'Safe removal with advanced tools' },
          { icon: <span className="font-black">5</span>, title: 'Suturing & Care', desc: 'Minimal discomfort & proper healing' },
          { icon: <span className="font-black">6</span>, title: 'Recovery Support', desc: 'Follow-up for quick recovery' },
        ]}
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4">
          <KeywordChecklist
            title="Everything You Need to Know About Wisdom Tooth Extraction"
            columns={[
              ['Wisdom tooth extraction', 'Wisdom tooth extraction cost', 'Wisdom tooth extraction pain', 'After wisdom tooth extraction', 'Wisdom tooth extraction recovery time', 'Dos and don\'ts after wisdom tooth extraction'],
              ['Post wisdom tooth extraction care', 'Swelling after wisdom tooth extraction', 'Does wisdom tooth extraction hurt', 'What to eat after wisdom tooth extraction', 'How long does pain after wisdom tooth extraction last', 'Is wisdom tooth extraction necessary'],
              ['How long does a wisdom tooth extraction take', 'What to do after wisdom tooth extraction', 'Will my teeth shift after wisdom tooth extraction', 'How long does wisdom tooth extraction pain last', 'Can I eat solid food after wisdom tooth extraction', 'Are antibiotics necessary after wisdom tooth extraction'],
              ['Can I eat rice after wisdom tooth extraction', 'Can we eat after wisdom tooth extraction', 'Do I have to extract my wisdom tooth', 'How is wisdom tooth extraction done', 'How long does it bleed after wisdom tooth extraction', 'How much does a wisdom tooth extraction cost'],
            ]}
          />
        </div>
      </section>

      <StatsBar items={[
        { icon: <Users className="w-6 h-6" />, label: '5,000+', sub: 'Happy Patients' },
        { icon: <Award className="w-6 h-6" />, label: '19+', sub: 'Years of Experience' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: '100%', sub: 'Safe & Sterile' },
        { icon: <Clock3 className="w-6 h-6" />, label: '7 Days', sub: 'a Week Open' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: 'High Success', sub: 'Surgical Outcomes' },
      ]} />

      <FaqReviewsCta
        faqs={[
          { question: 'Is wisdom tooth extraction painful?' },
          { question: 'How long is the recovery after extraction?' },
          { question: 'When is wisdom tooth removal necessary?' },
          { question: 'What can I eat after extraction?' },
        ]}
        reviews={[
          { name: 'Priya S.', text: 'I had severe pain due to my wisdom tooth. Dr. Yousuf Qureshi explained everything clearly and the extraction was completely painless. Highly recommended!' },
          { name: 'Rahul K.', text: 'Amazing experience! Quick recovery and very professional care.' },
        ]}
        ctaTitle="Don't Ignore Wisdom Teeth Pain"
        ctaDesc="Or swelling. Get expert care today — book your surgical consultation now."
        ctaChecks={['Painless', 'Precise', '3D Imaging', 'Safe']}
        bookLabel="Book Surgical Consultation Today"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <BookingFormSection title="Book Your Wisdom Tooth Consultation" treatment="Wisdom Tooth Extraction" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Don't Ignore Wisdom Tooth Pain — Get Expert Care Today!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
