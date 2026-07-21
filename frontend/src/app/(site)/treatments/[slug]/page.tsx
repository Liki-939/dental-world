import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { treatmentsData } from '@/data/treatments';
import TreatmentPageClient from './TreatmentPageClient';
import Script from 'next/script';
import { getSiteMediaMap } from '@/lib/media-service';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = treatmentsData[slug];
  
  if (!data) return { title: 'Treatment Not Found' };

  return {
    title: data.seoTitle || `${data.title} in Hyderabad | Dental World`,
    description: data.seoDescription || data.hero_subheadline,
  };
}

export async function generateStaticParams() {
  return Object.keys(treatmentsData).map((slug) => ({
    slug,
  }));
}

const doctorMappings: Record<string, { name: string; specialty: string; credentials: string; image: string }> = {
  'root-canal-treatment': {
    name: 'Dr. Abdul Wahed',
    specialty: 'Endodontics',
    credentials: 'MDS Endodontics',
    image: '/dr.abdul.jpg'
  },
  'dental-implants': {
    name: 'Dr. Anurag',
    specialty: 'Prosthodontics & Implantology',
    credentials: 'MDS Prosthodontics & Implantology',
    image: '/anurag.jpg'
  },
  'full-mouth-rehabilitation': {
    name: 'Dr. Anurag',
    specialty: 'Prosthodontics & Implantology',
    credentials: 'MDS Prosthodontics & Implantology',
    image: '/anurag.jpg'
  },
  'smile-designing': {
    name: 'Dr. Anurag',
    specialty: 'Prosthodontics & Implantology',
    credentials: 'MDS Prosthodontics & Implantology',
    image: '/anurag.jpg'
  },
  'cosmetic-dentistry': {
    name: 'Dr. Anurag',
    specialty: 'Prosthodontics & Implantology',
    credentials: 'MDS Prosthodontics & Implantology',
    image: '/anurag.jpg'
  },
  'hybrid-dentures': {
    name: 'Dr. Anurag',
    specialty: 'Prosthodontics & Implantology',
    credentials: 'MDS Prosthodontics & Implantology',
    image: '/anurag.jpg'
  },
  'dental-crown-bridges': {
    name: 'Dr. Anurag',
    specialty: 'Prosthodontics & Implantology',
    credentials: 'MDS Prosthodontics & Implantology',
    image: '/anurag.jpg'
  },
  'braces': {
    name: 'Dr. Nithin Bharat',
    specialty: 'Dentofacial Orthodontics',
    credentials: 'MDS Dentofacial Orthodontics',
    image: '/nithin.jpg'
  },
  'invisalign-treatment': {
    name: 'Dr. Nithin Bharat',
    specialty: 'Dentofacial Orthodontics',
    credentials: 'MDS Dentofacial Orthodontics',
    image: '/nithin.jpg'
  }
};

const defaultDoctor = {
  name: 'Dr. Sneha',
  specialty: 'Cosmetic & General Dentistry',
  credentials: 'Chief Dentist',
  image: '/sneha.jpg'
};

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = treatmentsData[slug];

  if (!data) {
    notFound();
  }

  const mediaMap = await getSiteMediaMap();
  const doctor = doctorMappings[slug] || defaultDoctor;

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

  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": doctor.name,
    "image": `https://www.dentalworldhyd.in${doctor.image}`,
    "medicalSpecialty": doctor.specialty,
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": doctor.credentials
    },
    "worksFor": {
      "@type": "Dentist",
      "name": "Dental World",
      "telephone": "+91-8247478663",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No 2, Main Road, Bachupally",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500090",
        "addressCountry": "IN"
      }
    }
  };

  const reviewSchema = data.testimonials ? data.testimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "MedicalProcedure",
      "name": data.title
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": t.rating.toString(),
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": t.patient_name
    },
    "reviewBody": t.text
  })) : undefined;

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
      <Script
        id={`dentist-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
      />
      {reviewSchema && reviewSchema.map((rev, idx) => (
        <Script
          key={idx}
          id={`review-schema-${slug}-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rev) }}
        />
      ))}
      <TreatmentPageClient slug={slug} displayTitle={data.title} mediaMap={mediaMap} />
    </>
  );
}
