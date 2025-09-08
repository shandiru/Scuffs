import React from 'react';

const WarrantyClaimSection = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section className="py-16 px-4" style={{ backgroundColor: `${LIME}30` }}>
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900">
          Warranty Claims & Support
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          If you experience any issues with our work, contact us immediately.
          We’re committed to resolving any concerns quickly and professionally.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="bg-pink-600 text-white font-medium py-3 px-8 rounded-md shadow-md 
                       hover:bg-pink-700 hover:scale-105 transition-all"
            style={{ backgroundColor: PINK }}
          >
            File Warranty Claim
          </button>

          <a
            href="tel:+447776300300"
            className="inline-flex items-center justify-center gap-2 font-medium 
                       border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 
                       hover:scale-105 transition-all rounded-md text-lg px-8 py-3 shadow-sm"
          >
            Call +44 7776 300300
          </a>
        </div>
      </div>
    </section>
  );
};

export default WarrantyClaimSection;
