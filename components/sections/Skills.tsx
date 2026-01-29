"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Text, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

const SkillText = ({ text, position }: { text: string; position: [number, number, number] }) => {
    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <Text
                color="#fff"
                fontSize={0.5}
                position={position}
                maxWidth={200}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign="center"
                font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff" // Optional: Use a reliable font URL or local font
                anchorX="center"
                anchorY="middle"
            >
                {text}
                <meshStandardMaterial color="#00dbe3" toneMapped={false} />
            </Text>
        </Float>
    );
};

const Skills = () => {
    const skills = [
        { name: "React", pos: [-2, 2, 0] },
        { name: "Next.js", pos: [2, 2, 0] },
        { name: "TypeScript", pos: [0, 0, 0] },
        { name: "Tailwind", pos: [-2, -2, 0] },
        { name: "Three.js", pos: [2, -2, 0] },
        { name: "Node.js", pos: [4, 0, 0] },
        { name: "Solidity", pos: [-4, 0, 0] },
        { name: "Web3.js", pos: [0, 3, 0] },
        { name: "MongoDB", pos: [0, -3, 0] },
    ];

    return (
        <div className="flex flex-col items-center justify-center py-20 relative z-[20]" id="skills">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10">
                Skills
            </h1>
            <div className="w-full h-[500px] flex items-center justify-center">
                <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                    <group>
                        {skills.map((skill, i) => (
                            // @ts-ignore
                            <SkillText key={i} text={skill.name} position={skill.pos} />
                        ))}
                    </group>
                </Canvas>
            </div>
        </div>
    );
};

export default Skills;
