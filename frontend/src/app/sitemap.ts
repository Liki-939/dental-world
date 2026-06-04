import { MetadataRoute } from 'next';
import { treatmentsData } from '@/data/treatments';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dentalworldhyd.com';

  // Dynamic treatment pages from treatmentsData
  const treatmentSlugs = Object.keys(treatmentsData);

  // Dynamic landing page slugs
  const landingSlugs = [
    'dental-implants',
    'dental-implant-cost-hyderabad',
    'root-canal-treatment',
    'braces',
    'braces-and-aligners',
    'invisalign-treatment',
    'invisalign-pragathi-nagar'
  ];

  // Dynamic branch location slugs
  const locationSlugs = ['pragathi-nagar', 'bachupally'];

  // Dynamic blog post slugs
  const blogSlugs = [
    'how-to-prevent-cavities',
    'benefits-of-invisalign',
    'dental-implant-myths'
  ];

  const treatmentUrls = treatmentSlugs.map((slug) => ({
    url: `${baseUrl}/treatments/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const landingUrls = landingSlugs.map((slug) => ({
    url: `${baseUrl}/landing/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const locationUrls = locationSlugs.map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const blogUrls = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const staticPages = [
    { url: baseUrl, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/book-appointment`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/doctors`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/faq`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/gallery`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/testimonials`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/treatments`, changeFrequency: 'weekly' as const, priority: 0.95 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.8 },
  ].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return [
    ...staticPages,
    ...treatmentUrls,
    ...landingUrls,
    ...locationUrls,
    ...blogUrls,
  ];
}
