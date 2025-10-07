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

          {/* Carousel */}
          <Carousel
            className="w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="px-5">
              <div
                className="bg-white/70 backdrop-blur-md border border-black/10
                           rounded-3xl overflow-hidden transition-all duration-500
                           hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
                    <Image
                      src="/about-image.jpg"
                      alt="About QuantEdge - Team collaboration and innovation"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                    />
                  </div>

                  {/* Text */}
                  <div className="bg-white/80 backdrop-blur-lg p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-blue-600 text-sm font-medium uppercase tracking-wider mb-4">
                      Digital
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
                      Our mission
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      We empower businesses through cutting-edge technological
                      solutions and strategic digital innovation.
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
        <div className="max-w-7xl mx-auto w-full">
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
          <div className="flex flex-col lg:flex-row gap-8">
            {processCards.map((card) => (
              <Card
                key={card.title}
                className="bg-white/70 backdrop-blur-md border border-black/10
                           rounded-3xl overflow-hidden flex-1
                           transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="relative h-40 sm:h-48 md:h-56 lg:h-60">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <span className="text-gray-700 text-xs sm:text-sm md:text-base font-medium uppercase tracking-wide">
                    {card.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold mt-3 mb-4 leading-tight text-gray-900">
                    {card.title}
                  </h3>

                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <Button
                    className="flex items-center text-black font-medium 
                               hover:text-gray-700 transition-all duration-300
                               text-base hover:bg-gray-100 px-0 py-0 h-auto
                               group-hover:translate-x-2"
                  >
                    <span className="mr-2">{card.buttonLabel}</span>
                    <FaChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
