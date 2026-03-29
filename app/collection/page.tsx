import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { allSarees } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Saree Collection",
  description:
    "Browse Luxura Silks collection of handcrafted premium sarees, including bridal, festive, and contemporary styles.",
  alternates: {
    canonical: "/collection",
  },
  openGraph: {
    title: "Luxura Silks Saree Collection",
    description:
      "Browse handcrafted premium sarees curated for weddings, celebrations, and timeless everyday elegance.",
    url: absoluteUrl("/collection"),
    images: [
      {
        url: absoluteUrl("/hero/heritage-image.webp"),
        width: 1200,
        height: 630,
        alt: "Luxura Silks saree collection",
      },
    ],
  },
};

export default function CollectionPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Luxura Silks Saree Collection",
    url: absoluteUrl("/collection"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allSarees.map((saree, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/collection/${saree.id}`),
        name: saree.name,
        image: absoluteUrl(saree.image),
      })),
    },
  };

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      {/* Page Header */}
      <section className="bg-[#FDF8F3] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#2C2C2C] text-sm tracking-widest uppercase font-medium">Our Collection</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2C2C2C] mt-4 mb-6">
            Exquisite Sarees
          </h1>
          <div className="w-20 h-[2px] bg-[#2C2C2C] mx-auto mb-6" />
          <p className="text-[#4A4A4A] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Each saree in our collection is a masterpiece of Indian craftsmanship, 
            handcrafted with love and tradition by skilled artisans.
          </p>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter/Sort Bar (decorative) */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12 pb-6 border-b border-[#2C2C2C]/20">
            <p className="text-[#4A4A4A] text-sm">
              Showing <span className="font-medium text-[#2C2C2C]">{allSarees.length}</span> exquisite pieces
            </p>
            <div className="flex items-center gap-2 text-sm text-[#4A4A4A]">
              <span>Handpicked for you</span>
              <svg className="w-4 h-4 text-[#2C2C2C]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {allSarees.map((saree, index) => (
              <ProductCard
                key={saree.id}
                id={saree.id}
                name={saree.name}
                image={saree.image}
                description={saree.description}
                priority={index < 4}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 sm:mt-20 text-center">
            <div className="inline-block p-8 sm:p-12 bg-[#FDF8F3] rounded-sm">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2C2C] mb-4">
                Can&apos;t Find What You&apos;re Looking For?
              </h3>
              <p className="text-[#4A4A4A] mb-6 max-w-md mx-auto">
                We have many more exclusive pieces. Contact us for a personalized selection.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-block text-sm tracking-widest uppercase"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
