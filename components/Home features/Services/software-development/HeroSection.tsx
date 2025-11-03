'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  // Add smooth scroll animation on load
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Background Image / Lighting Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        // style={{
        //   backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`,
        // }}
        style={{
          backgroundImage: `url('/images/software-dev-hero-img.jpg')`,
        }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Custom Software Development
          <span className="block text-blue-600">Built for Your Business</span>
        </h1>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          We design and build tailored software solutions from web apps and mobile platforms to enterprise systems that are scalable, secure, and aligned with your business goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#what-we-offer"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Our Services
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}