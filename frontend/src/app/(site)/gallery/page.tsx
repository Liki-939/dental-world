import { Metadata } from 'next';
import GalleryClient from './GalleryClient';
import { getAllBeforeAfterCases } from '@/lib/cases-service';

export const metadata: Metadata = {
  title: 'Smile Gallery | Dental Before & After Transformations Hyderabad',
  description: 'See real transformations at Dental World. Browse dental before & after pictures for implants, aligners, root canals, and smile makeovers in Hyderabad.',
};

export default async function GalleryPage() {
  const cases = await getAllBeforeAfterCases();
  return <GalleryClient initialCases={cases} />;
}

