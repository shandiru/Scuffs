import React from "react";
import { ArrowLeft } from "lucide-react";

export default function FullHeader() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

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
        className="text-center py-16 md:py-24 px-4 text-white"
        style={{ backgroundColor: PINK }}
      >
        {/* Tag */}
        <span
          className="inline-block text-xs md:text-sm px-3 py-1 rounded-lg mb-4 font-medium"
          style={{ backgroundColor: LIME, color: "#000" }}
        >
          Premium Service
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Full Vehicle Respray
        </h1>

        {/* Description */}
        <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg mb-8">
          Complete vehicle respraying services with professional paint matching
        </p>

        {/* Button */}
        <a
          href="#quote"
          className="inline-block font-semibold px-6 py-3 rounded-md shadow-md transition"
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
          Get Color Consultation
        </a>
      </div>
    </section>
  );
}
