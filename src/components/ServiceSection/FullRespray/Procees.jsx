import React from "react";

const PaintProcess = () => {
  const steps = [
    { id: 1, title: "Preparation", description: "Complete disassembly and masking" },
    { id: 2, title: "Stripping", description: "Old paint removal and surface prep" },
    { id: 3, title: "Primer", description: "High-quality primer application" },
    { id: 4, title: "Base Coat", description: "Color application in controlled environment" },
    { id: 5, title: "Clear Coat", description: "Protective clear coat and polishing" },
  ];

  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <div className="mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
          Our Paint Process
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center
                         transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{ borderColor: `${PINK}40` }}
            >
              <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                <div
                  className="w-12 h-12 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg"
                  style={{ backgroundColor: PINK }}
                >
                  {step.id}
                </div>
                <div className="font-semibold text-lg">{step.title}</div>
              </div>

              <div className="px-6">
                <div className="text-gray-600 text-sm">{step.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional progress bar accent under the grid (purely visual, matches brand) */}
        <div className="mt-8 h-1 w-full rounded-full" style={{ background: `linear-gradient(90deg, ${PINK}, ${LIME})` }} />
      </div>
    </div>
  );
};

export default PaintProcess;
