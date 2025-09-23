import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="w-full h-[72px] fixed top-0 z-50 flex items-center justify-between px-4 sm:px-8 lg:px-16 bg-white/20 backdrop-blur-lg shadow-sm">
        {/* logo */}
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-medium line-clamp-2 ">
            QuantEdge Limited
          </h1>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-3">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
          </div>

          <Button className="h-10 rounded-xl border border-neutral-300 bg-gradient-to-r from-[#FB840C] via-pink-700 to-[#5617F9] to-90% text-white text-sm">
            learn more
          </Button>
        </div>
      </nav>
    </>
  );
}
