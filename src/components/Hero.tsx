'use client';
import { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from 'framer-motion';
import styles from './Hero.module.css';

const trustBadges = [
  { label: 'Board-Certified Neurologist', icon: 'doctor' },
  { label: 'Lab-Based Testing', icon: 'flask' },
  { label: 'Physician-Supervised', icon: 'shield' },
] as const;

const featurePillars = [
  {
    title: 'Advanced Testing',
    description: 'Identify the root causes with comprehensive lab testing.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M9 3v6.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L15 9.5V3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 3h8M7 14h10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Personalized Plans',
    description: 'Treatments tailored to your biology, goals, and lifestyle.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a7 7 0 0 1 14 0v1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Peptide Therapy',
    description: 'May include peptide therapy when medically appropriate.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M8 7l3 4M16 7l-3 4M8 17l3-4M16 17l-3-4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Optimize & Thrive',
    description: 'Improve energy, performance, recovery, and long-term healthspan.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M3 3v18h18" strokeLinecap="round" />
        <path d="M7 14l4-5 4 3 4-7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 5h4v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 110,
      damping: 18,
      mass: 0.9,
    },
  },
};

const photoVariants: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 70, damping: 22, mass: 1.1 },
  },
};

const credentialVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 130, damping: 18, delay: 0.55 },
  },
};

const BadgeIcon = ({ kind }: { kind: 'doctor' | 'flask' | 'shield' }) => {
  if (kind === 'doctor') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21v-1a7 7 0 0 1 14 0v1" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === 'flask') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M9 3v6.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L15 9.5V3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 3h8M7 14h10" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Subtle scroll-driven parallax + zoom on the photo, all guarded by reduce-motion
  const photoY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -60]);
  const photoScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.04]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  return (
    <section ref={ref} className={styles.hero}>
      <motion.div
        className={styles.glow}
        style={{ opacity: glowOpacity }}
        aria-hidden="true"
      />

      {/* LEFT — copy + pricing */}
      <motion.div
        className={styles.copy}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className={styles.copyInner}>
          <motion.div variants={itemVariants} className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Physician-Guided Longevity
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.headline}>
            Hormone, Peptide &amp; Longevity Optimization{' '}
            <span className={styles.headlineAccent}>in Las Vegas</span>
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.subheadline}>
            Physician-guided care led by Dr. Charles Kamen, MD, board-certified neurologist,
            helping you improve{' '}
            <span className={styles.subAccent}>energy, weight, recovery,</span> and{' '}
            <span className={styles.subAccent}>long-term health</span>.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.priceBoxes}>
            <div className={styles.priceCard}>
              <span className={styles.priceLabel}>Start with a</span>
              <span className={styles.priceLabelStrong}>Physician Evaluation</span>
              <div className={styles.priceValue}>
                <span className={styles.priceAmount}>$89</span>
              </div>
              <p className={styles.priceNote}>
                One-on-one evaluation with Dr. Kamen to review your health and goals.
              </p>
            </div>

            <div className={styles.priceCard}>
              <span className={styles.priceLabel}>Programs starting at</span>
              <div className={styles.priceValue}>
                <span className={styles.priceAmount}>$299</span>
                <span className={styles.pricePeriod}>/month</span>
              </div>
              <p className={styles.priceNote}>Includes:</p>
              <ul className={styles.priceFeatures}>
                <li>
                  <CheckIcon /> Physician guidance &amp; support
                </li>
                <li>
                  <CheckIcon /> Personalized plan
                </li>
                <li>
                  <CheckIcon /> Includes peptide therapy when medically appropriate
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.ctaRow}>
            <motion.a
              href="https://livenowlongevity.clientsecure.me"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary ${styles.ctaPrimary}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <CalendarIcon /> Book Your Evaluation
            </motion.a>
            <motion.a
              href="/#pricing"
              className={`btn-outline ${styles.ctaSecondary}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              View Programs
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.trustRow}>
            {trustBadges.map((b) => (
              <div key={b.label} className={styles.trustItem}>
                <span className={styles.trustIcon}>
                  <BadgeIcon kind={b.icon} />
                </span>
                <span className={styles.trustLabel}>{b.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* RIGHT — full-bleed photo + floating credential card */}
      <motion.div
        className={styles.photoStage}
        style={{ y: photoY, scale: photoScale }}
      >
        <motion.div
          className={styles.photoFrame}
          variants={photoVariants}
          initial="hidden"
          animate="show"
        >
          <div className={styles.photoBackdrop} aria-hidden="true">
            <div className={styles.backdropWatermark}>
              <span className={styles.watermarkLive}>LIVE</span>
              <span className={styles.watermarkNow}>NOW</span>
              <span className={styles.watermarkLong}>LONGEVITY</span>
              <span className={styles.watermarkDot}>.COM</span>
              <span className={styles.watermarkTag}>Physician-Guided Care · Las Vegas</span>
            </div>
          </div>
          <Image
            src="/dr-kamen-cutout.png"
            alt="Dr. Charles Kamen, MD — board-certified neurologist and founder of LiveNow Longevity in Las Vegas"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={styles.photo}
          />
          <div className={styles.photoBlendLeft} aria-hidden="true" />
        </motion.div>

        <motion.div
          className={styles.credentialCard}
          variants={credentialVariants}
          initial="hidden"
          animate="show"
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className={styles.credentialEyebrow}>Board-Certified</span>
          <span className={styles.credentialTitle}>Neurologist</span>
          <ul className={styles.credentialList}>
            <li>
              <CheckIcon /> Neuro-Longevity
            </li>
            <li>
              <CheckIcon /> Stroke
            </li>
            <li>
              <CheckIcon /> Parkinson&rsquo;s Disease
            </li>
            <li>
              <CheckIcon /> Neurodegenerative Disorders
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* BOTTOM — feature pillars span full width */}
      <motion.div
        className={styles.pillars}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className={styles.pillarsInner}>
          {featurePillars.map((p) => (
            <motion.div
              key={p.title}
              variants={itemVariants}
              className={styles.pillar}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 320, damping: 20 }}
            >
              <span className={styles.pillarIcon}>{p.icon}</span>
              <div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDescription}>{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.check}
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}
