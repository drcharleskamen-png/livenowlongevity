'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../app/blog/blog.module.css';

const posts = [
  {
    title: `NAD+ and Aging: Science and Clinical Evidence | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on NAD+ therapy and cellular energy.`,
    date: 'March 28, 2026',
    category: 'NAD+ Therapy',
    href: '/blog/nad-and-aging',
  },
  {
    title: `Telemedicine Peptide Therapy in Nevada: What the Law Allows | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on telemedicine and peptide therapy.`,
    date: 'March 15, 2026',
    category: 'Telehealth',
    href: '/blog/telemedicine-peptide-therapy',
  },
  {
    title: `Longevity Lab Guide: Key Biomarkers Explained | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on diagnostics and lab testing.`,
    date: 'February 28, 2026',
    category: 'Diagnostics',
    href: '/blog/longevity-labs-guide',
  },
  {
    title: `Peptide Therapy Legality in Nevada: A Physician`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on peptide therapy and longevity medicine.`,
    date: 'February 10, 2026',
    category: 'Education',
    href: '/blog/peptide-legality-nevada',
  },
  {
    title: `Nutrition While on weight management medication Therapy: Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on weight management and metabolic health.`,
    date: 'January 25, 2026',
    category: 'Weight Management',
    href: '/blog/nutrition-glp1-therapy',
  },
  {
    title: `Muscle Preservation During Weight Loss: Science and Strategy | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on weight management and metabolic health.`,
    date: 'January 12, 2026',
    category: 'Weight Management',
    href: '/blog/muscle-preservation-weight-loss',
  },
  {
    title: `Metabolic Adaptation During Weight Loss: Why Results Slow Down | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on weight management and metabolic health.`,
    date: 'March 20, 2026',
    category: 'Weight Management',
    href: '/blog/metabolic-adaptation-weight-loss',
  },
  {
    title: `Sleep and Weight Loss: The Metabolic Connection | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on weight management and metabolic health.`,
    date: 'March 10, 2026',
    category: 'Weight Management',
    href: '/blog/sleep-weight-loss-metabolism',
  },
  {
    title: `Leptin Resistance and Weight Loss: What It Means | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on weight management and metabolic health.`,
    date: 'March 05, 2026',
    category: 'Weight Management',
    href: '/blog/leptin-resistance-weight-loss',
  },
  {
    title: `Maintaining Weight After weight management medication Therapy: Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on weight management and metabolic health.`,
    date: 'February 25, 2026',
    category: 'Weight Management',
    href: '/blog/glp1-maintenance-after-weight-loss',
  },
  {
    title: `Cortisol and Weight Loss Resistance: The Stress Connection | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on weight management and metabolic health.`,
    date: 'February 20, 2026',
    category: 'Weight Management',
    href: '/blog/cortisol-weight-loss-resistance',
  },
  {
    title: `Thyroid Function and Metabolic Health | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on weight management and metabolic health.`,
    date: 'February 15, 2026',
    category: 'Weight Management',
    href: '/blog/thyroid-metabolism-weight',
  },
  {
    title: `Key Biomarkers Every Adult Should Track | Dr. Charles Kamen, MD | LiveNow Longevity`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on longevity medicine and healthy aging.`,
    date: 'February 08, 2026',
    category: 'Longevity Medicine',
    href: '/blog/biomarkers-adults-guide',
  },
  {
    title: `hs-CRP and Chronic Inflammation: The Silent Driver of Aging | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on longevity medicine and healthy aging.`,
    date: 'February 01, 2026',
    category: 'Longevity Medicine',
    href: '/blog/hs-crp-chronic-inflammation',
  },
  {
    title: `HbA1c and Metabolic Health: What Your Blood Sugar Marker Means | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on longevity medicine and healthy aging.`,
    date: 'January 28, 2026',
    category: 'Longevity Medicine',
    href: '/blog/hba1c-metabolic-health',
  },
  {
    title: `Hormone Panels for Longevity: What to Test | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on longevity medicine and healthy aging.`,
    date: 'January 22, 2026',
    category: 'Longevity Medicine',
    href: '/blog/hormone-panels-longevity',
  },
  {
    title: `Telomere Length and Biological Age | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on longevity medicine and healthy aging.`,
    date: 'April 01, 2026',
    category: 'Longevity Medicine',
    href: '/blog/telomere-length-aging',
  },
  {
    title: `Autophagy: Your Body`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on longevity medicine and healthy aging.`,
    date: 'March 25, 2026',
    category: 'Longevity Medicine',
    href: '/blog/autophagy-cellular-cleanup',
  },
  {
    title: `Mitochondrial Dysfunction and Aging | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on longevity medicine and healthy aging.`,
    date: 'March 18, 2026',
    category: 'Longevity Medicine',
    href: '/blog/mitochondrial-dysfunction-aging',
  },
  {
    title: `Insulin Sensitivity and Longevity Medicine | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on longevity medicine and healthy aging.`,
    date: 'March 12, 2026',
    category: 'Longevity Medicine',
    href: '/blog/insulin-sensitivity-longevity',
  },
  {
    title: `Epigenetic Age Testing: Measuring Biological Age | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on longevity medicine and healthy aging.`,
    date: 'March 08, 2026',
    category: 'Longevity Medicine',
    href: '/blog/epigenetic-age-testing',
  },
  {
    title: `Exercise and Longevity: What the Research Shows | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on longevity medicine and healthy aging.`,
    date: 'March 02, 2026',
    category: 'Longevity Medicine',
    href: '/blog/exercise-longevity-research',
  },
  {
    title: `Subcutaneous Peptide Injection Guide: How to Inject Peptides Safely | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on peptide therapy and wellness optimization.`,
    date: 'February 22, 2026',
    category: 'Peptide Therapy',
    href: '/blog/peptide-injection-guide',
  },
  {
    title: `Stacking Peptides: Combining Protocols Safely | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on peptide therapy and wellness optimization.`,
    date: 'February 16, 2026',
    category: 'Peptide Therapy',
    href: '/blog/stacking-peptides-safely',
  },
  {
    title: `Glutathione IV Therapy: The Master Antioxidant Explained | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on IV nutrition and infusion therapy.`,
    date: 'February 10, 2026',
    category: 'IV Nutrition',
    href: '/blog/glutathione-iv-therapy',
  },
  {
    title: `Vitamin D Deficiency in Adults: The Longevity Connection | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on IV nutrition and infusion therapy.`,
    date: 'February 05, 2026',
    category: 'IV Nutrition',
    href: '/blog/vitamin-d-deficiency-adults',
  },
  {
    title: `B-Complex IV Therapy for Energy and Metabolism | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on IV nutrition and infusion therapy.`,
    date: 'April 02, 2026',
    category: 'IV Nutrition',
    href: '/blog/b-complex-iv-therapy',
  },
  {
    title: `IV Therapy vs Oral Supplements: What the Science Says | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on IV nutrition and infusion therapy.`,
    date: 'April 03, 2026',
    category: 'IV Nutrition',
    href: '/blog/iv-therapy-vs-oral-supplements',
  },
  {
    title: `Magnesium IV Therapy: Cellular Mineral for Energy and Calm | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on IV nutrition and infusion therapy.`,
    date: 'April 04, 2026',
    category: 'IV Nutrition',
    href: '/blog/magnesium-iv-therapy',
  },
  {
    title: `Zinc and Immune Function: The Case for IV Zinc | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on IV nutrition and infusion therapy.`,
    date: 'April 05, 2026',
    category: 'IV Nutrition',
    href: '/blog/zinc-immunity-iv',
  },
  {
    title: `Custom IV Protocols: How Dr. Charles Kamen, MD Designs Your Infusion`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on IV nutrition and infusion therapy.`,
    date: 'April 06, 2026',
    category: 'IV Nutrition',
    href: '/blog/custom-iv-protocols',
  },
  {
    title: `IV Therapy for Athletic Recovery: What the Evidence Shows | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on IV nutrition and infusion therapy.`,
    date: 'April 07, 2026',
    category: 'IV Nutrition',
    href: '/blog/iv-therapy-recovery',
  },
  {
    title: `PRP Therapy for Joint Health: Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on regenerative medicine and tissue health.`,
    date: 'April 08, 2026',
    category: 'Regenerative Medicine',
    href: '/blog/prp-therapy-joints',
  },
  {
    title: `Peptide Therapy for Joint Health and Repair | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on regenerative medicine and tissue health.`,
    date: 'April 09, 2026',
    category: 'Regenerative Medicine',
    href: '/blog/peptide-therapy-joint-health',
  },
  {
    title: `Growth Factor Therapy in Regenerative Medicine | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on regenerative medicine and tissue health.`,
    date: 'April 10, 2026',
    category: 'Regenerative Medicine',
    href: '/blog/growth-factor-therapy',
  },
  {
    title: `Peptides for Tissue Repair: Mechanisms and Evidence | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on regenerative medicine and tissue health.`,
    date: 'April 11, 2026',
    category: 'Regenerative Medicine',
    href: '/blog/tissue-repair-peptides',
  },
  {
    title: `Peptides and Nerve Regeneration: What the Science Shows | Dr. Charles Kamen, MD`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on regenerative medicine and tissue health.`,
    date: 'April 01, 2026',
    category: 'Regenerative Medicine',
    href: '/blog/nerve-regeneration-peptides',
  },
  {
    title: `Gut Health and Peptide Therapy: tissue repair peptide protocols and GI Protection | Dr. Charles Kame`,
    excerpt: `Evidence-based article by Dr. Charles Kamen, MD on regenerative medicine and tissue health.`,
    date: 'April 02, 2026',
    category: 'Regenerative Medicine',
    href: '/blog/gut-health-peptide-therapy',
  },
];

export default function BlogContent() {
  return (
    <>
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroContent}>
      <motion.span
        className={styles.eyebrow}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        LiveNow Blog
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Evidence-based articles on peptide therapy, longevity medicine, and health optimization.
      </motion.p>
      </div>
    </section>

    <section className={`section ${styles.posts}`}>
      <div className="container">
      <div className={styles.grid}>
      {posts.map((post, i) => (
        <motion.div
          key={post.href}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
        >
          <Link href={post.href} className={styles.postCard}>
            <div className={styles.postMeta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.date}>{post.date}</span>
            </div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <span className={styles.readMore}>
              Read More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </motion.div>
      ))}
      </div>
      </div>
    </section>
    </>
  );
}
