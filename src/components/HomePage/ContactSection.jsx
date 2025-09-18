// File: ContactSection.jsx

import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const PINK = "#E066E6";
  const LIME = "#CCFF66";
  const phoneRegex = /^(?:\+44|0)[1-9]\d{8,9}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.phone || !phoneRegex.test(formData.phone))
      newErrors.phone = "Valid UK phone number is required.";
    if (!formData.service || formData.service === "Select a service")
      newErrors.service = "Service selection is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const message = `*Quote Request*\n\n*Name:* ${formData.firstName} ${formData.lastName}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Message:* ${formData.message}`;
      const encodedMsg = encodeURIComponent(message);
      const phoneNumber = "447776300300";
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-20">
        <div className="text-center mb-16">
          <h2
            className="font-bold text-4xl md:text-5xl mb-4"
            style={{ color: PINK }}
          >
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to restore your vehicle? Contact us for a free quote and professional consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Card */}
          <div className="space-y-6">
            {[{
              label: "Phone",
              icon: <FaPhoneAlt />,
              value: "+44 7776 300300",
              href: "tel:+447776300300"
            }, {
              label: "Email",
              icon: <FaEnvelope />,
              value: "info@scuffsetc.co.uk",
              href: "mailto:info@scuffsetc.co.uk"
            }, {
              label: "Location",
              icon: <FaMapMarkerAlt />,
              value: "Unit 7, Elliot Business Park, Sheffield S4 8DA",
              href: "https://maps.google.com?q=Unit+7+Elliot+Business+Park"
            }, {
              label: "Hours",
              icon: <FaRegClock />,
              value: "Mon–Fri: 8AM–6PM, Sat: 9AM–4PM",
              href: null
            }].map((item, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${LIME}55` }}>
                  <div style={{ color: PINK }}>{item.icon}</div>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="hover:underline" style={{ color: PINK }}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="rounded-xl border p-6 shadow-sm bg-card" style={{ borderColor: PINK }}>
            <h3 className="text-2xl font-bold mb-4">Request a Quote
             Pop by between 9 AM and 1 PM to get a free quote!</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label>First Name*</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full border rounded px-3 py-2"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                <div>
                  <label>Last Name*</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full border rounded px-3 py-2"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
              </div>
              <div>
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label>Phone*</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div>
                <label>Service Required*</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                >
                  <option>Select a service</option>
                  <option>Alloy Wheel Repair</option>
                  <option>Bodywork Scuffs, Cracks and Dents</option>
                  <option>Textured Plastic Repairs</option>
                  <option>Panel Damage</option>
                  <option>Full Respray</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
              </div>
              <div>
                <label>Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border rounded px-3 py-2"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-md font-medium"
                style={{ backgroundColor: PINK, color: "#fff" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = LIME;
                  e.currentTarget.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = PINK;
                  e.currentTarget.style.color = "#fff";
                }}
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}