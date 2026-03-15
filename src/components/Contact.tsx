"use client";

import { restaurant } from "@/data/restaurant";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-dark text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-saffron/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-turmeric/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-saffron font-semibold text-sm tracking-widest uppercase">
            Visit Us
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Come Taste the Tradition
          </h2>
          <div className="spice-divider max-w-xs mx-auto mb-4">
            <span className="text-saffron text-2xl">&#10043;</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Location */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="w-14 h-14 rounded-xl bg-saffron/20 flex items-center justify-center text-saffron mb-6">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Location</h3>
            <p className="text-white/70 leading-relaxed mb-4">{restaurant.address.full}</p>
            <a
              href={restaurant.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-saffron hover:text-turmeric font-medium text-sm transition-colors"
            >
              Get Directions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Hours */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="w-14 h-14 rounded-xl bg-saffron/20 flex items-center justify-center text-saffron mb-6">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <div className="space-y-2.5">
              {restaurant.hours.map((h) => (
                <div key={h.days} className="flex justify-between text-sm">
                  <span className="text-white/70">{h.days}</span>
                  <span className="text-white font-medium">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Order */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="w-14 h-14 rounded-xl bg-saffron/20 flex items-center justify-center text-saffron mb-6">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Contact & Order</h3>

            <div className="space-y-3 mb-6">
              <a
                href={`tel:${restaurant.phone}`}
                className="flex items-center gap-3 text-white/70 hover:text-saffron transition-colors"
              >
                <span className="text-lg">{restaurant.phone}</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Order Online</p>
              {Object.entries(restaurant.orderOnline).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/5 hover:bg-saffron/20 border border-white/10 rounded-lg px-4 py-2.5 text-sm transition-all group"
                >
                  <span className="capitalize font-medium">{name}</span>
                  <svg className="w-4 h-4 text-white/30 group-hover:text-saffron transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm mb-4">Follow us on social media</p>
          <div className="flex justify-center gap-4">
            <a
              href={restaurant.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-saffron/30 flex items-center justify-center transition-all hover:-translate-y-1"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href={restaurant.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-saffron/30 flex items-center justify-center transition-all hover:-translate-y-1"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={restaurant.social.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-saffron/30 flex items-center justify-center transition-all hover:-translate-y-1"
              aria-label="Yelp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206l2.039 1.622c.915.727.546 2.22-.369 3.089zM14.23 15.51l1.672 4.913c.324.948-.947 1.573-1.585.78l-3.302-4.106c-.522-.648-.088-1.6.72-1.585l2.495-.002zm-3.552-1.26l-4.89-1.863c-.944-.36-.677-1.764.332-1.744l5.216.104c.823.016 1.228 1.008.67 1.638l-1.328 1.865zm-.337-3.865L7.39 5.862c-.576-.886.485-1.86 1.32-1.21l4.327 3.362c.683.53.364 1.615-.481 1.706l-2.215.265zM9.68 17.7l-2.453 4.47c-.472.86-1.823.393-1.682-.582l.726-5.044c.115-.799 1.083-1.12 1.601-.53l1.808 2.086c.08.092-.08.092 0 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
