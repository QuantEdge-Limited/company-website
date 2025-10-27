"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { servicesOffered } from "@/constants";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isDesktopExploreOpen, setIsDesktopExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsExploreOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(event.target as Node)
      ) {
        setIsDesktopExploreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsExploreOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsExploreOpen(false);
  };

  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  const serviceLinks = servicesOffered.map((service) => ({
    href: `/services/${service.title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")}`,
    label: service.title,
  }));

  const NavLink = ({
    href,
    label,
    onClick,
  }: {
    href: string;
    label: string;
    onClick?: () => void;
  }) => (
    <Link
      href={href}
      onClick={onClick}
      className="text-sm sm:text-base md:text-lg lg:text-xl hover:text-[#340cac] transition-colors font-medium"
    >
      {label}
    </Link>
  );

  return (
    <>
      <nav className="w-full fixed top-0 z-50 bg-gradient-to-r from-white via-blue-50 to-white border-b border-white shadow-sm">
        <div className="h-14 sm:h-16 md:h-18 flex items-center justify-between text-[#0D090A] px-4 sm:px-6 md:px-8 lg:px-16">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src="/BGlogo2.png"
                alt="logo"
                width={200}
                height={100}
                className="w-auto h-auto object-contain max-h-12 sm:max-h-18 md:max-h-20"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {/* Home Link */}
            <NavLink href="/" label="Home" onClick={closeMobileMenu} />

            {/* Services Dropdown */}
            <div className="relative" ref={exploreRef}>
              <button
                onClick={() => setIsDesktopExploreOpen(!isDesktopExploreOpen)}
                className="flex items-center gap-1 text-sm sm:text-base md:text-lg lg:text-xl hover:text-[#340cac] transition-colors font-medium"
                aria-expanded={isDesktopExploreOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isDesktopExploreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDesktopExploreOpen && (
                <div className="absolute left-0 mt-8 w-72 rounded-md shadow-lg bg-white/90 backdrop-blur-lg ring-1 ring-black/10 z-50 overflow-hidden">
                  <ul className="py-1 grid grid-cols-2">
                    {serviceLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-sm hover:bg-[#340cac]/10 hover:text-[#340cac] transition-colors"
                          onClick={() => {
                            setIsDesktopExploreOpen(false);
                            closeMobileMenu();
                          }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            {navLinks.slice(1).map((link) => (
              <NavLink key={link.href} {...link} onClick={closeMobileMenu} />
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Login Button */}
            <Link href="/login" onClick={closeMobileMenu}>
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#34156e] to-[#340cac] rounded-lg 
                   px-3 py-1.5 text-white sm:text-base md:text-lg lg:text-xl
                   lg:px-4 lg:py-2 lg:text-[15px] 
                   transition-colors whitespace-nowrap"
              >
                Schedule Us
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              onClick={toggleMobileMenu}
              className="lg:hidden p-1.5 sm:p-2 rounded-md hover:bg-white/20 transition-colors touch-manipulation"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-14 w-14" />
              ) : (
                <Menu className="h-14 w-14" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
        style={{ top: "3.5rem" }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <div className="relative ml-auto w-full max-w-[300px] h-full bg-white/95 backdrop-blur-lg shadow-xl border-l border-white/20">
          {/* Menu Content */}
          <div className="overflow-y-auto h-full pb-20">
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center px-4 py-3 text-base font-medium hover:bg-black/5 rounded-lg transition-colors touch-manipulation"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Explore Section */}
              <div className="space-y-1">
                <button
                  onClick={toggleExplore}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium hover:bg-black/5 rounded-lg transition-colors touch-manipulation"
                  aria-expanded={isExploreOpen}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform duration-200 ${
                      isExploreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-y-auto pr-2 custom-scrollbar transition-all duration-300 ${
                    isExploreOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-4 space-y-1 border-l-2 border-[#340cac]">
                    <ul>
                      {serviceLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="flex items-center px-4 py-3 text-base font-medium hover:bg-black/5 rounded-lg transition-colors touch-manipulation"
                            onClick={closeMobileMenu}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="h-14 sm:h-16 md:h-18" />
    </>
  );
}
