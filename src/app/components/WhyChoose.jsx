"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function WhyChoose() {
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const leftVariants = {
        hidden: { opacity: 0, x: -50 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    const boxVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <motion.div
            className='px-4 sm:px-6 lg:px-8 py-24 sm:py-32'
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12'>

                {/* Left Side */}
                <motion.div className='space-y-6 sm:space-y-8 lg:space-y-12 text-center lg:text-left' variants={leftVariants}>
                    <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl'>
                        Why You Choose Metro Solver?
                    </h1>
                    <p className='text-sm sm:text-base lg:text-lg text-gray-700 lg:w-3/4'>
                        We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.
                    </p>
                    <div className='flex justify-center lg:justify-start'>
                        <button className="btn rounded-2xl w-fit px-6 py-3">Book Now</button>
                    </div>
                </motion.div>

                {/* Right Side - Info Boxes */}
                <motion.div className='relative w-full lg:w-auto flex flex-col items-center lg:items-end gap-4 sm:gap-6' variants={containerVariants}>
                    <motion.p className='bg-amber-400 p-3 sm:p-4 w-40 text-center rounded-xl rotate-0 sm:rotate-[-6deg]' variants={boxVariants}>
                        Cancel Anytime
                    </motion.p>
                    <motion.p className='bg-amber-400 p-3 sm:p-4 w-40 text-center rounded-xl rotate-0 sm:rotate-[6deg]' variants={boxVariants}>
                        24/7 Customer Service
                    </motion.p>
                    <motion.p className='bg-amber-400 p-3 sm:p-4 w-40 text-center rounded-xl rotate-0 sm:rotate-[-1deg]' variants={boxVariants}>
                        Refers & Earn
                    </motion.p>
                    <motion.p className='bg-amber-400 p-3 sm:p-4 w-40 text-center rounded-xl rotate-0 sm:rotate-[0deg]' variants={boxVariants}>
                        Money Back Guarantee
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    )
}
