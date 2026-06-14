import Script from 'next/script';
import { LOCATIONS, SITE } from '@/lib/site';

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: `${SITE.name} Hyderabad`,
    image: `${SITE.domain}/images/logo.jpeg`,
    '@id': SITE.domain,
    url: SITE.domain,
    telephone: SITE.phone.tel,
    email: SITE.email,
    address: LOCATIONS.map((loc) => ({
      '@type': 'PostalAddress',
      streetAddress: loc.address,
      addressLocality: loc.name,
      addressRegion: 'Hyderabad',
      postalCode: '500090',
      addressCountry: 'IN',
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '21:00',
    },
    sameAs: [SITE.social.facebook, SITE.social.instagram],
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
