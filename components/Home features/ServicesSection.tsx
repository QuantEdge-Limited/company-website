import { Card } from "../ui/card";
import { servicesOffered } from "@/constants";
import { Button } from "../ui/button";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <>
      <section id="services" className="bg-[##F9FAFB] py-10">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-24 w-full max-w-none">
          {/* Header */}
          <div className="text-center mb-8 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Services We Offer
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-teal-500 mx-auto"></div>
          </div>

          {/* Cards Grid */}
          <div
            className="
             grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
             gap-6 md:gap-5 mb-8 md:mb-10"
          >
            {servicesOffered.map((service) => {
              return (
                <Card
                  key={service.title}
                  className="relative p-8 h-full bg-white/80 backdrop-blur-md border border-black/10
             rounded-3xl overflow-hidden flex flex-col justify-between
             transition-all duration-500 shadow-custom hover:shadow-hover group"
                >
                  {/* Linear Hover Background */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${service.gradient} 
                opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col grow justify-between space-y-6">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center 
                  bg-linear-to-br ${service.gradient} 
                  transform group-hover:scale-110 transition-transform duration-500 shadow-md`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Text Content */}
                    <div className="grow space-y-3">
                      <span className="text-blue-600 text-xs sm:text-sm md:text-base font-medium uppercase tracking-wide">
                        {service.category}
                      </span>

                      <h3
                        className="text-sm md:text-lg font-semibold leading-snug text-gray-900"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                        }}
                      >
                        {service.title}
                      </h3>

                      <p
                        className="text-sm md:text-base leading-relaxed text-gray-700"
                        style={{
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Button */}
                    <Link href={service.href} >
                    <Button
                      className="text-blue-600 hover:text-blue-700 transition-all duration-300 
                 flex items-center px-0 py-0 h-auto group cursor-pointer"
                      variant="ghost"
                    >
                      <span>{service.buttonLabel}</span>
                      <FaChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
