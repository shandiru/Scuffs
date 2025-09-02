// File: BodyworkRepairHero.jsx
export default function BodyworkRepairHero() {
  return (
    <section className="bg-[#b30086] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium bg-pink-200 text-pink-900 mb-4">
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

        {/* CTA Button */}
        <button className="bg-gray-900 text-white font-semibold text-lg px-8 py-3 rounded-md hover:bg-gray-800 transition">
          Get Free Assessment
        </button>
      </div>
    </section>
  );
}
