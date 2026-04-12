import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Weight Management Las Vegas | Dr. Charles Kamen MD | LiveNow Longevity',
 description: 'Medical weight management supervised by board-certified neurologist Dr. Charles Kamen, MD in Las Vegas. GLP-1/GIP medications and customized weight management programs with medical evaluation and ongoing physician monitoring.',
 keywords: 'weight management Las Vegas, GLP-1 weight loss Las Vegas, medical weight loss Nevada, Dr. Charles Kamen weight loss, weight management medication Nevada',
 authors: [{ name: 'Dr. Charles Kamen, MD' }],
 alternates: {
 canonical: '/services/weight-management',
 },
 openGraph: {
 title: 'Weight Management Las Vegas | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'Medical weight management supervised by board-certified neurologist Dr. Charles Kamen, MD. GLP-1/GIP medications and customized weight management programs with medical evaluation and physician monitoring.',
 url: 'https://livenowlongevity.com/services/weight-management',
 siteName: 'LiveNow Longevity',
 type: 'website',
 images: [
 {
 url: '/api/og?title=Weight%20Management%20Las%20Vegas&description=Medical%20weight%20management%20supervised%20by%20board-certified%20neurologist%20Dr.%20Charles%20Kamen%2C%20MD.%20medical%20weight%20management%20programs%20with%20physician%20monitoring.',
 width: 1200,
 height: 630,
 alt: 'Weight Management Las Vegas - LiveNow Longevity',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 site: '@livewell21',
 creator: '@livewell21',
 title: 'Weight Management Las Vegas | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'Medical weight management supervised by board-certified neurologist Dr. Charles Kamen, MD. weight management medication programs with physician monitoring.',
 images: ['/api/og?title=Weight%20Management%20Las%20Vegas&description=Medical%20weight%20management%20by%20Dr.%20Charles%20Kamen%2C%20MD.'],
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
 intro: `Medical weight management involves the use of evidence-based interventions to support healthy weight and metabolic function. This may include lifestyle counseling, nutritional guidance, and in some cases medications that affect appetite, metabolism, or energy balance.

Dr. Charles Kamen, MD, a board-certified neurologist by the American Board of Psychiatry and Neurology at LiveNow Longevity in Las Vegas, uses medically supervised protocols — which may include weight management medications — as part of individualized weight management programs tailored to each patient's health profile.

Every program begins with medical evaluation including lab work before any intervention is recommended. This ensures any program recommended is appropriate for your individual health status.

Medical weight management at LiveNow Longevity is physician-supervised. Dr. Kamen monitors progress, adjusts protocols as needed, and reviews labs regularly. Telemedicine consultations are available for Nevada residents.`,
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
 { q: 'How do weight management medications work?', a: 'Weight management medications affect appetite regulation, insulin sensitivity, and gastric emptying. GLP-1/GIP medications are FDA-approved for weight management and may be appropriate for patients whose medical evaluation indicates potential benefit.' },
 { q: 'Am I a candidate for medical weight management with Dr. Kamen?', a: 'After medical consultation and lab evaluation, Dr. Kamen will determine whether a weight management program is appropriate for your individual health profile. Candidates are adults who have had a medical evaluation and have identified weight and metabolic health as personal goals.' },
 { q: 'What labs are included in the weight management evaluation?', a: 'Medical evaluation may include metabolic panels, hormone panels, and other markers depending on your health history. This helps ensure any recommended program is appropriate for your individual health status.' },
 { q: 'How much weight can I expect to lose?', a: 'Individual results vary based on many factors including starting health status, adherence to lifestyle recommendations, and individual response to medications. Clinical trial data for weight management medications shows significant weight loss in study populations. Your results may be different.' },
 { q: 'Are weight management medication medications safe?', a: 'weight management medications are FDA-approved medications with established safety profiles when prescribed and monitored by a licensed physician. Side effects vary by individual. Dr. Kamen reviews all safety information and monitors patients throughout their program.' },
 { q: 'Do I need to follow a diet and exercise plan?', a: 'Lifestyle modifications including nutrition and physical activity are typically recommended as part of a comprehensive weight management program. Dr. Kamen provides guidance tailored to your individual situation.' },
 { q: 'Can other therapies be combined with a weight management program?', a: 'Depending on your medical evaluation, additional supportive therapies may be appropriate. Dr. Kamen can discuss whether combination approaches are suitable for your individual health profile.' },
 { q: 'What is the difference between medical weight management and commercial diet programs?', a: 'Medical weight management involves evaluation and oversight by a licensed physician, including labs, medication management when appropriate, and ongoing monitoring. Commercial programs may not include physician oversight or medical evaluation.' },
 ],
 relatedService: { title: 'Peptide Therapy', href: '/services/peptide-therapy' },
};

export default function WeightManagementPage() {
 return <ServicePageTemplate {...service} />;
}