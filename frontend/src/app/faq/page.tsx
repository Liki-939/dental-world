import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Dental FAQ | Common Questions Answered | Dental World',
  description: 'Have questions about root canals, implants, pricing, or appointments? Find answers to dental FAQs from specialists at Dental World Clinic.',
};

const generalFaqs = [
  { question: "Are your dental treatments really painless?", answer: "Yes! We utilize advanced computer-controlled local anesthesia delivery systems and minimally invasive techniques to ensure virtually pain-free experiences for all procedures." },
  { question: "Do you accept dental insurance?", answer: "We assist with insurance claims and can provide all necessary documentation. However, direct cashless processing depends on your specific insurance provider's network." },
  { question: "How often should I visit the dentist?", answer: "We recommend a routine check-up and professional cleaning every 6 months to prevent severe dental issues and maintain optimal oral health." },
  { question: "Do you offer EMI options?", answer: "Yes, we offer 0% interest EMI options on all major credit cards for treatments above ₹15,000, making high-quality care affordable." },
  { question: "What should I do in a dental emergency?", answer: "Call our dedicated emergency hotline immediately. We prioritize dental emergencies such as knocked-out teeth, severe toothaches, or dental trauma during working hours." }
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": generalFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="flex-grow">
        <section className="bg-brand-dark py-20 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">Frequently Asked <span className="text-brand-light">Questions</span></h1>
            <p className="text-lg text-slate-300">
              Everything you need to know about your visits and treatments at Dental World.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">General Inquiries</h2>
            <FAQAccordion faqs={generalFaqs} />
            
            <div className="mt-16 text-center bg-brand-light p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-brand-dark mb-4">Still have questions?</h3>
              <p className="text-slate-600 mb-6">Our support team is ready to help you with any specific queries regarding your dental health.</p>
              <a href="tel:+917997994646" className="inline-block bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-full font-bold transition shadow-md">
                Call Us Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
