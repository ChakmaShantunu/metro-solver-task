import React from 'react'

export default function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 md:px-8">
            <div className="grid grid-cols-12 gap-4 w-full">
                {/* Left Section */}
                <div className="col-span-12 md:col-span-4 flex flex-col justify-center space-y-4 md:space-y-6 text-center md:text-left">
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl leading-tight">
                        Expert to Digitalise Your Growth
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700">
                        We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is
                    </p>
                    <button className="btn rounded-2xl w-full sm:w-fit mx-auto md:mx-0">
                        Explore Now
                    </button>
                </div>

                {/* Right Section */}
                <div className="col-span-12 md:col-span-8 flex flex-col items-center space-y-4 relative">
                    <video
                        src="/v.mp4"
                        controls
                        className="w-full max-w-lg sm:max-w-2xl md:w-[900px] md:h-[500px] rounded-xl"
                    />

                    <div className='w-24 h-24 md:w-12 md:h-12'>
                        <img
                            src="Frame3.gif"
                            alt="Logo"
                            className="w-32 sm:w-48 md:w-32 h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
