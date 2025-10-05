"use client";
import React from "react";

export default function PromoMarquee() {
    return (
        <div className="overflow-hidden whitespace-nowrap bg-[#1B1B31] py-4">
            <div className="inline-block animate-marquee text-white text-sm md:text-lg font-medium">
                <span className="mx-6">🎯 Budget Friendly</span>
                <span className="mx-6">🏆 No.1 in Europe</span>
                <span className="mx-6">📞 On your first order</span>
                <span className="mx-6 text-red-500 font-bold">🔥 30% OFF</span>
                <span className="mx-6">🛍️ For all products you may get the offer</span>
                <span className="mx-6">💡 User Friendly</span>
                <span className="mx-6">🕒 24/7 Service</span>
                {/* New items added */}
                <span className="mx-6">🚀 Fast Delivery</span>
                <span className="mx-6">💳 Secure Payment</span>
                <span className="mx-6">🌍 Worldwide Shipping</span>
                <span className="mx-6 text-yellow-400 font-semibold">🎁 Special Gifts</span>
                <span className="mx-6">📦 Easy Returns</span>
            </div>
        </div>
    );
}
