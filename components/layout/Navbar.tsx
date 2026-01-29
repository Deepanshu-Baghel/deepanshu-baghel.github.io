"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 px-6 sm:px-10 py-4">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto max-w-7xl">
                <Link href="/" className="h-auto w-auto flex flex-row items-center cursor-pointer hover:scale-105 transition-transform duration-300">
                    <span className="font-bold text-xl text-gray-300">Deepanshu<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Baghel</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex flex-row items-center justify-between w-[500px] h-full border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full mr-[20px]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="cursor-pointer text-gray-200 hover:text-white transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Social Icons (Desktop) */}
                <div className="hidden md:flex flex-row gap-5">
                    <Link href="https://github.com/Deepanshu-Baghel" target="_blank" className="text-gray-300 hover:text-white transition-colors"><Github className="w-6 h-6" /></Link>
                    <Link href="https://linkedin.com" target="_blank" className="text-gray-300 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></Link>
                    <Link href="mailto:email@example.com" className="text-gray-300 hover:text-white transition-colors"><Mail className="w-6 h-6" /></Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-16 left-0 w-full bg-[#030014] border-b border-[#7042f861] p-4 md:hidden flex flex-col gap-4 shadow-lg text-center"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="cursor-pointer text-gray-200 hover:text-white hover:bg-[#7042f861] py-2 rounded-lg transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex flex-row justify-center gap-6 mt-2 pb-2">
                        <Link href="https://github.com/Deepanshu-Baghel" target="_blank" className="text-gray-300 hover:text-white"><Github className="w-6 h-6" /></Link>
                        <Link href="https://linkedin.com" target="_blank" className="text-gray-300 hover:text-white"><Linkedin className="w-6 h-6" /></Link>
                        <Link href="mailto:email@example.com" className="text-gray-300 hover:text-white"><Mail className="w-6 h-6" /></Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
