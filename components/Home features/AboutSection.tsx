import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { processCards } from "@/constants";

export default function AboutSection() {
  // Autoplay plugin configuration for carousel
  // Delays 8 seconds between transitions and stops when user interacts
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );

  return (
    <>
      {/* 
        ABOUT SECTION - Hero area with carousel showcasing company mission
        Dark theme with gradient backgrounds and glassmorphism effects
      */}
      <section
        id="about"
        className="bg-[#0D1B2A] 
                   px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 
                   py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 
                   flex flex-col justify-center min-h-screen"
      >
        {/* Header Section - Responsive text sizing and spacing */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {/* Innovation Badge - Glassmorphism effect with gradient text */}
          <div
            className="inline-block 
                       px-2 sm:px-3 md:px-4 lg:px-5
                       py-1.5 sm:py-2 md:py-2.5 lg:py-3
                       bg-gradient-to-r from-blue-100 to-rose-100 backdrop-blur-lg 
                       rounded-full 
                       text-xs sm:text-sm md:text-base lg:text-lg
                       text-center font-medium border border-white/30 
                       mb-3 sm:mb-4 md:mb-5 lg:mb-6"
          >
            <span
              className="bg-gradient-to-r from-blue-600 to-purple-600 
                         bg-clip-text text-transparent font-semibold"
            >
              Innovate
            </span>
          </div>

          {/* Main Heading - Responsive typography scaling */}
          <div className="text-center mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            <h1
              className="text-white 
                          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                          font-bold leading-tight sm:leading-tight md:leading-tight"
            >
              Who we are
            </h1>
          </div>

          {/* Subheading - Responsive text and spacing */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
            <p
              className="text-gray-400 
                         text-base sm:text-lg md:text-xl lg:text-2xl 
                         font-light leading-relaxed
                         max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 
                         mx-auto px-4 sm:px-0"
            >
              Technology partners driving digital transformation
            </p>
          </div>
        </div>

        {/* Main Content Card - Carousel with responsive sizing */}
        <div className="max-w-7xl mx-auto w-full px-2 sm:px-0">
          <Carousel
            className="w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {/* Glassmorphism Card Container */}
              <div
                className="bg-gradient-to-r from-transparent via-white/5 to-transparent 
                            rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2rem] 
                            border border-white/10 overflow-hidden backdrop-blur-sm"
              >
                {/* Two Column Layout - Responsive grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section - Responsive height scaling */}
                  <div
                    className="relative 
                                h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[650px]
                                order-2 lg:order-1"
                  >
                    <div
                      className="absolute inset-0 
                                  rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl lg:rounded-l-[2rem] lg:rounded-tr-none
                                  overflow-hidden"
                    >
                      <Image
                        src="/about-image.jpg"
                        alt="About QuantEdge - Team collaboration and innovation"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      />
                    </div>
                  </div>

                  {/* Content Section - Responsive padding and typography */}
                  <div
                    className="bg-[#0a1426] 
                               p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16
                               flex flex-col justify-center
                               rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl lg:rounded-r-[2rem] lg:rounded-bl-none
                               order-1 lg:order-2"
                  >
                    {/* Digital Badge */}
                    <div className="mb-4 sm:mb-5 md:mb-6">
                      <span
                        className="text-[#4a9eff] 
                                     text-xs sm:text-sm md:text-base
                                     font-medium tracking-wider uppercase"
                      >
                        Digital
                      </span>
                    </div>

                    {/* Mission Heading - Responsive text scaling */}
                    <h2
                      className="text-white 
                                 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                                 font-bold 
                                 mb-6 sm:mb-7 md:mb-8 lg:mb-10
                                 leading-tight"
                    >
                      Our mission
                    </h2>

                    {/* Description Text - Responsive sizing and line height */}
                    <p
                      className="text-gray-300 
                                text-base sm:text-lg md:text-xl lg:text-2xl
                                leading-relaxed 
                                mb-6 sm:mb-7 md:mb-8 lg:mb-10
                                font-light"
                    >
                      We empower businesses through cutting-edge technological
                      solutions and strategic digital innovation.
                    </p>

                    {/* Call-to-Action Arrow Button */}
                    <div className="flex">
                      <Button
                        className="text-[#4a9eff] hover:text-[#6bb3ff] 
                                       transition-all duration-300 
                                       p-2 sm:p-3 md:p-4
                                       w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                                       hover:bg-white/10 rounded-full
                                       border border-transparent hover:border-[#4a9eff]/30"
                      >
                        <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* 
        HOW WE WORK SECTION - Process showcase with three-card layout
        Light theme with gradient backgrounds and card-based design
      */}
      <section
        className="bg-gradient-to-r from-white via-blue-50/50 to-blue-50 
                         py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 
                         px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16"
      >
        {/* Header Section - Consistent with above section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {/* Process Badge - Matching style with innovation badge */}
          <div
            className="inline-block 
                       px-2 sm:px-3 md:px-4 lg:px-5
                       py-1.5 sm:py-2 md:py-2.5 lg:py-3
                       bg-gradient-to-r from-blue-100 to-rose-100 backdrop-blur-lg 
                       rounded-full 
                       text-xs sm:text-sm md:text-base lg:text-lg
                       text-center font-medium border border-white/30 
                       mb-3 sm:mb-4 md:mb-5 lg:mb-6"
          >
            <span
              className="bg-gradient-to-r from-blue-600 to-purple-600 
                         bg-clip-text text-transparent font-semibold"
            >
              Process
            </span>
          </div>

          {/* Main Heading - Responsive dark text */}
          <div className="text-center mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            <h1
              className="text-black 
                          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                          font-bold leading-tight"
            >
              How we work
            </h1>
          </div>

          {/* Subheading - Constrained width for readability */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
            <p
              className="text-gray-700 
                         text-base sm:text-lg md:text-xl lg:text-2xl
                         font-normal leading-relaxed
                         max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 
                         mx-auto px-4 sm:px-0"
            >
              Our strategic approach to delivering exceptional technology
              solutions
            </p>
          </div>
        </div>

        {/* Process Cards Container - Responsive grid layout */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
            {processCards.map((card) => (
              <Card
                key={card.title}
                className="bg-white 
                   rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] 
                   overflow-hidden 
                   border-1 border-black/50
                   flex-1 
                   transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                   group"
              >
                {/* Card Image */}
                <div className="relative h-32 sm:h-40 md:h-48 lg:h-52 xl:h-56">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                  {/* Category Label */}
                  <div className="mb-2 sm:mb-3">
                    <span
                      className="text-gray-700 
                         text-xs sm:text-sm md:text-base
                         font-medium uppercase tracking-wide"
                    >
                      {card.category}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3
                    className="text-black 
                       text-xl sm:text-2xl md:text-3xl lg:text-4xl
                       font-bold 
                       mb-3 sm:mb-4 md:mb-5 lg:mb-6
                       leading-tight"
                  >
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    className="text-gray-700 
                       text-sm sm:text-base md:text-lg
                       leading-relaxed 
                       mb-6 sm:mb-7 md:mb-8 lg:mb-10"
                  >
                    {card.description}
                  </p>

                  {/* CTA Button */}
                  <Button
                    className="flex items-center 
                       text-black font-medium 
                       hover:text-gray-700 
                       transition-all duration-300
                       text-sm sm:text-base md:text-lg
                       hover:bg-gray-100 
                       px-0 py-0 h-auto
                       group-hover:translate-x-2"
                  >
                    <span className="mr-2">{card.buttonLabel}</span>
                    <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 
          Scroll Indicator - Hidden on mobile, visible on larger screens
          Animated bounce effect to encourage scrolling
        */}
        <div className="hidden lg:block absolute bottom-6 xl:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 xl:w-6 xl:h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-2.5 xl:w-1 xl:h-3 bg-white/60 rounded-full mt-1.5 xl:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
}
