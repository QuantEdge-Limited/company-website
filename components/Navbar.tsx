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
            : "bg-transparent"
        }`}
      >
        {/* Logo Section - Responsive text sizing */}
        <div className="flex items-center">
          {/* Logo Icon - Optional: Add your logo image here */}
          <Link href="/">
            <Image
              src="/BGlogo2.png"
              alt="logo"
              width={594}
              height={420}
              className="w-[170px] h-24"
            />
          </Link>

          {/* Company Name - Responsive sizing and truncation */}
          {/* <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-black/70 truncate">
            QuantEdge Limited
          </h1> */}
        </div>

        {/* Desktop Navigation Menu - Hidden on mobile/tablet */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {/* Navigation Links */}
          <div className="flex items-center gap-4 xl:gap-6 text-black/70">
            <Link
              href="/"
              className="text-sm xl:text-lg hover:text-black duration-300 hover:-translate-y-1 
                         transform transition-transform"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm xl:text-lg hover:text-black duration-300 hover:-translate-y-1 
                         transform transition-transform"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm xl:text-lg hover:text-black duration-300 hover:-translate-y-1 
                         transform transition-transform"
            >
              Services
            </Link>
            <Link
              href="#team"
              className="text-sm xl:text-lg hover:text-black duration-300 hover:-translate-y-1 
                         transform transition-transform"
            >
              Team
            </Link>
          </div>
          {/* CTA Button */}
          <Link href="#contact">
            <Button className="h-10 px-4 xl:px-6 rounded-xl border border-neutral-500 bg-gradient-to-r from-[#34156e] to-[#340cac] text-white text-sm font-medium shadow-md hover:opacity-90 transition-opacity duration-300">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button - Visible on mobile/tablet only */}
        <button
          onClick={toggleMobileMenu}
          className={`lg:hidden p-2 transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay - Only visible when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`lg:hidden fixed top-[72px] right-0 h-[calc(100vh-72px)] w-64 sm:w-80 bg-[#0D1B2A] z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Navigation Links */}
        <div className="flex flex-col p-6 space-y-6">
          <Link
            href="#home"
            onClick={closeMobileMenu}
            className="text-white text-lg hover:text-[#00F5D4] transition-colors duration-300 py-2"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={closeMobileMenu}
            className="text-white text-lg hover:text-[#00F5D4] transition-colors duration-300 py-2"
          >
            About
          </Link>
          <Link
            href="#services"
            onClick={closeMobileMenu}
            className="text-white text-lg hover:text-[#00F5D4] transition-colors duration-300 py-2"
          >
            Services
          </Link>
          <Link
            href="#team"
            onClick={closeMobileMenu}
            className="text-white text-lg hover:text-[#00F5D4] transition-colors duration-300 py-2"
          >
            Team
          </Link>

          {/* Mobile CTA Button */}
          <Link href="#contact">
            <Button
              onClick={closeMobileMenu}
              className="w-full mt-6 h-12 rounded-xl border border-neutral-500 bg-gradient-to-r from-[#34156e] to-[#340cac] text-white text-base font-medium shadow-md hover:opacity-90 transition-opacity duration-300"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
