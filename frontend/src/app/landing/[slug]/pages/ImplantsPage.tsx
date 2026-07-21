import Link from 'next/link';
import { Users, Star, ScanLine, Smile, Award, ShieldCheck, Sparkles, CheckCircle2, Clock3, HandCoins } from 'lucide-react';
import type { LocationData } from '../shared';
import { treatmentsData } from '@/data/treatments';
import {
  TopTrustBar, LandingHero, StatsBar, ServiceIconGrid, HowItWorksFlow, DoctorProfileCard,
  CostHighlightCard, ComparisonTable, WhyChooseRow, MiniFAQList, LocationsSection,
  StickyBottomBar, BookingFormSection, NAVY,
} from '@/components/landing/LandingKit';

export default function ImplantsPage({ branch, locations, whatsappUrl }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
}) {
  const data = treatmentsData['dental-implants'];

  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['US-FDA Approved Implants', 'Computer-Guided Surgery', 'Lifetime Warranty', '0% EMI Available']} />

      <LandingHero
        eyebrow="Bachupally & Pragathi Nagar, Hyderabad"
        headlineLead="Best Dental Implant Clinic"
        headlineMain="at Bachupally"
        subtitle="Permanent Teeth. Natural Smile. Eat Confidently Again."
        desc="Restore missing teeth with painless, long-lasting dental implants from expert implantologists with 15+ years of experience."
        bullets={['10,000+ Implants Placed', 'US-FDA Approved Titanium', 'Painless Guided Surgery', 'Lifetime Warranty on Premium Brands', '0% EMI Financing Available', 'Same-Day Temporary Teeth']}
        image="/dental_cover.png"
        imageAlt="Dental implant consultation"
        bookLabel="Get Expert Implant Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        beforeAfter={{ before: '/images/cases/implants_before.png', after: '/images/cases/implants_after.png' }}
      />

      <StatsBar items={[
        { icon: <Award className="w-6 h-6" />, label: '15+ Years', sub: 'Clinical Experience' },
        { icon: <Users className="w-6 h-6" />, label: '10,000+', sub: 'Implants Placed' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: '5-Star', sub: 'Google Rated Clinic' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: 'US-FDA', sub: 'Approved Materials' },
      ]} />

      <ServiceIconGrid
        title="Advanced Implant Technology"
        cols={4}
        items={[
          { icon: <ScanLine className="w-7 h-7" />, title: '3D CBCT Scan', desc: 'Shows bone density, nerves, and sinus structures in 3D.' },
          { icon: <Smile className="w-7 h-7" />, title: 'Guided Implant Surgery', desc: 'Computer-guided planning for sub-millimeter accuracy.' },
          { icon: <Award className="w-7 h-7" />, title: 'Premium Implant Brands', desc: 'Authorized provider of Straumann and Nobel Biocare.' },
          { icon: <ShieldCheck className="w-7 h-7" />, title: 'Strict Sterilization', desc: 'Class-B autoclave sterilization for every procedure.' },
        ]}
      />

      <HowItWorksFlow
        title="Our Dental Implant Process"
        steps={[
          { icon: <ScanLine className="w-6 h-6" />, title: 'Consultation & Scan', desc: '3D CBCT bone check' },
          { icon: <Smile className="w-6 h-6" />, title: 'Implant Planning', desc: 'Computer-guided design' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Implant Placement', desc: 'Quick, painless surgery' },
          { icon: <Clock3 className="w-6 h-6" />, title: 'Osseointegration', desc: '3-6 months healing' },
          { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Abutment Placement', desc: 'Connector for crown' },
          { icon: <Award className="w-6 h-6" />, title: 'Crown Attachment', desc: 'Custom zirconia crown' },
        ]}
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DoctorProfileCard
            name="Dr. Anurag"
            title="MDS Prosthodontics & Implantology"
            image="/anurag.jpg"
            experienceBadge="15+ Years of Specialist Experience"
            bullets={[
              'Fellow of International Congress of Oral Implantologists (ICOI)',
              'Professor of Advanced Dentistry at Balaji Dental College',
              'Expert in Computer-Guided Painless Implant Surgery',
              '5000+ Successful Implants Placed',
            ]}
            eyebrow="Meet Our Implant Expert"
          />
          <CostHighlightCard
            title="Dental Implant Cost in Hyderabad"
            price="₹28,000*"
            disclaimer="*Cost depends on implant brand, bone grafting needs, and crown material."
            bullets={['Consultation & 3D CBCT Scan included', 'Medical-grade titanium implant device', 'Custom fabrication and crown', '0% interest EMI installment options']}
          />
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <ComparisonTable
            title="Dental Implants vs Bridges vs Dentures"
            headers={['Feature', 'Dental Implants', 'Dental Bridge', 'Loose Dentures']}
            rows={[
              { feature: 'Bone Preservation', main: 'Yes (Stimulates bone)', alt: 'No (Bone decays)', alt2: 'No' },
              { feature: 'Saves Adjacent Teeth', main: 'Yes', alt: 'No (Grinds teeth)', alt2: 'Yes' },
              { feature: 'Lifespan', main: 'Lifetime', alt: '5-10 Years', alt2: '5 Years' },
              { feature: 'Chewing Power', main: '100%', alt: '70%', alt2: '20-30%' },
              { feature: 'No Slipping/Clicking', main: 'Yes', alt: 'Yes', alt2: 'No' },
            ]}
          />
        </div>
      </section>

      <WhyChooseRow
        title="Benefits of Dental Implants"
        items={[
          { icon: <Smile className="w-6 h-6" />, title: 'Natural Look', desc: '& Feel' },
          { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Restore Chewing', desc: 'Power' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Preserve', desc: 'Jawbone' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Protects Healthy', desc: 'Teeth' },
          { icon: <HandCoins className="w-6 h-6" />, title: 'Lifetime', desc: 'Solution' },
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

      <BookingFormSection title="Book Your Implant Consultation" treatment="Dental Implants" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Restore Your Smile — Book Your Implant Consultation!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
