import Link from 'next/link';
import { Users, Star, ScanLine, Award, ShieldCheck, Sparkles, CheckCircle2, Clock3, Activity } from 'lucide-react';
import type { LocationData } from '../shared';
import { treatmentsData } from '@/data/treatments';
import {
  TopTrustBar, LandingHero, StatsBar, ServiceIconGrid, HowItWorksFlow, DoctorProfileCard,
  CostHighlightCard, ComparisonTable, WhyChooseRow, MiniFAQList, LocationsSection,
  StickyBottomBar, BookingFormSection, NAVY,
} from '@/components/landing/LandingKit';

export default function RootCanalPage({ branch, locations, whatsappUrl }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
}) {
  const data = treatmentsData['root-canal-treatment'];

  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['MDS Endodontists Only', 'Microscopic Rotary Endodontics', 'Single-Visit RCT Available', '0% EMI Available']} />

      <LandingHero
        eyebrow="Bachupally & Pragathi Nagar, Hyderabad"
        headlineLead="Pain-Free Root Canal"
        headlineMain="Treatment in Hyderabad"
        subtitle="Painless. Precise. Permanent."
        desc="Save your infected natural tooth with painless laser-assisted root canal therapy from expert MDS Endodontists."
        bullets={['100% Painless Procedures', 'Treated by MDS Endodontists Only', 'Save Your Natural Tooth', 'Microscopic Rotary Endodontics', 'Single-Visit RCT Options', '0% EMI Payment Options']}
        image="/root_canal_banner.png"
        imageAlt="Root canal treatment consultation"
        bookLabel="Request Pain-Free RCT"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        beforeAfter={{ before: '/images/cases/root_canal_before.png', after: '/images/cases/root_canal_after.png' }}
      />

      <StatsBar items={[
        { icon: <Award className="w-6 h-6" />, label: '10+ Years', sub: 'MDS Specialist Care' },
        { icon: <Users className="w-6 h-6" />, label: '15,000+', sub: 'Successful RCTs' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: '98%+', sub: 'Treatment Success Rate' },
        { icon: <Clock3 className="w-6 h-6" />, label: 'Single-Visit', sub: 'RCT Options' },
      ]} />

      <ServiceIconGrid
        title="Advanced Root Canal Technology"
        cols={4}
        items={[
          { icon: <Activity className="w-7 h-7" />, title: 'Rotary Endodontics', desc: 'Electrically driven tools clean and shape canals faster and smoother.' },
          { icon: <ScanLine className="w-7 h-7" />, title: 'Digital Apex Locators', desc: 'Verifies thorough disinfection to the exact canal tip.' },
          { icon: <Sparkles className="w-7 h-7" />, title: 'Laser Disinfection', desc: 'Sterilizes hard-to-reach areas, achieving 99.9% sterility.' },
          { icon: <ShieldCheck className="w-7 h-7" />, title: 'Strict Sterilization', desc: '100% sterile tools using Class-B autoclave sterilizers.' },
        ]}
      />

      <HowItWorksFlow
        title="How Root Canal Works"
        steps={[
          { icon: <ScanLine className="w-6 h-6" />, title: 'Digital X-ray', desc: 'Assess infection depth' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Precision Numbing', desc: 'Completely painless' },
          { icon: <Activity className="w-6 h-6" />, title: 'Pulp Removal', desc: 'Infected tissue removed' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Laser Disinfection', desc: 'Sterilizes root canals' },
          { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Hermetic Sealing', desc: 'Prevents bacterial entry' },
          { icon: <Award className="w-6 h-6" />, title: 'Tooth Restoration', desc: 'Permanent crown placed' },
        ]}
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DoctorProfileCard
            name="Dr. Abdul Wahed"
            title="MDS Endodontics & Root Canal Specialist"
            image="/dr.abdul.jpg"
            experienceBadge="10+ Years of Specialist Experience"
            bullets={[
              'Fellowship in Microscopic Endodontics (MFM)',
              'Expert in Painless Single-Visit Root Canals',
              'Completed 15,000+ Painless RCT Procedures',
              'FDA-Approved Sealants',
            ]}
            eyebrow="Meet Our Root Canal Specialist"
          />
          <CostHighlightCard
            title="Root Canal Treatment Cost"
            price="₹4,600*"
            disclaimer="*Varies based on tooth type, location, and choice of crown."
            bullets={['Consultation & digital X-rays included', 'Advanced rotary cleaning and shaping', 'Hermetic canal sealing filling', 'Interest-free EMI on credit cards']}
          />
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <ComparisonTable
            title="Root Canal vs Extraction"
            headers={['Feature', 'Root Canal Treatment', 'Tooth Extraction']}
            rows={[
              { feature: 'Saves Natural Tooth', main: 'Yes', alt: 'No' },
              { feature: 'Immediate Pain Relief', main: 'Yes', alt: 'Yes (with soreness)' },
              { feature: 'No Shift in Bite', main: 'Yes', alt: 'No (teeth tilt)' },
              { feature: 'Cost Effective Long-Term', main: 'Yes', alt: 'No (needs bridge/implant)' },
            ]}
          />
        </div>
      </section>

      <WhyChooseRow
        title="Benefits of Root Canal"
        items={[
          { icon: <Sparkles className="w-6 h-6" />, title: 'Instant Pain', desc: 'Relief' },
          { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Saves Natural', desc: 'Tooth' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Stops Infection', desc: 'Spread' },
          { icon: <Activity className="w-6 h-6" />, title: 'Chew Comfortably', desc: 'Again' },
          { icon: <Award className="w-6 h-6" />, title: 'Prevents', desc: 'Bone Loss' },
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

      <BookingFormSection title="Book Your Root Canal Consultation" treatment="Root Canal Treatment" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Don't Delay — Book Your Pain-Free Root Canal Today!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
