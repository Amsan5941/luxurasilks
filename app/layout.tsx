import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxura Silks | Premium Handcrafted Sarees",
  description: "Discover exquisite handcrafted sarees that blend timeless tradition with contemporary elegance. LuxuraSilks - Where every drape tells a story of heritage and luxury.",
  keywords: "luxury sarees, handcrafted sarees, Indian ethnic wear, silk sarees, designer sarees, premium sarees",
  openGraph: {
    title: "Luxura Silks | Premium Handcrafted Sarees",
    description: "Discover exquisite handcrafted sarees that blend timeless tradition with contemporary elegance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/logo/LuxuraSilks.webp" sizes="any" />
        <link rel="icon" href="/logo/LuxuraSilks.webp" sizes="32x32" />
        <link rel="shortcut icon" href="/logo/LuxuraSilks.webp" />
      </head>
      <body className="font-sans antialiased bg-[#FFFEFA] text-[#1A1A1A] overflow-x-hidden">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
