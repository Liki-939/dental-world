import { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  title: 'Smile Gallery | Before & After Transformations | Dental World',
  description: 'View our gallery of successful dental treatments including implants, veneers, and full mouth rehabilitations.',
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-muted">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-brand-dark py-20 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">Smile <span className="text-brand-light">Gallery</span></h1>
            <p className="text-lg text-slate-300">
              Real patients. Real results. See the life-changing transformations achieved by our expert specialists.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12 text-center">
              <p className="text-slate-600">Explore our recent successful cases and see the quality of our work.</p>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative w-full" style={{ aspectRatio: '16/9' }}>
              <Image 
                src="/ChatGPT%20Image%20May%2026%2C%202026%2C%2010_16_04%20PM.png" 
                alt="Smile Gallery Cases" 
                fill
                className="object-cover"
              />
            </div>
            
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready for your own transformation?</h3>
              <a href="/book-appointment" className="inline-block bg-brand hover:bg-brand-dark text-white px-10 py-4 rounded-full font-bold text-lg transition shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Book Your Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
