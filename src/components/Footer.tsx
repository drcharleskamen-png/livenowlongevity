import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Services', href: '/#services' },
  { label: 'Book Appointment', href: 'https://livewell21.clientsecure.me' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.brandAccent}>Live</span>Now Longevity
            <p className={styles.tagline}>Physician-supervised longevity therapy in Las Vegas.</p>
          </div>

          <nav className={styles.nav}>
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.contact}>
            <a href="tel:702-808-2650" className={styles.contactItem}>702-808-2650</a>
            <a href="mailto:info@livenowlongevity.com" className={styles.contactItem}>info@livenowlongevity.com</a>
            <p className={styles.address}>9975 S Eastern Ave Ste 130<br />Las Vegas, NV 89183</p>
          </div>

          <a
            href="https://www.instagram.com/livenow_longevity"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>

        <div className={styles.legal}>
          <div className={styles.legalLinks}>
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.legalLink}>
                {link.label}
              </Link>
            ))}
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} LiveNow Longevity. All rights reserved.
          </p>
          <p className={styles.disclaimer}>
            The information on this website is for educational purposes only and does not constitute medical advice. Individual results may vary. These statements have not been evaluated by the FDA.
          </p>
        </div>
      </div>
    </footer>
  );
}
