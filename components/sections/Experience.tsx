"use client";

import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ item, index }: { item: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center w-full max-w-[800px] mb-10 relative z-[20]"
        >
            <div className={`w-full md:w-1/2 px-5 flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} text-center mb-5 md:mb-0 order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                <h4 className="text-lg text-gray-400">{item.company}</h4>
                <span className="text-sm text-gray-500 mb-2 block">{item.date}</span>
                <p className="text-gray-300 text-sm mt-2 max-w-[300px] mx-auto md:mx-0">
                    {item.description}
                </p>
            </div>

            <div className="w-[20px] h-[20px] bg-cyan-500 rounded-full border-4 border-[#0a0a0a] z-10 order-2 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-[40px] h-[40px] bg-cyan-500/20 rounded-full animate-ping"></div>
            </div>

            <div className={`w-1/2 hidden md:block order-3 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}></div>
        </motion.div>
    )
}

const Experience = () => {
    const experience = [
        {
            role: "Software Developer Intern",
            company: "Tech Startups Inc.",
            date: "Jan 2024 - Present",
            description: "Developing scalable web applications using Next.js and Node.js. Optimized frontend performance by 40%."
        },
        {
            role: "Freelance Frontend Developer",
            company: "Upwork / Self-employed",
            date: "Jun 2023 - Dec 2023",
            description: "Built responsive websites for clients ranging from e-commerce to portfolio sites using React and Tailwind."
        },
        {
            role: "Blockchain Research Fellow",
            company: "University Lab",
            date: "Jan 2023 - Jun 2023",
            description: "Researched zero-knowledge proofs and implemented smart contracts for decentralized voting systems."
        }
    ]

    return (
        <div className="flex flex-col items-center justify-center py-20 relative z-[20]" id="experience">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-20">
                My Experience
            </h1>

            <div className="relative w-full flex flex-col items-center">
                {/* Timeline Line */}
                <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500 left-1/2 transform -translate-x-1/2 hidden md:block"></div>

                {experience.map((item, index) => (
                    <ExperienceCard key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Experience;
