import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <div>
          <h2 className="text-2xl font-bold text-white">BitLinks</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-md">
            Simplifying your links with speed, reliability, and no tracking. 
            Shorten and share your URLs in just seconds.
          </p>
        </div>

        <div className="flex md:justify-end">
          <ul className="space-y-2 md:space-y-0 md:flex md:gap-6 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/shorten" className="hover:text-white transition-colors duration-200">
                Shorten
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="font-semibold text-gray-300">BitLinks</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
