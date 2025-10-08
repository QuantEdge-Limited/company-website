import React from "react";
import { ContactForm } from "./ContactForm";

export default function CTASection() {
  return (
    <>
      {/* CTA Section - Responsive layout and spacing */}
      <section
        id="contact"
        className="bg-gradient-to-r from-white via-blue-50/40 to-rose-50/70
             px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
             py-16 sm:py-20 md:py-24"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div
              className="inline-block px-4 py-2 sm:px-5 sm:py-2.5
                         bg-gradient-to-r from-blue-100 to-rose-100 
                         backdrop-blur-md border border-black/10
                         rounded-full text-sm sm:text-base font-medium"
            >
              <span className="bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent font-semibold">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Ready to Transform
              <span className="block text-rose-600">Your Business?</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl">
              Let’s discuss your project and explore how our innovative
              solutions can drive your business forward.
            </p>
            <div className="hidden md:block space-y-3">
              <p className="text-gray-700 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>{" "}
                Free initial consultation
              </p>
              <p className="text-gray-700 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>{" "}
                Custom solutions tailored to your needs
              </p>
              <p className="text-gray-700 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>{" "}
                24/7 support and maintenance
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
