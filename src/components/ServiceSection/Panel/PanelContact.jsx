import React from 'react';
import { FaClock, FaShieldAlt, FaStar } from 'react-icons/fa'; // Importing the required React Icons

const ServiceCards = () => {
  return (
    <div className="">
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {/* 3-5 Day Service Card */}
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
          <div className="px-6 pb-6">
            <FaClock className="h-8 w-8 text-accent mb-3 text-pink-500" /> {/* React Icon Clock */}
            <div className="leading-none font-semibold">3-5 Day Service</div>
          </div>
          <div className="px-6">
            <div className="text-muted-foreground text-sm">Most panel repairs completed within 3-5 days</div>
          </div>
        </div>

        {/* Structural Warranty Card */}
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
          <div className="px-6 pb-6">
            <FaShieldAlt className="h-8 w-8 text-accent mb-3 text-pink-500" /> {/* React Icon Shield */}
            <div className="leading-none font-semibold">Structural Warranty</div>
          </div>
          <div className="px-6">
            <div className="text-muted-foreground text-sm">Lifetime warranty on structural repairs</div>
          </div>
        </div>

        {/* Factory Standards Card */}
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
          <div className="px-6 pb-6">
            <FaStar className="h-8 w-8 text-accent mb-3 text-pink-500" /> {/* React Icon Star */}
            <div className="leading-none font-semibold">Factory Standards</div>
          </div>
          <div className="px-6">
            <div className="text-muted-foreground text-sm">All repairs meet manufacturer specifications</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
