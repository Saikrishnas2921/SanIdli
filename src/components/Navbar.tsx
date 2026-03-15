"use client";

import { useState, useEffect } from "react";
import { restaurant } from "@/data/restaurant";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all ${
                scrolled
                  ? "bg-saffron text-white"
                  : "bg-white/20 text-white backdrop-blur-sm"
              }`}
            >
              S
            </div>
            <div>
              <span
                className={`text-xl font-bold tracking-wider transition-colors ${
                  scrolled ? "text-dark" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {restaurant.name}
              </span>
              <span
                className={`hidden sm:block text-xs tracking-widest uppercase transition-colors ${
                  scrolled ? "text-saffron" : "text-saffron-light"
                }`}
              >
                {restaurant.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-saffron ${
                  scrolled ? "text-dark" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={restaurant.orderOnline.doordash}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-saffron hover:bg-saffron-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-saffron/30 hover:-translate-y-0.5"
            >
              Order Online
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-dark" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="glass rounded-2xl p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-dark font-medium text-lg hover:text-saffron transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={restaurant.orderOnline.doordash}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-saffron hover:bg-saffron-dark text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                Order Online
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
