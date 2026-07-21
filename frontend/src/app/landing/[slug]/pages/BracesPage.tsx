import Link from 'next/link';
import { MapPin, Users, Star, Sparkles, ShieldCheck, Sliders, HandCoins, Smile, Award } from 'lucide-react';
import type { LocationData } from '../shared';
import {
  TopTrustBar, LandingHero, StatsBar, ServiceImageGrid, DoctorProfileCard, QuoteCard,
  WhyChooseRow, MiniFAQList, LocationsSection, StickyBottomBar, BookingFormSection,
  NAVY, NAVY_LIGHT,
} from '@/components/landing/LandingKit';

export default function BracesPage({ branch, locations, whatsappUrl }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
}) {
  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['Advanced Orthodontic Care', 'Digital Smile Planning', 'Affordable Braces Packages', 'Flexible EMI Options']} />

      <LandingHero
        eyebrow="Expert Orthodontic Care in Hyderabad"
        headlineLead="Best Dental Braces"
        headlineMain="in Hyderabad"
        subtitle="For a Perfectly Aligned Smile"
        desc="Advanced Braces & Aligners for All Ages. Serving Bachupally, Nizampet, Pragathi Nagar & all over Hyderabad."
        bullets={['Invisible Braces & Clear Aligners', 'Teeth Alignment Experts', 'Ceramic & Metal Braces', 'Affordable Braces Cost', 'Digital Smile Planning', 'Flexible EMI Available']}
        image="/images/braces/braces_treatment_hero.png"
        imageAlt="Teenager smiling with braces"
        bookLabel="Book Your Braces Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        beforeAfter={{ before: '/images/cases/braces_before.png', after: '/images/cases/braces_after.png' }}
      />

      <StatsBar items={[
        { icon: <Users className="w-6 h-6" />, label: '10,000+', sub: 'Smiles Transformed' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: '5-Star', sub: 'Patient Rating' },
        { icon: <Sparkles className="w-6 h-6" />, label: 'Advanced', sub: 'Orthodontic Technology' },
      ]} />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DoctorProfileCard
            name="Dr Nitin Bharat"
            title="MDS Orthodontics & Dentofacial Orthopedics"
            image="/nithin.jpg"
            experienceBadge="14+ Years of Expert Orthodontics"
            bullets={[
              'Specialist in Teeth Alignment & Orthodontic Braces',
              'Expert in Invisible Braces & Clear Aligners',
              'Ceramic Braces & Metal Braces Specialist',
              'Personalized Treatment Planning',
              'Advanced Digital Orthodontics',
            ]}
            eyebrow="Meet Your Orthodontic Specialist"
          />
          <QuoteCard
            quote="Our mission is to deliver beautiful smiles with advanced technology, personalized care and affordable treatment."
            author="Dr. Nitin Bharat"
          />
        </div>
      </section>

      <ServiceImageGrid
        title="Our Braces & Orthodontic Treatments"
        items={[
          { image: '/images/braces/Hyper-realistic_close-up_of_human_teeth_202606212034.jpeg', title: 'Metal Braces', desc: 'Strong, effective and ideal for all types of orthodontic issues.' },
          { image: '/images/braces/Close-up_smiling_mouth_showing_modern_202606212033.jpeg', title: 'Ceramic Braces', desc: 'Tooth-colored braces for a natural and discreet look.' },
          { image: '/images/braces/Set_of_six_premium_orthodontic_202606212033.jpeg', title: 'Invisible Braces', desc: 'Virtually invisible solution for confident teeth straightening.' },
          { image: '/images/braces/Premium_dental_aligner_case_opened_202606212033.jpeg', title: 'Clear Aligners', desc: 'Removable aligners for comfort, convenience and flexibility.' },
          { image: '/images/before and after/Dental Braces before and after.jpeg', title: 'Teeth Alignment Treatment', desc: 'Correct crowding, spacing, rotation and bite issues.' },
          { image: '/images/braces/Footer braces.jpeg', title: 'Orthodontic Braces Treatment', desc: 'Comprehensive care for kids, teens & adults.' },
        ]}
      />

      <WhyChooseRow
        title="Why Choose Dental World for Orthodontic Care?"
        items={[
          { icon: <Sliders className="w-6 h-6" />, title: 'Advanced', desc: 'Technology' },
          { icon: <Users className="w-6 h-6" />, title: 'Expert', desc: 'Orthodontists' },
          { icon: <HandCoins className="w-6 h-6" />, title: 'Affordable', desc: 'Braces Cost' },
          { icon: <Smile className="w-6 h-6" />, title: 'Customized', desc: 'Treatment' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Comfortable', desc: 'Experience' },
          { icon: <Award className="w-6 h-6" />, title: 'Trusted by', desc: 'Thousands' },
        ]}
      />

      <StatsBar items={[
        { icon: <Users className="w-6 h-6" />, label: '10,000+', sub: 'Happy Patients' },
        { icon: <Award className="w-6 h-6" />, label: '15+', sub: 'Years of Experience' },
        { icon: <Smile className="w-6 h-6" />, label: '5,000+', sub: 'Orthodontic Cases' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: '100%', sub: 'Patient Satisfaction' },
      ]} />

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-heading font-black mb-4" style={{ color: NAVY }}>Frequently Asked Questions</h3>
            <MiniFAQList faqs={[
              { question: 'What are dental braces?' },
              { question: 'Which type of braces is best for me?' },
              { question: 'How much do braces cost in Hyderabad?' },
              { question: 'How long does braces treatment take?' },
              { question: 'Are invisible braces effective?' },
              { question: 'Do braces treatment cause pain?' },
              { question: 'Can adults get braces?' },
            ]} />
            <Link href="/faq" className="inline-block mt-4 text-white text-xs font-black px-5 py-2.5 rounded-lg" style={{ backgroundColor: NAVY }}>
              View All FAQs
            </Link>
          </div>

          <div className="bg-[#F7F9FC] border border-slate-150 rounded-3xl p-6 md:p-8 space-y-3">
            <h3 className="text-lg font-heading font-black" style={{ color: NAVY }}>Braces Clinic Near You</h3>
            {['Best Dental Braces in Bachupally', 'Orthodontist Near Me in Nizampet', 'Invisalign & Clear Aligners in Pragathi Nagar', 'Affordable Teeth Straightening in Hyderabad', 'Ceramic Braces Clinic in Bachupally'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700 bg-white rounded-xl px-3.5 py-2.5 border border-slate-100">
                <MapPin className="w-4 h-4 shrink-0" style={{ color: NAVY_LIGHT }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingFormSection title="Book Your Braces Consultation" treatment="Dental Braces" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Ready to Transform Your Smile?"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
