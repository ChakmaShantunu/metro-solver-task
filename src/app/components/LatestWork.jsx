import React from 'react'

export default function LatestWork() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className='max-w-7xl mx-auto mt-24'>
                <div>
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
                        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl'>Our Latest Work</h1>
                        <p className='text-sm sm:text-base md:text-lg text-gray-700 md:w-2/3'>
                            Based on the description of Metro Solver and the image provided, here is a 6-step process that Metro Solver uses to scale a customer's business
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <img
                    src="/latestImage.png"
                    alt="Latest Work"
                    className='w-full h-auto rounded-lg'
                />
            </div>
        </div>
    )
}
