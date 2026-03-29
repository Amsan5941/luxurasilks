import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";
import { featuredSarees } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";

const HOME_FAQS = [
  {
    question: "What makes Luxura Silks sarees premium?",
    answer:
      "Our sarees are handcrafted by skilled artisans using high-grade silk and heritage weaving techniques, with quality checks at every stage.",
  },
  {
    question: "How do I choose the right saree for an occasion?",
    answer:
      "You can browse by style and fabric on our collection page, then contact us for personalized recommendations based on your event and preferences.",
  },
  {
    question: "Do you support custom saree requests?",
    answer:
      "Yes, we support custom requests for special occasions, wedding wardrobes, and curated selections via direct consultation.",
  },
];

export const metadata: Metadata = {
  title: "Luxura Silks | Premium Handcrafted Sarees",
  description:
    "Shop premium handcrafted silk sarees at Luxura Silks. Discover wedding, festive, and luxury sarees rooted in Indian heritage craftsmanship.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luxura Silks | Premium Handcrafted Sarees",
    description:
      "Discover handcrafted silk sarees that blend timeless Indian craftsmanship with modern elegance.",
    url: absoluteUrl("/"),
    siteName: "Luxura Silks",
    images: [
      {
        url: absoluteUrl("/hero/heritage-poster.webp"),
        width: 1200,
        height: 630,
        alt: "Luxura Silks premium handcrafted sarees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxura Silks | Premium Handcrafted Sarees",
    description:
      "Discover handcrafted silk sarees that blend timeless Indian craftsmanship with modern elegance.",
    images: [absoluteUrl("/hero/heritage-poster.webp")],
  },
};

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Luxura Silks Home",
    url: absoluteUrl("/"),
    description:
      "Explore premium handcrafted sarees by Luxura Silks, featuring traditional artistry and contemporary elegance.",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2"],
    },
  };

  const featuredListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Sarees",
    itemListElement: featuredSarees.map((saree, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: saree.name,
      url: absoluteUrl(`/collection/${saree.id}`),
      image: absoluteUrl(saree.image),
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(featuredListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomePageClient />
    </>
  );
}
