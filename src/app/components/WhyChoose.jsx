import React from 'react'

export default function WhyChoose() {
    return (
        <div className='px-4 sm:px-6 lg:px-8 py-24 sm:py-32'>
            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12'>
                {/* Left Side */}
                <div className='space-y-6 sm:space-y-8 lg:space-y-12 text-center lg:text-left'>
                    <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl'>Why You Choose Metro Solver?</h1>
                    <p className='text-sm sm:text-base lg:text-lg text-gray-700 lg:w-3/4'>
                        We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.
                    </p>
                    <div className='flex justify-center lg:justify-start'>
                        <button className="btn rounded-2xl w-fit px-6 py-3">Book Now</button>
                    </div>
                </div>

                {/* Right Side - Info Boxes */}
                <div className='relative w-full lg:w-auto flex flex-col items-center lg:items-end gap-4 sm:gap-6'>
                    <p className='bg-amber-400 p-3 sm:p-4 w-40 text-center rounded-xl rotate-0 sm:rotate-[-6deg]'>Cancel Anytime</p>
                    <p className='bg-amber-400 p-3 sm:p-4 w-40 text-center rounded-xl rotate-0 sm:rotate-[6deg]'>24/7 Customer Service</p>
                    <p className='bg-amber-400 p-3 sm:p-4 w-40 text-center rounded-xl rotate-0 sm:rotate-[-1deg]'>Refers & Earn</p>
                    <p className='bg-amber-400 p-3 sm:p-4 w-40 text-center rounded-xl rotate-0 sm:rotate-[0deg]'>Money Back Guarantee</p>
                </div>
            </div>
        </div>
    )
}
