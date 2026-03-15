"use client";

import { restaurant } from "@/data/restaurant";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/8312083/pexels-photo-8312083.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      <div className="hero-overlay absolute inset-0" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-saffron/10 blur-3xl animate-float" />
      <div className="absolute bottom-32 right-10 w-48 h-48 rounded-full bg-turmeric/10 blur-3xl animate-float delay-300" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
          <span className="text-saffron-light text-sm font-medium tracking-wider uppercase">
            100% Pure Vegetarian
          </span>
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-in-up delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="block">Experience the</span>
          <span className="block gradient-text" style={{ WebkitTextFillColor: "transparent" }}>
            Taste of South India
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
          {restaurant.description}
        </p>

        {/* Location tag */}
        <p className="animate-fade-in-up delay-300 text-saffron text-sm font-medium tracking-wider mb-10">
          <svg className="inline w-4 h-4 mr-1 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          Phoenix, Arizona
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="group bg-saffron hover:bg-saffron-dark text-white px-8 py-4 rounded-full text-lg font-semibold tracking-wide transition-all hover:shadow-xl hover:shadow-saffron/30 hover:-translate-y-1 flex items-center gap-2"
          >
            Explore Our Menu
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href={restaurant.orderOnline.doordash}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold tracking-wide transition-all hover:-translate-y-1"
          >
            Order Delivery
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up delay-500 mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "4.6", label: "Rating" },
            { value: "500+", label: "Reviews" },
            { value: "100+", label: "Menu Items" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-saffron">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
