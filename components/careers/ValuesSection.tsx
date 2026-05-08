import { CircleCheck, Gauge, Network, MessagesSquare } from "lucide-react";
import styles from "./ValuesSection.module.css";

const values = [
  { title: "Purpose over perks", text: "You are here to build meaning, not vanity.", icon: CircleCheck },
  { title: "Speed over perfection", text: "We ship fast, learn fast, and stay humble.", icon: Gauge },
  { title: "People over hierarchy", text: "Everyone contributes. Everyone is heard.", icon: Network },
  { title: "Empathy over ego", text: "We care more about listening than talking.", icon: MessagesSquare },
];

export default function ValuesSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.card}`}>
        <div className={styles.photo} aria-hidden="true" />
        <div>
          <h2 className={styles.title}>What We <span>Value</span></h2>
          <div className={styles.list}>
            {values.map((item) => (
              <article key={item.title} className={styles.item}>
                <item.icon size={18} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
