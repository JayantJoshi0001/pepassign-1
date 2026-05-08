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
        <h2 className={styles.title}>What You&apos;ll <span className={styles.highlight}>Be Part</span> of</h2>
        <div className={styles.layout}>
          <div className={styles.left}>
            {cards.slice(0, 3).map((card, idx) => (
              <div key={idx} className={styles.card}>
                <p>{card}</p>
              </div>
            ))}
          </div>
          <div className={styles.center}>
            <Image src="/careers/Layer_1.png" alt="Culture illustration" width={366} height={431} className={styles.image} />
          </div>
          <div className={styles.right}>
            {cards.slice(3).map((card, idx) => (
              <div key={idx} className={styles.card}>
                <p>{card}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
