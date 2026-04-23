import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Providers from '@/components/Providers';
import SchemaMarkup from '@/components/SchemaMarkup';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-open-sans',
  display: 'swap',
});

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
 'application/rss+xml': 'https://www.livenowlongevity.com/feed.xml',
 },
 },
 category: 'Health & Medical',
 classification: 'Medical Clinic',
 referrer: 'origin-when-cross-origin',
 formatDetection: {
 email: false,
 address: false,
 telephone: false,
 },
 openGraph: {
 type: 'website',
 locale: 'en_US',
 url: 'https://www.livenowlongevity.com',
 siteName: 'LiveNow Longevity',
 title: 'LiveNow Longevity Las Vegas | Physician-Supervised Peptide & Longevity Medicine',
 description: 'Board-certified neurologist Dr. Charles Kamen provides physician-supervised peptide therapy, weight management, NAD+ IV therapy, and regenerative medicine in Las Vegas, NV.',
 images: [
 {
 url: '/api/og?title=LiveNow%20Longevity&description=Physician-supervised%20peptide%20therapy%2C%20medical%20weight%20management%2C%20NAD%2B%20IV%20therapy%2C%20and%20regenerative%20medicine%20in%20Las%20Vegas.',
 width: 1200,
 height: 630,
 alt: 'LiveNow Longevity - Physician-supervised wellness in Las Vegas',
 type: 'image/jpeg',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 site: '@livenow_longevity',
 creator: '@livenow_longevity',
 title: 'LiveNow Longevity Las Vegas | Dr. Charles Kamen, MD',
 description: 'Physician-supervised peptide therapy, weight management, NAD+ IV therapy, and regenerative medicine in Las Vegas.',
 images: ['/api/og?title=LiveNow%20Longevity&description=Physician-supervised%20peptide%20therapy%2C%20medical%20weight%20management%2C%20NAD%2B%20IV%20therapy%2C%20and%20regenerative%20medicine%20in%20Las%20Vegas.'],
 },
 robots: {
 index: true,
 follow: true,
 nocache: false,
 googleBot: {
 index: true,
 follow: true,
 notranslate: true,
 'max-snippet': -1,
 'max-image-preview': 'large',
 'max-video-preview': -1,
 },
 },
 other: {
 'og:locality': 'Las Vegas',
 'og:region': 'NV',
 'og:country-name': 'USA',
 'medical:disclaimer': 'Content is for educational purposes only and is not medical advice.',
 'medical:reviewedBy': 'Charles Kamen, MD',
 },
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
 <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
 <head>
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
 <script
   dangerouslySetInnerHTML={{
     __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1364160095508189');
fbq('track', 'PageView');`,
   }}
 />
 <noscript
   dangerouslySetInnerHTML={{
     __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1364160095508189&ev=PageView&noscript=1" />`,
   }}
 />
 </head>
 <body>
 <Providers>{children}</Providers>
 <script
   dangerouslySetInnerHTML={{
     __html: `window.LIVENOW_CHAT_API = 'https://livenow-chatbot.vercel.app';`,
   }}
 />
 <script src="https://livenow-chatbot.vercel.app/widget.js?v=5" async />
 <GoogleAnalytics gaId="G-K065KBPWHF" />
 </body>
 </html>
 );
}
