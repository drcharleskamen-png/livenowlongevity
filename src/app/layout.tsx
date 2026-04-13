import type { Metadata } from 'next';
import Providers from '@/components/Providers';
import SchemaMarkup from '@/components/SchemaMarkup';
import './globals.css';

export const metadata: Metadata = {
 title: {
 default: 'LiveNow Longevity Las Vegas | Physician-Supervised Peptide & Longevity Medicine',
 template: '%s | LiveNow Longevity',
 },
 description: 'Board-certified neurologist Dr. Charles Kamen provides physician-supervised peptide therapy, weight management, NAD+ IV therapy, and regenerative medicine in Las Vegas, NV. Evidence-based wellness protocols individualized to your health goals.',
 keywords: [
 'peptide therapy Las Vegas',
 'longevity medicine Las Vegas',
 'NAD+ therapy Las Vegas',
 'weight management medication weight loss Las Vegas',
 'regenerative medicine Las Vegas',
 'board-certified neurologist Nevada',
 'Dr. Charles Kamen MD',
 'peptide clinic Las Vegas',
 'IV therapy Las Vegas',
 'tissue repair peptide protocols Las Vegas',
 'dual-action weight medication Las Vegas',
 'weight management medication Las Vegas',
 ],
 authors: [{ name: 'Dr. Charles Kamen, MD' }],
 creator: 'LiveNow Longevity',
 publisher: 'LiveNow Longevity',
 metadataBase: new URL('https://www.livenowlongevity.com'),
 alternates: {
 canonical: '/',
 types: {
 'application/ld+json': '/api/og',
 },
 },
 openGraph: {
 type: 'website',
 locale: 'en_US',
 url: 'https://livenowlongevity.com',
 siteName: 'LiveNow Longevity',
 title: 'LiveNow Longevity Las Vegas | Physician-Supervised Peptide & Longevity Medicine',
 description: 'Board-certified neurologist Dr. Charles Kamen provides physician-supervised peptide therapy, weight management, NAD+ IV therapy, and regenerative medicine in Las Vegas, NV.',
 images: [
 {
 url: '/api/og?title=LiveNow%20Longevity&description=Physician-supervised%20peptide%20therapy%2C%20medical%20weight%20management%2C%20NAD%2B%20IV%20therapy%2C%20and%20regenerative%20medicine%20in%20Las%20Vegas.',
 width: 1200,
 height: 630,
 alt: 'LiveNow Longevity - Physician-supervised wellness in Las Vegas',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 site: '@livewell21',
 creator: '@livewell21',
 title: 'LiveNow Longevity Las Vegas | Dr. Charles Kamen, MD',
 description: 'Physician-supervised peptide therapy, weight management, NAD+ IV therapy, and regenerative medicine in Las Vegas.',
 images: ['/api/og?title=LiveNow%20Longevity&description=Physician-supervised%20peptide%20therapy%2C%20medical%20weight%20management%2C%20NAD%2B%20IV%20therapy%2C%20and%20regenerative%20medicine%20in%20Las%20Vegas.'],
 },
 robots: {
 index: true,
 follow: true,
 googleBot: {
 index: true,
 follow: true,
 notranslate: true,
 },
 },
 verification: {
 google: 'G-P2KF5QXBF2',
 },
 other: {
 'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE',
 },
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
 <html lang="en">
 <head>
 <link rel="preconnect" href="https://fonts.googleapis.com" />
 <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
 <link
 href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&family=Open+Sans:wght@300;400;600;700;800&display=swap"
 rel="stylesheet"
 />
 <meta name="geo.region" content="US-NV" />
 <meta name="geo.placename" content="Las Vegas" />
 <meta name="geo.position" content="36.0108;-115.1192" />
 <meta name="ICBM" content="36.0108, -115.1192" />
 <meta name='theme-color' content='#041212' />
 <meta name="mobile-web-app-capable" content="yes" />
 <meta name="apple-mobile-web-app-capable" content="yes" />
 <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
 <meta name="apple-mobile-web-app-title" content="LiveNow Longevity" />
 <link rel="apple-touch-icon" href="/og-image.jpg" />
 <SchemaMarkup />
 </head>
 <body>
 <Providers>{children}</Providers>
 <script
   dangerouslySetInnerHTML={{
     __html: `window.LIVENOW_CHAT_API = 'https://livenow-chatbot.vercel.app';`,
   }}
 />
 <script src="https://livenow-chatbot.vercel.app/widget.js" async />
 </body>
 </html>
 );
}
