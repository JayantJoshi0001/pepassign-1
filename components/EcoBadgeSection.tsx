import Image from "next/image";
import styles from "./EcoBadgeSection.module.css";

export default function EcoBadgeSection() {
  const badges = [
    {
      name: "EcoStarter",
      description: "Businesses supporting global reforestation through their Pepagora plan.",
      image: "/Badge/Badge Starter.png",
    },
    {
      name: "EcoSeller",
      description: "Businesses offering verifiably eco-friendly or recycled products.",
      image: "/Badge/Badge Seller.png",
    },
    {
      name: "EcoVerified",
      description: "Businesses holding official green certifications (e.g., FSC, GOTS, ISO 14001).",
      image: "/Badge/Badge Verified.png",
    },
    {
      name: "EcoChampion",
      description: "Companies with audited, significant commitments to sustainable operations.",
      image: "/Badge/Badge Champion.png",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Recognizing Businesses That <span>Make a Difference</span>
          </h2>
          <p className={styles.intro}>
            At Pepagora, we recognize and promote businesses that are not just profit-driven, but also purpose-driven.
          </p>
        </div>

        <div className={styles.badgeInfo}>
          <h3 className={styles.badgeInfoTitle}>Eco Badge Tiers</h3>
          <p className={styles.badgeInfoCopy}>
            Our sustainability commitment is not one-size-fits-all. We offer multiple Eco Tags based on a business&apos;s contribution:
          </p>
        </div>

        <div className={styles.grid}>
          {badges.map((badge) => (
            <article key={badge.name} className={styles.card}>
              <div className={styles.figure}>
                <Image src={badge.image} alt={badge.name} fill />
              </div>
              <h4 className={styles.cardTitle}>{badge.name}</h4>
              <p className={styles.cardDescription}>{badge.description}</p>
            </article>
          ))}
        </div>

        <p className={styles.note}>
          <strong>Note:</strong> All eco badges are shown on your public profile and products, and filterable by buyers.
        </p>
      </div>
    </section>
  );
}
