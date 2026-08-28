"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Platform", href: "#platform" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* VECPRO Logo / Wordmark */}
        <a
          href="#home"
          className="group flex flex-col leading-none"
        >
          <span className="text-[22px] font-bold tracking-[0.18em] text-[#102A35] transition-colors group-hover:text-[#006B78]">
            VECPRO
          </span>

          <span className="mt-1 text-[8px] font-medium tracking-[0.08em] text-[#008C95]">
            SMARTER SURVEILLANCE. SAFER COMMUNITIES.
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative py-2 text-[13px] font-medium transition-colors ${
                index === 0
                  ? "text-[#006B78]"
                  : "text-slate-600 hover:text-[#008C95]"
              }`}
            >
              {item.label}

              {index === 0 && (
                <span className="absolute -bottom-[2px] left-0 h-[2px] w-full rounded-full bg-[#008C95]" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#download"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#006B78] to-[#159BD3] px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md lg:flex"
        >
          <Download size={15} strokeWidth={2} />
          Download App
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-[#102A35] transition-colors hover:bg-[#EAF8FA] lg:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={2} />
          ) : (
            <Menu size={24} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-[#EAF8FA] text-[#006B78]"
                  : "text-slate-700 hover:bg-[#EAF8FA] hover:text-[#008C95]"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#download"
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#006B78] to-[#159BD3] px-5 py-3 text-sm font-semibold text-white transition-colors hover:shadow-md"
          >
            <Download size={16} />
            Download App
          </a>
        </nav>
      </div>
    </header>
  );
}