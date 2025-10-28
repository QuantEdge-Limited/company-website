"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { FaBuilding, FaRocket } from "react-icons/fa6";
import { companyProfile } from "@/constants";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
      {/* WHO WE ARE */}
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

          {/* WHO WE ARE — Image Right */}
          <div className="mb-20 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="relative space-y-6 md:space-y-8 px-2 sm:px-0 order-2 lg:order-1">
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-rose-500 rounded-full mb-4"></div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Building the{" "}
                <span className="bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent">
                  Future of African Innovation
                </span>
              </h2>

              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
                <strong className="text-gray-900">QuantEdge Limited</strong> is a
                trailblazing technology company committed to reshaping how African
                enterprises leverage{" "}
                <span className="font-semibold text-blue-600">ERP systems</span> and{" "}
                <span className="font-semibold text-rose-500">AI-driven intelligence</span>{" "}
                to unlock sustainable growth, operational excellence, and competitive
                advantage.
              </p>

              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
                Founded by{" "}
                <strong className="text-gray-900">Samuel Ngige Mungai</strong> — a visionary
                software engineer and entrepreneur — QuantEdge thrives at the crossroads of{" "}
                <span className="italic text-blue-700">creativity</span>,{" "}
                <span className="italic text-rose-600">strategy</span>, and{" "}
                <span className="italic text-blue-700">technology</span>, transforming
                ambitious ideas into impactful digital ecosystems.
              </p>

              <div className="border-l-4 border-gradient-to-b from-blue-600 to-rose-500 pl-4 italic text-gray-800 text-lg leading-relaxed bg-white/60 backdrop-blur-sm rounded-md shadow-sm">
                “At QuantEdge, we don’t just build software — we craft{" "}
                <span className="text-blue-600 font-semibold">intelligent systems</span>{" "}
                that power innovation, efficiency, and measurable impact.”
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[500px] sm:h-[540px] md:h-[580px] rounded-2xl overflow-hidden shadow-xl border border-black/10 transition-transform duration-500 hover:scale-105 order-1 lg:order-2">
              <Image
                src="/images/pexels-joshsorenson-1714208.jpg"
                alt="QuantEdge team collaborating on cutting-edge technology"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CURVED DIVIDER */}
      <div className="w-full overflow-hidden bg-transparent">
        <svg
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24 text-blue-950"
        >
          <path
            fill="currentColor"
            d="M0,96L60,106.7C120,117,240,139,360,128C480,117,600,75,720,80C840,85,960,139,1080,138.7C1200,139,1320,85,1380,58.7L1440,32V0H0Z"
          />
        </svg>
      </div>

      {/* OUR JOURNEY — distinct but harmonious background */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-rose-950 text-white py-24 px-6 sm:px-10 lg:px-20 transition-all duration-700">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-rose-400 tracking-wide">
            Our Journey
          </h2>

          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
            From humble beginnings to regional recognition — our story is one of
            innovation, resilience, and an unwavering commitment to transforming
            Africa’s digital landscape.
          </p>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Connector Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-rose-400 to-blue-600 transform -translate-x-1/2 rounded-full"></div>

            {historyMilestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center md:items-start ${
                  index % 2 === 0
                    ? "md:pl-12 md:text-left"
                    : "md:pr-12 md:text-right"
                }`}
              >
                <div className="absolute md:left-1/2 md:-translate-x-1/2 top-0 transform -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center border-4 border-blue-950 bg-gradient-to-r from-blue-600 to-rose-500 text-white shadow-lg">
                  {milestone.icon}
                </div>

                <div className="mt-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 w-full">
                  <p className="text-rose-400 font-semibold">{milestone.year}</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="bg-gradient-to-r from-white via-blue-50/40 to-rose-50/70">
        <div className="max-w-7xl mx-auto py-20">
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
