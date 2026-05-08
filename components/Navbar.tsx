"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Home, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

type NavbarLink = {
  name: string;
  href: string;
  active?: boolean;
};

type Breadcrumb = {
  label: string;
  href?: string;
};

type NavbarProps = {
  navLinks?: NavbarLink[];
  breadcrumbs?: Breadcrumb[];
  breadcrumbBg?: string;
};

const defaultNavLinks: NavbarLink[] = [
  { name: "About Us", href: "/", active: true },
  { name: "Services", href: "#", active: false },
  { name: "Features", href: "#", active: false },
  { name: "Career", href: "/careers", active: false },
  { name: "Contact Us", href: "#", active: false },
];

const defaultBreadcrumbs: Breadcrumb[] = [
  { label: "Company", href: "#" },
  { label: "Partnership Program" },
];

export default function Navbar({ navLinks = defaultNavLinks, breadcrumbs = defaultBreadcrumbs, breadcrumbBg = "#E5F0E2" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

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

      <div className={styles.breadcrumbBar} style={{ background: breadcrumbBg }}>
        <div className={`container ${styles.breadcrumbInner}`}>
          <Home className={styles.iconSmall} />
          {breadcrumbs.map((crumb, index) => (
            <div key={`${crumb.label}-${index}`} className={styles.crumbGroup}>
              <span className={styles.breadcrumbSeparator}>/</span>
              {crumb.href ? (
                <Link href={crumb.href} className={styles.breadcrumbLink}>
                  {crumb.label}
                </Link>
              ) : (
                <span className={styles.breadcrumbLabel}>{crumb.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
