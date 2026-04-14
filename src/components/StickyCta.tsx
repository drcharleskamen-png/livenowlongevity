'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './StickyCta.module.css';

export default function StickyCta() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 600) setVisible(true);
      else { setVisible(false); setClosed(false); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !closed && (
        <motion.div
          className={styles.bar}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <span>Ready to optimize your health? Book Now</span>
          <a
            href="https://livenowlongevity.clientsecure.me"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Book Now
          </a>
          <button
            onClick={() => setClosed(true)}
            className={styles.close}
            aria-label="Close"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
