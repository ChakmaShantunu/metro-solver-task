"use client";
import React from "react";
import { FaPhone, FaBox, FaShieldAlt, FaFileAlt, FaCogs, FaWrench } from "react-icons/fa";

const steps = [
    { title: "Delivery and Support", icon: <FaBox />, position: "top-left", number: "01" },
    { title: "Book a Call", icon: <FaPhone />, position: "top-right", number: "02" },
    { title: "Quality Assurance", icon: <FaShieldAlt />, position: "middle-left", number: "03" },
    { title: "Requirement Analysis", icon: <FaFileAlt />, position: "middle-right", number: "04" },
    { title: "Implement & Develop", icon: <FaCogs />, position: "bottom-left", number: "05" },
    { title: "Service Customisation", icon: <FaWrench />, position: "bottom-right", number: "06" },
];

export default function HowItWorks() {
    const positions = {
        "top-left": "top-0 left-0",
        "top-right": "top-0 right-0",
        "middle-left": "top-1/2 left-0 -translate-y-1/2",
        "middle-right": "top-1/2 right-0 -translate-y-1/2",
        "bottom-left": "bottom-0 left-0",
        "bottom-right": "bottom-0 right-0",
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#361A67] via-[#1B1B31] to-[#412178] text-white px-4 py-12">
            <div className="relative w-full max-w-6xl h-[600px]">
                {/* Center Title */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="relative flex items-center justify-center h-[300px] md:h-[400px]">
                        {/* Outer Circle */}
                        <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border-4 border-purple-500 opacity-30 animate-pulse"></div>

                        {/* Inner Circle */}
                        <div className="absolute w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full border-4 border-purple-700 flex items-center justify-center bg-gradient-to-br from-[#361A67] via-[#1B1B31] to-[#412178] shadow-lg">
                            <h2 className="text-xl md:text-3xl font-bold text-white text-center">How it Works?</h2>
                        </div>
                    </div>

                    <p className="text-sm text-gray-300">Our process is simple, structured, and built for results.</p>
                </div>

                {/* Steps */}
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`absolute ${positions[step.position]} p-4 w-40 md:w-48 bg-white/10 backdrop-blur-md rounded-xl border border-purple-500 text-center flex flex-col items-center gap-2`}
                    >
                        <div className="text-2xl text-purple-300">{step.icon}</div>
                        <h3 className="text-sm md:text-base font-semibold">{step.title}</h3>
                        <span className="text-xs text-purple-400 font-bold">{step.number}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
