import React from "react";

const VehicleTransformation = () => {
  return (
    <section className="bg-muted py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-foreground">Transform Your Vehicle Today</h2>
        <p className="text-lg text-muted-foreground mb-8 text-balance">
          Professional full respray services with color consultation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            data-slot="button"
            className="inline-flex items-center bg-pink-500 hover:bg-pink-700 justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-8 py-3 text-lg"
          >
            Book Consultation
          </button>
          <button
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-8 py-3 text-lg bg-transparent"
          >
            Call (555) 123-4567
          </button>
        </div>
      </div>
    </section>
  );
};

export default VehicleTransformation;
