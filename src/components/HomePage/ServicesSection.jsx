// File: OurServices.jsx
import React from "react";
import {
  FaWrench,
  FaCar,
  FaMagic,
  FaShieldAlt,
  FaPalette,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    title: "Alloy Wheel Repair",
    desc:
      "Professional restoration of damaged alloy wheels, from minor scuffs to major damage.",
    href: "/services/alloy-wheel-repair",
    icon: <FaWrench className="h-6 w-6 text-[#E066E6]" />,
    chips: ["Scuff Repair", "Crack Welding", "Diamond Cutting", "Color Matching"],
  },
  {
    title: "Bodywork Scuffs, Cracks and Dents",
    desc:
      "Expert repair of vehicle bodywork damage, restoring your car to its original condition.",
    href: "/services/bodywork-repair",
    icon: <FaCar className="h-6 w-6 text-[#E066E6]" />,
    chips: [
      "Dent Removal",
      "Scratch Repair",
      "Panel Beating",
      "Surface Preparation",
      "Smart Repair",
    ],
  },
  {
    title: "Textured Plastic Repairs",
    desc:
      "Specialized repair and restoration of textured plastic components and trim.",
    href: "/services/textured-plastic-repair",
    icon: <FaMagic className="h-6 w-6 text-[#E066E6]" />,
    chips: [
      "Trim Restoration",
      "Texture Matching",
      "Color Restoration",
      "UV Protection",
    ],
  },
  {
    title: "Panel Damage",
    desc: "Comprehensive panel repair services for all types of vehicle damage.",
    href: "/services/panel-damage",
    icon: <FaShieldAlt className="h-6 w-6 text-[#E066E6]" />,
    chips: [
      "Panel Replacement",
      "Structural Repair",
      "Alignment",
      "Reinforcement",
    ],
  },
  {
    title: "Full Respray",
    desc:
      "Complete vehicle respraying services with professional paint matching.",
    href: "/services/full-respray",
    icon: <FaPalette className="h-6 w-6 text-[#E066E6]" />,
    chips: [
      "Color Matching",
      "Multi-coat System",
      "Primer Application",
      "Clear Coat Finish",
    ],
  },
  {
    title: "Quality Guarantee",
    desc:
      "All our work comes with a comprehensive warranty and satisfaction guarantee.",
    href: "/services/quality-guarantee",
    icon: <FaCheckCircle className="h-6 w-6 text-[#E066E6]" />,
    chips: [
      "12 Month Warranty",
      "Satisfaction Guarantee",
      "Quality Assurance",
      "Follow-up Service",
    ],
  },
];

export default function OurServices() {
  return (
    <section className="py-16 px-4 bg-white" id="services">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From minor touch-ups to complete restorations, we provide comprehensive automotive repair solutions
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="bg-white text-gray-900 flex flex-col justify-between rounded-xl border border-gray-200 shadow-sm
                         hover:scale-105 hover:shadow-[0_8px_24px_rgba(224,102,230,0.25)] hover:ring-1 hover:ring-[#E066E6]/40 
                         transition-all duration-300 group"
            >
              {/* Card header */}
              <div className="grid auto-rows-min items-start gap-1.5 px-6 py-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#CCFF66]/30 rounded-lg transition-all duration-300 group-hover:bg-[#CCFF66]/50 group-hover:scale-110">
                    {s.icon}
                  </div>
                  <span className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium bg-[#E066E6] text-white">
                    Professional
                  </span>
                </div>

                <h3 className="text-xl font-bold transition-colors group-hover:text-[#E066E6]">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Spacer pushes content */}
              <div className="flex-grow px-6">
                <div className="flex flex-wrap gap-2 pb-6">
                  {s.chips.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium
                                 text-gray-900 border-[#E066E6]/40 hover:bg-[#CCFF66]/40 transition-transform hover:scale-105"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA fixed to bottom */}
              <div className="px-6 pb-6 mt-auto">
                <a href={s.href} className="block">
                  <button
                    type="button"
                    className="w-full h-9 px-4 py-2 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium
                               bg-[#E066E6] text-white shadow-sm transition-all duration-200 hover:bg-[#CCFF66] hover:text-black hover:scale-[1.02]
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E066E6]/40"
                  >
                    Learn More
                  </button>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
