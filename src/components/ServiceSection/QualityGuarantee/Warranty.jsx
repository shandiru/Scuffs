import React from 'react';

const WarrantyTerms = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  const terms = [
    {
      title: "Alloy Wheel Repair",
      details: "Finish, structural integrity, color matching",
      duration: "12 Months",
    },
    {
      title: "Bodywork Repair",
      details: "Workmanship, paint adhesion",
      duration: "Lifetime",
    },
    {
      title: "Plastic Repair",
      details: "Texture matching, color stability, adhesion",
      duration: "12 Months",
    },
    {
      title: "Panel Damage",
      details: "Structural integrity, alignment, safety",
      duration: "Lifetime",
    },
    {
      title: "Full Respray",
      details: "Paint finish, color matching, clear coat",
      duration: "5 Years",
    },
    {
      title: "All Services",
      details: "100% satisfaction or we’ll make it right",
      duration: "Satisfaction",
    },
  ];

  return (
    <section className="py-16 px-5" style={{ backgroundColor: `${LIME}30` }}>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
        Warranty Terms by Service
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {terms.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-md border transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ borderColor: `${PINK}40` }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{t.title}</h3>
            <p className="text-gray-700">{t.details}</p>
            <p className="mt-2 text-sm font-medium" style={{ color: PINK }}>
              {t.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WarrantyTerms;
