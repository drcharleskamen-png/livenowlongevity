'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Personalized Plans',
    description: 'Treatments tailored to your biology, goals, and lifestyle.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="4" strokeLinecap="round" />
        <path d="M4 21v-1a7 7 0 0 1 14 0v1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Peptide Therapy',
    description: 'May include peptide therapy when medically appropriate.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
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
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 3v18h18" strokeLinecap="round" />
        <path d="M7 14l4-5 4 3 4-7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 5h4v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const BadgeIcon = ({ kind }: { kind: 'doctor' | 'flask' | 'shield' }) => {
  if (kind === 'doctor') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21v-1a7 7 0 0 1 14 0v1" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === 'flask') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 3v6.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L15 9.5V3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 3h8M7 14h10" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.dnaArt} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.layout}>
          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className={styles.headline}>
              Hormone, Peptide &amp; Longevity Optimization{' '}
              <span className={styles.headlineAccent}>in Las Vegas</span>
            </h1>

            <p className={styles.subheadline}>
              Physician-guided care led by Dr. Charles Kamen, board-certified neurologist,
              helping you improve{' '}
              <span className={styles.subAccent}>energy, weight, recovery,</span> and{' '}
              <span className={styles.subAccent}>long-term health</span>.
            </p>

            <div className={styles.priceBoxes}>
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
            </div>

            <div className={styles.ctaRow}>
              <a
                href="https://livenowlongevity.clientsecure.me"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary ${styles.ctaPrimary}`}
              >
                <CalendarIcon /> Book Your Evaluation
              </a>
              <a href="/#pricing" className={`btn-outline ${styles.ctaSecondary}`}>
                View Programs
              </a>
            </div>

            <div className={styles.trustRow}>
              {trustBadges.map((b) => (
                <div key={b.label} className={styles.trustItem}>
                  <span className={styles.trustIcon}>
                    <BadgeIcon kind={b.icon} />
                  </span>
                  <span className={styles.trustLabel}>{b.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.media}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          >
            <div className={styles.photoWrap}>
              <Image
                src="/dr-kamen.png"
                alt="Dr. Charles Kamen, MD — board-certified neurologist and founder of LiveNow Longevity in Las Vegas"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 600px"
                className={styles.photo}
              />
              <div className={styles.photoGradient} aria-hidden="true" />
            </div>

            <div className={styles.credentialCard}>
              <span className={styles.credentialEyebrow}>Board-Certified</span>
              <span className={styles.credentialTitle}>Neurologist</span>
              <ul className={styles.credentialList}>
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
            </div>
          </motion.div>
        </div>

        <div className={styles.pillars}>
          {featurePillars.map((p, i) => (
            <motion.div
              key={p.title}
              className={styles.pillar}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className={styles.pillarIcon}>{p.icon}</span>
              <div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDescription}>{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
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
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}
