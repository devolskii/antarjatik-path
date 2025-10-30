import type { Metadata } from "next";
import { Noto_Sans_Bengali, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

import { SanityLive } from "@/sanity/live";

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
  description: "Central Organ of Bolshevik Leninist Party, India",
  keywords:
    "Antarjatik Path, BLPI, Marxism, Marxist, Journal, Theory, Articles, Communism, Trotskyism, Trotsky, Lenin, Marx, Engels, Rosa Luxemburg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bengaliSans.variable} ${bengaliSerif.variable} antialiased`}
      >
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
