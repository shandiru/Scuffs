import React from "react";

const PaintOptions = () => {
    const options = [
        {
            title: "Solid Colors",
            description: "Classic single-stage colors",
            features: [
                "Wide color selection",
                "Cost-effective",
                "Durable finish",
                "Easy maintenance"
            ]
        },
        {
            title: "Metallic Finishes",
            description: "Sparkling metallic paint systems",
            features: [
                "Premium appearance",
                "Light reflection",
                "Depth and richness",
                "Resale value"
            ]
        },
        {
            title: "Pearl & Special Effects",
            description: "Luxury pearl and color-changing paints",
            features: [
                "Unique appearance",
                "Color depth",
                "Premium finish",
                "Show-quality results"
            ]
        }
    ];

    return (
        <div className="mb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Paint Options Available</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {options.map((option, index) => (
                        <div key={index} className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                                <div className="font-semibold text-xl">{option.title}</div>
                                <div className="text-muted-foreground text-sm">{option.description}</div>
                            </div>
                            <div className="px-6">
                                <ul className="space-y-2">
                                    {option.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-accent">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaintOptions;
