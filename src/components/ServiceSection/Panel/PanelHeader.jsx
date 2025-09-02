// src/components/AlloyWheelHero.jsx
"use client";

import { ArrowLeft } from "lucide-react";

export default function PanelHeader() {
  return (
    <section className="w-full  bg-white">
         <div className="max-w-6xl mx-auto px-4 py-4">
        <a
          href="/"
          className="flex items-center text-sm md:text-base text-gray-700 hover:text-black transition"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Services
        </a>
      </div>
      <div className="text-center py-16 md:py-24 px-4" style={{ backgroundColor: "#b30086" }}>
        {/* Badge */}
        <span className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium mb-4 bg-pink-200 text-pink-900">
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

        {/* CTA Button */}
        <button className="inline-flex items-center justify-center gap-2 font-medium bg-gray-900 text-white hover:bg-gray-800 h-10 rounded-md text-lg px-8 py-3 transition">
          Schedule Inspection
        </button>
      </div>
    </section>
  );
}
