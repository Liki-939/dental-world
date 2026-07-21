import { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero';
import { Award, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about Dental World, Hyderabad's leading MDS dental clinic. Meet our experienced dental surgeons and see why 85,000+ patients trust us in Pragathi Nagar & Bachupally.",
};

export default function AboutPage() {
  return (
    <main className="flex-grow">
      <PageHero
        title="About"
        highlight="Dental World"
        description="Dedicated to providing world-class, painless dental care with a commitment to excellence and patient comfort."
      />

      <section className="py-20">
        <div className="section-container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">About Us</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Dental World is a state-of-the-art dental clinic that provides comprehensive oral healthcare
                solutions tailored to your specific needs. Equipped with cutting-edge dental technology and modern
                facilities, we strive to deliver exceptional dental services to all our patients.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We specialize in root canals, dental implants, cosmetic dentistry, pediatric care, braces, aligners,
                and more. Our team of highly experienced dental surgeons is dedicated to painless, high-quality
                treatment in a comfortable, welcoming environment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="card p-6">
                  <Heart className="w-8 h-8 text-brand mb-4" aria-hidden />
                  <h4 className="font-bold text-slate-900 mb-2">Painless Care</h4>
                  <p className="text-sm text-slate-600">Advanced, comfortable injection techniques.</p>
                </div>
                <div className="bg-slate-100 p-6 rounded-2xl">
                  <Award className="w-8 h-8 text-slate-700 mb-4" aria-hidden />
                  <h4 className="font-bold text-slate-900 mb-2">Expert Team</h4>
                  <p className="text-sm text-slate-600">Highly experienced dental surgeons.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                alt="Dental World clinical team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-light/30">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              What sets Dental World apart as a leading dental clinic in Hyderabad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Advanced Dental Clinic', desc: 'State-of-the-art technology and skilled professionals.' },
              { title: 'Cutting Edge Technology', desc: 'Innovation at the forefront of every treatment plan.' },
              { title: 'Comfortable Techniques', desc: 'Painless injections and minimally invasive procedures.' },
              { title: 'Same-Day Implants', desc: 'Efficient same-day implant services when clinically suitable.' },
              { title: 'International Patients', desc: 'Seamless services and personalized care for visitors.' },
              { title: 'Comprehensive Expertise', desc: 'Wide range of specialized dental services under one roof.' },
              { title: 'Rigorous Sterilization', desc: 'Highest standards of cleanliness and infection control.' },
              { title: 'Individualized Care', desc: 'Treatment plans tailored to your comfort and goals.' },
            ].map((feature) => (
              <div key={feature.title} className="card p-6 hover:shadow-md transition">
                <h4 className="font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand text-white">
        <div className="section-container max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '85,000+', label: 'Happy Patients' },
              { value: '10+', label: 'Expert Doctors' },
              { value: '2', label: 'Clinic Locations' },
            ].map((stat) => (
              <div key={stat.label}>
                <h3 className="text-4xl font-extrabold mb-2">{stat.value}</h3>
                <p className="text-brand-light font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
