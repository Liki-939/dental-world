import Link from 'next/link';
import { Star, ScanLine, Smile, Sparkles, Users, HandCoins, Award, Monitor, Wand2, Layers, PenTool } from 'lucide-react';
import type { LocationData } from '../shared';
import {
  TopTrustBar, LandingHero, StatsBar, ServiceIconGrid, HowItWorksFlow, WhyChooseRow,
  MiniFAQList, GlowCtaBanner, LocationsSection, StickyBottomBar, BookingFormSection,
  CostHighlightCard, NAVY,
} from '@/components/landing/LandingKit';

export default function SmileDesigningPage({ branch, locations, whatsappUrl }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
}) {
  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['Advanced Digital Smile Design', 'Expert Cosmetic Dentists', 'Natural Looking Results', 'Painless & Comfortable', 'Flexible EMI Options']} />

      <LandingHero
        eyebrow="Smile Designing in Bachupally & Pragathi Nagar, Hyderabad"
        headlineLead="Design Your Dream Smile in"
        headlineMain="Bachupally & Pragathi Nagar"
        subtitle="Advanced Digital Smile Designing"
        desc="For Natural, Aesthetic & Confident Smiles — customized cosmetic dentistry designed around your unique facial features."
        bullets={['Digital Smile Design', 'Natural & Aesthetic Results', 'Painless & Safe Treatment', 'Long Lasting Results']}
        image="/images/new images/Smile Designing 2.jpeg"
        imageAlt="Woman with a beautifully designed smile"
        imageFit="contain"
        bookLabel="Book Your Smile Design Consultation"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        beforeAfter={{ before: '/images/cases/smile_design_before.png', after: '/images/cases/smile_design_after.png' }}
      />

      <StatsBar items={[
        { icon: <Users className="w-6 h-6" />, label: '10,000+', sub: 'Happy Smiles' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: '5.0', sub: 'Google Rating' },
        { icon: <Sparkles className="w-6 h-6" />, label: 'Advanced', sub: 'Digital Technology' },
      ]} />

      <HowItWorksFlow
        title="How Smile Designing Works"
        steps={[
          { icon: <Users className="w-6 h-6" />, title: 'Consultation', desc: 'Understand your needs & smile goals' },
          { icon: <Monitor className="w-6 h-6" />, title: 'Digital Analysis', desc: '3D scan, photos & digital assessment' },
          { icon: <PenTool className="w-6 h-6" />, title: 'Smile Design', desc: 'Custom smile preview & treatment plan' },
          { icon: <Wand2 className="w-6 h-6" />, title: 'Treatment', desc: 'Advanced procedures for your perfect smile' },
          { icon: <Smile className="w-6 h-6" />, title: 'Perfect Smile', desc: 'Natural, confident & beautiful results' },
        ]}
      />

      <ServiceIconGrid
        title="Our Smile Designing Treatments"
        items={[
          { icon: <Monitor className="w-7 h-7" />, title: 'Digital Smile Design', desc: 'Advanced digital technology to design your perfect smile before treatment.' },
          { icon: <Sparkles className="w-7 h-7" />, title: 'Teeth Whitening', desc: 'Brighten your smile with safe & effective whitening treatments.' },
          { icon: <Layers className="w-7 h-7" />, title: 'Veneers & Laminates', desc: 'Thin, custom-made shells for natural-looking perfect teeth.' },
          { icon: <Smile className="w-7 h-7" />, title: 'Gum Contouring', desc: 'Reshape gums for a balanced and more aesthetic smile.' },
          { icon: <Wand2 className="w-7 h-7" />, title: 'Dental Bonding', desc: 'Repair chipped, cracked or gapped teeth with tooth-colored bonding.' },
          { icon: <Award className="w-7 h-7" />, title: 'Hollywood Smile', desc: 'Complete smile makeover for a stunning, camera-ready smile.' },
        ]}
      />

      <WhyChooseRow
        title="Why Choose Dental World for Smile Designing?"
        items={[
          { icon: <Users className="w-6 h-6" />, title: 'Expert Cosmetic', desc: 'Dentists' },
          { icon: <ScanLine className="w-6 h-6" />, title: 'Advanced Digital', desc: 'Technology' },
          { icon: <PenTool className="w-6 h-6" />, title: 'Personalized', desc: 'Treatment' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Natural Looking', desc: 'Results' },
          { icon: <HandCoins className="w-6 h-6" />, title: 'Affordable', desc: 'Pricing' },
          { icon: <Award className="w-6 h-6" />, title: 'Trusted by', desc: 'Thousands' },
        ]}
      />

      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-heading font-black mb-4" style={{ color: NAVY }}>Frequently Asked Questions</h3>
            <MiniFAQList faqs={[
              { question: 'What is Smile Designing?' },
              { question: 'How is Smile Designing done?' },
              { question: 'Is Smile Designing permanent?' },
              { question: 'What is Digital Smile Design?' },
              { question: 'How much does Smile Designing cost?' },
              { question: 'How long does Smile Designing treatment take?' },
              { question: 'Who can go for Smile Designing?' },
            ]} />
            <Link href="/faq" className="inline-block mt-4 text-white text-xs font-black px-5 py-2.5 rounded-lg" style={{ backgroundColor: NAVY }}>
              View All FAQs
            </Link>
          </div>
          <CostHighlightCard
            title="Smile Designing Cost in India"
            price="₹15,000*"
            disclaimer="(Custom Plan for Every Patient)"
            bullets={['Affordable Pricing', 'No Hidden Charges', 'Easy EMI Options', 'Worth Every Smile']}
            image="/images/cases/smile_design_after.png"
          />
        </div>
      </section>

      <GlowCtaBanner
        title="Your Dream Smile is Just One Step Away!"
        desc="Book your Smile Designing consultation today and experience the joy of a perfect smile."
        bookLabel="Book Your Consultation Today"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        chips={['No Cost Consultation', 'Flexible EMI', '100% Patient Satisfaction']}
      />

      <BookingFormSection title="Book Your Smile Design Consultation" treatment="Smile Designing" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Your Dream Smile is Just One Step Away!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
