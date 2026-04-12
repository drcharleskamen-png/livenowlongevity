import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogContent from '@/components/BlogContent';
import styles from './blog.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Peptide Therapy & Longevity Blog | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'Evidence-based articles on peptide therapy, longevity medicine, NAD+ IV, weight management, and health optimization. Written by board-certified neurologist Dr. Charles Kamen, MD.',
 keywords: 'peptide therapy blog, longevity medicine articles, NAD+ therapy, weight management medication weight loss, health optimization, Dr. Charles Kamen blog',
 authors: [{ name: 'Dr. Charles Kamen, MD' }],
 alternates: {
 canonical: '/blog',
 },
 openGraph: {
 title: 'Peptide Therapy & Longevity Blog | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'Evidence-based articles on peptide therapy, longevity medicine, NAD+ IV, weight management, and health optimization from Dr. Charles Kamen, MD.',
 url: 'https://livenowlongevity.com/blog',
 siteName: 'LiveNow Longevity',
 type: 'website',
 images: [
 {
 url: '/api/og?title=Peptide%20Therapy%20%26%20Longevity%20Blog&description=Evidence-based%20articles%20on%20peptide%20therapy%2C%20longevity%20medicine%2C%20NAD%2B%20IV%2C%20and%20health%20optimization.',
 width: 1200,
 height: 630,
 alt: 'LiveNow Longevity Blog - Peptide Therapy & Longevity Education',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 site: '@livewell21',
 creator: '@livewell21',
 title: 'Peptide Therapy & Longevity Blog | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'Evidence-based articles on peptide therapy, longevity medicine, NAD+ IV, weight management, and health optimization from Dr. Charles Kamen, MD.',
 images: ['/api/og?title=Peptide%20Therapy%20%26%20Longevity%20Blog&description=Evidence-based%20articles%20from%20Dr.%20Charles%20Kamen%2C%20MD.'],
 },
 robots: {
 index: true,
 follow: true,
 googleBot: { index: true, follow: true },
 },
};

export default function BlogPage() {
 return (
 <>
 <Navbar />
 <BlogContent />
 <Footer />
 </>
 );
}
