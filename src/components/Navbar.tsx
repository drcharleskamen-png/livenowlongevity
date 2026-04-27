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
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      aria-hidden="true"
      className={styles.logoMark}
    >
      <defs>
        <linearGradient id="navStrandA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a3ed5a" />
          <stop offset="55%" stopColor="#a3ed5a" />
          <stop offset="100%" stopColor="#6cd1ff" />
        </linearGradient>
        <linearGradient id="navStrandB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6cd1ff" />
          <stop offset="45%" stopColor="#a3ed5a" />
          <stop offset="100%" stopColor="#a3ed5a" />
        </linearGradient>
      </defs>

      {/* subtle accent ring container (no fill, just a quiet outline) */}
      <circle
        cx="21"
        cy="21"
        r="19.5"
        stroke="rgba(163,237,90,0.18)"
        strokeWidth="1"
        fill="none"
      />

      {/* Left strand — sine-style S, clean curvature, no overshoot */}
      <path
        d="M14 6 Q26 13 14 21 Q26 29 14 36"
        stroke="url(#navStrandA)"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Right strand — mirror */}
      <path
        d="M28 6 Q16 13 28 21 Q16 29 28 36"
        stroke="url(#navStrandB)"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Three base-pair bonds at strand crossings */}
      <line x1="17" y1="13" x2="25" y2="13" stroke="#a3ed5a" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
      <line x1="19" y1="21" x2="23" y2="21" stroke="#a3ed5a" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
      <line x1="17" y1="29" x2="25" y2="29" stroke="#a3ed5a" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
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
              <span className={styles.brandLive}>Live</span>
              <span className={styles.brandNow}>Now</span>
              <span className={styles.brandLongevity}>Longevity</span>
            </span>
            <span className={styles.brandTagline}>
              Physician-Guided <span className={styles.tagDot} aria-hidden="true">·</span> Las Vegas
            </span>
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
