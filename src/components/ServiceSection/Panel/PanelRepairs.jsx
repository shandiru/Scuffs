import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const panelRepairData = [
    {
        title: "Minor Panel Damage",
        description: "Small dents, creases, and surface damage",
        items: [
            { name: "Dent removal" },
            { name: "Surface preparation" },
            { name: "Paint touch-up" },
            { name: "Polishing" }
        ]
    },
    {
        title: "Major Panel Damage",
        description: "Significant damage requiring panel replacement",
        items: [
            { name: "Panel replacement" },
            { name: "Structural alignment" },
            { name: "Welding" },
            { name: "Full refinishing" }
        ]
    },
    {
        title: "Collision Damage",
        description: "Accident-related panel and structural damage",
        items: [
            { name: "Frame straightening" },
            { name: "Multiple panel repair" },
            { name: "Safety inspection" },
            { name: "Insurance coordination" }
        ]
    },
    {
        title: "Rust Repair",
        description: "Corrosion treatment and panel restoration",
        items: [
            { name: "Rust removal" },
            { name: "Metal treatment" },
            { name: "Panel patching" },
            { name: "Protective coating" }
        ]
    }
];

const PanelRepairs = () => {
    return (
        <div className="mb-16">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
                    Types of Panel Repairs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {panelRepairData.map((repair, index) => (
                        <div key={index} className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                            <div className="px-6 pb-6">
                                <div className="font-semibold text-xl">{repair.title}</div>
                                <div className="text-muted-foreground text-base">{repair.description}</div>
                            </div>
                            <div className="px-6">
                                <ul className="space-y-2">
                                    {repair.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm">
                                            <FiCheckCircle className="h-4 w-4 text-accent text-pink-500" /> {/* React Icon Check Circle */}
                                            {item.name}
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

export default PanelRepairs;
