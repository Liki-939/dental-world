import Script from 'next/script';

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dental World Hyderabad",
    "image": "https://www.dentalworldhyd.com/logo.png",
    "@id": "https://www.dentalworldhyd.com",
    "url": "https://www.dentalworldhyd.com",
    "telephone": "+917997994646",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123, Main Road",
      "addressLocality": "Pragathi Nagar",
      "addressRegion": "Hyderabad",
      "postalCode": "500090",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.5143,
      "longitude": 78.3965
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.facebook.com/dentalworldhyd",
      "https://www.instagram.com/dentalworldhyd"
    ]
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
