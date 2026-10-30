import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  Bell,
  Lock,
  Eye,
  Cpu,
  Check,
  ShieldCheck,
  Sword,
  ToggleRight,
  Users,
} from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A8A91' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left: Editorial text content */}
            <div className="flex-1 max-w-[680px]">
              {/* Dateline */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[11px] font-[600] tracking-[0.25em] uppercase text-[#4A8A91]">
                  Stockholm
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A8A91]" />
                <span className="text-[11px] font-[600] tracking-[0.25em] uppercase text-[#4A8A91]">
                  Lansering vinter 2026 - våren 2027
                </span>
              </div>

              {/* Massive headline */}
              <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-[300] leading-[1.18] md:leading-[1.15] text-[#063338] tracking-normal">
                Vishinguard –
                <br />
                <span className="font-[900] italic">
                  ett Skydd som stoppar bedragare i telefonen.
                </span>
              </h1>

              {/* Thin rule */}
              <div className="w-20 h-[2px] bg-[#0D4F55] mt-8 mb-6" />

              {/* Sub-headline with hook */}
              <p className="font-serif text-[18px] md:text-[22px] font-[300] leading-[1.45] text-[#4A8A91] max-w-[540px] mb-10">
                Bedrägerier genom social manipulation har ökat med 270 procent
                sedan 2019. Vishinguard stoppar bedragarna direkt i telefonen.
              </p>

              {/* Bullet points with knight accent */}
              <div className="space-y-4 mb-10">
                {[
                  "Bevakar samtal, meddelanden och e-post i realtid",
                  "AI-analys sker lokalt på din telefon – ingen data lämnar din telefon",
                  "Stoppar misstänkta samtal och meddelanden och ger dig tid att tänka om",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#0D4F55] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sword className="w-3 h-3 text-[#F7F0E1]" />
                    </div>
                    <span className="text-[15px] leading-[1.5] text-[#063338]/85">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <Link
                  href="/sa-fungerar-det"
                  className="text-[13px] font-[600] tracking-[0.15em] uppercase text-[#0D4F55] hover:text-[#063338] underline underline-offset-4"
                >
                  Läs hur det fungerar →
                </Link>
              </div>
            </div>

            {/* Right: Mascot + Waitlist form */}
            <div className="lg:w-[420px] flex-shrink-0">
              {/* Mascot image */}
              <div className="relative mb-8">
                <div className="w-full aspect-[4/3] bg-[#063338] rounded-sm overflow-hidden relative">
                  <Image
                    src="/images/knight-hero.png"
                    alt="Vishinguard riddarmaskot — en bestämd riddare i grön rustning med guldaccenter och sköld"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="bg-[#F7F0E1]/95 backdrop-blur-sm px-4 py-3 rounded-sm shadow-sm">
                      <div className="text-[10px] font-[600] tracking-[0.2em] uppercase text-[#4A8A91]">
                        Din beskyddare
                      </div>
                      <div className="text-[13px] font-serif font-[600] text-[#063338]">
                        Redo att skydda dig och dina nära
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Waitlist form (Hero instance) */}
              <WaitlistForm
                id="waitlist"
                sourcePage="hem"
                sourceSection="hero"
                variant="light"
                title="Skriv upp dig på väntelistan"
                subtitle="Skriv upp dig så meddelar vi dig när appen finns att ladda ner till din telefon. Första versionen släpps till Android."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process — moved up to be immediately visible */}
      <section className="border-t border-[#0D4F55]/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91] mb-4">
            Så enkelt fungerar det
          </div>
          <h2 className="font-serif text-[36px] md:text-[48px] font-[300] text-[#063338] leading-[1.1] mb-4 max-w-[700px]">
            Tre enkla steg för en{" "}
            <span className="font-[900] italic">säkrare vardag</span>
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#4A8A91] max-w-[640px] mb-16">
            Lokal AI på din telefon med uppgift att skydda dig och inte dela din
            data till andra.
          </p>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                label: "Insamling",
                title: "1. Insamling",
                description:
                  "Appen bevakar samtal, SMS, e-post och notifieringar från appar som Messenger och WhatsApp. Den läser endast innehållet från okända avsändare. Kända kontakter lämnas ifred.",
              },
              {
                step: "02",
                label: "AI-analys",
                title: "2. AI-analys",
                description:
                  "Med hjälp av maskininlärning analyseras mönster, avsändare och innehåll i realtid. AI:n letar efter kända bluffmetoder direkt i din telefon utan fördröjning.",
              },
              {
                step: "03",
                label: "Ingrepp",
                title: "3. Ingrepp",
                description:
                  "Om något ser misstänkt ut kliver riddaren in. Du får en tydlig varning på skärmen som ger dig tid att stanna upp, tänka efter och avbryta bedrägeriet.",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="mb-6">
                  <span className="font-serif text-[72px] font-[900] text-[#0D4F55]/10 leading-none">
                    {item.step}
                  </span>
                  <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#C7452E] -mt-4 relative">
                    {item.label}
                  </div>
                </div>
                <h3 className="font-serif text-[22px] font-[600] text-[#063338] mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#4A8A91]">
                  {item.description}
                </p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 -right-6 w-12 h-[1px] bg-[#0D4F55]/15" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:text-left">
            <Link
              href="/sa-fungerar-det"
              className="inline-flex items-center gap-2 text-[13px] font-[600] tracking-[0.15em] uppercase text-[#0D4F55] hover:text-[#063338] underline underline-offset-4"
            >
              Läs mer om tekniken →
            </Link>
          </div>
        </div>
      </section>

      {/* Merged section: "En sköld mot vardagens hot" + "Mer än bara en app" → single cohesive section */}
      <section className="bg-[#EAE1CC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="mb-12">
            <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91] mb-4">
              Så skyddar Vishinguard dig
            </div>
            <h2 className="font-serif text-[36px] md:text-[48px] font-[300] text-[#063338] leading-[1.1] max-w-[600px]">
              En sköld mot{" "}
              <span className="font-[900] italic">
                vardagens bedrägerier
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-[#0D4F55] mt-6 mb-8" />
            <p className="text-[16px] leading-[1.7] text-[#4A8A91] max-w-[600px]">
              Vishinguard skyddar dig mot de vanligaste metoderna bedragare
              använder — oavsett om det sker genom samtal, meddelanden eller
              appar på din telefon.
            </p>
          </div>

          {/* Threat protection cards (previously "Så skyddar din riddare dig") */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {[
              {
                icon: Phone,
                title: "Varnar vid misstänkta samtal",
                description:
                  "Röstsamtal där någon låtsas vara från banken, polisen eller en myndighet. Riddaren analyserar samtalsmönster i realtid och varnar innan du avslöjar känslig information.",
              },
              {
                icon: MessageSquare,
                title: "Läser av farliga meddelanden",
                description:
                  "Länkar som ser äkta ut men leder till fejkade sidor. Riddaren skannar meddelanden i realtid och markerar misstänkta avsändare innan du hinner klicka.",
              },
              {
                icon: Bell,
                title: "Stoppar misstänkta samtal och meddelanden",
                description:
                  "Stoppar dig när du försöker öppna bankappen under ett riskfyllt samtal. Riddaren ger dig de livsviktiga fem sekunderna att andas och tänka efter.",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0D4F55] rounded-sm flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#F7F0E1]" />
                  </div>
                  <div className="w-8 h-[1px] bg-[#0D4F55]/20" />
                </div>
                <h3 className="font-serif text-[20px] font-[600] text-[#063338] mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#4A8A91]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Feature highlight cards (previously "Mer än bara en app") */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Lock,
                accent: "Bankskydd",
                title: "Bankskydd",
                description:
                  "Varnar när du öppnar bankappen under ett misstänkt samtal. När en bedragare försöker få dig att godkänna med BankID blockeras appen tillfälligt i 5 sekunder.",
              },
              {
                icon: Eye,
                accent: "Notisanalys",
                title: "Notisanalys",
                description:
                  "Läser och varnar för misstänkta meddelanden i din vanliga SMS-app, WhatsApp, Messenger, Gmail och Outlook. Okända avsändare med misstänkta länkar eller förfrågningar flaggas direkt.",
              },
              {
                icon: Cpu,
                accent: "Realtidsskydd",
                title: "Realtidsskydd",
                description:
                  "Analyserar samtal och meddelanden medan de sker — helt lokalt på din telefon. Ingen data lämnar din telefon, ingen molnlagring, full integritet.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#F7F0E1] rounded-sm p-8 border border-[#0D4F55]/8 hover:border-[#0D4F55]/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-[#0D4F55] rounded-sm flex items-center justify-center">
                    <card.icon className="w-4 h-4 text-[#F7F0E1]" />
                  </div>
                  <span className="text-[10px] font-[600] tracking-[0.25em] uppercase text-[#C7452E]">
                    {card.accent}
                  </span>
                </div>
                <h3 className="font-serif text-[22px] font-[600] text-[#063338] mb-3 leading-[1.25]">
                  {card.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#4A8A91]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="bg-[#063338] text-[#F7F0E1]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="flex-1">
              <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91] mb-4">
                Din integritet är helig
              </div>
              <h2 className="font-serif text-[36px] md:text-[48px] font-[300] leading-[1.1] mb-8">
                All analys sker{" "}
                <span className="font-[900] italic">i din telefon</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#4A8A91] mb-8" />
              <p className="text-[16px] leading-[1.7] text-[#F7F0E1]/80 max-w-[520px] mb-8">
                All AI-analys sker direkt i din telefon. Ingen data skickas till
                våra servrar. Dina samtal och meddelanden stannar där de hör
                hemma – hos dig.
              </p>
              <div className="space-y-4">
                {[
                  "All AI-analys sker lokalt med on-device maskininlärning",
                  "Ingen molnlagring av samtal, SMS eller aviseringar",
                  "Ingen data säljs eller delas med tredje part",
                  "Så fort AI:n har analyserat texten försvinner informationen",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4A8A91] flex-shrink-0 mt-0.5" />
                    <span className="text-[14px] leading-[1.5] text-[#F7F0E1]/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-[380px] flex-shrink-0">
              <div className="bg-[#0D4F55] rounded-sm p-8">
                <div className="w-16 h-16 bg-[#4A8A91]/20 rounded-sm flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-[#4A8A91]" />
                </div>
                <div className="font-serif text-[20px] font-[600] mb-3">
                  Integritetslöftet
                </div>
                <p className="text-[14px] leading-[1.7] text-[#F7F0E1]/70">
                  &quot;Vi skulle hellre lägga ner företaget än att bryta mot
                  vårt löfte om lokal databehandling. Din trygghet är vår enda
                  affärsmodell.&quot;
                </p>
                <div className="mt-6 pt-6 border-t border-[#4A8A91]/20">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#4A8A91]">
                    Grundare, Vishinguard
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opt-In Data Sharing / BI Section */}
      <section className="bg-[#0D4F55] text-[#F7F0E1]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1 max-w-[640px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#4A8A91]/20 rounded-sm flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#4A8A91]" />
                </div>
                <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91]">
                  Hjälp oss göra skölden starkare
                </div>
              </div>
              <h3 className="font-serif text-[28px] md:text-[36px] font-[300] leading-[1.15] mb-6">
                Dela anonymt –{" "}
                <span className="font-[900] italic">helt valfritt</span>
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#F7F0E1]/80 mb-6">
                All AI-analys sker lokalt i din telefon och ingen personlig data
                lämnar den — det är vårt löfte. Men om du vill hjälpa till att
                göra skyddet bättre för alla kan du aktivt välja att dela
                anonymiserad hotdata.
              </p>
              <p className="text-[15px] leading-[1.7] text-[#F7F0E1]/80 mb-6">
                Via en enkel tickruta i appen kan du välja att skicka
                anonymiserad statistik om vilka typer av hot som upptäckts. Datan
                innehåller aldrig personuppgifter, samtalsinspelningar eller
                meddelandetext — bara anonyma mönster som hjälper oss att
                förbättra skyddet för alla användare.
              </p>
            </div>

            <div className="lg:w-[340px] flex-shrink-0">
              <div className="bg-[#063338] rounded-sm p-6 border border-[#4A8A91]/20">
                <div className="flex items-center gap-3 mb-4">
                  <ToggleRight className="w-6 h-6 text-[#4A8A91]" />
                  <span className="font-serif text-[16px] font-[600]">
                    Hur det fungerar
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    "Du väljer själv via en tickruta i appen",
                    "Enbart anonymiserad hotstatistik delas",
                    "Aldrig personuppgifter, samtal eller meddelanden",
                    "Hjälper alla användare att få ett starkare skydd",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#4A8A91] flex-shrink-0 mt-0.5" />
                      <span className="text-[13px] leading-[1.5] text-[#F7F0E1]/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA section with independent waitlist form */}
      <section className="border-t border-[#0D4F55]/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="max-w-[800px] mx-auto text-center mb-12">
            <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91] mb-4">
              Bli en av de första
            </div>
            <h2 className="font-serif text-[36px] md:text-[48px] font-[300] text-[#063338] leading-[1.1] mb-6">
              Bli en av de första som får{" "}
              <span className="font-[900] italic">Vishinguard</span>
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#4A8A91]">
              Skydda dig själv eller någon du tycker om. Anmäl dig till
              väntelistan idag och få besked så snart Vishinguard finns att ladda
              ner till din telefon.
            </p>
          </div>

          <div className="max-w-[560px] mx-auto">
            <WaitlistForm
              id="cta-waitlist"
              sourcePage="hem"
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
