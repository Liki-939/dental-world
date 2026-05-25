import { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Dental World',
  description: 'Learn about our mission, vision, and the expert team of dentists at Dental World.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-brand-dark py-20 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">About <span className="text-brand-light">Dental World</span></h1>
            <p className="text-lg text-slate-300">
              Dedicated to providing world-class, painless dental care with a commitment to excellence and patient comfort.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">About Us</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Dental World is a state-of-the-art dental clinic that provides comprehensive oral healthcare solutions tailored to your specific needs. Equipped with cutting-edge dental technology and modern facilities, we strive to deliver exceptional dental services to all our patients.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  At Dental World, we specialize in a wide range of dental treatments, including root canal procedures, dental implants, cosmetic dentistry, pediatric dentistry, dental fillings, jaw surgeries, braces, aligners, and much more. Our team of highly experienced dental surgeons in India are dedicated to providing you with the best painless dental treatments available. We are committed to offering our patients a seamless dental experience at Dental World. Our friendly and professional staff members go above and beyond to ensure that you receive the highest quality dental care in a comfortable and welcoming environment.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-brand-light p-6 rounded-2xl">
                    <Heart className="w-8 h-8 text-brand mb-4" />
                    <h4 className="font-bold text-slate-900 mb-2">Painless Care</h4>
                    <p className="text-sm text-slate-600">Advanced, comfortable injection techniques.</p>
                  </div>
                  <div className="bg-slate-100 p-6 rounded-2xl">
                    <Award className="w-8 h-8 text-slate-700 mb-4" />
                    <h4 className="font-bold text-slate-900 mb-2">Expert Team</h4>
                    <p className="text-sm text-slate-600">Highly experienced dental surgeons.</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
                  alt="Our Expert Dental Team" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-brand-light/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Why Choose Us?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">What sets Dental World apart as the top dental clinic in Hyderabad.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Advanced Dental Clinic", desc: "Experience exceptional dental care with state-of-the-art technology and a team of skilled professionals at our advanced dental clinic." },
                { title: "Cutting Edge Technology", desc: "Discover the future of dental care with our cutting-edge technology at the forefront of innovation in our clinic." },
                { title: "Comfortable Injection Techniques", desc: "Experience painless dental injections through our advanced and comfortable techniques, ensuring a stress-free and comfortable dental visit." },
                { title: "Same-Day Implants", desc: "Get your smile back in just one day with our efficient and convenient same-day implant services, restoring your dental health and confidence." },
                { title: "International Patient Convenience", desc: "We prioritize the convenience of our international patients, providing seamless services and personalized care." },
                { title: "Comprehensive Dental Expertise", desc: "Trust in our comprehensive dental expertise as our highly skilled team offers a wide range of specialized services." },
                { title: "Rigorous Sterilization Procedures", desc: "Your safety is our top priority, as we strictly adhere to rigorous sterilization procedures, maintaining the highest standards of cleanliness." },
                { title: "Individualized Patient Care", desc: "Experience personalized and attentive care tailored to your unique needs, prioritizing your comfort, satisfaction, and long-lasting oral health." },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                  <h4 className="font-bold text-slate-900 mb-3">{feature.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-brand text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-extrabold mb-2">15+</h3>
                <p className="text-brand-light font-medium uppercase tracking-wider text-sm">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-extrabold mb-2">5000+</h3>
                <p className="text-brand-light font-medium uppercase tracking-wider text-sm">Happy Patients</p>
              </div>
              <div>
                <h3 className="text-4xl font-extrabold mb-2">10+</h3>
                <p className="text-brand-light font-medium uppercase tracking-wider text-sm">Expert Doctors</p>
              </div>
              <div>
                <h3 className="text-4xl font-extrabold mb-2">2</h3>
                <p className="text-brand-light font-medium uppercase tracking-wider text-sm">Clinic Locations<br/><span className="text-xs normal-case">(Pragathi Nagar & Bachupally)</span></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
