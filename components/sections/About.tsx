"use client";

import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ index, title, description }: { index: number; title: string; description: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-[300px] p-[1px] rounded-[20px] bg-gradient-to-r from-purple-500 to-cyan-500 relative"
        >
            <div className="bg-[#0a0a0a] rounded-[20px] py-5 px-10 min-h-[280px] flex justify-evenly items-center flex-col">
                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                <p className="text-gray-400 text-[14px] text-center">{description}</p>
            </div>
        </motion.div>
    )
}

const About = () => {
    const services = [
        { title: "Frontend Developer", description: "Building beautiful, responsive, and interactive user interfaces using React, Next.js, and Tailwind CSS." },
        { title: "Backend Developer", description: "Creating robust and scalable server-side applications with Node.js, Express, and databases." },
        { title: "Blockchain Developer", description: "Developing secure smart contracts and decentralized applications (DApps) using Solidity and Web3.js." },
        { title: "Problem Solver", description: "Approaching complex challenges with a logical mindset and strong understanding of Data Structures and Algorithms." },
    ]
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[800px] z-[20] px-5" id="about">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                About Me
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center items-center flex-wrap">
                {services.map((service, index) => (
                    <ServiceCard key={index} index={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default About;
