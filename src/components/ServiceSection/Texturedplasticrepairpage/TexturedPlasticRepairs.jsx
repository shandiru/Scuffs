import { ArrowLeft } from "lucide-react";
import { HashLink } from "react-router-hash-link";

// File: TexturedPlasticRepairs.jsx
export default function TexturedPlasticRepairs() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  // offset so fixed header doesn’t overlap
  const scrollWithOffset = (el) => {
    const yOffset = -80; // adjust based on header height
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white mt-25">
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
        className="text-center py-16 md:py-24 px-4 text-white"
        style={{ backgroundColor: PINK }}
      >
        {/* Badge */}
        <span
          className="inline-block mb-4 px-3 py-1 text-sm rounded-md font-medium"
          style={{
            backgroundColor: LIME,
            color: "#000",
          }}
        >
          Specialized Service
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Textured Plastic Repairs
        </h1>

        {/* Subheading */}
        <p className="text-xl mb-8 opacity-90">
          Specialized repair and restoration of textured plastic components and trim
        </p>

        {/* CTA Button → scrolls to Contact */}
        <HashLink
          smooth
          to="/#contact"
          scroll={scrollWithOffset}
          className="font-semibold text-lg px-8 h-12 rounded-md transition shadow-sm inline-flex items-center justify-center"
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
          Get Expert Quote
        </HashLink>
      </div>
    </section>
  );
}
