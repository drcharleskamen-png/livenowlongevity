'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../Services.module.css';

const services = [
 {
 title: 'Peptide Therapy',
 description: 'Physician-guided peptide protocols for recovery, athletic performance, and overall wellness.',
 href: '/services/peptide-therapy',
 icon: (
 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
 <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" strokeLinecap="round" strokeLinejoin="round" />
 </svg>
 ),
 },
 {
 title: 'Weight Management',
 description: 'Medical weight management protocols with physician-guided metabolic and weight management medication support.',
 href: '/services/weight-management',
 icon: (
 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
 <path d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5" strokeLinecap="round" strokeLinejoin="round" />
 </svg>
 ),
 },
 {
 title: 'NAD+ Therapy',
 description: 'NAD+ protocols for cellular energy, recovery, and mitochondrial support.',
 href: '/services/nad-therapy',
 icon: (
 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
 <circle cx="12" cy="12" r="5" />
 <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" strokeLinecap="round" />
 </svg>
 ),
 },
 {
 title: 'Longevity Medicine',
 description: 'Evidence-based longevity protocols with biomarker tracking and anti-aging protocols.',
 href: '/services/longevity-medicine',
 icon: (
 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
 <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
 </svg>
 ),
 },
 {
 title: 'Regenerative Medicine',
 description: 'Physician-guided regenerative protocols for restoring health, energy, and vitality.',
 href: '/services/regenerative-medicine',
 icon: (
 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
 </svg>
 ),
 },
 {
 title: 'IV Therapy',
 description: 'NAD+, glutathione, vitamin infusions and customized IV therapy for targeted results.',
 href: '/services/iv-therapy',
 icon: (
 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
 <path d="M6 2h12M6 22h12M12 2v20M2 6h20M2 18h20" strokeLinecap="round" strokeLinejoin="round" />
 </svg>
 ),
 },
];

export default function ServicesList() {
 return (
 <section id="services" className={`section ${styles.services}`}>
 <div className="container">
 <motion.div
 className="section-header"
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
 <h2>Our Services</h2>
 <p>Comprehensive longevity therapies designed to optimize your health at every stage of life.</p>
 </motion.div>

 <div className={styles.grid}>
 {services.map((svc, i) => (
 <motion.div
 key={svc.title}
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-50px' }}
 transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
 >
 <Link href={svc.href} className={styles.card}>
 <div className={styles.iconWrapper}>{svc.icon}</div>
 <h3>{svc.title}</h3>
 <p>{svc.description}</p>
 <span className={styles.learnMore}>
 Learn More
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
 </svg>
 </span>
 </Link>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
