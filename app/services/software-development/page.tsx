import CTASection from '@/components/Home features/Services/software-development/CTASection';
import HeroSection from '@/components/Home features/Services/software-development/HeroSection';
import OurProcess from '@/components/Home features/Services/software-development/OurProcess';
import Technologies from '@/components/Home features/Services/software-development/Technologies';
import Testimonials from '@/components/Home features/Services/software-development/Testimonials';
import WhatWeOffer from '@/components/Home features/Services/software-development/WhatWeOffer';
import WhyChooseUs from '@/components/Home features/Services/software-development/WhyChooseUs';
import Link from 'next/link';

export const metadata = {
  title: 'Custom Software Development | QuantEdge Limited',
  description: 'End-to-end custom software development for web, mobile, and enterprise systems — scalable, secure, and built around your business goals.',
};

export default function SoftwareDevelopmentPage() {
  return (
    // <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-4xl mx-auto">
    //     <Link
    //       href="/#services"
    //       className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
    //     >
    //       ← Back to All Services
    //     </Link>

    //     <header className="mb-10">
    //       <h1 className="text-4xl font-bold text-gray-900 mb-4">
    //         Custom Software Development
    //       </h1>
    //       <p className="text-lg text-gray-700">
    //         We design and build tailored software solutions — from web apps and mobile platforms to enterprise systems — that are scalable, secure, and built around your business goals.
    //       </p>
    //     </header>

    //     <section className="mb-10">
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
    //       <ul className="list-disc pl-5 space-y-2 text-gray-700">
    //         <li>Web Application Development (React, Next.js, Node.js)</li>
    //         <li>Mobile App Development (iOS & Android)</li>
    //         <li>Enterprise System Integration</li>
    //         <li>RESTful & GraphQL API Development</li>
    //         <li>Microservices Architecture</li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
    //       <p className="text-gray-700">
    //         As a full-stack engineer and AWS Cloud Practitioner, I build solutions that are not only beautiful but also secure, scalable, and cloud-optimized — ensuring long-term reliability and performance.
    //       </p>
    //     </section>
    //   </div>
    // </div>

    <main className="bg-white">
      <HeroSection />
      <WhatWeOffer />
      <Technologies />
      <OurProcess />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </main>
  );
}