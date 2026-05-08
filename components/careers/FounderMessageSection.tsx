import Image from "next/image";
import styles from "./FounderMessageSection.module.css";

export default function FounderMessageSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>From Our <span>Founder</span></h2>
        <div className={styles.quoteBox}>
          <p>
            &ldquo;We&apos;re looking for impact-driven individuals who want to build with intention. If
            you&apos;ve ever wanted to be part of something bigger and build something that outlives
            trends, welcome to Pepagora.&rdquo;
          </p>
        </div>
        <Image src="/founder.png" alt="Founder" width={50} height={50} className={styles.avatar} />
        <p className={styles.name}>Mangesh Dhupad</p>
        <p className={styles.role}>Founder & CEO, Pepagora</p>
      </div>
    </section>
  );
}
