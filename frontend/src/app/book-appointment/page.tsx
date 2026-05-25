import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book Appointment | Dental World',
  description: 'Schedule your consultation with our expert dental specialists in Hyderabad.',
};

export default function BookAppointmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-muted">
      <Navbar />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 mb-4">
              Book Your <span className="text-brand">Consultation</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Take the first step towards a healthier, more beautiful smile. Fill out the form below and our team will contact you to confirm your appointment.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            {/* Contact Information Panel */}
            <div className="lg:w-1/3 bg-brand-dark text-white p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 font-heading">Contact Information</h3>
                <p className="text-brand-light mb-10 opacity-90">
                  We are here to answer any questions you may have about our treatments and procedures.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 text-brand-light shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                      <a href="tel:+917997994646" className="hover:text-brand-light transition">+91 799 799 4646</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 text-brand-light shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Clinic Locations</h4>
                      <p className="text-brand-light">Pragathi Nagar</p>
                      <p className="text-brand-light">Bachupally</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 mr-4 text-brand-light shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Working Hours</h4>
                      <p className="text-brand-light">Mon - Sat: 9:00 AM - 9:00 PM</p>
                      <p className="text-brand-light">Sun: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form Panel */}
            <div className="lg:w-2/3 p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Select Treatment</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white">
                      <option>General Consultation</option>
                      <option>Dental Implants</option>
                      <option>Invisalign / Braces</option>
                      <option>Root Canal</option>
                      <option>Smile Makeover</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Location *</label>
                    <select required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white">
                      <option value="">Select a location</option>
                      <option>Pragathi Nagar</option>
                      <option>Bachupally</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type="date" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white" placeholder="Tell us more about your dental concern..."></textarea>
                </div>

                <button type="submit" className="w-full md:w-auto bg-brand hover:bg-brand-dark text-white font-bold py-4 px-10 rounded-xl transition shadow-lg flex justify-center items-center">
                  Confirm Appointment Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
