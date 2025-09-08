import React from "react";

const PanelTransformation = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#F8FFF8" }}>
      <div className="max-w-4xl mx-auto text-center">
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
