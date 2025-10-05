"use client";
import React from "react";

const faqItems = [
    "Web & Software Development",
    "Graphic Design & Logo",
    "Multimedia & Video Editing",
    "Creative Writing Solutions",
    "E-Commerce Solutions",
    "Refund, Earn & Cancel Policies",
    "Getting Started & General Info",
    "General Policies & Customer Support",
];

export default function FaqSection() {
    return (
        <section className="bg-gradient-to-br from-[#361A67] via-[#1B1B31] to-[#412178] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column */}
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Got Questions? <br className="md:hidden" /> We've got Answers
                    </h2>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-4">Digital Marketing</h3>
                        <ul className="space-y-3 pl-4">
                            {faqItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-white">
                                    <span className="mt-1 w-2 h-2 rounded-full bg-white flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column - Accordion */}
                <div className="space-y-4">
                    {[
                        {
                            question: "What services do you offer in digital marketing?",
                            answer:
                                "We provide SEO, social media management, email marketing, content marketing, PPC campaigns, and more.",
                        },
                        {
                            question: "How can digital marketing help my business?",
                            answer:
                                "Digital marketing helps increase visibility, attract targeted customers, and grow revenue through strategic online campaigns.",
                        },
                        {
                            question: "How do you measure campaign success?",
                            answer:
                                "We track KPIs like traffic, conversions, ROI, engagement rates, and customer retention using analytics tools.",
                        },
                        {
                            question: "Do you offer local SEO?",
                            answer:
                                "Yes, we optimize your business for local search visibility including Google Maps, location-based keywords, and citations.",
                        },
                        {
                            question: "How do I create an account?",
                            answer: "Click the 'Sign Up' button in the top right corner and follow the registration process.",
                        },
                        {
                            question: "I forgot my password. What should I do?",
                            answer:
                                'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
                        },
                        {
                            question: "How do I update my profile information?",
                            answer:
                                'Go to "My Account" settings and select "Edit Profile" to make changes.',
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="collapse collapse-plus bg-white/10 backdrop-blur-md border border-purple-500 rounded-md"
                        >
                            <input type="radio" name="faq-accordion" defaultChecked={idx === 0} />
                            <div className="collapse-title font-semibold text-white text-base sm:text-lg">
                                {item.question}
                            </div>
                            <div className="collapse-content text-sm sm:text-base text-gray-300">
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
