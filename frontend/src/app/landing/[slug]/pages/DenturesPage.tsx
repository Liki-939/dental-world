import Image from 'next/image';
import Link from 'next/link';
import { Users, ShieldCheck, Smile, HandCoins, Sparkles, Wrench, CalendarCheck, ScanLine, PenTool, Settings2, PartyPopper } from 'lucide-react';
import type { LocationData } from '../shared';
import {
  TopTrustBar, LandingHero, StatsBar, ServiceIconGrid, DoctorProfileCard, WhyChooseRow,
  KeywordChecklist, MiniFAQList, HowItWorksFlow, LocationsSection, StickyBottomBar,
  BookingFormSection, NAVY, NAVY_LIGHT,
} from '@/components/landing/LandingKit';

export default function DenturesPage({ branch, locations, whatsappUrl }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
}) {
  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['Advanced Denture Solutions', 'Comfortable Fit', 'Natural Look & Feel', 'Long Lasting']} />

      <LandingHero
        eyebrow="Expert Denture Care in Hyderabad"
        headlineLead="Premium Dentures"
        headlineMain="for a Confident Smile"
        subtitle="Bachupally & Pragathi Nagar, Hyderabad"
        desc="Rediscover the joy of eating, speaking and smiling with custom-made dentures designed for perfect comfort, natural look and long-lasting performance."
        bullets={['Natural Look & Feel', 'Comfortable & Secure Fit', 'Advanced Digital Technology', 'Affordable Denture Care']}
        image="/images/new images/Dentures 2.jpeg"
        imageAlt="Denture prosthetic close-up"
        bookLabel="Book Your Free Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <StatsBar items={[
        { icon: <Users className="w-6 h-6" />, label: 'Experienced', sub: 'Prosthodontists' },
        { icon: <Smile className="w-6 h-6" />, label: 'Custom Fit', sub: 'Dentures' },
        { icon: <Sparkles className="w-6 h-6" />, label: 'Painless', sub: 'Fitting' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: 'High Quality', sub: 'Materials' },
        { icon: <Wrench className="w-6 h-6" />, label: 'After Care', sub: 'Support' },
      ]} />

      <ServiceIconGrid
        title="Our Denture Solutions"
        items={[
          { icon: <Smile className="w-7 h-7" />, title: 'Complete Dentures', desc: 'For missing all upper or lower teeth' },
          { icon: <Sparkles className="w-7 h-7" />, title: 'Partial Dentures', desc: 'For missing some natural teeth' },
          { icon: <ShieldCheck className="w-7 h-7" />, title: 'Implant Supported Dentures', desc: 'Maximum stability & comfort' },
          { icon: <Wrench className="w-7 h-7" />, title: 'Flexible Partial Dentures', desc: 'Lightweight & metal-free' },
          { icon: <Settings2 className="w-7 h-7" />, title: 'Teeth Supported Overdentures', desc: 'Better grip & bone protection' },
          { icon: <PartyPopper className="w-7 h-7" />, title: 'Full Mouth Rehabilitation', desc: 'Complete smile transformation' },
        ]}
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-150 rounded-3xl p-6 space-y-3">
            <h3 className="text-lg font-heading font-black" style={{ color: NAVY_LIGHT }}>Smile Transformation with Dentures</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image src="/images/before and after/Dentures before and after.jpeg" alt="Denture before" fill className="object-cover object-left" sizes="300px" />
                <span className="absolute bottom-2 left-2 bg-slate-800/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">Before</span>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image src="/images/before and after/Dentures before and after.jpeg" alt="Denture after" fill className="object-cover object-right" sizes="300px" />
                <span className="absolute bottom-2 left-2 text-white text-[10px] font-bold px-2 py-0.5 rounded" style={{ backgroundColor: NAVY_LIGHT }}>After</span>
              </div>
            </div>
          </div>
          <DoctorProfileCard
            name="Dr. Anurag Lahoti"
            title="MDS – Prosthodontist"
            image="/anurag.jpg"
            experienceBadge="15+ Years of Experience in Advanced Prosthodontics"
            bullets={[
              'Specialist in Complete, Partial & Implant Dentures',
              'Digital Precision for Perfect Fit',
              'Painless & Comfortable Treatment',
              'Personalized Care for Every Patient',
            ]}
            eyebrow="Meet Our Specialist Prosthodontist"
          />
        </div>
      </section>

      <WhyChooseRow
        title="Why Choose Dental World for Dentures?"
        items={[
          { icon: <Users className="w-6 h-6" />, title: 'Expert Prosthodontists', desc: '15+ Years Experience' },
          { icon: <ScanLine className="w-6 h-6" />, title: 'Advanced Digital', desc: 'Impression' },
          { icon: <Smile className="w-6 h-6" />, title: 'Custom Fit', desc: 'for Maximum Comfort' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Natural', desc: 'Look & Feel' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Long-lasting', desc: 'Results' },
          { icon: <HandCoins className="w-6 h-6" />, title: 'Affordable', desc: 'Denture Care' },
        ]}
      />

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <KeywordChecklist
            title="Everything You Need to Know About Dentures"
            columns={[
              ['What are dentures', 'What is denture in dental', 'What is the meaning of denture', 'How to clean dentures', 'How to clean dentures at home', 'Are dentures painful'],
              ['Denture implants', 'Dentures cost', 'Dentures price', 'Can dentures be fitted to receding gums', 'Are dentures permanent or removable', 'Removable dentures'],
            ]}
          />
          <div>
            <h3 className="text-lg font-heading font-black mb-4" style={{ color: NAVY }}>Frequently Asked Questions</h3>
            <MiniFAQList faqs={[
              { question: 'What are dentures?' },
              { question: 'Are dentures painful?' },
              { question: 'How do I clean my dentures at home?' },
              { question: 'Can dentures be fitted to receding gums?' },
              { question: 'Are dentures permanent or removable?' },
            ]} />
            <Link href="/faq" className="inline-block mt-4 text-white text-xs font-black px-5 py-2.5 rounded-lg" style={{ backgroundColor: NAVY }}>
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      <HowItWorksFlow
        title="Your Journey to a Confident Smile"
        steps={[
          { icon: <CalendarCheck className="w-6 h-6" />, title: 'Consultation & Examination' },
          { icon: <ScanLine className="w-6 h-6" />, title: 'Digital Scan & Planning' },
          { icon: <PenTool className="w-6 h-6" />, title: 'Custom Denture Design' },
          { icon: <Settings2 className="w-6 h-6" />, title: 'Fitting & Adjustments' },
          { icon: <Wrench className="w-6 h-6" />, title: 'Follow-up & Support' },
          { icon: <PartyPopper className="w-6 h-6" />, title: 'Enjoy Your New Smile' },
        ]}
      />

      <BookingFormSection title="Book Your Denture Consultation" treatment="Hybrid & Full Mouth Dentures" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Your New Smile is Just an Appointment Away!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
