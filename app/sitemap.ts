import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Updated with your live custom domain
  const baseUrl = 'https://www.freelancecalcsuite.online';
  
  // Programmatic niches targeting high-intent long-tail keywords
  const niches = [
    'software-engineer',
    'graphic-designer',
    'consultant',
    'copywriter',
    'digital-marketer',
    'california-freelance',
    'texas-freelance',
  ];

  const nicheUrls = niches.map((niche) => ({
    url: `${baseUrl}/calculator/${niche}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 2. Added legal & compliance pages for Google AdSense indexing
  const legalPages = ['privacy', 'terms', 'disclaimer'].map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    ...nicheUrls,
    ...legalPages,
  ];
}