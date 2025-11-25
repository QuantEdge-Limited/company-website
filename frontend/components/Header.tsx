"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id: string) => {
    setMenuOpen(false); // close mobile menu
    if (window.location.pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-cyan-600">QUANTEDGE</Link>
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <button onClick={() => scrollToSection('about')} className="hover:text-cyan-600 transition-colors">About</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-cyan-600 transition-colors">Services</button>
          <Link href="/projects" className="hover:text-cyan-600 transition-colors">Projects</Link>
          <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-600 transition-colors">Contact</button>
        </nav>
        <button className="md:hidden bg-cyan-600 p-2 rounded" onClick={toggleMenu}>
          {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-cyan-600 shadow-md">
          <ul className="flex flex-col p-4 space-y-3 text-white">
            <li><button onClick={() => scrollToSection('about')} className="hover:text-gray-200 transition-colors w-full text-left">About</button></li>
            <li><button onClick={() => scrollToSection('services')} className="hover:text-gray-200 transition-colors w-full text-left">Services</button></li>
            <li><button onClick={() => scrollToSection('team')} className="hover:text-gray-200 transition-colors w-full text-left">Team</button></li>
            <li><Link href="/projects" className="hover:text-gray-200 transition-colors w-full block">Projects</Link></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-gray-200 transition-colors w-full text-left">Contact</button></li>
          </ul>
        </nav>
      )}
    </header>
  );
}