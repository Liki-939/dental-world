import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.dentalworldhyd.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/', '/admin/', '/admin'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
