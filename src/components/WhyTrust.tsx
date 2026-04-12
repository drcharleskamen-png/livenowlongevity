'use client';
import { useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import styles from './WhyTrust.module.css';

const trustCards = [
  {
    title: 'Board-Certified Neurologist',
    description: 'Albert Einstein College of Medicine, Yale internship, Loma Linda residency/fellowship. Board certified by the American Board of Psychiatry and Neurology.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Pharmaceutical-Grade Peptides',
    description: 'USA-made from licensed pharmacies, 3rd-party tested for purity and potency. Sourced from 503A/503B registered pharmacies.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Personalized Protocols',
    description: 'Custom treatment plans built for your body, bloodwork, health history, and individual goals. No cookie-cutter approaches.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Telemedicine Available',
    description: 'In-person at our Las Vegas clinic or secure telehealth consultations for Nevada residents.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.82v6.36a1 1 0 0 1-1.447.894L15 14M3 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function WhyTrust() {
  const ref = useRef(null);

  return (
    <section className={`section ${styles.whyTrust}`} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Patients Trust LiveNow Longevity</h2>
          <p>Evidence-based care from a board-certified neurologist with a commitment to your long-term health.</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {trustCards.map((card) => (
            <motion.div key={card.title} variants={cardVariant} className={styles.card}>
              <div className={styles.iconWrapper}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
