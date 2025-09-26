// File: PanelTransformation.jsx
"use client";
import React from "react";
import { FaPhoneAlt, FaClipboardCheck } from "react-icons/fa";

const PanelTransformation = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section
      className="relative w-full py-16 px-4 overflow-hidden"
      style={{ backgroundColor: "#F8FFF8" }}
    >
      <style>
        {`
          @keyframes spinSlow {
            0%   { transform: rotate(0deg); opacity: 0.3; }
            100% { transform: rotate(360deg); opacity: 0.3; }
          }
          .bg-icon {
            position: absolute;
            color: ${PINK} !important;
            animation: spinSlow 42s linear infinite;
            filter: drop-shadow(0 0 12px rgba(224,102,230,0.4));
            z-index: 0;
            pointer-events: none;
          }
          @media (max-width: 768px) {
            .bg-icon {
              width: 2rem !important;
              height: 2rem !important;
              animation-duration: 24s;
              opacity: 0.15;
            }
          }
        `}
      </style>

      {/* ✅ Dotted background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#CCFF66_2px,transparent_2px)] [background-size:20px_20px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage:
            "linear-gradient(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      />

      {/* ✅ Background icons (2 only) */}
      <div className="absolute inset-0 overflow-hidden z-0">
       
        <FaPhoneAlt
          className="bg-icon w-24 h-24 bottom-10 right-12"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* ✅ Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Professional Panel Repair Services
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Expert assessment and repair for all panel damage
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA */}
          <button
            className="inline-flex items-center justify-center gap-2 font-medium h-10 rounded-md px-8 py-3 text-lg shadow-sm transition-all"
            style={{ backgroundColor: PINK, color: "#fff" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = LIME;
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = PINK;
              e.currentTarget.style.color = "#fff";
            }}
          >
            Book Inspection
          </button>

          {/* Secondary CTA */}
          <a
            href="tel:+447776300300"
            className="inline-flex items-center justify-center gap-2 font-medium h-10 rounded-md px-8 py-3 text-lg border transition-all shadow-sm"
            style={{ borderColor: PINK, color: PINK, backgroundColor: "#fff" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = LIME;
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = PINK;
            }}
          >
            Call +44 7776 300300
          </a>
        </div>
      </div>
    </section>
  );
};

export default PanelTransformation;
