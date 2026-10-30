import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#0D4F55]/15 bg-[#F7F0E1]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Logo and tagline */}
          <div className="md:w-[280px] flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-8 h-8 rounded-sm overflow-hidden flex items-center justify-center flex-shrink-0 relative">
                <Image
                  src="/images/vishing_logo_without_words.jpeg"
                  alt="Vishinguard logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <span className="font-serif text-[18px] font-[900] text-[#0D4F55] tracking-tight">
                Vishinguard
              </span>
            </Link>
            <p className="text-[13px] leading-[1.6] text-[#4A8A91]">
              Din personliga beskyddare mot digitala bedrägerier. Kommer först till Android.
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
            <div>
              <div className="text-[11px] font-[600] tracking-[0.2em] uppercase text-[#0D4F55] mb-4">
                Navigering
              </div>
              <div className="space-y-3">
                <Link
                  href="/"
                  className="block text-[13px] text-[#4A8A91] hover:text-[#0D4F55] transition-colors"
                >
                  Hem
                </Link>
                <Link
                  href="/sa-fungerar-det"
                  className="block text-[13px] text-[#4A8A91] hover:text-[#0D4F55] transition-colors"
                >
                  Så fungerar det
                </Link>
                <Link
                  href="/kunskap"
                  className="block text-[13px] text-[#4A8A91] hover:text-[#0D4F55] transition-colors"
                >
                  Kunskap
                </Link>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-[600] tracking-[0.2em] uppercase text-[#0D4F55] mb-4">
                Juridik
              </div>
              <div className="space-y-3">
                <Link
                  href="/integritetspolicy"
                  className="block text-[13px] text-[#4A8A91] hover:text-[#0D4F55] transition-colors"
                >
                  Integritetspolicy
                </Link>
                <Link
                  href="/villkor"
                  className="block text-[13px] text-[#4A8A91] hover:text-[#0D4F55] transition-colors"
                >
                  Villkor
                </Link>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-[600] tracking-[0.2em] uppercase text-[#0D4F55] mb-4">
                Kontakt
              </div>
              <a
                href="mailto:info.vishinguard@gmail.com"
                className="text-[13px] text-[#4A8A91] hover:text-[#0D4F55] transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                info.vishinguard@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#0D4F55]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#4A8A91]">
            © Vishinguard. Alla rättigheter förbehållna.
          </span>
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#4A8A91]">
            Kommer först till Android.
          </span>
        </div>
      </div>
    </footer>
  );
}
