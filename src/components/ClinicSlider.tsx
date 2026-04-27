'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ClinicSlider.module.css';

const clinicImages = [
  '/clinic-photos/IMG_5700 4.jpg',
  '/clinic-photos/IMG_5702 3.jpg',
  '/clinic-photos/IMG_5704 4.PNG',
  '/clinic-photos/IMG_5705 4.jpg',
  '/clinic-photos/IMG_5707 3.jpg',
  '/clinic-photos/IMG_5708 3.jpg',
  '/clinic-photos/IMG_5709 4.PNG',
  '/clinic-photos/IMG_5710 4.jpg',
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
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <img
                src={clinicImages[currentIndex]}
                alt={`Clinic photo ${currentIndex + 1}`}
                className={styles.image}
              />
              <div className={styles.imageOverlay} />
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
