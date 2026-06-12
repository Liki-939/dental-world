import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/layout/PageHero';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import { LOCATIONS, SITE } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const locationName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `Best Dental Clinic in ${locationName} | Dental World`,
    description: `Visit our state-of-the-art dental clinic in ${locationName}. Book your appointment with expert dentists today.`,
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'pragathi-nagar' },
    { slug: 'bachupally' }
  ];
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const branch = LOCATIONS.find((l) => l.slug === slug);
  if (!branch) notFound();
  const locationName = branch.name;

  const branchSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": `Dental World ${locationName}`,
    "image": slug === 'pragathi-nagar'
      ? "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
      : "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    "@id": `https://www.dentalworldhyd.com/locations/${slug}`,
    "url": `https://www.dentalworldhyd.com/locations/${slug}`,
    "telephone": branch.phone.tel,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": branch.address,
      "addressLocality": locationName,
      "addressRegion": "Hyderabad",
      "postalCode": "500090",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": slug === 'pragathi-nagar' ? 17.5168 : 17.5255,
      "longitude": slug === 'pragathi-nagar' ? 78.3941 : 78.3845
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ]
  };

  return (
    <>
      <Script
        id={`branch-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(branchSchema) }}
      />
      <main className="flex-grow">
        <PageHero
          title={`Dental World ${locationName}`}
          description="Your trusted neighborhood clinic for advanced, painless dental care."
        />

        <section className="py-20">
          <div className="section-container max-w-6xl">
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
                      <p className="text-slate-600">{branch.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-light text-brand rounded-full flex items-center justify-center shrink-0 mr-4">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-1">Operating Hours</h4>
                      <p className="text-slate-600">{SITE.hours.weekdays}</p>
                      <p className="text-slate-600">{SITE.hours.sunday}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-light text-brand rounded-full flex items-center justify-center shrink-0 mr-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-1">Contact</h4>
                      <a href={`tel:${branch.phone.tel}`} className="text-brand font-semibold text-lg hover:underline">{branch.phone.display}</a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/book-appointment" className="btn-primary w-full text-lg">
                    <Calendar className="w-5 h-5 mr-2" /> Book at {locationName}
                  </Link>
                </div>
              </div>

              <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 min-h-[400px] relative">
                <iframe 
                  src={branch.mapsEmbed}
                  title={`Map — ${branch.name}`} 
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
    </>
  );
}
