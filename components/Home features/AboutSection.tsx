import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { processCards } from "@/constants";

export default function AboutSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="bg-[#0D1B2A] 
                   px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 
                   py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 
                   flex flex-col justify-center min-h-screen"
      >
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
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

          <div className="text-center mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            <h1
              className="text-white 
                          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                          font-bold leading-tight sm:leading-tight md:leading-tight"
            >
              Who we are
            </h1>
          </div>

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

        <div className="max-w-7xl mx-auto w-full px-2 sm:px-0">
          <Carousel
            className="w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem>
                <div
                  className="bg-gradient-to-r from-transparent via-white/5 to-transparent 
                            rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2rem] 
                            border border-white/10 overflow-hidden backdrop-blur-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
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

                    <div
                      className="bg-[#0a1426] 
                               p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16
                               flex flex-col justify-center
                               rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl lg:rounded-r-[2rem] lg:rounded-bl-none
                               order-1 lg:order-2"
                    >
                      <div className="mb-4 sm:mb-5 md:mb-6">
                        <span
                          className="text-[#4a9eff] 
                                     text-xs sm:text-sm md:text-base
                                     font-medium tracking-wider uppercase"
                        >
                          Digital
                        </span>
                      </div>

                      <h2
                        className="text-white 
                                 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                                 font-bold 
                                 mb-6 sm:mb-7 md:mb-8 lg:mb-10
                                 leading-tight"
                      >
                        Our mission
                      </h2>

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

                      <div className="flex">
                        <Button
                          onClick={scrollToContact}
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
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* HOW WE WORK SECTION - Redesigned Cards */}
      <section
        className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50
                   py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 
                   px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16"
      >
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
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

          <div className="text-center mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            <h1
              className="text-slate-900
                          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                          font-bold leading-tight"
            >
              How we work
            </h1>
          </div>

          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
            <p
              className="text-slate-600
                         text-base sm:text-lg md:text-xl lg:text-2xl
                         font-normal leading-relaxed
                         max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 
                         mx-auto px-4 sm:px-0"
            >
              Our strategic approach to delivering exceptional technology solutions
            </p>
          </div>
        </div>

        {/* Redesigned Process Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {processCards.map((card, index) => (
              <Card
                key={card.title}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50/50 border-slate-200/60 overflow-hidden"
              >
                {/* Image Section - No Number Badge */}
                <div className="relative h-56 md:h-64 lg:h-72 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Dark overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* Card Header with Category Badge */}
                <CardHeader>
                  <span className="inline-block w-fit px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-xs font-bold text-blue-700 uppercase tracking-wider shadow-sm">
                    {card.category}
                  </span>
                  <CardTitle className="text-2xl md:text-3xl text-slate-900 group-hover:text-blue-600 transition-colors mt-3">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                {/* Card Content */}
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-slate-600 mb-6">
                    {card.description}
                  </CardDescription>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToContact}
                    variant="ghost"
                    className="w-fit px-0 -ml-1 text-blue-600 hover:text-blue-700 hover:bg-transparent font-semibold group/btn"
                  >
                    <span className="mr-2">{card.buttonLabel}</span>
                    <FaChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:block absolute bottom-6 xl:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 xl:w-6 xl:h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-2.5 xl:w-1 xl:h-3 bg-slate-400 rounded-full mt-1.5 xl:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
}