import React from 'react';

export default function Hero() {
    const cards = [
        {
            "logo": "3d-cube",
            "title": "3D Animation & Visualisation",
            "description": "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.",
            "readMore": "/services/3d-animation"
        },
        {
            "logo": "shopping-cart",
            "title": "E-Commerce Solution",
            "description": "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.",
            "readMore": "/services/ecommerce"
        },
        {
            "logo": "money-bag",
            "title": "Accounting",
            "description": "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.",
            "readMore": "/services/accounting"
        },
        {
            "logo": "gift-box",
            "title": "Special Combo",
            "description": "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.",
            "readMore": "/services/combo"
        },
        {
            "logo": "monitor",
            "title": "Premium Website",
            "description": "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.",
            "readMore": "/services/website"
        },
        {
            "logo": "globe-cursor",
            "title": "Premium Domains",
            "description": "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.",
            "readMore": "/services/domains"
        },
        {
            "logo": "robot-server",
            "title": "Proxy",
            "description": "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.",
            "readMore": "/features/proxy"
        },
        {
            "logo": "tshirt-dollar",
            "title": "Merchandise",
            "description": "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.",
            "readMore": "/features/merchandise"
        },
        {
            "logo": "graduation-cap",
            "title": "Academy",
            "description": "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.",
            "readMore": "/features/academy"
        },
        {
            "logo": "paint-brush",
            "title": "Graphic Design",
            "description": "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.",
            "readMore": "/services/graphic-design"
        },
        {
            "logo": "code-glow",
            "title": "Web & Software Development",
            "description": "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.",
            "readMore": "/services/web-development"
        },
        {
            "logo": "video-edit",
            "title": "Multimedia & Video Editing",
            "description": "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.",
            "readMore": "/services/video-editing"
        },
        {
            "logo": "megaphone",
            "title": "Digital Marketing",
            "description": "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.",
            "readMore": "/services/marketing"
        },
        {
            "logo": "pen-paper",
            "title": "Creative Writing Solution",
            "description": "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.",
            "readMore": "/services/writing"
        },
        {
            "logo": "search-graph",
            "title": "SEO",
            "description": "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.",
            "readMore": "/services/seo"
        }
    ]


    return (
        <div className="">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-center mb-10">
                    Expert to Digitalise Your Growth
                </h1>
                <p>Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.</p>
            </div>
            {/* Card Grid */}
            <div className='grid grid-cols-3'>
                {cards.map((card, index) => (
                    <div key={index} className="card bg-base-100 w-96 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">{card.title}</h2>
                            <p>{card.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
