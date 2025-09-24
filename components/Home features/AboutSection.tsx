
import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      {/* About Section */}
      <section id="about" className="bg-[#0f1b2e] min-h-screen flex flex-col justify-center py-20 px-6">
        {/* Top Navigation Dots */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            <div className="w-6 h-1 bg-[#4a9eff] rounded-full"></div>
            <div className="w-2 h-1 bg-gray-500 rounded-full opacity-40"></div>
            <div className="w-2 h-1 bg-gray-500 rounded-full opacity-40"></div>
          </div>
        </div>

        {/* Innovate Label */}
        <div className="text-center mb-4">
          <span className="text-[#4a9eff] text-sm font-medium tracking-wider uppercase">
            Innovate
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold">
            Who we are
          </h1>
        </div>

        {/* Subheading */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg font-light">
            Technology partners driving digital transformation
          </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-[2rem] border border-white/10 overflow-hidden backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-[500px] lg:h-[600px]">
                <div className="absolute inset-0 rounded-l-[2rem] overflow-hidden">
                  <Image
                    src="/about-image.jpg"
                    alt="About QuantEdge"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-[#0a1426] p-12 flex flex-col justify-center rounded-r-[2rem]">
                <div className="mb-6">
                  <span className="text-[#4a9eff] text-sm font-medium tracking-wider uppercase">
                    Digital
                  </span>
                </div>
                
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Our mission
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                  We empower businesses through cutting-edge technological solutions
                  and strategic digital innovation.
                </p>
                
                {/* Arrow Button */}
                <div className="flex">
                  <button className="text-[#4a9eff] hover:text-[#6bb3ff] transition-colors duration-200 p-2">
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Dots */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            <div className="w-6 h-1 bg-[#4a9eff] rounded-full"></div>
            <div className="w-2 h-1 bg-gray-500 rounded-full opacity-40"></div>
          </div>
        </div>

        {/* Side Navigation Lines */}
        <div className="fixed left-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="flex flex-col space-y-4">
            <div className="w-1 h-16 bg-[#4a9eff] rounded-full"></div>
            <div className="w-1 h-8 bg-gray-500 rounded-full opacity-40"></div>
            <div className="w-1 h-8 bg-gray-500 rounded-full opacity-40"></div>
          </div>
        </div>
        
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="flex flex-col space-y-4">
            <div className="w-1 h-16 bg-[#4a9eff] rounded-full"></div>
            <div className="w-1 h-8 bg-gray-500 rounded-full opacity-40"></div>
            <div className="w-1 h-8 bg-gray-500 rounded-full opacity-40"></div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-[#d6d6d6] py-20 px-6">
        {/* Process Label */}
        <div className="text-center mb-6">
          <span className="text-gray-700 text-sm font-medium tracking-wider">
            Process
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-4">
          <h1 className="text-black text-5xl md:text-6xl font-bold">
            How we work
          </h1>
        </div>

        {/* Subheading */}
        <div className="text-center mb-16">
          <p className="text-gray-700 text-lg font-normal max-w-2xl mx-auto">
            Our strategic approach to delivering exceptional technology solutions
          </p>
        </div>

        {/* Cards Container */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Card 1 - Methodology */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden border-2 border-gray-800 flex-1">
              <div className="relative h-48">
                <Image
                  src="/methodology-image.jpg"
                  alt="Methodology - Person working at desk"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="mb-3">
                  <span className="text-gray-700 text-sm font-medium">
                    Methodology
                  </span>
                </div>
                <h3 className="text-black text-3xl font-bold mb-4">
                  Discover
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-8">
                  Understanding your needs through comprehensive consultation
                </p>
                <button className="flex items-center text-black font-medium hover:text-gray-700 transition-colors duration-200">
                  <span className="mr-2">Explore</span>
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 2 - Design */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden border-2 border-gray-800 flex-1">
              <div className="relative h-48">
                <Image
                  src="/design-image.jpg"
                  alt="Design - Person working on laptop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="mb-3">
                  <span className="text-gray-700 text-sm font-medium">
                    Design
                  </span>
                </div>
                <h3 className="text-black text-3xl font-bold mb-4">
                  Crafting tailored solutions
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-8">
                  Developing innovative strategies aligned with your business goals
                </p>
                <button className="flex items-center text-black font-medium hover:text-gray-700 transition-colors duration-200">
                  <span className="mr-2">Learn</span>
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 3 - Implementation */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden border-2 border-gray-800 flex-1">
              <div className="relative h-48">
                <Image
                  src="/implementation-image.jpg"
                  alt="Implementation - Person with tablet"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="mb-3">
                  <span className="text-gray-700 text-sm font-medium">
                    Implementation
                  </span>
                </div>
                <h3 className="text-black text-3xl font-bold mb-4 leading-tight">
                  Executing and supporting your digital transformation
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-8">
                  Seamlessly implementing and providing ongoing support for your technological solutions
                </p>
                <button className="flex items-center text-black font-medium hover:text-gray-700 transition-colors duration-200">
                  <span className="mr-2">Discover</span>
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
         <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
          </div>
      </section>
    </main>
  );
};

export default HomePage;