import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Smile, ShieldPlus, Layers, Activity, Star, Heart, 
  Sparkles, Baby, ArrowRight, CheckCircle2, Shield,
  Scissors, Zap, Crown, Wind, Flame
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dental Treatments',
  description: 'Explore our comprehensive range of advanced, painless dental treatments including implants, root canals, and cosmetic dentistry.',
};

const treatments = [
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacements for missing teeth using international quality titanium implants.',
    icon: Layers,
  },
  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    description: 'Painless single-visit root canal therapy using advanced rotary endodontics to save infected teeth.',
    icon: Activity,
  },
  {
    id: 'invisalign-treatment',
    title: 'Invisalign Treatment',
    description: 'Clear, invisible aligners to straighten teeth and correct misaligned bites.',
    icon: Sparkles,
  },
  {
    id: 'braces',
    title: 'Braces',
    description: 'Traditional and ceramic braces for perfect teeth alignment.',
    icon: ShieldPlus,
  },
  {
    id: 'smile-designing',
    title: 'Smile Designing',
    description: 'Complete smile makeovers including porcelain veneers, teeth whitening, and gum contouring.',
    icon: Smile,
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    description: 'Specialized, child-friendly dental care focusing on preventive treatments and cavity protection.',
    icon: Baby,
  },
  {
    id: 'full-mouth-rehabilitation',
    title: 'Full Mouth Rehabilitation',
    description: 'Extensive treatment plan designed to rebuild or simultaneously restore all of the teeth.',
    icon: Heart,
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'Safe, instant teeth whitening to remove deep stains and brighten your smile by several shades.',
    icon: Sparkles,
  },
  {
    id: 'teeth-cleaning-scaling',
    title: 'Teeth Cleaning & Scaling',
    description: 'Professional ultrasonic cleaning and scaling to remove plaque, tartar, and surface stains.',
    icon: Sparkles,
  },
  {
    id: 'wisdom-tooth-extraction',
    title: 'Wisdom Tooth Extraction',
    description: 'Safe, gentle, and painless surgical extraction of impacted or painful wisdom teeth.',
    icon: Scissors,
  },
  {
    id: 'advanced-gum-treatment',
    title: 'Advanced Gum Treatment',
    description: 'Advanced flap surgery and laser gum therapy to cure bleeding gums and secure loose teeth.',
    icon: Heart,
  },
  {
    id: 'tooth-decay-fillings',
    title: 'Tooth Decay & Fillings',
    description: 'Mercury-free, natural-looking composite fillings to repair cavities and restore tooth strength.',
    icon: ShieldPlus,
  },
  {
    id: 'hybrid-dentures',
    title: 'Hybrid & Full Mouth Dentures',
    description: 'Premium BPS or fixed implant-supported dentures to restore full chewing power.',
    icon: Smile,
  },
  {
    id: 'bad-breath-halitosis',
    title: 'Bad Breath & Halitosis',
    description: 'Targeted clinical therapy to eliminate chronic bad breath and restore oral hygiene.',
    icon: Wind,
  },
  {
    id: 'dental-crown-bridges',
    title: 'Dental Crown & Bridges',
    description: 'Premium metal-free Zirconia and E-max crowns to protect damaged teeth and fill gaps.',
    icon: Crown,
  },
  {
    id: 'frenectomy',
    title: 'Frenectomy',
    description: 'Painless, suture-free laser correction for tongue-tie and lip-tie with immediate mobility.',
    icon: Zap,
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'Aesthetic composite bonding, contouring, and gum lifting for a flawless smile.',
    icon: Smile,
  },
  {
    id: 'laser-dentistry',
    title: 'Laser Dentistry',
    description: 'Minimally invasive, drill-free, and suture-free treatments using advanced dental lasers.',
    icon: Zap,
  },
  {
    id: 'jaw-surgery',
    title: 'Jaw Surgery',
    description: 'Skeletally corrective orthognathic surgery to resolve severe bite misalignment and asymmetry.',
    icon: Shield,
  },
  {
    id: 'genioplasty',
    title: 'Genioplasty',
    description: 'Cosmetic chin reshaping surgery to enhance jawline definition and facial symmetry.',
    icon: Smile,
  },
  {
    id: 'mouth-ulcers',
    title: 'Mouth Ulcers',
    description: 'Instant pain relief and rapid healing of canker sores using low-level laser therapy.',
    icon: Flame,
  },
  {
    id: 'preventive-dentistry',
    title: 'Preventive Dentistry',
    description: 'Fluoride varnish, dental sealants, and custom nightguards to proactively protect teeth.',
    icon: Shield,
  }
];

export default function TreatmentsPage() {
  return (
    <main className="flex-grow bg-surface-muted">
        {/* Hero Section */}
        <section className="bg-brand-dark py-20 text-white text-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
             <div className="absolute top-[-20%] right-[-10%] w-[50%] aspect-square rounded-full bg-brand-light blur-3xl"></div>
             <div className="absolute bottom-[-20%] left-[-10%] w-[40%] aspect-square rounded-full bg-brand blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="inline-block bg-white/10 text-brand-light px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-brand-light/20 backdrop-blur-sm">
              Comprehensive Care Under One Roof
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">
              World-Class Dental <span className="text-brand-light">Treatments</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              From routine check-ups to complex full-mouth rehabilitations, our specialists deliver painless, predictable, and beautiful results.
            </p>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="py-20 -mt-8 relative z-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {treatments.map((treatment) => {
                const Icon = treatment.icon;
                return (
                  <Link 
                    href={`/treatments/${treatment.id}`} 
                    key={treatment.id}
                    className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand/30 transition-all group flex flex-col h-full"
                  >
                    <div className="w-16 h-16 bg-surface-muted text-brand rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                      {treatment.description}
                    </p>
                    <div className="flex items-center text-brand font-semibold text-sm mt-auto group-hover:translate-x-2 transition-transform duration-300">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Overview Section */}
        <section className="py-20 bg-slate-900 text-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
                  Real Results.<br/><span className="text-brand-light">Proven Expertise.</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  Browse our portfolio of life-changing smile transformations. Our specialists combine art and science to deliver predictable, stunning results for every treatment.
                </p>
                <Link href="/gallery" className="inline-flex items-center text-white font-bold border-b-2 border-brand hover:text-brand transition-colors pb-1">
                  View Full Gallery <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="lg:w-2/3">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-800">
                  <Image 
                    src="/chatgpt_dental_image.png" 
                    alt="Smile Transformations Overview" 
                    width={1000}
                    height={600}
                    className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Trust Section */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <Shield className="w-12 h-12 text-brand mb-4" />
                <h4 className="font-bold text-lg text-slate-900 mb-2">100% Safety & Sterilization</h4>
                <p className="text-slate-600 text-sm">We follow stringent international protocols for sterilization to ensure your safety.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border-y md:border-y-0 md:border-x border-slate-100">
                <Star className="w-12 h-12 text-brand mb-4" />
                <h4 className="font-bold text-lg text-slate-900 mb-2">Expert Specialists</h4>
                <p className="text-slate-600 text-sm">Our team comprises MDS specialists across all dental branches with decades of experience.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <CheckCircle2 className="w-12 h-12 text-brand mb-4" />
                <h4 className="font-bold text-lg text-slate-900 mb-2">Transparent Pricing</h4>
                <p className="text-slate-600 text-sm">No hidden costs. We provide a complete treatment plan and cost breakdown upfront.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-brand text-white text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Not sure which treatment you need?</h2>
            <p className="text-brand-light text-lg mb-10">
              Book a comprehensive oral examination and let our experts guide you to the perfect smile.
            </p>
            <Link 
              href="/book-appointment" 
              className="inline-block bg-white text-brand hover:bg-slate-50 px-10 py-4 rounded-full font-bold text-lg transition shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Book General Consultation
            </Link>
          </div>
        </section>
    </main>
  );
}
