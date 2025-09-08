// File: TexturedPlasticRestoration.jsx
import { FaCheckCircle, FaClock, FaShieldAlt, FaStar } from "react-icons/fa";

export default function TexturedPlasticRestoration() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#F1FAF1" }}>
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-extrabold mb-6 text-gray-900">
              Expert Plastic Component Restoration
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Textured plastic components require specialized knowledge and
              techniques to repair properly. Our experts can restore bumpers,
              trim pieces, and other plastic parts to their original texture and
              appearance, saving you the cost of expensive replacements.
            </p>

            <div className="space-y-4">
              {[
                "Texture matching and recreation",
                "Color restoration and UV protection",
                "Crack repair and reinforcement",
                "Trim piece restoration",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5" style={{ color: PINK }} />
                  <span className="text-gray-800">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-lg p-8"
            style={{ backgroundColor: `${LIME}30` }}
          >
            <img
              src="/textured.png"
              alt="Textured plastic repair process"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Components we restore */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
            Components We Restore
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Bumpers", desc: "Front and rear bumper texture restoration" },
              { title: "Side Trim", desc: "Door trim and side molding repair" },
              { title: "Wheel Arches", desc: "Textured wheel arch liner restoration" },
              { title: "Mirror Housings", desc: "Side mirror casing repair and refinishing" },
              { title: "Spoilers", desc: "Rear spoiler repair" },
              { title: "Interior Trim", desc: "Dashboard and interior plastic restoration" },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border py-6 shadow-sm 
                           transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                style={{ borderColor: `${PINK}40` }}
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
          {[
            {
              icon: <FaClock className="h-8 w-8 mx-auto mb-1" style={{ color: LIME }} />,
              title: "2–3 Day Service",
              desc: "Specialized repairs completed within 2–3 days",
            },
            {
              icon: <FaShieldAlt className="h-8 w-8 mx-auto mb-1" style={{ color: LIME }} />,
              title: "Perfect Match Guarantee",
              desc: "Texture and color matching guaranteed",
            },
            {
              icon: <FaStar className="h-8 w-8 mx-auto mb-1" style={{ color: LIME }} />,
              title: "Cost Effective",
              desc: "Save up to 70% versus replacement costs",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white flex flex-col gap-4 rounded-xl border py-6 shadow-sm text-center 
                         transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{ borderColor: `${PINK}40` }}
            >
              {item.icon}
              <div className="font-semibold">{item.title}</div>
              <p className="text-sm text-gray-600 px-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
