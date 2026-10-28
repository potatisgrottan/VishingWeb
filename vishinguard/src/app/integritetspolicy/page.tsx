import React from "react";
import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Integritetspolicy — Vishinguard",
  description:
    "Vishinguards integritetspolicy för lanseringsväntelistan. Vi samlar endast in e-post och delar aldrig din data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <div className="max-w-[720px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="text-[11px] font-[600] tracking-[0.25em] uppercase text-[#4A8A91] mb-6">
          Juridisk information
        </div>
        <h1 className="font-serif text-[42px] md:text-[56px] font-[300] text-[#063338] leading-[0.95] tracking-tight mb-8">
          Integritets<span className="font-[900] italic">policy</span>
        </h1>
        <div className="w-20 h-[2px] bg-[#0D4F55] mb-10" />

        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-[20px] font-[600] text-[#063338] mb-4">
              Vilken data samlar vi in?
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4A8A91]">
              Vishinguard värnar om din personliga integritet. När du anmäler dig till vår väntelista samlar vi endast in din e-postadress och information om du registrerar dig för dig själv eller för någon annan. Detta är den enda personliga information vi behandlar.
            </p>
          </section>

          <div className="h-[1px] bg-[#0D4F55]/10" />

          <section>
            <h2 className="font-serif text-[20px] font-[600] text-[#063338] mb-4">
              Hur används din data?
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4A8A91]">
              Vi använder uppgifterna enbart för att meddela dig när appen lanseras på Android. Vi skickar inga spammejl, inga nyhetsbrev från tredje part och inga kommersiella erbjudanden utanför appens lansering.
            </p>
          </section>

          <div className="h-[1px] bg-[#0D4F55]/10" />

          <section>
            <h2 className="font-serif text-[20px] font-[600] text-[#063338] mb-4">
              Dela med tredje part
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4A8A91]">
              Vi delar aldrig din e-postadress med tredje part. Din information stannar uteslutande hos Vishinguard och används strikt i enlighet med det samtycke du gett.
            </p>
          </section>

          <div className="h-[1px] bg-[#0D4F55]/10" />

          <section>
            <h2 className="font-serif text-[20px] font-[600] text-[#063338] mb-4">
              Dina rättigheter och radering
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4A8A91]">
              Du kan när som helst begära att få dina uppgifter borttagna från vår väntelista. Kontakta oss helt enkelt på{" "}
              <a
                href="mailto:info@vishinguard.se"
                className="text-[#0D4F55] hover:text-[#063338] underline underline-offset-2"
              >
                info@vishinguard.se
              </a>{" "}
              så raderar vi din e-postadress utan dröjsmål.
            </p>
          </section>

          <div className="h-[1px] bg-[#0D4F55]/10" />

          <section>
            <h2 className="font-serif text-[20px] font-[600] text-[#063338] mb-4">
              Kontakt
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4A8A91]">
              Vid frågor gällande personuppgiftshantering eller vår integritetspolicy, kontakta oss via{" "}
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
              <ShieldCheck className="w-5 h-5 text-[#0D4F55] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-serif text-[14px] font-[600] text-[#063338] mb-1">
                  Vår grundprincip
                </div>
                <p className="text-[13px] leading-[1.6] text-[#4A8A91]">
                  Vishinguard byggs på förtroende. Vår väntelista är den enda plats där vi ber om din kontaktuppgift – och vi behandlar den med samma omsorg och respekt som riddaren skyddar din mobil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
