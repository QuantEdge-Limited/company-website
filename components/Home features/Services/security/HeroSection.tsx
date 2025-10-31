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
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Cybersecurity & Data Protection
          <span className="block text-red-500">Secure by Design. Resilient by Default.</span>
        </h1>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Protect your digital assets with proactive threat detection, compliance-driven strategies, and enterprise-grade security architecture.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-center">
          <Link
            href="#what-we-offer"
            className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            Explore Security Services
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-3 border border-red-500 text-red-400 font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Request a Security Audit
          </Link>
        </div>
      </div>
    </section>
  );
}