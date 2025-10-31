"use client";

import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";
import { servicesOffered } from "@/constants";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const servicesRef = React.useRef<HTMLDivElement | null>(null);

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Ensure the event target is a Node before calling contains
      if (
        servicesRef.current &&
        event.target instanceof Node &&
        !servicesRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#blogs", label: "Blogs" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#services", label: "Services", hasDropdown: true },
    { href: "#contact", label: "Contact" },
  ];

  const servicesList = servicesOffered.slice(0, 6).map((service) => ({
    label: service.title,
    href: `#services`,
  }));
  return (
    <>
      <nav className="w-full bg-[bg-[#F9FAFB]] border-b border-black/10 shadow-sm">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-24 w-full max-w-none">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="shrink-0 min-w-0">
              <Link href="/">
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
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative" ref={servicesRef}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50"
                    >
                      {link.label}
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isServicesOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {isServicesOpen && (
                      <div className="absolute left-0 mt-2 w-64 rounded-xl shadow-xl bg-white border border-gray-200 overflow-hidden z-100">
                        <div className="py-2">
                          {servicesList.map((service) => (
                            <Link
                              key={service.label}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                className="text-gray-700 px-6 py-2.5 rounded-full font-medium border border-gray-200 bg-white 
hover:bg-linear-to-r hover:from-blue-600 hover:to-teal-500 hover:text-white hover:border-transparent cursor-pointer
transition-all duration-300 ease-in-out"
              >
                Schedule a Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" style={{ top: "4rem" }}>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute right-0 w-full max-w-xs h-full bg-white shadow-2xl">
            <div className="overflow-y-auto h-full">
              <div className="p-6 space-y-1">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label} className="space-y-1">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        {link.label}
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isServicesOpen ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {isServicesOpen && (
                        <div className="ml-4 space-y-1 border-l-2 border-blue-500 pl-4">
                          {servicesList.map((service) => (
                            <a
                              key={service.label}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              {service.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )
                )}

                <div className="pt-4">
                  <button className="w-full bg-linear-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium">
                    Schedule a Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
