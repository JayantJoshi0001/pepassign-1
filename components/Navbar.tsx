"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Home, Menu, X } from "lucide-react";

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
    <header className="site-header">
      <nav className="main-nav">
        <div className="container navbar-inner">
          <div className="navbar-logo">
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

          <div className="navbar-links">
            {navLinks.map((link) => (
              <div key={link.name} className="nav-link-item">
                <Link
                  href={link.href}
                  className={`navbar-link ${link.active ? "active" : ""}`}
                >
                  {link.name}
                </Link>
                {link.active && <div className="link-underline" />}
              </div>
            ))}
          </div>

          <div className="mobile-menu-button">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-toggle"
              type="button"
            >
              {isOpen ? <X className="icon-medium" /> : <Menu className="icon-medium" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mobile-menu open">
            <div className="mobile-menu-list">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="mobile-menu-link"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Home className="icon-small" />
          <span className="breadcrumb-separator">/</span>
          <Link href="#" className="breadcrumb-link">
            Company
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-label">Partnership Program</span>
        </div>
      </div>
    </header>
  );
}
