import React from "react";
import { ContactForm } from "./ContactForm";
import { CheckCircle, Clock, Mail, MapPin, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <>
      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-20 bg-[#F9FAFB]">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-24 w-full max-w-none">
          {/* Section Header */}
          {/* <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-linear-to-r from-blue-100 to-teal-100 rounded-full mb-6">
              <span className="bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent font-semibold text-sm">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and explore how our innovative
              solutions can drive your business forward.
            </p>
          </div> */}

          {/* Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* LEFT COLUMN: Info + Details */}
            <div className="space-y-8">
              {/* Description & Benefits */}
              <div className=" p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Let&apos;s Build Something Great Together
                </h3>
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-6">
                  Have a project in mind or curious about how we can help your
                  business grow? Our team is ready to discuss your goals and
                  create a tailored digital solution that drives results.
                </p>

                <div className="space-y-3">
                  {[
                    "Free initial consultation",
                    "Custom solutions tailored to your needs",
                    "24/7 support and maintenance",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                      <span className="text-gray-700 text-sm lg:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              {/* <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h4>

                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+254 123 456 789",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hello@quantedge.com",
                    color: "from-teal-500 to-teal-600",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Nairobi, Kenya",
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    icon: Clock,
                    label: "Business Hours",
                    value: "Mon - Fri: 8AM - 6PM EAT",
                    color: "from-orange-500 to-orange-600",
                  },
                ].map(({ icon: Icon, label, value, color }, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-linear-to-br ${color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">
                        {label}
                      </p>
                      <p className="text-gray-900 font-semibold">{value}</p>
                    </div>
                  </div>
                ))}
              </div> */}

              {/* Social Proof */}
              <div className="bg-linear-to-br from-teal-50 to-white p-6 rounded-xl border border-teal-100">
                <p className="text-sm text-gray-600 mb-3">
                  Trusted by businesses across Africa
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-teal-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    50+ Happy Clients
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-linear-to-r from-blue-600 via-teal-600 to-blue-600">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="rounded p-12 md:p-16 text-center text-white relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2" />

            {/* CTA Content */}
            <div className="relative z-10">
              <h2 className="text-lg md:text-2xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base mb-8 max-w-2xl mx-auto opacity-90">
                Join forward-thinking African businesses leveraging technology
                for sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all font-semibold text-xs md:text-sm">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
