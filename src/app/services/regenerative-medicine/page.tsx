import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Regenerative Medicine Las Vegas | Dr. Charles Kamen MD | LiveNow Longevity',
 description: 'Physician-guided regenerative medicine programs in Las Vegas by Dr. Charles Kamen, MD. Peptide therapy, wellness protocols, and advanced diagnostics to support natural healing processes.',
 keywords: 'regenerative medicine Las Vegas, peptide therapy Las Vegas, NAD+ therapy Las Vegas, Dr. Charles Kamen regenerative, cellular repair Las Vegas',
 authors: [{ name: 'Dr. Charles Kamen, MD' }],
 alternates: {
 canonical: '/services/regenerative-medicine',
 },
 openGraph: {
 title: 'Regenerative Medicine Las Vegas | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'Physician-guided regenerative medicine programs in Las Vegas by Dr. Charles Kamen, MD. Peptide therapy, wellness protocols, and advanced diagnostics to support natural healing processes.',
 url: 'https://livenowlongevity.com/services/regenerative-medicine',
 siteName: 'LiveNow Longevity',
 type: 'website',
 images: [
 {
 url: '/api/og?title=Regenerative%20Medicine%20Las%20Vegas&description=Physician-guided%20regenerative%20medicine%20programs%20in%20Las%20Vegas%20by%20Dr.%20Charles%20Kamen%2C%20MD.',
 width: 1200,
 height: 630,
 alt: 'Regenerative Medicine Las Vegas - LiveNow Longevity',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 site: '@livenow_longevity',
 creator: '@livenow_longevity',
 title: 'Regenerative Medicine Las Vegas | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'Physician-guided regenerative medicine programs in Las Vegas by Dr. Charles Kamen, MD.',
 images: ['/api/og?title=Regenerative%20Medicine%20Las%20Vegas&description=Physician-guided%20regenerative%20medicine%20by%20Dr.%20Charles%20Kamen%2C%20MD.'],
 },
 robots: {
 index: true,
 follow: true,
 googleBot: { index: true, follow: true },
 },
};

const service = {
 title: 'Regenerative Medicine',
 heroSubtitle: 'Physician-guided wellness programs to support health, energy, and vitality.',
 intro: `Regenerative medicine is a field focused on supporting the body's natural healing and repair processes through evidence-based medical interventions.

At LiveNow Longevity in Las Vegas, Dr. Charles Kamen, MD, a board-certified neurologist by the American Board of Psychiatry and Neurology, offers individualized wellness programs that may include peptide therapy, NAD+ support, and targeted nutritional interventions based on comprehensive medical evaluation.

Every program is built around your individual health profile — medical history, health goals, and evaluation results come first, before any recommendations are made.

Regenerative wellness programs at LiveNow Longevity are grounded in evidence-based medicine. We do not offer unproven or unregulated treatments. All recommendations are based on what is medically appropriate for your individual situation.

Conditions that may be discussed include joint discomfort, fatigue, hormone imbalance, and general wellness concerns related to aging.`,
 benefits: [
 'Comprehensive health evaluation to understand your individual needs and goals',
 'Individualized protocols based on medical evaluation and health data',
 'Physician monitoring and ongoing protocol optimization based on your response',
 'Lab-guided biomarker tracking to monitor your progress',
 'Evidence-based protocols using appropriate medical interventions',
 'Support for joint health, energy, hormone balance, and general wellness',
 'Telemedicine available for Nevada residents for ongoing management',
 'Board-certified neurologist with training in regenerative wellness medicine',
 'Integration with longevity medicine programs for comprehensive care',
 'Coordination with existing healthcare providers when appropriate',
 ],
 faqs: [
 { q: 'What conditions may be addressed through regenerative wellness programs?', a: 'Based on medical evaluation, programs may address joint health concerns, fatigue, hormone imbalance, metabolic wellness, and general age-related wellness concerns. Dr. Kamen evaluates each patient individually to determine the most appropriate interventions for their situation.' },
 { q: 'What is the difference between regenerative medicine and longevity medicine?', a: 'Regenerative wellness focuses on supporting the body\'s natural repair and maintenance processes. Longevity medicine takes a broader view of long-term health optimization. Both approaches use evidence-based interventions individualized to the patient.' },
 { q: 'Is regenerative medicine safe?', a: 'When practiced by a licensed physician with proper patient evaluation and monitoring, regenerative wellness programs are generally safe. All interventions used at LiveNow Longevity are evidence-based and appropriate for the individual patient.' },
 { q: 'How long before I notice improvements?', a: 'Individual results vary based on the specific interventions and the patient\'s health profile. Some patients report improvements within weeks; more significant changes may take longer. Results depend on many individual factors.' },
 { q: 'Can regenerative programs be combined with other therapies?', a: 'Depending on your medical evaluation, combination approaches may be appropriate. Dr. Kamen can review your health profile and discuss whether combining different wellness programs is suitable for your situation.' },
 { q: 'Do I need labs before starting a regenerative program?', a: 'Medical evaluation including appropriate lab work is required before any recommendations are made. This ensures any program recommended is appropriate for your individual health status.' },
 { q: 'What peptides are used in regenerative programs?', a: 'Based on medical evaluation, peptides such as tissue repair peptide protocols, growth hormone secretagogue protocols, and growth hormone-releasing peptide protocols may be recommended. All peptides are sourced from licensed US pharmacies with third-party testing. Protocol is determined by Dr. Kamen based on your individual evaluation.' },
 ],
 relatedService: { title: 'IV Therapy', href: '/services/iv-therapy' },
};

export default function RegenerativeMedicinePage() {
 return <ServicePageTemplate {...service} />;
}