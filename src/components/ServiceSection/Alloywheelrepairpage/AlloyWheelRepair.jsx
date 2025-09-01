// File: AlloyWheelRepair.jsx
import { FaCheckCircle, FaClock, FaShieldAlt, FaStar } from "react-icons/fa";

export default function AlloyWheelRepair() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#F5FFF7" }}>
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Expert Alloy Wheel Restoration
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our specialized alloy wheel repair service can restore your wheels
              to their original condition, regardless of the damage. From minor
              kerb damage to major structural repairs, we use advanced
              techniques and professional-grade equipment.
            </p>

            <div className="space-y-4">
              {[
                "Diamond cutting and precision machining",
                "Professional color matching and painting",
                "Crack welding and structural repairs",
                "Powder coating and protective finishes",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-green-600" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-8">
            <img
              alt="Alloy wheel repair process"
              className="w-full h-64 object-cover rounded-lg"
              src="/professional-alloy-wheel-repair-workshop-with-dama.png"
            />
          </div>
        </div>

        {/* Repair process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
            Our Repair Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Assessment", desc: "Thorough inspection and damage evaluation" },
              { step: "2", title: "Preparation", desc: "Cleaning and surface preparation" },
              { step: "3", title: "Repair", desc: "Professional restoration techniques" },
              { step: "4", title: "Finishing", desc: "Color matching and protective coating" },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center
                           transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="px-6">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    {p.step}
                  </div>
                  <div className="font-semibold text-lg">{p.title}</div>
                </div>
                <div className="px-6 text-sm text-gray-600">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center
                          transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <FaClock className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <div className="font-semibold">Quick Turnaround</div>
            <p className="text-sm text-gray-600 px-6">
              Most repairs completed within 24–48 hours
            </p>
          </div>

          <div className="bg-white flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center
                          transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <FaShieldAlt className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <div className="font-semibold">12 Month Warranty</div>
            <p className="text-sm text-gray-600 px-6">
              All repairs backed by comprehensive warranty
            </p>
          </div>

          <div className="bg-white flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center
                          transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <FaStar className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <div className="font-semibold">Expert Craftsmen</div>
            <p className="text-sm text-gray-600 px-6">
              Highly skilled technicians with years of experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
