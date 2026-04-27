'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/#pricing' },
  { label: 'How It Works', href: '/#process' },
  { label: 'Testing', href: '/services/longevity-medicine' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

function DnaLogoMark() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={styles.logoMark}
    >
      <defs>
        <linearGradient id="navStrandA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a3ed5a" />
          <stop offset="100%" stopColor="#6cd1ff" />
        </linearGradient>
        <linearGradient id="navStrandB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6cd1ff" />
          <stop offset="100%" stopColor="#a3ed5a" />
        </linearGradient>
      </defs>
      <path
        d="M10 4 C26 12, 6 20, 22 28 S 6 36, 22 40"
        stroke="url(#navStrandA)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M30 4 C14 12, 34 20, 18 28 S 34 36, 18 40"
        stroke="url(#navStrandB)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <g stroke="#a3ed5a" strokeWidth="1.2" opacity="0.7" strokeLinecap="round">
        <line x1="13" y1="10" x2="27" y2="10" />
        <line x1="17" y1="20" x2="23" y2="20" />
        <line x1="13" y1="30" x2="27" y2="30" />
      </g>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="LiveNow Longevity home">
          <DnaLogoMark />
          <span className={styles.brandText}>
            <span className={styles.brandWordmark}>
              <span className={styles.brandLive}>LIVE</span>
              <span className={styles.brandNow}>NOW</span>
              <span className={styles.brandLongevity}>LONGEVITY</span>
              <span className={styles.brandDot}>.COM</span>
            </span>
            <span className={styles.brandTagline}>Physician-Guided Longevity</span>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            href="https://livenowlongevity.clientsecure.me"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary ${styles.cta}`}
          >
            <svg
              width="16"
              height="16"
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
            Book Your Evaluation
          </a>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://livenowlongevity.clientsecure.me"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textAlign: 'center', marginTop: '1rem' }}
            >
              Book Your Evaluation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
