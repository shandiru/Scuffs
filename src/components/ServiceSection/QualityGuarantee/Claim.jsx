import React from 'react';

const WarrantyClaimSection = () => {
  return (
    <section className="bg-pink-50 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-black">Warranty Claims & Support</h2>
        <p className="mt-4 text-black">
          If you experience any issues with our work, contact us immediately.
          We’re committed to resolving any concerns quickly and professionally.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition-all">
            File Warranty Claim
          </button>
          <a
            href="tel:+447776300300" // This will open the phone dialer with the number
            className="inline-flex items-center justify-center gap-2 font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition h-10 rounded-md text-lg px-8 py-3"
          >
            Call +44 7776 300300
          </a>
        </div>
      </div>
    </section>
  );
}

export default WarrantyClaimSection;
