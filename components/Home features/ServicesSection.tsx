import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { servicesOffered } from "@/constants";
import { Button } from "../ui/button";
import { FaChevronRight } from "react-icons/fa6";

export default function ServicesSection() {
  return (
    <>
      <section
        id="services"
        className="bg-gradient-to-r from-white via-blue-50/40 to-rose-50/70
                 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16
                 py-16 sm:py-20 md:py-24 text-neutral-900"
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div
            className="inline-block px-4 py-2 sm:px-5 sm:py-2.5
                      bg-gradient-to-r from-blue-100 to-rose-100 
                      backdrop-blur-md border border-black/10
                      rounded-full text-sm sm:text-base font-medium"
          >
            <span className="bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent font-semibold">
              Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-3">
            Our Core Services
          </h1>

          <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive technology solutions for your business needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
          {servicesOffered.map((service) => (
            <Card
              key={service.title}
              className="bg-white/70 backdrop-blur-md border border-black/10
                       rounded-3xl overflow-hidden flex flex-col
                       transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-60 lg:h-64">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col items-start justify-start flex-grow">
                <div>
                  <span className="text-blue-600 text-xs sm:text-sm font-medium uppercase tracking-wide">
                    {service.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold mt-3 mb-4 leading-tight text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <Button
                  className="text-blue-600 hover:text-blue-700 transition-all duration-300 
                           flex items-center px-0 py-0 h-auto group"
                  variant="ghost"
                >
                  <span className="mr-2">{service.buttonLabel}</span>
                  <FaChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
