"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "White Label", path: "/white-label" },
        { name: "Contact Us", path: "/contact" },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    const menuItemVariants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    return (
        <motion.div
            className="w-full px-4 md:px-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <div className='flex justify-between items-center py-4'>
                {/* Left Logo */}
                <div>
                    <img src="Frame.gif" alt="Logo" className="w-16 md:w-auto" />
                </div>

                {/* Hamburger for small screens */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
                    </button>
                </div>

                {/* Center Navigation - hidden on small screens */}
                <div className='hidden md:block py-6 px-8 rounded-full bg-gray-800'>
                    <ul className='flex justify-center items-center gap-8'>
                        {navItems.map(item => (
                            <motion.li key={item.name} variants={menuItemVariants} whileHover={{ scale: 1.1 }}>
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
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Right Avatar */}
                <div className="hidden md:block">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" alt="Avatar" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <motion.div
                    className="md:hidden bg-gray-800 rounded-xl mt-2 p-4 space-y-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {navItems.map(item => (
                        <motion.div
                            key={item.name}
                            variants={menuItemVariants}
                            initial="hidden"
                            animate="show"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Link href={item.path} onClick={() => setMenuOpen(false)}>
                                <div
                                    className={`py-2 px-4 rounded-lg text-white cursor-pointer transition-all duration-300
                                        ${pathname === item.path ? "border-2 border-amber-50 font-bold" : ""}`}
                                >
                                    {item.name}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
}
