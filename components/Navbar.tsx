"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = ["Home", "About", "Services", "Team"];

  return (
    <>
      {/* === NAVBAR CONTAINER === */}
      <nav className="fixed top-0 left-0 w-full h-[72px] z-50 flex items-center justify-between px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-[#0A1220]/95 via-[#0B1524]/90 to-[#0D1B2A]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_2px_15px_rgba(0,0,0,0.3)] transition-all duration-500">
        
        {/* === LOGO SECTION === */}
        <Link
          href="/"
          className="flex items-center gap-3 group cursor-pointer select-none"
        >
          <div className="relative flex items-center justify-center p-1.5 bg-white/100 rounded-lg shadow-inner transition-all duration-300 group-hover:bg-white/20">
            <Image
              src="/BGlogo2.png"
              alt="QuantEdge Limited Logo"
              width={50}
              height={50}
              priority
              quality={100}
              className="object-contain brightness-[1.35] contrast-125 drop-shadow-[0_0_10px_rgba(0,245,212,0.3)] transition-all duration-500 group-hover:brightness-[1.6] group-hover:drop-shadow-[0_0_15px_rgba(0,245,212,0.6)]"
            />
          </div>
          <span className="text-xl font-semibold tracking-wide text-white/90 group-hover:text-[#00F5D4] transition-all duration-500 drop-shadow-sm">
            QuantEdge Limited
          </span>
        </Link>

        {/* === DESKTOP NAV LINKS === */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6 text-white/85 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative group text-base tracking-wide transition-all duration-300 hover:text-[#00F5D4]"
              >
                {link}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#00F5D4] rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* === CTA BUTTON === */}
          <Link href="#contact">
            <Button className="ml-4 h-11 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-[#431f9a] to-[#0066ff] shadow-[0_0_12px_rgba(0,102,255,0.4)] hover:shadow-[0_0_18px_rgba(0,102,255,0.7)] hover:opacity-95 transition-all duration-300">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* === MOBILE MENU BUTTON === */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-white hover:text-[#00F5D4] transition-all duration-300"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* === MOBILE OVERLAY === */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* === MOBILE SIDEBAR === */}
      <div
        className={`lg:hidden fixed top-[72px] right-0 h-[calc(100vh-72px)] w-72 bg-gradient-to-b from-[#0B1524]/95 to-[#0A1020]/95 border-l border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] z-50 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={closeMobileMenu}
              className="text-white text-lg tracking-wide hover:text-[#00F5D4] transition-all duration-300 transform hover:translate-x-1"
            >
              {link}
            </Link>
          ))}
          <Link href="#contact">
            <Button
              onClick={closeMobileMenu}
              className="mt-6 w-full h-12 rounded-xl text-white font-semibold bg-gradient-to-r from-[#431f9a] to-[#0066ff] shadow-[0_0_10px_rgba(0,102,255,0.5)] hover:shadow-[0_0_18px_rgba(0,102,255,0.8)] transition-all duration-300"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
