import React from "react";
import { FaStar } from "react-icons/fa";

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
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-black mb-6">What Our Customers Say</h2>
                <p className="text-gray-700 text-lg mb-12">Don't just take our word for it – hear from our satisfied customers</p>

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
                                className="min-w-[300px] px-6 py-4 border-2 border-white rounded-lg shadow-md hover:shadow-lg transition bg-pink-500"
                            >
                                <div className="flex flex-col items-center mb-4">
                                    <div>
                                        <h4 className="text-black text-xl mb-2 text-center font-semibold">{t.name}</h4>
                                        <div className="flex text-white mb-2 ml-2">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-900 italic text-center">{t.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;