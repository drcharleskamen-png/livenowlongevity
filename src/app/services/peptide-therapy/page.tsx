import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Peptide Therapy Las Vegas | Dr. Charles Kamen MD | LiveNow Longevity',
 description: 'Physician-supervised peptide therapy in Las Vegas by board-certified neurologist Dr. Charles Kamen, MD. Growth hormone peptides, tissue repair peptides, and customized peptide protocols prescribed after medical evaluation.',
 keywords: 'peptide therapy Las Vegas, peptide clinic Las Vegas, growth hormone peptides Las Vegas, Dr. Charles Kamen peptides, tissue repair peptides Las Vegas, peptide therapy Nevada',
 authors: [{ name: 'Dr. Charles Kamen, MD' }],
 alternates: {
 canonical: '/services/peptide-therapy',
 },
 openGraph: {
 title: 'Peptide Therapy Las Vegas | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'Physician-supervised peptide therapy in Las Vegas by board-certified neurologist Dr. Charles Kamen, MD. Growth hormone peptides, tissue repair peptides, and customized protocols.',
 url: 'https://livenowlongevity.com/services/peptide-therapy',
 siteName: 'LiveNow Longevity',
 type: 'website',
 images: [
 {
 url: '/api/og?title=Peptide%20Therapy%20Las%20Vegas&description=Physician-supervised%20peptide%20therapy%20by%20Dr.%20Charles%20Kamen%2C%20MD.%20Physician-supervised peptide therapy by Dr. Charles Kamen, MD.',
 width: 1200,
 height: 630,
 alt: 'Peptide Therapy Las Vegas - LiveNow Longevity',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 site: '@livewell21',
 creator: '@livewell21',
 title: 'Peptide Therapy Las Vegas | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'Physician-supervised peptide therapy in Las Vegas by board-certified neurologist Dr. Charles Kamen, MD.',
 images: ['/api/og?title=Peptide%20Therapy%20Las%20Vegas&description=Physician-supervised%20peptide%20therapy%20by%20Dr.%20Charles%20Kamen%2C%20MD.'],
 },
 robots: {
 index: true,
 follow: true,
 googleBot: { index: true, follow: true },
 },
};

const service = {
 title: 'Peptide Therapy',
 heroSubtitle: 'Physician-guided peptide programs designed to restore, repair, and optimize your body at the cellular level.',
 intro: `Peptide therapy involves the use of short chains of amino acids — the building blocks of proteins — that signal specific biological responses in the body. Peptides occur naturally in the human body and, when prescribed by a licensed physician, may be used to support various health goals.

Dr. Charles Kamen, MD, a board-certified neurologist by the American Board of Psychiatry and Neurology at LiveNow Longevity in Las Vegas, designs every peptide protocol after comprehensive medical evaluation. Peptides are sourced from licensed American compounding pharmacies (503A/503B) that conduct third-party testing on every batch.

Peptide therapy may be considered for individuals with specific health goals including athletic recovery support, body composition support, and general wellness optimization. Protocols are individualized based on medical history, current health status, and health objectives.

Peptide therapy is available via secure telemedicine for Nevada residents.`,
 benefits: [
 'Medical evaluation by a board-certified neurologist before any peptide protocol is recommended',
 'Peptides sourced from licensed US 503A/503B compounding pharmacies with third-party testing',
 'Comprehensive lab panels as part of the medical evaluation process',
 'Individualized protocols based on your health profile and goals',
 'Tissue repair peptides for support with tissue healing and inflammatory response',
 'Weight management medications as part of comprehensive weight management programs when clinically appropriate',
 'Melanocortin peptides for support with arousal and libido',
 'Growth hormone-releasing peptides for growth hormone optimization',
 'Growth hormone secretagogues for growth hormone stimulation and body composition support',
 'Available via telemedicine for Nevada residents',
 'Ongoing monitoring with protocol adjustments throughout your program',
 'Can be integrated with other wellness programs including NAD+ and hormone optimization',
 ],
 faqs: [
 { q: 'What peptides does Dr. Kamen prescribe at LiveNow Longevity?', a: 'Dr. Kamen may prescribe growth hormone peptides, tissue repair peptides, melanocortin peptides, and other peptide categories based on medical evaluation. Your specific protocol is determined during your consultation. All peptides are sourced from licensed US pharmacies.' },
 { q: 'How does peptide therapy work?', a: 'Peptides are short sequences of amino acids that bind to specific receptors in your body, triggering targeted biological responses. Peptides work by mimicking or amplifying natural signaling pathways. This makes them highly targeted when prescribed correctly.' },
 { q: 'Is peptide therapy safe?', a: 'When prescribed and supervised by a licensed physician who orders medical evaluation and monitors progress, peptide therapy may be appropriate for many patients. Dr. Kamen monitors all patients throughout their treatment program and adjusts protocols based on follow-up and symptom response.' },
 { q: 'Do I need labs before starting peptide therapy?', a: 'Medical evaluation including lab work is required before any peptide protocol. This helps ensure the protocol is appropriate for your individual health profile.' },
 { q: 'How long before I notice changes?', a: 'Individual response varies. Some patients may notice changes within 3–6 weeks. Results depend on the specific peptide protocol, individual health factors, and adherence to the recommended program.' },
 { q: 'Is peptide therapy legal in Nevada?', a: 'Peptides may be prescribed by a licensed Nevada physician for legitimate medical purposes. All peptides prescribed at LiveNow Longevity are sourced from licensed American compounding pharmacies in compliance with Nevada law and FDA regulations.' },
 { q: 'Can peptide therapy support weight management?', a: 'Weight management medications may be incorporated into a weight management program when clinically appropriate. Dr. Kamen designs individualized protocols based on medical evaluation and lab results.' },
 { q: 'What is the difference between peptide therapy and supplements?', a: 'Prescribed peptide therapy involves injectable peptides from licensed pharmacies with verified purity — dosed and monitored by a physician. Over-the-counter supplements marketed without a prescription are not the same products and are not subject to the same quality and safety standards.' },
 ],
 relatedService: { title: 'Weight Management', href: '/services/weight-management' },
};

export default function PeptideTherapyPage() {
 return <ServicePageTemplate {...service} />;
}