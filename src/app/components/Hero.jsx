import React from 'react'

export default function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-12 gap-4 w-full px-4">
                {/* Left Section */}
                <div className="col-span-12 md:col-span-4 flex flex-col justify-center space-y-6">
                    <h1 className="font-bold text-7xl leading-tight">Expert to Digitalise Your Growth</h1>
                    <p className="text-lg text-gray-700">
                        We are constantly growing or learning and improving. Enter your the personal real estate sanctuary, where finding the ideal home is
                    </p>
                    <button className="btn rounded-2xl w-fit">Explore Now</button>
                </div>

                {/* Right Section */}
                <div className="col-span-12 md:col-span-8 flex flex-col items-center space-y-4 relative">
                    <video
                        src="/v.mp4"
                        controls
                        className="rounded-xl w-[900px] h-[500px]"
                    />

                    <div className='w-12 h-12'>
                        <img
                            src="Frame3.gif"
                            alt="Logo"
                            className="w-32 h-auto"
                        />
                    </div>
                </div>


            </div>

        </div>
    )
}
