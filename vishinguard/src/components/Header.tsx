"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);

    // If currently on an informational/legal page without a form, standard navigation applies
    const waitlistElement = document.getElementById("waitlist");
    if (waitlistElement) {
      e.preventDefault();
      waitlistElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Hem", href: "/" },
    { name: "Så fungerar det", href: "/sa-fungerar-det" },
    { name: "Kunskap", href: "/kunskap" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F7F0E1] border-b border-[#0D4F55]/15">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => {
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 bg-[#0D4F55] rounded-sm flex items-center justify-center transition-colors group-hover:bg-[#063338]">
              <Shield className="w-5 h-5 text-[#F7F0E1]" />
            </div>
            <span className="font-serif text-[20px] font-[900] text-[#0D4F55] tracking-tight">
              Vishinguard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    if (pathname === link.href) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`text-[12px] font-[600] tracking-[0.2em] uppercase transition-colors ${
                    isActive
                      ? "text-[#0D4F55] font-[700]"
                      : "text-[#4A8A91] hover:text-[#0D4F55]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href={
                pathname === "/integritetspolicy" || pathname === "/villkor"
                  ? "/#waitlist"
                  : "#waitlist"
              }
              onClick={handleCtaClick}
              className="ml-2 px-5 py-2.5 bg-[#0D4F55] text-[#F7F0E1] text-[12px] font-[600] tracking-[0.15em] uppercase rounded-sm hover:bg-[#063338] transition-colors"
            >
              Gå med i väntelistan
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#0D4F55] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#0D4F55]/10 px-6 py-4 space-y-3 bg-[#F7F0E1]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (pathname === link.href) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`block text-[13px] font-[600] tracking-[0.15em] uppercase py-2 ${
                  isActive ? "text-[#0D4F55]" : "text-[#4A8A91]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href={
              pathname === "/integritetspolicy" || pathname === "/villkor"
                ? "/#waitlist"
                : "#waitlist"
            }
            onClick={handleCtaClick}
            className="block w-full text-center px-5 py-3 bg-[#0D4F55] text-[#F7F0E1] text-[12px] font-[600] tracking-[0.15em] uppercase rounded-sm mt-2"
          >
            Gå med i väntelistan
          </Link>
        </div>
      )}
    </header>
  );
}
