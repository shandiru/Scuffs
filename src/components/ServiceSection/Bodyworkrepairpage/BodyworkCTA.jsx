// File: BodyworkCTA.jsx
export default function BodyworkCTA() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

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
          {/* Book Assessment Button */}
          <button
            className="font-semibold px-8 py-3 rounded-md text-lg transition shadow-sm"
            style={{
              backgroundColor: PINK,
              color: "#fff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = LIME;
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = PINK;
              e.currentTarget.style.color = "#fff";
            }}
          >
            Book Assessment
          </button>

          {/* Call Button */}
          <a
            href="tel:+447776300300"
            className="inline-flex items-center justify-center gap-2 font-medium h-10 rounded-md text-lg px-8 py-3 border transition shadow-sm"
            style={{
              borderColor: PINK,
              color: PINK,
              backgroundColor: "#fff",
            }}
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
}
