'use client';
import { motion } from 'framer-motion';
import styles from './Pricing.module.css';

const evaluation = {
  name: 'Physician Evaluation',
  price: '$89',
  period: 'one-time',
  description:
    'Start with a one-on-one evaluation with Dr. Kamen to review your health, history, and goals — and decide together whether ongoing care is the right fit.',
  features: [
    'Comprehensive medical history review',
    'Goals and symptom assessment',
    'Personalized recommendations',
    'No commitment to ongoing care',
  ],
  cta: 'Book Evaluation',
};

const tiers = [
  {
    name: 'Essential Optimization',
    price: '$299',
    period: '/month',
    description:
      'Up to one essential physician-directed therapy including peptide therapy when medically appropriate.',
    features: [
      '1 essential therapy',
      'Physician monitoring',
      'Personalized protocol',
      'Secure messaging',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Performance Optimization',
    price: '$499',
    period: '/month',
    description:
      '1 advanced therapy or up to 2 essential physician-directed therapies for advanced results.',
    features: [
      '1 advanced or 2 essential therapies',
      'Priority scheduling',
      'Extended consultations',
      'Lab review & optimization',
    ],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Elite Longevity',
    price: '$999',
    period: '/month',
    description:
      'Multiple advanced or comprehensive combination of therapies for maximum longevity support.',
    features: [
      'Multiple advanced therapies',
      'Concierge access',
      'Monthly lab review',
      'Biomarker tracking dashboard',
    ],
    cta: 'Get Started',
    highlight: false,
  },
];

const infusions = [
  { name: 'NAD+ / Glutathione / Vitamin Infusions', price: '$299+', note: 'per infusion' },
  { name: 'Comprehensive Labs', price: '$249+', note: 'one-time' },
];

function Check() {
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
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className={`section ${styles.pricing}`}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Protocols &amp; Pricing</h2>
          <p>
            Transparent, physician-supervised care at every level. Begin with a $89 evaluation —
            no commitment to ongoing protocols.
          </p>
        </motion.div>

        <motion.div
          className={styles.entryCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.entryLeft}>
            <span className={styles.entryEyebrow}>Start Here</span>
            <h3 className={styles.entryName}>{evaluation.name}</h3>
            <p className={styles.entryDescription}>{evaluation.description}</p>
            <ul className={styles.entryFeatures}>
              {evaluation.features.map((f) => (
                <li key={f}>
                  <span className={styles.checkAccent}>
                    <Check />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.entryRight}>
            <div className={styles.entryPrice}>
              <span className={styles.entryAmount}>{evaluation.price}</span>
              <span className={styles.entryPeriod}>{evaluation.period}</span>
            </div>
            <a
              href="https://livenowlongevity.clientsecure.me"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary ${styles.entryCta}`}
            >
              {evaluation.cta}
            </a>
          </div>
        </motion.div>

        <div className={styles.tierEyebrow}>
          <span>Ongoing Protocols</span>
        </div>

        <div className={styles.tiers}>
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`${styles.card} ${tier.highlight ? styles.highlight : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {tier.highlight && <div className={styles.popularBadge}>Most Popular</div>}
              <h3 className={styles.tierName}>{tier.name}</h3>
              <div className={styles.priceRow}>
                <span className={styles.price}>{tier.price}</span>
                <span className={styles.period}>{tier.period}</span>
              </div>
              <p className={styles.description}>{tier.description}</p>
              <ul className={styles.features}>
                {tier.features.map((f) => (
                  <li key={f}>
                    <span className={styles.checkAccent}>
                      <Check />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://livenowlongevity.clientsecure.me"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary ${styles.cta}`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <div className={styles.infusionRow}>
          {infusions.map((item) => (
            <div key={item.name} className={styles.infusionCard}>
              <p className={styles.infusionName}>{item.name}</p>
              <div className={styles.infusionPrice}>
                <span>{item.price}</span>
                <span className={styles.infusionNote}>{item.note}</span>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className={styles.paymentsStrip}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={styles.paymentsLabel}>We accept</span>
          <span className={styles.paymentsList}>
            Visa &nbsp;·&nbsp; Mastercard &nbsp;·&nbsp; Amex &nbsp;·&nbsp; Discover &nbsp;·&nbsp;
            HSA &nbsp;·&nbsp; FSA &nbsp;·&nbsp; Apple Pay
          </span>
          <a href="/payments" className={styles.paymentsLink}>
            Billing &amp; payment details →
          </a>
        </motion.div>

        <motion.p
          className={styles.disclaimer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          All protocols begin with the $89 physician evaluation. Individualized plans may include
          multiple therapies. All protocol fees are strictly for physician monitoring and oversight —
          we do not sell medications or peptides.
        </motion.p>
      </div>
    </section>
  );
}
