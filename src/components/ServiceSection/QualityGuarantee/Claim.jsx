import React from "react";
import { HashLink } from "react-router-hash-link";

const WarrantyClaimSection = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  // Offset so sticky header doesn’t overlap
  const scrollWithOffset = (el) => {
    const yOffset = -80; // adjust if your header height differs
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

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
          {/* File Claim → goes to Contact section */}
          <HashLink
            smooth
            to="/#contact"
            scroll={scrollWithOffset}
            className="inline-flex items-center justify-center font-semibold rounded-md shadow-md transition-all px-8 h-12 text-lg"
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
            File Warranty Claim
          </HashLink>

          {/* Call Button */}
          <a
            href="tel:+447776300300"
            className="inline-flex items-center justify-center gap-2 font-medium rounded-md border shadow-sm transition-all px-8 h-12 text-lg"
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

export default WarrantyClaimSection;
