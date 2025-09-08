// src/components/AlloyWheelHero.jsx
"use client";

import { ArrowLeft } from "lucide-react";

export default function AlloyWheelHero() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section className="w-full bg-white">
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
          style={{
            backgroundColor: LIME,
            color: "#000",
          }}
        >
          Professional Service
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Alloy Wheel Repair
        </h1>

        {/* Subheading */}
        <p className="text-xl mb-8 opacity-90">
          Professional restoration of damaged alloy wheels, from minor scuffs to major damage
        </p>

        {/* CTA Button */}
        <button
          className="inline-flex items-center justify-center gap-2 font-medium h-10 rounded-md text-lg px-8 py-3 transition"
          style={{
            backgroundColor: LIME,
            color: "#000",
          }}
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
          Get Free Quote
        </button>
      </div>
    </section>
  );
}
