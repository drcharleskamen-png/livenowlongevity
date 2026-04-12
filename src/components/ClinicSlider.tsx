'use client';
import { useState, useEffect } from 'react';
import styles from './ClinicSlider.module.css';

const images = [
  '/clinic-photos/IMG_5710 2.jpg',
  '/clinic-photos/IMG_5710 3.jpg',
  '/clinic-photos/IMG_5710.jpg',
  '/clinic-photos/IMG_5705 2.jpg',
  '/clinic-photos/IMG_5705 3.jpg',
  '/clinic-photos/IMG_5705.jpg',
  '/clinic-photos/IMG_5707 2.jpg',
  '/clinic-photos/IMG_5707.jpg',
  '/clinic-photos/IMG_5709 2.PNG',
  '/clinic-photos/IMG_5709 3.PNG',
  '/clinic-photos/IMG_5709.PNG',
  '/clinic-photos/IMG_5708 2.jpg',
  '/clinic-photos/IMG_5708.jpg',
  '/clinic-photos/IMG_5704 2.PNG',
  '/clinic-photos/IMG_5704 3.PNG',
  '/clinic-photos/IMG_5704.PNG',
  '/clinic-photos/IMG_5700 2.jpg',
  '/clinic-photos/IMG_5700 3.jpg',
];

export default function ClinicSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className={styles.slider}>
      <div className={styles.imageWrapper}>
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`LiveNow Longevity clinic photo ${i + 1}`}
            className={`${styles.slide} ${i === current ? styles.active : ''}`}
          />
        ))}
        <button className={`${styles.nav} ${styles.prevBtn}`} onClick={prev} aria-label="Previous photo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className={`${styles.nav} ${styles.nextBtn}`} onClick={next} aria-label="Next photo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.activeDot : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}