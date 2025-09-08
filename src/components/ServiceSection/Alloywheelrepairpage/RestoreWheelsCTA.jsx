// File: RestoreWheelsCTA.jsx
export default function RestoreWheelsCTA() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#F5FFF7" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Ready to Restore Your Wheels?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Get a free quote for your alloy wheel repair today
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Free Quote Button */}
          <button
            className="inline-flex items-center justify-center gap-2 font-medium shadow-sm transition h-10 rounded-md text-lg px-8 py-3"
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
            Get Free Quote
          </button>

          {/* Call Button */}
          <a
            href="tel:+447776300300"
            className="inline-flex items-center justify-center gap-2 font-medium transition h-10 rounded-md text-lg px-8 py-3 border"
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
