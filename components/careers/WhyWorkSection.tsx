import { BookOpenText, Building2, Globe2, Sparkles } from "lucide-react";
import styles from "./WhyWorkSection.module.css";

const points = [
  { icon: BookOpenText, text: "Because we believe growth should be fast, global, and accessible to every genuine business." },
  { icon: Building2, text: "Where we have no tolerance for fake players." },
  { icon: Globe2, text: "A platform engineered to serve millions of SMEs globally across the world." },
  { icon: Sparkles, text: "Creating one grounded internet powered by AI and real-world intent." },
];

export default function WhyWorkSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.card}`}>
        <h2 className={styles.title}>Why Work at <span>Pepagora?</span></h2>
        <div className={styles.grid}>
          {points.map((item) => (
            <article key={item.text} className={styles.point}>
              <item.icon size={16} />
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
