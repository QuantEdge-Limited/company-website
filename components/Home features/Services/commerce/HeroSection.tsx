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
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          E-commerce & FinTech Solutions
          <span className="block text-emerald-600">Secure. Scalable. Seamless.</span>
        </h1>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Build high-performance online stores, digital wallets, and payment platforms that drive sales, trust, and growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#what-we-build"
            className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Explore Solutions
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-3 border border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}