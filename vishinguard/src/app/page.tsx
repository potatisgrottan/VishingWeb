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
              <h1 className="font-serif text-[52px] md:text-[72px] lg:text-[88px] font-[300] leading-[0.92] text-[#063338] tracking-tight">
                Din beskyddare
                <br />
                <span className="font-[900] italic">i fickan</span>
              </h1>

              {/* Thin rule */}
              <div className="w-20 h-[2px] bg-[#0D4F55] mt-8 mb-6" />

              {/* Subtitle */}
              <p className="font-serif text-[18px] md:text-[22px] font-[300] leading-[1.45] text-[#4A8A91] max-w-[480px] mb-10">
                Vishinguard är din personliga digitala beskyddare. Appen lyssnar, läser och varnar när bedragare försöker lura dig - direkt i din telefon, utan att någon data lämnar mobilen.
              </p>

              {/* Bullet points with knight accent */}
              <div className="space-y-4 mb-10">
                {[
                  "Bevakar samtal, meddelanden och e-post i realtid",
                  "AI-analys sker lokalt på din telefon och ingen data lämnar därmed enheten",
                  "Blockerar hotfulla transaktioner och ger dig tid att tänka om",
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
                title="Få besked när riddaren är redo"
                subtitle="Vishinguard lanseras snart på Android. Anmäl dig för att få ett meddelande direkt i din inkorg."
              />
            </div>
          </div>
        </div>
      </section>

      {/* "Så skyddar din riddare dig i vardagen" section */}
      <section className="border-t border-[#0D4F55]/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="mb-12">
            <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91] mb-4">
              Så skyddar din riddare dig
            </div>
            <h2 className="font-serif text-[36px] md:text-[48px] font-[300] text-[#063338] leading-[1.1] max-w-[600px]">
              En sköld mot <span className="font-[900] italic">vardagens hot</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#0D4F55] mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
                title: "Stoppar intrång vid rätt sekund",
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
        </div>
      </section>

      {/* "Tre saker din riddare gör särskilt bra" feature cards */}
      <section className="bg-[#EAE1CC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91] mb-4">
            Tre saker din riddare gör särskilt bra
          </div>
          <h2 className="font-serif text-[36px] md:text-[48px] font-[300] text-[#063338] leading-[1.1] mb-12 max-w-[500px]">
            Mer än bara <span className="font-[900] italic">en app</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Lock,
                accent: "Bank Protection",
                title: "Bank Protection",
                description:
                  "Varnar när du öppnar bankappen under ett misstänkt samtal. När en bedragare försöker få dig att godkänna med BankID blockeras appen tillfälligt i 5 sekunder.",
              },
              {
                icon: Eye,
                accent: "Notification Analysis",
                title: "Notification Analysis",
                description:
                  "Skannar notifieringar från appar som Messenger, WhatsApp och SMS. Okända avsändare med misstänkta länkar eller förfrågningar flaggas direkt.",
              },
              {
                icon: Cpu,
                accent: "Realtidsskydd",
                title: "Realtidsskydd",
                description:
                  "Analyserar samtal och meddelanden medan de sker — helt lokalt på din Android-telefon. Ingen data lämnar enheten, ingen molnlagring, full integritet.",
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

      {/* "Så enkelt fungerar det" three steps */}
      <section className="border-t border-[#0D4F55]/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91] mb-4">
            Så enkelt fungerar det
          </div>
          <h2 className="font-serif text-[36px] md:text-[48px] font-[300] text-[#063338] leading-[1.1] mb-16">
            Tre steg till <span className="font-[900] italic">trygghet</span>
          </h2>

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
                  "Med hjälp av maskininlärning analyseras mönster, avsändare och innehåll i realtid. AI:n letar efter kända bluffmetoder direkt i din mobil utan fördröjning.",
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

      {/* Privacy Section */}
      <section className="bg-[#063338] text-[#F7F0E1]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="flex-1">
              <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91] mb-4">
                Din integritet är helig
              </div>
              <h2 className="font-serif text-[36px] md:text-[48px] font-[300] leading-[1.1] mb-8">
                All analys sker <span className="font-[900] italic">i telefonen</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#4A8A91] mb-8" />
              <p className="text-[16px] leading-[1.7] text-[#F7F0E1]/80 max-w-[520px] mb-8">
                All analys sker i telefonen. Ingen data skickas till våra servrar. Dina samtal och meddelanden stannar där de hör hemma – hos dig.
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
                  "Vi skulle hellre lägga ner företaget än att bryta mot vårt löfte om lokal databehandling. Din trygghet är vår enda affärsmodell."
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

      {/* Bottom CTA section with independent waitlist form */}
      <section className="border-t border-[#0D4F55]/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="max-w-[800px] mx-auto text-center mb-12">
            <div className="text-[11px] font-[600] tracking-[0.3em] uppercase text-[#4A8A91] mb-4">
              Bli en av de första
            </div>
            <h2 className="font-serif text-[36px] md:text-[48px] font-[300] text-[#063338] leading-[1.1] mb-6">
              Bli en av de första som får en riddare{" "}
              <span className="font-[900] italic">i fickan</span>
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#4A8A91]">
              Skydda dig själv eller någon du tycker om. Anmäl dig till väntelistan idag och få besked så snart Vishinguard finns att ladda ner på Android.
            </p>
          </div>

          <div className="max-w-[560px] mx-auto">
            <WaitlistForm
              id="cta-waitlist"
              sourcePage="hem"
              sourceSection="cta-section"
              variant="light"
              title="Skydda dig själv eller någon du tycker om"
              subtitle="Vishinguard lanseras först till Android. Anmäl dig nedan för att få förtur vid lanseringen."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
