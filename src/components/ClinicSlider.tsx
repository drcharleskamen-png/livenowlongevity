'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ClinicSlider.module.css';

/* Story arc: a patient's journey from the door to a personalized
   protocol — eight beats taking them from arrival to trust. */
const clinicImages = [
  {
    src: '/clinic-photos/IMG_5710 4.jpg',
    chapter: '01',
    title: 'Welcome to the clinic',
    caption: 'Dr. Kamen meets every new patient at the door.',
  },
  {
    src: '/clinic-photos/IMG_5704 4.PNG',
    chapter: '02',
    title: 'A private space to begin',
    caption: 'Quiet consultation suite — calm, unhurried, no waiting room chaos.',
  },
  {
    src: '/clinic-photos/IMG_5705 4.jpg',
    chapter: '03',
    title: 'Real board certification',
    caption: 'American Board of Psychiatry & Neurology — Charles Edward Kamen, MD.',
  },
  {
    src: '/clinic-photos/IMG_5707 3.jpg',
    chapter: '04',
    title: 'Where your protocol is built',
    caption: 'Modern workspace with the tools to evaluate your labs in real time.',
  },
  {
    src: '/clinic-photos/IMG_5708 3.jpg',
    chapter: '05',
    title: 'A real conversation',
    caption: 'Comprehensive evaluation — symptoms, history, goals, and bloodwork reviewed together.',
  },
  {
    src: '/clinic-photos/IMG_5709 4.PNG',
    chapter: '06',
    title: 'Time to ask every question',
    caption: 'No five-minute appointments. Dr. Kamen explains the science behind every recommendation.',
  },
  {
    src: '/clinic-photos/IMG_5702 3.jpg',
    chapter: '07',
    title: 'Evidence-based protocols',
    caption: 'Peptide reference at hand — every prescription is grounded in published mechanisms.',
  },
  {
    src: '/clinic-photos/IMG_5700 4.jpg',
    chapter: '08',
    title: 'You leave with a plan',
    caption: 'Personalized longevity protocol — supervised, monitored, adjusted over time.',
  },
];

export default function ClinicSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % clinicImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + clinicImages.length) % clinicImages.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className={`section ${styles.clinicSection}`}>
      <div className={styles.sliderWrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Clinic</h2>
          <p className={styles.subtitle}>State-of-the-art facility in Las Vegas</p>
        </div>

        <div 
          className={styles.slider}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={styles.slide}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Blurred duplicate fills the container so portraits and landscapes
                  both display fully without crop. The same image is shown again
                  on top with object-fit: contain. */}
              <img
                src={clinicImages[currentIndex].src}
                alt=""
                aria-hidden="true"
                className={styles.imageBackdrop}
              />
              <img
                src={clinicImages[currentIndex].src}
                alt={clinicImages[currentIndex].title}
                className={styles.image}
              />
              <div className={styles.imageOverlay} />

              <motion.div
                className={styles.caption}
                key={`cap-${currentIndex}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
              >
                <span className={styles.captionChapter}>
                  Ch. {clinicImages[currentIndex].chapter}
                </span>
                <h3 className={styles.captionTitle}>
                  {clinicImages[currentIndex].title}
                </h3>
                <p className={styles.captionText}>
                  {clinicImages[currentIndex].caption}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`} 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={28} />
          </button>

          <div className={styles.dots}>
            {clinicImages.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className={styles.counter}>
            {currentIndex + 1} / {clinicImages.length}
          </div>
        </div>

        <motion.div 
          className={styles.clinicInfo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <MapPin size={22} color="#a3ed5a" />
            </div>
            <div className={styles.infoText}>
              <h3 className={styles.infoTitle}>Visit Our Las Vegas Clinic</h3>
              <p className={styles.infoAddress}>9975 S Eastern Ave Ste 130, Las Vegas, NV 89183</p>
            </div>
            <a
              href="https://www.google.com/maps?q=9975+S+Eastern+Ave+Ste+130+Las+Vegas+NV+89183"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
