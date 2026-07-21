import Link from 'next/link';
import { Star, Users, Sparkles, ShieldCheck, Zap, Eye, HandCoins, Award, Users2, Sparkle, Wind } from 'lucide-react';
import type { LocationData } from '../shared';
import {
  TopTrustBar, LandingHero, StatsBar, ServiceIconGrid, HowItWorksFlow, WhyChooseRow,
  MiniFAQList, GlowCtaBanner, CostHighlightCard, LocationsSection, StickyBottomBar,
  BookingFormSection, NAVY, NAVY_LIGHT,
} from '@/components/landing/LandingKit';

export default function TeethWhiteningPage({ branch, locations, whatsappUrl }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
}) {
  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['Advanced Laser Technology', 'Expert Cosmetic Dentists', 'Safe, Painless & Effective', 'Instant Visible Results', 'Affordable Pricing']} />

      <LandingHero
        eyebrow="Serving Bachupally, Pragathi Nagar & Nizampet, Hyderabad"
        headlineLead="Best Teeth Whitening Treatment in"
        headlineMain="Bachupally & Pragathi Nagar"
        subtitle="✨ Whiter Teeth. Brighter Smile. Greater You."
        desc="Advanced laser teeth whitening for instant, visible results — safe, painless, and designed to boost your confidence."
        bullets={['Instant Results', 'Laser Technology', 'Painless & Safe', 'Stain Removal', 'Long Lasting Whitening']}
        image="/images/new images/Teeth Whitening2.jpeg"
        imageAlt="Woman with a bright white smile"
        imageFit="contain"
        bookLabel="Book Your Teeth Whitening Appointment"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        beforeAfter={{ before: '/images/cases/whitening_smile_before.png', after: '/images/cases/whitening_smile_after.png' }}
      />

      <StatsBar items={[
        { icon: <Users className="w-6 h-6" />, label: '10,000+', sub: 'Happy Patients' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: '4.9', sub: 'Google Rating' },
        { icon: <Sparkles className="w-6 h-6" />, label: 'Advanced', sub: 'Laser Technology' },
      ]} />

      <div className="text-white py-4" style={{ backgroundColor: NAVY }}>
        <div className="max-w-[1400px] mx-auto px-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold">
          <span>Your Trusted Dental Care in Bachupally, Pragathi Nagar & Nizampet, Hyderabad</span>
          {['Best Dental Clinic in Pragathi Nagar', 'Laser Teeth Whitening in Bachupally', 'Teeth Whitening Cost in Nizampet'].map((c, idx) => (
            <span key={idx} className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 shrink-0" />{c}</span>
          ))}
        </div>
      </div>

      <HowItWorksFlow
        title="How Laser Teeth Whitening Works"
        steps={[
          { icon: <Users2 className="w-6 h-6" />, title: 'Consultation', desc: 'Dental check-up & shade analysis' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Preparation', desc: 'Teeth cleaning & gum protection' },
          { icon: <Zap className="w-6 h-6" />, title: 'Laser Whitening', desc: 'Advanced laser activates whitening gel' },
          { icon: <Sparkle className="w-6 h-6" />, title: 'Instant Results', desc: 'Stains break down & teeth become whiter' },
          { icon: <Wind className="w-6 h-6" />, title: 'Aftercare Tips', desc: 'Guidance to maintain long lasting results' },
        ]}
      />

      <ServiceIconGrid
        title="Our Teeth Whitening Treatments"
        cols={5}
        items={[
          { icon: <Zap className="w-7 h-7" />, title: 'Laser Teeth Whitening', desc: 'Fast & effective whitening with advanced laser technology.' },
          { icon: <Sparkle className="w-7 h-7" />, title: 'Zoom Teeth Whitening', desc: 'Professional in-clinic whitening for dramatic results.' },
          { icon: <ShieldCheck className="w-7 h-7" />, title: 'Teeth Cleaning & Whitening', desc: 'Deep cleaning removes plaque & stains for a brighter smile.' },
          { icon: <Eye className="w-7 h-7" />, title: 'Stain Removal Treatment', desc: 'Removes tea, coffee, wine & tobacco stains effectively.' },
          { icon: <Award className="w-7 h-7" />, title: 'Smile Makeover', desc: 'Complete smile makeover for a brighter, confident new you.' },
        ]}
      />

      <WhyChooseRow
        title="Why Choose Dental World?"
        items={[
          { icon: <Zap className="w-6 h-6" />, title: 'Advanced Laser', desc: 'Technology' },
          { icon: <Users className="w-6 h-6" />, title: 'Expert Cosmetic', desc: 'Dentists' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Safe, Painless', desc: '& Effective' },
          { icon: <Sparkles className="w-6 h-6" />, title: 'Instant & Long', desc: 'Lasting Results' },
          { icon: <HandCoins className="w-6 h-6" />, title: 'Affordable', desc: 'Pricing' },
          { icon: <Award className="w-6 h-6" />, title: 'Trusted by', desc: 'Thousands' },
        ]}
      />

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div>
            <h3 className="text-lg font-heading font-black mb-4" style={{ color: NAVY }}>Frequently Asked Questions</h3>
            <MiniFAQList faqs={[
              { question: 'How does teeth whitening work?' },
              { question: 'Is teeth whitening safe?' },
              { question: 'How long does teeth whitening last?' },
              { question: 'Teeth whitening cost in Hyderabad?' },
              { question: 'How to get rid of yellow teeth?' },
            ]} />
            <Link href="/faq" className="inline-block mt-4 text-white text-xs font-black px-5 py-2.5 rounded-lg" style={{ backgroundColor: NAVY }}>
              View All FAQs
            </Link>
          </div>

          <div className="rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center text-white space-y-3" style={{ backgroundColor: NAVY }}>
            <h3 className="text-xl md:text-2xl font-black leading-tight">Get Whiter Teeth in Just 60 Minutes!</h3>
            <p className="text-sm text-blue-100 font-semibold">Book your appointment today and experience a brighter, more confident smile.</p>
            <div className="flex flex-col gap-2 w-full pt-2">
              <a href="#book-now" className="bg-white font-black text-sm px-4 py-3 rounded-xl" style={{ color: NAVY }}>Book Your Appointment</a>
              <a href={`tel:${branch.phone.tel}`} className="border-2 border-white font-black text-sm px-4 py-3 rounded-xl">Call Now: {branch.phone.display}</a>
            </div>
          </div>

          <CostHighlightCard
            title="Teeth Whitening Cost in Hyderabad"
            price="₹3,999*"
            disclaimer="(Limited Period Offer)"
            bullets={['Laser Teeth Whitening', 'Instant Visible Results', 'No Hidden Charges', 'Affordable Pricing']}
          />
        </div>
      </section>

      <div className="py-4 text-white text-[11px] font-bold" style={{ backgroundColor: NAVY_LIGHT }}>
        <div className="max-w-[1400px] mx-auto px-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5">
          {['No Hidden Charges', 'Flexible EMI Options', '100% Safe & Painless', 'Hygienic & Sterilized', 'Satisfaction Guaranteed'].map((c, idx) => (
            <span key={idx} className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" />{c}</span>
          ))}
        </div>
      </div>

      <GlowCtaBanner
        title="Get Whiter Teeth in Just 60 Minutes!"
        desc="Book your appointment today and experience a brighter, more confident smile."
        bookLabel="Book Your Appointment"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <BookingFormSection title="Book Your Teeth Whitening Appointment" treatment="Teeth Whitening" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Get Whiter Teeth in Just 60 Minutes!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
