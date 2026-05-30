import { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Smile Gallery | Before & After Transformations | Dental World',
  description: 'View our gallery of successful dental treatments including implants, veneers, and full mouth rehabilitations.',
};

export default function GalleryPage() {
  return <GalleryClient />;
}
