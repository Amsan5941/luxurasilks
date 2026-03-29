import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { absoluteUrl, SITE_URL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Luxura Silks | Premium Handcrafted Sarees",
    template: "%s | Luxura Silks",
  },
  description:
    "Discover premium handcrafted silk sarees that blend timeless Indian heritage with modern elegance.",
  keywords: [
    "luxury sarees",
    "handcrafted sarees",
    "silk sarees",
    "kanchipuram sarees",
    "designer sarees",
    "bridal sarees",
    "Indian ethnic wear",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Luxura Silks | Premium Handcrafted Sarees",
    description: "Discover exquisite handcrafted sarees that blend timeless tradition with contemporary elegance.",
    url: absoluteUrl("/"),
    siteName: "Luxura Silks",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: absoluteUrl("/hero/heritage-poster.webp"),
        width: 1200,
        height: 630,
        alt: "Luxura Silks handcrafted sarees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxura Silks | Premium Handcrafted Sarees",
    description: "Discover exquisite handcrafted sarees that blend timeless tradition with contemporary elegance.",
    images: [absoluteUrl("/hero/heritage-poster.webp")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Luxura Silks",
    url: SITE_URL,
    logo: absoluteUrl("/logo/LuxuraSilks.webp"),
    sameAs: ["https://instagram.com/luxurasilks"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "luxurasilks@gmail.com",
        availableLanguage: ["English"],
      },
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Luxura Silks",
    url: SITE_URL,
    description: "Premium handcrafted silk sarees for weddings, festive occasions, and timeless elegance.",
    publisher: {
      "@type": "Organization",
      name: "Luxura Silks",
    },
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/logo/LuxuraSilks.webp" sizes="any" />
        <link rel="icon" href="/logo/LuxuraSilks.webp" sizes="32x32" />
        <link rel="shortcut icon" href="/logo/LuxuraSilks.webp" />
        <link rel="preload" as="image" href="/logo/LuxuraSilks.webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/hero/heritage-poster.webp" fetchPriority="high" />
        <link rel="preload" as="video" href="/hero/hero-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
        <link rel="preload" as="video" href="/hero/hero-desktop.mp4" type="video/mp4" media="(min-width: 769px)" />
      </head>
      <body className="font-sans antialiased bg-[#FFFEFA] text-[#1A1A1A] overflow-x-hidden">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
