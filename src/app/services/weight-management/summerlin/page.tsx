import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Weight Management Summerlin | Dr. Charles Kamen MD | LiveNow Longevity',
 description: 'Medical weight management for Summerlin and The Ridges residents supervised by board-certified neurologist Dr. Charles Kamen, MD. GLP-1/GIP medications and customized programs with physician evaluation and ongoing monitoring.',
 keywords: 'weight management Summerlin NV, GLP-1 Summerlin Nevada, medical weight loss Summerlin, Dr. Charles Kamen weight loss Summerlin, weight management The Ridges',
 authors: [{ name: 'Dr. Charles Kamen, MD' }],
 alternates: {
  canonical: '/services/weight-management/summerlin',
 },
 openGraph: {
  title: 'Weight Management Summerlin | Dr. Charles Kamen, MD | LiveNow Longevity',
  description: 'Medical weight management for Summerlin and The Ridges residents supervised by board-certified neurologist Dr. Charles Kamen, MD.',
  url: 'https://www.livenowlongevity.com/services/weight-management/summerlin',
  siteName: 'LiveNow Longevity',
  type: 'website',
  images: [
   {
    url: '/api/og?title=Weight%20Management%20Summerlin&description=Medical%20weight%20management%20for%20Summerlin%20residents%20by%20Dr.%20Charles%20Kamen%2C%20MD.',
    width: 1200,
    height: 630,
    alt: 'Weight Management Summerlin - LiveNow Longevity',
   },
  ],
 },
 robots: {
  index: true,
  follow: true,
  googleBot: { index: true, follow: true },
 },
};

const service = {
 title: 'Weight Management',
 heroSubtitle: 'Medical weight management programs built around your biology, supervised by a board-certified neurologist.',
 intro: `Medical weight management is available to Summerlin, The Ridges, and Red Rock residents through LiveNow Longevity. Dr. Charles Kamen, MD — a board-certified neurologist by the American Board of Psychiatry and Neurology — provides medically supervised weight management protocols individualized to each patient's health profile.

Our clinic serves patients throughout the Summerlin area, including residents near Red Rock Canyon, The Ridges, Summerlin Village, and the 215 beltway corridor. Every program begins with medical evaluation including lab work before any intervention is recommended.

Medical weight management may include GLP-1/GIP medications when clinically appropriate, along with lifestyle guidance and ongoing physician monitoring. Telemedicine consultations are available for Nevada residents.`,
 benefits: [
  'GLP-1/GIP weight management medications when clinically appropriate after medical evaluation and lab work',
  'Comprehensive metabolic and hormone lab panels as part of the medical evaluation process',
  'Board-certified neurologist by the American Board of Psychiatry and Neurology supervision throughout your program',
  'Physician-provided nutrition and lifestyle guidance',
  'Ongoing physician monitoring with protocol adjustments throughout your program',
  'Peptide-supported metabolism optimization when indicated by medical evaluation',
  'Telemedicine available for Nevada residents for ongoing management',
  'Regular lab reviews to track metabolic health markers',
  'Integration with other wellness programs for comprehensive care',
  'Individualized approach — every program is based on your health profile and goals',
 ],
 faqs: [
  { q: 'Is weight management available in Summerlin?', a: 'Yes. Dr. Kamen provides medical weight management to Summerlin, The Ridges, and Red Rock residents through LiveNow Longevity. Initial consultations are available in-person at our Las Vegas clinic near Summerlin or via secure telemedicine for Nevada residents.' },
  { q: 'How do weight management medications work?', a: 'Weight management medications affect appetite regulation, insulin sensitivity, and gastric emptying. GLP-1/GIP medications are FDA-approved for weight management and may be appropriate for patients whose medical evaluation indicates potential benefit.' },
  { q: 'Am I a candidate for medical weight management?', a: 'After medical consultation and lab evaluation, Dr. Kamen will determine whether a weight management program is appropriate for your individual health profile. Candidates are adults who have had a medical evaluation and have identified weight and metabolic health as personal goals.' },
  { q: 'What labs are included in the evaluation?', a: 'Medical evaluation may include metabolic panels, hormone panels, and other markers depending on your health history. This helps ensure any recommended program is appropriate for your individual health status.' },
  { q: 'How much weight can I expect to lose?', a: 'Individual results vary based on many factors including starting health status, adherence to lifestyle recommendations, and individual response to medications. Clinical trial data for weight management medications shows significant weight loss in study populations. Your results may be different.' },
  { q: 'What areas near Summerlin do you serve?', a: 'We serve patients throughout Summerlin, The Ridges, Red Rock, and the greater 215 corridor. This includes residents near Downtown Summerlin, The Ridges luxury homes, Red Rock Canyon, and surrounding communities. Telemedicine is available for Nevada residents.' },
 ],
 relatedService: { title: 'Peptide Therapy', href: '/services/peptide-therapy' },
};

export default function WeightManagementSummerlinPage() {
 return <ServicePageTemplate {...service} />;
}