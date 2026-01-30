"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { featuredSarees } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[1000px] w-full overflow-hidden">
        {/* Background Blurred Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover blur-sm"
            onTimeUpdate={(e) => {
              if (e.currentTarget.currentTime >= 23) {
                e.currentTarget.currentTime = 0;
              }
            }}
          >
            <source src="https://ssapblea9ejcanzc.public.blob.vercel-storage.com/Copy%20of%20differentorder.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Main Hero Video */}
        <div className="absolute inset-0 z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-contain"
            onTimeUpdate={(e) => {
              if (e.currentTarget.currentTime >= 23) {
                e.currentTarget.currentTime = 0;
              }
            }}
          >
            <source src="https://ssapblea9ejcanzc.public.blob.vercel-storage.com/Copy%20of%20differentorder.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="/hero/Copy of 3J9A6998.webp"
              alt="LuxuraSilks - Premium Handcrafted Sarees"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              {/* Decorative Line */}
              <div className="w-16 h-[2px] bg-[#FFE2E2] mb-6 sm:mb-8" />
              
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 sm:mb-6">
                Elegance
                <span className="block text-[#FFE2E2]">Woven in Silk</span>
              </h1>
              
              <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-xl">
                Discover exquisite handcrafted sarees that blend timeless tradition 
                with contemporary elegance. Each piece tells a story of heritage and luxury.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/collection"
                  className="btn-primary text-center text-sm sm:text-base tracking-widest uppercase"
                >
                  Explore Collection
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-[#2C2C2C] px-8 py-4 text-center text-sm sm:text-base tracking-widest uppercase font-medium shadow-lg hover:bg-[#FFE2E2] hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#FDF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/hero/Copy of Screen Shot 2025-07-05 at 12.webp"
                  alt="LuxuraSilks Heritage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-full h-full border-2 border-[#2C2C2C] -z-10" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-[#2C2C2C] text-sm tracking-widest uppercase font-medium">Our Heritage</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2C2C] mt-4 mb-6 leading-tight">
                Where Tradition Meets
                <span className="block text-[#2C2C2C]">Modern Elegance</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#2C2C2C] mb-6" />
              <p className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed mb-6">
                At LuxuraSilks, we believe every saree carries a story — of skilled artisans, 
                time-honored techniques, and the dreams of women who wear them. Our collection 
                celebrates the rich heritage of Indian craftsmanship while embracing contemporary designs.
              </p>
              <p className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed mb-8">
                Each piece in our collection is carefully curated from master weavers across India, 
                ensuring exceptional quality and authenticity. From the silk threads to the final drape, 
                every detail reflects our commitment to luxury and elegance.
              </p>
              <Link
                href="/collection"
                className="inline-flex items-center gap-2 text-[#2C2C2C] font-medium tracking-wide hover:gap-4 transition-all duration-300"
              >
                Discover Our Story
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#2C2C2C] text-sm tracking-widest uppercase font-medium">Curated Selection</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2C2C] mt-4 mb-4">
              Featured Sarees
            </h2>
            <div className="w-16 h-[2px] bg-[#2C2C2C] mx-auto mb-6" />
            <p className="text-[#4A4A4A] text-base sm:text-lg max-w-2xl mx-auto">
              Handpicked pieces that showcase the finest craftsmanship and timeless elegance
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredSarees.map((saree) => (
              <ProductCard
                key={saree.id}
                id={saree.id}
                name={saree.name}
                image={saree.image}
                description={saree.description}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/collection"
              className="btn-primary inline-block text-sm sm:text-base tracking-widest uppercase"
            >
              Explore Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#2C2C2C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4">
              The Luxura Silks <span className="text-[#FFE2E2]">Promise</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#FFE2E2] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#FFE2E2]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#FFE2E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl mb-3 text-[#FFE2E2]">Authentic Craftsmanship</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Every saree is handcrafted by master artisans using traditional techniques passed down through generations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#FFE2E2]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#FFE2E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl mb-3 text-[#FFE2E2]">Premium Quality</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                We source only the finest silk and materials, ensuring each piece meets our exacting standards of luxury.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#FFE2E2]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#FFE2E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl mb-3 text-[#FFE2E2]">Personal Service</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                From selection to delivery, our dedicated team ensures a seamless and personalized experience for every customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-r from-[#FFE2E2] to-[#FFE2E2] text-[#2C2C2C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6">
            Ready to Find Your Perfect Saree?
          </h2>
          <p className="text-[#4A4A4A] text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Browse our exclusive collection and discover pieces that will become treasured additions to your wardrobe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/collection"
              className="bg-[#2C2C2C] text-white px-8 py-4 font-medium tracking-widest uppercase text-sm hover:bg-[#1a1a1a] transition-colors"
            >
              View Collection
            </Link>
            <Link
              href="/contact"
              className="border border-[#2C2C2C] text-[#2C2C2C] px-8 py-4 font-medium tracking-widest uppercase text-sm hover:bg-[#2C2C2C] hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
