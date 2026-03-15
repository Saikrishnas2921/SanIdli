"use client";

import { testimonials } from "@/data/restaurant";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-turmeric" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-4 pattern-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-saffron font-semibold text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-dark mt-3 mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Our Guests Say
          </h2>
          <div className="spice-divider max-w-xs mx-auto mb-4">
            <span className="text-saffron text-2xl">&#10043;</span>
          </div>
          <p className="text-gray-500 max-w-xl mx-auto">
            Don&apos;t just take our word for it — hear from our happy customers
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((review, i) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-saffron/10 text-6xl font-bold leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                &ldquo;
              </div>

              <StarRating rating={review.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 relative z-10">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-saffron-light flex items-center justify-center text-saffron font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-dark font-semibold text-sm">{review.name}</div>
                  <div className="text-gray-400 text-xs">{review.source} Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { platform: "Google", rating: "4.4", icon: "G" },
              { platform: "Yelp", rating: "4.5", icon: "Y" },
              { platform: "DoorDash", rating: "4.6", icon: "D" },
            ].map((r) => (
              <div key={r.platform}>
                <div className="w-12 h-12 rounded-xl bg-saffron-light flex items-center justify-center text-saffron font-bold text-lg mx-auto mb-3">
                  {r.icon}
                </div>
                <div className="text-2xl font-bold text-dark">{r.rating}</div>
                <div className="text-gray-400 text-sm">{r.platform}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
