import { ArrowRight, BriefcaseBusiness, Mail, Link } from "lucide-react";
import styles from "./GrowWithUsSection.module.css";

const actions = [
  { label: "Explore Roles", icon: BriefcaseBusiness },
  { label: "Email Your Resume", icon: Mail },
  { label: "Follow Us on LinkedIn", icon: Link },
];

export default function GrowWithUsSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div>
          <h2 className={styles.title}>
            <span>Grow</span> with us.
            <br />
            <span>Build</span> with us.
            <br />
            Change the game.
          </h2>
          <p className={styles.copy}>
            Let&apos;s become a verified B2B growth powerhouse for the next wave buyers around
            suppliers, and powerful growth tools all in one place.
          </p>
        </div>

        <div className={styles.actionList}>
          {actions.map((item) => (
            <button key={item.label} type="button" className={styles.actionRow}>
              <span className={styles.left}>
                <item.icon size={16} />
                {item.label}
              </span>
              <span className={styles.arrowWrap}>
                <ArrowRight size={14} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
