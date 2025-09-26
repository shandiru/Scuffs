import React from "react";
import { FaStar, FaWrench, FaCar, FaMagic, FaShieldAlt } from "react-icons/fa";

// Testimonials data
const testimonials = [
  {
    name: "Honey Ratcliffe",
    text: `Took my car to have some scratches fixed and they have done an amazing job at it, You can’t even tell it was there in the first place. I would 100% recommend the man is so friendly and got me in very fast. Thank you again! Before and after photos below 😊`,
  },
  {
    name: "Michelle Chambers",
    text: `Highly recommend Darren and his colleagues.
All of them are polite and will go above and beyond .Besides making u feel welcome and comfortable.
Also the communication from Darren was fantastic.`,
  },
  {
    name: "Louis Sinyard",
    text: `Rang Darren asking about re spraying two bumpers for my friend's car. He was very helpful and advised me on what was needed and provided a quote over the phone. He's done a fantastic job and given a new lease of life to the car. Would highly recommend him and his team to anyone that needs any bodywork or paint doing. Super friendly and helpful, couldn't be happier.`,
  },
  {
    name: "Phil Bower",
    text: `Great service from Darren who gave me great advice in regard to repairing my ST which had the dreaded lacquer peel on roof and bonnet. Darren prepared my car and refurbished my alloys doing a fantastic job at a great price. Professional, friendly and willing to go the extra mile to help. Can’t recommend enough. Thanks Daz 5⭐️.`,
  },
  {
    name: "Lewis Armitage",
    text: `Red GTC damaged side/arch.
Did a really nice Job of repairing and painting a decent sized scratch and dent on my car I cant even tell where the damage was!`,
  },
  {
    name: "A Hobson",
    text: `Recently completed my partners Audi A1. A brilliant job, and brilliant service. It was a more difficult colour to match but the boys smashed it and at a very reasonable price too.`,
  },
  {
    name: "Rob Nixon",
    text: `Went to Scuffs Etc as they were well rated and I wasn't dissapointed. Darren and the team managed to get the dents on either side of my front bumper looking as good as new without having to remove the bumper and incur additional cost. He was friendly and honest about the process and what to expect. Couldn't fault anything and I would 100% reccomend Scuffs Etc.`,
  },
  {
    name: "Liam Turner",
    text: `I wouldn't trust anyone else to smart repair or paint parts I've needed painting over the years, Darren is always very friendly helpful and looks after you with the price. Definitely one of the best painters in Sheffield!`,
  },
  {
    name: "Sajid Hussain",
    text: `I recently bought a hardtop for my Z4 and Darren and Brandon did an amazing job preparing and painting it for me.`,
  },
];

const Testimonials = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section
      id="testimonials"
      className="py-20 px-4 relative overflow-hidden bg-white"
    >
      {/* ✅ Background styles */}
      <style>
        {`
          @keyframes pulseSpin {
            0%   { transform: rotate(0deg) scale(0.8); opacity: 0.2; }
            40%  { transform: rotate(180deg) scale(1.4); opacity: 1; }
            70%  { transform: rotate(270deg) scale(1.1); opacity: 0.7; }
            100% { transform: rotate(360deg) scale(0.8); opacity: 0.2; }
          }
          .bg-icon {
            position: absolute;
            color: ${PINK} !important;
            animation: pulseSpin 25s ease-in-out infinite;
            filter: drop-shadow(0 0 18px rgba(224,102,230,0.8));
            z-index: 0;
            pointer-events: none;
          }
          @media (max-width: 768px) {
            .bg-icon {
              width: 2rem !important;
              height: 2rem !important;
              animation-duration: 18s;
              opacity: 0.15;
            }
          }
        `}
      </style>

      {/* ✅ Dotted background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#CCFF66_2px,transparent_2px)] [background-size:20px_20px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage:
            "linear-gradient(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      />

      {/* ✅ Floating animated icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          src="/spray.png"
          alt="Spray Gun Background"
          className="spray-icon top-8 left-8 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52"
          style={{ animationDelay: "0s" }}
        />
        
        <FaShieldAlt
          className="bg-icon w-24 h-24 bottom-8 right-8"
          style={{ animationDelay: "15s" }}
        />
      </div>

      {/* ✅ Main content stays above */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6" style={{ color: PINK }}>
          What Our Customers Say
        </h2>
        <p className="text-lg mb-12 text-gray-700">
          Don't just take our word for it – hear from our satisfied customers
        </p>

        {/* Scrollable Testimonials Section */}
        <div className="overflow-hidden">
          <div
            className="flex space-x-6 animate-scroll"
            style={{
              animationDuration: `${testimonials.length * 4}s`,
              animationTimingFunction: "linear",
            }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="min-w-[300px] px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition"
                style={{
                  backgroundColor: LIME,
                  border: `2px solid ${PINK}`,
                }}
              >
                <div className="flex flex-col items-center mb-4">
                  <div>
                    <h4
                      className="text-xl mb-2 text-center font-semibold"
                      style={{ color: PINK }}
                    >
                      {t.name}
                    </h4>
                    <div className="flex mb-2 ml-2" style={{ color: PINK }}>
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="italic text-center text-black">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
