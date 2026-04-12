import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://livenowlongevity.com';
  const now = new Date();

  const blogPosts = [
    { slug: 'nad-and-aging', lastmod: new Date('2026-02-28'), priority: 0.7 },
    { slug: 'telemedicine-peptide-therapy', lastmod: new Date('2026-02-10'), priority: 0.7 },
    { slug: 'longevity-labs-guide', lastmod: new Date('2026-01-25'), priority: 0.7 },
    { slug: 'peptide-legality-nevada', lastmod: new Date('2026-01-12'), priority: 0.7 },
    { slug: 'nutrition-glp1-therapy', lastmod: new Date('2026-03-05'), priority: 0.7 },
    { slug: 'muscle-preservation-weight-loss', lastmod: new Date('2026-02-25'), priority: 0.7 },
    { slug: 'metabolic-adaptation-weight-loss', lastmod: new Date('2026-02-20'), priority: 0.7 },
    { slug: 'sleep-weight-loss-metabolism', lastmod: new Date('2026-02-15'), priority: 0.7 },
    { slug: 'leptin-resistance-weight-loss', lastmod: new Date('2026-02-08'), priority: 0.7 },
    { slug: 'glp1-maintenance', lastmod: new Date('2026-02-01'), priority: 0.7 },
    { slug: 'cortisol-weight-loss-resistance', lastmod: new Date('2026-01-28'), priority: 0.7 },
    { slug: 'thyroid-metabolism-weight', lastmod: new Date('2026-01-22'), priority: 0.7 },
    { slug: 'biomarkers-adults-guide', lastmod: new Date('2026-04-01'), priority: 0.7 },
    { slug: 'hs-crp-chronic-inflammation', lastmod: new Date('2026-03-25'), priority: 0.7 },
    { slug: 'hba1c-metabolic-health', lastmod: new Date('2026-03-18'), priority: 0.7 },
    { slug: 'hormone-panels-longevity', lastmod: new Date('2026-03-12'), priority: 0.7 },
    { slug: 'telomere-length-aging', lastmod: new Date('2026-03-08'), priority: 0.7 },
    { slug: 'autophagy-cellular-cleanup', lastmod: new Date('2026-03-02'), priority: 0.7 },
    { slug: 'mitochondrial-dysfunction-aging', lastmod: new Date('2026-02-22'), priority: 0.7 },
    { slug: 'insulin-sensitivity-longevity', lastmod: new Date('2026-02-16'), priority: 0.7 },
    { slug: 'epigenetic-age-testing', lastmod: new Date('2026-02-10'), priority: 0.7 },
    { slug: 'exercise-longevity-research', lastmod: new Date('2026-02-05'), priority: 0.7 },
    { slug: 'peptide-injection-guide', lastmod: new Date('2026-04-07'), priority: 0.7 },
    { slug: 'stacking-peptides-safely', lastmod: new Date('2026-04-08'), priority: 0.7 },
    { slug: 'glutathione-iv-therapy', lastmod: new Date('2026-04-01'), priority: 0.7 },
    { slug: 'vitamin-d-deficiency-adults', lastmod: new Date('2026-04-02'), priority: 0.7 },
    { slug: 'b-complex-iv-therapy', lastmod: new Date('2026-04-03'), priority: 0.7 },
    { slug: 'iv-therapy-vs-oral-supplements', lastmod: new Date('2026-04-04'), priority: 0.7 },
    { slug: 'magnesium-iv-therapy', lastmod: new Date('2026-04-05'), priority: 0.7 },
    { slug: 'zinc-immunity-iv', lastmod: new Date('2026-04-06'), priority: 0.7 },
    { slug: 'custom-iv-protocols', lastmod: new Date('2026-04-07'), priority: 0.7 },
    { slug: 'iv-therapy-recovery', lastmod: new Date('2026-04-08'), priority: 0.7 },
    { slug: 'prp-therapy-joints', lastmod: new Date('2026-04-01'), priority: 0.7 },
    { slug: 'peptide-therapy-joint-health', lastmod: new Date('2026-04-02'), priority: 0.7 },
    { slug: 'growth-factor-therapy', lastmod: new Date('2026-04-03'), priority: 0.7 },
    { slug: 'tissue-repair-peptides', lastmod: new Date('2026-04-04'), priority: 0.7 },
    { slug: 'nerve-regeneration-peptides', lastmod: new Date('2026-04-05'), priority: 0.7 },
    { slug: 'gut-health-peptide-therapy', lastmod: new Date('2026-04-06'), priority: 0.7 },
  ];

  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.lastmod,
      changeFrequency: 'monthly' as const,
      priority: post.priority,
    })),
    { url: `${baseUrl}/services/peptide-therapy`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/weight-management`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/nad-therapy`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/longevity-medicine`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/regenerative-medicine`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/iv-therapy`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
