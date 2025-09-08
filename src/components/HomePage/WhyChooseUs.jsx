import React from "react";
import { FaCarCrash } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { MdBuild } from "react-icons/md";
import { MdFormatPaint } from "react-icons/md";

export default function WhyChooseUs() {
  const services = [
    {
      icon: <GiCarDoor className="text-[40px]" />,
      title: "Dent Removal",
      desc: "Flawless, expert repairs to restore your car’s perfect finish.",
    },
    {
      icon: <MdFormatPaint className="text-[40px]" />,
      title: "Custom Painting",
      desc: "Professional paintwork designed to match or refresh your vehicle.",
    },
    {
      icon: <MdBuild className="text-[40px]" />,
      title: "Motor Works",
      desc: "Trusted technicians keeping your car reliable and road-ready.",
    },
    {
      icon: <FaCarCrash className="text-[40px]" />,
      title: "Damage Repairs",
      desc: "Quick, reliable fixes for minor accident damage.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Choose Us
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Recognised for award-winning service, certified quality, and 5-star customer satisfaction.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-2xl border hover:shadow-lg transition-all duration-300"
              style={{
                borderColor: "#E066E6", // pink/purple border
              }}
            >
              <div
                className="p-4 rounded-full mb-4"
                style={{
                  backgroundColor: "#CCFF66", // neon lime background
                  color: "#E066E6", // pink icon
                }}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
