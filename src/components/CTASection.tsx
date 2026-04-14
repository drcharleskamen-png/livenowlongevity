'use client';
import { motion } from 'framer-motion';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2>Ready to Start Your Longevity Journey?</h2>
          <p>Schedule a consultation with Dr. Kamen today.</p>
          <motion.a
            href="https://livenowlongevity.clientsecure.me"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary ${styles.ctaBtn}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
