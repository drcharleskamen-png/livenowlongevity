import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
 const { searchParams } = new URL(request.url);
 const title = searchParams.get('title') || 'LiveNow Longevity';
 const description = searchParams.get('description') || 'Physician-supervised peptide therapy, weight management, NAD+ IV therapy, and regenerative medicine in Las Vegas.';

 return new ImageResponse(
 (
 <div
 style={{
 height: '100%',
 width: '100%',
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'flex-start',
 justifyContent: 'flex-end',
 backgroundColor: '#041212',
 padding: '60px 80px',
 fontFamily: 'Montserrat, sans-serif',
 }}
 >
 {/* Gradient accent bar at top */}
 <div
 style={{
 position: 'absolute',
 top: 0,
 left: 0,
 right: 0,
 height: '8px',
 background: 'linear-gradient(90deg, #48c78e, #4ecdc4)',
 }}
 />

 {/* Background glow */}
 <div
 style={{
 position: 'absolute',
 top: '-100px',
 right: '-100px',
 width: '600px',
 height: '600px',
 borderRadius: '50%',
 background: 'radial-gradient(circle, rgba(72,199,142,0.15) 0%, transparent 70%)',
 }}
 />

 {/* Logo/Brand */}
 <div
 style={{
 position: 'absolute',
 top: '50px',
 left: '80px',
 display: 'flex',
 flexDirection: 'column',
 }}
 >
 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
 <div
 style={{
 width: '44px',
 height: '44px',
 borderRadius: '8px',
 background: 'linear-gradient(135deg, #003131, #004d4d)',
 border: '2px solid #48c78e',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
 color: '#48c78e',
 fontSize: '20px',
 fontWeight: 900,
 }}
 >
 LN
 </div>
 <span
 style={{
 fontSize: '28px',
 fontWeight: 800,
 color: '#ffffff',
 letterSpacing: '-0.01em',
 }}
 >
 Live<span style={{ color: '#48c78e' }}>Now</span> Longevity
 </span>
 </div>
 </div>

 {/* Decorative DNA helix lines */}
 <div
 style={{
 position: 'absolute',
 top: '120px',
 right: '80px',
 display: 'flex',
 flexDirection: 'column',
 gap: '8px',
 opacity: 0.3,
 }}
 >
 {[...Array(8)].map((_, i) => (
 <div
 key={i}
 style={{
 width: '120px',
 height: '2px',
 background: i % 2 === 0 ? '#48c78e' : '#4ecdc4',
 transform: `translateX(${i % 2 === 0 ? '0' : '20px'})`,
 }}
 />
 ))}
 </div>

 {/* Main title */}
 <div
 style={{
 display: 'flex',
 flexDirection: 'column',
 gap: '24px',
 maxWidth: '900px',
 }}
 >
 <div
 style={{
 fontSize: title.length > 40 ? '48px' : '60px',
 fontWeight: 900,
 color: '#ffffff',
 lineHeight: 1.05,
 letterSpacing: '-0.02em',
 textTransform: 'uppercase',
 }}
 >
 {title}
 </div>

 <div
 style={{
 fontSize: '22px',
 fontWeight: 400,
 color: 'rgba(255,255,255,0.75)',
 lineHeight: 1.5,
 maxWidth: '800px',
 }}
 >
 {description}
 </div>

 {/* Doctor credential */}
 <div
 style={{
 display: 'flex',
 alignItems: 'center',
 gap: '16px',
 marginTop: '12px',
 }}
 >
 <div
 style={{
 width: '8px',
 height: '8px',
 borderRadius: '50%',
 background: '#48c78e',
 }}
 />
 <span
 style={{
 fontSize: '18px',
 fontWeight: 600,
 color: '#48c78e',
 letterSpacing: '0.05em',
 textTransform: 'uppercase',
 }}
 >
 Dr. Charles Kamen, MD · Board-Certified Neurologist
 </span>
 </div>
 </div>

 {/* Bottom accent */}
 <div
 style={{
 position: 'absolute',
 bottom: 0,
 left: 0,
 right: 0,
 height: '4px',
 background: 'linear-gradient(90deg, #48c78e, #4ecdc4, transparent)',
 }}
 />
 </div>
 ),
 {
 width: 1200,
 height: 630,
 }
 );
}
