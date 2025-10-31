import React from "react";
import {
  Lightbulb,
  Target,
  TrendingDown,
  Layers,
  DollarSign,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function VisionProblemSection() {
  const challenges = [
    {
      icon: Zap,
      number: "01",
      title: "Limited Access to Technology",
      description:
        "Many African businesses lack access to cutting-edge technology solutions that can drive growth.",
    },
    {
      icon: TrendingDown,
      number: "02",
      title: "Scalability Issues",
      description:
        "Existing systems often can't scale efficiently with rapid business growth and changing demands.",
    },
    {
      icon: Layers,
      number: "03",
      title: "Integration Challenges",
      description:
        "Different systems often don't work together seamlessly, creating operational bottlenecks.",
    },
    {
      icon: DollarSign,
      number: "04",
      title: "Cost of Innovation",
      description:
        "Advanced technology solutions are often too expensive for local businesses to adopt.",
    },
  ];

  return (
    <section
      id="about"
      className="py-10 bg-linear-to-b from-white via-gray-50 to-white"
    >
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24 w-full max-w-none">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-block px-5 py-2 bg-linear-to-r from-blue-100 to-teal-100 rounded-full mb-6">
            <span className="bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent font-semibold text-sm">
              Who We Are
            </span>
          </div>
          <h2 className="text-lg md:text-2xl font-bold mb-4 text-gray-900">
            Our Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </div>

        {/* Main Content Grid - Vision/Mission beside Challenges */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Side: Vision & Mission Cards (Stacked) */}
          <div className="space-y-4">
            <div className="group bg-linear-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold md:mb-4 text-gray-900">
                Our Vision
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                To lead Africa into a new era of digital excellence, where
                innovation drives opportunity, empowerment, and sustainable
                growth across the continent.
              </p>
            </div>

            <div className="group bg-linear-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-linear-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-4 text-gray-900">
                Our Mission
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                To craft intelligent, scalable software solutions that challenge
                convention, reimagine possibilities, and transform visionary
                ideas into measurable impact for African businesses.
              </p>
            </div>
          </div>

          {/* Right Side: Challenges */}
          <div className="relative">
            {/* Section Divider + Title */}
            <div className="relative flex justify-center items-center mb-8">
              {/* Divider line */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>

              {/* Badge on top of divider */}
              <span className="relative z-10 px-6 py-2 bg-white text-sm font-semibold text-gray-600 rounded-full border border-gray-300 shadow-sm">
                The Challenge We Solve
              </span>
            </div>

            {/* Section Content */}
            <div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                African businesses face unique obstacles in their digital
                transformation journey. We identify these challenges and deliver
                innovative solutions that work.
              </p>

              {/* Challenge Cards */}
              <div className="grid lg:grid-cols-2 gap-2.5">
                {challenges.map((challenge, index) => {
                  const Icon = challenge.icon;
                  return (
                    <div
                      key={index}
                      className="group col-span-1 bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="shrink-0">
                          <div className="relative">
                            <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <span className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                              {challenge.number}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm md:text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                            {challenge.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {challenge.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Solution Banner */}
        <div className="mt-14 bg-linear-to-r from-blue-600 via-teal-600 to-blue-600 p-8 md:p-12 rounded-2xl text-white text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h3 className="text-lg md:text-2xl font-bold mb-4">Our Solution</h3>
            <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto opacity-95">
              We deliver affordable, intelligent, and scalable ERP systems and
              AI-powered tools designed specifically for African businesses,
              enabling them to compete globally while remaining rooted in local
              context.
            </p>
            <Link href="#services">
              <button className="mt-6 bg-white text-xs md:text-sm text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Learn More About Our Solutions
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
