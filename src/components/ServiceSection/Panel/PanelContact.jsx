import React from "react";
import { FaClock, FaShieldAlt, FaStar } from "react-icons/fa"; // Importing the required React Icons

const ServiceCards = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* 3-5 Day Service Card */}
        <div
          className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-white text-gray-900 
                     transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          style={{ borderColor: `${PINK}40` }}
        >
          <div className="px-6 pb-6 text-center">
            <FaClock className="h-8 w-8 mx-auto mb-3" style={{ color: LIME }} />
            <div className="leading-none font-semibold">3–5 Day Service</div>
          </div>
          <div className="px-6 text-center">
            <p className="text-sm text-gray-600">
              Most panel repairs completed within 3–5 days
            </p>
          </div>
        </div>

        {/* Structural Warranty Card */}
        <div
          className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-white text-gray-900 
                     transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          style={{ borderColor: `${PINK}40` }}
        >
          <div className="px-6 pb-6 text-center">
            <FaShieldAlt className="h-8 w-8 mx-auto mb-3" style={{ color: LIME }} />
            <div className="leading-none font-semibold">Structural Warranty</div>
          </div>
          <div className="px-6 text-center">
            <p className="text-sm text-gray-600">
              Lifetime warranty on structural repairs
            </p>
          </div>
        </div>

        {/* Factory Standards Card */}
        <div
          className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-white text-gray-900 
                     transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          style={{ borderColor: `${PINK}40` }}
        >
          <div className="px-6 pb-6 text-center">
            <FaStar className="h-8 w-8 mx-auto mb-3" style={{ color: LIME }} />
            <div className="leading-none font-semibold">Factory Standards</div>
          </div>
          <div className="px-6 text-center">
            <p className="text-sm text-gray-600">
              All repairs meet manufacturer specifications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
