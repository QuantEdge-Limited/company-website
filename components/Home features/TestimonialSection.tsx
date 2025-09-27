

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/constants";
import Image from "next/image";

// Helper function to generate star ratings
function getStars(rating: number): string {
  const fullStar = "⭐";
  return fullStar.repeat(Math.min(Math.max(rating, 0), 5)); // Ensure rating is between 0 and 5
}

export default function TestimonialSection() {
  // Autoplay plugin configuration for carousel
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );

  return (
    <>
      {/* Testimonials Section - Dark theme with responsive padding */}
      <section className="bg-[#0D1B2A] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 lg:py-28 text-white text-center w-full">
        {/* Section Header - Responsive typography */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[52px] font-bold leading-tight">
            Client Stories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Discover why businesses trust QuantEdge Limited to deliver
            exceptional results
          </p>
        </div>

        {/* Testimonials Carousel Container - Responsive width */}
        <div className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
          <Carousel
            className="w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={`${testimonial.name}-${index}`}>
                  <div className="p-2 sm:p-4">
                    {/* Testimonial Card - Responsive styling */}
                    <Card className="border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                      <CardContent className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12">
                        {/* Star Rating - Responsive text size */}
                        <div className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
                          {getStars(testimonial.rating)}
                        </div>

                        {/* Testimonial Quote - Responsive typography */}
                        <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed italic mb-6 sm:mb-8 md:mb-10 text-center max-w-3xl text-white/90">
                          &ldquo;{testimonial.testimonial}&rdquo;
                        </blockquote>

                        {/* Author Information Section */}
                        <div className="w-full max-w-2xl">
                          {/* Mobile Layout (< md screens) */}
                          <div className="md:hidden flex flex-col items-center space-y-4">
                            {/* Author Image and Basic Info */}
                            <div className="flex items-center space-x-4">
                              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                  src="/images/image_3.svg"
                                  alt={`${testimonial.name} profile picture`}
                                  className="object-cover w-full h-full"
                                  priority
                                  width={56}
                                  height={56}
                                />
                              </div>
                              <div className="text-left">
                                <p className="font-semibold text-base sm:text-lg text-white">
                                  {testimonial.name}
                                </p>
                                <p className="text-sm sm:text-base text-white/70">
                                  {testimonial.project}
                                </p>
                              </div>
                            </div>

                            {/* Date on mobile */}
                            <p className="text-xs sm:text-sm text-white/60 italic">
                              {testimonial.date}
                            </p>
                          </div>

                          {/* Desktop Layout (≥ md screens) */}
                          <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8">
                            {/* Author Image and Details */}
                            <div className="flex items-center space-x-4 lg:space-x-6">
                              <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                  src="/images/image_3.svg"
                                  alt={`${testimonial.name} profile picture`}
                                  className="object-cover w-full h-full"
                                  priority
                                  width={64}
                                  height={64}
                                />
                              </div>
                              <div className="text-left">
                                <p className="font-semibold text-lg lg:text-xl text-white">
                                  {testimonial.name}
                                </p>
                                <p className="text-sm lg:text-base text-white/70">
                                  {testimonial.project}
                                </p>
                                <p className="text-xs lg:text-sm text-white/60 italic mt-1">
                                  {testimonial.date}
                                </p>
                              </div>
                            </div>

                            {/* Vertical Divider */}
                            <div className="border-l border-white/20 h-16 lg:h-20"></div>

                            {/* Project Details */}
                            <div className="text-left max-w-xs">
                              <p className="text-sm lg:text-base text-white/80 font-medium">
                                Project Type
                              </p>
                              <p className="text-sm lg:text-base text-white/90">
                                {testimonial.project}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Navigation - Responsive positioning and visibility */}
            <div className="hidden sm:block">
              <CarouselPrevious className="left-2 md:-left-12 lg:-left-16 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
              <CarouselNext className="right-2 md:-right-12 lg:-right-16 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
            </div>
          </Carousel>

          {/* Mobile Navigation Dots - Only visible on mobile */}
          <div className="sm:hidden flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/40"
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

      
      </section>
    </>
  );
}
