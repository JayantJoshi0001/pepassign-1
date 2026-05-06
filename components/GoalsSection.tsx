import Image from "next/image";
import { Sprout, User, Globe, FileText } from "lucide-react";
import styles from "./GoalsSection.module.css";

export default function GoalsSection() {
  const goals = [
    {
      icon: <Sprout className="goal-icon" />,
      number: "1 Million",
      label: "Trees Planted",
    },
    {
      icon: <User className="goal-icon" />,
      number: "100,000",
      label: "Inclusive SMEs Onboarded",
    },
    {
      icon: <Globe className="goal-icon" />,
      number: "10,000",
      label: "Global Buyers Aligned with ESG-Ready SMEs",
    },
    {
      icon: <FileText className="goal-icon" />,
      number: "500+",
      label: "Impact Case Studies Showcased",
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="goals-heading">
      <div className={styles.inner}>
        <article className={styles.card}>
          <div className={styles.cardContent}>
            <header className={styles.heading}>
              <h2 id="goals-heading" className={styles.title}>
                Our 2028 <span>Goals</span>
              </h2>
            </header>

            <div className={styles.list}>
              {goals.map((goal, index) => (
                <article key={index} className={styles.item}>
                  <div className={styles.icon}>{goal.icon}</div>
                  <div className={styles.goalCopy}>
                    <p className={styles.number}>{goal.number}</p>
                    <p className={styles.label}>{goal.label}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.cardImage}>
            <Image
              src="/goals bg.png"
              alt="Goals background pattern"
              fill
              className={styles.panelGraphic}
            />
          </div>
        </article>
      </div>
    </section>
  );
}
