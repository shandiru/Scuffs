// File: TexturedPlasticRepairs.jsx
export default function TexturedPlasticRepairs() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#b30086" }}>
      <div className="max-w-4xl mx-auto text-center text-white">
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
