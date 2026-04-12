'use client';
import { motion } from 'framer-motion';
import styles from '../app/about/about.module.css';

export default function AboutContent() {
 return (
 <>
 <section className={styles.hero}>
 <div className={styles.heroBg} />
 <motion.div
 className={styles.photoWrapper}
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.6 }}
 >
 <img src="/dr-kamen.png" alt="Dr. Charles Kamen, MD" className={styles.heroPhoto} />
 </motion.div>
 <div className={styles.heroContent}>
 <motion.span
 className={styles.eyebrow}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5 }}
 >
 About
 </motion.span>
 <motion.h1
 initial={{ opacity: 0, y: 40 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, delay: 0.1 }}
 >
 Dr. Charles Kamen, MD
 </motion.h1>
 <motion.p
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, delay: 0.2 }}
 >
 Board-Certified Neurologist | Longevity Medicine & Peptide Therapy Specialist
 </motion.p>
 </div>
 </section>

 <section className={`section ${styles.bio}`}>
 <div className="text-container">
 <motion.div
 className={styles.bioContent}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.7 }}
 >
 <p>Dr. Charles Kamen is a board-certified neurologist with a deep commitment to longevity medicine and precision wellness. After completing his medical training at Albert Einstein College of Medicine, Dr. Kamen pursued his internship at Yale-New Haven Hospital and his neurology residency and fellowship at Loma Linda University — giving him a rare combination of elite academic training and clinical expertise in both neurology and regenerative medicine.</p>
 <p>His practice is built on a simple principle: optimal health requires personalized, physician-supervised care grounded in rigorous diagnostics and evidence-based interventions. He does not believe in cookie-cutter protocols. Every patient receives a comprehensive evaluation — including labs, imaging if needed, and a thorough review of their medical history — before any treatment plan is designed.</p>
 <p>Dr. Kamen specializes in peptide therapy, weight management, NAD+ IV therapy, and regenerative longevity protocols. He is board-certified in neurology by the American Board of Psychiatry and Neurology and maintains active medical licensure in Nevada.</p>
 </motion.div>
 </div>
 </section>

 <section className={`section ${styles.credentials}`}>
 <div className="container">
 <motion.div
 className="section-header"
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
 <h2>Education & Credentials</h2>
 </motion.div>
 <div className={styles.credentialGrid}>
 {[
 { school: 'Albert Einstein College of Medicine', detail: 'Medical Degree (2011)' },
 { school: 'Yale-New Haven Hospital', detail: 'Internship' },
 { school: 'Loma Linda University', detail: 'Neurology Residency & Fellowship' },
 { school: 'American Board of Psychiatry and Neurology', detail: 'Board Certified Neurologist' },
 ].map((cred, i) => (
 <motion.div
 key={cred.school}
 className={styles.credentialCard}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: i * 0.1 }}
 whileHover={{ y: -4 }}
 >
 <div className={styles.credIcon}>
 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48c78e" strokeWidth="2">
 <path d="M22 10v6M2 10l10-6 10 6" strokeLinecap="round" strokeLinejoin="round" />
 <path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5" strokeLinecap="round" strokeLinejoin="round" />
 </svg>
 </div>
 <h3>{cred.school}</h3>
 <p>{cred.detail}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 </>
 );
}
