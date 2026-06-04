import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import Script from 'next/script';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about root canals, implants, pricing, and appointments at Dental World Clinic.',
};

const generalFaqs = [
  {
    question: 'Are your dental treatments really painless?',
    answer:
      'Yes. We use advanced anesthesia delivery and minimally invasive techniques for virtually pain-free procedures.',
  },
  {
    question: 'Do you accept dental insurance?',
    answer:
      'We assist with insurance claims and provide documentation. Cashless processing depends on your provider network.',
  },
  {
    question: 'How often should I visit the dentist?',
    answer: 'We recommend a check-up and professional cleaning every 6 months for optimal oral health.',
  },
  {
    question: 'Do you offer EMI options?',
    answer: 'Yes — 0% interest EMI on major credit cards for treatments above ₹15,000.',
  },
  {
    question: 'What should I do in a dental emergency?',
    answer:
      'Call us immediately. We prioritize knocked-out teeth, severe toothaches, and trauma during working hours.',
  },
];

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: generalFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <main className="flex-grow">
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        title="Frequently Asked"
        highlight="Questions"
        description="Everything you need to know about visits and treatments at Dental World."
      />

      <section className="py-20">
        <div className="section-container max-w-4xl">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">General Inquiries</h2>
          <FAQAccordion faqs={generalFaqs} />

          <div className="mt-16 text-center bg-brand-light p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-brand-dark mb-4">Still have questions?</h3>
            <p className="text-slate-600 mb-6">
              Our team is ready to help with any specific queries about your dental health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE.phone.tel}`} className="btn-primary">
                Call {SITE.phone.display}
              </a>
              <Link href="/book-appointment" className="btn-secondary">
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
