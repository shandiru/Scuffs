import React from "react";
import { FaClock, FaShieldAlt, FaStar } from "react-icons/fa";

const ServiceOptions = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  const services = [
    {
      icon: <FaClock size={40} />,
      title: "7–10 Day Service",
      description: "Complete respray finished within 7–10 days",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Lifetime Warranty",
      description: "Lifetime warranty on paintwork (excludes rust repairs)",
    },
    {
      icon: <FaStar size={40} />,
      title: "Showroom Quality",
      description: "Professional-grade paint booth and equipment",
    },
  ];

  return (
    <div className="mb-16 py-12 px-6" style={{ backgroundColor: `${LIME}20` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Service Options Available
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg text-center"
              style={{ borderColor: `${PINK}40` }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full"
                style={{ backgroundColor: `${PINK}15`, color: PINK }}
              >
                {service.icon}
              </div>
              <div className="text-xl font-semibold mb-3 text-gray-900">
                {service.title}
              </div>
              <div className="text-sm text-gray-600">{service.description}</div>
            </div>
          ))}
        </div>

        {/* Optional: Add global note below */}
        <div className="text-center text-sm mt-8 text-gray-600 italic">
          *Rust-related repairs are not covered under warranty.
        </div>

        {/* Gradient underline */}
        <div
          className="mt-10 h-1 w-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${PINK}, ${LIME})`,
          }}
        />
      </div>
    </div>
  );
};

export default ServiceOptions;
