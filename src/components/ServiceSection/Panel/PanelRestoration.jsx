import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const PanelRestoration = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left content */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Complete Panel Restoration
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            From minor panel damage to major collision repairs, our skilled
            technicians can restore your vehicle's panels to factory
            specifications. We handle everything from door panels and fenders to
            quarter panels and structural repairs.
          </p>

          <div className="space-y-4">
            {[
              "Panel replacement and alignment",
              "Structural damage repair",
              "Frame straightening and alignment",
              "Welding and fabrication services",
            ].map((point, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
              >
                <FiCheckCircle className="h-5 w-5" style={{ color: PINK }} />
                <span className="text-gray-800">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="rounded-lg p-2" style={{ backgroundColor: `${LIME}50` }}>
          <img
            alt="Panel damage repair process"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            src="/panel.png"
          />
        </div>
      </div>
    </div>
  );
};

export default PanelRestoration;
