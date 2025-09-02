import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const PanelRestoration = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Complete Panel Restoration</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            From minor panel damage to major collision repairs, our skilled technicians can restore your vehicle's panels to factory specifications.
            We handle everything from door panels and fenders to quarter panels and structural repairs.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FiCheckCircle className="h-5 w-5 text-accent text-pink-500" /> {/* React Icon Check Circle */}
              <span>Panel replacement and alignment</span>
            </div>
            <div className="flex items-center gap-3">
              <FiCheckCircle className="h-5 w-5 text-accent text-pink-500" /> {/* React Icon Check Circle */}
              <span>Structural damage repair</span>
            </div>
            <div className="flex items-center gap-3">
              <FiCheckCircle className="h-5 w-5 text-accent text-pink-500" /> {/* React Icon Check Circle */}
              <span>Frame straightening and alignment</span>
            </div>
            <div className="flex items-center gap-3">
              <FiCheckCircle className="h-5 w-5 text-accent text-pink-500" /> {/* React Icon Check Circle */}
              <span>Welding and fabrication services</span>
            </div>
          </div>
        </div>
        <div>
          <img alt="Panel damage repair process" className="w-full h-64 object-cover rounded-lg" src="/panel.png" />
        </div>
      </div>
    </div>
  );
};

export default PanelRestoration;
