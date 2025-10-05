"use client";
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "White Label", path: "/white-label" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <div>
            <div className='flex justify-between items-center py-4'>
                {/* Left Logo */}
                <div>
                    <img src="Frame.gif" alt="Logo" />
                </div>

                {/* Center Navigation */}
                <div className='py-6 px-8 rounded-full bg-gray-800'>
                    <ul className='flex justify-center items-center gap-8'>
                        {navItems.map(item => (
                            <li key={item.name}>
                                <Link href={item.path}>
                                    <span
                                        className={`py-2 px-6 rounded-2xl cursor-pointer transition-all duration-300
                                            ${pathname === item.path
                                                ? "border-2 border-amber-50 font-bold"
                                                : ""
                                            }`}
                                    >
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Avatar */}
                <div>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" alt="Avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
