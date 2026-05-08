import Image from "next/image";
import styles from "./ValuesSection.module.css";

const values = [
  { title: "Purpose over perks", text: "We're here to build meaning, not vanity.", icon: "/careers/bar-chart-square-up-01.png" },
  { title: "Speed over perfection", text: "We ship fast, learn fast, and stay humble.", icon: "/careers/stars.png" },
  { title: "People over hierarchy", text: "Everyone contributes. Everyone learns.", icon: "/careers/users-profiles-02.png" },
  { title: "Empathy over ego", text: "We care more about listening than talking.", icon: "/careers/help.png" },
];

export default function ValuesSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.card}`}>
        <div className={styles.leftImage} aria-hidden>
          <Image src="/careers/values.png" alt="team" width={624} height={624} className={styles.leftImg} />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>What We <span className={styles.accent}>Value</span></h2>

          <div className={styles.list}>
            {values.map((item) => (
              <article key={item.title} className={styles.item}>
                <div className={styles.iconWrap}>
                  <Image src={item.icon} alt="icon" width={44} height={44} className={styles.iconImg} />
                </div>
                <div className={styles.textWrap}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemText}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
