"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

interface Props {
    src: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    github: string;
}

const ProjectCard = ({ src, title, description, tags, link, github }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-[350px]">
            {/* Placeholder for Image */}
            <div className="w-full h-[180px] bg-gradient-to-br from-purple-900 to-black p-4 flex items-center justify-center overflow-hidden">
                {/* Use src to load real image, for now just title */}
                <h4 className="text-2xl font-bold text-white/20 uppercase tracking-widest text-center">{title}</h4>
                {/* If real image: <Image src={src} alt={title} fill className="object-cover" /> */}
            </div>

            <div className="relative p-4 bg-[#0a0a0a]">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300 line-clamp-3 md:line-clamp-none">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[10px] bg-[#2A0E61] px-2 py-1 rounded-full text-gray-200">
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-4 w-full">
                    <a href={github} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-transparent border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors cursor-pointer text-sm">
                        <Github size={16} /> Code
                    </a>
                    <a href={link} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-md text-white hover:opacity-80 transition-opacity cursor-pointer text-sm">
                        <Globe size={16} /> Live Demo
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;
