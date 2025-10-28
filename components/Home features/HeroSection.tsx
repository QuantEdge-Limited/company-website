"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";

export default function HeroSection() {

  const [showArrow, setShowArrow] = useState(true);
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTeam = () => {
    const teamSection = document.getElementById("team");
    teamSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] max-sm:top-[10px] max-sm:mt-4 flex flex-col-reverse max-md:gap-8 lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-blue-50 to-white"
    >
      {/* Left Side: Text Content */}
      <div className="w-full lg:w-1/2 text-left mb-10 lg:mb-0">
        {/* Tag */}
        <div className="inline-block px-4 py-2 bg-[#34156e] text-white rounded-full text-sm font-medium mb-6">
          Where Precision Meets Innovation
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
          Engineering Digital Futures for Forward-Thinking Businesses
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
          We build intelligent, scalable systems that turn vision into reality — faster, smarter, and built to last.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={scrollToServices}
            className="w-full sm:w-auto bg-[#34156e] hover:bg-[#2a1056] text-white px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            See Our Work
          </Button>

          <Button
            onClick={scrollToTeam}
            variant="outline"
            className="w-full sm:w-auto border-[#34156e] text-[#34156e] hover:bg-[#f5f5f5] px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:shadow-md"
          >
            Meet the Team
            <FaChevronRight className="inline ml-2" />
          </Button>
        </div>
      </div>

      {/* Right Side: Hero Image with Abstract Tech Overlay */}
      <div className="w-full lg:w-1/2 flex justify-center relative">
        <div className="relative w-full max-w-lg lg:max-w-xl">
          {/* Hero Image */}
          <img
            src="/images/quantedge-website-bg1.png"
            alt="QuantEdge engineer interacting with digital interface"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />

          {/* Floating UI Elements Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Floating Node */}
            <div className="absolute top-10 right-10 w-12 h-12 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
            {/* Data Stream Line */}
            <div className="absolute bottom-10 left-10 w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rotate-45"></div>
            {/* Grid Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* Floating Scroll Indicator Arrow */}
      {showArrow && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce opacity-80 shadow-xl bg-[#34156e]/70 p-2 rounded-full">
          <FaChevronDown
            size={24}
            className="text-white dark:text-[#34156e]"
            // onClick={() => {
            //   document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            // }}
          />
        </div>
      )}
    </section>
  );
}