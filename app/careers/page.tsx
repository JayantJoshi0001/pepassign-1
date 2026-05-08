import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersHero from "@/components/careers/CareersHero";
import OpeningsSection from "@/components/careers/OpeningsSection";
import WhyWorkSection from "@/components/careers/WhyWorkSection";
import PartOfSection from "@/components/careers/PartOfSection";
import ValuesSection from "@/components/careers/ValuesSection";
import SolvingSection from "@/components/careers/SolvingSection";
import FounderMessageSection from "@/components/careers/FounderMessageSection";
import GrowWithUsSection from "@/components/careers/GrowWithUsSection";
import styles from "./page.module.css";

const careerNavLinks = [
  { name: "About Us", href: "/" },
  { name: "Services", href: "#" },
  { name: "Features", href: "#" },
  { name: "Career", href: "/careers", active: true },
  { name: "Contact Us", href: "#" },
];

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#" },
  { label: "Leadership" },
];

export default function CareersPage() {
  return (
    <div className={styles.page}>
      <Navbar navLinks={careerNavLinks} breadcrumbs={breadcrumbs} breadcrumbBg="#ffffff" />
      <main>
        <CareersHero />
        <OpeningsSection />
        <WhyWorkSection />
        <PartOfSection />
        <ValuesSection />
        <SolvingSection />
        <FounderMessageSection />
        <GrowWithUsSection />
      </main>
      <Footer />
    </div>
  );
}
