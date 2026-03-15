"use client";

import { restaurant } from "@/data/restaurant";

export default function OrderBanner() {
  return (
    <section className="py-20 px-4 bg-saffron relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Craving South Indian Food?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Order online for pickup or delivery. Fresh, authentic, and at your doorstep in minutes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={restaurant.orderOnline.doordash}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-saffron-dark hover:bg-cream px-8 py-4 rounded-full text-lg font-bold tracking-wide transition-all hover:shadow-xl hover:-translate-y-1"
          >
            Order on DoorDash
          </a>
          <a
            href={restaurant.orderOnline.grubhub}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold tracking-wide transition-all hover:-translate-y-1"
          >
            Order on Grubhub
          </a>
        </div>
        <p className="mt-6 text-white/60 text-sm">
          Or call us at{" "}
          <a href={`tel:${restaurant.phone}`} className="text-white font-semibold hover:underline">
            {restaurant.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
