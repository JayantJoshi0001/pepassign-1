import Link from "next/link";
import styles from "./ContactPage.module.css";

export default function CareersPromotionSection() {
  return (
    <section className={styles.careersSection}>
      <div className={styles.container}>
        <div className={styles.careersCard}>
          <span className={styles.careersWatermark}>careers</span>
          <span className={styles.careersEyebrow}>We are always hiring builders, storytellers, and growth minds</span>
          <h2 className={styles.careersTitle}>
            Want to be part of the <span>Pepagora</span> movement?
          </h2>
          <Link href="/careers" className={styles.careersButton}>
            See Open Roles
          </Link>
          <p className={styles.mailLine}>
            mail us: <a href="mailto:career@pepagora.com">career@pepagora.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
