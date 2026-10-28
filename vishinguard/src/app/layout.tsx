import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vishinguard — Din riddare i fickan | Proaktivt skydd mot vishing & bedrägerier",
  description: "Vishinguard är din personliga digitala beskyddare. Appen lyssnar, läser och varnar när bedragare försöker lura dig – direkt i din Android-telefon utan att data lämnar mobilen.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${fraunces.variable} ${figtree.variable}`}>
      <body className="min-h-screen bg-[#F7F0E1] text-[#063338] font-sans flex flex-col antialiased">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
