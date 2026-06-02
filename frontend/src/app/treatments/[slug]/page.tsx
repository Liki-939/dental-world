import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { treatmentsData } from '@/data/treatments';
import TreatmentPageClient from './TreatmentPageClient';

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

  return <TreatmentPageClient slug={slug} displayTitle={data.title} />;
}
