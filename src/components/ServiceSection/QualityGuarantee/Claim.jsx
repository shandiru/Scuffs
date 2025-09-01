import React from 'react';

const WarrantyClaimSection = () => {
  return (
    <section className="bg-green-50 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-green-800">Warranty Claims & Support</h2>
        <p className="mt-4 text-green-700">
          If you experience any issues with our work, contact us immediately.
          We’re committed to resolving any concerns quickly and professionally.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-all">
            File Warranty Claim
          </button>
          <button className="bg-white border-2 border-green-600 text-green-600 py-2 px-6 rounded-md hover:bg-green-600 hover:text-white transition-all">
            Call Support: (555) 123-4567
          </button>
        </div>
      </div>
    </section>
  );
}

export default WarrantyClaimSection;
