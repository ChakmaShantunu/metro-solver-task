"use client";
import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub, FaYoutube, FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
    return (
        <section className="bg-gradient-to-br from-[#361A67] via-[#1B1B31] to-[#412178] text-white py-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left Side */}
                <div className="space-y-6 text-center md:text-left mt-8 md:mt-24">
                    <div className="flex justify-center md:justify-start">
                        <div className="bg-gradient-to-br from-blue-600 to-purple-500 w-16 h-16 rounded-md flex items-center justify-center font-bold text-xl text-white">
                            MM
                        </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Still Have A Questions?</h2>
                    <div className="flex justify-center md:justify-start gap-4 text-white text-xl flex-wrap">
                        <FaLinkedin />
                        <FaFacebook />
                        <FaInstagram />
                        <FaGithub />
                        <FaYoutube />
                        <span className="font-bold">X</span>
                    </div>
                </div>

                {/* Right Side - Form */}
                <form className="space-y-4 sm:space-y-6">
                    <input
                        type="text"
                        placeholder="Enter your name..."
                        className="w-full bg-[#1B1B31] border border-purple-500 text-white px-4 py-3 rounded-md placeholder:text-purple-300"
                    />
                    <input
                        type="email"
                        placeholder="Enter your email..."
                        className="w-full bg-[#1B1B31] border border-purple-500 text-white px-4 py-3 rounded-md placeholder:text-purple-300"
                    />
                    <input
                        type="text"
                        placeholder="Enter your number..."
                        className="w-full bg-[#1B1B31] border border-purple-500 text-white px-4 py-3 rounded-md placeholder:text-purple-300"
                    />
                    <input
                        type="text"
                        placeholder="Choose services..."
                        className="w-full bg-[#1B1B31] border border-purple-500 text-white px-4 py-3 rounded-md placeholder:text-purple-300"
                    />
                    <textarea
                        rows="4"
                        placeholder="Message goes in here..."
                        className="w-full bg-[#1B1B31] border border-purple-500 text-white px-4 py-3 rounded-md placeholder:text-purple-300"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition w-full sm:w-auto justify-center"
                    >
                        <FaPaperPlane /> Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
