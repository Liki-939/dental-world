import { Metadata } from 'next';
import Footer from '@/components/Footer';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import TreatmentCostCards from '@/components/TreatmentCostCards';
import { Calendar, Phone, CheckCircle2 } from 'lucide-react';

// Specialized Navbar for Landing Pages (No outbound links to keep focus)
function LandingNavbar() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-brand text-white p-2 rounded-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.69 2 6 4.69 6 8c0 1.5.5 2.89 1.35 4.04L12 22l4.65-9.96C17.5 10.89 18 9.5 18 8c0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4 0 1.05-.41 2.02-1.08 2.76L12 17.56l-2.92-6.8A3.99 3.99 0 018 8c0-2.21 1.79-4 4-4z" />
            </svg>
          </div>
          <div>
            <h1 className="font-heading font-bold text-xl text-brand-dark leading-tight">DENTAL WORLD</h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="tel:+917997994646" className="hidden md:flex items-center text-slate-700 font-bold hover:text-brand transition">
            <Phone className="w-5 h-5 mr-2" /> +91 799 799 4646
          </a>
          <a href="#book-now" className="bg-brand hover:bg-brand-dark text-white px-5 py-2.5 rounded-full font-bold transition shadow-md text-sm">
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}

// In a real app, this would be fetched from the Django backend API
const getLandingData = (slug: string) => {
  return {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    hero_headline: `Expert ${slug.split('-').join(' ')}`,
    hero_subheadline: "Get a permanent solution for your dental needs with our advanced, painless treatments.",
    pricing: [
      { title: "Standard Options", price: "22,000", features: ["Expert Consultation", "Basic Procedure", "Standard Warranty"] },
      { title: "Premium Care", price: "35,000", features: ["3D Scan", "Advanced Procedure", "Premium Materials", "Extended Warranty"], isPopular: true },
    ],
    faqs: [
      { question: "Is the procedure painful?", answer: "No, we use advanced local anesthesia and minimally invasive techniques to ensure you are completely comfortable." },
      { question: "Are EMI options available?", answer: "Yes, we offer 0% interest EMI options on all major credit cards." }
    ],
    testimonials: [
      { id: 1, patient_name: "Ramesh Kumar", text: "Got my treatment done here. The doctors are very professional and the clinic is extremely hygienic. Highly recommended!", rating: 5 },
      { id: 2, patient_name: "Sunitha Rao", text: "Painless experience and great care. Worth every penny for the confidence it gave me back.", rating: 5 }
    ],
    cases: [
      { beforeImg: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=400&q=80", afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80", description: "Successful Treatment" },
      { beforeImg: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=400&q=80", afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80", description: "Complete Restoration" }
    ]
  };
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = getLandingData(slug);
  return {
    title: `${data.title} | Dental World Hyderabad`,
    description: data.hero_subheadline,
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'dental-implants' },
    { slug: 'root-canal-treatment' },
    { slug: 'braces-and-aligners' },
    { slug: 'cosmetic-dentistry' },
    { slug: 'teeth-whitening' }
  ];
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getLandingData(slug);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <LandingNavbar />
      
      {/* 1. Hero Section (High Conversion Focus) */}
      <section className="bg-brand-light py-12 md:py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="inline-block bg-white text-brand-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-brand/20">
              <span className="text-yellow-500">★★★★★</span> 4.9/5 Google Reviews
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 mb-6 capitalize leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8 font-medium">
              {data.hero_subheadline}
            </p>
            <ul className="space-y-3 mb-10">
              <li className="flex items-center text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-brand mr-3" /> 0% EMI Payment Options</li>
              <li className="flex items-center text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-brand mr-3" /> Experienced Specialists</li>
              <li className="flex items-center text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-brand mr-3" /> Advanced Painless Technology</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book-now" className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg text-center flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" /> Get Free Estimate
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full" id="book-now">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Free Consultation</h3>
              <p className="text-slate-500 mb-6">Enter your details and our team will call you back immediately.</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition" placeholder="+91 00000 00000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Select Location</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-white">
                    <option>Pragathi Nagar</option>
                    <option>Bachupally</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl mt-4 transition shadow-md">
                  Submit Request
                </button>
                <p className="text-xs text-center text-slate-400 mt-4">By submitting, you agree to our privacy policy and terms of service.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Cost Section */}
      <section className="py-20 bg-surface-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Transparent Pricing</h2>
          </div>
          <TreatmentCostCards plans={data.pricing} />
        </div>
      </section>

      {/* 3. Testimonials */}
      <section className="py-24 bg-brand text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Patient Success Stories</h2>
          </div>
          <TestimonialsCarousel testimonials={data.testimonials} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
