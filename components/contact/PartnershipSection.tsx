/* eslint-disable @next/next/no-img-element */
import styles from "./ContactPage.module.css";

export default function PartnershipSection() {
  return (
    <section className={styles.partnershipSection}>
      <div className={styles.partnershipContainer}>
        <div className={styles.partnershipCard}>
          <p className={styles.sectionHeading}>Partnership</p>
          <p className={styles.partnershipCopy}>
            We welcome collaborations with trade bodies, tech platforms, logistic partners, and growth-focused organizations.
          </p>
          <img src="/contact/arrow.png" alt="Partnership illustration" className={styles.partnershipImage} />
          <p className={styles.mailLine + " " + styles.partnermail}>
            mail us: <a href="mailto:partners@pepagora.com">partners@pepagora.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
