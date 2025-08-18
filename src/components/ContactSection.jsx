import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="font-dm-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to restore your vehicle? Contact us for a free quote and professional consultation.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <div className="space-y-8">
            <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border">
              <div className="grid auto-rows-min items-start gap-1.5 px-6">
                <div className="font-space-grotesk font-bold text-2xl text-card-foreground">
                  Contact Information
                </div>
              </div>
              <div className="px-6 space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone w-5 h-5 text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
                        19.79 19.79 0 0 1-8.63-3.07 
                        19.5 19.5 0 0 1-6-6 
                        19.79 19.79 0 0 1-3.07-8.67
                        A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 
                        1.72 12.84 12.84 0 0 0 .7 2.81 
                        2 2 0 0 1-.45 2.11L8.09 9.91
                        a16 16 0 0 0 6 6l1.27-1.27
                        a2 2 0 0 1 2.11-.45 
                        12.84 12.84 0 0 0 2.81.7
                        A2 2 0 0 1 22 16.92z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-dm-sans font-semibold text-card-foreground">Phone</p>
                    <a
                      href="tel:+44114XXXXXXX"
                      className="font-dm-sans text-muted-foreground hover:underline"
                    >
                      +44 114 XXX XXXX
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail w-5 h-5 text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-dm-sans font-semibold text-card-foreground">Email</p>
                    <a
                      href="mailto:info@scuffsetc.co.uk"
                      className="font-dm-sans text-muted-foreground hover:underline"
                    >
                      info@scuffsetc.co.uk
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin w-5 h-5 text-primary"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12
                        a8 8 0 0 1 16 0Z"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-dm-sans font-semibold text-card-foreground">Location</p>
                    <p className="font-dm-sans text-muted-foreground">Sheffield, UK</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock w-5 h-5 text-primary"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-dm-sans font-semibold text-card-foreground">Hours</p>
                    <p className="font-dm-sans text-muted-foreground">Mon–Fri: 8AM–6PM</p>
                    <p className="font-dm-sans text-muted-foreground">Sat: 9AM–4PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border">
            <div className="grid auto-rows-min items-start gap-1.5 px-6">
              <div className="font-space-grotesk font-bold text-2xl text-card-foreground">
                Request a Quote
              </div>
            </div>
            <div className="px-6">
              <form className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-dm-sans text-sm font-medium text-card-foreground mb-2 block">
                      First Name
                    </label>
                    <input
                      className="bg-input border-border flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="font-dm-sans text-sm font-medium text-card-foreground mb-2 block">
                      Last Name
                    </label>
                    <input
                      className="bg-input border-border flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="font-dm-sans text-sm font-medium text-card-foreground mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-input border-border flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="font-dm-sans text-sm font-medium text-card-foreground mb-2 block">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 XXX XXX XXXX"
                    className="bg-input border-border flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  />
                </div>

                {/* Service Select */}
                <div>
                  <label className="font-dm-sans text-sm font-medium text-card-foreground mb-2 block">
                    Service Required
                  </label>
                  <select className="w-full px-3 py-2 bg-input border border-border rounded-md font-dm-sans text-card-foreground">
                    <option>Select a service</option>
                    <option>Alloy Wheel Repair</option>
                    <option>Bodywork Scuffs, Cracks and Dents</option>
                    <option>Textured Plastic Repairs</option>
                    <option>Panel Damage</option>
                    <option>Full Respray</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-dm-sans text-sm font-medium text-card-foreground mb-2 block">
                    Message
                  </label>
                  <textarea
                    placeholder="Please describe the damage and any specific requirements..."
                    className="bg-input border-border flex w-full rounded-md border px-3 py-2 text-base shadow-xs min-h-[120px] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-sm font-medium h-9 px-4 py-2 shadow-xs"
                >
                  Send Quote Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
