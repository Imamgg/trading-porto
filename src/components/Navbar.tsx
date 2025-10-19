"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Performance", href: "#stats" },
    { name: "Strategy", href: "#strategy" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d0d15]/95 backdrop-blur-md border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3">
              <div className="relative">
                <Image className="rounded-full"
                  src="/Images/image.png"
                  alt="Logo"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight">
                  Shadow <span className="text-[#ff1654]">FX</span>
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-3 bg-gradient-to-r from-[#ff1654] to-[#ff4d8b] hover:from-[#ff4d8b] hover:to-[#ff1654] text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#ff1654]/30 hover:shadow-[#ff1654]/50">
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0d0d15]/98 backdrop-blur-md border-t border-gray-800/50">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#ff1654] to-[#ff4d8b] text-white rounded-lg font-bold transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
