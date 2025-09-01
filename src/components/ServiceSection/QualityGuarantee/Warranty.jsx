import React from 'react';

const WarrantyTerms = () => {
  return (
    <div className="bg-green-100 py-10 px-5">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Warranty Terms by Service</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Alloy Wheel Repair</h3>
          <p>Finish, structural integrity, color matching</p>
          <p className="mt-2 text-sm text-gray-500">12 Months</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Bodywork Repair</h3>
          <p>Workmanship, paint adhesion, rust-through</p>
          <p className="mt-2 text-sm text-gray-500">Lifetime</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Plastic Repair</h3>
          <p>Texture matching, color stability, adhesion</p>
          <p className="mt-2 text-sm text-gray-500">12 Months</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Panel Damage</h3>
          <p>Structural integrity, alignment, safety</p>
          <p className="mt-2 text-sm text-gray-500">Lifetime</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Full Respray</h3>
          <p>Paint finish, color matching, clear coat</p>
          <p className="mt-2 text-sm text-gray-500">5 Years</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">All Services</h3>
          <p>100% satisfaction or we’ll make it right</p>
          <p className="mt-2 text-sm text-gray-500">Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default WarrantyTerms;
