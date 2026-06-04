import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { treatmentsData } from '@/data/treatments';
import TreatmentPageClient from './TreatmentPageClient';
import Script from 'next/script';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = treatmentsData[slug];
  
  if (!data) return { title: 'Treatment Not Found' };

  return {
    title: `${data.title} in Hyderabad | Dental World`,
    description: data.hero_subheadline,
  };
}

export async function generateStaticParams() {
  return Object.keys(treatmentsData).map((slug) => ({
    slug,
  }));
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = treatmentsData[slug];

  if (!data) {
    notFound();
  }

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": data.title,
    "description": data.aboutText,
    "bodyLocation": "Mouth",
    "outcome": "Improves oral health and aesthetics",
    "offers": data.pricing ? {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": data.pricing[0]?.price.replace(/,/g, ''),
      "highPrice": data.pricing[data.pricing.length - 1]?.price.replace(/,/g, ''),
      "offerCount": data.pricing.length
    } : undefined
  };

  const faqSchema = data.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : undefined;

  return (
    <>
      <Script
        id={`procedure-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      {faqSchema && (
        <Script
          id={`faq-schema-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <TreatmentPageClient slug={slug} displayTitle={data.title} />
    </>
  );
}
