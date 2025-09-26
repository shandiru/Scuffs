// File: QualityHeader.jsx
"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function QualityHeader() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  // Prevent sticky navbar overlap when scrolling
  const scrollWithOffset = (el) => {
    const yOffset = -80; // adjust if your header height differs
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white mt-25">
      {/* Back Link */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <a
          href="/"
          className="flex items-center text-sm md:text-base text-gray-700 hover:text-black transition"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Services
        </a>
      </div>

      {/* Main Content */}
      <div
        className="text-center py-16 md:py-24 px-4"
        style={{ backgroundColor: PINK }}
      >
        {/* Tag */}
        <span
          className="inline-block text-xs md:text-sm px-3 py-1 rounded mb-4 font-medium"
          style={{ backgroundColor: LIME, color: "#000" }}
        >
          Our Promise
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Quality Guarantee
        </h1>

        {/* Description */}
        <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg mb-8">
          All our work comes with a comprehensive warranty and satisfaction
          guarantee
        </p>

        {/* CTA Button → scroll to Contact */}
        <HashLink
          smooth
          to="/#contact"
          scroll={scrollWithOffset}
          className="inline-flex items-center justify-center font-semibold rounded-md shadow-md transition-all px-8 h-12 text-lg"
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
          Learn About Our Promise
        </HashLink>
      </div>
    </section>
  );
}
