"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { FaBuilding, FaRocket, FaChevronRight } from "react-icons/fa6";
import { companyProfile } from "@/constants";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";

export default function AboutSection() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const historyMilestones = [
    {
      year: "2024",
      title: "Our Beginning",
      description:
        "QuantEdge Limited was founded with a bold mission — to redefine how African businesses leverage technology for growth and efficiency.",
      icon: <FaBuilding className="text-blue-600 w-6 h-6" />,
    },
    {
      year: "2025",
      title: "Regional Recognition",
      description:
        "Within a year, QuantEdge was recognized among East Africa’s top innovators in AI, data-driven ERP solutions, and enterprise software design.",
      icon: <FaRocket className="text-rose-500 w-6 h-6" />,
    },
  ];

  return (
    <>
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="bg-gradient-to-r from-white via-blue-50/40 to-rose-50/70 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 flex flex-col justify-center text-neutral-900"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <div className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-100 to-rose-100 backdrop-blur-md border border-black/10 rounded-full text-sm sm:text-base font-medium">
              <span className="bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent font-semibold">
                About Us
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-3">
              Who We Are
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Empowering businesses through intelligent technology and inspired innovation.
            </p>
          </div>

          {/* WHO WE ARE — Two Column */}
          <div className="mb-20 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative h-80 sm:h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-black/10 transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/pexels-joshsorenson-1714208.jpg"
                alt="QuantEdge team collaborating on cutting-edge technology"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Text */}
            <div className="space-y-5">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Building the Future of African Innovation
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>QuantEdge Limited</strong> is a forward-focused technology firm dedicated
                to delivering cutting-edge ERP systems and AI-powered solutions tailored to the
                African enterprise landscape.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Founded by <strong>Samuel Ngige Mungai</strong> — a visionary software engineer and
                entrepreneur — we blend creativity, strategy, and technology to transform bold ideas
                into scalable digital ecosystems.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                At QuantEdge, we don’t just build software — we craft intelligent systems that drive
                measurable impact, efficiency, and sustainable growth.
              </p>
            </div>
          </div>

          {/* OUR HISTORY — Modern Card-Style Timeline */}
          <div className="mb-20 max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-900">
              Our Journey
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* Vertical gradient line */}
              <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-rose-400 transform -translate-x-1/2"></div>

              {historyMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center md:items-start ${
                    index % 2 === 0
                      ? "md:pl-12 md:text-left"
                      : "md:pr-12 md:text-right"
                  }`}
                >
                  {/* Circle icon */}
                  <div className="absolute md:left-1/2 md:-translate-x-1/2 top-0 transform -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center border-4 border-blue-200 bg-white shadow-lg">
                    {milestone.icon}
                  </div>

                  {/* Card */}
                  <div className="mt-10 bg-white/80 backdrop-blur-lg border border-black/10 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 w-full">
                    <p className="text-blue-600 font-semibold">{milestone.year}</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CAROUSEL */}
          <Carousel
            className="w-full"
            plugins={[autoplay.current]}
            onMouseEnter={() => autoplay.current.stop()}
            onMouseLeave={() => autoplay.current.reset()}
          >
            <CarouselContent>
              {companyProfile.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          priority={index === 0}
                        />
                      </div>
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
                        <Button className="text-blue-600 hover:text-blue-700 transition-all duration-300 p-3 w-12 h-12 rounded-full border border-blue-200 hover:bg-blue-50 hover:shadow-sm">
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
    </>
  );
}
