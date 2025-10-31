import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F9FAFB] overflow-hidden z-0">
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24 w-full max-w-none py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* --- Left Side: Text --- */}
          <div className="space-y-6 z-10 relative">
            <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full">
              <span className="font-semibold text-sm">
                Innovation at the Edge of Possibility
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
              Transforming Africa Through
              <span className="block mt-2 bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Technology & Innovation
              </span>
            </h1>

            <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-md">
              We build intelligent, scalable systems that turn vision into
              reality — faster, smarter, and built to last.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#services">
                <button className="bg-blue-600 text-xs md:text-sm text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg">
                  See Our Services <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="#team">
                <button className="border-2 border-blue-600 text-xs md:text-sm text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all">
                  Meet the Team
                </button>
              </Link>
            </div>
          </div>

          {/* --- Right Side: Image --- */}
          <div className="relative hidden lg:block w-full h-[480px]">
            <Image
              src="/images/africa.png"
              alt="QUANTEDGE Innovation"
              fill
              className="object-contain object-center rounded bg-[#F9FAFB]"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Decorative Overlay (optional) */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 right-10 w-12 h-12 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-20 h-1 bg-linear-to-r from-blue-500 to-teal-500 rotate-45"></div>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
