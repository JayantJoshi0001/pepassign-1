import Image from "next/image";
import styles from "./FounderSection.module.css";

export default function FounderSection() {
  return (
    <section className={styles.founderSection}>
      <div className={styles.founderInner}>
        <div className={styles.founderCard}>
          <div className={styles.founderPhoto}>
            <Image
              src="/founder.png"
              alt="Murugesan Dhanapal"
              width={80}
              height={80}
              className={styles.founderPhotoImage}
            />
          </div>

          <blockquote className={styles.founderQuote}>
            We are not just growing businesses. We are growing forests, opportunities, and a better tomorrow.
          </blockquote>

          <div className={styles.founderProfile}>
            <h3 className={styles.founderName}>Murugesan Dhanapal</h3>
            <p className={styles.founderRole}>Founder & CEO</p>
          </div>

          <div className={styles.founderDivider}></div>

          <div className={styles.disclaimerSection}>
            <h4 className={styles.disclaimerTitle}>Disclaimer</h4>
            <p className={styles.disclaimerText}>
              Pepagora provides AI-enabled business growth tools and services designed to support small and medium enterprises (SMEs). All outcomes are influenced by user behavior, market conditions, and industry context. Access to features, pricing, and performance may vary and is subject to change without notice or prior obligation. Third-party services including sustainability initiatives, certifications, and integrations are independently operated and subject to their respective terms. Pepagora conducts verification based on documentation and third-party validation where applicable; however, users are solely responsible for conducting their own due diligence before initiating commercial engagements. Data usage is governed by our <a href="#" className={styles.disclaimerLink}>[Privacy Policy]</a>, and access to this platform implies agreement with our <a href="#" className={styles.disclaimerLink}>[Terms of Use]</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
