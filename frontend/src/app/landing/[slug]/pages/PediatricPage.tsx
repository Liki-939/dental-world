import Image from 'next/image';
import { Users, Star, ShieldCheck, Smile, Sparkles, HandHeart, Zap, ScanLine, AlertCircle, Frown, Wind } from 'lucide-react';
import type { LocationData } from '../shared';
import {
  TopTrustBar, LandingHero, StatsBar, ServiceIconGrid, DoctorProfileCard, WhyChooseRow,
  SymptomsEmergency, FaqReviewsCta, LocationsSection, StickyBottomBar, BookingFormSection,
  NAVY,
} from '@/components/landing/LandingKit';

export default function PediatricPage({ branch, locations, whatsappUrl }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
}) {
  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['5-Star Rated Pediatric Dental Clinic', 'Child-Friendly Environment', 'Gentle & Painless Treatment', 'Advanced Technology']} />

      <LandingHero
        headlineLead="Best Pediatric Dentist at"
        headlineMain="Bachupally & Pragathi Nagar"
        subtitle="Expert Care for Your Child's Healthy Smile"
        desc="Pediatric Dental Care in Bachupally, Hyderabad — a fun, friendly clinic dedicated to gentle, fear-free treatment for kids of all ages."
        bullets={['Child-Friendly Environment', 'Gentle & Painless Care', 'Advanced Technology', 'Experienced Pediatric Dentist']}
        image="/images/pediatric/Pediatric Treatment Hero.png"
        imageAlt="Child smiling at the dentist giving a thumbs up"
        bookLabel="Book Appointment"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <StatsBar items={[
        { icon: <Users className="w-6 h-6" />, label: '10,000+', sub: 'Happy Kids Treated' },
        { icon: <Sparkles className="w-6 h-6" />, label: '15+', sub: 'Years of Pediatric Experience' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: '5-Star', sub: 'Rated on Google' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: 'Safe &', sub: 'Hygienic Environment' },
      ]} />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DoctorProfileCard
            name="Dr. AN Supraja"
            title="MDS Pedodontist"
            experienceBadge="15+ Years of Experience"
            bullets={[
              'Expert in Child Dental Care',
              'Gentle & Friendly Approach',
              'Specialized in Painless Treatment',
              'Committed to Healthy Smiles',
            ]}
            eyebrow="Meet Our Specialist Pediatric Dentist"
          />
          <div className="relative rounded-3xl overflow-hidden min-h-[260px] bg-slate-200">
            <Image src="/images/pediatric/ChatGPT Image Jun 22, 2026, 02_44_24 AM.png" alt="Dentist treating a young patient" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <ServiceIconGrid
        title="Complete Pediatric Dental Care"
        subtitle="From baby teeth to braces – we care for every smile at every age."
        items={[
          { icon: <Smile className="w-7 h-7" />, title: 'Kids Dental Cavity Treatment', desc: "Gentle cavity care to protect your child's beautiful smile." },
          { icon: <HandHeart className="w-7 h-7" />, title: 'Root Canal Treatment for Children', desc: 'Pain-free root canal treatment for infected or damaged teeth.' },
          { icon: <Sparkles className="w-7 h-7" />, title: 'Kids Braces & Orthodontics', desc: 'Correct alignment for a confident & healthy smile.' },
          { icon: <Zap className="w-7 h-7" />, title: 'Fluoride Treatment for Kids', desc: 'Strengthens teeth & prevents cavities effectively.' },
          { icon: <Frown className="w-7 h-7" />, title: 'Child Tooth Extraction', desc: 'Safe & painless extraction of baby or permanent teeth.' },
          { icon: <ShieldCheck className="w-7 h-7" />, title: 'Dental Sealants for Children', desc: 'Protects teeth from decay & keeps them cavity-free.' },
        ]}
      />

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-200">
            <Image src="/images/pediatric/ChatGPT Image Jun 22, 2026, 02_50_26 AM.png" alt="Pediatric dentist with child patient" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-heading font-black" style={{ color: NAVY }}>Why Parents Choose Our Pediatric Dental Clinic?</h3>
            <ul className="space-y-2">
              {['Specialized Pediatric Dentists', "Child-Friendly Dental Clinic in Bachupally & Pragathi Nagar", 'Painless & Fear-Free Treatment', 'Safe, Sterile & Hygienic Environment', 'Advanced Technology for Accurate Diagnosis', 'Loved by Thousands of Families'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm font-semibold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SymptomsEmergency
        title="Symptoms & Emergency Care for Kids"
        symptoms={[
          { icon: <AlertCircle className="w-5 h-5" />, label: 'Kids Toothache Relief' },
          { icon: <Zap className="w-5 h-5" />, label: 'Child Dental Emergency' },
          { icon: <Frown className="w-5 h-5" />, label: 'Pediatric Tooth Pain Doctor' },
          { icon: <Wind className="w-5 h-5" />, label: 'Swollen Gums in Kids Treatment' },
        ]}
        emergencyTitle="Dental Emergency? We're Here to Help!"
        emergencyItems={['Severe toothache', 'Broken or chipped tooth', 'Swollen gums or jaw', 'Bleeding or injury']}
        ctaLabel="Call Now"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <WhyChooseRow
        title="Kids Dental Hospital in Bachupally & Pragathi Nagar"
        items={[
          { icon: <Smile className="w-6 h-6" />, title: 'Fun & Friendly', desc: 'Atmosphere' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Comfortable', desc: 'Treatment Rooms' },
          { icon: <ScanLine className="w-6 h-6" />, title: 'Advanced Dental', desc: 'Technology' },
          { icon: <HandHeart className="w-6 h-6" />, title: 'Strict Hygiene', desc: '& Safety' },
        ]}
      />

      <FaqReviewsCta
        faqs={[
          { question: 'What age should my child visit the dentist?' },
          { question: 'Are dental treatments for kids painful?' },
          { question: 'How can I prevent cavities in my child?' },
          { question: 'Do you provide braces for children?' },
          { question: 'What if my child has a dental injury?' },
          { question: 'Is fluoride treatment safe for kids?' },
        ]}
        reviews={[
          { name: 'Priya R.', text: 'Very friendly staff and excellent care for kids. My son loves visiting Dental World!' },
          { name: 'Kavya S.', text: 'My daughter had a great experience. Painless treatment and good guidance.' },
        ]}
        ctaTitle="Give Your Child the Gift of a Healthy Smile!"
        ctaDesc="Book an appointment with the best pediatric dentist in Bachupally & Pragathi Nagar."
        ctaChecks={['Gentle', 'Safe', 'Fun', 'Trusted']}
        bookLabel="Book Appointment"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <BookingFormSection title="Book Your Child's Appointment" treatment="Kids & Pediatric Dentistry" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `Dental World – ${l.name}`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Give Your Child the Gift of a Healthy Smile!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
