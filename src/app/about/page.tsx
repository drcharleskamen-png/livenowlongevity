import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import AboutContent from '@/components/AboutContent';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import styles from './about.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'About Dr. Charles Kamen, MD | LiveNow Longevity Las Vegas',
 description: 'Board-certified neurologist Dr. Charles Kamen, MD — Albert Einstein College of Medicine, Yale internship, Loma Linda residency/fellowship. Specializing in peptide therapy, longevity medicine, and regenerative treatments in Las Vegas.',
 keywords: 'Dr. Charles Kamen, board certified neurologist Las Vegas, longevity medicine doctor, peptide therapy Nevada, Dr. Kamen about',
 authors: [{ name: 'Dr. Charles Kamen, MD' }],
 alternates: {
 canonical: '/about',
 },
 openGraph: {
 title: 'About Dr. Charles Kamen, MD | LiveNow Longevity Las Vegas',
 description: 'Board-certified neurologist Dr. Charles Kamen, MD. Albert Einstein College of Medicine. Specializing in peptide therapy, longevity medicine, and regenerative treatments in Las Vegas.',
 url: 'https://livenowlongevity.com/about',
 siteName: 'LiveNow Longevity',
 type: 'profile',
 images: [
 {
 url: '/api/og?title=About%20Dr.%20Charles%20Kamen%2C%20MD&description=Board-certified%20neurologist%20providing%20peptide%20therapy%2C%20longevity%20medicine%2C%20and%20regenerative%20treatments%20in%20Las%20Vegas.',
 width: 1200,
 height: 630,
 alt: 'Dr. Charles Kamen, MD - LiveNow Longevity',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 site: '@livewell21',
 creator: '@livewell21',
 title: 'About Dr. Charles Kamen, MD | LiveNow Longevity Las Vegas',
 description: 'Board-certified neurologist providing peptide therapy, longevity medicine, and regenerative treatments in Las Vegas.',
 images: ['/api/og?title=About%20Dr.%20Charles%20Kamen%2C%20MD&description=Board-certified%20neurologist%20in%20Las%20Vegas.'],
 },
 robots: {
 index: true,
 follow: true,
 googleBot: { index: true, follow: true },
 },
};

export default function AboutPage() {
 return (
 <>
 <BreadcrumbSchema items={[
   { name: 'Home', url: 'https://livenowlongevity.com' },
   { name: 'About', url: 'https://livenowlongevity.com/about' },
 ]} />
 <Navbar />
 <AboutContent />
 <CTASection />
 <Footer />
 </>
 );
}
