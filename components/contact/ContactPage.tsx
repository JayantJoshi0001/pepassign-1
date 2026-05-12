import styles from "./ContactPage.module.css";
import ContactHero from "./ContactHero";
import GetInTouchSection from "./GetInTouchSection";
import PartnershipSection from "./PartnershipSection";
import SupportCardsSection from "./SupportCardsSection";
import CareersPromotionSection from "./CareersPromotionSection";
import FutureOfBusinessSection from "./FutureOfBusinessSection";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <ContactHero />
      <GetInTouchSection />
      <PartnershipSection />
      <SupportCardsSection />
      <CareersPromotionSection />
      <FutureOfBusinessSection />
    </div>
  );
}