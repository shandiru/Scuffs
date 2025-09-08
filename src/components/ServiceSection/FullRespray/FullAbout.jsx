import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const FullAbout = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <div className="py-12 px-6" style={{ backgroundColor: `${LIME}20` }}>
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Complete Vehicle Transformation
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Transform your vehicle with our professional full respray service.
            Whether you want to restore the original color, change to a new
            color, or repair extensive paint damage, our expert painters deliver
            showroom-quality results using premium automotive paints.
          </p>

          <ul className="space-y-4 text-gray-700">
            {[
              "Complete paint system removal",
              "Professional surface preparation",
              "Multi-coat paint application",
              "UV-resistant clear coat finish",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center transition-transform duration-300 hover:translate-x-1"
              >
                <FiCheckCircle
                  className="mr-2"
                  style={{ color: PINK }}
                  size={20}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/full.png" // Replace with your actual image
            alt="Vehicle Transformation"
            className="w-full h-72 object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            style={{ border: `3px solid ${PINK}` }}
          />
        </div>
      </div>
    </div>
  );
};

export default FullAbout;
