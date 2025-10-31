import React, { useState, useEffect } from "react";
import { Briefcase, Globe, Users } from "lucide-react";
import { testimonials } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../ui/card";

// Helper function to generate star ratings
function getStars(rating: number): string {
  const fullStar = "⭐";
  return fullStar.repeat(Math.min(Math.max(rating, 0), 5)); // Ensure rating is between 0 and 5
}

export default function ImpactTestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [embla, setEmbla] = useState<any>(null);

  const benefits = [
    {
      icon: Briefcase,
      title: "Impact for Businesses",
      description:
        "Access enterprise-grade technology without enterprise-level costs. Scale efficiently and compete globally with tailored solutions that drive growth.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Globe,
      title: "Impact for Africa",
      description:
        "Drive digital transformation across the continent. Create jobs, foster innovation, and build sustainable economic growth through technology.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Users,
      title: "Impact for Stakeholders",
      description:
        "Partner with a company committed to transparency, integrity, and delivering measurable value through ethical business practices.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => {
      setCurrentSlide(embla.selectedScrollSnap());
    };
    embla.on("select", onSelect);
    return () => embla.off("select", onSelect);
  }, [embla]);

  // Autoplay plugin configuration for carousel
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <section className="py-10 bg-linear-to-b from-white via-gray-50 to-white">
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24 w-full max-w-none">
        {/* Header */}
        {/* Why QUANTEDGE Matters Section */}
        <div className="mb-10">
          <div className="text-center mb-8 space-y-3">
            <div className="inline-block px-5 py-2 bg-linear-to-r from-blue-100 to-teal-100 rounded-full">
              <span className="bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent font-semibold text-sm">
                Our Impact
              </span>
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-gray-900">
              Why QUANTEDGE Matters
            </h2>
            <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We're not just building software—we're building Africa's digital
              future.
            </p>
          </div>

          {/* Impact Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-linear-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-4 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center space-y-3 mb-8 ">
            <h2 className="text-lg md:text-2xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
              Discover why businesses trust QUANTEDGE to deliver exceptional
              results
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-screen-2xl mx-auto">
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              setApi={setEmbla}
              opts={{
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="
  pl-2 sm:pl-3 md:pl-4
  basis-full
  sm:basis-1/2
  lg:basis-1/3
  xl:basis-1/4
  2xl:basis-1/5
"
                  >
                    <Card className="h-full border border-[#0D090A]/10 hover:border-teal-600 transition-all duration-300 hover:shadow-md rounded-xl">
                      <CardContent className="flex flex-col justify-between p-4 sm:p-5 md:p-6 min-h-60 sm:min-h-[260px] md:min-h-[280px]">
                        {/* Quote Icon */}
                        <div className="mb-3">
                          <svg
                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-400 opacity-50"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                          </svg>
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-xs sm:text-sm leading-relaxed text-gray-700 mb-4 grow">
                          {testimonial.testimonial}
                        </p>

                        {/* Author Info */}
                        <div className="border-t border-gray-200 pt-3 flex items-center gap-3">
                          <div className="w-14 h-14 rounded-full bg-linear-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-sm sm:text-base text-gray-900">
                              {testimonial.name}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {testimonial.project}
                            </p>
                            <p className="text-gray-500 text-xs mt-1">
                              {testimonial.date}
                            </p>
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="mt-2 text-sm text-center">
                          {getStars(testimonial.rating)}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Dots Indicator (one per testimonial) */}
              <div className="flex md:hidden justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-blue-600 w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Mobile Navigation - Centered below carousel */}
              <div className="flex justify-center gap-4 mt-6 md:hidden">
                <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
                <CarouselNext className="relative right-0 top-0 translate-y-0" />
              </div>
            </Carousel>

            {/* Dots Indicator (page-based, not item-based) */}
            <div className="hidden md:flex justify-center gap-2 mt-8">
              {Array.from({
                length: Math.ceil(testimonials.length / 4), // 4 testimonials per slide
              }).map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => setCurrentSlide(pageIndex)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === pageIndex
                      ? "bg-blue-600 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial page ${pageIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 bg-linear-to-r from-blue-600 via-teal-600  to-blue-600 p-8 md:p-12 rounded-2xl text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h3 className="text-lg md:text-2xl font-bold mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-base mb-6 max-w-2xl mx-auto opacity-95">
              Join businesses across Africa that are transforming their
              operations with QUANTEDGE solutions.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 text-sm rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
