import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Longevity Medicine Las Vegas | Dr. Charles Kamen MD | LiveNow Longevity',
 description: 'Longevity medicine protocols by board-certified neurologist Dr. Charles Kamen, MD in Las Vegas. Biomarker tracking, wellness protocols, and comprehensive health evaluation.',
 keywords: 'longevity medicine Las Vegas, longevity doctor Las Vegas, anti-aging medicine Las Vegas, healthspan optimization Nevada, Dr. Charles Kamen longevity',
 authors: [{ name: 'Dr. Charles Kamen, MD' }],
 alternates: {
 canonical: '/services/longevity-medicine',
 },
 openGraph: {
 title: 'Longevity Medicine Las Vegas | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'Longevity medicine protocols by board-certified neurologist Dr. Charles Kamen, MD in Las Vegas. Biomarker tracking, wellness protocols, and comprehensive health evaluation.',
 url: 'https://livenowlongevity.com/services/longevity-medicine',
 siteName: 'LiveNow Longevity',
 type: 'website',
 images: [
 {
 url: '/api/og?title=Longevity%20Medicine%20Las%20Vegas&description=Longevity%20medicine%20programs%20by%20board-certified%20neurologist%20Dr.%20Charles%20Kamen%2C%20MD%20in%20Las%20Vegas.%20Biomarker%20tracking%20and%20wellness%20protocols.',
 width: 1200,
 height: 630,
 alt: 'Longevity Medicine Las Vegas - LiveNow Longevity',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 site: '@livenow_longevity',
 creator: '@livenow_longevity',
 title: 'Longevity Medicine Las Vegas | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'Longevity medicine protocols by board-certified neurologist Dr. Charles Kamen, MD in Las Vegas. Biomarker tracking and wellness protocols.',
 images: ['/api/og?title=Longevity%20Medicine%20Las%20Vegas&description=Longevity%20medicine%20by%20Dr.%20Charles%20Kamen%2C%20MD.'],
 },
 robots: {
 index: true,
 follow: true,
 googleBot: { index: true, follow: true },
 },
};

const service = {
 title: 'Longevity Medicine',
 heroSubtitle: 'Evidence-based wellness protocols with biomarker tracking to support healthy aging.',
 intro: `Longevity medicine focuses on supporting long-term health and wellness through evidence-based interventions, comprehensive biomarker evaluation, and individualized wellness protocols.

Dr. Charles Kamen, MD, a board-certified neurologist by the American Board of Psychiatry and Neurology at LiveNow Longevity in Las Vegas, uses advanced diagnostics and therapeutic protocols to support patients interested in optimizing their long-term health trajectory.

Dr. Kamen takes a comprehensive approach — combining biomarker panels, health evaluation, and evidence-based wellness protocols to support patients interested in healthy aging. Every protocol begins with medical evaluation to understand your current health status and health goals.

Protocols may include nutritional guidance, lifestyle recommendations, and in some cases therapeutic interventions — all based on individual medical evaluation. Telemedicine consultations are available for Nevada residents.`,
 benefits: [
 'Comprehensive biomarker panels including metabolic, inflammatory, and wellness markers',
 'Optional epigenetic age testing to understand your biological age indicators',
 'Individualized wellness protocols based on your health profile and goals',
 'Evidence-based combination of nutritional, lifestyle, and therapeutic interventions',
 'Biomarker tracking to monitor your health trajectory over time',
 'Telemedicine available for Nevada residents for ongoing management',
 'Board-certified neurologist by the American Board of Psychiatry and Neurology with training in wellness and longevity medicine',
 'Lab-guided protocols — all interventions based on your actual health data',
 'Coordination with your existing healthcare providers when appropriate',
 'Annual health review to track your wellness progress',
 ],
 faqs: [
 { q: 'What is longevity medicine?', a: 'Longevity medicine focuses on supporting long-term health and wellness through comprehensive evaluation, biomarker tracking, and evidence-based interventions aimed at supporting healthy aging.' },
 { q: 'What labs and diagnostics are included?', a: 'Evaluations may include metabolic panels, hormone panels, inflammatory markers, nutritional markers, and optional advanced testing depending on your health profile and goals.' },
 { q: 'Who is a good candidate for longevity medicine?', a: 'Adults interested in comprehensive health evaluation and wellness optimization may be candidates. Most patients are interested in understanding their current health status and identifying ways to support their long-term wellness.' },
 { q: 'What is epigenetic age testing?', a: 'Epigenetic age testing analyzes DNA methylation patterns to estimate biological age indicators. This is an optional add-on that provides additional data about your health trajectory. Individual results vary.' },
 { q: 'How does longevity medicine differ from traditional healthcare?', a: 'Longevity medicine takes a proactive, wellness-focused approach to long-term health rather than waiting for illness to occur. It uses comprehensive diagnostics and individualized protocols to support optimal health over time.' },
 { q: 'How long does it take to see results from a longevity protocol?', a: 'Results vary by individual and depend on the specific interventions recommended. Some patients notice improvements in energy and wellness within weeks; more significant biomarker changes may take months of consistent participation in the protocol.' },
 { q: 'What therapies are used in longevity protocols?', a: 'Longevity protocols may include nutritional guidance, lifestyle recommendations, biomarker monitoring, and in some cases therapeutic interventions — all determined by your individual medical evaluation. All interventions are evidence-based and individualized.' },
 ],
 relatedService: { title: 'Regenerative Medicine', href: '/services/regenerative-medicine' },
};

export default function LongevityMedicinePage() {
 return <ServicePageTemplate {...service} />;
}