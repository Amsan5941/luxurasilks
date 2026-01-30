import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32">
      {/* Page Header */}
      <section className="bg-[#FDF8F3] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#2C2C2C] text-sm tracking-widest uppercase font-medium">Get in Touch</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2C2C2C] mt-4 mb-6">
            Contact Us
          </h1>
          <div className="w-20 h-[2px] bg-[#2C2C2C] mx-auto mb-6" />
          <p className="text-[#4A4A4A] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;d love to hear from you. Whether you have questions about our collection 
            or want to place a custom order, we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Methods */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2C2C] mb-8">
                Reach Out To Us
              </h2>

              {/* WhatsApp */}
              {/* <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-[#FDF8F3] hover:bg-[#25D366]/10 transition-colors mb-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#2C2C2C] mb-1 group-hover:text-[#25D366] transition-colors">
                      WhatsApp
                    </h3>
                    <p className="text-[#4A4A4A] text-sm mb-2">
                      Quick responses • Send photos • Video calls
                    </p>
                    <span className="text-[#2C2C2C] text-sm font-medium">
                      Chat with us →
                    </span>
                  </div>
                </div>
              </a> */}

              {/* Instagram */}
              <a
                href="https://instagram.com/luxurasilks"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-[#FDF8F3] hover:bg-[#E1306C]/10 transition-colors mb-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#2C2C2C] mb-1 group-hover:text-[#E1306C] transition-colors">
                      Instagram
                    </h3>
                    <p className="text-[#4A4A4A] text-sm mb-2">
                      Latest arrivals • Behind the scenes • Style inspiration
                    </p>
                    <span className="text-[#2C2C2C] text-sm font-medium">
                      @luxurasilks →
                    </span>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:luxurasilks@gmail.com"
                className="group block p-6 bg-[#FDF8F3] hover:bg-[#2C2C2C]/10 transition-colors mb-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2C2C2C] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#2C2C2C] mb-1 group-hover:text-[#2C2C2C] transition-colors">
                      Email
                    </h3>
                    <p className="text-[#4A4A4A] text-sm mb-2">
                      Detailed inquiries • Custom orders • Bulk requests
                    </p>
                    <span className="text-[#2C2C2C] text-sm font-medium">
                      luxurasilks@gmail.com →
                    </span>
                  </div>
                </div>
              </a>

              {/* Response Time */}
              <div className="mt-8 p-6 border border-[#2C2C2C]/20">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-5 h-5 text-[#2C2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium text-[#2C2C2C]">Response Time</span>
                </div>
                <p className="text-[#4A4A4A] text-sm">
                  We typically respond within 2-4 hours during business hours (10 AM - 8 PM IST). 
                  For urgent queries, Instagram is the fastest way to reach us.
                </p>
              </div>
            </div>

            {/* Image & Info */}
            <div className="space-y-8">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/sarees/IMG_4645.webp"
                  alt="LuxuraSilks Collection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-serif text-xl sm:text-2xl">
                    &ldquo;Every saree has a story waiting to be worn.&rdquo;
                  </p>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-[#2C2C2C] text-white p-8">
                <h3 className="font-serif text-xl sm:text-2xl mb-6 text-[#2C2C2C]">
                  How We Can Help
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2C2C2C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Personalized saree recommendations based on your preferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2C2C2C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Detailed information about fabric, care, and styling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2C2C2C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Video calls to see sarees in real-time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2C2C2C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Custom orders and special requests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2C2C2C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Bulk orders for weddings and events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#FFE2E2] to-[#FFE2E2] text-[#2C2C2C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl mb-4">
            Ready to Explore Our Collection?
          </h2>
          <p className="text-[#4A4A4A] mb-6 max-w-xl mx-auto">
            Browse our curated selection of handcrafted sarees and find your perfect piece.
          </p>
          <Link
            href="/collection"
            className="inline-block bg-[#2C2C2C] text-white px-8 py-4 font-medium tracking-widest uppercase text-sm hover:bg-[#1a1a1a] transition-colors"
          >
            View Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
