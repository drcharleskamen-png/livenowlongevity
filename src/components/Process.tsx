'use client';
import { motion } from 'framer-motion';
import styles from './Process.module.css';

const steps = [
  {
    num: '01',
    title: 'In-Depth Medical Consultation',
    description: 'We review your symptoms, lifestyle, and any existing lab results to understand your full health picture.',
  },
  {
    num: '02',
    title: 'Customized Treatment Plan',
    description: 'Dr. Kamen builds a physician-directed plan tailored specifically for your body and health goals.',
  },
  {
    num: '03',
    title: 'Advanced Therapies',
    description: 'From peptides and hormones to IV therapy and regenerative medicine — your plan may include a range of cutting-edge treatments.',
  },
  {
    num: '04',
    title: 'Ongoing Medical Support',
    description: 'Continuous optimization and medical oversight to ensure lasting results and your safety.',
  },
];

export default function Process() {
  return (
    <section id="process" className={`section ${styles.process}`}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Your Path to Better Health — Step by Step</h2>
        </motion.div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className={styles.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
            >
              <div className={styles.stepNumber}>{step.num}</div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
