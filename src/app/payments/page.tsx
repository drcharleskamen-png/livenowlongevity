import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import styles from './payments.module.css';

export const metadata: Metadata = {
  title: 'Payments & Billing | LiveNow Longevity Las Vegas',
  description:
    'Cash-pay longevity medicine clinic. We accept all major credit cards, HSA, and FSA. No insurance hassle, no surprise bills. Pay your invoice through our secure ClientSecure portal.',
  alternates: { canonical: '/payments' },
  openGraph: {
    title: 'Payments & Billing | LiveNow Longevity',
    description:
      'Transparent cash-pay billing. HSA & FSA accepted. Pay your invoice through our secure portal.',
    url: 'https://livenowlongevity.com/payments',
    siteName: 'LiveNow Longevity',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const PAY_PORTAL = 'https://livenowlongevity.clientsecure.me';
const BOOKING = 'https://livenowlongevity.clientsecure.me';

const accepted = [
  { label: 'Visa' },
  { label: 'Mastercard' },
  { label: 'American Express' },
  { label: 'Discover' },
  { label: 'HSA Cards' },
  { label: 'FSA Cards' },
  { label: 'Apple Pay' },
  { label: 'ACH / Bank Transfer' },
];

const billingFaqs = [
  {
    q: 'Why is LiveNow Longevity cash-pay only?',
    a:
      'Most insurance plans do not cover longevity medicine, peptide therapy, or NAD+ IV therapy. Operating cash-pay lets us spend our time on patient care instead of insurance billing — and lets you avoid surprise denials, prior-auth delays, and limits on which therapies are appropriate for you.',
  },
  {
    q: 'Can I use my HSA or FSA?',
    a:
      'Yes. HSA and FSA cards are accepted for any service that meets your plan’s eligible-medical-expense definition. You will receive an itemized superbill for every visit so you can submit it to your HSA/FSA administrator. The same superbill can be used to file for out-of-network reimbursement if your insurance plan offers it — though we make no guarantees about coverage.',
  },
  {
    q: 'How do I pay my bill?',
    a:
      'All billing runs through our secure ClientSecure patient portal. After your visit you receive an invoice by email; click the link in the email or the “Pay Your Bill” button on this page to settle it. The portal accepts every method listed above.',
  },
  {
    q: 'Do you offer payment plans?',
    a:
      'Monthly protocol memberships are billed monthly via card on file — no large up-front payments required. For larger one-time procedures we can split the cost across two or three months on request.',
  },
  {
    q: 'What is your refund and cancellation policy?',
    a:
      'New-patient evaluation fees are refundable up to 24 hours before your scheduled visit. Monthly protocol memberships can be paused or cancelled at any time before the next billing cycle. Compounded medications dispensed by the pharmacy are non-refundable once shipped.',
  },
  {
    q: 'Will I receive a receipt?',
    a:
      'Yes. Every payment generates an itemized receipt by email. Itemized superbills suitable for HSA/FSA reimbursement and out-of-network insurance claims are also available on request through the patient portal.',
  },
];

export default function PaymentsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://livenowlongevity.com' },
          { name: 'Payments & Billing', url: 'https://livenowlongevity.com/payments' },
        ]}
      />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Payments &amp; Billing</span>
          <h1>Transparent cash-pay billing.</h1>
          <p className={styles.subhead}>
            No insurance hassle. No surprise bills. Pay your invoice in seconds through our
            secure patient portal — HSA and FSA accepted.
          </p>
          <div className={styles.ctaRow}>
            <a
              href={PAY_PORTAL}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary ${styles.payCta}`}
            >
              <CardIcon /> Pay Your Bill
            </a>
            <a href="/#pricing" className={`btn-outline ${styles.viewPricing}`}>
              View Protocol Pricing
            </a>
          </div>
        </div>
      </section>

      <section className={`section ${styles.body}`}>
        <div className="container">
          {/* Accepted payments */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Accepted Payment Methods</h2>
            <p className={styles.blockLede}>
              The patient portal accepts every common payment method. There is no fee for
              any of them.
            </p>
            <ul className={styles.methodGrid}>
              {accepted.map((m) => (
                <li key={m.label} className={styles.method}>
                  <CheckIcon />
                  <span>{m.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cash-pay model */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Why We&rsquo;re Cash-Pay</h2>
            <div className={styles.twoCol}>
              <div>
                <p>
                  Most insurance plans do not cover longevity medicine, peptide therapy,
                  NAD+ IV therapy, or compounded medications. Even when they do, prior-auth
                  delays, denials, and limited drug formularies push patients toward whatever
                  the insurer wants to pay for — not what is right for the patient.
                </p>
                <p>
                  Operating cash-pay means Dr. Kamen designs your protocol based on{' '}
                  <strong>your labs and your goals</strong> — not what an insurer happens to
                  cover this quarter. You see your costs up front, and there are no surprise
                  bills.
                </p>
              </div>
              <div>
                <p>
                  We are happy to provide an{' '}
                  <strong>itemized superbill</strong> after every visit. You can submit it
                  to your insurance for out-of-network reimbursement (no guarantees of
                  coverage) or to your HSA / FSA administrator for tax-advantaged payment.
                </p>
                <p>
                  We do not file claims with insurance companies. We do not balance-bill.
                  What you see is what you pay.
                </p>
              </div>
            </div>
          </div>

          {/* HSA / FSA */}
          <div className={`${styles.block} ${styles.hsaCard}`}>
            <div className={styles.hsaHeader}>
              <span className={styles.hsaTag}>Tax-advantaged</span>
              <h2 className={styles.blockTitle}>HSA &amp; FSA Accepted</h2>
            </div>
            <p>
              If you have a Health Savings Account (HSA) or Flexible Spending Account (FSA),
              you can pay directly with your card at the patient portal. Most longevity
              services — physician evaluations, lab work, IV therapy, peptide protocols —
              qualify as eligible medical expenses under IRS Publication 502 when prescribed
              by a licensed physician.
            </p>
            <ul className={styles.hsaList}>
              <li>
                <CheckIcon /> Pay with HSA / FSA card directly at checkout — no separate
                claim form
              </li>
              <li>
                <CheckIcon /> Itemized superbill emailed automatically after every visit
              </li>
              <li>
                <CheckIcon /> Same receipt accepted by virtually every HSA / FSA administrator
              </li>
            </ul>
            <p className={styles.hsaNote}>
              Eligibility is ultimately determined by your plan administrator. We strongly
              recommend confirming with them before using HSA / FSA funds for any specific
              service.
            </p>
          </div>

          {/* Membership billing */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Monthly Protocol Billing</h2>
            <p>
              Monthly protocols ($299, $499, $999 tiers) are billed automatically each month
              to the card on file. You can pause, downgrade, or cancel at any time before
              the next billing date through the patient portal — no contracts, no fees.
            </p>
            <p>
              Compounded medications, lab work, and à-la-carte IV infusions are billed
              separately as they are ordered. Pharmacy charges come directly from the licensed
              503A or 503B pharmacy that fills your prescription.
            </p>
          </div>

          {/* Billing FAQ */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Billing FAQ</h2>
            <div className={styles.faqList}>
              {billingFaqs.map((f) => (
                <details key={f.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{f.q}</summary>
                  <p className={styles.faqAnswer}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className={styles.finalCta}>
            <div>
              <h2>Ready to settle a bill?</h2>
              <p>
                Click below to open the secure patient portal — every payment generates an
                itemized receipt automatically.
              </p>
            </div>
            <div className={styles.finalCtaRow}>
              <a
                href={PAY_PORTAL}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary ${styles.payCta}`}
              >
                <CardIcon /> Pay Your Bill
              </a>
              <Link href="/#pricing" className={`btn-outline ${styles.viewPricing}`}>
                See What Protocols Cost
              </Link>
            </div>
          </div>

          <p className={styles.fineprint}>
            Questions about a charge or itemized superbill? Email{' '}
            <a href="mailto:info@livenowlongevity.com">info@livenowlongevity.com</a> or call{' '}
            <a href="tel:702-808-2650">702-808-2650</a>.
          </p>
        </div>
      </section>

      <Footer />
    </>
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
      aria-hidden="true"
      className={styles.check}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function CardIcon() {
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
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}
