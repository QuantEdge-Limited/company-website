import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <>
      <section
        id="services"
        className="serviceSectionContainer p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 bg-[#0D1B2A] flex flex-col"
      >
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="inline-block px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-blue-100 to-rose-100 backdrop-blur-lg rounded-full text-xs sm:text-sm md:text-base lg:text-lg text-center font-medium border border-white/30 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-center leading-tight">
            Our core Services
          </h1>
          <p className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-2">
            Comprehensive technology solutions for your business needs
          </p>
        </div>

        {/* Services Cards Container */}
        <div className="serviceSectionMain flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-stretch gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-8 mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4 md:px-6 lg:px-8 w-full max-w-7xl mx-auto">
          {/* ERP Systems Card */}
          <div className="serviceCard w-full lg:w-1/3 flex">
            <Card className="w-full h-[350px] sm:h-[380px] md:h-[400px] lg:h-[420px] xl:h-[450px] bg-[#112A3C] pb-0 gap-2 flex flex-col border border-white/20 hover:border-white/40 hover:scale-[1.02] lg:hover:scale-105 duration-300 transition-all shadow-lg hover:shadow-xl">
              <CardHeader className="text-white text-xs sm:text-sm md:text-base pt-3 sm:pt-4 md:pt-5 lg:pt-6 px-4 sm:px-5 md:px-6 pb-1">
                Technology
              </CardHeader>
              <CardTitle className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold px-4 sm:px-5 md:px-6 leading-tight">
                ERP Systems
              </CardTitle>
              <CardDescription className="text-white/90 text-sm sm:text-base md:text-base lg:text-lg px-4 sm:px-5 md:px-6 leading-relaxed">
                Streamline operations with custom enterprise resource planning
                solutions.
              </CardDescription>
              <div className="px-4 sm:px-5 md:px-6 flex items-center text-white/80 hover:text-white transition-colors cursor-pointer group">
                <span className="text-sm sm:text-base md:text-base lg:text-lg">
                  Learn
                </span>
                <MdKeyboardArrowRight
                  size={20}
                  className="sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 ml-1 group-hover:translate-x-1 transition-transform"
                />
              </div>
              <div className="flex-grow flex items-end p-0 overflow-hidden mt-2 sm:mt-3 md:mt-4">
                <Image
                  src="/images/services/erp.jpg"
                  alt="ERP Systems - Enterprise Resource Planning Solutions"
                  width={400}
                  height={200}
                  className="rounded-b-xl w-full object-cover h-full"
                />
              </div>
            </Card>
          </div>

          {/* Web & Mobile Development Card */}
          <div className="serviceCard w-full lg:w-1/3 flex">
            <Card className="w-full h-[350px] sm:h-[380px] md:h-[400px] lg:h-[420px] xl:h-[450px] bg-[#112A3C] pb-0 gap-2 flex flex-col border border-white/20 hover:border-white/40 hover:scale-[1.02] lg:hover:scale-105 duration-300 transition-all shadow-lg hover:shadow-xl">
              <CardHeader className="text-white text-xs sm:text-sm md:text-base pt-3 sm:pt-4 md:pt-5 lg:pt-6 px-4 sm:px-5 md:px-6 pb-1">
                Development
              </CardHeader>
              <CardTitle className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold px-4 sm:px-5 md:px-6 leading-tight">
                Web & Mobile Development
              </CardTitle>
              <CardDescription className="text-white/90 text-sm sm:text-base md:text-base lg:text-lg px-4 sm:px-5 md:px-6 leading-relaxed">
                Create powerful digital platforms tailored to your unique
                business requirements.
              </CardDescription>
              <div className="px-4 sm:px-5 md:px-6 flex items-center text-white/80 hover:text-white transition-colors cursor-pointer group">
                <span className="text-sm sm:text-base md:text-base lg:text-lg">
                  Explore
                </span>
                <MdKeyboardArrowRight
                  size={20}
                  className="sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 ml-1 group-hover:translate-x-1 transition-transform"
                />
              </div>
              <div className="flex-grow flex items-end p-0 overflow-hidden mt-2 sm:mt-3 md:mt-4">
                <Image
                  src="/images/services/web.jpg"
                  alt="Web & Mobile Development - Custom Digital Solutions"
                  width={400}
                  height={200}
                  className="rounded-b-xl w-full object-cover h-full"
                />
              </div>
            </Card>
          </div>

          {/* UI/UX Design Card */}
          <div className="serviceCard w-full lg:w-1/3 flex">
            <Card className="w-full h-[350px] sm:h-[380px] md:h-[400px] lg:h-[420px] xl:h-[450px] bg-[#112A3C] pb-0 gap-2 flex flex-col border border-white/20 hover:border-white/40 hover:scale-[1.02] lg:hover:scale-105 duration-300 transition-all shadow-lg hover:shadow-xl">
              <CardHeader className="text-white text-xs sm:text-sm md:text-base pt-3 sm:pt-4 md:pt-5 lg:pt-6 px-4 sm:px-5 md:px-6 pb-1">
                Design
              </CardHeader>
              <CardTitle className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold px-4 sm:px-5 md:px-6 leading-tight">
                UI/UX Design
              </CardTitle>
              <CardDescription className="text-white/90 text-sm sm:text-base md:text-base lg:text-lg px-4 sm:px-5 md:px-6 leading-relaxed">
                Craft intuitive and engaging digital experiences that delight
                users.
              </CardDescription>
              <div className="px-4 sm:px-5 md:px-6 flex items-center text-white/80 hover:text-white transition-colors cursor-pointer group">
                <span className="text-sm sm:text-base md:text-base lg:text-lg">
                  Discover
                </span>
                <MdKeyboardArrowRight
                  size={20}
                  className="sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 ml-1 group-hover:translate-x-1 transition-transform"
                />
              </div>
              <div className="flex-grow flex items-end p-0 overflow-hidden mt-2 sm:mt-3 md:mt-4">
                <Image
                  src="/images/services/uiux.jpg"
                  alt="UI/UX Design - User Experience & Interface Design"
                  width={400}
                  height={200}
                  className="rounded-b-xl w-full object-cover h-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
