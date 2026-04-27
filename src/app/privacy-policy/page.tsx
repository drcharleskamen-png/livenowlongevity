import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './legal.module.css';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <section className={styles.hero}>
        <h1>Privacy Policy</h1>
      </section>
      <section className={`section ${styles.content}`}>
        <div className="text-container">
          <p>Your privacy is important to us. This policy explains how LiveNow Longevity collects, uses, and protects information when you use our website and services.</p>
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly, including when you book a consultation, fill out a form, or communicate with us via email or our website. This may include your name, email address, phone number, and health-related information you choose to share.</p>
          <h2>How We Use Your Information</h2>
          <p>We use your information to provide medical services, schedule appointments, communicate with you about our protocols, and improve our website and services. We do not sell your personal information to third parties.</p>
          <h2>HIPAA Compliance</h2>
          <p>LiveNow Longevity is committed to HIPAA compliance. All patient health information is protected under the Health Insurance Portability and Accountability Act.</p>
          <h2>Contact</h2>
          <p>For privacy-related questions, contact us at info@livenowlongevity.com or call 702-808-2650.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
