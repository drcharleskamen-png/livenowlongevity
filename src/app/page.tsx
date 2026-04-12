'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyTrust from '@/components/WhyTrust';
import Process from '@/components/Process';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import ClinicSection from '@/components/ClinicSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StickyCta from '@/components/StickyCta';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <section className={styles.grokSection}>
        <img
          src="/grok-image.png"
          alt="Dr. Charles Kamen, MD - Board-Certified Neurologist at LiveNow Longevity"
          className={styles.grokImage}
        />
      </section>
      <WhyTrust />
      <Process />
      <Services />
      <FAQ />
      <Pricing />
      <ClinicSection />
      <CTASection />
      <Footer />
      <StickyCta />
    </main>
  );
}
