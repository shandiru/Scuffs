import React from "react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our Services
          </h2>
          <p className="font-dm-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional vehicle body repair services with attention to detail
            and quality craftsmanship.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Alloy Wheel Repair */}
          <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border hover:shadow-lg transition-shadow">
            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-wrench w-6 h-6 text-primary"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div className="font-space-grotesk font-bold text-xl text-card-foreground">
                Alloy Wheel Repair
              </div>
            </div>
            <div className="px-6">
              <div className="text-sm font-dm-sans text-muted-foreground">
                Professional restoration of damaged alloy wheels, from minor
                scuffs to major damage.
              </div>
            </div>
          </div>

          {/* Bodywork Scuffs */}
          <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border hover:shadow-lg transition-shadow">
            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-car w-6 h-6 text-primary"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
              <div className="font-space-grotesk font-bold text-xl text-card-foreground">
                Bodywork Scuffs, Cracks and Dents
              </div>
            </div>
            <div className="px-6">
              <div className="text-sm font-dm-sans text-muted-foreground">
                Expert repair of vehicle bodywork damage, restoring your car to
                its original condition.
              </div>
            </div>
          </div>

          {/* Textured Plastic Repairs */}
          <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border hover:shadow-lg transition-shadow">
            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield w-6 h-6 text-primary"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <div className="font-space-grotesk font-bold text-xl text-card-foreground">
                Textured Plastic Repairs
              </div>
            </div>
            <div className="px-6">
              <div className="text-sm font-dm-sans text-muted-foreground">
                Specialized repair and restoration of textured plastic
                components and trim.
              </div>
            </div>
          </div>

          {/* Panel Damage */}
          <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border hover:shadow-lg transition-shadow">
            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-hammer w-6 h-6 text-primary"
                >
                  <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
                  <path d="m18 15 4-4" />
                  <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
                </svg>
              </div>
              <div className="font-space-grotesk font-bold text-xl text-card-foreground">
                Panel Damage
              </div>
            </div>
            <div className="px-6">
              <div className="text-sm font-dm-sans text-muted-foreground">
                Comprehensive panel repair services for all types of vehicle
                damage.
              </div>
            </div>
          </div>

          {/* Full Respray */}
          <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border hover:shadow-lg transition-shadow">
            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-paintbrush w-6 h-6 text-primary"
                >
                  <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
                  <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
                  <path d="M14.5 17.5 4.5 15" />
                </svg>
              </div>
              <div className="font-space-grotesk font-bold text-xl text-card-foreground">
                Full Respray
              </div>
            </div>
            <div className="px-6">
              <div className="text-sm font-dm-sans text-muted-foreground">
                Complete vehicle respraying services with professional paint
                matching.
              </div>
            </div>
          </div>

          {/* Quality Guarantee */}
          <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border hover:shadow-lg transition-shadow">
            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles w-6 h-6 text-primary"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
              </div>
              <div className="font-space-grotesk font-bold text-xl text-card-foreground">
                Quality Guarantee
              </div>
            </div>
            <div className="px-6">
              <div className="text-sm font-dm-sans text-muted-foreground">
                All our work comes with a comprehensive warranty and
                satisfaction guarantee.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
