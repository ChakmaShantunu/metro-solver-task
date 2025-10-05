"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 md:px-8">
            <div className="grid grid-cols-12 gap-4 w-full">

                {/* Left Section */}
                <motion.div
                    className="col-span-12 md:col-span-4 flex flex-col justify-center space-y-4 md:space-y-6 text-center md:text-left"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl leading-tight">
                        Expert to Digitalise Your Growth
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700">
                        We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="btn rounded-2xl w-full sm:w-fit mx-auto md:mx-0"
                    >
                        Explore Now
                    </motion.button>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    className="col-span-12 md:col-span-8 flex flex-col items-center space-y-4 relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <video
                        src="/v.mp4"
                        controls
                        className="w-full max-w-lg sm:max-w-2xl md:w-[900px] md:h-[500px] rounded-xl"
                    />

                    <motion.div
                        className='w-24 h-24 md:w-12 md:h-12'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <img
                            src="Frame3.gif"
                            alt="Logo"
                            className="w-32 sm:w-48 md:w-32 h-auto"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
