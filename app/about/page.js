import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <main className="bg-gradient-to-b from-blue-50 via-cyan-50 to-white min-h-screen py-16 px-6">
            <div className="max-w-6xl mx-auto text-center mt-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                    About <span className="text-indigo-600">BitLinks</span>
                </h1>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    BitLinks is a fast, reliable, and privacy-focused URL shortener designed
                    to make your links easy to share. No sign-ups, no tracking — just simple
                    and powerful link shortening.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold text-gray-900">⚡ Fast & Reliable</h2>
                    <p className="mt-2 text-gray-600 text-sm">
                        Shorten links instantly with a powerful backend built for speed and uptime.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold text-gray-900">🔒 Privacy First</h2>
                    <p className="mt-2 text-gray-600 text-sm">
                        We don’t track or sell your data. Your links are yours, and always private.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold text-gray-900">🚀 Easy to Use</h2>
                    <p className="mt-2 text-gray-600 text-sm">
                        No sign-ups or complexity — just paste your link and get a short URL.
                    </p>
                </div>
            </div>

            <div className="mt-20 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                <p className="mt-4 text-gray-600">
                    At BitLinks, our mission is to simplify the way people share links online.
                    Whether you're a developer, marketer, or casual user, we provide a clean,
                    efficient, and reliable tool that empowers you to share without limits.
                </p>
            </div>

            <div className="mt-20 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900">Meet the Creator</h2>
                <div className="mt-8 flex flex-col items-center">
                    <Image
                        src="/profile2.jpg"
                        alt="Creator"
                        width={112} 
                        height={112}
                        className="rounded-full shadow-lg border-4 border-indigo-600 object-cover"
                    />
                    <h3 className="mt-4 text-xl font-semibold text-gray-800">Debanjan Pal</h3>
                    <p className="text-gray-600 text-sm">
                        Full-stack Web Developer & Creator of BitLinks
                    </p>
                </div>
            </div>
        </main>
    );
};

export default About;
