"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu function
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav
        className={`w-full h-[72px] fixed top-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md"
            : "bg-gradient-to-r from-[#0F172A]/90 via-[#1E293B]/90 to-[#0F172A]/90"
        }`}
      >
        {/* Logo Section - Responsive text sizing */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/BGlogo2.png"
              alt="logo"
              width={594}
              height={420}
              className="w-[170px] h-24 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <div
            className={`flex items-center gap-4 xl:gap-6 ${
              isScrolled ? "text-gray-800" : "text-gray-200"
            }`}
          >
            <Link
              href="/"
              className="text-sm xl:text-lg hover:text-indigo-500 duration-300 hover:-translate-y-1 transform transition-transform"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm xl:text-lg hover:text-indigo-500 duration-300 hover:-translate-y-1 transform transition-transform"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm xl:text-lg hover:text-indigo-500 duration-300 hover:-translate-y-1 transform transition-transform"
            >
              Services
            </Link>
            <Link
              href="#team"
              className="text-sm xl:text-lg hover:text-indigo-500 duration-300 hover:-translate-y-1 transform transition-transform"
            >
              Team
            </Link>
          </div>

          {/* CTA Button */}
          <Link href="#contact">
            <Button
              className={`h-10 px-5 xl:px-6 rounded-xl text-white text-sm font-semibold shadow-md transition-all duration-300 border border-transparent ${
                isScrolled
                  ? "bg-gradient-to-r from-indigo-600 to-purple-700 hover:opacity-90"
                  : "bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90"
              }`}
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={`lg:hidden p-2 transition-colors duration-300 ${
            isScrolled ? "text-gray-800" : "text-gray-200"
          }`}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-[72px] right-0 h-[calc(100vh-72px)] w-64 sm:w-80 bg-[#111827] z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <Link
            href="#home"
            onClick={closeMobileMenu}
            className="text-gray-200 text-lg hover:text-indigo-400 transition-colors duration-300 py-2"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={closeMobileMenu}
            className="text-gray-200 text-lg hover:text-indigo-400 transition-colors duration-300 py-2"
          >
            About
          </Link>
          <Link
            href="#services"
            onClick={closeMobileMenu}
            className="text-gray-200 text-lg hover:text-indigo-400 transition-colors duration-300 py-2"
          >
            Services
          </Link>
          <Link
            href="#team"
            onClick={closeMobileMenu}
            className="text-gray-200 text-lg hover:text-indigo-400 transition-colors duration-300 py-2"
          >
            Team
          </Link>

          {/* Mobile CTA Button */}
          <Link href="#contact">
            <Button
              onClick={closeMobileMenu}
              className="w-full mt-6 h-12 rounded-xl border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-base font-semibold shadow-md hover:opacity-90 transition-opacity duration-300"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
