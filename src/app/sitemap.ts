import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://beneficialsolutions.com';
  const locales = ['en', 'fr'];
  const pages = [
    '',
    '/about',
    '/services',
    '/services/mining',
    '/services/transport',
    '/services/forestry',
    '/services/agriculture',
    '/projects',
    '/projects/bamboo-cultivation',
    '/projects/toothpick-production',
    '/news',
    '/contact',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add homepage for each locale
  for (const locale of locales) {
    sitemap.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    });
  }

  // Add all other pages for each locale
  for (const locale of locales) {
    for (const page of pages) {
      if (page === '') continue; // Skip homepage as it's already added
      
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '/news' ? 'weekly' : 'monthly',
        priority: page === '/about' || page === '/services' ? 0.9 : 0.8,
      });
    }
  }

  // Add static pages
  sitemap.push(
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/robots.txt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    }
  );

  return sitemap;
} 