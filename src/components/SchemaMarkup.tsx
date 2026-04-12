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
 {
 '@type': 'Review',
 reviewRating: {
  '@type': 'Rating',
  ratingValue: '5',
  bestRating: '5',
  worstRating: '1',
 },
 author: { '@type': 'Person', name: 'Neil M.' },
 reviewBody: "Dr. Kamen is the most knowledgeable and friendly doctor I've encountered, and I love his bedside manner. I'm excited to continue my treatment journey with him.",
 itemReviewed: { '@id': 'https://livenowlongevity.com/#business' },
},
{
 '@type': 'Review',
 reviewRating: {
  '@type': 'Rating',
  ratingValue: '5',
  bestRating: '5',
  worstRating: '1',
 },
 author: { '@type': 'Person', name: 'Sandra M.' },
 reviewBody: "Doctor Kamen is in a league of his own. This doctor's treatments are already beginning to work after only a few days! I also loved getting an NAD+ infusion as part of my membership welcoming package!",
 itemReviewed: { '@id': 'https://livenowlongevity.com/#business' },
},
{
 '@type': 'Review',
 reviewRating: {
  '@type': 'Rating',
  ratingValue: '5',
  bestRating: '5',
  worstRating: '1',
 },
 author: { '@type': 'Person', name: 'Vera K.' },
 reviewBody: 'Excellent care and personalized attention. Dr. Kamen takes time to understand each patient needs and creates individualized protocols.',
 itemReviewed: { '@id': 'https://livenowlongevity.com/#business' },
},
{
 '@type': 'Review',
 reviewRating: {
  '@type': 'Rating',
  ratingValue: '5',
  bestRating: '5',
  worstRating: '1',
 },
 author: { '@type': 'Person', name: 'Sam S.' },
 reviewBody: 'If Livewell21 was just the nicest NAD+ spot in Vegas, that alone would be enough. The infusion room is so nice and the staff is exceptional. Dr. Kamen is thorough and knowledgeable.',
 itemReviewed: { '@id': 'https://livenowlongevity.com/#business' },
},
{
 '@type': 'Review',
 reviewRating: {
  '@type': 'Rating',
  ratingValue: '5',
  bestRating: '5',
  worstRating: '1',
 },
 author: { '@type': 'Person', name: 'Digital F.' },
 reviewBody: 'My girlfriend and I got evaluated by Dr. Kamen and were excited to have a MD who not only thinks outside of the box but also takes time to explain the science behind his protocols.',
 itemReviewed: { '@id': 'https://livenowlongevity.com/#business' },
},
{
 '@type': 'Review',
 reviewRating: {
  '@type': 'Rating',
  ratingValue: '5',
  bestRating: '5',
  worstRating: '1',
 },
 author: { '@type': 'Person', name: 'Romeo S.' },
 reviewBody: "Dr Kamen and his team at Livewell21 treat disease at its source through peptides. Livewell21 is a zen oasis in busy Las Vegas! I didn't have to wait to be seen either. Definitely recommend.",
 itemReviewed: { '@id': 'https://livenowlongevity.com/#business' },
},
{
 '@type': 'Review',
 reviewRating: {
  '@type': 'Rating',
  ratingValue: '5',
  bestRating: '5',
  worstRating: '1',
 },
 author: { '@type': 'Person', name: 'Shawn' },
 reviewBody: "Dr. Kamen is the most caring and professional doctor I have ever met. He puts your needs before his own and he is the most thorough physician I've ever worked with.",
 itemReviewed: { '@id': 'https://livenowlongevity.com/#business' },
},
{
 '@type': 'Review',
 reviewRating: {
  '@type': 'Rating',
  ratingValue: '5',
  bestRating: '5',
  worstRating: '1',
 },
 author: { '@type': 'Person', name: 'John L.' },
 reviewBody: 'Dr. Kamen is a pioneer and has revolutionized and made it simple to access and use peptides to their full potential. Changed my life. LivWell21 Medical club is a game changer.',
 itemReviewed: { '@id': 'https://livenowlongevity.com/#business' },
},
{
 '@type': 'Review',
 reviewRating: {
  '@type': 'Rating',
  ratingValue: '5',
  bestRating: '5',
  worstRating: '1',
 },
 author: { '@type': 'Person', name: 'Mike D.' },
 reviewBody: "Dr Kamen is the best and I can't wait to see how the peptides we selected help me restore my health.",
 itemReviewed: { '@id': 'https://livenowlongevity.com/#business' },
},
{
 '@type': 'AggregateRating',
 '@id': 'https://livenowlongevity.com/#rating',
 ratingValue: '5',
 bestRating: '5',
 worstRating: '1',
 ratingCount: '9',
 itemReviewed: { '@id': 'https://livenowlongevity.com/#business' },
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
