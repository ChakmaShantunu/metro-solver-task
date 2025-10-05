"use client";
import React from "react";

const stats = [
    { value: "150+", label: "Current Clients" },
    { value: "25k+", label: "Completed Projects" },
    { value: "90+", label: "Metro Solver Teams" },
];

export default function StatsSection() {
    return (
        <section className="bg-gradient-to-br from-[#361A67] via-[#1B1B31] to-[#412178] py-12 px-4 text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white/10 backdrop-blur-md rounded-xl border border-purple-500 p-8 shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        <h2 className="text-4xl font-bold text-purple-300 mb-2">{stat.value}</h2>
                        <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
