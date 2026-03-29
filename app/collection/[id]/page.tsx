import type { Metadata } from "next";
import { allSarees, getAllSareeIds } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";
import Link from "next/link";
import ProductDetailClient from "./ProductDetailClient";

// Generate static params for all saree IDs
export function generateStaticParams() {
  return getAllSareeIds().map((id) => ({
    id: id,
  }));
}

// Generate metadata for each product
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const saree = allSarees.find((s) => s.id === resolvedParams.id);

  return {
    title: saree ? saree.name : "Saree",
    description: saree
      ? `${saree.description} Fabric: ${saree.fabric}. Style: ${saree.style}.`
      : "Discover this exquisite handcrafted saree from Luxura Silks collection.",
    alternates: {
      canonical: saree ? `/collection/${saree.id}` : "/collection",
    },
    openGraph: saree
      ? {
          title: `${saree.name} | Luxura Silks`,
          description: saree.description,
          url: absoluteUrl(`/collection/${saree.id}`),
          images: [
            {
              url: absoluteUrl(saree.image),
              width: 1200,
              height: 1200,
              alt: saree.name,
            },
          ],
          type: "website",
        }
      : undefined,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const saree = allSarees.find(s => s.id === resolvedParams.id);

  if (!saree) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-4xl text-[#2C2C2C] mb-4">Product Not Found</h1>
        <p className="text-[#4A4A4A] mb-8">The saree you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/collection" className="btn-primary inline-block">
          View Collection
        </Link>
      </div>
    );
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: saree.name,
    description: saree.description,
    image: [absoluteUrl(saree.image)],
    sku: saree.id,
    brand: {
      "@type": "Brand",
      name: "Luxura Silks",
    },
    category: `${saree.style} Saree`,
    material: saree.fabric,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Style",
        value: saree.style,
      },
      {
        "@type": "PropertyValue",
        name: "Fabric",
        value: saree.fabric,
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Collection",
        item: absoluteUrl("/collection"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: saree.name,
        item: absoluteUrl(`/collection/${saree.id}`),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProductDetailClient saree={saree} />
    </>
  );
}
