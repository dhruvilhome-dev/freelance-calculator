import { MetadataRoute } from 'next';
import { readdirSync } from 'fs';
import { join } from 'path';

/** Auto-discovers guide slugs from the filesystem so the sitemap stays in sync
 *  whenever a new page.tsx is added under app/guides/[slug]/.
 */
function getGuideSlugs(): string[] {
  try {
    const guidesDir = join(process.cwd(), 'app', 'guides');
    return readdirSync(guidesDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);
  } catch {
    // Fallback to known slugs if the filesystem read fails (e.g. edge runtime)
    return [
      'quarterly-estimated-taxes',
      'freelance-tax-deductions',
      '1099-vs-w2-tax-difference',
      'self-employed-retirement-plans',
      'home-office-deduction-rules',
      'freelance-health-insurance-deduction',
      'california-state-taxes-freelancers',
      's-corp-election-freelancers',
    ];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.freelancecalcsuite.online';

  // Specialized niche calculator routes
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
    priority: 0.85,
  }));

  // High-value educational guides — auto-discovered from app/guides/*
  const guidePages = getGuideSlugs().map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Authority & trust pages
  const trustPages = ['about', 'contact', 'guides'].map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Legal & compliance pages for Google AdSense review
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
    ...guidePages,
    ...trustPages,
    ...legalPages,
  ];
}