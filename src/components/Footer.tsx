"use client";

import { restaurant } from "@/data/restaurant";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-saffron flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <span className="text-white font-bold tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
              {restaurant.name}
            </span>
          </div>

          <p className="text-white/40 text-sm text-center">
            &copy; {new Date().getFullYear()} San Idli. All rights reserved. 100% Pure Vegetarian Restaurant.
          </p>

          <a
            href={`tel:${restaurant.phone}`}
            className="text-saffron hover:text-turmeric text-sm font-medium transition-colors"
          >
            {restaurant.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
