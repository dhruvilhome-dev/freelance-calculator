import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://example.com';
  
  // Programmatic niches targeting high-intent long-tail keywords
  const niches = [
    'software-engineer',
    'graphic-designer',
    'consultant',
    'copywriter',
    'digital-marketer',
    'california-freelance',
    'texas-freelance'
  ];

  const nicheUrls = niches.map((niche) => ({
    url: `${baseUrl}/calculator/${niche}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...nicheUrls,
  ];
}
