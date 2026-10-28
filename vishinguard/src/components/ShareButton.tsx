"use client";

import React, { useState, useEffect } from "react";
import { Share2, X } from "lucide-react";

export default function ShareButton() {
  const [showFallback, setShowFallback] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("https://vishinguard.se/kunskap");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Vishinguard – Lär dig känna igen bedrägerier",
          text: "Så här ser dagens bedrägeriförsök ut. Dela vidare och skydda någon du tycker om.",
          url: currentUrl,
        });
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          setShowFallback(true);
        }
      }
    } else {
      setShowFallback(true);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch {
      // Fallback
    }
  };

  // Auto-dismiss fallback box after 5 seconds
  useEffect(() => {
    if (!showFallback) return;
    const timer = setTimeout(() => {
      setShowFallback(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [showFallback]);

  return (
    <div className="relative inline-block w-full max-w-[480px]">
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-3 px-8 h-12 bg-[#0D4F55] text-[#F7F0E1] text-[13px] font-[700] tracking-[0.1em] uppercase rounded-sm hover:bg-[#063338] transition-colors cursor-pointer"
      >
        <Share2 className="w-4 h-4" />
        Dela med någon du tycker om
      </button>

      {showFallback && (
        <div className="mt-6 bg-[#EAE1CC] rounded-sm p-4 border border-[#0D4F55]/10 relative text-left shadow-md">
          <button
            onClick={() => setShowFallback(false)}
            aria-label="Stäng delningsruta"
            className="absolute top-3 right-3 text-[#4A8A91] hover:text-[#063338]"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="text-[11px] font-[600] tracking-[0.1em] uppercase text-[#4A8A91] mb-2">
            Kopiera och dela länk
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={currentUrl}
              onFocus={(e) => e.target.select()}
              className="flex-1 h-10 px-3 bg-[#F7F0E1] border border-[#0D4F55]/15 rounded-sm text-[13px] text-[#063338] font-sans focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className="h-10 px-4 bg-[#0D4F55] text-[#F7F0E1] text-[12px] font-[600] rounded-sm hover:bg-[#063338] transition-colors cursor-pointer flex-shrink-0"
            >
              {copied ? "Kopierad!" : "Kopiera"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
