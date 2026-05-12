import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPage from "@/components/contact/ContactPage";

const contactNavLinks = [
  { name: "About Us", href: "/" },
  { name: "Services", href: "#" },
  { name: "Features", href: "#" },
  { name: "Career", href: "/careers" },
  { name: "Contact Us", href: "/contact", active: true },
];

export const metadata: Metadata = {
  title: "Contact | Pepagora",
  description: "Contact Pepagora for support, partnerships, press, and careers.",
};

export default function ContactRoute() {
  return (
    <div className="main-page">
      <Navbar navLinks={contactNavLinks} showBreadcrumbs={false} />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}