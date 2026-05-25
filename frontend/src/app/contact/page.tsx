import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Dental World',
  description: 'Get in touch with Dental World. Find our clinic locations, phone numbers, and operating hours.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-brand-dark py-20 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">Contact <span className="text-brand-light">Us</span></h1>
            <p className="text-lg text-slate-300">
              We are here to help you. Reach out to us for appointments, emergencies, or general inquiries.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Contact Cards */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-light text-brand rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-600 mb-4">For immediate assistance or to book an appointment.</p>
                <a href="tel:+917997994646" className="text-brand font-bold text-lg hover:underline">+91 799 799 4646</a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-light text-brand rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">Email Us</h3>
                <p className="text-slate-600 mb-4">Send us your queries and we will get back to you shortly.</p>
                <a href="mailto:info@dentalworldhyd.com" className="text-brand font-bold text-lg hover:underline">info@dentalworldhyd.com</a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-light text-brand rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">Working Hours</h3>
                <p className="text-slate-600 mb-1">Mon - Sat: 9:00 AM - 9:00 PM</p>
                <p className="text-slate-600">Sun: 10:00 AM - 2:00 PM</p>
              </div>
            </div>

            {/* Locations Section */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 text-center">Our Clinics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Location 1 */}
                <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                  <div className="h-48 bg-slate-200 relative">
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
                  <div className="p-8">
                    <div className="flex items-start mb-4">
                      <MapPin className="w-6 h-6 text-brand mr-3 shrink-0" />
                      <div>
                        <h4 className="font-bold text-xl text-slate-900 mb-2">Pragathi Nagar Branch</h4>
                        <p className="text-slate-600 mb-4">123, Main Road, Pragathi Nagar, Hyderabad - 500090</p>
                        <a href="#" className="inline-block bg-brand-light text-brand px-6 py-2 rounded-lg font-semibold hover:bg-brand hover:text-white transition">Get Directions</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location 2 */}
                <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                  <div className="h-48 bg-slate-200 relative">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.109861611096!2d78.3845013148779!3d17.525549087995872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e137b018ecf%3A0x7d6a524a87e07661!2sBachupally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1680000000001!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                  <div className="p-8">
                    <div className="flex items-start mb-4">
                      <MapPin className="w-6 h-6 text-brand mr-3 shrink-0" />
                      <div>
                        <h4 className="font-bold text-xl text-slate-900 mb-2">Bachupally Branch</h4>
                        <p className="text-slate-600 mb-4">456, Cross Road, Bachupally, Hyderabad - 500090</p>
                        <a href="#" className="inline-block bg-brand-light text-brand px-6 py-2 rounded-lg font-semibold hover:bg-brand hover:text-white transition">Get Directions</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
