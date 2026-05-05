import Image from "next/image";
import styles from "./ESGSection.module.css";

export default function ESGSection() {
  const initiatives = [
    {
      id: 1,
      title: "One Client, One Tree (with Evertreen)",
      description: "We are not just another marketplace — we are a full-stack SME growth platform.",
      image: "/Initiative/Intiative 1.png",
    },
    {
      id: 2,
      title: "1% Revenue to Stripe Climate",
      description: "Supporting cutting-edge carbon removal innovation through every subscription.",
      image: "/Initiative/initiative 2.png",
    },
    {
      id: 3,
      title: "Eco Business Tag",
      description: "Awarded to all paid clients under Grow, Scale, Global, and Enterprise plans.",
      image: "/Initiative/initiative 3.png",
    },
    {
      id: 4,
      title: "DIY ESG Framework for SMEs (Coming Soon)",
      description: "Industry-specific toolkits to help businesses self-assess and report ESG compliance easily.",
      image: "/Initiative/initiative 4.png",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.headingGroup}>
          <h2 className={styles.title}>ESG & Environmental Impact</h2>
          <p className={styles.copy}>
            We are committed to helping businesses become globally credible and environmentally responsible.
          </p>
        </div>

        <div className={styles.highlightWrapper}>
          <div className={styles.highlightHeader}>
            <h3 className={styles.subTitle}>Key ESG Initiatives</h3>
            <p className={styles.subCopy}>
              These badges show that a business is who they say they are, with their identity and data secured by world-class technology.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {initiatives.map((item) => (
              <div key={item.id} className={styles.card}>
                <h4 className={styles.cardTitle}>{item.title}</h4>
                <div className={styles.cardIcon}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
