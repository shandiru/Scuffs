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
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="font-space-grotesk font-bold text-5xl md:text-7xl text-foreground mb-6">
          Revive Your Ride with{" "}
          <span className="text-primary">Scuffs ETC</span>
        </h1>
        <p className="font-dm-sans text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Professional vehicle body repair specialists in Sheffield. From minor
          scuffs to full resprays, we restore your vehicle to perfection.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50
                       [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0
                       outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
                       aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
                       shadow-xs h-10 rounded-md has-[>svg]:px-4 bg-[#b30086] text-white hover:bg-[#990074]
                       font-dm-sans text-lg px-8 py-4"
          >
            Get a Free Quote
          </button>
          <button
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50
                       [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0
                       outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
                       aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
                       border shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md
                       has-[>svg]:px-4 border-[#b30086] text-[#b30086] hover:bg-[#b30086] hover:text-white
                       font-dm-sans text-lg px-8 py-4 bg-transparent"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
