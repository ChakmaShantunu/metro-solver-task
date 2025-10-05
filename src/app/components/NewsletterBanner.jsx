"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NewsletterBanner() {
    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.15 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <section className="bg-gradient-to-br from-[#361A67] via-[#1B1B31] to-[#412178] text-white py-20 px-6">
            <motion.div className="max-w-4xl mx-auto text-center space-y-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Logo + Tagline */}
                <motion.div className="flex flex-col items-center gap-2" variants={item}>
                    <div className="bg-gradient-to-br from-blue-600 to-purple-500 w-16 h-16 rounded-md flex items-center justify-center font-bold text-xl text-white">
                        MM
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">Metro Solver</h2>
                    <p className="text-sm text-purple-300">Your IT Partner</p>
                </motion.div>

                {/* Subscribe Form */}
                <motion.div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full" variants={item}>
                    <h3 className="text-xl md:text-2xl font-semibold whitespace-nowrap">
                        Subscribe to Our Newsletter
                    </h3>
                    <div className="relative w-full max-w-lg mx-auto mt-4">
                        <motion.input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 pr-32 rounded-full bg-[#1B1B31] border border-purple-500 text-white placeholder:text-purple-300"
                            variants={item}
                        />
                        <motion.button
                            type="submit"
                            className="absolute top-1/2 right-1 -translate-y-1/2 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 px-5 py-2 rounded-full text-white font-semibold hover:scale-105 transition"
                            variants={item}
                        >
                            <FaStar className="text-yellow-400" /> Subscribe
                        </motion.button>
                    </div>
                </motion.div>

                {/* Optional description */}
                <motion.p className="text-gray-300 mt-2" variants={item}>
                    Join the <span className="text-purple-400 font-bold">25,000+</span> clients in our company
                </motion.p>
            </motion.div>
        </section>
    );
}
