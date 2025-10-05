"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
    { value: "150+", label: "Current Clients" },
    { value: "25k+", label: "Completed Projects" },
    { value: "90+", label: "Metro Solver Teams" },
];

export default function StatsSection() {
    const containerVariants = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <motion.section
            className="bg-gradient-to-br from-[#361A67] via-[#1B1B31] to-[#412178] py-12 px-4 text-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="bg-white/10 backdrop-blur-md rounded-xl border border-purple-500 p-8 shadow-lg hover:scale-105 transition-transform duration-300"
                        variants={cardVariants}
                    >
                        <h2 className="text-4xl font-bold text-purple-300 mb-2">{stat.value}</h2>
                        <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
