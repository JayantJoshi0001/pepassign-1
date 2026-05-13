/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, ChevronDown } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import styles from "./Footer.module.css";

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
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

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

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerInner}>
        <div className={styles.footerTopGrid}>
          <div className={styles.footerBrandPanel}>
            <Link href="/" className={styles.footerLogoLink}>
              <Image
                src="/logo/logo-footer.png"
                alt="Pepagora Logo"
                width={150}
                height={40}
                className={styles.footerLogo}
              />
            </Link>

            <div className={styles.footerPromoStack}>
              <div className={`${styles.footerPromoCard} ${styles.footerPromoCardPrimary}`}>
                <div className={styles.footerPromoImageWrapper}>
                  <Image
                    src="/image 1.png"
                    alt="Supplier illustration"
                    width={90}
                    height={90}
                    className={styles.footerPromoImage}
                  />
                </div>
                <p className={styles.footerPromoLabel}>List your Company</p>
                <h3 className={styles.footerPromoTitle}>For Free</h3>
                <Link href="#" className={`${styles.footerPromoButton} ${styles.footerPromoButtonRed}`}>
                  Join as Supplier
                </Link>
              </div>

              <div className={`${styles.footerPromoCard} ${styles.footerPromoCardSecondary}`}>
                <p className={styles.footerPromoLabel}>Looking to</p>
                <h3 className={styles.footerPromoTitle}>Source Products?</h3>
                <Link href="#" className={`${styles.footerPromoButton} ${styles.footerPromoButtonDark}`}>
                  Post Buying Request
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.footerLinksGrid}>
            {footerColumns.map((section) => (
              <div key={section.title} className={`${styles.footerLinksSection} ${expandedSections[section.title] ? styles.expanded : ""}`}>
                <h4 className={styles.footerLinksTitle}>{section.title}</h4>
                <button
                  type="button"
                  className={styles.footerLinksSectionButton}
                  onClick={() => toggleSection(section.title)}
                  aria-expanded={expandedSections[section.title]}
                >
                  <span className={styles.footerLinksMobileTitle}>{section.title}</span>
                  <span className={styles.footerLinksToggleIcon}>+</span>
                </button>
                <ul className={styles.footerLinkList}>
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className={styles.footerRule} />

        <div className={styles.footerBottomGrid}>
          <div className={styles.footerLeftGroup}>
            <div className={styles.footerSocialLinks}>
              <Link href="#" className={styles.footerSocialLink} aria-label="Facebook">
                <img src="/careers/Facebook.png" alt="Facebook" width={32} height={32} className={styles.footerSocialIcon} />
              </Link>
              <Link href="#" className={styles.footerSocialLink} aria-label="Instagram">
                <img src="/careers/Instagram.png" alt="Instagram" width={32} height={32} className={styles.footerSocialIcon} />
              </Link>
              <Link href="#" className={styles.footerSocialLink} aria-label="YouTube">
                <img src="/careers/Youtube.png" alt="YouTube" width={32} height={32} className={styles.footerSocialIcon} />
              </Link>
              <Link href="#" className={styles.footerSocialLink} aria-label="Twitter">
                <img src="/careers/Twitter.png" alt="Twitter" width={32} height={32} className={styles.footerSocialIcon} />
              </Link>
              <Link href="#" className={styles.footerSocialLink} aria-label="LinkedIn">
                <img src="/careers/Linkedin.png" alt="LinkedIn" width={32} height={32} className={styles.footerSocialIcon} />
              </Link>
            </div>

            <div className={styles.footerLanguageSection}>
              <p className={styles.footerGlobalLabel}>Global Sites:</p>
              <div className={styles.footerLanguageList}>
                {languages.map((language) => (
                  <button
                    key={language}
                    type="button"
                    className={`${styles.footerLanguageItem} ${selectedLanguage === language ? styles.footerLanguageItemActive : ""}`}
                    onClick={() => handleLanguageChange(language)}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.footerNewsletterPanel}>
            <p className={styles.footerNewsletterLabel}>Subscribe to our Newsletter</p>
            <form className={styles.footerNewsletterForm} onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={styles.footerNewsletterInput}
              />
              <button className={styles.footerNewsletterButton} type="submit" disabled={subscribeLoading}>
                {subscribeLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className={styles.footerCopy}>
          <button className={styles.footerRegionDropdown} type="button">
            <span className={styles.footerRegionIcon}><Globe size={16} /></span>
            <span className={styles.footerRegionLabel}>Serving in :</span>
            <span className={styles.footerRegionValue}>{selectedRegion}</span>
            <span className={styles.footerRegionArrow}><ChevronDown size={14} /></span>
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
