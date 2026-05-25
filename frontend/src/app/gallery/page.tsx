import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BeforeAfterSection from '@/components/BeforeAfterSection';

export const metadata: Metadata = {
  title: 'Smile Gallery | Before & After Transformations | Dental World',
  description: 'View our gallery of successful dental treatments including implants, veneers, and full mouth rehabilitations.',
};

const galleryCases = [
  { beforeImg: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=600&q=80", afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80", description: "Full Mouth Dental Implants" },
  { beforeImg: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=600&q=80", afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80", description: "Porcelain Veneers (Smile Makeover)" },
  { beforeImg: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=600&q=80", afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80", description: "Invisalign Treatment (8 Months)" },
  { beforeImg: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=600&q=80", afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80", description: "Zirconia Crowns Restoration" }
];

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
              <p className="text-slate-600">Drag the slider or view the before and after images of our recent successful cases.</p>
            </div>
            
            <BeforeAfterSection cases={galleryCases} />
            
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
