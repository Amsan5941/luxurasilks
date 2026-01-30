import { allSarees, getAllSareeIds } from "@/lib/data";
import ProductDetailClient from "./ProductDetailClient";

// Generate static params for all saree IDs
export function generateStaticParams() {
  return getAllSareeIds().map((id) => ({
    id: id,
  }));
}

// Generate metadata for each product
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const saree = allSarees.find(s => s.id === resolvedParams.id);
  
  return {
    title: saree ? `${saree.name} | LuxuraSilks` : "Saree | LuxuraSilks",
    description: saree ? saree.description : "Discover this exquisite handcrafted saree from LuxuraSilks collection.",
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
        <a href="/collection" className="btn-primary inline-block">
          View Collection
        </a>
      </div>
    );
  }

  return <ProductDetailClient saree={saree} />;
}
