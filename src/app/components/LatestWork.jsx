"use client";
import React from 'react'
import { motion } from 'framer-motion';

export default function LatestWork() {
    const containerVariants = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.15 }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: -30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    const imageVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    return (
        <motion.div
            className="px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className='max-w-7xl mx-auto mt-24'>
                <motion.div
                    className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'
                    variants={textVariants}
                >
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl'>Our Latest Work</h1>
                    <p className='text-sm sm:text-base md:text-lg text-gray-700 md:w-2/3'>
                        Based on the description of Metro Solver and the image provided, here is a 6-step process that Metro Solver uses to scale a customer's business
                    </p>
                </motion.div>
            </div>

            <motion.div className="mt-12" variants={imageVariants}>
                <img
                    src="/latestImage.png"
                    alt="Latest Work"
                    className='w-full h-auto rounded-lg shadow-lg'
                />
            </motion.div>
        </motion.div>
    )
}
