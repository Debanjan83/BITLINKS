"use client"
import React, { useState } from "react"
import Link from "next/link"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shorten", label: "Shorten" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">

        <div className="text-2xl font-extrabold text-white tracking-wide">
          <Link href="/">BitLinks</Link>
        </div>

        <ul className="hidden md:flex gap-10 text-white font-medium">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="relative group"
            >
              <Link href={link.href}>
                <span className="cursor-pointer hover:text-cyan-200 transition-colors">
                  {link.label}
                </span>
              </Link>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex gap-4">
          <Link href="/generate">
            <button className="px-4 py-2 rounded-xl bg-white/20 text-white font-semibold shadow-md hover:bg-white/30 backdrop-blur-md transition-all duration-300 cursor-pointer">
              Try Now
            </button>
          </Link>
          <Link href="https://github.com/Debanjan83" target="_blank">
            <button className="px-4 py-2 rounded-xl bg-white/20 text-white font-semibold shadow-md hover:bg-white/30 backdrop-blur-md transition-all duration-300 cursor-pointer">
              GitHub
            </button>
          </Link>
        </div>

        <div className="md:hidden text-white">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-700/95 backdrop-blur-md shadow-lg transition-all">
          <ul className="flex flex-col items-center gap-6 py-6 text-white font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <Link href="/generate">
              <button className="w-40 px-4 py-2 rounded-xl bg-white/20 text-white font-semibold shadow-md hover:bg-white/30 backdrop-blur-md transition-all duration-300">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/Debanjan83" target="_blank">
              <button className="w-40 px-4 py-2 rounded-xl bg-white/20 text-white font-semibold shadow-md hover:bg-white/30 backdrop-blur-md transition-all duration-300">
                GitHub
              </button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
