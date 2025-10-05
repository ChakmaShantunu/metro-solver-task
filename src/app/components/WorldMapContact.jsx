"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WorldMapContact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 1, ease: "easeOut" } }
    };

    const mapVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
    };

    return (
        <motion.section
            className="bg-gradient-to-br from-[#361A67] via-[#1B1B31] to-[#412178] text-white py-20 px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div
                className="max-w-7xl mx-auto"
                variants={mapVariants}
            >
                {/* Left - World Map */}
                <img
                    src="https://copilot.microsoft.com/th/id/BCO.7c7411f7-5709-49c8-b855-cb6155fb45d0.png"
                    alt="World Map with Metro Solver Locations"
                    className="rounded-xl border border-purple-500 shadow-lg"
                />
            </motion.div>
        </motion.section>
    );
}
