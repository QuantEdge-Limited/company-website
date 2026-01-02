"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const services = [
    { name: "AI & Machine Learning", href: "/service/ai-ml" },
    { name: "ERP Solutions", href: "/service/erp-system" },
    { name: "Automation", href: "/service/automation" },
    { name: "Cybersecurity", href: "/service/cybersecurity" },
    { name: "Web Development", href: "/service/web-dev" },
    { name: "Mobile Development", href: "/service/mobile-dev" },
    {name: "IT Support", href:"/service/support"},
  ];
  const products=[
    {name: "InControl", href:"/products/incontrol"},
    {name: "FaithConnect", href:"/products/faithconnect"},
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo with tech animation */}
        <Link
          href="/"
          className="relative text-2xl font-bold text-cyan-600 group overflow-hidden"
        >
          <span className="relative z-10 tracking-tight">QUANTEDGE</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 font-medium text-gray-700">
          {/* Who We Are */}
          <button
            onClick={() => scrollToSection("about")}
            className="relative px-4 py-2 group overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-cyan-600">
              Who We Are
            </span>
            <div className="absolute inset-0 bg-cyan-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          {/* What We Do - Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="relative px-4 py-2 group overflow-hidden flex items-center space-x-1">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-cyan-600">
                What We Do
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-all duration-300 ${
                  servicesOpen ? "rotate-180 text-cyan-600" : ""
                }`}
              />
              <div className="absolute inset-0 bg-cyan-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600"></div>
              {services.map((service, index) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block px-6 py-3 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-cyan-100 transition-all duration-300 group relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-cyan-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                  <span className="text-gray-700 group-hover:text-cyan-600 transition-colors duration-300 text-sm font-medium ml-2">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Product Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="relative px-4 py-2 group overflow-hidden flex items-center space-x-1">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-cyan-600">
                Products
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-all duration-300 ${
                  servicesOpen ? "rotate-180 text-cyan-600" : ""
                }`}
              />
              <div className="absolute inset-0 bg-cyan-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600"></div>
              {products.map((products, index) => (
                <Link
                  key={products.name}
                  href={products.href}
                  className="block px-6 py-3 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-cyan-100 transition-all duration-300 group relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-cyan-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                  <span className="text-gray-700 group-hover:text-cyan-600 transition-colors duration-300 text-sm font-medium ml-2">
                    {products.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <button
            onClick={() => scrollToSection("contact")}
            className="relative px-4 py-2 ml-2 overflow-hidden group bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative bg-gradient-to-r from-cyan-500 to-cyan-600 p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
          onClick={toggleMenu}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          {menuOpen ? (
            <X className="w-6 h-6 text-white relative z-10 transition-transform duration-300 rotate-90" />
          ) : (
            <Menu className="w-6 h-6 text-white relative z-10 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-300 via-white to-cyan-300 opacity-50"></div>
          <ul className="flex flex-col p-4 space-y-1 text-white">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:bg-white/20 transition-all duration-300 w-full text-left px-4 py-3 rounded-lg backdrop-blur-sm"
              >
                Who We Are
              </button>
            </li>
            
            {/* Mobile Services Dropdown */}
            <li>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="hover:bg-white/20 transition-all duration-300 w-full text-left px-4 py-3 rounded-lg backdrop-blur-sm flex items-center justify-between"
              >
                <span>What We Do</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="ml-4 mt-2 space-y-1">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="block hover:bg-white/20 transition-all duration-300 px-4 py-2 rounded-lg backdrop-blur-sm text-sm"
                        onClick={() => setMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="/products"
                className="hover:bg-white/20 transition-all duration-300 w-full block px-4 py-3 rounded-lg backdrop-blur-sm"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white/20 hover:bg-white/30 transition-all duration-300 w-full text-left px-4 py-3 rounded-lg backdrop-blur-sm mt-2 font-semibold"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}