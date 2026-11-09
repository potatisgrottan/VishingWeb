import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Radio,
  BrainCircuit,
  ShieldAlert,
  Sword,
  Cpu,
  Database,
  Users,
  Code,
  Eye,
  CheckCircle,
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
            <p className="font-serif text-[18px] md:text-[22px] font-[300] leading-[1.45] text-[#4A8A91] max-w-[620px]">
              Tre enkla steg mellan dig och en säkrare vardag. Lokal AI på din
              telefon med uppgift att skydda dig och aldrig dela din data.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Insamling Section (Image 3) */}
      <section className="border-t border-[#0D4F55]/15 bg-[#F7F0E1]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#0D4F55] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Radio className="w-4 h-4 text-[#F7F0E1]" />
                </div>
                <span className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#C7452E]">
                  Steg 01 • Insamling
                </span>
              </div>
              <h2 className="font-serif text-[36px] md:text-[48px] font-[300] text-[#063338] leading-[1.1] mb-6">
                1. Insamling
              </h2>
              <div className="w-16 h-[2px] bg-[#0D4F55] mb-8" />
              <p className="text-[16px] leading-[1.7] text-[#4A8A91] mb-6 max-w-[540px]">
                Vishinguard fångar upp och skyddar dig mot farliga meddelanden
                från flera olika platser på din telefon: din vanliga SMS-app,
                Messenger, WhatsApp, Discord, Telegram, Outlook och Gmail.
                Appen granskar endast inkommande meddelanden och samtal från
                okända avsändare som inte finns i din telefonbok. Ingenting
                sparas – så fort AI:n har gjort sin analys försvinner
                informationen omedelbart.
              </p>
              <div className="space-y-4">
                {[
                  "Skyddar mot bedrägerier i din vanliga SMS-app, Messenger, WhatsApp, Discord, Telegram, Outlook och Gmail",
                  "Kända kontakter, familj och vänner i din telefonbok lämnas helt ifred",
                  "Ingen data sparas – allt rensas direkt så fort kontrollen är klar",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Sword className="w-4 h-4 text-[#0D4F55] flex-shrink-0 mt-1" />
                    <span className="text-[14px] leading-[1.5] text-[#063338]/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="lg:w-[480px] flex-shrink-0 w-full">
              <div className="bg-[#EAE1CC] rounded-sm border border-[#0D4F55]/10 overflow-hidden shadow-sm">
                <div className="relative aspect-[4/3] w-full bg-[#F7F0E1]">
                  <Image
                    src="/images/how-it-works-insamling.png"
                    alt="Vishinguard riddare som i realtid granskar passerande meddelanden och samtal genom ett lysande förstoringsglas utan att spara någon data"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="px-6 py-3 bg-[#EAE1CC] border-t border-[#0D4F55]/10">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#4A8A91]">
                    Figur 1: Insamling granskar inkommande signaler i realtid medan de passerar – ingenting sparas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AI-analys & Varning Section (Image 4) */}
      <section className="bg-[#EAE1CC] border-t border-[#0D4F55]/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
            {/* Right: Text */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#0D4F55] rounded-sm flex items-center justify-center flex-shrink-0">
                  <BrainCircuit className="w-4 h-4 text-[#F7F0E1]" />
                </div>
                <span className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#C7452E]">
                  Steg 02 • AI-analys & Varning
                </span>
              </div>
              <h2 className="font-serif text-[36px] md:text-[48px] font-[300] text-[#063338] leading-[1.1] mb-6">
                2. AI-analys & Varning
              </h2>
              <div className="w-16 h-[2px] bg-[#0D4F55] mb-8" />
              <p className="text-[16px] leading-[1.7] text-[#4A8A91] mb-6 max-w-[540px]">
                Med hjälp av artificiell intelligens analyseras mönster, avsändare
                och innehåll i realtid. AI:n läser och utvärderar varje meddelande
                och sorterar det blixtsnabbt mot trygga gröna, försiktiga gula eller
                farliga röda nivåer. Om ett misstänkt hot identifieras kliver
                riddaren omedelbart in med en tydlig varning på skärmen som ger
                dig tid att stanna upp, tänka efter och avbryta bedrägeriet.
              </p>
              <div className="space-y-4">
                {[
                  "Lokal maskininlärning analyserar och sorterar risknivån på bråkdelen av en sekund",
                  "Känner omedelbart igen stressande knep och manipulativa formuleringar",
                  "Tydlig varning som ger dig tid att stanna upp, andas och avbryta",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ShieldAlert className="w-4 h-4 text-[#C7452E] flex-shrink-0 mt-1" />
                    <span className="text-[14px] leading-[1.5] text-[#063338]/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Left: Illustration */}
            <div className="lg:w-[480px] flex-shrink-0 w-full">
              <div className="bg-[#F7F0E1] rounded-sm border border-[#0D4F55]/10 overflow-hidden shadow-sm">
                <div className="relative aspect-[4/3] w-full bg-[#F7F0E1]">
                  <Image
                    src="/images/how-it-works-aianalys.png"
                    alt="Vishinguard riddare som granskar ett meddelande och sorterar det mot tre lysande zoner i grönt, gult och rött"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
                <div className="px-6 py-3 bg-[#EAE1CC] border-t border-[#0D4F55]/10">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#4A8A91]">
                    Figur 2: AI-analysen utvärderar meddelandet och varnar direkt vid förhöjd risknivå
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bankskydd Section (Image 2) */}
      <section className="border-t border-[#0D4F55]/15 bg-[#F7F0E1]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#0D4F55] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Sword className="w-4 h-4 text-[#F7F0E1]" />
                </div>
                <span className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#C7452E]">
                  Skyddsfunktion • Bankskydd
                </span>
              </div>
              <h2 className="font-serif text-[36px] md:text-[48px] font-[300] text-[#063338] leading-[1.1] mb-6">
                Bank<span className="font-[900] italic">skydd</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#0D4F55] mb-8" />
              <p className="text-[16px] leading-[1.7] text-[#4A8A91] mb-6 max-w-[540px]">
                En av de farligaste situationerna är när någon ringer och låtsas
                vara från din bank samtidigt som de försöker få dig att öppna
                bankappen. Om Vishinguard flaggat samtalet som misstänkt och du
                försöker öppna din bankapp visas en varning som täcker hela skärmen
                i fem sekunder. Du får information om varför det är riskfyllt och
                kan sedan själv välja om du vill fortsätta eller avbryta.
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

            {/* Right: Illustration */}
            <div className="lg:w-[480px] flex-shrink-0 w-full">
              <div className="bg-[#EAE1CC] rounded-sm border border-[#0D4F55]/10 overflow-hidden shadow-sm">
                <div className="relative aspect-[4/3] w-full bg-[#F7F0E1]">
                  <Image
                    src="/images/how-it-works-bankskydd.png"
                    alt="Vishinguard riddare som står som lojal livvakt framför ett bankvalv och blockerar en skuggfigur av en bedragare"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
                <div className="px-6 py-3 bg-[#EAE1CC] border-t border-[#0D4F55]/10">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#4A8A91]">
                    Figur 3: Bankskydd agerar livvakt och spärrar bedragaren från bankvalvet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Notisanalys Section (Image 1) */}
      <section className="bg-[#EAE1CC] border-t border-[#0D4F55]/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
            {/* Right: Text */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#0D4F55] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Eye className="w-4 h-4 text-[#F7F0E1]" />
                </div>
                <span className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#C7452E]">
                  Skyddsfunktion • Notisanalys
                </span>
              </div>
              <h2 className="font-serif text-[36px] md:text-[48px] font-[300] text-[#063338] leading-[1.1] mb-6">
                Notis<span className="font-[900] italic">analys</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#0D4F55] mb-8" />
              <p className="text-[16px] leading-[1.7] text-[#4A8A91] mb-6 max-w-[540px]">
                Bedrägerier kommer inte bara via samtal och SMS. Därför skannar
                Vishinguard även notifieringar från din vanliga SMS-app, WhatsApp,
                Messenger, Gmail och Outlook. Om en okänd avsändare skickar ett
                meddelande med misstänkt innehåll varnar riddaren dig direkt.
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

            {/* Left: Illustration */}
            <div className="lg:w-[480px] flex-shrink-0 w-full">
              <div className="bg-[#F7F0E1] rounded-sm border border-[#0D4F55]/10 overflow-hidden shadow-sm">
                <div className="relative aspect-[4/3] w-full bg-[#F7F0E1]">
                  <Image
                    src="/images/how-it-works-notisanalys.png"
                    alt="Vishinguard riddare med förstoringsglas som granskar inkommande meddelanden från en telefon och blockerar misstänkta länkar"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
                <div className="px-6 py-3 bg-[#EAE1CC] border-t border-[#0D4F55]/10">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#4A8A91]">
                    Figur 4: Notisanalys granskar inkommande aviseringar i realtid
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
              Vishinguard arbetar helt lokalt på din Android-telefon. Dina
              samtal, meddelanden och notifieringar skickas aldrig till någon
              server. Analysen görs på plats, och när den är klar finns ingen
              kvarstående information kvar.
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
              Skydda dig själv eller{" "}
              <span className="font-[900] italic">någon du tycker om</span>
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#4A8A91]">
              Anmäl dig till väntelistan och få besked så snart Vishinguard finns
              att ladda ner till din telefon.
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
