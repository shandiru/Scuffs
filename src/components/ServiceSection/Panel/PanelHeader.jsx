// src/components/AlloyWheelHero.jsx (actually PanelHeader)
"use client";

import { ArrowLeft } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function PanelHeader() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  // offset so fixed header doesn’t overlap contact form
  const scrollWithOffset = (el) => {
    const yOffset = -80; // adjust if header height changes
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white mt-25">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <a
          href="/"
          className="flex items-center text-sm md:text-base text-gray-700 hover:text-black transition"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Services
        </a>
      </div>

      <div
        className="text-center py-16 md:py-24 px-4 text-white"
        style={{ backgroundColor: PINK }}
      >
        {/* Badge */}
        <span
          className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium mb-4"
          style={{ backgroundColor: LIME, color: "#000" }}
        >
          Comprehensive Repair
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Panel Damage Repair
        </h1>

        {/* Subheading */}
        <p className="text-xl mb-8 opacity-90">
          Comprehensive panel repair services for all types of vehicle damage
        </p>

        {/* CTA Button → scrolls to Contact */}
        <HashLink
          smooth
          to="/#contact"
          scroll={scrollWithOffset}
          className="inline-flex items-center justify-center gap-2 font-medium text-lg px-8 h-12 rounded-md transition shadow-sm"
          style={{ backgroundColor: LIME, color: "#000" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#fff";
            e.currentTarget.style.color = PINK;
            e.currentTarget.style.border = `2px solid ${LIME}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = LIME;
            e.currentTarget.style.color = "#000";
            e.currentTarget.style.border = "none";
          }}
        >
          Schedule Inspection
        </HashLink>
      </div>
    </section>
  );
}
