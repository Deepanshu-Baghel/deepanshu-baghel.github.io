"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
    "Software Developer",
    "Frontend Developer",
    "Blockchain Developer",
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex flex-col h-full w-full" id="about-me">
            <div className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 mt-40 w-full z-[20]">
                <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] w-fit rounded-full bg-[#0300145e]"
                    >
                        <h1 className="text-[13px] font-bold text-[#b49bff] uppercase tracking-widest pl-2 pr-2">
                            Deepanshu Baghel Portfolio
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                    >
                        <span>
                            Hi, I&apos;m
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                Deepanshu Baghel{" "}
                            </span>
                        </span>

                        <div className="h-[50px] overflow-hidden relative">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute top-0 left-0 text-2xl md:text-4xl text-gray-400"
                                >
                                    {roles[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg text-gray-400 my-5 max-w-[600px]"
                    >
                        I&apos;m a Full Stack Software Engineer with experience in Website,
                        Mobile, and Software development. Check out my projects and skills.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-row gap-5"
                    >
                        <a
                            href="#projects"
                            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg hover:bg-[#7042f861] transition-all duration-300 border border-[#7042f861] shadow-lg shadow-[#7042f861]/50"
                        >
                            View Projects
                        </a>
                        <a
                            href="/resume.pdf"
                            className="py-2 px-6 text-center text-white cursor-pointer rounded-lg hover:bg-white/10 transition-colors border border-white/20 backdrop-blur-sm"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
                >
                    {/* 3D content / Abstract shape */}
                    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
                        {/*  Ideally here we place a R3F Canvas for the 3D object.
                      For now keeping it abstract glow + implied shape until we build the specific component.
                 */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[80%] h-[80%] border border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute w-[60%] h-[60%] border border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
