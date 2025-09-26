import React from "react";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const PINK = "#E066E6"; // brand pink/purple

  return (
    <footer className="py-12 text-black bg-[#CCFF66]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & About */}
          <div className="space-y-4">
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

              {/* Social Media Icons */}
              <div className="flex mt-4 gap-4">
                {/* Facebook Icon */}
                <a
                  href="https://web.facebook.com/scuffs.etc?_rdc=1&_rdr#" // Replace with actual Facebook page URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#E066E6] p-3 rounded-full hover:text-blue-600 transition-colors duration-200"
                >
                  <FaFacebookF size={24} />
                </a>

                {/* Instagram Icon */}
                <a
                  href="https://www.instagram.com/scuffs_etc_ltd" // Replace with actual Instagram page URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#E066E6] p-3 rounded-full hover:text-pink-600 transition-colors duration-200"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>

          </div>
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-space-grotesk font-bold text-lg">Services</h4>
            <ul className="font-dm-sans text-sm space-y-2 opacity-90">
              <li><a href="/services/alloy-wheel-repair" className="hover:underline underline-offset-4">Alloy Wheel Repair</a></li>
              <li><a href="/services/bodywork-repair" className="hover:underline underline-offset-4">Bodywork Scuffs &amp; Dents</a></li>
              <li><a href="/services/textured-plastic-repair" className="hover:underline underline-offset-4">Textured Plastic Repairs</a></li>
              <li><a href="/services/panel-damage" className="hover:underline underline-offset-4">Panel Damage</a></li>
              <li><a href="/services/full-respray" className="hover:underline underline-offset-4">Full Respray</a></li>
              <li><a href="/services/quality-guarantee" className="hover:underline underline-offset-4">Quality Guarantee</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-space-grotesk font-bold text-lg">Contact</h4>
            <address className="not-italic font-dm-sans text-sm space-y-2 opacity-90">
              <p>
                <a
                  href="https://www.google.com/maps?q=Unit+7%2CElliot+Business+Park%2C+Chambers+Ln%2C+Sheffield+S4+8DA%2C+United+Kingdom"
                  target="_blank"
                  className="hover:underline underline-offset-4"
                  aria-label="View address on Google Maps"
                >
                  Unit 7, Elliot Business Park, Chambers Ln, Sheffield S4 8DA, United Kingdom
                </a>
              </p>
              <p>
                <a
                  href="tel:+44 7776 300300"
                  className="hover:underline underline-offset-4"
                  aria-label="Call Scuffs ETC"
                >
                  +44 7776 300300
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@scuffsetc.co.uk"
                  className="hover:underline underline-offset-4 break-all"
                  aria-label="Email Scuffs ETC"
                >
                  info@scuffsetc.co.uk
                </a>
              </p>
              <p>Mon–Fri: 7:30 AM–5:00 PM</p>
              <p>Sat: Closed</p>
              <p>Sun: Closed</p>
            </address>
          </div>
        </div>

        {/* Divider & bottom note */}
        <div
          className="mt-8 pt-8 text-center space-y-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
        >
          <p className="font-dm-sans text-sm opacity-90">
            © 2025 Scuffs ETC. All rights reserved. | Vehicle Body Repair Specialist
          </p>
          <p className="font-dm-sans text-sm opacity-90">
            <a href="/terms-conditions" className="underline underline-offset-4 hover:text-gray-200 transition-colors">
              Terms &amp; Conditions
            </a>{" "}
            |{" "}
            <a href="/privacy-policy" className="underline underline-offset-4 hover:text-gray-200 transition-colors">
              Privacy Policy
            </a>
          </p>
          <p className="font-dm-sans text-sm opacity-90">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-gray-200 transition-colors"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
