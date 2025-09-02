import React from "react";
import { FiCheckCircle } from "react-icons/fi";

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
                                            <FiCheckCircle className="h-4 w-4 text-accent text-pink-500" /> {/* React Icon Check Circle */}
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
