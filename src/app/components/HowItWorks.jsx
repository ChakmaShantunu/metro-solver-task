"use client";
import React from "react";
import { FaPhone, FaBox, FaShieldAlt, FaFileAlt, FaCogs, FaWrench } from "react-icons/fa";

const steps = [
    { title: "Delivery and Support", icon: <FaBox />, number: "01" },
    { title: "Book a Call", icon: <FaPhone />, number: "02" },
    { title: "Quality Assurance", icon: <FaShieldAlt />, number: "03" },
    { title: "Requirement Analysis", icon: <FaFileAlt />, number: "04" },
    { title: "Implement & Develop", icon: <FaCogs />, number: "05" },
    { title: "Service Customisation", icon: <FaWrench />, number: "06" },
];

export default function HowItWorks() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#361A67] via-[#1B1B31] to-[#412178] text-white px-4 py-12">
            {/* Main Container */}
            <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12">

                {/* Left Steps */}
                <div className="flex flex-col gap-6 md:w-1/3">
                    {steps.slice(0, 3).map((step, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md border border-purple-500 rounded-xl p-6 flex flex-col items-center gap-3 text-center"
                        >
                            <div className="text-3xl text-purple-300">{step.icon}</div>
                            <h3 className="text-base md:text-lg font-semibold">{step.title}</h3>
                            <span className="text-xs text-purple-400 font-bold">{step.number}</span>
                        </div>
                    ))}
                </div>

                {/* Center Circle */}
                <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
                    <div className="absolute w-full h-full rounded-full border-4 border-purple-500 opacity-30 animate-pulse"></div>
                    <div className="absolute w-2/3 h-2/3 md:w-3/4 md:h-3/4 rounded-full border-4 border-purple-700 flex items-center justify-center bg-gradient-to-br from-[#361A67] via-[#1B1B31] to-[#412178] shadow-lg">
                        <h2 className="text-lg md:text-2xl font-bold text-white text-center">How it Works?</h2>
                    </div>
                </div>

                {/* Right Steps */}
                <div className="flex flex-col gap-6 md:w-1/3 mt-6 md:mt-0">
                    {steps.slice(3, 6).map((step, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md border border-purple-500 rounded-xl p-6 flex flex-col items-center gap-3 text-center"
                        >
                            <div className="text-3xl text-purple-300">{step.icon}</div>
                            <h3 className="text-base md:text-lg font-semibold">{step.title}</h3>
                            <span className="text-xs text-purple-400 font-bold">{step.number}</span>
                        </div>
                    ))}
                </div>

            </div>

            {/* Optional Subtitle */}
            <p className="text-sm md:text-base text-gray-300 mt-12 text-center">
                Our process is simple, structured, and built for results.
            </p>
        </section>
    );
}
