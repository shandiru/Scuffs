import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 text-white" style={{ backgroundColor: "#b30086" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Scuffs ETC Logo"
                loading="lazy"
                width={50}
                height={50}
                className="rounded-full"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-04%20at%2010.17.28-7BtJyWo0GqimugLwXkylWWH2UjhT9F.jpeg"
              />
              <div>
                <h3 className="font-space-grotesk font-bold text-xl">Scuffs ETC</h3>
                <p className="font-dm-sans text-sm opacity-90">
                  Vehicle Body Repair Specialist
                </p>
              </div>
            </div>

            <p className="font-dm-sans text-sm opacity-90 max-w-sm leading-6">
              Professional vehicle body repair services in Sheffield. Restoring your
              vehicle to perfection with quality craftsmanship and attention to detail.
            </p>
          </div>

          {/* Services (link to sections on the page) */}
          <div className="space-y-4">
            <h4 className="font-space-grotesk font-bold text-lg">Services</h4>
            <ul className="font-dm-sans text-sm space-y-2 opacity-90">
              <li><a href="#services" className="hover:underline underline-offset-4">Alloy Wheel Repair</a></li>
              <li><a href="#services" className="hover:underline underline-offset-4">Bodywork Scuffs &amp; Dents</a></li>
              <li><a href="#services" className="hover:underline underline-offset-4">Textured Plastic Repairs</a></li>
              <li><a href="#services" className="hover:underline underline-offset-4">Panel Damage</a></li>
              <li><a href="#services" className="hover:underline underline-offset-4">Full Respray</a></li>
              <li><a href="#services" className="hover:underline underline-offset-4">Quality Guarantee</a></li>

              
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-space-grotesk font-bold text-lg">Contact</h4>
            <address className="not-italic font-dm-sans text-sm space-y-2 opacity-90">
              <p>Sheffield, UK</p>

              {/* Phone (clickable) */}
              <p>
                <a
                  href="tel:+44114XXXXXXX"
                  className="hover:underline underline-offset-4"
                  aria-label="Call Scuffs ETC"
                >
                  +44 114 XXX XXXX
                </a>
              </p>

              {/* Email (clickable) */}
              <p>
                <a
                  href="mailto:info@scuffsetc.co.uk"
                  className="hover:underline underline-offset-4 break-all"
                  aria-label="Email Scuffs ETC"
                >
                  info@scuffsetc.co.uk
                </a>
              </p>

              <p>Mon–Fri: 8AM–6PM</p>
              <p>Sat: 9AM–4PM</p>
            </address>
          </div>
        </div>

        {/* Divider & bottom note */}
        <div
          className="mt-8 pt-8 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
        >
          <p className="font-dm-sans text-sm opacity-90">
            © 2025 Scuffs ETC. All rights reserved. | Vehicle Body Repair Specialist
          </p>
        </div>
      </div>
    </footer>
  );
}
