import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, MapPin, Phone } from 'lucide-react';
import BookAppointmentForm from '@/components/BookAppointmentForm';

export const metadata: Metadata = {
  title: 'Book Dental Consultation Online | Dental World Hyderabad',
  description: 'Book your dental consultation online at Dental World Clinic. Select your preferred branch (Pragathi Nagar or Bachupally), treatments, and time slot.',
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
              <BookAppointmentForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
