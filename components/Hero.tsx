import Image from "next/image";
import { Leaf } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackgroundText}>
        <span>impact</span>
      </div>

      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.heroLabel}>Impact at Pepagora</span>

            <h1 className={styles.heroTitle}>
              Empowering Global Trade with Purpose, <span>Sustainability</span>, and Inclusion
            </h1>

            <div className={styles.heroTextBlock}>
              <p className={styles.heroText}>
                Pepagora is not just a B2B marketplace—we are a catalyst for impact. Our vision is rooted in building a future where growth is ethical, trade is inclusive, and every business, no matter how small, contributes to a better world.
              </p>
              <p className={styles.heroTextSmall}>
                We embed Environmental, Social, and Governance (ESG) values and inclusive economic principles directly into our platform—supporting climate action, diverse entrepreneurship, and social equity across global supply chains.
              </p>
            </div>

            <div className={styles.heroCta}>
              <button className={styles.heroButton} type="button">
                <Leaf className={styles.heroButtonIcon} />
                <span>Download Our Full Impact Overview</span>
              </button>
            </div>
          </div>

          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageFrame}>
              <Image
                src="/Hero image.png"
                alt="Impact Illustration"
                width={1200}
                height={1000}
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
