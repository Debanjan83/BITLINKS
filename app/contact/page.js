import React from "react";

const Contact = () => {
    return (
        <main className="bg-gradient-to-b from-blue-50 via-cyan-50 to-white min-h-screen py-16 px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-10">
                <h1 className="text-4xl font-bold text-center text-gray-900">
                    Contact <span className="text-indigo-600">Us</span>
                </h1>
                <p className="text-center text-gray-600 mt-3 mb-10">
                    Have questions, feedback, or suggestions? We’d love to hear from you!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <form action={"https://formspree.io/f/xvgbezwq"} method="POST" className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Your Message"
                            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="flex flex-col justify-center gap-6">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">📍 Address</h2>
                            <p className="text-gray-600">Asansol, West Bengal, India</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">📧 Email</h2>
                            <p className="text-gray-600">debanjanpal79611@gmail.com</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">🌐 Socials</h2>
                            <p className="text-gray-600">
                                <a href="https://github.com/Debanjan83" target="_blank" className="hover:underline">
                                    GitHub
                                </a>{" "}
                                |{" "}
                                <a href="https://www.linkedin.com/in/debanjan-pal-231976221/" className="hover:underline">
                                    LinkedIn
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
