"use client";
import React from "react";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-muted to-background"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-20"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="font-space-grotesk font-bold text-5xl md:text-7xl text-foreground mb-6">
          Revive Your Ride with <span className="text-primary">Scuffs ETC</span>
        </h1>
        <p className="font-dm-sans text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Professional vehicle body repair specialists in Sheffield. From minor
          scuffs to full resprays, we restore your vehicle to perfection.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Scroll to #contact */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all
                       shadow-xs h-10 rounded-md bg-[#b30086] text-white hover:bg-[#990074]
                       font-dm-sans text-lg px-8 py-4"
          >
            Get a Free Quote
          </a>

          {/* Scroll to #gallery */}
          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all
                       border shadow-xs h-10 rounded-md border-[#b30086] text-[#b30086]
                       hover:bg-[#b30086] hover:text-white
                       font-dm-sans text-lg px-8 py-4 bg-transparent"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
