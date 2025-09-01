import React from "react";
import { Users, Award, CheckCircle, Star } from "lucide-react";

export default function QualityStandards() {
  const standards = [
    {
      icon: <Users size={40} className="text-green-600" />,
      title: "Certified Technicians",
      description: "All technicians are certified and continuously trained",
    },
    {
      icon: <Award size={40} className="text-green-600" />,
      title: "Premium Materials",
      description: "We use only high-quality, OEM-approved materials",
    },
    {
      icon: <CheckCircle size={40} className="text-green-600" />,
      title: "Quality Inspections",
      description:
        "Multi-point quality checks throughout the repair process",
    },
    {
      icon: <Star size={40} className="text-green-600" />,
      title: "Customer Satisfaction",
      description:
        "98% customer satisfaction rate with 5-star reviews",
    },
  ];

  return (
    <section className="bg-green-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
          Our Quality Standards
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-lg"
            >
              {item.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
