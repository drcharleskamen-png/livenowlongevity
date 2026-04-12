'use client';

interface Props {
  title: string;
  description: string;
  author: string;
  date: string;
  slug: string;
}

export default function BlogPostSchema({ title, description, author, date, slug }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
      jobTitle: 'Board-Certified Neurologist',
      worksFor: {
        '@type': 'MedicalBusiness',
        name: 'LiveNow Longevity',
        url: 'https://livenowlongevity.com',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'LiveNow Longevity',
      url: 'https://livenowlongevity.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://livenowlongevity.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    },
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://livenowlongevity.com/blog/${slug}`,
    },
    url: `https://livenowlongevity.com/blog/${slug}`,
    articleSection: 'Education',
    keywords: title,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
