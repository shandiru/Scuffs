import React from "react";

const FullAbout = () => {
  return (
    <div className="bg-green-50 p-8 py-10">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Complete Vehicle Transformation
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Transform your vehicle with our professional full respray service.
            Whether you want to restore the original color, change to a new
            color, or repair extensive paint damage, our expert painters deliver
            showroom-quality results using premium automotive paints.
          </p>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              Complete paint system removal
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              Professional surface preparation
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              Multi-coat paint application
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              UV-resistant clear coat finish
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <img
            src="/full.png" // Replace with the actual image URL
            alt="Vehicle Transformation"
            className="w-full h-70 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FullAbout;
