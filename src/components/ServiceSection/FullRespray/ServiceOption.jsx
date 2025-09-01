import React from "react";

const ServiceOptions = () => {
    const services = [
        {
            icon: "lucide-clock",
            title: "7-10 Day Service",
            description: "Complete respray finished within 7-10 days"
        },
        {
            icon: "lucide-shield",
            title: "5 Year Warranty",
            description: "Extended warranty on paint and finish"
        },
        {
            icon: "lucide-star",
            title: "Showroom Quality",
            description: "Professional-grade paint booth and equipment"
        }
    ];

    return (
        <div className="mb-16 bg-light p-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Service Options Available</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg">
                            <div className="flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={`lucide ${service.icon} text-green-500`}
                                >
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                            </div>
                            <div className="text-xl font-semibold text-center text-foreground mb-4">{service.title}</div>
                            <div className="text-sm text-muted-foreground text-center">{service.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceOptions;
