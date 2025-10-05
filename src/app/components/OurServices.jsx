import React from 'react';

export default function OurServices() {
    const data = [
        { logo: "https://img.icons8.com/ios-filled/50/ffffff/cube.png", title: "3D Animation & Visualisation", description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.", readMore: "/services/3d-animation" },
        { logo: "https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png", title: "E-Commerce Solution", description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.", readMore: "/services/ecommerce" },
        { logo: "https://img.icons8.com/ios-filled/50/ffffff/money-bag.png", title: "Accounting", description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.", readMore: "/services/accounting" },
        { logo: "https://img.icons8.com/ios-filled/50/ffffff/gift.png", title: "Special Combo", description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.", readMore: "/services/combo" },
        { logo: "https://img.icons8.com/ios-filled/50/ffffff/monitor.png", title: "Premium Website", description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.", readMore: "/services/website" },
        { logo: "https://img.icons8.com/ios-filled/50/ffffff/domain.png", title: "Premium Domains", description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.", readMore: "/services/domains" },
        { logo: "https://img.icons8.com/ios-filled/50/ffffff/robot.png", title: "Proxy", description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.", readMore: "/features/proxy" },
        { logo: "https://img.icons8.com/ios-filled/50/ffffff/t-shirt.png", title: "Merchandise", description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.", readMore: "/features/merchandise" },
        { logo: "https://img.icons8.com/ios-filled/50/ffffff/graduation-cap.png", title: "Academy", description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.", readMore: "/features/academy" },
        { logo: "https://img.icons8.com/ios-filled/50/ffffff/paint-brush.png", title: "Graphic Design", description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.", readMore: "/services/graphic-design" },
        { logo: "https://img.icons8.com/ios-filled/50/ffffff/code.png", title: "Web & Software Development", description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.", readMore: "/services/web-development" },
        { logo: "https://img.icons8.com/ios-filled/50/ffffff/video.png", title: "Multimedia & Video Editing", description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.", readMore: "/services/video-editing" },
        { logo: "https://img.icons8.com/ios-filled/50/ffffff/megaphone.png", title: "Digital Marketing", description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.", readMore: "/services/marketing" },
        { logo: "https://img.icons8.com/ios-filled/50/ffffff/pen.png", title: "Creative Writing Solution", description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.", readMore: "/services/writing" },
        { logo: "https://img.icons8.com/ios-filled/50/ffffff/search.png", title: "SEO", description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.", readMore: "/services/seo" }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="text-center my-12 space-y-4">
                <h1 className='text-4xl sm:text-5xl font-bold'>Our Services</h1>
                <p className='px-2 sm:px-4 text-sm sm:text-base'>
                    Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.
                </p>
            </div>

            {/* Services Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {data.map((singleData, index) => (
                    <div key={index} className="card bg-gray-900 text-primary-content rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                        <div className="card-body p-6 flex flex-col gap-4">
                            <img src={singleData.logo} alt={singleData.title} className='w-10 h-10' />
                            <h2 className="card-title text-lg sm:text-xl font-semibold">{singleData.title}</h2>
                            <p className="text-sm sm:text-base">{singleData.description}</p>
                            <a
                                href={singleData.readMore}
                                className="text-blue-400 font-semibold hover:underline flex items-center gap-1 text-sm sm:text-base"
                            >
                                Read More <span>→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
