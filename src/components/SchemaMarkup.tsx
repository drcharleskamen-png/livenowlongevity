const SITE = 'https://www.livenowlongevity.com';

export default function SchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE}/#organization`,
        name: 'LiveNow Longevity',
        legalName: 'LiveNow Longevity',
        url: SITE,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE}/#logo`,
          url: `${SITE}/og-image.jpg`,
          contentUrl: `${SITE}/og-image.jpg`,
          width: 1200,
          height: 630,
          caption: 'LiveNow Longevity',
        },
        image: { '@id': `${SITE}/#logo` },
        description:
          'Physician-supervised peptide therapy, weight management, NAD+ IV therapy, and regenerative medicine in Las Vegas, NV.',
        telephone: '+1-702-808-2650',
        email: 'info@livenowlongevity.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '9975 S Eastern Ave Ste 130',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          postalCode: '89183',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 36.0108,
          longitude: -115.1192,
        },
        founder: { '@id': `${SITE}/#physician` },
        foundingDate: '2024',
        foundingLocation: {
          '@type': 'Place',
          name: 'Las Vegas, Nevada, USA',
        },
        sameAs: [
          'https://www.instagram.com/livenow_longevity',
        ],
        knowsAbout: [
          'Peptide Therapy',
          'GLP-1 Therapeutics',
          'NAD+ IV Therapy',
          'Longevity Medicine',
          'Regenerative Medicine',
          'Weight Management',
        ],
        slogan: 'Physician-supervised longevity medicine',
        priceRange: '$299-$999',
      },
      {
        '@type': ['MedicalClinic', 'MedicalBusiness', 'LocalBusiness'],
        '@id': `${SITE}/#business`,
        name: 'LiveNow Longevity',
        alternateName: 'LiveNow Longevity Las Vegas',
        description:
          'Physician-supervised peptide therapy, weight management, NAD+ IV therapy, and regenerative medicine in Las Vegas, NV. Led by board-certified neurologist Dr. Charles Kamen, MD.',
        url: SITE,
        telephone: '+1-702-808-2650',
        email: 'info@livenowlongevity.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '9975 S Eastern Ave Ste 130',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          postalCode: '89183',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 36.0108,
          longitude: -115.1192,
        },
        hasMap:
          'https://www.google.com/maps?q=9975+S+Eastern+Ave+Ste+130,+Las+Vegas,+NV+89183',
        areaServed: [
          { '@type': 'City', name: 'Las Vegas' },
          { '@type': 'City', name: 'Henderson' },
          { '@type': 'City', name: 'Summerlin' },
          { '@type': 'City', name: 'Green Valley' },
          { '@type': 'State', name: 'Nevada' },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
        ],
        medicalSpecialty: [
          'LongevityMedicine',
          'PreventiveMedicine',
          'RegenerativeMedicine',
        ],
        availableService: [
          { '@id': `${SITE}/#service-peptides` },
          { '@id': `${SITE}/#service-weight` },
          { '@id': `${SITE}/#service-nad` },
          { '@id': `${SITE}/#service-longevity` },
          { '@id': `${SITE}/#service-regen` },
          { '@id': `${SITE}/#service-iv` },
        ],
        image: `${SITE}/og-image.jpg`,
        priceRange: '$299-$999',
        currenciesAccepted: 'USD',
        paymentAccepted: 'Cash, Credit Card, HSA, FSA',
        isAcceptingNewPatients: true,
        founder: { '@id': `${SITE}/#physician` },
        employee: { '@id': `${SITE}/#physician` },
        parentOrganization: { '@id': `${SITE}/#organization` },
        sameAs: ['https://www.instagram.com/livenow_longevity'],
        aggregateRating: { '@id': `${SITE}/#rating` },
      },
      {
        '@type': 'Physician',
        '@id': `${SITE}/#physician`,
        name: 'Dr. Charles Kamen, MD',
        givenName: 'Charles',
        familyName: 'Kamen',
        alternateName: 'Charles Kamen',
        honorificPrefix: 'Dr.',
        honorificSuffix: 'MD',
        jobTitle: 'Founder & Medical Director, LiveNow Longevity',
        description:
          'Board-certified neurologist (American Board of Psychiatry and Neurology) and founder of LiveNow Longevity in Las Vegas, Nevada. MD from Albert Einstein College of Medicine (2011), internship at Yale-New Haven Hospital, neurology residency and movement-disorders fellowship at Loma Linda University. Specializes in peptide therapy, GLP-1 weight management, NAD+ IV therapy, regenerative medicine, and personalized longevity protocols.',
        medicalSpecialty: [
          'Neurology',
          'LongevityMedicine',
          'RegenerativeMedicine',
          'PreventiveMedicine',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Physician',
          occupationalCategory: 'Neurology',
          estimatedSalary: undefined,
        },
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Board Certification',
            recognizedBy: {
              '@type': 'Organization',
              name: 'American Board of Psychiatry and Neurology',
              url: 'https://www.abpn.com',
            },
            educationalLevel: 'Board Certified in Neurology',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Medical License',
            recognizedBy: {
              '@type': 'Organization',
              name: 'Nevada State Board of Medical Examiners',
            },
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Medical Degree',
            educationalLevel: 'Doctor of Medicine (MD)',
            recognizedBy: {
              '@type': 'CollegeOrUniversity',
              name: 'Albert Einstein College of Medicine',
            },
          },
        ],
        identifier: [
          {
            '@type': 'PropertyValue',
            propertyID: 'NPI',
            value: '1033408679',
          },
        ],
        worksFor: { '@id': `${SITE}/#business` },
        alumniOf: [
          {
            '@type': 'CollegeOrUniversity',
            name: 'Albert Einstein College of Medicine',
            url: 'https://www.einsteinmed.edu',
          },
          {
            '@type': 'Hospital',
            name: 'Yale-New Haven Hospital',
            url: 'https://www.ynhh.org',
          },
          {
            '@type': 'CollegeOrUniversity',
            name: 'Loma Linda University',
            url: 'https://home.llu.edu',
          },
        ],
        memberOf: [
          {
            '@type': 'Organization',
            name: 'American Academy of Neurology',
            url: 'https://www.aan.com',
          },
        ],
        knowsAbout: [
          'Peptide Therapy',
          'GLP-1 Therapeutics',
          'Tissue Repair Peptides',
          'Growth Hormone Peptides',
          'Melanocortin Peptides',
          'NAD+ IV Therapy',
          'Weight Management',
          'Longevity Medicine',
          'Regenerative Medicine',
          'Neurology',
          'Movement Disorders',
          'Parkinson\u2019s Disease',
          'Deep Brain Stimulation',
          'Essential Tremor',
        ],
        knowsLanguage: ['en-US'],
        availableLanguage: ['English'],
        image: {
          '@type': 'ImageObject',
          url: `${SITE}/dr-kamen.png`,
          caption: 'Dr. Charles Kamen, MD',
        },
        url: `${SITE}/about`,
        sameAs: [
          'https://health.usnews.com/doctors/charles-kamen-783888',
          'https://www.doximity.com/pub/charles-kamen-md',
          'https://www.healthgrades.com/physician/dr-charles-kamen-gd7qv',
          'https://www.linkedin.com/in/charleskamen/',
          'https://www.lvneuro.com/content/dr-charles-kamen',
          'https://doctor.webmd.com/doctor/charles-kamen-28f9feb0-dec5-11e7-9f4c-005056a225bf-overview',
          'https://www.zocdoc.com/doctor/charles-kamen-md-306860',
          'https://www.vitals.com/doctors/Dr_Charles_Kamen.html',
          'https://doctors.hendersonhospital.com/provider/charles-e-kamen/1991601',
          'https://www.healthcare4ppl.com/physician/nevada/las-vegas/charles-edward-kamen-1033408679.html',
          'https://www.instagram.com/livenow_longevity',
        ],
        isAcceptingNewPatients: true,
      },
      {
        '@type': 'MedicalService',
        '@id': `${SITE}/#service-peptides`,
        name: 'Peptide Therapy',
        description:
          'Physician-supervised peptide therapy including tissue repair peptides, growth hormone peptides, and melanocortin peptides. Sourced from licensed US 503A/503B compounding pharmacies.',
        url: `${SITE}/services/peptide-therapy`,
        provider: { '@id': `${SITE}/#business` },
        performer: { '@id': `${SITE}/#physician` },
        areaServed: { '@type': 'State', name: 'Nevada' },
        medicalSpecialty: 'LongevityMedicine',
        availableService: {
          '@type': 'MedicalProcedure',
          name: 'Peptide Injection Protocols',
        },
      },
      {
        '@type': 'MedicalService',
        '@id': `${SITE}/#service-weight`,
        name: 'Weight Management',
        description:
          'Medical weight management supervised by a board-certified neurologist. Includes GLP-1/GIP medications, comprehensive lab evaluation, and ongoing physician monitoring.',
        url: `${SITE}/services/weight-management`,
        provider: { '@id': `${SITE}/#business` },
        performer: { '@id': `${SITE}/#physician` },
        areaServed: { '@type': 'State', name: 'Nevada' },
        medicalSpecialty: 'LongevityMedicine',
      },
      {
        '@type': 'MedicalService',
        '@id': `${SITE}/#service-nad`,
        name: 'NAD+ IV Therapy',
        description:
          'NAD+ intravenous therapy administered by Dr. Charles Kamen, MD at LiveNow Longevity in Las Vegas, NV.',
        url: `${SITE}/services/nad-therapy`,
        provider: { '@id': `${SITE}/#business` },
        performer: { '@id': `${SITE}/#physician` },
        areaServed: { '@type': 'State', name: 'Nevada' },
        medicalSpecialty: 'LongevityMedicine',
      },
      {
        '@type': 'MedicalService',
        '@id': `${SITE}/#service-longevity`,
        name: 'Longevity Medicine',
        description:
          'Evidence-based longevity medicine programs including biomarker analysis, hormone optimization, and regenerative protocols supervised by Dr. Charles Kamen, MD.',
        url: `${SITE}/services/longevity-medicine`,
        provider: { '@id': `${SITE}/#business` },
        performer: { '@id': `${SITE}/#physician` },
        areaServed: { '@type': 'State', name: 'Nevada' },
        medicalSpecialty: 'LongevityMedicine',
      },
      {
        '@type': 'MedicalService',
        '@id': `${SITE}/#service-regen`,
        name: 'Regenerative Medicine',
        description:
          'Regenerative medicine including PRP therapy and growth factor protocols for joint health and tissue repair.',
        url: `${SITE}/services/regenerative-medicine`,
        provider: { '@id': `${SITE}/#business` },
        performer: { '@id': `${SITE}/#physician` },
        areaServed: { '@type': 'State', name: 'Nevada' },
        medicalSpecialty: 'RegenerativeMedicine',
      },
      {
        '@type': 'MedicalService',
        '@id': `${SITE}/#service-iv`,
        name: 'IV Therapy',
        description:
          'Intravenous therapy including glutathione, B-complex, vitamin D, magnesium, zinc, and custom IV protocols administered by physician-supervised staff.',
        url: `${SITE}/services/iv-therapy`,
        provider: { '@id': `${SITE}/#business` },
        performer: { '@id': `${SITE}/#physician` },
        areaServed: { '@type': 'State', name: 'Nevada' },
        medicalSpecialty: 'LongevityMedicine',
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        name: 'LiveNow Longevity',
        url: SITE,
        publisher: { '@id': `${SITE}/#organization` },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE}/blog?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': ['WebPage', 'MedicalWebPage'],
        '@id': `${SITE}/#webpage`,
        name: 'LiveNow Longevity - Physician-Supervised Longevity Medicine Las Vegas',
        url: SITE,
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': `${SITE}/#business` },
        mainEntity: { '@id': `${SITE}/#business` },
        description:
          'Physician-supervised peptide therapy, weight management, NAD+ IV therapy, and regenerative medicine in Las Vegas, NV.',
        inLanguage: 'en-US',
        reviewedBy: { '@id': `${SITE}/#physician` },
        lastReviewed: new Date().toISOString().slice(0, 10),
        medicalAudience: [
          { '@type': 'MedicalAudience', audienceType: 'Patient' },
          { '@type': 'MedicalAudience', audienceType: 'Caregiver' },
        ],
        audience: {
          '@type': 'PeopleAudience',
          geographicArea: { '@type': 'State', name: 'Nevada' },
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2', '.hero-subtitle', '[data-speakable]'],
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: SITE,
            },
          ],
        },
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
        author: { '@type': 'Person', name: 'Neil M.' },
        reviewBody:
          "Dr. Kamen is the most knowledgeable and friendly doctor I've encountered, and I love his bedside manner. I'm excited to continue my treatment journey with him.",
        itemReviewed: { '@id': `${SITE}/#business` },
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
        author: { '@type': 'Person', name: 'Sandra M.' },
        reviewBody:
          "Doctor Kamen is in a league of his own. This doctor's treatments are already beginning to work after only a few days! I also loved getting an NAD+ infusion as part of my membership welcoming package!",
        itemReviewed: { '@id': `${SITE}/#business` },
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
        author: { '@type': 'Person', name: 'Vera K.' },
        reviewBody:
          'Excellent care and personalized attention. Dr. Kamen takes time to understand each patient needs and creates individualized protocols.',
        itemReviewed: { '@id': `${SITE}/#business` },
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
        author: { '@type': 'Person', name: 'Sam S.' },
        reviewBody:
          'If LiveNow Longevity was just the nicest NAD+ spot in Vegas, that alone would be enough. The infusion room is so nice and the staff is exceptional. Dr. Kamen is thorough and knowledgeable.',
        itemReviewed: { '@id': `${SITE}/#business` },
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
        author: { '@type': 'Person', name: 'Digital F.' },
        reviewBody:
          'My girlfriend and I got evaluated by Dr. Kamen and were excited to have a MD who not only thinks outside of the box but also takes time to explain the science behind his protocols.',
        itemReviewed: { '@id': `${SITE}/#business` },
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
        author: { '@type': 'Person', name: 'Romeo S.' },
        reviewBody:
          "Dr. Kamen and his team at LiveNow Longevity treat disease at its source through peptides. LiveNow Longevity is a zen oasis in busy Las Vegas! I didn't have to wait to be seen either. Definitely recommend.",
        itemReviewed: { '@id': `${SITE}/#business` },
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
        author: { '@type': 'Person', name: 'Shawn' },
        reviewBody:
          "Dr. Kamen is the most caring and professional doctor I have ever met. He puts your needs before his own and he is the most thorough physician I've ever worked with.",
        itemReviewed: { '@id': `${SITE}/#business` },
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
        author: { '@type': 'Person', name: 'John L.' },
        reviewBody:
          'Dr. Kamen is a pioneer and has revolutionized and made it simple to access and use peptides to their full potential. Changed my life. LiveNow Longevity is a game changer.',
        itemReviewed: { '@id': `${SITE}/#business` },
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
        author: { '@type': 'Person', name: 'Mike D.' },
        reviewBody:
          "Dr Kamen is the best and I can't wait to see how the peptides we selected help me restore my health.",
        itemReviewed: { '@id': `${SITE}/#business` },
      },
      {
        '@type': 'AggregateRating',
        '@id': `${SITE}/#rating`,
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '12',
        reviewCount: '12',
        itemReviewed: { '@id': `${SITE}/#business` },
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
