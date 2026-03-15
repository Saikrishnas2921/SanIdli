"use client";

import Image from "next/image";
import { popularItems } from "@/data/menu";

export default function PopularItems() {
  return (
    <section className="py-24 px-4 pattern-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-saffron font-semibold text-sm tracking-widest uppercase">
            Customer Favorites
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-dark mt-3 mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Most Popular Dishes
          </h2>
          <div className="spice-divider max-w-xs mx-auto mb-4">
            <span className="text-saffron text-2xl">&#10043;</span>
          </div>
          <p className="text-gray-500 max-w-xl mx-auto">
            Loved by hundreds of customers, these are the dishes that keep people coming back
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularItems.map((item, i) => (
            <div
              key={item.name}
              className="menu-card bg-white rounded-2xl overflow-hidden shadow-md group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Price badge */}
                <div className="absolute top-3 right-3 bg-saffron text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {item.price}
                </div>

                {/* Tags */}
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {item.vegan && (
                    <span className="bg-leaf text-white text-xs px-2 py-0.5 rounded-full font-medium">
                      Vegan
                    </span>
                  )}
                  {item.glutenFree && (
                    <span className="bg-white/90 text-dark text-xs px-2 py-0.5 rounded-full font-medium">
                      GF
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-dark text-lg leading-snug">{item.name}</h3>
                  {item.spiceLevel && (
                    <span className="text-sm flex-shrink-0">
                      {"🌶️".repeat(item.spiceLevel)}
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-dark hover:bg-dark/90 text-white px-8 py-4 rounded-full text-lg font-semibold tracking-wide transition-all hover:shadow-xl hover:-translate-y-1"
          >
            View Full Menu
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
