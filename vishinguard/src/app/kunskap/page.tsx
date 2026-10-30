import React from "react";
import type { Metadata } from "next";
import { Sword, AlertTriangle, Heart } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Kunskapsbank — Vishinguard | Tips & aktuella bedrägerier i Sverige",
  description:
    "Lär dig känna igen bedrägerier. Fem gyllene tips och löpande uppdateringar om bluff-SMS, falska bankuppringare och aktuella hot.",
};

export default function KnowledgePage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A8A91' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="max-w-[800px]">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[11px] font-[600] tracking-[0.25em] uppercase text-[#4A8A91]">
                Kunskapsbank
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A8A91]" />
              <span className="text-[11px] font-[600] tracking-[0.25em] uppercase text-[#4A8A91]">
                Uppdateras löpande
              </span>
            </div>
            <h1 className="font-serif text-[36px] sm:text-[44px] md:text-[54px] lg:text-[68px] font-[300] leading-[1.18] md:leading-[1.15] text-[#063338] tracking-normal">
              Lär dig känna igen
              <br />
              <span className="font-[900] italic">bedrägerier</span>
            </h1>
            <div className="w-20 h-[2px] bg-[#0D4F55] mt-8 mb-6" />
            <p className="font-serif text-[18px] md:text-[22px] font-[300] leading-[1.45] text-[#4A8A91] max-w-[560px]">
              Ju mer du vet, desto svårare är det för bedragarna. Här samlar Vishinguard sina bästa tips och de senaste varningarna från verkliga livet.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Tips that always work */}
      <section className="border-t border-[#0D4F55]/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91] mb-4">
            5 tips som alltid fungerar
          </div>
          <h2 className="font-serif text-[36px] md:text-[48px] font-[300] text-[#063338] leading-[1.1] mb-12 max-w-[600px]">
            Fem regler som <span className="font-[900] italic">alltid gäller</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "Lita inte på uppringarens ord",
                description:
                  "En bedragare kan låta övertygande och ha detaljerad information. Kom ihåg att din bank aldrig ringer och ber dig om koder, lösenord eller BankID.",
              },
              {
                number: "02",
                title: "Bryt samtalet och ring tillbaka på ett känt nummer",
                description:
                  "Slå numret som står på baksidan av ditt betalkort eller på bankens officiella webbplats. Ring aldrig tillbaka till numret som nyss ringde upp dig.",
              },
              {
                number: "03",
                title: "Klicka aldrig på länkar i brådskande meddelanden",
                description:
                  "Bedragare skapar konstlad brådska för att du ska agera utan att tänka. Öppna istället appen eller webbplatsen direkt via din webbläsare.",
              },
              {
                number: "04",
                title: "Dela aldrig koder, lösenord eller personnummer",
                description:
                  "Dessa uppgifter är nycklarna till ditt liv. Ge dem aldrig till någon som kontaktar dig oväntat, oavsett vem de påstår sig representera.",
              },
              {
                number: "05",
                title: "Be alltid om att få återkomma",
                description:
                  "Det är helt okej att säga nej och avsluta ett samtal. En seriös avsändare respekterar alltid att du vill kontrollera uppgifterna på egen hand först.",
              },
            ].map((tip, i) => (
              <div key={i} className="flex gap-6 lg:gap-10 items-start">
                <div className="flex-shrink-0 w-16 lg:w-20 text-right">
                  <span className="font-serif text-[48px] lg:text-[64px] font-[900] text-[#0D4F55]/10 leading-none">
                    {tip.number}
                  </span>
                </div>
                <div className="flex-1 pt-3 lg:pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 bg-[#0D4F55] rounded-sm flex items-center justify-center">
                      <Sword className="w-3.5 h-3.5 text-[#F7F0E1]" />
                    </div>
                    <div className="w-8 h-[1px] bg-[#0D4F55]/20" />
                  </div>
                  <h3 className="font-serif text-[20px] lg:text-[24px] font-[600] text-[#063338] mb-3 leading-[1.25]">
                    {tip.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[#4A8A91] max-w-[600px]">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Det här ser bedrägarna ut just nu" */}
      <section className="bg-[#EAE1CC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="lg:w-[320px] flex-shrink-0">
              <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#C7452E] mb-4">
                Det här ser bedrägarna ut just nu
              </div>
              <h2 className="font-serif text-[36px] md:text-[42px] font-[300] text-[#063338] leading-[1.1] mb-6">
                Aktuella varningar i <span className="font-[900] italic">Sverige</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#C7452E] mb-6" />
              <p className="text-[14px] leading-[1.7] text-[#4A8A91] mb-4">
                Här uppdaterar vi löpande med exempel på pågående bedrägeriförsök i Sverige. Läs, dela och hjälp någon du tycker om att inte bli lurad.
              </p>
              <div className="text-[12px] font-[600] text-[#4A8A91] italic">
                Uppdateras när nya bedrägerier upptäcks.
              </div>
            </div>

            <div className="flex-1 space-y-6">
              {[
                {
                  type: "SMS-bluff",
                  date: "Aktuell varning",
                  title: "Bluff-SMS om utebliven leverans",
                  description:
                    "Ett SMS påstår att din leverans misslyckats och ber dig klicka på en länk för att boka om eller betala en tullavgift. Länken leder till en falsk sida som stjäl dina kortuppgifter och BankID.",
                  warning: "Klicka aldrig på länkar i SMS om paket du inte väntar på",
                },
                {
                  type: "Vishing",
                  date: "Hög risk",
                  title: "Falska bankuppringare",
                  description:
                    "Någon ringer och påstår sig vara från din bank eller säkerhetsavdelningen. De säger att ditt konto är hotat och ber dig öppna bankappen för att 'spärra' det. Banken ringer aldrig på detta sätt.",
                  warning: "Lägg på luren omedelbart och ring din bank direkt",
                },
                {
                  type: "Sociala medier",
                  date: "Pågående kampanj",
                  title: "Vinnarlott på sociala medier",
                  description:
                    "Ett meddelande eller annons påstår att du vunnit en stor summa pengar, presentkort eller en telefon. För att få ut vinsten behöver du betala en avgift eller lämna ut personnummer och koder.",
                  warning: "Inga riktiga vinster kräver förskottsbetalning",
                },
              ].map((scam, i) => (
                <div
                  key={i}
                  className="bg-[#F7F0E1] rounded-sm p-6 lg:p-8 border border-[#0D4F55]/8 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-[600] tracking-[0.25em] uppercase text-[#C7452E] bg-[#C7452E]/5 px-2.5 py-1 rounded-sm">
                      {scam.type}
                    </span>
                    <span className="text-[11px] text-[#4A8A91]">{scam.date}</span>
                  </div>
                  <h3 className="font-serif text-[18px] lg:text-[20px] font-[600] text-[#063338] mb-3 leading-[1.3]">
                    {scam.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[#4A8A91] mb-4">
                    {scam.description}
                  </p>
                  <div className="flex items-center gap-2 pt-2 border-t border-[#0D4F55]/8">
                    <AlertTriangle className="w-4 h-4 text-[#C7452E] flex-shrink-0" />
                    <span className="text-[12px] font-[600] text-[#C7452E]">
                      {scam.warning}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Share section */}
      <section className="border-t border-[#0D4F55]/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="max-w-[600px] mx-auto text-center">
            <div className="w-16 h-16 bg-[#0D4F55] rounded-sm flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Heart className="w-8 h-8 text-[#F7F0E1]" />
            </div>
            <h2 className="font-serif text-[28px] md:text-[36px] font-[300] text-[#063338] leading-[1.1] mb-4">
              Dela med <span className="font-[900] italic">någon du tycker om</span>
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4A8A91] mb-8">
              Kunskap och samtal är det starkaste skyddet mot bedragare. Skicka denna sida till dina föräldrar, en vän eller en släkting så att de har verktygen att genomskåda försöken.
            </p>

            <ShareButton />
          </div>
        </div>
      </section>

      {/* Bottom CTA (Dark variant) */}
      <section className="bg-[#063338] text-[#F7F0E1]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="max-w-[800px] mx-auto text-center mb-12">
            <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91] mb-4">
              Bli en av de första
            </div>
            <h2 className="font-serif text-[36px] md:text-[48px] font-[300] leading-[1.1] mb-6">
              Håll dig ett steg före <span className="font-[900] italic">bedrägarna</span>
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#F7F0E1]/80">
              Anmäl dig till väntelistan och få besked så snart Vishinguard finns redo att ladda ner till Android.
            </p>
          </div>

          <div className="max-w-[560px] mx-auto">
            <WaitlistForm
              id="waitlist"
              sourcePage="kunskap"
              sourceSection="cta-section"
              variant="dark"
              title="Håll dig ett steg före bedrägarna"
              subtitle="Skriv upp dig så meddelar vi dig när appen finns att ladda ner till din telefon. Första versionen släpps till Android."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
