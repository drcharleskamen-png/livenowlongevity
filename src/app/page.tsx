'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyTrust from '@/components/WhyTrust';
import Process from '@/components/Process';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import HomepageFAQSchema from '@/components/HomepageFAQSchema';
import Pricing from '@/components/Pricing';
import ClinicSlider from '@/components/ClinicSlider';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StickyCta from '@/components/StickyCta';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HomepageFAQSchema />
      <Navbar />
      <Hero />
      <WhyTrust />
      <Process />
      <Services />
      <FAQ />
      <Pricing />
      <ClinicSlider />
      <CTASection />
      <Footer />
      <StickyCta />
    </main>
  );
}
