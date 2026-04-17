import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Noto_Sans_Bengali, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const bengaliSans = Noto_Sans_Bengali({
  variable: "--font-bengali-sans",
  subsets: ["bengali"],
});

const bengaliSerif = Noto_Serif_Bengali({
  variable: "--font-bengali-serif",
  subsets: ["bengali"],
});

export const metadata: Metadata = {
  title: "Antarjatik Path",
  description: "Central Organ of the Bolshevik Leninist Party, India",
  keywords:
    "Antarjatik Path, Bolshevik, Leninist, India, Politics, BLPI, Marxism, Marxist, Journal, Theory, Articles, Communism, Trotskyism, Trotsky, Lenin, Marx, Engels, Rosa Luxemburg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="bn" className="scroll-smooth">
        <body
          className={`${bengaliSans.variable} ${bengaliSerif.variable} antialiased`}
        >
          {children}
        </body>
      </html>
      <Analytics />
    </>
  );
}
