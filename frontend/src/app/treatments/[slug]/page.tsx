import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import TreatmentCostCards from '@/components/TreatmentCostCards';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import { Calendar, Phone, Shield, Star, CheckCircle2, Award, Clock, Stethoscope } from 'lucide-react';
import { treatmentsData } from '@/data/treatments';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = treatmentsData[slug];
  
  if (!data) return { title: 'Treatment Not Found' };

  return {
    title: `${data.title} in Hyderabad | Dental World`,
    description: data.hero_subheadline,
  };
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = treatmentsData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="bg-brand-light pt-16 pb-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-block bg-white text-brand-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            ⭐ 4.9/5 Google Rating
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 mb-6 capitalize">
            {data.hero_headline}
          </h1>
          <p className="text-xl text-slate-600 mb-10">
            {data.hero_subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/book-appointment" className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" /> Get Personalized Estimate
            </Link>
            <a href="https://wa.me/918247478663" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-green-600 px-8 py-4 rounded-full font-bold text-lg transition shadow-md border border-slate-200 flex items-center justify-center">
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      {/* 2. Trust Badges */}
      <section className="bg-brand-dark text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center text-sm md:text-base font-medium">
            <div className="flex items-center"><Star className="w-5 h-5 mr-2 text-yellow-400" /> 5000+ Smiles Restored</div>
            <div className="flex items-center"><Award className="w-5 h-5 mr-2" /> 15+ Years Experience</div>
            <div className="flex items-center"><Shield className="w-5 h-5 mr-2" /> 100% Sterile & Safe</div>
            <div className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2" /> EMI Available</div>
          </div>
        </div>
      </section>

      {/* 3. About the Treatment */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6 border-b-2 border-brand pb-2 inline-block">About the Treatment</h2>
            <p className="text-slate-600 leading-relaxed text-lg">{data.aboutText}</p>
          </div>

          <div className="mb-12 bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4 flex items-center">
              <Stethoscope className="w-6 h-6 text-brand mr-3" /> When is the Treatment Required?
            </h3>
            <p className="text-slate-600 leading-relaxed">{data.whenRequired}</p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">Benefits of {data.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.benefits.map((benefit, idx) => {
                const [boldPart, rest] = benefit.includes(':') ? benefit.split(':') : [benefit, ''];
                return (
                  <div key={idx} className="flex items-start bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-brand mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm">
                      <strong className="text-slate-900 block mb-1">{boldPart}{rest ? ':' : ''}</strong>
                      {rest && <span className="text-slate-600">{rest}</span>}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-brand-light p-8 rounded-3xl">
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-4 flex items-center">
                <Clock className="w-6 h-6 text-brand mr-3" /> Duration
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">{data.duration}</p>
            </div>
            <div className="bg-slate-100 p-8 rounded-3xl">
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-4 flex items-center">
                <Award className="w-6 h-6 text-slate-600 mr-3" /> Procedure
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">{data.procedure}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cost Section */}
      <section className="py-20 bg-surface-muted border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">{data.title} Cost Breakdown</h2>
            <p className="text-slate-600">Transparent pricing with no hidden charges. We customize the best treatment plan for you after a detailed consultation.</p>
          </div>
          <TreatmentCostCards plans={data.pricing} />
        </div>
      </section>

      {/* 5. Before/After Section (Optional based on data) */}
      {data.cases.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Real Transformations. Real Smiles.</h2>
            <p className="text-slate-600 mb-12 max-w-2xl mx-auto">See the dramatic difference our advanced treatments can make.</p>
            <BeforeAfterSection cases={data.cases} />
          </div>
        </section>
      )}

      {/* 6. Testimonials */}
      {data.testimonials.length > 0 && (
        <section className="py-24 bg-brand text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold mb-4">Happy Patients Love Us!</h2>
              <p className="text-brand-light opacity-90">Don&apos;t just take our word for it.</p>
            </div>
            <TestimonialsCarousel testimonials={data.testimonials} />
          </div>
        </section>
      )}

      {/* 7. FAQ Section */}
      {data.faqs.length > 0 && (
        <section className="py-20 bg-surface-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion faqs={data.faqs} />
          </div>
        </section>
      )}

      {/* 8. Sticky Booking CTA / Bottom CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">Know Your Exact Cost with a Personalized Consultation</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Meet our specialists and get a customized treatment plan designed for your needs and budget.</p>
          <Link href="/book-appointment" className="inline-flex items-center bg-brand hover:bg-brand-light hover:text-brand text-white px-10 py-4 rounded-full font-bold text-lg transition shadow-lg">
            <Calendar className="w-6 h-6 mr-3" /> Book Consultation Now
          </Link>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 p-3 flex gap-3">
        <a href="tel:+918247478663" className="flex-1 bg-brand-light text-brand font-bold py-3 rounded-xl flex items-center justify-center text-sm">
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </a>
        <Link href="/book-appointment" className="flex-1 bg-brand text-white font-bold py-3 rounded-xl flex items-center justify-center text-sm">
          Book Appt
        </Link>
      </div>

      <Footer />
    </div>
  );
}
