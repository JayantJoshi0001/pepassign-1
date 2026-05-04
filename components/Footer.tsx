"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, ChevronDown } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

const footerColumns = [
  {
    title: "Company",
    links: [
      { name: "About Pepagora", href: "#" },
      { name: "Innovation at Pepagora", href: "#" },
      { name: "Sustainability at Pepagora", href: "#" },
      { name: "Our Vision & Journey", href: "#" },
      { name: "Governance & Leadership", href: "#" },
      { name: "Media & Press", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Blog",
    links: [
      { name: "Sales", href: "#" },
      { name: "Sourcing", href: "#" },
      { name: "Marketing", href: "#" },
      { name: "Product Updates", href: "#" },
    ],
  },
  {
    title: "Browse by Industries",
    links: [
      { name: "Apparel & Fashion", href: "#" },
      { name: "Industrial Equipment & Machinery", href: "#" },
      { name: "Home & Lifestyle", href: "#" },
      { name: "Health & Personal Care", href: "#" },
      { name: "Construction & Real Estate", href: "#" },
      { name: "Electronics & Electrical", href: "#" },
      { name: "Automotive & Transport", href: "#" },
      { name: "Raw Materials & Chemicals", href: "#" },
      { name: "Sports & Entertainment", href: "#" },
      { name: "Tools & Hardware", href: "#" },
      { name: "Packaging & Printing", href: "#" },
      { name: "Office Supplies & Equipment", href: "#" },
      { name: "Service & Support", href: "#" },
    ],
  },
  {
    title: "Support & Legal",
    links: [
      { name: "Help Center", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Contact Support", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Cookie Preferences", href: "#" },
      { name: "Product Listing Policy", href: "#" },
      { name: "Refund & Cancellation", href: "#" },
      { name: "Data Protection Guidelines", href: "#" },
      { name: "Sitemap", href: "#" },
    ],
  },
  {
    title: "Business Solutions",
    links: [
      { name: "Connect", href: "#" },
      { name: "Sell", href: "#" },
      { name: "Source", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Pricing", href: "#" },
      { name: "SME Stories", href: "#" },
      { name: "Subscribe to our newsletter", href: "#" },
    ],
  },
];

const languages = [
  "English",
  "Español",
  "Deutsch",
  "Français",
  "Português",
  "Bahasa",
  "Indonesia",
  "العربية",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeLoading, setSubscribeLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedRegion] = useState("India");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const langCode = {
        English: "en",
        Español: "es",
        Deutsch: "de",
        Français: "fr",
        Português: "pt",
        Bahasa: "id",
        Indonesia: "id",
        العربية: "ar",
      }[selectedLanguage] || "en";
      document.documentElement.lang = langCode;
    }
  }, [selectedLanguage]);

  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      setToast({ message: "Please enter your email.", type: "error" });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    setSubscribeLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setSubscribeLoading(false);
    setEmail("");
    setToast({ message: "Subscribed successfully!", type: "success" });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setToast({ message: `Site content switched to ${language}`, type: "success" });
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top-grid">
          <div className="footer-brand-panel">
            <Link href="/" className="footer-logo-link">
              <Image
                src="/logo/logo-footer.png"
                alt="Pepagora Logo"
                width={150}
                height={40}
                className="footer-logo"
              />
            </Link>

            <div className="footer-promo-stack">
              <div className="footer-promo-card footer-promo-card-primary">
                <div className="footer-promo-image-wrapper">
                  <Image
                    src="/image 1.png"
                    alt="Supplier illustration"
                    width={90}
                    height={90}
                    className="footer-promo-image"
                  />
                </div>
                <p className="footer-promo-label">List your Company</p>
                <h3 className="footer-promo-title">For Free</h3>
                <Link href="#" className="footer-promo-button red">
                  Join as Supplier
                </Link>
              </div>

              <div className="footer-promo-card footer-promo-card-secondary">
                <p className="footer-promo-label">Looking to</p>
                <h3 className="footer-promo-title">Source Products?</h3>
                <Link href="#" className="footer-promo-button dark">
                  Post Buying Request
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-links-grid">
            {footerColumns.map((section) => (
              <div key={section.title} className="footer-links-section">
                <h4 className="footer-links-title">{section.title}</h4>
                <ul className="footer-link-list">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="footer-rule" />

        <div className="footer-bottom-grid">
          <div className="footer-left-group">
            <div className="footer-social-links">
              <Link href="#" className="footer-social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24H12.82v-9.293H9.692V11.08h3.127V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.764v2.313h3.587l-.467 3.627h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z"/></svg>
              </Link>
              <Link href="#" className="footer-social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </Link>
              <Link href="#" className="footer-social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a2.996 2.996 0 0 0-2.106-2.112C19.58 3.6 12 3.6 12 3.6s-7.58 0-9.392.474A2.996 2.996 0 0 0 .502 6.186 31.385 31.385 0 0 0 0 12a31.385 31.385 0 0 0 .502 5.814 2.996 2.996 0 0 0 2.106 2.112C4.42 20.4 12 20.4 12 20.4s7.58 0 9.392-.474a2.996 2.996 0 0 0 2.106-2.112A31.385 31.385 0 0 0 24 12a31.385 31.385 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
              <Link href="#" className="footer-social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.958 4.958 0 0 0 2.163-2.723 9.864 9.864 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.381 4.482A13.978 13.978 0 0 1 1.671 3.149a4.822 4.822 0 0 0-.666 2.475 4.92 4.92 0 0 0 2.188 4.096 4.904 4.904 0 0 1-2.228-.616v.06a4.92 4.92 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.923 4.923 0 0 0 4.6 3.417 9.867 9.867 0 0 1-6.102 2.105c-.396 0-.787-.023-1.17-.068a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.59z"/></svg>
              </Link>
              <Link href="#" className="footer-social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.23 0H1.771C.792 0 0 .776 0 1.734v20.532C0 23.224.792 24 1.771 24H22.23C23.208 24 24 23.224 24 22.266V1.734C24 .776 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.64c-1.14 0-2.064-.934-2.064-2.086 0-1.152.924-2.086 2.064-2.086s2.065.934 2.065 2.086c0 1.152-.925 2.086-2.065 2.086zM20.452 20.452h-3.556v-5.518c0-1.314-.026-3.007-1.833-3.007-1.836 0-2.117 1.433-2.117 2.91v5.615h-3.556V9h3.414v1.561h.049c.476-.9 1.637-1.851 3.369-1.851 3.604 0 4.27 2.372 4.27 5.456v6.286z"/></svg>
              </Link>
            </div>

            <div className="footer-language-section">
              <p className="footer-global-label">Global Sites:</p>
              <div className="footer-language-list">
                {languages.map((language) => (
                  <button
                    key={language}
                    type="button"
                    className={`footer-language-item ${selectedLanguage === language ? "active" : ""}`}
                    onClick={() => handleLanguageChange(language)}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-newsletter-panel">
            <p className="footer-newsletter-label">Subscribe to our Newsletter</p>
            <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="footer-newsletter-input"
              />
              <button className="footer-newsletter-button" type="submit" disabled={subscribeLoading}>
                {subscribeLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className="footer-copy">
          <button className="footer-region-dropdown" type="button">
            <span className="footer-region-icon"><Globe size={16} /></span>
            <span className="footer-region-label">Serving in :</span>
            <span className="footer-region-value">{selectedRegion}</span>
            <span className="footer-region-arrow"><ChevronDown size={14} /></span>
          </button>
        </div>
      </div>

      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      )}
    </footer>
  );
}
