"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomeSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      easing: "ease-out-cubic", // easing style
      once: true, // animate only once
      mirror: false, // disable animation when scrolling back up
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/herovideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content */}
      <div
        className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-20"
        data-aos="fade-up"
      >
        <h1
          className="font-space-grotesk font-bold text-5xl md:text-7xl text-white mb-6"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <span className="text-[#CCFF66]">Scuffs ETC</span>{" "}
          <span className="text-[#E066E6]">LTD</span>
        </h1>

        <p
          className="font-dm-sans text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Professional vehicle body repair specialists in Sheffield. From minor
          scuffs to full resprays, we restore your vehicle to perfection.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all
                       shadow-xs h-10 rounded-md bg-[#E066E6] text-white hover:bg-[#b84dbf]
                       font-dm-sans text-lg px-8 py-4"
          >
            Get a Free Quote
          </a>

          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all
                       border shadow-xs h-10 rounded-md border-[#CCFF66] text-[#CCFF66]
                       hover:bg-[#CCFF66] hover:text-black
                       font-dm-sans text-lg px-8 py-4 bg-transparent"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
