import React from 'react'

export default function WhyChoose() {
    return (
        <div className='max-w-11/12 mx-auto py-48'>
            <div className='flex justify-between items-center'>
                <div className='space-y-8'>
                    <h1 className='font-bold text-5xl'>Why You Choose Metro Solver?</h1>
                    <p className='w-3xl'>We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.</p>
                    <button className="btn rounded-2xl w-fit">Book Now</button>
                </div>
                <div className='relative -top-12'>
                    <div className='absolute right-56 bottom-12 -rotate-6'>
                        <p className='bg-amber-400 p-4 w-sm text-center rounded-xl'>Cancel Anytime</p>
                    </div>
                    <div className='absolute right-56 top-4 rotate-6'>
                        <p className='bg-amber-400 p-4 w-sm text-center rounded-xl'>24/7 Customer Service</p>
                    </div>
                    <div className='absolute right-56 top-24 -rotate-1'>
                        <p className='bg-amber-400 p-4 w-sm text-center rounded-xl'>Refers & Earn</p>
                    </div>
                    <div className='absolute right-56 top-48'>
                        <p className='bg-amber-400 p-4 w-sm text-center rounded-xl'>Money Back Guarantee</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
