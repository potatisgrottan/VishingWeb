import React from "react";
import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Villkor — Vishinguard",
  description:
    "Användarvillkor för Vishinguards webbplats och intresseanmälan till väntelistan.",
};

export default function TermsPage() {
  return (
    <main className="flex-1">
      <div className="max-w-[720px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="text-[11px] font-[600] tracking-[0.25em] uppercase text-[#4A8A91] mb-6">
          Juridisk information
        </div>
        <h1 className="font-serif text-[42px] md:text-[56px] font-[300] text-[#063338] leading-[0.95] tracking-tight mb-8">
          Vill<span className="font-[900] italic">kor</span>
        </h1>
        <div className="w-20 h-[2px] bg-[#0D4F55] mb-10" />

        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-[20px] font-[600] text-[#063338] mb-4">
              Anmälan till väntelistan
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4A8A91]">
              Genom att anmäla dig till Vishinguards väntelista godkänner du att vi sparar din e-postadress för att skicka information om lanseringen. Anmälan är kostnadsfri, icke-bindande och kan när som helst återkallas.
            </p>
          </section>

          <div className="h-[1px] bg-[#0D4F55]/10" />

          <section>
            <h2 className="font-serif text-[20px] font-[600] text-[#063338] mb-4">
              Tillhandahållande i befintligt skick
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4A8A91]">
              Webbplatsen tillhandahålls i befintligt skick och vi reserverar oss för rätten att uppdatera innehåll och funktioner inför den kommande lanseringen av appen. Vishinguard lämnar inga garantier för att informationen på webbplatsen är felfri eller fullständig vid varje enskilt tillfälle.
            </p>
          </section>

          <div className="h-[1px] bg-[#0D4F55]/10" />

          <section>
            <h2 className="font-serif text-[20px] font-[600] text-[#063338] mb-4">
              Framtida applikationsfunktioner
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4A8A91]">
              Appens funktioner, design och tillgänglighet på Google Play Store kan komma att ändras fram till det officiella lanseringsdatumet. Beskrivningar på denna webbplats avspeglar den planerade funktionaliteten i skrivande stund.
            </p>
          </section>

          <div className="h-[1px] bg-[#0D4F55]/10" />

          <section>
            <h2 className="font-serif text-[20px] font-[600] text-[#063338] mb-4">
              Immateriella rättigheter
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4A8A91]">
              Allt material på denna webbplats, inklusive logotyp, grafik, texter och varumärket Vishinguard, tillhör Vishinguard och är skyddat enligt svensk och internationell upphovsrättslagstiftning.
            </p>
          </section>

          <div className="h-[1px] bg-[#0D4F55]/10" />

          <section>
            <h2 className="font-serif text-[20px] font-[600] text-[#063338] mb-4">
              Kontakt
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4A8A91]">
              Vid frågor gällande dessa villkor, kontakta oss gärna på{" "}
              <a
                href="mailto:info@vishinguard.se"
                className="text-[#0D4F55] hover:text-[#063338] underline underline-offset-2"
              >
                info@vishinguard.se
              </a>
              .
            </p>
          </section>

          <div className="mt-12 p-6 bg-[#EAE1CC] rounded-sm border border-[#0D4F55]/10">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-[#0D4F55] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-serif text-[14px] font-[600] text-[#063338] mb-1">
                  Senast uppdaterad
                </div>
                <p className="text-[13px] leading-[1.6] text-[#4A8A91]">
                  Dessa villkor uppdaterades senast i januari 2025 inför lanseringen av Vishinguard för Android.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
