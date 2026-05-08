import Image from "next/image";
import styles from "./PartOfSection.module.css";

const cards = [
  "A purpose-driven team that's deeply committed to SMEs.",
  "A digital environment backed by proven field insights.",
  "A growth mindset that is fast, ethical, and friction-free.",
  "A company with integrity, humility, and bold goals.",
  "A future-led culture with clarity, kindness, and hustle.",
];

export default function PartOfSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>What You&apos;ll <span>Be Part</span> of</h2>
        <div className={styles.layout}>
          <div className={styles.left}>
            <p>{cards[0]}</p>
            <p>{cards[1]}</p>
            <p>{cards[2]}</p>
          </div>
          <div className={styles.center}>
            <Image src="/image 1.png" alt="Culture illustration" width={200} height={200} className={styles.image} />
          </div>
          <div className={styles.right}>
            <p>{cards[3]}</p>
            <p>{cards[4]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
