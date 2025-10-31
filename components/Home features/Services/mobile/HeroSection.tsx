'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 to-sky-50">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512941937014-4cbf3c75a9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Mobile App Development
          <span className="block text-cyan-600">Engage. Perform. Scale.</span>
        </h1>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Build intuitive, high-performance mobile apps for iOS, Android, and cross-platform engineered for user retention and business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#what-we-build"
            className="px-8 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Explore Our Approach
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-3 border border-cyan-600 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}