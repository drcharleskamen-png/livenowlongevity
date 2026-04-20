'use client';
import { motion } from 'framer-motion';
import styles from '../app/about/about.module.css';

export default function AboutContent() {
 return (
 <>
 <section className={styles.hero}>
 <div className={styles.heroBg} />
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

 <p style={{ fontSize: '0.95rem', color: 'var(--color-muted, #666)', marginTop: '1.5rem' }}>
 Dr. Kamen&rsquo;s credentials can be independently verified through the{' '}
 <a href="https://www.abpn.com" target="_blank" rel="noopener noreferrer">American Board of Psychiatry and Neurology</a>,{' '}
 <a href="https://npiregistry.cms.hhs.gov/provider-view/1033408679" target="_blank" rel="noopener noreferrer">NPI Registry (1033408679)</a>,{' '}
 <a href="https://www.doximity.com/pub/charles-kamen-md" target="_blank" rel="noopener noreferrer">Doximity</a>,{' '}
 <a href="https://health.usnews.com/doctors/charles-kamen-783888" target="_blank" rel="noopener noreferrer">US News Doctors</a>,{' '}
 <a href="https://www.healthgrades.com/physician/dr-charles-kamen-gd7qv" target="_blank" rel="noopener noreferrer">Healthgrades</a>, and{' '}
 <a href="https://www.linkedin.com/in/charleskamen/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
 </p>

 <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>A Different Approach to Medicine</h2>
 <p>Dr. Kamen's approach to longevity and wellness is rooted in his neurology background — understanding that the body operates as an interconnected system, not a collection of isolated symptoms. Rather than addressing complaints in isolation, he looks at the underlying biological drivers of aging, metabolic dysfunction, and tissue decline. His protocols are designed to work with these systems rather than around them.</p>
 <p>This means taking the time to understand what is actually happening at the cellular and systems level before recommending any intervention. Whether a patient is seeking peptide therapy for tissue repair, medical weight management for metabolic health, or NAD+ IV therapy for energy and cognitive optimization, every program begins with a thorough medical evaluation and lab work tailored to the patient's goals and health history.</p>
 <p>He works with patients throughout the Las Vegas metro area, including Summerlin, Henderson, Green Valley, and Southern Highlands, as well as Nevada residents via secure telemedicine for ongoing management and consultations.</p>

 <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>What Patients Can Expect</h2>
 <p>Patients at LiveNow Longevity receive physician-supervised protocols individualized to their specific biology. Initial consultations include a comprehensive review of medical history, discussion of health goals, and lab work to establish baseline markers. From there, Dr. Kamen designs a protocol specifically for that patient's profile — not a standardized template.</p>
 <p>Follow-up care includes ongoing monitoring, protocol adjustments based on patient response, and regular lab reviews to track progress. The goal is not just symptom management — it is addressing the underlying drivers of health decline and supporting the body's natural repair and maintenance systems.</p>
 <p>Conditions commonly addressed through Dr. Kamen's protocols include age-related cognitive decline, metabolic dysfunction, body composition challenges, joint and tissue health concerns, and general wellness optimization for patients committed to proactive health management.</p>
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
