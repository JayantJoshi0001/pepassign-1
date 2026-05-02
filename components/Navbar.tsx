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
    <header className="w-full">
      {/* Main Navbar */}
      <nav className="w-full bg-white border-b border-gray-100">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex flex-col pt-1">
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

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <div key={link.name} className="relative flex flex-col items-center">
                  <Link
                    href={link.href}
                    className={`text-[14px] font-bold transition-colors ${link.active ? "text-[#333333]" : "text-[#666666] hover:text-gray-900"
                      }`}
                  >
                    {link.name}
                  </Link>
                  {link.active && (
                    <div className="absolute -bottom-[31px] w-full h-[3px] bg-red-600"></div>
                  )}
                </div>
              ))}
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumb Bar */}
      <div className="w-full bg-[#f0f9f4] py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2.5 text-[12px] font-semibold">
          <Home className="w-4 h-4 text-[#888888]" />
          <span className="text-[#cccccc] font-light">/</span>
          <Link href="#" className="text-[#666666] hover:text-gray-900">Company</Link>
          <span className="text-[#cccccc] font-light">/</span>
          <span className="text-[#999999] font-normal">Partnership Program</span>
        </div>
      </div>
    </header>
  );
}
