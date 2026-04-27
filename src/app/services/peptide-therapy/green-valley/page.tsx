import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Peptide Therapy Green Valley Henderson | Dr. Charles Kamen MD | LiveNow Longevity',
 description: 'Physician-supervised peptide therapy for Green Valley and Henderson residents. Board-certified neurologist Dr. Charles Kamen, MD provides growth hormone peptides, tissue repair peptides, and customized protocols after medical evaluation.',
 keywords: 'peptide therapy Green Valley NV, peptide therapy Henderson Nevada, growth hormone peptides Green Valley, Dr. Charles Kamen Henderson, tissue repair peptides Green Valley, peptide clinic Green Valley',
 authors: [{ name: 'Dr. Charles Kamen, MD' }],
 alternates: {
  canonical: '/services/peptide-therapy/green-valley',
 },
 openGraph: {
  title: 'Peptide Therapy Green Valley Henderson | Dr. Charles Kamen, MD | LiveNow Longevity',
  description: 'Physician-supervised peptide therapy for Green Valley and Henderson residents by board-certified neurologist Dr. Charles Kamen, MD.',
  url: 'https://www.livenowlongevity.com/services/peptide-therapy/green-valley',
  siteName: 'LiveNow Longevity',
  type: 'website',
  images: [
   {
    url: '/api/og?title=Peptide%20Therapy%20Green%20Valley&description=Physician-supervised%20peptide%20therapy%20for%20Green%20Valley%20and%20Henderson%20residents%20by%20Dr.%20Charles%20Kamen%2C%20MD.',
    width: 1200,
    height: 630,
    alt: 'Peptide Therapy Green Valley Henderson - LiveNow Longevity',
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
 title: 'Peptide Therapy',
 heroSubtitle: 'Physician-guided peptide protocols designed to restore, repair, and optimize your body at the cellular level.',
 intro: `Peptide therapy is available to Green Valley and Henderson residents through LiveNow Longevity. Dr. Charles Kamen, MD — a board-certified neurologist by the American Board of Psychiatry and Neurology — designs every peptide protocol after comprehensive medical evaluation.

Our clinic serves patients throughout Green Valley, Henderson, and the eastern Las Vegas valley, including residents near the District at Green Valley Ranch, Galleria at Sunset, and the Green Valley Ranch Resort. Peptides are sourced from licensed American compounding pharmacies (503A/503B) that conduct third-party testing on every batch.

Peptide therapy may be considered for individuals with specific health goals including athletic recovery support, body composition support, and general wellness optimization. Protocols are individualized based on medical history, current health status, and health objectives.

Peptide therapy is available via secure telemedicine for Nevada residents.`,
 benefits: [
  'Medical evaluation by a board-certified neurologist before any peptide protocol is recommended',
  'Peptides sourced from licensed US 503A/503B compounding pharmacies with third-party testing',
  'Comprehensive lab panels as part of the medical evaluation process',
  'Individualized protocols based on your health profile and goals',
  'Tissue repair peptides for support with tissue healing and inflammatory response',
  'Melanocortin peptides for support with arousal and libido',
  'Growth hormone-releasing peptides for growth hormone optimization',
  'Growth hormone secretagogues for growth hormone stimulation and body composition support',
  'Available via telemedicine for Nevada residents',
  'Ongoing monitoring with protocol adjustments throughout your protocol',
  'Can be integrated with other wellness protocols including NAD+ and hormone optimization',
 ],
 faqs: [
  { q: 'Is peptide therapy available in Green Valley and Henderson?', a: 'Yes. Dr. Kamen provides peptide therapy to Green Valley and Henderson residents through LiveNow Longevity. Initial consultations are available in-person at our Las Vegas clinic or via secure telemedicine for Nevada residents.' },
  { q: 'How does peptide therapy work?', a: 'Peptides are short sequences of amino acids that bind to specific receptors in your body, triggering targeted biological responses. Peptides work by mimicking or amplifying natural signaling pathways.' },
  { q: 'Is peptide therapy safe?', a: 'When prescribed and supervised by a licensed physician who orders medical evaluation and monitors progress, peptide therapy may be appropriate for many patients. Dr. Kamen monitors all patients throughout their treatment protocol and adjusts protocols based on follow-up and symptom response.' },
  { q: 'Do I need labs before starting peptide therapy?', a: 'Medical evaluation including lab work is required before any peptide protocol. This helps ensure the protocol is appropriate for your individual health profile.' },
  { q: 'How long before I notice changes?', a: 'Individual response varies. Some patients may notice changes within 3–6 weeks. Results depend on the specific peptide protocol, individual health factors, and adherence to the recommended protocol.' },
  { q: 'What areas of Green Valley and Henderson do you serve?', a: 'We serve patients throughout Green Valley, Henderson, Seven Hills, and the eastern Las Vegas valley including the District at Green Valley Ranch, Galleria at Sunset, and surrounding communities. Telemedicine is available for Nevada residents.' },
 ],
 relatedService: { title: 'Weight Management', href: '/services/weight-management' },
};

export default function PeptideTherapyGreenValleyPage() {
 return <ServicePageTemplate {...service} />;
}