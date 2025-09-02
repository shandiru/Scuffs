// src/components/AlloyWheelHero.jsx
"use client";

export default function AlloyWheelHero() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#b30086" }}>
      <div className="max-w-4xl mx-auto text-center text-white">
        {/* Badge */}
        <span className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium mb-4 bg-pink-200 text-pink-900">
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
        <button className="inline-flex items-center justify-center gap-2 font-medium bg-gray-900 text-white hover:bg-gray-800 h-10 rounded-md text-lg px-8 py-3 transition">
          Get Free Quote
        </button>
      </div>
    </section>
  );
}
