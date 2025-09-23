import React from "react";
import { ContactForm } from "./ContactForm";

export default function CTASection() {
  return (
    <>
      {/* CTA Section - Responsive layout and spacing */}
      <section
        id="contact"
        className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-r from-white via-blue-50/50 to-blue-50"
      >
        {/* Content Container - Responsive grid layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Badge/Tag - Responsive sizing */}
              <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-100 to-rose-100 backdrop-blur-lg rounded-full text-xs sm:text-sm md:text-base text-center font-medium border border-white/30">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </div>

              {/* Main Heading - Responsive typography */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
                Ready to Transform
                <span className="block sm:inline lg:block xl:inline">
                  Your Business?
                </span>
              </h2>

              {/* Description - Responsive text sizing and line height */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Let&apos;s discuss your project and explore how our innovative
                technology solutions can drive your business forward. Our team
                of experts is ready to bring your vision to life.
              </p>

              {/* Key Benefits List - Hidden on mobile to save space */}
              <div className="hidden md:block space-y-3 lg:space-y-4 pt-4 lg:pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm lg:text-base text-gray-700">
                    Free initial consultation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm lg:text-base text-gray-700">
                    Custom solutions tailored to your needs
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm lg:text-base text-gray-700">
                    24/7 ongoing support and maintenance
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full">
              {/* Form Container with responsive styling */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
