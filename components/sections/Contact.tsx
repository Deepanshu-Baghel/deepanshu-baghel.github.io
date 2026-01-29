"use client";

import React from "react";

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 z-[20]" id="contact">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10">
                Contact Me
            </h1>
            <div className="w-full max-w-[600px] p-1 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500">
                <form className="w-full h-full bg-[#0a0a0a] rounded-2xl p-10 flex flex-col gap-5">
                    <h2 className="text-2xl font-bold text-white mb-2 text-center">Let&apos;s build something together</h2>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 bg-[#111] border border-[#333] rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 bg-[#111] border border-[#333] rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="w-full p-3 bg-[#111] border border-[#333] rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                    <button className="button-primary py-3 rounded-lg text-white font-bold hover:scale-[1.02] transition-transform duration-200">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
