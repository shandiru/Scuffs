// File: BodyworkCTA.jsx
export default function
  BodyworkCTA() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#F1FAF1" }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Get Your Bodywork Repaired Today
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-600 mb-8">
          Free damage assessment and competitive pricing
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-pink-700 text-white font-semibold px-8 py-3 rounded-md text-lg
                       hover:bg-pink-800 transition"
          >
            Book Assessment
          </button>

          <a
            href="tel:+447776300300" // This will open the phone dialer with the number
            className="inline-flex items-center justify-center gap-2 font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition h-10 rounded-md text-lg px-8 py-3"
          >
            Call +44 7776 300300
          </a>
        </div>
      </div>
    </section>
  );
}
