import Image from "next/image";
import styles from "./InclusionSection.module.css";

export default function InclusionSection() {
  const empowermentCards = [
    {
      title: "Women-Led Businesses",
      icon: "/icons/icon 1.png",
    },
    {
      title: "Differently-Abled Entrepreneurs",
      icon: "/icons/icon 2.png",
    },
    {
      title: "Rural & Underserved SMEs",
      icon: "/icons/icon  3.png",
    },
    {
      title: "First-Time Digital Businesses with Regional Language Needs",
      icon: "/icons/icon 4.png",
    },
  ];

  const socialBadges = [
    {
      name: "SheLeads Certified",
      description: "Awarded to women-founded or women-led businesses.",
      image: "/Social Badge/Social Badge 1.png",
    },
    {
      name: "AbilityFirst Verified",
      description: "Recognizes businesses owned or led by differently-abled entrepreneurs.",
      image: "/Social Badge/Social Badge 2.png",
    },
  ];

  const benefitCards = [
    { id: 5, text: "Verified trust badge (visible on profile, listings, RFQs)", rotateClass: "rotateNeg2" },
    { id: 6, text: "Up to 25% discount on annual Grow, Scale, and Global plans", rotateClass: "rotateNeg6" },
    { id: 7, text: "Priority in search results and RFQ highlights", rotateClass: "rotateZero" },
    { id: 8, text: "Feature spotlights and private communities", rotateClass: "rotate6" },
    { id: 9, text: "Access to \"Social Impact Discount\" programs", rotateClass: "rotate2" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Inclusive <span>Business Empowerment</span>
          </h2>
          <p className={styles.subtitle}>
            We believe in leveling the playing field for entrepreneurs who are often left out of global trade. Our platform empowers.
          </p>
        </div>

        <div className={styles.empowermentGrid}>
          {empowermentCards.map((card) => (
            <div key={card.title} className={styles.empowermentCard}>
              <div className={styles.empowermentIcon}>
                <Image src={card.icon} alt={card.title} width={48} height={48} className="object-contain" />
              </div>
              <p className={styles.empowermentTitle}>{card.title}</p>
            </div>
          ))}
        </div>

        <div className={styles.socialSection}>
          <h3 className={styles.socialTitle}>Social Impact Badges</h3>
          <p className={styles.socialCopy}>
            Our sustainability commitment is not one-size-fits-all. We offer multiple Eco Tags based on a business&apos;s contribution.
          </p>

          <div className={styles.badgeList}>
            {socialBadges.map((badge) => (
              <div key={badge.name} className={styles.badgeCard}>
                <div className={styles.badgeImage}>
                  <Image src={badge.image} alt={badge.name} fill className="object-contain" />
                </div>
                <h4 className={styles.badgeName}>{badge.name}</h4>
                <p className={styles.badgeDescription}>{badge.description}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className={styles.bothHeading}>Both Come With</h3>

        <div className={styles.benefitGrid}>
          {benefitCards.map((card) => (
            <div key={card.id} className={`${styles.benefitCard} ${styles[card.rotateClass]}`}>
              <div className={styles.benefitIcon}>
                <Image src={`/icons/icon ${card.id}.png`} alt="Benefit icon" width={48} height={48} className="object-contain" />
              </div>
              <p className={styles.benefitText}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
