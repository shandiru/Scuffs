// File: RestoreWheelsCTA.jsx
export default function RestoreWheelsCTA() {
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
          <button className="inline-flex items-center justify-center gap-2 font-medium bg-green-700 text-white shadow-sm hover:bg-green-800 transition h-10 rounded-md text-lg px-8 py-3">
            Get Free Quote
          </button>

          {/* Call Button */}
          <button className="inline-flex items-center justify-center gap-2 font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition h-10 rounded-md text-lg px-8 py-3">
            Call (555) 123-4567
          </button>
        </div>
      </div>
    </section>
  );
}
