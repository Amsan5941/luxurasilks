"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/collection", label: "Collection" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#FFE2E2]/10 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-24 lg:h-24 bg-white rounded-md shadow-sm border border-[#FFE2E2]/20 p-1.5 transition-all duration-300 group-hover:border-[#FFE2E2]/40 group-hover:shadow">
              <Image
                src="/images/logo/LuxuraSilks.png"
                alt="LuxuraSilks"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-base lg:text-lg text-[#2C2C2C] font-semibold leading-tight">
                Luxura Silks
              </span>
              <span className="text-[7px] sm:text-[8px] lg:text-[9px] text-[#FFE2E2] font-medium tracking-[0.12em] uppercase hidden sm:block">
                Handcrafted Elegance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-8 lg:space-x-12 flex-1 justify-center mx-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#2C2C2C] hover:text-[#FFE2E2] text-[10px] xs:text-xs sm:text-sm lg:text-base font-medium tracking-wide transition-colors duration-300 link-underline whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="flex-shrink-0">
            <Link
              href="/collection"
              className="btn-primary text-[9px] xs:text-[10px] sm:text-xs lg:text-sm tracking-widest uppercase px-2 sm:px-4 py-1.5 sm:py-2"
            >
              Explore
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
}
