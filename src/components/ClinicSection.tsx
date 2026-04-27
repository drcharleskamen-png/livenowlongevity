import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ClinicSection.module.css';

export default function ClinicSection() {
  return (
    <section className={`section ${styles.clinic}`}>
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.iconWrapper}>
            <MapPin size={24} color="#a3ed5a" />
          </div>
          <div>
            <h3 className={styles.title}>Visit Our Las Vegas Clinic</h3>
            <p className={styles.address}>9975 S Eastern Ave Ste 130, Las Vegas, NV 89183</p>
          </div>
          <a
            href="https://www.google.com/maps?q=9975+S+Eastern+Ave+Ste+130+Las+Vegas+NV+89183"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
