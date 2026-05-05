"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Home, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "About Us", href: "#", active: true },
    { name: "Services", href: "#", active: false },
    { name: "Features", href: "#", active: false },
    { name: "Career", href: "#", active: false },
    { name: "Contact Us", href: "#", active: false },
  ];

  return (
    <header className={styles.siteHeader}>
      <nav className={styles.mainNav}>
        <div className={`container ${styles.navbarInner}`}>
          <div className={styles.navbarLogo}>
            <Link href="/">
              <Image
                src="/logo/logo-header.png"
                alt="Pepagora Logo"
                width={210}
                height={60}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <ul className={styles.navbarLinks}>
            {navLinks.map((link) => (
              <li key={link.name} className={styles.navLinkItem}>
                <Link
                  href={link.href}
                  className={`${styles.navbarLink} ${link.active ? styles.activeLink : ""}`}
                >
                  {link.name}
                </Link>
                {link.active && <div className={styles.linkUnderline} />}
              </li>
            ))}
          </ul>

          <div className={styles.mobileMenuButton}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={styles.mobileToggle}
              type="button"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="icon-medium" /> : <Menu className="icon-medium" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className={`${styles.mobileMenu} ${styles.open}`}>
            <div className={styles.mobileMenuList}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={styles.mobileMenuLink}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className={styles.breadcrumbBar}>
        <div className={`container ${styles.breadcrumbInner}`}>
          <Home className={styles.iconSmall} />
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link href="#" className={styles.breadcrumbLink}>
            Company
          </Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbLabel}>Partnership Program</span>
        </div>
      </div>
    </header>
  );
}
