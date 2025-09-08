import React from "react";

const FindUs = () => {
  return (
    <section className="py-10 px-4 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-black">Find Us</h2>

        <div className="rounded-lg overflow-hidden shadow-lg w-full h-[400px]">
          <iframe
            title="Google Map - Unit 7, Elliot Business Park, Chambers Ln, Sheffield S4 8DA, United Kingdom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76096.42434296223!2d-1.5281607079625814!3d53.41458899281664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879791d78a1cbd5%3A0x627bd191fe359158!2sScuffs%20Etc%20Ltd%20-%20Vehicle%20body%20repair%20Specialists!5e0!3m2!1sen!2slk!4v1757349508750!5m2!1sen!2slk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
