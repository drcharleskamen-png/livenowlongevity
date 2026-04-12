import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './legal.module.css';

export default function DisclaimerPage() {
 return (
 <>
 <Navbar />
 <section className={styles.hero}>
 <h1>Medical Disclaimer</h1>
 </section>
 <section className={`section ${styles.content}`}>
 <div className="text-container">
 <p>The information on this website is for educational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult a qualified physician before starting any medical treatment, therapy, or wellness program.</p>
 <h2>No Medical Advice</h2>
 <p>Content on this site is provided by LiveNow Longevity for informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Never disregard professional medical advice or delay in seeking it because of something you read on this website.</p>
 <h2>Individual Results May Vary</h2>
 <p>Results from peptide therapy, longevity medicine, NAD+ IV therapy, weight management programs, and other treatments discussed on this site may vary from person to person. No guarantees of specific results are made.</p>
 <h2>FDA Statement</h2>
 <p>Certain treatments discussed on this website, including peptides and weight management medication medications, may not be FDA-approved for all uses. All treatments are prescribed by Dr. Kamen for legitimate medical purposes consistent with applicable law.</p>
 <h2>Contact</h2>
 <p>For medical questions, please contact our office at 702-808-2650 or through your secure patient portal.</p>
 </div>
 </section>
 <Footer />
 </>
 );
}
