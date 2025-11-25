"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden z-0 py-20">
      {/* Floating Glow Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-cyan-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-cyan-300 rounded-full blur-2xl opacity-20"></div>

      <div className="px-4 sm:px-8 lg:px-16 xl:px-24 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-cyan-600 text-white rounded-full shadow-md">
              <span className="font-semibold text-sm">Where Innovation Meets Impact</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Transforming Africa Through
              <span className="block mt-2 text-cyan-600">Technology & Innovation</span>
            </h1>

            <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-md">
              We engineer intelligent, scalable systems designed to accelerate growth and empower the next generation of African enterprises.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="#services">
                <button className="bg-cyan-600 text-white text-xs md:text-sm px-8 py-3 rounded-lg hover:bg-cyan-700 transition-all flex items-center justify-center gap-2 shadow-md">
                  Our Services <ChevronRight className="w-5 h-5" />
                </button>
              </Link>

              <Link href="#about">
                <button className="border-2 border-cyan-600 text-cyan-600 text-xs md:text-sm px-8 py-3 rounded-lg hover:bg-cyan-50 transition-all shadow-sm">
                  Meet the CEO
                </button>
              </Link>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-[320px] sm:h-[380px] md:h-[450px]"
          >
            <Image
              src="/africa.png"
              alt="QUANTEDGE Innovation"
              fill
              className="object-contain object-center drop-shadow-2xl"
              priority
            />

            {/* Decorative Lines + Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "22px 22px",
                }}
              ></div>
              <div className="absolute top-12 right-12 w-10 h-10 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-12 left-12 w-24 h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}