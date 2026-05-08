import { BadgeAlert, HandCoins, Orbit } from "lucide-react";
import styles from "./SolvingSection.module.css";

const items = [
  {
    title: "Real businesses are invisible online.",
    icon: BadgeAlert,
  },
  {
    title: "They struggle with trust, lead quality, and digital visibility.",
    icon: HandCoins,
  },
  {
    title: "We fix that with real technology, real support, and real impact.",
    icon: Orbit,
  },
];

export default function SolvingSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>What We&apos;re <span>Solving</span></h2>
        <p className={styles.subtext}>If that excites you, you&apos;ve found your person.</p>

        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.title} className={styles.card}>
              <item.icon size={16} />
              <p>{item.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
