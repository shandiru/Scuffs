import React from "react";

const PaintProcess = () => {
  const steps = [
    { id: 1, title: "Preparation", description: "Complete disassembly and masking" },
    { id: 2, title: "Stripping", description: "Old paint removal and surface prep" },
    { id: 3, title: "Primer", description: "High-quality primer application" },
    { id: 4, title: "Base Coat", description: "Color application in controlled environment" },
    { id: 5, title: "Clear Coat", description: "Protective clear coat and polishing" }
  ];

  return (
    <div className="mb-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Our Paint Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {steps.map((step) => (
                      <div key={step.id} className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center">
                          <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                              <div className="w-12 h-12 bg-pink-600 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                                  {step.id}
                              </div>
                              <div className="font-semibold text-lg">{step.title}</div>
                          </div>
                          <div className="px-6">
                              <div className="text-muted-foreground text-sm">{step.description}</div>
                          </div>
                      </div>
                  ))}
              </div>
        </div>
    </div>
  );
};

export default PaintProcess;
