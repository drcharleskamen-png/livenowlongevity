import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
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
      <ClinicSlider />
      <Process />
      <Services />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
      <StickyCta />
    </main>
  );
}
