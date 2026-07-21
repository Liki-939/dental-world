import { Users, Sparkles, ShieldCheck, Clock3, Star, Search, Droplet, Activity, HandHeart, Cigarette, Bug } from 'lucide-react';
import type { LocationData } from '../shared';
import {
  TopTrustBar, LandingHero, HealthyVsIssueBadge, StatsBar, ServiceImageGrid,
  SymptomsEmergency, RealResultsRow, DoctorProfileCard, WhyChooseRow,
  FaqReviewsCta, LocationsSection, StickyBottomBar, BookingFormSection,
  NAVY_LIGHT,
} from '@/components/landing/LandingKit';

export default function GumDiseasePage({ branch, locations, whatsappUrl, mediaMap }: {
  branch: LocationData;
  locations: LocationData[];
  whatsappUrl: string;
  mediaMap?: Record<string, string>;
}) {
  return (
    <div className="pb-20 md:pb-24">
      <TopTrustBar items={['Laser Gum Treatment', 'Painless & Minimally Invasive', 'Advanced Technology', 'Sterile & Safe Environment']} />

      <LandingHero
        headlineLead="Best Periodontal Specialist in Hyderabad for"
        headlineMain="Gum Disease"
        subtitle="Healthy Gums. Stronger Smile. Better You."
        desc="Dental World offers expert gum disease treatment, advanced periodontal care, and personalized solutions to protect your oral health."
        bullets={['Expert Periodontists', 'Minimally Invasive Care', 'Painless Laser Treatment', 'Long Lasting Results', 'Advanced Technology', 'Affordable & Safe']}
        image={mediaMap?.hero_gum_care || '/images/gum diseases/Gum disease hero 1.png'}
        imageAlt="Woman pointing to her healthy smile"
        bookLabel="Book Your Appointment"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        sideCard={<HealthyVsIssueBadge image="/images/gum diseases/Gum disease hero 2.png" />}
        badgeTop="15+ Years Experience"
      />

      <StatsBar items={[
        { icon: <Users className="w-6 h-6" />, label: '85,000+', sub: 'Happy Patients' },
        { icon: <Clock3 className="w-6 h-6" />, label: '15+', sub: 'Years of Experience' },
        { icon: <Sparkles className="w-6 h-6" />, label: 'Laser', sub: 'Gum Treatment' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: 'Painless', sub: '& Safe' },
        { icon: <Clock3 className="w-6 h-6" />, label: 'Open 7 Days', sub: 'a Week' },
        { icon: <Star className="w-6 h-6 fill-current" />, label: '4.9★', sub: 'in Hyderabad' },
      ]} />

      <ServiceImageGrid
        title="Advanced Periodontal Care for Healthy Gums"
        subtitle="Comprehensive care for every stage of gum disease"
        showCaption={false}
        fit="contain"
        items={[
          { image: '/images/gum diseases/Gum_disease_diagnosis_infographic_202606211648.jpeg', title: 'Gum Disease Diagnosis', desc: '' },
          { image: '/images/gum diseases/Dental_scaler_removing_tartar_fr…_202606211648.jpeg', title: 'Deep Cleaning (Scaling & Root Planing)', desc: '' },
          { image: '/images/gum diseases/Laser_gum_treatment_infographic_202606211648.jpeg', title: 'Laser Gum Treatment', desc: '' },
          { image: '/images/gum diseases/Tooth_with_gums_flap_surgery_202606211648.jpeg', title: 'Gum Surgery (Flap Surgery)', desc: '' },
          { image: '/images/gum diseases/Gum_grafting_and_regeneration_icon_202606211648.jpeg', title: 'Gum Grafting & Regeneration', desc: '' },
          { image: '/images/gum diseases/Dental_icon_maintenance_aftercare_202606211648.jpeg', title: 'Maintenance & Aftercare', desc: '' },
        ]}
      />

      <SymptomsEmergency
        title="Symptoms & Emergency"
        symptoms={[
          { icon: <Search className="w-5 h-5" />, label: 'Gingivitis' },
          { icon: <Droplet className="w-5 h-5" />, label: 'Bleeding Gums' },
          { icon: <Activity className="w-5 h-5" />, label: 'Gum Swelling' },
          { icon: <HandHeart className="w-5 h-5" />, label: 'Gum Pain' },
          { icon: <ShieldCheck className="w-5 h-5" />, label: 'Gum Disease' },
          { icon: <Activity className="w-5 h-5" />, label: 'Swollen Gums' },
          { icon: <Sparkles className="w-5 h-5" />, label: 'Teeth & Gum Health' },
          { icon: <Bug className="w-5 h-5" />, label: 'Gum Infection' },
          { icon: <Cigarette className="w-5 h-5" />, label: 'Causes of Gum Swelling' },
          { icon: <ShieldCheck className="w-5 h-5" />, label: 'Gum Disease Treatment' },
        ]}
        emergencyTitle="Don't Ignore Bleeding Gums!"
        emergencyItems={['Tooth loss', 'Bone loss', 'Bad breath', 'Serious infections']}
        ctaLabel="Book Emergency Appointment"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <RealResultsRow
        title="REAL RESULTS. REAL TRANSFORMATIONS."
        items={[
          { label: 'Bleeding Gums', before: '/images/gums_before.png', after: '/images/gums_after.png' },
          { label: 'Gum Swelling', before: '/images/gums_before.png', after: '/images/gums_after.png' },
          { label: 'Gum Recession', before: '/images/gums_before.png', after: '/images/gums_after.png' },
          { label: 'Deep Cleaning', before: '/images/before and after/Teeth Scaling_Cleaning before after.jpeg', after: '/images/gums_after.png' },
          { label: 'Laser Treatment', before: '/images/before and after/Bleeding Gums-Flap Surgery Laser before and after.jpeg', after: '/images/gums_after.png' },
        ]}
      />

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DoctorProfileCard
            name="Dr Ch Sravan Kumar"
            title="MDS Periodontics"
            experienceBadge="15+ Years of Experience in Laser Treatment & Gum Care"
            bullets={[
              'Expert in advanced gum disease & laser therapy',
              'Specialist in minimally invasive procedures',
              'Treating complex cases with precision & care',
              'Patient-focused approach for long-lasting results',
            ]}
            eyebrow="Meet Our Periodontal Specialist"
          />
          <div className="bg-[#F7F9FC] border border-slate-150 rounded-3xl p-6 md:p-8 space-y-4">
            <h3 className="text-lg md:text-xl font-heading font-black" style={{ color: NAVY_LIGHT }}>Why Do Gums Bleed?</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Bleeding gums can be caused by plaque buildup, gum inflammation (gingivitis), vitamin deficiencies (C, K, B12), hormonal changes, smoking, stress, or gum infections.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 pt-2">
              {[
                { icon: <Droplet className="w-5 h-5" />, label: 'Plaque Buildup' },
                { icon: <Sparkles className="w-5 h-5" />, label: 'Vitamin Deficiency' },
                { icon: <Activity className="w-5 h-5" />, label: 'Hormonal Changes' },
                { icon: <Cigarette className="w-5 h-5" />, label: 'Smoking & Stress' },
                { icon: <Bug className="w-5 h-5" />, label: 'Gum Infection' },
              ].map((c, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-1.5">
                  <div className="w-11 h-11 rounded-full bg-white border border-slate-150 flex items-center justify-center shadow-sm" style={{ color: NAVY_LIGHT }}>
                    {c.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-600 leading-tight">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseRow
        title="Why Choose Dental World for Gum Care?"
        items={[
          { icon: <Sparkles className="w-6 h-6" />, title: 'Laser Assisted', desc: 'Painless Treatment' },
          { icon: <Users className="w-6 h-6" />, title: 'Experienced', desc: 'Periodontists' },
          { icon: <Activity className="w-6 h-6" />, title: 'Advanced', desc: 'Technology' },
          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Sterile & Safe', desc: 'Environment' },
          { icon: <HandHeart className="w-6 h-6" />, title: 'Personalized', desc: 'Care' },
          { icon: <Star className="w-6 h-6" />, title: 'Affordable', desc: 'Pricing' },
        ]}
      />

      <FaqReviewsCta
        faqs={[
          { question: 'What causes gum disease?' },
          { question: 'How do I know if I have gum disease?' },
          { question: 'Is laser gum treatment better than regular treatment?' },
          { question: 'Does gum treatment hurt?' },
          { question: 'How long does gum treatment take to show results?' },
          { question: 'Can gum disease cause tooth loss?' },
        ]}
        reviews={[
          { name: 'Priya S.', text: 'My bleeding gums stopped after laser treatment. The doctors are amazing and very caring!' },
          { name: 'Ramesh K.', text: 'Excellent care and painless treatment. Highly recommended for gum problems.' },
        ]}
        ctaTitle="Ready for Healthy Gums?"
        ctaDesc="Take the first step towards a healthier, stronger smile today."
        ctaChecks={['Painless', 'Safe', 'Effective', 'Affordable']}
        bookLabel="Book Your Appointment"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
      />

      <BookingFormSection title="Book Your Gum Consultation" treatment="Advanced Gum Treatment" />

      <LocationsSection
        email="dentalworldmail@gmail.com"
        locations={locations.map(l => ({
          name: `${l.name} Branch`, address: l.address, phoneDisplay: l.phone.display, phoneTel: l.phone.tel,
          image: l.slug === 'pragathi-nagar' ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
        }))}
      />

      <StickyBottomBar
        clinicLabel="Don't Wait for Gum Problems to Get Worse!"
        phoneDisplay={branch.phone.display}
        phoneTel={branch.phone.tel}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
