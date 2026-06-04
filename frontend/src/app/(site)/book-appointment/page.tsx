import { Metadata } from 'next';
import { Clock, MapPin, Phone } from 'lucide-react';
import BookAppointmentForm from '@/components/BookAppointmentForm';
import { LOCATIONS, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Book Appointment',
  description:
    'Book your dental consultation online at Dental World. Select your branch, treatment, and preferred time.',
};

export default function BookAppointmentPage() {
  return (
    <main className="flex-grow py-16 md:py-24 bg-surface-muted">
      <div className="section-container max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 mb-4 text-balance">
            Book Your <span className="text-brand">Consultation</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Take the first step toward a healthier smile. Submit the form and our team will confirm your
            appointment.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="lg:w-1/3 bg-brand-dark text-white p-10 flex flex-col">
            <h2 className="text-2xl font-bold mb-6 font-heading">Contact Information</h2>
            <p className="text-brand-light mb-10 opacity-90">
              Questions about treatments or procedures? We are happy to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand-light shrink-0" aria-hidden />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <a href={`tel:${SITE.phone.tel}`} className="hover:text-brand-light transition">
                    {SITE.phone.display}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-light shrink-0" aria-hidden />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Clinic Locations</h3>
                  {LOCATIONS.map((loc) => (
                    <p key={loc.slug} className="text-brand-light">
                      {loc.name}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-brand-light shrink-0" aria-hidden />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                  <p className="text-brand-light">{SITE.hours.weekdays}</p>
                  <p className="text-brand-light">{SITE.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 p-8 md:p-10">
            <BookAppointmentForm />
          </div>
        </div>
      </div>
    </main>
  );
}
