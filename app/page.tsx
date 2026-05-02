import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ESGSection from "@/components/ESGSection";
import EcoBadgeSection from "@/components/EcoBadgeSection";
import InclusionSection from "@/components/InclusionSection";
import GoalsSection from "@/components/GoalsSection";
import CTASection from "@/components/CTASection";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ESGSection />
        <EcoBadgeSection />
        <InclusionSection />
        <GoalsSection />
        <CTASection />
        <FounderSection />
      </main>
      <Footer />
    </div>
  );
}
