import React from "react";
import { ArrowLeft } from "lucide-react";

export default function QualityHeader() {
  return (
    <section className="w-full  bg-white">
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
      <div className="bg-[#b30086] text-center py-16 md:py-24 px-4">
        {/* Tag */}
        <span className="inline-block bg-pink-600 text-white text-xs md:text-sm px-3 py-1 rounded mb-4">
          Our Promise
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
         Quality Guarantee
        </h1>

        {/* Description */}
        <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg mb-8">
          All our work comes with a comprehensive warranty and satisfaction guarantee
        </p>

        {/* Button */}
        <a
          href="#quote"
          className="inline-block bg-gray-900 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-black transition"
        >
          Learn About Our Promise
        </a>
      </div>
    </section>
  );
}
