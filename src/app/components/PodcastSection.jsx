"use client";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const podcasts = [
    {
        id: 1,
        title: "How Brands Can Prepare for Black Friday & Christmas",
        date: "March 11, 2023",
        duration: "30 min",
        image: "https://images.unsplash.com/photo-1581091870620-1e7b1c7b1b9e?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        title: "How Brands Can Prepare for Black Friday & Christmas",
        date: "March 11, 2023",
        duration: "30 min",
        image: "https://images.unsplash.com/photo-1581092339609-0c7f3c7b1b9e?auto=format&fit=crop&w=800&q=80",
    },
];

export default function PodcastSection() {
    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.15 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="bg-gradient-to-br from-[#361A67] via-[#1B1B31] to-[#412178] text-white py-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* Left Text */}
                <motion.div className="space-y-4" variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <h2 className="text-3xl md:text-5xl font-bold">Did You Hear about Our Podcast?</h2>
                    <p className="text-gray-300">
                        Based on the description of Metro Solver and the image provided, here is a 6-step process that Metro Solver uses to scale a customer's business.
                    </p>
                </motion.div>

                {/* Podcast Cards */}
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    {podcasts.map((podcast) => (
                        <motion.div
                            key={podcast.id}
                            className="bg-white/10 backdrop-blur-md rounded-xl border border-purple-500 p-4 shadow-lg"
                            variants={item}
                        >
                            <img
                                src={podcast.image}
                                alt={podcast.title}
                                className="rounded-lg w-full h-48 object-cover mb-4"
                            />
                            <h3 className="text-lg font-semibold text-purple-300 mb-1">{podcast.title}</h3>
                            <p className="text-sm text-gray-400 mb-2">{podcast.date} • {podcast.duration}</p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="btn btn-sm btn-primary rounded-full mt-2"
                            >
                                Listen Now
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-10">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="p-3 rounded-full bg-white/10 border border-purple-500 hover:bg-purple-600 transition"
                >
                    <FaArrowLeft />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="p-3 rounded-full bg-white/10 border border-purple-500 hover:bg-purple-600 transition"
                >
                    <FaArrowRight />
                </motion.button>
            </div>
        </section>
    );
}
