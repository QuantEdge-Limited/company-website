import React from "react";
import { Button } from "../ui/button";
import { FaChevronRight } from "react-icons/fa6";

export default function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section - Full screen height with responsive padding */}
      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col justify-center items-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 bg-gradient-to-br from-[#0D1B2A] via-[#1B9AAA] to-[#00F5D4]"
      >
        {/* Grid Pattern Background Overlay - Responsive grid size */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px", // Smaller grid on mobile
          }}
        />

        {/* Large screen grid pattern */}
        <div
          className="absolute inset-0 opacity-20 hidden md:block"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px", // Larger grid on desktop
          }}
        />

        {/* Content Container - Responsive width and centering */}
        <div className="relative text-white text-center max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          {/* Badge/Tag - Responsive padding and text size */}
          <div className="inline-block px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm md:text-base text-center font-medium border border-white/30 mb-4 sm:mb-6 md:mb-8">
            <span>Innovative Technology Solutions</span>
          </div>

          {/* Main Headline - Responsive typography with proper scaling */}
          <h1 className="mb-4 sm:mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight tracking-wide">
            Transforming technology solutions for
            <span className="block sm:inline"> modern businesses</span>
          </h1>

          {/* Subtitle - Responsive text size and width constraints */}
          <p className="mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto opacity-90">
            QuantEdge delivers innovative digital solutions that help businesses
            thrive in a rapidly evolving technological landscape.
          </p>

          {/* Call-to-Action Buttons - Responsive layout and sizing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {/* Primary CTA Button */}
            <Button 
              onClick={scrollToServices}
              className="w-full sm:w-auto bg-black hover:bg-gray-900 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-2xl sm:rounded-3xl text-sm sm:text-base md:text-lg font-medium transition-colors duration-300 shadow-lg"
            >
              Explore Services
            </Button>

            {/* Secondary CTA Button */}
            <Button
              onClick={scrollToAbout}
              variant="ghost"
              className="w-full sm:w-auto text-white hover:text-[#00F5D4] hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg transition-colors duration-300 rounded-xl sm:rounded-2xl"
            >
              Learn More
              <FaChevronRight className="inline ml-2 text-sm sm:text-base" />
            </Button>
          </div>

          
        </div>

        {/* Scroll Indicator - Only visible on larger screens */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
}
