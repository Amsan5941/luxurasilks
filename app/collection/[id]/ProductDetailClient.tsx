"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Saree } from "@/lib/data";

interface ProductDetailClientProps {
  saree: Saree;
}

export default function ProductDetailClient({ saree }: ProductDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Create gallery array (using same image for demo, but structure supports multiple)
  const galleryImages = [saree.image, saree.image, saree.image];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32">
      {/* Breadcrumb */}
      <div className="bg-[#FDF8F3] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#4A4A4A] hover:text-[#2C2C2C] transition-colors">
              Home
            </Link>
            <span className="text-[#4A4A4A]">/</span>
            <Link href="/collection" className="text-[#4A4A4A] hover:text-[#2C2C2C] transition-colors">
              Collection
            </Link>
            <span className="text-[#4A4A4A]">/</span>
            <span className="text-[#2C2C2C]">{saree.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[3/4] bg-[#FDF8F3] overflow-hidden">
                <Image
                  src={galleryImages[selectedImageIndex]}
                  alt={saree.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative flex-shrink-0 w-20 h-24 sm:w-24 sm:h-28 overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? "border-[#2C2C2C]" 
                        : "border-transparent hover:border-[#2C2C2C]/50"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${saree.name} view ${index + 1}`}
                      fill
                      sizes="100px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:py-4">
              <span className="text-[#2C2C2C] text-sm tracking-widest uppercase font-medium">
                {saree.style}
              </span>
              
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2C2C] mt-3 mb-4">
                {saree.name}
              </h1>
              
              <div className="w-16 h-[2px] bg-[#2C2C2C] mb-6" />
              
              <p className="text-[#4A4A4A] text-lg leading-relaxed mb-8">
                {saree.description}
              </p>

              {/* Product Info */}
              <div className="space-y-4 mb-8 py-6 border-y border-[#2C2C2C]/20">
                <div className="flex items-start gap-4">
                  <span className="w-24 text-sm text-[#4A4A4A] font-medium">Fabric</span>
                  <span className="text-[#2C2C2C]">{saree.fabric}</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-24 text-sm text-[#4A4A4A] font-medium">Style</span>
                  <span className="text-[#2C2C2C]">{saree.style}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-serif text-xl text-[#2C2C2C] mb-3">About This Piece</h3>
                <p className="text-[#4A4A4A] leading-relaxed">
                  {saree.details}
                </p>
              </div>

              {/* CTA */}
              {/* <div className="space-y-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center block text-sm sm:text-base tracking-widest uppercase"
                >
                  Contact to Order
                </Link>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center flex items-center justify-center gap-2 text-sm sm:text-base tracking-wide"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div> */}

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-[#2C2C2C]/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <svg className="w-6 h-6 mx-auto text-[#2C2C2C] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-xs text-[#4A4A4A]">Authentic</span>
                  </div>
                  <div>
                    <svg className="w-6 h-6 mx-auto text-[#2C2C2C] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span className="text-xs text-[#4A4A4A]">Secure Packaging</span>
                  </div>
                  <div>
                    <svg className="w-6 h-6 mx-auto text-[#2C2C2C] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-xs text-[#4A4A4A]">Handcrafted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Collection */}
      <section className="py-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 text-[#2C2C2C] font-medium tracking-wide hover:gap-4 transition-all duration-300"
          >
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Back to Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
