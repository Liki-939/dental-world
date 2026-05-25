import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const locationName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `Best Dental Clinic in ${locationName} | Dental World`,
    description: `Visit our state-of-the-art dental clinic in ${locationName}. Book your appointment with expert dentists today.`,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locationName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-brand-dark py-20 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="inline-block bg-white/10 text-brand-light px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-brand-light/20 backdrop-blur-sm">
              <MapPin className="w-4 h-4 inline mr-1" /> {locationName} Branch
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">
              Dental World <span className="text-brand-light">{locationName}</span>
            </h1>
            <p className="text-lg text-slate-300">
              Your trusted neighborhood dental clinic offering advanced, painless treatments.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Clinic Details</h2>
                
                <div className="space-y-8 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-light text-brand rounded-full flex items-center justify-center shrink-0 mr-4">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-1">Address</h4>
                      <p className="text-slate-600">Main Road, {locationName}, Hyderabad, Telangana 500090</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-light text-brand rounded-full flex items-center justify-center shrink-0 mr-4">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-1">Operating Hours</h4>
                      <p className="text-slate-600 mb-1">Mon - Sat: 9:00 AM - 9:00 PM</p>
                      <p className="text-slate-600">Sun: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-light text-brand rounded-full flex items-center justify-center shrink-0 mr-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-1">Contact</h4>
                      <a href="tel:+917997994646" className="text-brand font-semibold text-lg hover:underline">+91 799 799 4646</a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href={`/book-appointment?location=${slug}`} className="w-full inline-flex justify-center items-center bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-md">
                    <Calendar className="w-5 h-5 mr-2" /> Book at {locationName}
                  </Link>
                </div>
              </div>

              <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 min-h-[400px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.305435987179!2d78.39414271487779!3d17.516801987986065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e0ab85800a7%3A0x6fb2478491c34a2e!2sPragathi%20Nagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
