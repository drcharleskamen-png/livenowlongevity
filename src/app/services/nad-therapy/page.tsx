import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'NAD+ Therapy Las Vegas | Dr. Charles Kamen MD | LiveNow Longevity',
 description: 'NAD+ IV therapy supervised by board-certified neurologist Dr. Charles Kamen, MD in Las Vegas. Personalized NAD+ protocols for cellular energy and general wellness support.',
 keywords: 'NAD+ therapy Las Vegas, NAD+ IV Las Vegas, NAD+ therapy Nevada, Dr. Charles Kamen NAD+, nicotinamide adenine dinucleotide Las Vegas',
 authors: [{ name: 'Dr. Charles Kamen, MD' }],
 alternates: {
 canonical: '/services/nad-therapy',
 },
 openGraph: {
 title: 'NAD+ Therapy Las Vegas | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'NAD+ IV therapy supervised by board-certified neurologist Dr. Charles Kamen, MD in Las Vegas. Personalized protocols for cellular energy and general wellness support.',
 url: 'https://livenowlongevity.com/services/nad-therapy',
 siteName: 'LiveNow Longevity',
 type: 'website',
 images: [
 {
 url: '/api/og?title=NAD%2B%20Therapy%20Las%20Vegas&description=NAD%2B%20IV%20therapy%20supervised%20by%20board-certified%20neurologist%20Dr.%20Charles%20Kamen%2C%20MD%20in%20Las%20Vegas.',
 width: 1200,
 height: 630,
 alt: 'NAD+ Therapy Las Vegas - LiveNow Longevity',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 site: '@livewell21',
 creator: '@livewell21',
 title: 'NAD+ Therapy Las Vegas | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'NAD+ IV therapy supervised by board-certified neurologist Dr. Charles Kamen, MD in Las Vegas.',
 images: ['/api/og?title=NAD%2B%20Therapy%20Las%20Vegas&description=NAD%2B%20IV%20therapy%20by%20Dr.%20Charles%20Kamen%2C%20MD.'],
 },
 robots: {
 index: true,
 follow: true,
 googleBot: { index: true, follow: true },
 },
};

const service = {
 title: 'NAD+ Therapy',
 heroSubtitle: 'Support cellular energy and mitochondrial function with physician-supervised NAD+ protocols.',
 intro: `NAD+ (nicotinamide adenine dinucleotide) is a coenzyme present in every cell of the body. It plays a role in cellular energy production, mitochondrial function, and DNA repair processes. NAD+ levels decline with age, which is a normal part of the aging process.

Dr. Charles Kamen, MD, a board-certified neurologist by the American Board of Psychiatry and Neurology at LiveNow Longevity in Las Vegas, offers NAD+ therapy protocols that may be appropriate for individuals seeking general wellness support. Treatment is personalized based on health goals and medical evaluation.

Available approaches include NAD+ IV infusions administered in our Las Vegas clinic and oral NAD+ precursor supplementation. Combination protocols with glutathione, B-vitamins, and amino acids may be recommended based on your evaluation.

NAD+ therapy is a medical treatment supervised by a licensed physician. Telemedicine is available for Nevada residents on maintenance protocols.`,
 benefits: [
 'NAD+ IV infusions administered in our Las Vegas clinic under physician supervision',
 'Personalized protocols based on health goals and medical evaluation',
 'Combination infusion protocols with glutathione, B-vitamins, and amino acids when appropriate',
 'Support for cellular energy production and mitochondrial function',
 'Support for cognitive clarity, physical energy, and sleep quality in some patients',
 'Support for DNA repair enzyme function and cellular stress responses',
 'Physician monitoring throughout every infusion session',
 'Can be integrated with peptide therapy, hormone optimization, and wellness programs',
 'Maintenance protocols using oral NAD+ precursor supplements after loading phase',
 'Available via telemedicine for Nevada residents with physician oversight',
 ],
 faqs: [
 { q: 'What is NAD+ and why does it decline with age?', a: 'NAD+ (nicotinamide adenine dinucleotide) is a coenzyme involved in cellular energy production, mitochondrial function, and DNA repair. NAD+ levels decline with age, which is a normal aspect of human aging. Research suggests this decline may affect cellular function, but individual impact varies.' },
 { q: 'What does NAD+ IV therapy involve?', a: 'NAD+ IV therapy involves the administration of NAD+ directly into the bloodstream via an intravenous infusion. This allows the compound to reach cells without passing through the digestive system. Sessions are typically 1.5–2 hours and administered in our clinic under physician supervision.' },
 { q: 'How often do I need NAD+ therapy?', a: 'Initial protocols may involve a series of infusions over 1–2 weeks, followed by a maintenance schedule that varies by individual. Dr. Kamen will design a schedule based on your health goals and medical evaluation.' },
 { q: 'What is the difference between NAD+ IV and oral NAD+ supplements?', a: 'IV NAD+ delivers the compound directly to the bloodstream, bypassing the digestive system for high bioavailability. Oral NAD+ precursors (NMN, NR) are converted by the body into NAD+ and may be used for ongoing maintenance. Dr. Kamen can discuss which approach may be suitable for your situation.' },
 { q: 'Can NAD+ be combined with peptide therapy?', a: 'Depending on your medical evaluation, combination approaches may be appropriate. Dr. Kamen can review your health profile and discuss whether combining NAD+ with other therapies is suitable for your individual situation.' },
 { q: 'Is NAD+ therapy safe?', a: 'NAD+ therapy is generally well-tolerated when administered by a physician. Side effects may include mild flushing, nausea, or warmth during infusion. Dr. Kamen monitors all patients and tailors dosing to individual tolerance.' },
 { q: 'How does NAD+ support brain health and cognitive function?', a: 'NAD+ plays a role in cellular energy production in the brain, DNA repair, and cellular stress responses. Some patients report improvements in mental clarity and focus following NAD+ therapy. Individual results vary.' },
 ],
 relatedService: { title: 'IV Therapy', href: '/services/iv-therapy' },
};

export default function NADTherapyPage() {
 return <ServicePageTemplate {...service} />;
}