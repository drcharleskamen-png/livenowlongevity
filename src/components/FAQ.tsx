'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';

export const faqs = [
 {
 q: 'What is peptide therapy?',
 a: 'Peptide therapy uses specific peptides — short chains of amino acids — to signal and stimulate targeted biological responses in the body. Peptides can support healing, performance, weight management, and overall wellness when administered under physician supervision.',
 },
 {
 q: 'Is peptide therapy legal in Nevada?',
 a: 'Yes. All peptides we use are prescribed by Dr. Kamen and sourced from licensed American compounding pharmacies (503A/503B). Peptides are legal when prescribed by a licensed physician for a legitimate medical purpose.',
 },
 {
 q: 'How much does peptide therapy cost?',
 a: 'Our peptide therapy programs start at $299/month as part of our Essential Optimization tier. Pricing varies based on your individualized treatment plan. We offer multiple tiers and a la carte IV therapy options. All costs are strictly for physician monitoring — we do not sell medications or peptides.',
 },
 {
 q: 'What peptides do you offer?',
 a: 'We offer a range of physician-guided peptide programs including tissue repair peptide protocols, dual-action weight medication (weight management medication), weight management medication, melanocortin peptide protocols, and more. The right peptide protocol for you depends on your lab results and health goals — determined during your consultation.',
 },
 {
 q: 'Do I need to visit in person?',
 a: 'Your initial consultation can be done via secure telemedicine for Nevada residents. Some treatments require an in-person visit. We are located in Las Vegas at 9975 S Eastern Ave Ste 130.',
 },
 {
 q: 'Who is Dr. Charles Kamen?',
 a: 'Dr. Charles Kamen is a board-certified neurologist by the American Board of Psychiatry and Neurology with training from Albert Einstein College of Medicine, Yale internship, and Loma Linda residency/fellowship. He specializes in longevity medicine, peptide therapy, and regenerative treatments.',
 },
];

export default function FAQ() {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 return (
 <section id="faq" className={`section ${styles.faq}`}>
 <div className="text-container">
 <motion.div
 className="section-header"
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
 <h2>Frequently Asked Questions</h2>
 </motion.div>

 <div className={styles.list}>
 {faqs.map((item, i) => (
 <motion.div
 key={item.q}
 className={styles.item}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.06 }}
 >
 <button
 className={styles.question}
 onClick={() => setOpenIndex(openIndex === i ? null : i)}
 aria-expanded={openIndex === i}
 >
 <span>{item.q}</span>
 <motion.span
 className={styles.icon}
 animate={{ rotate: openIndex === i ? 45 : 0 }}
 transition={{ duration: 0.2 }}
 >
 +
 </motion.span>
 </button>
 <AnimatePresence>
 {openIndex === i && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: 'auto', opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.3, ease: "easeOut" }}
 className={styles.answer}
 >
 <p>{item.a}</p>
 </motion.div>
 )}
 </AnimatePresence>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
