import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  description?: string;
}

export default function ProductCard({ id, name, image, description }: ProductCardProps) {
  return (
    <Link 
      href={`/collection/${id}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-[#f5f5f5] aspect-square border border-gray-100">
        {/* Image Container with Zoom Effect */}
        <div className="image-zoom w-full h-full p-4">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quick View Button */}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="block w-full py-3 bg-white/95 text-[#2C2C2C] text-center text-sm font-medium tracking-wider hover:bg-[#2C2C2C] hover:text-white transition-colors">
            View Details
          </span>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="mt-4 text-center sm:text-left">
        <h3 className="font-serif text-lg sm:text-xl text-[#2C2C2C] group-hover:text-[#2C2C2C] transition-colors duration-300">
          {name}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-[#4A4A4A] line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}
