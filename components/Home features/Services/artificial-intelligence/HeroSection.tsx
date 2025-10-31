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
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1677442135722-5f11f06a1e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          AI & Data Solutions
          <span className="block text-indigo-600">From Insight to Action</span>
        </h1>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Unlock the power of your data with custom AI models, real-time analytics, and intelligent automation engineered for measurable business outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#what-we-offer"
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Explore AI Solutions
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Discuss Your Use Case
          </Link>
        </div>
      </div>
    </section>
  );
}