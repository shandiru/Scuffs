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
      description: "Lifetime warranty on all paintwork (rust repairs excluded)",
    },
    {
      icon: <FaStar size={40} />,
      title: "Showroom Quality",
      description: "Professional-grade paint booth and equipment",
    },
  ];

  return (
    <section
      id="service-options"
      className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-16"
      style={{ backgroundColor: `${LIME}20` }}
    >
      <div className="max-w-7xl mx-auto">
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
              <h4 className="text-xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Global Note */}
        <p className="text-center text-sm mt-8 text-gray-600 italic">
          *Rust-related repairs are not covered under any warranty due to the unpredictable nature of corrosion.
        </p>

        {/* Gradient underline */}
        <div
          className="mt-10 h-1 w-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${PINK}, ${LIME})`,
          }}
        />
      </div>
    </section>
  );
};

export default ServiceOptions;
