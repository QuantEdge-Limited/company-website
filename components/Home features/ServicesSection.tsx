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
        <div
          className="max-w-7xl mx-auto 
             grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
             gap-6 md:gap-5"
        >
          {servicesOffered.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="relative p-8 h-full bg-white/80 backdrop-blur-md border border-black/10
             rounded-3xl overflow-hidden flex flex-col justify-between
             transition-all duration-500 shadow-custom hover:shadow-hover group"
              >
                {/* Gradient Hover Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} 
                opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-grow justify-between space-y-6">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center 
                  bg-gradient-to-br ${service.gradient} 
                  transform group-hover:scale-110 transition-transform duration-500 shadow-md`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow space-y-3">
                    <span className="text-blue-600 text-xs sm:text-sm md:text-base font-medium uppercase tracking-wide">
                      {service.category}
                    </span>

                    <h3
                      className="text-xl sm:text-2xl font-semibold leading-snug text-gray-900"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="text-sm sm:text-base leading-relaxed text-gray-700"
                      style={{
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Button */}
                  <Button
                    className="text-blue-600 hover:text-blue-700 transition-all duration-300 
                 flex items-center px-0 py-0 h-auto group cursor-pointer"
                    variant="ghost"
                  >
                    <span>{service.buttonLabel}</span>
                    <FaChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}
