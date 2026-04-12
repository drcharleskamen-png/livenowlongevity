'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import styles from './ServicePage.module.css';

export default function ServicePageTemplate({
  title,
  heroSubtitle,
  intro,
  benefits,
  faqs,
  relatedService,
}: {
  title: string;
  heroSubtitle: string;
  intro: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
  relatedService: { title: string; href: string };
}) {
  return (
    <>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {heroSubtitle}
          </motion.p>
        </div>
      </section>

      <section className={`section ${styles.intro}`}>
        <div className="text-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className={styles.introText}>{intro}</p>
          </motion.div>
        </div>
      </section>

      <section className={`section ${styles.benefits}`}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>What to Expect</h2>
          </motion.div>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className={styles.benefitCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={styles.checkIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#48c78e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p>{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className={`section ${styles.faqSection}`}>
          <div className="text-container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Frequently Asked Questions</h2>
            </motion.div>
            <div className={styles.faqList}>
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className={styles.faqItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.related}>
        <div className="container">
          <p className={styles.relatedLabel}>Also available</p>
          <a href={relatedService.href} className={styles.relatedLink}>
            {relatedService.title}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
