import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import BlogPostContent from '@/components/BlogPostContent';
import BlogPostSchema from '@/components/BlogPostSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import styles from '../../blog.module.css';

interface Props {
 params: Promise<{ slug: string }>;
}

const posts: Record<string, {
 title: string;
 description: string;
 keywords: string;
 author: string;
 date: string;
}> = {
 'tissue-repair-peptides-research': {
 title: 'tissue repair peptide protocols Research: What the Evidence Shows | Dr. Charles Kamen, MD',
 description: 'Board-certified neurologist Dr. Charles Kamen, MD reviews published tissue repair peptide protocols research — animal and human studies, mechanisms of action, safety, and regulatory status. Evidence-based analysis.',
 keywords: 'tissue repair peptide protocols research, tissue repair peptide protocols studies, peptide therapy research, tissue repair peptide protocols Las Vegas, Dr. Charles Kamen tissue repair peptide protocols, pentadecapeptide research, tissue repair peptides',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-03-28',
 },
 'glp1-vs-peptides': {
 title: 'weight management medication vs. Peptides for Weight Loss: Dr. Charles Kamen, MD Reviews the Science',
 description: 'Comparing weight management medications (dual-action weight medication, weight management medication) with targeted peptide protocols for weight management. Dr. Charles Kamen, MD explains mechanisms, evidence, and appropriate use.',
 keywords: 'weight management medication vs peptides weight loss, dual-action weight medication vs peptides, Dr. Charles Kamen weight loss, peptide therapy Las Vegas, weight management medication Las Vegas, medical weight loss Nevada',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-03-15',
 },
 'nad-and-aging': {
 title: 'NAD+ and Aging: Science and Clinical Evidence | Dr. Charles Kamen, MD',
 description: 'NAD+ levels decline 50% between ages 40 and 60. Dr. Charles Kamen, MD explains the science of NAD+, what the research shows, and how NAD+ IV therapy and precursors work.',
 keywords: 'NAD+ aging, NAD+ science, NAD+ research, Dr. Charles Kamen NAD+, nicotinamide adenine dinucleotide, mitochondrial health, sirtuins',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-02-28',
 },
 'telemedicine-peptide-therapy': {
 title: 'Telemedicine Peptide Therapy in Nevada: What the Law Allows | Dr. Charles Kamen, MD',
 description: 'Nevada telemedicine law and peptide prescribing. Dr. Charles Kamen, MD explains when peptides can be prescribed via telemedicine, legal requirements, and what to expect from a telehealth visit.',
 keywords: 'telemedicine peptide therapy Nevada, peptide telehealth Nevada, Dr. Charles Kamen telemedicine, Nevada peptide prescription law, telehealth longevity',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-02-10',
 },
 'longevity-labs-guide': {
 title: 'Longevity Lab Guide: Key Biomarkers Explained | Dr. Charles Kamen, MD',
 description: 'What should a comprehensive longevity lab panel include? Dr. Charles Kamen, MD explains key biomarkers — metabolic, inflammatory, hormonal — and what optimal ranges look like for healthspan.',
 keywords: 'longevity lab guide, biomarker testing, hs-CRP, HbA1c, hormone panels, Dr. Charles Kamen labs, longevity diagnostics Las Vegas',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-01-25',
 },
 'peptide-legality-nevada': {
 title: 'Peptide Therapy Legality in Nevada: A Physician\'s Explanation | Dr. Charles Kamen, MD',
 description: 'How are peptides regulated in Nevada? Board-certified neurologist Dr. Charles Kamen, MD explains FDA compounding law, controlled substance scheduling, and when peptide prescriptions are legal.',
 keywords: 'peptide legality Nevada, peptide law Nevada, tissue repair peptide protocols legal Nevada, Dr. Charles Kamen peptides, FDA 503A 503B, compounding pharmacy law',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-01-12',
 },
 'glp1-vs-glp2-weight-loss': {
 title: 'dual-action weight medication vs weight management medication for Weight Loss: Dr. Charles Kamen, MD Compares the Science',
 description: 'dual-action weight medication (Zepbound®) vs weight management medication (Wegovy®) for weight loss. Board-certified neurologist Dr. Charles Kamen, MD explains mechanisms, trial data, and which may be appropriate for your situation.',
 keywords: 'dual-action weight medication vs weight management medication, Zepbound vs Wegovy, weight management medication weight loss, dual-action weight medication Las Vegas, weight management medication Las Vegas, Dr. Charles Kamen weight loss',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-03-20',
 },
 'glp1-side-effects': {
 title: 'Managing weight management medication Side Effects: A Physician\'s Guide | Dr. Charles Kamen, MD',
 description: 'Nausea, fatigue, and GI discomfort on weight management medication medications. Dr. Charles Kamen, MD explains how to manage common weight management medication agonist side effects and when to seek medical attention.',
 keywords: 'weight management medication side effects, dual-action weight medication side effects, weight management medication nausea, weight management medication management, Dr. Charles Kamen weight management medication',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-03-10',
 },
 'nutrition-glp1-therapy': {
 title: 'Nutrition While on weight management medication Therapy: Dr. Charles Kamen, MD\'s Guide',
 description: 'What to eat while on dual-action weight medication or weight management medication. Dr. Charles Kamen, MD explains protein intake, meal timing, and nutritional strategies to maximize weight management medication weight loss results.',
 keywords: 'nutrition weight management medication therapy, dual-action weight medication diet, weight management medication nutrition, weight management medication meal planning, Dr. Charles Kamen nutrition',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-03-05',
 },
 'muscle-preservation-weight-loss': {
 title: 'Muscle Preservation During Weight Loss: Science and Strategy | Dr. Charles Kamen, MD',
 description: 'Why losing muscle during weight loss is counterproductive and how to prevent it. Dr. Charles Kamen, MD explains protein targets, resistance training, and peptide support for lean mass.',
 keywords: 'muscle preservation weight loss, lean mass during weight loss, peptide muscle preservation, growth hormone secretagogue protocols muscle, Dr. Charles Kamen muscle',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-02-25',
 },
 'metabolic-adaptation-weight-loss': {
 title: 'Metabolic Adaptation During Weight Loss: Why Results Slow Down | Dr. Charles Kamen, MD',
 description: 'Why weight loss slows after initial progress. Dr. Charles Kamen, MD explains metabolic adaptation, hormonal changes, and strategies to overcome weight loss plateaus.',
 keywords: 'metabolic adaptation weight loss, weight loss plateau, metabolic slowdown, leptin weight loss, Dr. Charles Kamen metabolism',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-02-20',
 },
 'sleep-weight-loss-metabolism': {
 title: 'Sleep and Weight Loss: The Metabolic Connection | Dr. Charles Kamen, MD',
 description: 'How poor sleep undermines weight loss efforts through cortisol, insulin, and hunger hormones. Dr. Charles Kamen, MD explains the science and what to do about it.',
 keywords: 'sleep weight loss, metabolism sleep, cortisol weight loss, insulin sensitivity sleep, Dr. Charles Kamen sleep',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-02-15',
 },
 'leptin-resistance-weight-loss': {
 title: 'Leptin Resistance and Weight Loss: What It Means | Dr. Charles Kamen, MD',
 description: 'Leptin is the satiety hormone — but when it stops working, hunger increases. Dr. Charles Kamen, MD explains leptin resistance, its link to metabolic health, and what can be done.',
 keywords: 'leptin resistance weight loss, leptin hormone, satiety hormone, metabolic dysfunction, Dr. Charles Kamen leptin',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-02-08',
 },
 'glp1-maintenance': {
 title: 'Maintaining Weight After weight management medication Therapy: Dr. Charles Kamen, MD\'s Strategy',
 description: 'What happens after you reach your weight management medication weight loss goal. Dr. Charles Kamen, MD explains maintenance protocols, gradual tapering, and combining therapies for lasting results.',
 keywords: 'weight management medication maintenance, weight loss maintenance, dual-action weight medication maintenance, weight management medication tapering, Dr. Charles Kamen maintenance',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-02-01',
 },
 'cortisol-weight-loss-resistance': {
 title: 'Cortisol and Weight Loss Resistance: The Stress Connection | Dr. Charles Kamen, MD',
 description: 'Chronic stress elevates cortisol, which promotes fat storage and muscle breakdown. Dr. Charles Kamen, MD explains how to manage cortisol for weight loss when clinically appropriate.',
 keywords: 'cortisol weight loss, stress metabolism, cortisol management, weight loss resistance stress, Dr. Charles Kamen cortisol',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-01-28',
 },
 'thyroid-metabolism-weight': {
 title: 'Thyroid Function and Metabolic Health | Dr. Charles Kamen, MD',
 description: 'Thyroid hormones regulate metabolism — when they\'re low, weight loss becomes difficult. Dr. Charles Kamen, MD explains thyroid evaluation, subclinical hypothyroidism, and metabolic health.',
 keywords: 'thyroid metabolism weight loss, hypothyroidism weight, thyroid lab testing, Dr. Charles Kamen thyroid, metabolic thyroid',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-01-22',
 },
 'biomarkers-adults-guide': {
 title: 'Key Biomarkers Every Adult Should Track | Dr. Charles Kamen, MD | LiveNow Longevity',
 description: 'Which blood markers matter most for longevity and healthspan? Dr. Charles Kamen, MD explains the key biomarkers — hs-CRP, HbA1c, fasting insulin, and more — and what optimal ranges look like.',
 keywords: 'key biomarkers longevity, biomarkers adults, hs-CRP, HbA1c, fasting insulin, longevity testing Las Vegas, Dr. Charles Kamen biomarkers',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-01',
 },
 'hs-crp-chronic-inflammation': {
 title: 'hs-CRP and Chronic Inflammation: The Silent Driver of Aging | Dr. Charles Kamen, MD',
 description: 'High-sensitivity C-reactive protein (hs-CRP) measures systemic inflammation. Dr. Charles Kamen, MD explains what elevated hs-CRP means, what drives it, and how inflammation is addressed in longevity medicine.',
 keywords: 'hs-CRP chronic inflammation, CRP inflammation aging, high-sensitivity CRP, inflammatory markers longevity, Dr. Charles Kamen hs-CRP',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-03-25',
 },
 'hba1c-metabolic-health': {
 title: 'HbA1c and Metabolic Health: What Your Blood Sugar Marker Means | Dr. Charles Kamen, MD',
 description: 'HbA1c reflects average blood sugar over 3 months. Dr. Charles Kamen, MD explains how HbA1c relates to longevity, prediabetes, and metabolic health optimization.',
 keywords: 'HbA1c metabolic health, HbA1c longevity, blood sugar aging, prediabetes HbA1c, Dr. Charles Kamen HbA1c',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-03-18',
 },
 'hormone-panels-longevity': {
 title: 'Hormone Panels for Longevity: What to Test | Dr. Charles Kamen, MD',
 description: 'Hormones decline with age and affect every system. Dr. Charles Kamen, MD explains which hormones to evaluate — testosterone, estradiol, TSH, DHEA-S — and what the ranges mean for healthspan.',
 keywords: 'hormone panels longevity, hormone testing men women, testosterone longevity, DHEA aging, Dr. Charles Kamen hormone panels',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-03-12',
 },
 'telomere-length-aging': {
 title: 'Telomere Length and Biological Age | Dr. Charles Kamen, MD',
 description: 'Telomeres cap chromosome ends and shorten with each cell division. Dr. Charles Kamen, MD explains what telomere testing measures, what it can and cannot tell you, and strategies to support telomere integrity.',
 keywords: 'telomere length aging, biological age testing, telomere health, Dr. Charles Kamen telomere, cellular aging',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-03-08',
 },
 'autophagy-cellular-cleanup': {
 title: 'Autophagy: Your Body\'s Cellular Cleanup System | Dr. Charles Kamen, MD',
 description: 'Autophagy is how cells remove damaged components. Dr. Charles Kamen, MD explains the science of autophagy, what activates it, and how this process relates to longevity and metabolic health.',
 keywords: 'autophagy cellular cleanup, autophagy longevity, cellular repair aging, Dr. Charles Kamen autophagy',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-03-02',
 },
 'mitochondrial-dysfunction-aging': {
 title: 'Mitochondrial Dysfunction and Aging | Dr. Charles Kamen, MD',
 description: 'Mitochondria generate cellular energy — and decline with age. Dr. Charles Kamen, MD explains how mitochondrial dysfunction drives aging, and how NAD+, CoQ10, and lifestyle support mitochondrial health.',
 keywords: 'mitochondrial dysfunction aging, mitochondrial health longevity, NAD+ mitochondria, cellular energy aging, Dr. Charles Kamen mitochondria',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-02-22',
 },
 'insulin-sensitivity-longevity': {
 title: 'Insulin Sensitivity and Longevity Medicine | Dr. Charles Kamen, MD',
 description: 'Insulin resistance is one of the most powerful drivers of accelerated aging. Dr. Charles Kamen, MD explains how to measure it, reverse it when possible, and why it matters for healthspan.',
 keywords: 'insulin sensitivity longevity, insulin resistance aging, fasting insulin test, metabolic health longevity, Dr. Charles Kamen insulin',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-02-16',
 },
 'epigenetic-age-testing': {
 title: 'Epigenetic Age Testing: Measuring Biological Age | Dr. Charles Kamen, MD',
 description: 'Epigenetic clocks like GrimAge measure biological age through DNA methylation. Dr. Charles Kamen, MD explains what epigenetic testing shows, its limitations, and how it fits into a longevity medicine program.',
 keywords: 'epigenetic age testing, GrimAge, biological age test, DNA methylation aging, Dr. Charles Kamen epigenetic',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-02-10',
 },
 'exercise-longevity-research': {
 title: 'Exercise and Longevity: What the Research Shows | Dr. Charles Kamen, MD',
 description: 'Physical activity is one of the most consistently proven longevity interventions. Dr. Charles Kamen, MD reviews the research on exercise types, intensity, and frequency for healthy aging.',
 keywords: 'exercise longevity research, exercise aging, physical activity healthspan, Dr. Charles Kamen exercise, longevity exercise',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-02-05',
 },
 'ghrp-guide': {
 title: 'growth hormone secretagogue protocols: Growth Hormone Secretagogues Explained | Dr. Charles Kamen, MD',
 description: 'growth hormone secretagogue protocols is a growth hormone secretagogue combination studied for body composition and healing. Dr. Charles Kamen, MD explains mechanisms, research, and clinical use.',
 keywords: 'growth hormone secretagogue protocols growth hormone secretagogue protocols, growth hormone secretagogues, growth hormone secretagogue protocols Las Vegas, peptide growth hormone, Dr. Charles Kamen growth hormone secretagogue protocols',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-02',
 },
 'melanocortin-therapy': {
 title: 'melanocortin peptide protocols (Bremelanotide) for Wellness: Dr. Charles Kamen, MD Explains',
 description: 'melanocortin peptide protocols (bremelanotide) is a peptide that acts on melanocortin receptors. Dr. Charles Kamen, MD explains its mechanisms, potential applications, and what the research shows.',
 keywords: 'melanocortin peptide protocols bremelanotide, melanocortin peptide protocols peptide therapy, melanocortin peptide, Dr. Charles Kamen melanocortin peptide protocols',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-03',
 },
 'ghrh-growth-hormone': {
 title: 'growth hormone-releasing peptide protocols for Growth Hormone Optimization | Dr. Charles Kamen, MD',
 description: 'growth hormone-releasing peptide protocols is a growth hormone-releasing hormone (GHRH) analog approved for HIV-related lipodystrophy. Dr. Charles Kamen, MD explains its use in longevity medicine and growth hormone optimization.',
 keywords: 'growth hormone-releasing peptide protocols growth hormone, growth hormone-releasing peptide protocols Las Vegas, growth hormone optimization, GHRH analog, Dr. Charles Kamen growth hormone-releasing peptide protocols',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-04',
 },
 'lipolytic-peptides-fat-loss': {
 title: 'lipolytic peptide protocols: The Fat-Burning Fragment Explained | Dr. Charles Kamen, MD',
 description: 'lipolytic peptide protocols is a fragment of human growth hormone studied for lipolytic activity. Dr. Charles Kamen, MD explains the research, regulatory status, and clinical considerations.',
 keywords: 'lipolytic peptide protocols fat loss, lipolytic peptide protocols peptide, lipolytic peptide, fat burning peptide, Dr. Charles Kamen lipolytic peptide protocols',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-05',
 },
 'ghrh-vs-ghrp': {
 title: 'growth hormone-releasing peptide protocols vs growth hormone secretagogue protocols: Growth Hormone Releasing Hormones Compared | Dr. Charles Kamen, MD',
 description: 'growth hormone-releasing peptide protocols and growth hormone secretagogue protocols are both GHRH analogs used in peptide medicine. Dr. Charles Kamen, MD compares their mechanisms, dosing, and clinical applications.',
 keywords: 'growth hormone-releasing peptide protocols vs growth hormone secretagogue protocols, growth hormone releasing hormone, GHRH peptides, Dr. Charles Kamen growth hormone-releasing peptide protocols, peptide therapy comparison',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-06',
 },
 'peptide-injection-guide': {
 title: 'Subcutaneous Peptide Injection Guide: How to Inject Peptides Safely | Dr. Charles Kamen, MD',
 description: 'Most physician-prescribed peptides are administered via subcutaneous injection. Dr. Charles Kamen, MD provides a practical guide to safe, effective peptide injection technique.',
 keywords: 'peptide injection guide, subcutaneous peptide injection, how to inject peptides, Dr. Charles Kamen peptide injection',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-07',
 },
 'stacking-peptides-safely': {
 title: 'Stacking Peptides: Combining Protocols Safely | Dr. Charles Kamen, MD',
 description: 'Combining multiple peptides in one protocol — stacking — is common in peptide medicine. Dr. Charles Kamen, MD explains the principles, common combinations, and safety considerations.',
 keywords: 'stacking peptides, combining peptides safely, peptide stacking protocol, Dr. Charles Kamen peptide stacking',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-08',
 },
 'insulin-peptide-response': {
 title: 'Understanding Your Body\'s Peptide Response | Dr. Charles Kamen, MD',
 description: 'Why do some patients respond better to peptides than others? Dr. Charles Kamen, MD explains individual variability in peptide therapy response and how evaluation guides protocol design.',
 keywords: 'peptide therapy response, individual peptide response, peptide evaluation, Dr. Charles Kamen peptide response',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-09',
 },
 'triple-hormone-peptide': {
 title: 'triple-action weight medication: The Triple-Hormone Agonist Peptide | Dr. Charles Kamen, MD',
 description: 'Triple-action weight medication is a-hormone medication (weight management medication, GIP, glucagon) showing promising weight loss results in trials. Dr. Charles Kamen, MD reviews the mechanism and trial data.',
 keywords: 'triple-action weight medication peptide, triple hormone agonist, triple-action weight medication weight loss, weight management medication GIP glucagon agonist, Dr. Charles Kamen triple-action weight medication',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-10',
 },
 'reproductive-peptide-therapy': {
 title: 'reproductive peptide protocols and Peptide Medicine | Dr. Charles Kamen, MD',
 description: 'reproductive peptide protocols is a neuropeptide that regulates the reproductive hormone axis. Dr. Charles Kamen, MD explains the science of reproductive peptide protocols and its emerging role in peptide medicine.',
 keywords: 'reproductive peptide protocols peptide therapy, reproductive peptide protocols hormone, reproductive hormone peptide, Dr. Charles Kamen reproductive peptide protocols',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-11',
 },
 'glutathione-iv-therapy': {
 title: 'Glutathione IV Therapy: The Master Antioxidant Explained | Dr. Charles Kamen, MD',
 description: 'Glutathione is the body\'s most abundant antioxidant. Dr. Charles Kamen, MD explains why IV glutathione bypasses digestive loss, what the research shows, and when IV delivery is used.',
 keywords: 'glutathione IV therapy, glutathione antioxidant, IV glutathione Las Vegas, Dr. Charles Kamen glutathione',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-01',
 },
 'vitamin-d-deficiency-adults': {
 title: 'Vitamin D Deficiency in Adults: The Longevity Connection | Dr. Charles Kamen, MD',
 description: 'Vitamin D deficiency affects an estimated 40% of U.S. adults. Dr. Charles Kamen, MD explains testing, optimal ranges, supplementation, and the link between vitamin D and longevity.',
 keywords: 'vitamin D deficiency adults, vitamin D longevity, vitamin D testing optimal range, Dr. Charles Kamen vitamin D',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-02',
 },
 'b-complex-iv-therapy': {
 title: 'B-Complex IV Therapy for Energy and Metabolism | Dr. Charles Kamen, MD',
 description: 'B vitamins support cellular energy production, neurological function, and methylation. Dr. Charles Kamen, MD explains IV B-complex delivery and who may benefit.',
 keywords: 'B-complex IV therapy, B vitamin IV Las Vegas, IV B12 therapy, energy IV therapy, Dr. Charles Kamen B-complex',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-03',
 },
 'iv-therapy-vs-oral-supplements': {
 title: 'IV Therapy vs Oral Supplements: What the Science Says | Dr. Charles Kamen, MD',
 description: 'IV therapy delivers nutrients directly to the bloodstream — but is it worth it? Dr. Charles Kamen, MD compares bioavailability, cost, and evidence between IV and oral delivery.',
 keywords: 'IV therapy vs oral supplements, IV bioavailability, IV vs oral vitamins, Dr. Charles Kamen IV therapy',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-04',
 },
 'magnesium-iv-therapy': {
 title: 'Magnesium IV Therapy: Cellular Mineral for Energy and Calm | Dr. Charles Kamen, MD',
 description: 'Magnesium is involved in over 300 enzymatic reactions. Dr. Charles Kamen, MD explains IV magnesium therapy, who is deficient, and what the evidence supports.',
 keywords: 'magnesium IV therapy, magnesium deficiency treatment, IV magnesium Las Vegas, Dr. Charles Kamen magnesium',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-05',
 },
 'zinc-immunity-iv': {
 title: 'Zinc and Immune Function: The Case for IV Zinc | Dr. Charles Kamen, MD',
 description: 'Zinc is essential for immune cell function and wound healing. Dr. Charles Kamen, MD explains zinc\'s role in immunity, deficiency states, and when IV delivery may be appropriate.',
 keywords: 'zinc IV therapy, zinc immunity, zinc deficiency, IV zinc Las Vegas, Dr. Charles Kamen zinc',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-06',
 },
 'custom-iv-protocols': {
 title: 'Custom IV Protocols: How Dr. Charles Kamen, MD Designs Your Infusion',
 description: 'Off-the-shelf IV formulas don\'t address individual needs. Dr. Charles Kamen, MD explains how medical evaluation guides customized IV therapy at LiveNow Longevity.',
 keywords: 'custom IV therapy Las Vegas, customized IV infusions, IV therapy evaluation, Dr. Charles Kamen custom IV',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-07',
 },
 'iv-therapy-recovery': {
 title: 'IV Therapy for Athletic Recovery: What the Evidence Shows | Dr. Charles Kamen, MD',
 description: 'Athletes commonly use IV therapy for recovery — but the evidence varies by compound. Dr. Charles Kamen, MD reviews the research on IV therapy for performance recovery.',
 keywords: 'IV therapy athletic recovery, IV recovery Las Vegas, post-workout IV therapy, Dr. Charles Kamen recovery IV',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-08',
 },
 'prp-therapy-joints': {
 title: 'PRP Therapy for Joint Health: Dr. Charles Kamen, MD\'s Clinical Perspective',
 description: 'Platelet-rich plasma (PRP) injections use the body\'s own platelets to support tissue repair. Dr. Charles Kamen, MD explains the evidence for PRP in joint and musculoskeletal applications.',
 keywords: 'PRP therapy joints, platelet-rich plasma joint injection, PRP Las Vegas, Dr. Charles Kamen PRP',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-01',
 },
 'peptide-therapy-joint-health': {
 title: 'Peptide Therapy for Joint Health and Repair | Dr. Charles Kamen, MD',
 description: 'Peptides including tissue repair peptide protocols and TB-500 are studied for musculoskeletal repair. Dr. Charles Kamen, MD explains the peptide options for joint health when clinically appropriate.',
 keywords: 'peptide therapy joint health, tissue repair peptide protocols joints, peptide repair tissue, joint health peptides Las Vegas, Dr. Charles Kamen joint peptide',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-02',
 },
 'growth-factor-therapy': {
 title: 'Growth Factor Therapy in Regenerative Medicine | Dr. Charles Kamen, MD',
 description: 'Growth factors are signaling proteins that regulate cell proliferation and repair. Dr. Charles Kamen, MD explains their role in regenerative medicine and how they are used clinically.',
 keywords: 'growth factor therapy regenerative, growth factors healing, regenerative medicine growth factors, Dr. Charles Kamen growth factor',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-03',
 },
 'tissue-repair-peptides': {
 title: 'Peptides for Tissue Repair: Mechanisms and Evidence | Dr. Charles Kamen, MD',
 description: 'Several peptides are studied for tissue repair applications. Dr. Charles Kamen, MD reviews the mechanisms — growth hormone modulation, angiogenesis, nitric oxide — and the evidence base.',
 keywords: 'peptides tissue repair, tissue repair mechanisms, tissue repair peptide protocols tissue repair, regenerative peptides, Dr. Charles Kamen tissue repair',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-04',
 },
 'nerve-regeneration-peptides': {
 title: 'Peptides and Nerve Regeneration: What the Science Shows | Dr. Charles Kamen, MD',
 description: 'Can peptides support nerve repair? Dr. Charles Kamen, MD reviews the science of peptides studied in neurological repair contexts — including tissue repair peptide protocols and PEG-MGF.',
 keywords: 'nerve regeneration peptides, tissue repair peptide protocols nerve, PEG-MGF nerve repair, neurological peptide therapy, Dr. Charles Kamen nerve',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-05',
 },
 'gut-health-peptide-therapy': {
 title: 'Gut Health and Peptide Therapy: tissue repair peptide protocols and GI Protection | Dr. Charles Kamen, MD',
 description: 'The gut-brain axis and gastrointestinal protection are key applications of certain peptides. Dr. Charles Kamen, MD reviews tissue repair peptide protocols\'s GI applications and the broader gut-peptide connection.',
 keywords: 'gut health peptide therapy, tissue repair peptide protocols gut, GI protection peptides, gut-brain axis peptides, Dr. Charles Kamen gut health',
 author: 'Dr. Charles Kamen, MD',
 date: '2026-04-06',
 },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { slug } = await params;
 const post = posts[slug];
 if (!post) return {};
 return {
 title: post.title,
 description: post.description,
 keywords: post.keywords,
 authors: [{ name: post.author }],
 openGraph: {
 type: 'article',
 title: post.title,
 description: post.description,
 publishedTime: post.date,
 modifiedTime: post.date,
 authors: ['Dr. Charles Kamen, MD'],
 section: 'Education',
 siteName: 'LiveNow Longevity',
 url: `https://livenowlongevity.com/blog/${slug}`,
 images: [
 {
 url: `/api/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description.substring(0, 80))}`,
 width: 1200,
 height: 630,
 alt: post.title,
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 site: '@livewell21',
 creator: '@livewell21',
 title: post.title,
 description: post.description,
 images: [`/api/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description.substring(0, 80))}`],
 },
 alternates: {
 canonical: `https://livenowlongevity.com/blog/${slug}`,
 },
 robots: {
 index: true,
 follow: true,
 googleBot: { index: true, follow: true },
 },
 };
}

export default async function BlogPostPage({ params }: Props) {
 const { slug } = await params;
 const post = posts[slug];
 if (!post) notFound();

 return (
 <>
 <BreadcrumbSchema items={[
   { name: 'Home', url: 'https://livenowlongevity.com' },
   { name: 'Blog', url: 'https://livenowlongevity.com/blog' },
   { name: post.title, url: `https://livenowlongevity.com/blog/${slug}` },
 ]} />
 <Navbar />
 <BlogPostSchema
 title={post.title}
 description={post.description}
 author={post.author}
 date={post.date}
 slug={slug}
 />
 <BlogPostContent slug={slug} />
 <CTASection />
 <Footer />
 </>
 );
}
