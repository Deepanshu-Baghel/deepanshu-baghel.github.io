"use client";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[50]">
            <div className="w-full flex justify-center items-center py-5">
                <p className="text-[15px] text-center">
                    &copy; 2024 Deepanshu Baghel. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
