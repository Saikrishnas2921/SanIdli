"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80"
                    alt="Fresh idlis with chutney"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=600&q=80"
                    alt="South Indian filter coffee"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1668236543090-82eb5eab3f85?w=600&q=80"
                    alt="Crispy golden dosa"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80"
                    alt="Traditional South Indian thali"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-saffron text-white px-8 py-4 rounded-2xl shadow-xl shadow-saffron/30 text-center">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm font-medium text-white/80">Years of Tradition</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-saffron font-semibold text-sm tracking-widest uppercase">
              Our Story
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-dark mt-3 mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              A Taste of Home,{" "}
              <span className="gradient-text" style={{ WebkitTextFillColor: "transparent" }}>
                Far from Home
              </span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                San Idli was born from a simple dream — to bring the authentic flavors of South
                India to Phoenix, Arizona. Every dish we serve carries the warmth of home-cooked
                meals and the precision of generations-old recipes.
              </p>
              <p>
                Our kitchen runs like a well-oiled machine: fresh batter ground daily, chutneys
                prepared every two hours, and spices roasted in-house. We believe that great South
                Indian food starts with uncompromising freshness.
              </p>
              <p>
                Whether it&apos;s our pillowy soft idlis, paper-thin crispy dosas, or the aromatic
                filter coffee that transports you to the streets of Chennai — every bite at San
                Idli is a celebration of South Indian culinary heritage.
              </p>
            </div>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                "Fresh Batter Daily",
                "Authentic Recipes",
                "Family Friendly",
                "Catering Available",
                "Dine-in & Takeout",
                "Online Ordering",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-leaf flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-dark text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
