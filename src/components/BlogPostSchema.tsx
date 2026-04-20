'use client';

interface Props {
  title: string;
  description: string;
  author: string;
  date: string;
  slug: string;
}

export default function BlogPostSchema({ title, description, date, slug }: Props) {
  const url = `https://www.livenowlongevity.com/blog/${slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: 'en-US',
        isPartOf: { '@id': 'https://livenowlongevity.com/#website' },
        about: { '@id': 'https://livenowlongevity.com/#business' },
        lastReviewed: date,
        reviewedBy: { '@id': 'https://livenowlongevity.com/#physician' },
        audience: {
          '@type': 'MedicalAudience',
          audienceType: 'Patient',
        },
      },
      {
        '@type': 'MedicalScholarlyArticle',
        '@id': `${url}#article`,
        headline: title,
        description,
        url,
        mainEntityOfPage: { '@id': `${url}#webpage` },
        image: {
          '@type': 'ImageObject',
          url: 'https://livenowlongevity.com/og-image.jpg',
          width: 1200,
          height: 630,
        },
        author: { '@id': 'https://livenowlongevity.com/#physician' },
        reviewedBy: { '@id': 'https://livenowlongevity.com/#physician' },
        publisher: { '@id': 'https://livenowlongevity.com/#organization' },
        datePublished: date,
        dateModified: date,
        lastReviewed: date,
        articleSection: 'Education',
        keywords: title,
        inLanguage: 'en-US',
        audience: {
          '@type': 'MedicalAudience',
          audienceType: 'Patient',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
