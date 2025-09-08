import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRegClock } from "react-icons/fa"; // Importing React Icons

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Brand colors
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  // Corrected phone regex
  const phoneRegex = /^(?:\+44|0)[1-9]\d{8,9}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { ...errors };

    // Validate first name
    if (!formData.firstName) {
      newErrors.firstName = "First name is required.";
    } else {
      newErrors.firstName = "";
    }

    // Validate last name
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required.";
    } else {
      newErrors.lastName = "";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    } else {
      newErrors.email = "";
    }

    // Validate phone number with regex
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (e.g., +44 or 0 followed by 9 digits).";
    } else {
      newErrors.phone = "";
    }

    // Validate service selection (treat default text as invalid too)
    if (!formData.service || formData.service === "Select a service") {
      newErrors.service = "Please select a service.";
    } else {
      newErrors.service = "";
    }

    // Validate message
    if (!formData.message) {
      newErrors.message = "Message is required.";
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);

    // If there are no errors, submit the form (mock submission here)
    if (Object.values(newErrors).every((error) => error === "")) {
      alert("Form submitted successfully!");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-background scroll-m-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4"
            style={{ color: PINK }}
          >
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
            <div
              className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card"
              style={{ borderColor: PINK }}
            >
              <div className="grid auto-rows-min items-start gap-1.5 px-6">
                <div className="font-space-grotesk font-bold text-2xl text-card-foreground">
                  Contact Information
                </div>
              </div>
              <div className="px-6 space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${LIME}55` }}
                  >
                    <FaPhoneAlt className="w-5 h-5" style={{ color: PINK }} />
                  </div>
                  <div>
                    <p className="font-dm-sans font-semibold text-card-foreground">Phone</p>
                    <a
                      href="tel:+447776300300"
                      className="font-dm-sans hover:underline"
                      style={{ color: PINK }}
                    >
                      +44 7776 300300
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${LIME}55` }}
                  >
                    <FaEnvelope className="w-5 h-5" style={{ color: PINK }} />
                  </div>
                  <div>
                    <p className="font-dm-sans font-semibold text-card-foreground">Email</p>
                    <a
                      href="mailto:info@scuffsetc.co.uk"
                      className="font-dm-sans hover:underline"
                      style={{ color: PINK }}
                    >
                      info@scuffsetc.co.uk
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${LIME}55` }}
                  >
                    <FaMapMarkerAlt className="w-5 h-5" style={{ color: PINK }} />
                  </div>
                  <div>
                    <p className="font-dm-sans font-semibold text-card-foreground">Location</p>
                    <a
                      href="https://www.google.com/maps?q=Unit+7%2CElliot+Business+Park%2C+Chambers+Ln%2C+Sheffield+S4+8DA%2C+United+Kingdom"
                      target="_blank"
                      className="font-dm-sans hover:underline"
                      aria-label="View location on Google Maps"
                      style={{ color: PINK }}
                      rel="noreferrer"
                    >
                      Unit 7, Elliot Business Park, Chambers Ln, Sheffield S4 8DA, United Kingdom
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center space-x-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${LIME}55` }}
                  >
                    <FaRegClock className="w-5 h-5" style={{ color: PINK }} />
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
          <div
            className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card"
            style={{ borderColor: PINK }}
          >
            <div className="grid auto-rows-min items-start gap-1.5 px-6">
              <div className="font-space-grotesk font-bold text-2xl text-card-foreground">
                Request a Quote
              </div>
            </div>
            <div className="px-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-dm-sans text-sm font-medium text-card-foreground mb-2 block">
                      First Name*
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-input border-border flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="font-dm-sans text-sm font-medium text-card-foreground mb-2 block">
                      Last Name*
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="bg-input border-border flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="font-dm-sans text-sm font-medium text-card-foreground mb-2 block">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-input border-border flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="font-dm-sans text-sm font-medium text-card-foreground mb-2 block">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-input border-border flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                    placeholder="+44 XXX XXX XXXX"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                {/* Service Select */}
                <div>
                  <label className="font-dm-sans text-sm font-medium text-card-foreground mb-2 block">
                    Service Required*
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-input border border-border rounded-md font-dm-sans text-card-foreground"
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

                {/* Message */}
                <div>
                  <label className="font-dm-sans text-sm font-medium text-card-foreground mb-2 block">
                    Message*
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe the damage and any specific requirements..."
                    className="bg-input border-border flex w-full rounded-md border px-3 py-2 text-base shadow-xs min-h-[120px] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-md text-sm font-medium h-9 px-4 py-2 shadow-xs transition-all"
                  style={{
                    backgroundColor: PINK,
                    color: "#fff",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = LIME;
                    e.currentTarget.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = PINK;
                    e.currentTarget.style.color = "#fff";
                  }}
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
