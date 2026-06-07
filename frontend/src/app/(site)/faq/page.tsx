import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import FAQClient from './FAQClient';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about root canals, implants, pricing, and appointments at Dental World Clinic.',
};

export default function FAQPage() {
  return (
    <main className="flex-grow">
      <PageHero
        title="Frequently Asked"
        highlight="Questions"
        description="Everything you need to know about visits and treatments at Dental World."
      />

      <section className="py-16 md:py-20 bg-slate-50/20">
        <div className="section-container max-w-5xl">
          <FAQClient />

          <div className="mt-20 text-center bg-brand-light/40 p-10 rounded-[24px] border border-blue-50">
            <h3 className="text-xl md:text-2xl font-black text-brand-dark mb-3">Still have questions?</h3>
            <p className="text-slate-600 font-semibold mb-7 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
              Our team is ready to help with any specific queries about your dental health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={`tel:${SITE.phone.tel}`} className="btn-primary w-full sm:w-auto px-8 py-3.5 text-center">
                Call {SITE.phone.display}
              </a>
              <Link href="/book-appointment" className="btn-secondary w-full sm:w-auto px-8 py-3.5 text-center">
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
