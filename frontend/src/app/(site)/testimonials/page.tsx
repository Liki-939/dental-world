import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patient Reviews',
  description: 'Read reviews and testimonials from patients who visited Dental World Clinic. See how our dental surgeons helped them achieve healthy, beautiful smiles.',
};

const allTestimonials = [
  { id: 1, patient_name: "Ramesh Kumar", text: "Got my treatment done here. The doctors are very professional and the clinic is extremely hygienic. Highly recommended!", rating: 5, treatment_name: "Implants" },
  { id: 2, patient_name: "Sunitha Rao", text: "Painless experience and great care. Worth every penny for the confidence it gave me back.", rating: 5, treatment_name: "Smile Makeover" },
  { id: 3, patient_name: "Karthik", text: "Transparent pricing and EMI options made my root canal treatment very easy on the pocket.", rating: 5, treatment_name: "Root Canal" },
  { id: 4, patient_name: "Priya Singh", text: "The invisalign treatment changed my life. The doctors guided me perfectly throughout the 8 months.", rating: 5, treatment_name: "Invisalign" }
];

export default function TestimonialsPage() {
  return (
    <main className="flex-grow">
      <PageHero
        title="Patient"
        highlight="Reviews"
        description="Discover why 5,000+ patients trust Dental World for their families."
      />

      <section className="py-20 bg-surface-muted">
        <div className="section-container">
            <TestimonialsCarousel testimonials={allTestimonials} />
          </div>
        </section>

      <section className="py-20">
        <div className="section-container max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTestimonials.map((review) => (
                <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-6">&quot;{review.text}&quot;</p>
                  <div>
                    <h4 className="font-bold text-slate-900">{review.patient_name}</h4>
                    <p className="text-sm text-brand font-medium">{review.treatment_name}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link href="/book-appointment" className="btn-primary text-lg">
                Experience Our Care
              </Link>
            </div>
        </div>
      </section>
    </main>
  );
}
