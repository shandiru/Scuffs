import React from "react";

const VehicleTransformation = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor: `${LIME}20` }} // light lime tint background
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Transform Your Vehicle Today
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Professional full respray services with color consultation
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Book Consultation */}
          <button
            className="inline-flex items-center justify-center gap-2 font-medium h-10 rounded-md px-8 py-3 text-lg text-white shadow-md transition-all duration-300"
            style={{ backgroundColor: PINK }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c850c0")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PINK)}
          >
            Book Consultation
          </button>

          {/* Call Button */}
          <a
            href="tel:+447776300300"
            className="inline-flex items-center justify-center gap-2 font-medium border bg-white text-gray-800 hover:bg-gray-100 transition h-10 rounded-md text-lg px-8 py-3 shadow-sm"
            style={{ borderColor: PINK }}
          >
            Call +44 7776 300300
          </a>
        </div>
      </div>
    </section>
  );
};

export default VehicleTransformation;
