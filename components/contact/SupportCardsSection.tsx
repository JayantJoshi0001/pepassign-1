import Image from "next/image";
import Link from "next/link";
import styles from "./ContactPage.module.css";

const supportCards = [
  {
    eyebrow: "Media & Press",
    copy: "For interviews, brand assets, or media coverage, please reach out.",
    icon: "/contact/envelope.png",
    email: "media@pepagora.com",
    href: "mailto:media@pepagora.com",
    cta: "View Press Page",
  },
  {
    eyebrow: "Investor Relations",
    copy: "If you're aligned with our mission to transform B2B growth for 400M+ SMEs, we're happy to start a conversation.",
    icon: "/contact/envelope.png",
    email: "investors@pepagora.com",
    href: "mailto:investors@pepagora.com",
    cta: "View Investor Page",
  },
];

export default function SupportCardsSection() {
  return (
    <section className={styles.supportSection}>
      <div className={styles.supportContainer}>
        <div className={styles.supportGrid}>
          {supportCards.map((card) => (
            <article key={card.eyebrow} className={styles.supportCard}>
              <p className={styles.supportEyebrow}>{card.eyebrow}</p>
              <p className={styles.supportCopy}>{card.copy}</p>
              <a href={card.href} className={styles.supportEmail}>
                <Image src={card.icon} alt="" width={16} height={16} className={styles.supportIcon} />
                <span>{card.email}</span>
              </a>
              <Link href="#" className={styles.supportButton}>
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
