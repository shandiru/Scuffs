// File: BodyworkRestoration.jsx
import { FaCheckCircle, FaClock, FaShieldAlt, FaStar } from "react-icons/fa";

export default function BodyworkRestoration() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#F1FAF1" }}>
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-extrabold mb-6 text-gray-900">
              Professional Bodywork Restoration
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our expert technicians specialize in repairing all types of
              bodywork damage, from minor scratches and scuffs to major dents
              and cracks. We use industry-leading techniques to ensure invisible
              repairs that restore your vehicle&apos;s original appearance.
            </p>

            <div className="space-y-4">
              {[
                "Paintless dent removal (PDR)",
                "Scratch and scuff repair",
                "Panel beating and reshaping",
                "Color matching and blending",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-800">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#eaf3ea] rounded-lg p-8">
            <img
              src="/body.png"
              alt="Bodywork repair process"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Types of damage */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
            Types of Damage We Repair
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Door Dings",
                desc: "Small dents from car doors and shopping carts",
              },
              {
                title: "Scratches",
                desc: "Surface and deep scratches from various sources",
              },
              {
                title: "Scuffs",
                desc: "Paint transfer and abrasion damage",
              },
              {
                title: "Hail Damage",
                desc: "Multiple small dents from hail storms",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm"
              >
                <div className="px-6">
                  <div className="font-semibold text-lg">{card.title}</div>
                </div>
                <div className="px-6">
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white flex flex-col gap-4 rounded-xl border border-gray-200 py-6 shadow-sm text-center">
            <FaClock className="h-8 w-8 text-green-600 mx-auto mb-1" />
            <div className="font-semibold">Same Day Service</div>
            <p className="text-sm text-gray-600 px-6">
              Many repairs completed the same day
            </p>
          </div>

          <div className="bg-white flex flex-col gap-4 rounded-xl border border-gray-200 py-6 shadow-sm text-center">
            <FaShieldAlt className="h-8 w-8 text-green-600 mx-auto mb-1" />
            <div className="font-semibold">Lifetime Warranty</div>
            <p className="text-sm text-gray-600 px-6">
              Guaranteed workmanship for peace of mind
            </p>
          </div>

          <div className="bg-white flex flex-col gap-4 rounded-xl border border-gray-200 py-6 shadow-sm text-center">
            <FaStar className="h-8 w-8 text-green-600 mx-auto mb-1" />
            <div className="font-semibold">Insurance Approved</div>
            <p className="text-sm text-gray-600 px-6">
              Work with all major insurance companies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
