import React from "react";
import { FaClock, FaShieldAlt, FaStar } from "react-icons/fa"; // Import the required React Icons

const ServiceOptions = () => {
    const services = [
        {
            icon: <FaClock className="text-green-500 w-50" />, // React Icon for clock
            title: "7-10 Day Service",
            description: "Complete respray finished within 7-10 days"
        },
        {
            icon: <FaShieldAlt className="text-green-500" />, // React Icon for shield
            title: "5 Year Warranty",
            description: "Extended warranty on paint and finish"
        },
        {
            icon: <FaStar className="text-green-500" />, // React Icon for star
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
                                {service.icon} {/* React Icon placed here */}
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
