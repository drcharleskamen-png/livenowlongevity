'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, type Variants } from 'framer-motion';
import styles from './Hero.module.css';

const trustBadges = [
  'Dr. Charles Kamen, MD, Albert Einstein College of Medicine 2011',
  'MD Supervised Longevity Therapy',
  'Board Certified Neurologist',
  'NAD+ and Peptides Sourced From Licensed American Compounding Pharmacies',
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const inView = useInView(ref, { once: false });

  return (
    <section ref={ref} className={styles.hero}>
      <motion.div className={styles.videoBg} style={{ y, scale }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
        >
          <source src="/dna-hero-silent.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay} />
      </motion.div>

      <motion.div className={styles.content} style={{ opacity, y: yText }}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className={styles.headline}
        >
          Physician-Supervised<br />Longevity Therapy in Las Vegas
        </motion.h1>

        <motion.p
          className={styles.subheadline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          Board-certified neurologist Dr. Charles Kamen provides personalized longevity protocols based on individualized needs. Treatment with peptides may be considered if clinically appropriate after evaluation. Labs are necessary before treatment.
        </motion.p>

        <motion.a
          href="https://livenowlongevity.clientsecure.me"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-primary ${styles.cta}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Your Consultation
        </motion.a>
      </motion.div>

      <motion.div
        className={styles.trustBadges}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {trustBadges.map((badge) => (
          <motion.div key={badge} variants={badgeVariants} className={styles.badge}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={styles.checkIcon}>
              <path d="M20 6L9 17l-5-5" stroke="#48c78e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{badge}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
