import { ArrowLeft } from "lucide-react";
import { HashLink } from "react-router-hash-link";

// File: BodyworkRepairHero.jsx
export default function BodyworkRepairHero() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  // offset so fixed header doesn’t overlap
  const scrollWithOffset = (el) => {
    const yOffset = -80; // adjust to match your header height
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="text-white mt-25">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <a
          href="/"
          className="flex items-center text-sm md:text-base text-gray-700 hover:text-black transition"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Services
        </a>
      </div>

      <div
        className="text-center py-16 md:py-24 px-4"
        style={{ backgroundColor: PINK }}
      >
        {/* Badge */}
        <span
          className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium mb-4"
          style={{
            backgroundColor: LIME,
            color: "#000",
          }}
        >
          Expert Repair
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Bodywork Scuffs, Cracks &amp; Dents
        </h1>

        {/* Subtitle */}
        <p className="text-xl mb-8 opacity-90">
          Expert repair of vehicle bodywork damage, restoring your car to its
          original condition
        </p>

        {/* CTA Button → scroll to Contact */}
        <HashLink
          smooth
          to="/#contact"
          scroll={scrollWithOffset}
          className="font-semibold text-lg px-8 py-3 rounded-md transition inline-flex items-center justify-center"
          style={{
            backgroundColor: LIME,
            color: "#000",
          }}
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
          Get Free Assessment
        </HashLink>
      </div>
    </section>
  );
}
