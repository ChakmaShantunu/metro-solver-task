"use client";
import React from "react";
import { motion } from "framer-motion";

const cards = [
    {
        category: "Success Stories",
        title: "The Future of Metro Systems by Company",
        description: "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise.",
        views: "50M+ Views",
        sales: "52M+ Sales Generated",
        cpa: "39% Lower CPA",
        highlighted: false,
    },
    {
        category: "Case Studies",
        title: "The Future of Metro Systems by Company",
        description: "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise.",
        views: "50M+ Views",
        sales: "52M+ Sales Generated",
        cpa: "39% Lower CPA",
        highlighted: true,
    },
    {
        category: "Blog and News",
        title: "The Future of Metro Systems by Company",
        description: "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise.",
        views: "50M+ Views",
        sales: "52M+ Sales Generated",
        cpa: "39% Lower CPA",
        highlighted: false,
    },
];

export default function SuccessSection() {
    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.15 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="bg-gradient-to-br from-[#361A67] via-[#1B1B31] to-[#412178] text-white py-16 px-4">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    The Success Stories, Case Studies & Blog
                </motion.h2>
                <motion.p
                    className="text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Explore how Metro Solver is transforming businesses through innovation and performance.
                </motion.p>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className={`bg-white/10 backdrop-blur-md rounded-xl border ${card.highlighted ? "border-purple-500 shadow-xl" : "border-gray-700"} p-6 transition-all duration-300`}
                        variants={item}
                    >
                        <img
                            src="https://i.pravatar.cc/500?img=10"
                            alt="Sample"
                            className="rounded-lg w-full h-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-purple-300 mb-2">{card.category}</h3>
                        <h4 className="text-lg font-bold mb-2">{card.title}</h4>
                        <p className="text-sm text-gray-300 mb-4">{card.description}</p>
                        <div className="text-xs text-gray-400 space-y-1 mb-4">
                            <p>📈 {card.views}</p>
                            <p>💰 {card.sales}</p>
                            <p>📉 {card.cpa}</p>
                        </div>
                        {card.highlighted && (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="btn btn-primary rounded-full mt-2"
                            >
                                View More
                            </motion.button>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
