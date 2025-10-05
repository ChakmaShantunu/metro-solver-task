"use client";
import React from "react";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function FooterSection() {
    return (
        <footer className="bg-gradient-to-br from-[#361A67] via-[#1B1B31] to-[#412178] text-white pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Contact Info */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">Metro Solver Limited</h3>
                    <p className="text-sm text-gray-300">Grantham Road, London E12 5LX, United Kingdom</p>
                    <p className="flex items-center gap-2 text-sm text-gray-300">
                        <FaPhone /> +447763 456546
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-300">
                        <FaEnvelope /> official@metrosolver.com
                    </p>
                    <div className="mt-4">
                        <label className="text-sm text-gray-400 mb-1 block">Country Currency</label>
                        <select className="bg-[#1B1B31] border border-purple-500 text-white px-3 py-2 rounded-md w-full">
                            <option>GBP - British Pound</option>
                            <option>USD - US Dollar</option>
                            <option>EUR - Euro</option>
                        </select>
                    </div>
                </div>

                {/* Company */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Send Message</li>
                        <li>User Profile</li>
                        <li>Blog</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Support</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Help Center</li>
                        <li>Contact Us</li>
                        <li>Terms and Conditions</li>
                        <li>Start Graphic Design</li>
                        <li>Earnings</li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Digital Marketing</li>
                        <li>Creative Writing Solution</li>
                        <li>Website Development</li>
                        <li>E-Commerce Solution</li>
                        <li>Content Editing</li>
                        <li>Merchandise</li>
                        <li>Premium Website</li>
                        <li>Premium Domains</li>
                        <li>Special Combo</li>
                    </ul>
                </div>
            </div>

            {/* Partner Logos */}
            <div className="max-w-7xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 items-center justify-center">
                {[
                    "Meta Business Partner",
                    "Google Marketing Platform",
                    "Microsoft Partner",
                    "AWS Partner",
                    "Apple Partner",
                    "Amazon SPN",
                    "TikTok Marketing Partner",
                ].map((partner, index) => (
                    <div
                        key={index}
                        className="bg-white/10 text-center text-xs text-gray-300 py-2 px-3 rounded-md border border-purple-500"
                    >
                        {partner}
                    </div>
                ))}
            </div>

            {/* Horizontal line */}
            <hr className="w-full border-t border-gray-500/30 mt-6" />


            {/* Footer Note */}
            <div className="mt-12 text-center text-sm text-gray-400 space-y-1 flex justify-between items-center max-w-7xl mx-auto">
                <p>© Metro Solver. All Rights Reserved 2024</p>
                <p>Metro Solver Ltd is incorporated in England. Website Registration No: 12751899</p>
            </div>
        </footer>
    );
}
