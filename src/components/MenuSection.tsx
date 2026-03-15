"use client";

import { useState } from "react";
import Image from "next/image";
import { menuCategories } from "@/data/menu";
import type { MenuItem } from "@/data/menu";

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="menu-card flex gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 group">
      {/* Image */}
      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="96px"
        />
        {item.popular && (
          <div className="absolute top-1 left-1 bg-chili text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">
            Popular
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-bold text-dark text-base leading-snug">{item.name}</h4>
          <span className="text-saffron font-bold text-base flex-shrink-0">{item.price}</span>
        </div>
        <p className="text-gray-400 text-sm mt-1 leading-relaxed line-clamp-2">{item.description}</p>
        <div className="flex items-center gap-2 mt-2">
          {item.spiceLevel && (
            <span className="text-xs">{"🌶️".repeat(item.spiceLevel)}</span>
          )}
          {item.vegan && (
            <span className="bg-leaf-light text-leaf text-[10px] px-2 py-0.5 rounded-full font-semibold">
              Vegan
            </span>
          )}
          {item.glutenFree && (
            <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded-full font-semibold">
              Gluten Free
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const currentCategory = menuCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="menu" className="py-24 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-saffron font-semibold text-sm tracking-widest uppercase">
            Our Menu
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-dark mt-3 mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Explore Our Flavors
          </h2>
          <div className="spice-divider max-w-xs mx-auto mb-4">
            <span className="text-saffron text-2xl">&#10043;</span>
          </div>
          <p className="text-gray-500 max-w-xl mx-auto">
            From crispy dosas to soft idlis, every dish celebrates the rich culinary heritage of South India
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-10 overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex gap-2 min-w-max justify-center">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-saffron text-white shadow-lg shadow-saffron/25"
                    : "bg-white text-gray-600 hover:bg-saffron-light hover:text-saffron border border-gray-200"
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category Description */}
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm italic">{currentCategory.description}</p>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in" key={activeCategory}>
          {currentCategory.items.map((item) => (
            <MenuItemCard key={item.name} item={item} />
          ))}
        </div>

        {/* All Categories Preview (mobile-friendly) */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-3 bg-white rounded-2xl p-6 shadow-sm">
            <span className="text-dark font-semibold text-sm w-full mb-2">Quick Links</span>
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm text-gray-500 hover:text-saffron transition-colors"
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
