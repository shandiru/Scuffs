import { ArrowLeft } from "lucide-react";

// File: TexturedPlasticRepairs.jsx
export default function TexturedPlasticRepairs() {
  return (
    <section className="w-full  bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <a
          href="/"
          className="flex items-center text-sm md:text-base text-gray-700 hover:text-black transition"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Services
        </a>
      </div>

      <div className="text-center py-16 md:py-24 px-4" style={{ backgroundColor: "#b30086" }}>
        {/* Badge */}
        <span className="inline-block mb-4 px-3 py-1 text-sm rounded-md bg-pink-400 text-white font-medium">
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

        {/* Button */}
        <button
          className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-md text-lg
                     hover:bg-gray-800 transition"
        >
          Get Expert Quote
        </button>
      </div>
    </section>
  );
}
