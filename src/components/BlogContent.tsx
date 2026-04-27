'use client';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from '../app/blog/blog.module.css';

// Cleaned post data:
//  - Stripped redundant `| Dr. Charles Kamen, MD` suffix from titles
//  - Repaired mid-word truncations
//  - Replaced repetitive auto-generated excerpts with topic-specific copy
//  - Sorted chronologically (descending) at render time
type Post = {
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd for reliable sort
  category: string;
  href: string;
  readMin: number;
  featured?: boolean;
};

const POSTS: Post[] = [
  {
    title: 'Telomere Length and Biological Age',
    excerpt: 'How telomere shortening drives cellular aging — and what current evidence says about slowing it.',
    date: '2026-04-01', category: 'Longevity Medicine', href: '/blog/telomere-length-aging', readMin: 7,
  },
  {
    title: 'B-Complex IV Therapy for Energy and Metabolism',
    excerpt: 'Why B-vitamin status matters for mitochondrial output, and when IV delivery makes sense over oral.',
    date: '2026-04-02', category: 'IV Nutrition', href: '/blog/b-complex-iv-therapy', readMin: 6,
  },
  {
    title: 'IV Therapy vs Oral Supplements: What the Science Says',
    excerpt: 'Bioavailability, indication, and where IV genuinely outperforms — separating evidence from marketing.',
    date: '2026-04-03', category: 'IV Nutrition', href: '/blog/iv-therapy-vs-oral-supplements', readMin: 8,
  },
  {
    title: 'Magnesium IV Therapy: Cellular Mineral for Energy and Calm',
    excerpt: 'Magnesium’s role in 300+ enzymatic reactions, who is depleted, and the IV use case.',
    date: '2026-04-04', category: 'IV Nutrition', href: '/blog/magnesium-iv-therapy', readMin: 6,
  },
  {
    title: 'Zinc and Immune Function: The Case for IV Zinc',
    excerpt: 'When oral zinc falls short, what serum and intracellular markers reveal, and IV protocol considerations.',
    date: '2026-04-05', category: 'IV Nutrition', href: '/blog/zinc-immunity-iv', readMin: 6,
  },
  {
    title: 'Custom IV Protocols: How Dr. Kamen Designs Your Infusion',
    excerpt: 'A walk-through of how labs, symptoms, and goals translate into a personalized IV formulation.',
    date: '2026-04-06', category: 'IV Nutrition', href: '/blog/custom-iv-protocols', readMin: 7,
  },
  {
    title: 'IV Therapy for Athletic Recovery: What the Evidence Shows',
    excerpt: 'Hydration, glutathione, NAD+, amino acids — what actually moves the needle on recovery markers.',
    date: '2026-04-07', category: 'IV Nutrition', href: '/blog/iv-therapy-recovery', readMin: 8,
  },
  {
    title: 'PRP Therapy for Joint Health',
    excerpt: 'Mechanism of action, ideal candidates, and where platelet-rich plasma fits into a regenerative protocol.',
    date: '2026-04-08', category: 'Regenerative Medicine', href: '/blog/prp-therapy-joints', readMin: 8,
  },
  {
    title: 'Peptide Therapy for Joint Health and Repair',
    excerpt: 'BPC-157, TB-500, and the peptides with the strongest evidence for connective tissue support.',
    date: '2026-04-09', category: 'Regenerative Medicine', href: '/blog/peptide-therapy-joint-health', readMin: 9,
  },
  {
    title: 'Growth Factor Therapy in Regenerative Medicine',
    excerpt: 'How growth factors signal repair, current clinical applications, and what the data supports today.',
    date: '2026-04-10', category: 'Regenerative Medicine', href: '/blog/growth-factor-therapy', readMin: 8,
  },
  {
    title: 'Peptides for Tissue Repair: Mechanisms and Evidence',
    excerpt: 'Receptor pathways, dosing approaches, and the published trials supporting tissue-repair peptides.',
    date: '2026-04-11', category: 'Regenerative Medicine', href: '/blog/tissue-repair-peptides', readMin: 9,
    featured: true,
  },
  {
    title: 'Peptides and Nerve Regeneration: What the Science Shows',
    excerpt: 'Pre-clinical and emerging human evidence on peptides supporting peripheral nerve recovery.',
    date: '2026-04-01', category: 'Regenerative Medicine', href: '/blog/nerve-regeneration-peptides', readMin: 9,
  },
  {
    title: 'Gut Health and Peptide Therapy: BPC-157 and GI Protection',
    excerpt: 'How a stable gastric pentadecapeptide may support GI lining, with current evidence and limitations.',
    date: '2026-04-02', category: 'Regenerative Medicine', href: '/blog/gut-health-peptide-therapy', readMin: 8,
  },
  {
    title: 'NAD+ and Aging: Science and Clinical Evidence',
    excerpt: 'Cellular energy, sirtuin signaling, and the trial data on NAD+ precursors and IV NAD+.',
    date: '2026-03-28', category: 'NAD+ Therapy', href: '/blog/nad-and-aging', readMin: 9,
  },
  {
    title: 'Autophagy: Your Body’s Cellular Cleanup System',
    excerpt: 'How autophagy clears damaged proteins, and the lifestyle and pharmacologic levers that support it.',
    date: '2026-03-25', category: 'Longevity Medicine', href: '/blog/autophagy-cellular-cleanup', readMin: 8,
  },
  {
    title: 'Metabolic Adaptation During Weight Loss: Why Results Slow Down',
    excerpt: 'Adaptive thermogenesis, hormonal changes, and clinical strategies to break through plateaus.',
    date: '2026-03-20', category: 'Weight Management', href: '/blog/metabolic-adaptation-weight-loss', readMin: 8,
  },
  {
    title: 'Mitochondrial Dysfunction and Aging',
    excerpt: 'Mitochondrial decline as a hallmark of aging, with current strategies for supporting bioenergetics.',
    date: '2026-03-18', category: 'Longevity Medicine', href: '/blog/mitochondrial-dysfunction-aging', readMin: 9,
  },
  {
    title: 'Telemedicine Peptide Therapy in Nevada: What the Law Allows',
    excerpt: 'How Nevada regulations shape telehealth peptide care, and what to expect from a compliant visit.',
    date: '2026-03-15', category: 'Telehealth', href: '/blog/telemedicine-peptide-therapy', readMin: 6,
  },
  {
    title: 'Insulin Sensitivity and Longevity Medicine',
    excerpt: 'Insulin signaling as a pace-of-aging lever — markers, targets, and lifestyle plus pharmacologic options.',
    date: '2026-03-12', category: 'Longevity Medicine', href: '/blog/insulin-sensitivity-longevity', readMin: 8,
  },
  {
    title: 'Sleep and Weight Loss: The Metabolic Connection',
    excerpt: 'How sleep architecture affects appetite hormones, energy balance, and weight-loss success.',
    date: '2026-03-10', category: 'Weight Management', href: '/blog/sleep-weight-loss-metabolism', readMin: 7,
  },
  {
    title: 'Epigenetic Age Testing: Measuring Biological Age',
    excerpt: 'DNA methylation clocks, what the labs really tell you, and where the science still has gaps.',
    date: '2026-03-08', category: 'Longevity Medicine', href: '/blog/epigenetic-age-testing', readMin: 8,
  },
  {
    title: 'Leptin Resistance and Weight Loss: What It Means',
    excerpt: 'How leptin signaling breaks down, why hunger persists despite higher body fat, and the clinical work-up.',
    date: '2026-03-05', category: 'Weight Management', href: '/blog/leptin-resistance-weight-loss', readMin: 7,
  },
  {
    title: 'Exercise and Longevity: What the Research Shows',
    excerpt: 'Strength, zone 2, VO2 max — the dose-response data on exercise as the most powerful longevity input.',
    date: '2026-03-02', category: 'Longevity Medicine', href: '/blog/exercise-longevity-research', readMin: 9,
  },
  {
    title: 'Longevity Lab Guide: Key Biomarkers Explained',
    excerpt: 'A practical reference for the biomarkers that actually inform a longevity protocol — and how to read them.',
    date: '2026-02-28', category: 'Diagnostics', href: '/blog/longevity-labs-guide', readMin: 11,
  },
  {
    title: 'Maintaining Weight After GLP-1 Therapy',
    excerpt: 'Off-ramp strategies, body composition preservation, and the data on relapse prevention.',
    date: '2026-02-25', category: 'Weight Management', href: '/blog/glp1-maintenance-after-weight-loss', readMin: 7,
  },
  {
    title: 'Subcutaneous Peptide Injection Guide',
    excerpt: 'Technique, site rotation, sterility, and the practical details Dr. Kamen reviews with every patient.',
    date: '2026-02-22', category: 'Peptide Therapy', href: '/blog/peptide-injection-guide', readMin: 6,
  },
  {
    title: 'Cortisol and Weight Loss Resistance: The Stress Connection',
    excerpt: 'How chronic cortisol elevation drives belly fat, insulin resistance, and weight-loss plateaus.',
    date: '2026-02-20', category: 'Weight Management', href: '/blog/cortisol-weight-loss-resistance', readMin: 7,
  },
  {
    title: 'Stacking Peptides: Combining Protocols Safely',
    excerpt: 'When peptide stacks make clinical sense, common combinations, and how to monitor for interactions.',
    date: '2026-02-16', category: 'Peptide Therapy', href: '/blog/stacking-peptides-safely', readMin: 8,
  },
  {
    title: 'Thyroid Function and Metabolic Health',
    excerpt: 'Why TSH alone can miss thyroid issues, and the full panel that better reflects metabolic status.',
    date: '2026-02-15', category: 'Weight Management', href: '/blog/thyroid-metabolism-weight', readMin: 7,
  },
  {
    title: 'Glutathione IV Therapy: The Master Antioxidant Explained',
    excerpt: 'Glutathione’s role in detoxification, depletion in disease, and what IV delivery accomplishes.',
    date: '2026-02-10', category: 'IV Nutrition', href: '/blog/glutathione-iv-therapy', readMin: 7,
  },
  {
    title: 'Peptide Therapy Legality in Nevada: A Physician’s View',
    excerpt: 'How federal compounding rules and state law intersect for peptide prescribing in Nevada.',
    date: '2026-02-10', category: 'Education', href: '/blog/peptide-legality-nevada', readMin: 8,
  },
  {
    title: 'Key Biomarkers Every Adult Should Track',
    excerpt: 'A short list of the most informative annual labs to monitor longevity-relevant health.',
    date: '2026-02-08', category: 'Longevity Medicine', href: '/blog/biomarkers-adults-guide', readMin: 8,
  },
  {
    title: 'Vitamin D Deficiency in Adults: The Longevity Connection',
    excerpt: 'Optimal serum 25(OH)D ranges, sun vs. supplementation, and IV vitamin D in clinical practice.',
    date: '2026-02-05', category: 'IV Nutrition', href: '/blog/vitamin-d-deficiency-adults', readMin: 7,
  },
  {
    title: 'hs-CRP and Chronic Inflammation: The Silent Driver of Aging',
    excerpt: 'What high-sensitivity CRP reveals, target ranges for longevity, and lifestyle plus targeted interventions.',
    date: '2026-02-01', category: 'Longevity Medicine', href: '/blog/hs-crp-chronic-inflammation', readMin: 8,
  },
  {
    title: 'HbA1c and Metabolic Health: What Your Blood Sugar Marker Means',
    excerpt: 'HbA1c target ranges for longevity (not just diabetes), and what to do when yours is creeping up.',
    date: '2026-01-28', category: 'Longevity Medicine', href: '/blog/hba1c-metabolic-health', readMin: 7,
  },
  {
    title: 'Nutrition While on GLP-1 Therapy',
    excerpt: 'Protein targets, micronutrient strategy, and the eating patterns that complement GLP-1 medications.',
    date: '2026-01-25', category: 'Weight Management', href: '/blog/nutrition-glp1-therapy', readMin: 7,
  },
  {
    title: 'Hormone Panels for Longevity: What to Test',
    excerpt: 'The full hormone work-up for longevity-focused care — sex hormones, adrenal, thyroid, and growth axis.',
    date: '2026-01-22', category: 'Longevity Medicine', href: '/blog/hormone-panels-longevity', readMin: 9,
  },
  {
    title: 'Muscle Preservation During Weight Loss: Science and Strategy',
    excerpt: 'Why losing weight without losing muscle is non-negotiable for longevity — protein, training, and labs.',
    date: '2026-01-12', category: 'Weight Management', href: '/blog/muscle-preservation-weight-loss', readMin: 8,
  },
];

const formatDate = (iso: string): string => {
  const d = new Date(iso + 'T12:00:00Z');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export default function BlogContent() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Sort once, derive category list once
  const sortedPosts = useMemo(
    () => [...POSTS].sort((a, b) => b.date.localeCompare(a.date)),
    []
  );

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of sortedPosts) counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
    return [
      { label: 'All', count: sortedPosts.length },
      ...Array.from(counts.entries())
        .map(([label, count]) => ({ label, count }))
        .sort((a, b) => b.count - a.count),
    ];
  }, [sortedPosts]);

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sortedPosts.filter((p) => {
      const inCategory = activeCategory === 'All' || p.category === activeCategory;
      if (!inCategory) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [sortedPosts, query, activeCategory]);

  // Featured post = most recent flagged post (or fallback to most recent overall)
  const featured = useMemo(() => {
    if (activeCategory !== 'All' || query) return null;
    return sortedPosts.find((p) => p.featured) ?? sortedPosts[0];
  }, [sortedPosts, activeCategory, query]);

  const gridPosts = useMemo(
    () => (featured ? filteredPosts.filter((p) => p !== featured) : filteredPosts),
    [filteredPosts, featured]
  );

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroContent}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.eyebrowDot} aria-hidden="true" /> Education
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            The LiveNow <span className={styles.heroAccent}>Longevity</span> Library
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Evidence-based articles on peptide therapy, longevity medicine, NAD+, weight management,
            and regenerative care — written and reviewed by a board-certified physician.
          </motion.p>
          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <span><strong>{POSTS.length}</strong> articles</span>
            <span aria-hidden="true">•</span>
            <span>Updated weekly</span>
            <span aria-hidden="true">•</span>
            <span>Reviewed by Dr. Charles Kamen, MD</span>
          </motion.div>
        </div>
      </section>

      {/* Sticky filter / search bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterInner}>
          <div className={styles.searchWrap}>
            <svg
              width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className={styles.searchIcon} aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="search"
              placeholder="Search articles…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search blog articles"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className={styles.searchClear}
              >
                ×
              </button>
            )}
          </div>

          <div className={styles.chips} role="tablist" aria-label="Filter by category">
            {categories.map((c) => (
              <button
                key={c.label}
                onClick={() => setActiveCategory(c.label)}
                role="tab"
                aria-selected={activeCategory === c.label}
                className={`${styles.chip} ${activeCategory === c.label ? styles.chipActive : ''}`}
              >
                {c.label}
                <span className={styles.chipCount}>{c.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className={`section ${styles.posts}`}>
        <div className="container">
          {/* Featured */}
          <AnimatePresence mode="wait">
            {featured && (
              <motion.div
                key="featured"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link href={featured.href} className={styles.featuredCard}>
                  <div className={styles.featuredMeta}>
                    <span className={styles.featuredFlag}>Featured</span>
                    <span className={styles.category}>{featured.category}</span>
                  </div>
                  <h2 className={styles.featuredTitle}>{featured.title}</h2>
                  <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                  <div className={styles.featuredFooter}>
                    <span className={styles.date}>{formatDate(featured.date)}</span>
                    <span className={styles.readTime}>{featured.readMin} min read</span>
                    <span className={styles.readMore}>
                      Read article
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Result heading */}
          <div className={styles.resultsHeader} aria-live="polite">
            {query || activeCategory !== 'All' ? (
              <>
                <span className={styles.resultsCount}>{filteredPosts.length}</span> result{filteredPosts.length === 1 ? '' : 's'}
                {activeCategory !== 'All' && <> in <em>{activeCategory}</em></>}
                {query && <> matching “{query}”</>}
              </>
            ) : (
              <>All articles, newest first</>
            )}
          </div>

          {/* Grid */}
          {gridPosts.length === 0 ? (
            <div className={styles.empty}>
              <p>No articles match this filter.</p>
              <button
                onClick={() => { setQuery(''); setActiveCategory('All'); }}
                className={styles.resetBtn}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className={styles.grid}>
              {gridPosts.map((post, i) => (
                <motion.div
                  key={post.href}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.4) }}
                >
                  <Link href={post.href} className={styles.postCard}>
                    <div className={styles.postCardTop}>
                      <span className={styles.category}>{post.category}</span>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <div className={styles.postFooter}>
                      <span className={styles.date}>{formatDate(post.date)}</span>
                      <span className={styles.dot} aria-hidden="true">•</span>
                      <span className={styles.readTime}>{post.readMin} min read</span>
                      <span className={styles.readMore}>
                        Read
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
