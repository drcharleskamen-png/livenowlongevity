import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'IV Therapy Las Vegas | Dr. Charles Kamen MD | LiveNow Longevity',
 description: 'Physician-supervised IV therapy in Las Vegas by Dr. Charles Kamen, MD. NAD+, glutathione, and customized vitamin infusions designed for individual wellness support.',
 keywords: 'IV therapy Las Vegas, NAD+ IV Las Vegas, glutathione IV Las Vegas, vitamin infusions Nevada, IV drip Las Vegas clinic, Dr. Charles Kamen IV therapy',
 authors: [{ name: 'Dr. Charles Kamen, MD' }],
 alternates: {
 canonical: '/services/iv-therapy',
 },
 openGraph: {
 title: 'IV Therapy Las Vegas | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'Physician-supervised IV therapy in Las Vegas. NAD+, glutathione, and customized vitamin infusions designed for individual wellness support by Dr. Charles Kamen, MD.',
 url: 'https://livenowlongevity.com/services/iv-therapy',
 siteName: 'LiveNow Longevity',
 type: 'website',
 images: [
 {
 url: '/api/og?title=IV%20Therapy%20Las%20Vegas&description=Physician-supervised%20IV%20therapy%20in%20Las%20Vegas%20by%20Dr.%20Charles%20Kamen%2C%20MD.%20NAD%2B%2C%20glutathione%2C%20and%20vitamin%20infusions.',
 width: 1200,
 height: 630,
 alt: 'IV Therapy Las Vegas - LiveNow Longevity',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 site: '@livenow_longevity',
 creator: '@livenow_longevity',
 title: 'IV Therapy Las Vegas | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'Physician-supervised IV therapy in Las Vegas by Dr. Charles Kamen, MD. NAD+, glutathione, and vitamin infusions.',
 images: ['/api/og?title=IV%20Therapy%20Las%20Vegas&description=Physician-supervised%20IV%20therapy%20by%20Dr.%20Charles%20Kamen%2C%20MD.'],
 },
 robots: {
 index: true,
 follow: true,
 googleBot: { index: true, follow: true },
 },
};

const service = {
 title: 'IV Therapy',
 heroSubtitle: 'NAD+, glutathione, and customized vitamin infusions delivered by a board-certified neurologist in Las Vegas.',
 intro: `Intravenous (IV) therapy involves delivering nutrients and therapeutic compounds directly into the bloodstream, which may allow for higher bioavailability compared to oral supplementation that must pass through the digestive system.

Dr. Charles Kamen, MD, a board-certified neurologist by the American Board of Psychiatry and Neurology at LiveNow Longevity in Las Vegas, designs every IV protocol after medical evaluation. Available protocols include NAD+ for cellular energy support, glutathione for antioxidant support, and customized vitamin and mineral blends based on your individual health profile.

All infusions are administered in our Las Vegas clinic under direct physician supervision. IV therapy at LiveNow Longevity is a medical treatment — not a spa service. Every protocol is individualized based on your evaluation and health goals.`,
 benefits: [
 'NAD+ IV therapy for cellular energy production and mitochondrial function support',
 'Glutathione IV for antioxidant support and liver detoxification',
 'Customized vitamin and mineral infusions based on medical evaluation',
 'High-dose B-complex and amino acid protocols for general wellness support',
 'High bioavailability — bypassing the digestive system compared to oral supplements',
 'Physician-designed protocols based on your individual health profile and goals',
 'Administered in our Las Vegas clinic under direct physician supervision',
 'Can be integrated with peptide therapy, NAD+ loading, and wellness protocols',
 'Optional add-on nutrients including zinc, magnesium, selenium, and alpha-lipoic acid',
 'Telemedicine follow-up for Nevada residents on maintenance protocols',
 ],
 faqs: [
 { q: 'How does IV therapy differ from oral supplements?', a: 'IV therapy delivers compounds directly into the bloodstream, which may allow for higher blood concentrations than oral supplementation. Oral supplements must pass through the digestive system, where absorption may be limited. IV therapy may be appropriate for patients who have difficulty absorbing oral supplements or who have higher nutritional needs.' },
 { q: 'What is NAD+ IV therapy?', a: 'NAD+ IV delivers nicotinamide adenine dinucleotide directly into the bloodstream. NAD+ is a coenzyme involved in cellular energy production and mitochondrial function. Some patients may consider NAD+ IV for general wellness support.' },
 { q: 'What is glutathione IV?', a: 'Glutathione is an antioxidant produced naturally by the body. IV glutathione may be considered for patients seeking additional antioxidant support as part of a wellness protocol.' },
 { q: 'How long does an IV therapy session take?', a: 'Most IV sessions at our clinic take 45 minutes to 2 hours depending on the protocol. NAD+ infusions typically take 1.5–2 hours. Your first session may take longer as we monitor your response and adjust the infusion rate.' },
 { q: 'How often should I receive IV therapy?', a: 'The frequency of IV therapy depends on your individual health goals and medical evaluation. Dr. Kamen will design an appropriate schedule based on your individual situation.' },
 { q: 'Can I combine IV therapy with peptide therapy?', a: 'Depending on your medical evaluation, combination approaches may be appropriate. Dr. Kamen can review your health profile and discuss whether combining IV therapy with other wellness protocols is suitable for you.' },
 { q: 'Is IV therapy safe?', a: 'IV therapy is generally safe when administered by a licensed physician. Side effects are typically mild and may include warmth during infusion, minor nausea, or lightheadedness. Dr. Kamen monitors all patients throughout every infusion.' },
 ],
 relatedService: { title: 'NAD+ Therapy', href: '/services/nad-therapy' },
};

export default function IVTherapyPage() {
 return <ServicePageTemplate {...service} />;
}