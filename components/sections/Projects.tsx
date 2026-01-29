"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    const projects = [
        {
            title: "Modern Portfolio",
            description: "A futuristic 3D portfolio website built with Next.js, Three.js, and Tailwind CSS. Features interactive 3D elements and smooth animations.",
            tags: ["Next.js", "React", "Three.js", "Tailwind"],
            src: "/project1.png",
            link: "https://example.com",
            github: "https://github.com",
        },
        {
            title: "Crypto Dashboard",
            description: "Real-time cryptocurrency dashboard tracking prices, market cap, and trends. Integrates with CoinGecko API and Web3 wallet connection.",
            tags: ["React", "Web3.js", "Chart.js", "API"],
            src: "/project2.png",
            link: "https://example.com",
            github: "https://github.com",
        },
        {
            title: "E-Commerce DApp",
            description: "Decentralized marketplace for trading digital assets. Smart contracts written in Solidity and deployed on Ethereum testnet.",
            tags: ["Solidity", "Hardhat", "Next.js", "IPFS"],
            src: "/project3.png",
            link: "https://example.com",
            github: "https://github.com",
        },
    ]

    return (
        <div className="flex flex-col items-center justify-center py-20 z-[20]" id="projects">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center items-center flex-wrap">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
