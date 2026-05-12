import Link from "next/link";
import styles from "./ContactPage.module.css";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackdrop} aria-hidden="true" />
      <div className={styles.container}>
        <p className={styles.eyebrow}>Contact Us</p>
        <h1 className={styles.heroTitle}>
          Whether you&apos;re here to <span>grow, partner,</span> <span>invest</span>, or just say hello, we&apos;d love to hear from you.
        </h1>
        <div className={styles.heroButtons}>
          <Link href="#contact-form" className={styles.heroButton}>
            Create Free Business Profile
          </Link>
          <Link href="#contact-form" className={styles.heroButton}>
            Request a Callback
          </Link>
        </div>
      </div>
    </section>
  );
}
