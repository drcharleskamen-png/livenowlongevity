'use client';
export default function SchemaMarkup() {
 const schema = {
 '@context': 'https://schema.org',
 '@graph': [
 {
 '@type': 'Organization',
 '@id': 'https://livenowlongevity.com/#organization',
 name: 'LiveNow Longevity',
 url: 'https://livenowlongevity.com',
 logo: {
 '@type': 'ImageObject',
 url: 'https://livenowlongevity.com/og-image.jpg',
 width: 1200,
 height: 630,
 },
 description: 'Physician-supervised peptide therapy, weight management, NAD+ IV therapy, and regenerative medicine in Las Vegas, NV.',
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
 sameAs: [
 'https://www.facebook.com/livewell21',
 'https://www.instagram.com/livewell21',
 ],
 priceRange: '$$$',
 },
 {
 '@type': 'MedicalBusiness',
 '@id': 'https://livenowlongevity.com/#business',
 name: 'LiveNow Longevity',
 description: 'Physician-supervised peptide therapy, weight management, NAD+ IV therapy, and regenerative medicine in Las Vegas, NV.',
 url: 'https://livenowlongevity.com',
 telephone: '+1-702-808-2650',
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
 openingHoursSpecification: [
 {
 '@type': 'OpeningHoursSpecification',
 dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
 opens: '09:00',
 closes: '17:00',
 },
 ],
 medicalSpecialty: 'Neurology',
 image: 'https://livenowlongevity.com/og-image.jpg',
 priceRange: '$$$',
 worksFor: { '@id': 'https://livenowlongevity.com/#organization' },
 },
 {
 '@type': 'Physician',
 '@id': 'https://livenowlongevity.com/#physician',
 name: 'Dr. Charles Kamen, MD',
 jobTitle: 'Board-Certified Neurologist',
 description: 'Board-certified neurologist by the American Board of Psychiatry and Neurology. Dr. Kamen completed neurology residency and fellowship at Loma Linda University and internship at Yale-New Haven Hospital. Specializes in peptide therapy, longevity medicine, and regenerative wellness programs in Las Vegas, NV.',
 medicalSpecialty: ['Neurology', 'Longevity Medicine', 'Regenerative Medicine'],
 certifications: [
 { '@type': 'PropertyValue', name: 'American Board of Psychiatry and Neurology', value: 'Board Certified Neurologist' },
 ],
 worksFor: {
 '@type': 'MedicalBusiness',
 '@id': 'https://livenowlongevity.com/#business',
 name: 'LiveNow Longevity',
 },
 alumniOf: [
 { '@type': 'EducationalOrganization', name: 'Albert Einstein College of Medicine' },
 { '@type': 'EducationalOrganization', name: 'Yale-New Haven Hospital' },
 { '@type': 'EducationalOrganization', name: 'Loma Linda University' },
 ],
 knowsAbout: [
 'Peptide Therapy',
 'Tissue Repair Peptides',
 'Growth Hormone Peptides',
 'Melanocortin Peptides',
 'NAD+ IV Therapy',
 'GLP-1/GIP Weight Therapy',
 'Weight Management',
 'Longevity Medicine',
 'Regenerative Medicine',
 'Neurology',
 ],
 image: 'https://livenowlongevity.com/og-image.jpg',
 url: 'https://livenowlongevity.com/about',
 },
 {
 '@type': 'FAQPage',
 '@id': 'https://livenowlongevity.com/#faq',
 speakable: {
 '@type': 'SpeakableSpecification',
 cssSelector: '.faqItem h3',
 },
 mainEntity: [
 {
 '@type': 'Question',
 name: 'What is peptide therapy?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Peptide therapy uses specific peptides — short chains of amino acids — to signal and stimulate targeted biological responses in the body. Peptides are prescribed by Dr. Kamen after medical evaluation and sourced from licensed US compounding pharmacies.',
 },
 },
 {
 '@type': 'Question',
 name: 'Is peptide therapy legal in Nevada?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Yes. In Nevada, peptides may be prescribed by a licensed physician for legitimate medical purposes. All peptides prescribed at LiveNow Longevity are sourced from licensed American 503A/503B compounding pharmacies in compliance with Nevada law.',
 },
 },
 {
 '@type': 'Question',
 name: 'What peptides does LiveNow Longevity offer?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'LiveNow Longevity offers physician-guided peptide programs including tissue repair peptides, growth hormone peptides, melanocortin peptides, and combination protocols. Weight management medications may also be incorporated as part of a comprehensive program. All protocols are individualized based on medical evaluation.',
 },
 },
 {
 '@type': 'Question',
 name: 'Who is Dr. Charles Kamen?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Dr. Charles Kamen is a board-certified neurologist by the American Board of Psychiatry and Neurology providing peptide therapy, weight management, NAD+ IV therapy, and regenerative medicine at LiveNow Longevity in Las Vegas, NV.',
 },
 },
 {
 '@type': 'Question',
 name: 'Does LiveNow Longevity offer telemedicine?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Yes. Secure telemedicine consultations are available for Nevada residents. Your initial consultation and ongoing management can be conducted remotely for eligible patients.',
 },
 },
 {
 '@type': 'Question',
 name: 'What conditions may peptide therapy address?',
 acceptedAnswer: {
 '@type': 'Answer',
 text: 'Based on medical evaluation, peptide protocols may be designed to support joint health, body composition, athletic recovery, energy, and general wellness. Individual results vary, and all programs begin with a comprehensive medical evaluation.',
 },
 },
 ],
 },
 {
 '@type': 'WebSite',
 '@id': 'https://livenowlongevity.com/#website',
 name: 'LiveNow Longevity',
 url: 'https://livenowlongevity.com',
 publisher: { '@id': 'https://livenowlongevity.com/#organization' },
 potentialAction: {
 '@type': 'SearchAction',
 target: {
 '@type': 'EntryPoint',
 urlTemplate: 'https://livenowlongevity.com/blog?q={search_term_string}',
 },
 'query-input': 'required name=search_term_string',
 },
 },
 {
 '@type': 'WebPage',
 '@id': 'https://livenowlongevity.com/#webpage',
 name: 'LiveNow Longevity - Home',
 url: 'https://livenowlongevity.com',
 isPartOf: { '@id': 'https://livenowlongevity.com/#website' },
 description: 'Physician-supervised peptide therapy, weight management, NAD+ IV therapy, and regenerative medicine in Las Vegas, NV.',
 breadcrumb: {
 '@type': 'BreadcrumbList',
 itemListElement: [
 {
 '@type': 'ListItem',
 position: 1,
 name: 'Home',
 item: 'https://livenowlongevity.com',
 },
 ],
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
