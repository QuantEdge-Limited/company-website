import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { companyProfile, workflowSteps } from "@/constants";

export default function AboutSection() {
  // Autoplay plugin configuration for carousel
  // Delays 8 seconds between transitions and stops when user interacts
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <>
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="bg-gradient-to-r from-white via-blue-50/40 to-rose-50/70
             dark:[color-scheme:light]
             px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16
             py-16 sm:py-20 md:py-24
             flex flex-col justify-center text-neutral-900"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <div
              className="inline-block px-4 py-2 sm:px-5 sm:py-2.5
                      bg-gradient-to-r from-blue-100 to-rose-100 
                      backdrop-blur-md border border-black/10
                      rounded-full text-sm sm:text-base font-medium"
            >
              <span className="bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent font-semibold">
                Innovate
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-3">
              Who we are
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Technology partners driving digital transformation
            </p>
          </div>

          {/* Company History */}
          <div className="mb-20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Our History
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              <strong>QUANTEDGE LIMITED</strong> is a forward-thinking
              technology company committed to crafting intelligent ERP systems
              and AI-powered software solutions that redefine how businesses
              operate. Driven by a bold mission to transform Africa through
              innovation, we are leading the continent toward a new era of
              digital excellence and opportunity.
              <br />
              <br />
              Founded by <strong>Samuel Ngige Mungai</strong> — a passionate
              software engineer and visionary entrepreneur — QUANTEDGE LIMITED
              stands at the intersection of creativity and technology, where
              ambition meets execution. We do not just build software; we
              challenge convention, reimagine possibilities, and design with
              purpose — turning visionary ideas into real, measurable impact.
            </p>

            <div className="flex flex-col sm:flex-row text-center justify-center gap-8 text-gray-600">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">2024</h3>
                <p className="mt-2 text-sm">
                  Founded as a boutique software firm.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">2025</h3>
                <p className="mt-2 text-sm">
                  Recognized as a leading digital innovator in enterprise and AI
                  solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <Carousel
            className="w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {companyProfile.map((item, index) => (
                <CarouselItem key={index}>
                  <div
                    key={index}
                    className="bg-white/70 backdrop-blur-md border border-black/10
                         rounded-3xl overflow-hidden transition-all duration-500"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Image */}
                      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          priority={index === 0}
                        />
                      </div>

                      {/* Text */}
                      <div className="bg-white/80 backdrop-blur-lg p-8 md:p-12 flex flex-col justify-center">
                        <span className="text-blue-600 text-sm font-medium uppercase tracking-wider mb-4">
                          {item.category}
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
                          {item.title}
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          {item.description}
                        </p>
                        <Button
                          className="text-blue-600 hover:text-blue-700 
                               transition-all duration-300 
                               p-3 w-12 h-12 rounded-full
                               border border-blue-200 hover:bg-blue-50 hover:shadow-sm"
                        >
                          <FaChevronRight className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />

      {/* HOW WE WORK SECTION */}
      <section
        className="bg-gradient-to-r from-white via-blue-50/40 to-rose-50/70
                   dark:[color-scheme:light]
                   px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16
                   py-16 sm:py-20 md:py-24 text-neutral-900"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div
              className="inline-block px-4 py-2 sm:px-5 sm:py-2.5
                         bg-gradient-to-r from-blue-100 to-rose-100 
                         backdrop-blur-md border border-black/10
                         rounded-full text-sm sm:text-base font-medium"
            >
              <span className="bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent font-semibold">
                Process
              </span>
            </div>

            <h1 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
              How we work
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Our strategic approach to delivering exceptional technology
              solutions
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left - Main Card */}
            <div className="lg:w-1/2">
              {workflowSteps[0] && (
                <Card
                  key={workflowSteps[0].title}
                  className="bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 backdrop-blur-xl 
                 border border-white/60 shadow-lg
                 rounded-3xl overflow-hidden h-full flex flex-col
                 justify-between transition-all duration-500 
                 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2 hover:scale-[1.01]
                 hover:border-blue-200/60 relative group"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-purple-500/0 
                 group-hover:from-blue-500/5 group-hover:via-indigo-500/5 group-hover:to-purple-500/5 
                 transition-all duration-500 pointer-events-none rounded-3xl"
                  />

                  <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full relative z-10">
                    <div>
                      <span
                        className="inline-block relative text-[0.7rem] sm:text-xs font-semibold uppercase tracking-wider
             bg-white/10 backdrop-blur-md border border-white/20 text-blue-600
             px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.2)] overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/20 to-purple-500/10 opacity-60" />
                        <span className="relative z-10">
                          {workflowSteps[0].step}
                        </span>
                      </span>

                      <h3
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight 
                     bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent"
                      >
                        {workflowSteps[0].title}
                      </h3>

                      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                        {workflowSteps[0].description}
                      </p>
                    </div>

                    <Button
                      className="text-blue-600 hover:text-blue-700 transition-all duration-300 
                     flex items-center gap-2 px-0 py-0 h-auto group/btn cursor-pointer bg-transparent border-0
                     font-semibold text-base"
                      variant="ghost"
                    >
                      <span>{workflowSteps[0].buttonLabel}</span>
                      <FaChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              )}
            </div>

            {/* Right - Grid of 4 Smaller Cards */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {workflowSteps.slice(1).map((card, index) => (
                <Card
                  key={card.title}
                  className="bg-gradient-to-br from-white/90 via-white/70 to-blue-50/30 backdrop-blur-xl 
                 border border-white/60 shadow-md
                 rounded-3xl overflow-hidden transition-all duration-500 
                 hover:shadow-xl hover:shadow-blue-200/40 hover:-translate-y-2 hover:scale-[1.02]
                 hover:border-blue-200/60 relative group"
                >
                  {/* Decorative corner accent */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-transparent 
                 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="p-6 md:p-8 flex flex-col justify-between h-full relative z-10">
                    <div>
                      <span
                        className="inline-block relative text-[0.7rem] sm:text-xs font-semibold uppercase tracking-wider
             bg-white/10 backdrop-blur-md border border-white/20 text-blue-600
             px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.2)] overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/20 to-purple-500/10 opacity-60" />
                        <span className="relative z-10">{card.step}</span>
                      </span>

                      <h3
                        className="text-xl sm:text-2xl font-bold mt-3 mb-3 leading-tight 
                     bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent"
                      >
                        {card.title}
                      </h3>

                      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        {card.description}
                      </p>
                    </div>

                    <Button
                      className="text-blue-600 hover:text-blue-700 transition-all duration-300 
                     flex items-center gap-2 px-0 py-0 h-auto group/btn cursor-pointer bg-transparent border-0
                     font-semibold text-sm"
                      variant="ghost"
                    >
                      <span>{card.buttonLabel}</span>
                      <FaChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />
    </>
  );
}
