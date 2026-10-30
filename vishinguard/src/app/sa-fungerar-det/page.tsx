import React from "react";
import type { Metadata } from "next";
import {
  Radio,
  BrainCircuit,
  ShieldAlert,
  Sword,
  CheckCircle,
  AlertTriangle,
  Bell,
  Cpu,
  Database,
  Users,
  Code,
  Eye,
} from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Så fungerar det — Vishinguard | Teknisk förklaring & AI-skydd",
  description:
    "Tre enkla steg mellan dig och en säkrare vardag: Insamling, AI-analys och Ingrepp. Lär dig om Bankskydd och Notisanalys.",
};

export default function KnowMorePage() {
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
                Teknisk genomgång
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A8A91]" />
              <span className="text-[11px] font-[600] tracking-[0.25em] uppercase text-[#4A8A91]">
                Läsningstid 3 min
              </span>
            </div>
            <h1 className="font-serif text-[36px] sm:text-[44px] md:text-[54px] lg:text-[68px] font-[300] leading-[1.18] md:leading-[1.15] text-[#063338] tracking-normal">
              Så fungerar
              <br />
              <span className="font-[900] italic">Vishinguard</span>
            </h1>
            <div className="w-20 h-[2px] bg-[#0D4F55] mt-8 mb-6" />
            <p className="font-serif text-[18px] md:text-[22px] font-[300] leading-[1.45] text-[#4A8A91] max-w-[560px]">
              Tre enkla steg mellan dig och en säkrare vardag. Lokal AI på din telefon med uppgift att skydda dig och din data.
            </p>
          </div>
        </div>
      </section>

      {/* The 3 Steps */}
      <section className="border-t border-[#0D4F55]/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                label: "Insamling",
                title: "1. Insamling",
                description:
                  "Appen bevakar samtal, SMS, e-post och notifieringar från appar som Messenger och WhatsApp. Den läser endast innehållet i nya meddelanden från avsändare som inte redan finns i din telefonbok. Ingenting sparas – så fort AI:n har analyserat texten försvinner informationen igen.",
                icon: Radio,
              },
              {
                step: "02",
                label: "AI-analys",
                title: "2. AI-analys",
                description:
                  "Med hjälp av artificiell intelligens analyseras mönster, avsändare och innehåll i realtid. AI:n letar efter varningstecken som kända bluffmetoder, hotfulla formuleringar eller ovanliga förfrågningar. Allt sker direkt i din telefon via lokala modeller.",
                icon: BrainCircuit,
              },
              {
                step: "03",
                label: "Ingrepp",
                title: "3. Ingrepp",
                description:
                  "Om något ser misstänkt ut kliver riddaren in. Du får en tydlig varning på skärmen som ger dig tid att stanna upp och tänka. Ibland räcker det för att stoppa bedrägeriet innan det ens börjar.",
                icon: ShieldAlert,
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="mb-6">
                  <span className="font-serif text-[72px] font-[900] text-[#0D4F55]/10 leading-none">
                    {item.step}
                  </span>
                  <div className="flex items-center gap-3 -mt-4 relative">
                    <div className="w-8 h-8 bg-[#0D4F55] rounded-sm flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-[#F7F0E1]" />
                    </div>
                    <span className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#C7452E]">
                      {item.label}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-[22px] font-[600] text-[#063338] mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#4A8A91]">
                  {item.description}
                </p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-16 -right-6 w-12 h-[1px] bg-[#0D4F55]/15" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Protection Section */}
      <section className="bg-[#EAE1CC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1">
              <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91] mb-4">
                Skyddsfunktion
              </div>
              <h2 className="font-serif text-[36px] md:text-[48px] font-[300] text-[#063338] leading-[1.1] mb-6">
                Bank<span className="font-[900] italic">skydd</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#0D4F55] mb-8" />
              <p className="text-[16px] leading-[1.7] text-[#4A8A91] mb-6 max-w-[520px]">
                En av de farligaste situationerna är när någon ringer och låtsas vara från din bank samtidigt som de försöker få dig att öppna bankappen. Om Vishinguard flaggat samtalet som misstänkt och du försöker öppna din bankapp visas en varning som täcker hela skärmen i fem sekunder. Du får information om varför det är riskfyllt och kan sedan själv välja om du vill fortsätta eller avbryta.
              </p>
              <div className="space-y-4">
                {[
                  "Identifierar bedrägerisamtal i realtid under pågående samtal",
                  "Låser skärmen mot bankappen i 5 sekunder med tydlig förklaring",
                  "Ger dig andrum och kontroll innan BankID eller signering kan genomföras",
                  "Minskar risken för överilade beslut framkallade av stress och manipulation",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Sword className="w-4 h-4 text-[#C7452E] flex-shrink-0 mt-1" />
                    <span className="text-[14px] leading-[1.5] text-[#063338]/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-[400px] flex-shrink-0 w-full">
              <div className="bg-[#F7F0E1] rounded-sm border border-[#0D4F55]/10 overflow-hidden shadow-sm">
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#C7452E] animate-pulse" />
                    <span className="text-[10px] font-[600] tracking-[0.2em] uppercase text-[#C7452E]">
                      Varning aktiverad
                    </span>
                  </div>
                  <div className="bg-[#063338] rounded-sm p-5 mb-4">
                    <div className="flex items-start gap-3">
                      <ShieldAlert className="w-6 h-6 text-[#C7452E] flex-shrink-0" />
                      <div>
                        <div className="font-serif text-[16px] font-[600] text-[#F7F0E1] mb-1">
                          Bankappen tillfälligt pausad
                        </div>
                        <div className="text-[12px] leading-[1.5] text-[#F7F0E1]/70">
                          Ett pågående samtal har flaggats som misstänkt bankbluff. Öppna inte bankappen på uppmaning av någon i telefonen.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 h-10 bg-[#0D4F55] text-[#F7F0E1] text-[12px] font-[600] rounded-sm hover:bg-[#063338] transition-colors">
                      Avbryt samtalet
                    </button>
                    <button className="flex-1 h-10 border border-[#0D4F55]/20 text-[#4A8A91] text-[12px] font-[600] rounded-sm hover:border-[#0D4F55]/40 transition-colors">
                      Jag litar på personen
                    </button>
                  </div>
                </div>
                <div className="px-6 py-3 bg-[#EAE1CC] border-t border-[#0D4F55]/10">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#4A8A91]">
                    Figur 1: Bankskydd skyddar under samtalet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notification Analysis Section */}
      <section className="border-t border-[#0D4F55]/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
            <div className="flex-1">
              <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91] mb-4">
                Skyddsfunktion
              </div>
              <h2 className="font-serif text-[36px] md:text-[48px] font-[300] text-[#063338] leading-[1.1] mb-6">
                Notis<span className="font-[900] italic">analys</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#0D4F55] mb-8" />
              <p className="text-[16px] leading-[1.7] text-[#4A8A91] mb-6 max-w-[520px]">
                Bedrägerier kommer inte bara via samtal och SMS. Därför skannar Vishinguard även notifieringar från din vanliga SMS-app, WhatsApp, Messenger, Gmail och Outlook. Om en okänd avsändare skickar ett meddelande med misstänkt innehåll varnar riddaren dig direkt.
              </p>
              <div className="space-y-4">
                {[
                  "Skannar avsändare och URL-strukturer utan att öppna apparna",
                  "Avslöjar bluffar om uteblivna paket, vinster och kontobegränsningar",
                  "Helt privat: analyserar texten lokalt och raderar den direkt",
                  "Varnar innan du klickar på falska webbsidor och formulär",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Eye className="w-4 h-4 text-[#C7452E] flex-shrink-0 mt-1" />
                    <span className="text-[14px] leading-[1.5] text-[#063338]/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-[400px] flex-shrink-0 w-full">
              <div className="bg-[#F7F0E1] rounded-sm border border-[#0D4F55]/10 overflow-hidden shadow-sm">
                <div className="p-6 pb-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-[#EAE1CC] rounded-sm border border-[#0D4F55]/8">
                      <div className="w-10 h-10 bg-[#0D4F55] rounded-sm flex items-center justify-center flex-shrink-0">
                        <Bell className="w-5 h-5 text-[#F7F0E1]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] font-[600] text-[#063338] truncate">
                          Swish
                        </div>
                        <div className="text-[11px] text-[#4A8A91] truncate">
                          Betalning från kontakt godkänd
                        </div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-[#0D4F55] flex-shrink-0" />
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-[#C7452E]/5 rounded-sm border border-[#C7452E]/20">
                      <div className="w-10 h-10 bg-[#C7452E] rounded-sm flex items-center justify-center flex-shrink-0">
                        <Bell className="w-5 h-5 text-[#F7F0E1]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] font-[600] text-[#063338] truncate">
                          Okänt nummer (SMS)
                        </div>
                        <div className="text-[11px] text-[#C7452E] truncate">
                          Varning: Falsk länk om paketleverans upptäckt
                        </div>
                      </div>
                      <AlertTriangle className="w-5 h-5 text-[#C7452E] flex-shrink-0" />
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-[#EAE1CC] rounded-sm border border-[#0D4F55]/8">
                      <div className="w-10 h-10 bg-[#0D4F55] rounded-sm flex items-center justify-center flex-shrink-0">
                        <Bell className="w-5 h-5 text-[#F7F0E1]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] font-[600] text-[#063338] truncate">
                          WhatsApp (Familj)
                        </div>
                        <div className="text-[11px] text-[#4A8A91] truncate">
                          Nytt meddelande från känd kontakt
                        </div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-[#0D4F55] flex-shrink-0" />
                    </div>
                  </div>
                </div>
                <div className="px-6 py-3 bg-[#EAE1CC] border-t border-[#0D4F55]/10">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#4A8A91]">
                    Figur 2: Notisanalys i realtid
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="bg-[#063338] text-[#F7F0E1]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="max-w-[800px]">
            <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91] mb-4">
              Allt sker i din telefon
            </div>
            <h2 className="font-serif text-[36px] md:text-[48px] font-[300] leading-[1.1] mb-8">
              Allt sker <span className="font-[900] italic">i din telefon</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#4A8A91] mb-8" />
            <p className="text-[16px] leading-[1.7] text-[#F7F0E1]/80 mb-10 max-w-[600px]">
              Vishinguard arbetar helt lokalt på din Android-telefon. Dina samtal, meddelanden och notifieringar skickas aldrig till någon server. Analysen görs på plats, och när den är klar finns ingen kvarstående information kvar.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Cpu,
                  title: "Lokal maskininlärning",
                  desc: "Neurala nätverk körs direkt i telefonens processor utan internetberoende.",
                },
                {
                  icon: Database,
                  title: "Ingen molnlagring",
                  desc: "Inga röstinspelningar, chattar eller textloggar sparas på några servrar.",
                },
                {
                  icon: Users,
                  title: "Ingen spårning",
                  desc: "Dina vanor och dina kontakter förblir 100 % dina egna.",
                },
                {
                  icon: Code,
                  title: "Öppen och transparent",
                  desc: "Byggt med förtroende och säkerhet som enda affärsmodell.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D4F55] rounded-sm flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#4A8A91]" />
                  </div>
                  <div>
                    <div className="font-serif text-[16px] font-[600] mb-1">
                      {item.title}
                    </div>
                    <div className="text-[13px] leading-[1.5] text-[#F7F0E1]/60">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#0D4F55]/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="max-w-[800px] mx-auto text-center mb-12">
            <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91] mb-4">
              Bli en av de första
            </div>
            <h2 className="font-serif text-[36px] md:text-[48px] font-[300] text-[#063338] leading-[1.1] mb-6">
              Skydda dig själv eller <span className="font-[900] italic">någon du tycker om</span>
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#4A8A91]">
              Anmäl dig till väntelistan och få besked så snart Vishinguard finns att ladda ner till din telefon.
            </p>
          </div>

          <div className="max-w-[560px] mx-auto">
            <WaitlistForm
              id="waitlist"
              sourcePage="sa-fungerar-det"
              sourceSection="cta-section"
              variant="light"
              title="Skydda dig själv eller någon du tycker om"
              subtitle="Skriv upp dig så meddelar vi dig när appen finns att ladda ner till din telefon. Första versionen släpps till Android."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
