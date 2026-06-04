import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { LOCATIONS, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Dental World Clinic in Pragathi Nagar or Bachupally. View addresses, hours, maps, and book a consultation online.',
};

export default function ContactPage() {
  return (
    <main className="flex-grow">
      <PageHero
        title="Contact"
        highlight="Us"
        description="We are here to help with appointments, emergencies, or general inquiries."
      />

      <section className="py-20">
        <div className="section-container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-light text-brand rounded-full flex items-center justify-center mb-6">
                <Phone className="w-8 h-8" aria-hidden />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600 mb-4">For appointments or immediate assistance.</p>
              <a href={`tel:${SITE.phone.tel}`} className="text-brand font-bold text-lg hover:underline">
                {SITE.phone.display}
              </a>
            </div>

            <div className="card p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-light text-brand rounded-full flex items-center justify-center mb-6">
                <Mail className="w-8 h-8" aria-hidden />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600 mb-4">We respond to queries within one business day.</p>
              <a href={`mailto:${SITE.email}`} className="text-brand font-bold text-lg hover:underline">
                {SITE.email}
              </a>
            </div>

            <div className="card p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-light text-brand rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8" aria-hidden />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">Working Hours</h3>
              <p className="text-slate-600">{SITE.hours.weekdays}</p>
              <p className="text-slate-600">{SITE.hours.sunday}</p>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 text-center">Our Clinics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LOCATIONS.map((loc) => (
              <div key={loc.slug} className="bg-surface-muted rounded-2xl overflow-hidden border border-slate-200">
                <div className="h-48 bg-slate-200 relative">
                  <iframe
                    src={loc.mapsEmbed}
                    title={`Map of ${loc.name} branch`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-brand shrink-0" aria-hidden />
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 mb-2">{loc.name} Branch</h4>
                      <p className="text-slate-600 mb-2">{loc.address}</p>
                      <a href={`tel:${loc.phone.tel}`} className="text-brand font-semibold text-sm block mb-4">
                        {loc.phone.display}
                      </a>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={loc.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-sm !py-2 !px-4"
                        >
                          Get Directions
                        </a>
                        <Link href={`/locations/${loc.slug}`} className="btn-primary text-sm !py-2 !px-4">
                          Branch Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/book-appointment" className="btn-primary">
              Book a Consultation Online
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
