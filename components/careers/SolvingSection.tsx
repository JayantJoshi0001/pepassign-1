import Image from "next/image";
import styles from "./SolvingSection.module.css";
import { ChevronRight } from "lucide-react";

const solvingItems = [
  {
    title: "Real businesses are invisible online.",
    icon: "/careers/bar-chart-square-up-01.png",
  },
  {
    title: "They struggle with trust, lead quality, and digital visibility.",
    icon: "/careers/Layer_2.png",
  },
  {
    title: "We are fixing that – with real technology, real support, and real impact.",
    icon: "/careers/help.png",
  },
];

export default function SolvingSection() {
  return (
    <section className={styles.section}>
      {/* What We're Solving Section */}
      <div className={styles.solvingContainer}>
        <h2 className={styles.mainTitle}>
          What We&apos;re <span className={styles.highlight}>Solving</span>
        </h2>
        <p className={styles.subtitle}>If that excites you, you&apos;re our kind of person.</p>

        <div className={styles.cardsGrid}>
          {solvingItems.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.cardIconWrapper}>
                <Image
                  src={item.icon}
                  alt="Icon"
                  width={48}
                  height={48}
                  className={styles.cardIcon}
                />
              </div>
              <p className={styles.cardText}>{item.title}</p>
            </article>
          ))}
        </div>
      </div>

      {/* From Our Founder Section */}
      <div className={styles.founderContainer}>
        <div className={styles.founderBackgroundText}>founder</div>
        <h2 className={styles.founderTitle}>
          From Our <span className={styles.highlight}>Founder</span>
        </h2>
        
        <div className={styles.quoteWrapper}>
          <Image
            src="/stroke.svg"
            alt="Quote"
            width={80}
            height={80}
            className={styles.quoteMark}
          />
          <p className={styles.quoteText}>
            &quot;We&apos;re looking for impact-driven individuals who want to build with intention. If
            you&apos;ve ever wanted to be part of something bigger and build something that outlives
            trends — Welcome to Pepagora.&quot;
          </p>
        </div>

        <div className={styles.founderInfo}>
          <Image
            src="/founder.png"
            alt="Founder"
            width={80}
            height={80}
            className={styles.founderImage}
          />
          <div className={styles.founderSignatureWrapper}>
            <Image
              src="/sign.png"
              alt="Signature"
              width={120}
              height={60}
              className={styles.founderSignature}
            />
          </div>
        </div>
      </div>

      {/* Grow with us Section */}
      <div className={styles.growContainer}>
        <div className={styles.growContent}>
          <h2 className={styles.growTitle}>
            <span className={styles.highlight}>Grow</span> with us.<br />
            <span className={styles.highlight}>Build</span> with us.<br />
            <span className={styles.highlight}>Change</span> the game.
          </h2>
          <p className={styles.growDescription}>
            Join thousands of verified SMEs using Pepagora to connect with new buyers, trusted suppliers, and powerful growth tools — all in one place.
          </p>
        </div>

        <div className={styles.ctaButtons}>
          <button className={styles.ctaButton}>
            <div className={styles.ctaDiv}>
              <Image
                src="/careers/explore.png"
                alt="Email"
                width={52}
                height={52}
              />
              Explore Roles
            </div>
            <ChevronRight size={32} className={styles.chevronIcon} />
          </button>
          <button className={styles.ctaButton}>
            <div className={styles.ctaDiv}>
              <Image
                src="/careers/image 943 (traced).png"
                alt="Email"
                width={52}
                height={52}
              />
            Email Your Resume
            </div>
            <ChevronRight size={32} className={styles.chevronIcon} />
          </button>
          <button className={styles.ctaButton}>
            <div className={styles.ctaDiv}>
              <Image
                src="/careers/connect.png"
                alt="Explore"
                width={52}
                height={52}
              />
              Follow Us on LinkedIn
            </div>
            <ChevronRight size={32} className={styles.chevronIcon} />
          </button>
        </div>
      </div>
    </section>
  );
}
