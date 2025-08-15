import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img
            alt="Scuffs ETC Logo"
            loading="lazy"
            width={60}
            height={60}
            decoding="async"
            className="rounded-full"
            src="Scuffs-etc-logo.png"   // keep your file path
            style={{ color: "transparent" }}
          />
          <div>
            <h1 className="font-space-grotesk font-bold text-xl text-gray-900">
              Scuffs ETC
            </h1>
            <p className="font-dm-sans text-sm text-gray-500">
              Vehicle Body Repair Specialist
            </p>
          </div>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-dm-sans text-gray-900 hover:text-[#b30086] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA (desktop) */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md 
                     text-sm font-medium h-9 px-4 py-2 shadow-xs transition-colors
                     bg-[#b30086] hover:bg-[#990074] text-white font-dm-sans"
        >
          Get Free Quote
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md
                     text-gray-700 hover:bg-gray-100 focus-visible:outline-none
                     focus-visible:ring-2 focus-visible:ring-[#d34ab6]"
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 flex flex-col space-y-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-dm-sans text-gray-900 hover:text-[#b30086] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="px-4 pb-4">
            {/* Mobile CTA (visible on mobile) */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md 
                         text-sm font-medium h-10 px-4 py-2 shadow-xs transition-colors
                         bg-[#b30086] hover:bg-[#990074] text-white font-dm-sans"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
