import Link from 'next/link';
import { Users, Star, ScanLine, Smile, Award, ShieldCheck, Sparkles, CheckCircle2, Clock3 } from 'lucide-react';
import type { LocationData } from '../shared';
import { treatmentsData } from '@/data/treatments';
import {
  TopTrustBar, LandingHero, StatsBar, ServiceIconGrid, HowItWorksFlow, DoctorProfileCard,
  CostHighlightCard, ComparisonTable, WhyChooseRow, MiniFAQList, LocationsSection,
  StickyBottomBar, BookingFormSection, NAVY,
} from '@/components/landing/LandingKit';

export default function InvisalignPage({ branch, locations, whatsappUrl }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
}) {
  const data = treatmentsData['invisalign-treatment'];

  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['Gold Certified Invisalign Provider', 'iTero 3D Digital Scans', 'Virtually Invisible Aligners', '0% EMI Available']} />

      <LandingHero
        eyebrow="Bachupally & Pragathi Nagar, Hyderabad"
        headlineLead="Invisalign Treatment in"
        headlineMain="Hyderabad"
        subtitle="Straighten Your Teeth Without Braces"
        desc="Transform your smile with Invisalign clear aligners from Gold Certified Invisalign Provider Dr. Nitin Bharat, MDS Orthodontics with 14+ years experience."
        bullets={['Virtually Invisible Aligners', 'Comfortable & Removable Trays', 'Faster Results in 6-18 Months', 'Custom 3D Treatment Planning', 'Fewer Clinic Visits Required', 'Flexible 0% EMI Options']}
        image="/invisalign_banner.png"
        imageAlt="Invisalign clear aligner treatment"
        bookLabel="Book Invisalign Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        beforeAfter={{ before: '/images/cases/invisalign_before.png', after: '/images/cases/invisalign_after.png' }}
      />

      <StatsBar items={[
        { icon: <Award className="w-6 h-6" />, label: '14+ Years', sub: 'Expert Orthodontics' },
        { icon: <Users className="w-6 h-6" />, label: '85,000+', sub: 'Happy Smiles Created' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: 'Gold', sub: 'Invisalign Provider' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: '4.9★', sub: '1,200+ Google Reviews' },
      ]} />

      <ServiceIconGrid
        title="Advanced Invisalign Technology"
        cols={4}
        items={[
          { icon: <ScanLine className="w-7 h-7" />, title: 'iTero 3D Scanner', desc: 'Captures highly accurate 3D digital scans in minutes without messy molds.' },
          { icon: <Smile className="w-7 h-7" />, title: 'ClinCheck Software', desc: '3D smile simulation mapping out the exact movement and end result.' },
          { icon: <Award className="w-7 h-7" />, title: 'SmartTrack Material', desc: 'Proprietary plastic designed for gentle, constant force.' },
          { icon: <ShieldCheck className="w-7 h-7" />, title: 'Strict Sterilization', desc: 'Class-B autoclaves and completely sterile diagnostic tips.' },
        ]}
      />

      <HowItWorksFlow
        title="How Invisalign Works"
        steps={[
          { icon: <ScanLine className="w-6 h-6" />, title: '3D Digital Scan', desc: 'iTero scan, no gooey molds' },
          { icon: <Smile className="w-6 h-6" />, title: 'Smile Simulation', desc: 'See your final smile first' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Custom Aligners', desc: 'Clear, medical-grade trays' },
          { icon: <Clock3 className="w-6 h-6" />, title: 'Aligner Changes', desc: 'New set every 1-2 weeks' },
          { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Quick Checkups', desc: 'Every 6-8 weeks' },
          { icon: <Award className="w-6 h-6" />, title: 'Smile Completion', desc: 'Retainers protect your smile' },
        ]}
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DoctorProfileCard
            name="Dr. Nitin Bharat"
            title="MDS Dentofacial Orthodontics"
            image="/nithin.jpg"
            experienceBadge="14+ Years of Expert Orthodontics"
            bullets={[
              'Gold Certified Invisalign Consultant',
              'Specialist in Pediatric & Adult Braces',
              'MDS Dentofacial Orthodontics Degree',
              'Thousands of Smiles Transformed',
            ]}
            eyebrow="Meet Your Invisalign Specialist"
          />
          <CostHighlightCard
            title="Invisalign Cost in Hyderabad"
            price="₹99,999*"
            disclaimer="*Cost depends on complexity and number of aligners needed."
            bullets={['All aligner sets included', 'iTero 3D digital scan included', 'Custom smile simulation preview', 'Retainers included in package']}
          />
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <ComparisonTable
            title="Invisalign vs Braces"
            headers={['Feature', 'Invisalign Aligners', 'Traditional Braces']}
            rows={[
              { feature: 'Appearance', main: 'Virtually Invisible', alt: 'Visible Metal Brackets' },
              { feature: 'Removable', main: 'Yes (Eat & Brush)', alt: 'No (Fixed to Teeth)' },
              { feature: 'Comfort', main: 'High (Smooth Plastic)', alt: 'Moderate (Wire Pricks)' },
              { feature: 'Food Restrictions', main: 'None', alt: 'Many' },
              { feature: 'Clinic Visits', main: 'Every 6-8 Weeks', alt: 'Every 4 Weeks' },
            ]}
          />
        </div>
      </section>

      <WhyChooseRow
        title="Benefits of Invisalign"
        items={[
          { icon: <Smile className="w-6 h-6" />, title: 'Virtually', desc: 'Invisible' },
          { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Removable', desc: 'Convenience' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Comfortable', desc: '& Safe' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Better Oral', desc: 'Hygiene' },
          { icon: <Clock3 className="w-6 h-6" />, title: 'Fewer Clinic', desc: 'Visits' },
        ]}
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-heading font-black mb-4" style={{ color: NAVY }}>Frequently Asked Questions</h3>
            <MiniFAQList faqs={data.faqs.map(f => ({ question: f.question }))} />
            <Link href="/faq" className="inline-block mt-4 text-white text-xs font-black px-5 py-2.5 rounded-lg" style={{ backgroundColor: NAVY }}>
              View All FAQs
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-black" style={{ color: NAVY }}>What Our Patients Say</h3>
            {data.testimonials.slice(0, 2).map((t) => (
              <div key={t.id} className="bg-white border border-slate-150 rounded-2xl p-4">
                <div className="flex text-amber-400 mb-1.5">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-xs text-slate-600 font-semibold italic leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <span className="text-xs font-black text-slate-800 mt-1.5 block">&mdash; {t.patient_name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingFormSection title="Book Your Invisalign Consultation" treatment="Invisalign / Braces" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Straighten Your Smile — Book Your Invisalign Scan Today!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
