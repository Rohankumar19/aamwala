import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const displayFont = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-playfair",
  weight: "100 900",
});

const sansFont = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-dm-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SNS Javik Farm | Farm Fresh Mangoes",
  description: "Natural, handpicked mangoes direct from our orchard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${sansFont.variable} font-sans antialiased bg-cream text-dark`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
