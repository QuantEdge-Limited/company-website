import CTASection from '@/components/Home features/Services/mobile/CTASection';
import HeroSection from '@/components/Home features/Services/mobile/HeroSection';
import OurProcess from '@/components/Home features/Services/mobile/OurProcess';
import Technologies from '@/components/Home features/Services/mobile/Technologies';
import Testimonials from '@/components/Home features/Services/mobile/Testimonials';
import WhatWeBuild from '@/components/Home features/Services/mobile/WhatWeBuild';
import WhyChooseUs from '@/components/Home features/Services/mobile/WhyChooseUs';
import Link from 'next/link';

export const metadata = {
  title: 'Mobile App Development | QuantEdge Limited',
  description: 'High-performance iOS, Android, and cross-platform mobile apps — designed for engagement, speed, and scalability.',
};

export default function MobilePage() {
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
    //         Mobile App Development
    //       </h1>
    //       <p className="text-lg text-gray-700">
    //         Build intuitive, high-performance mobile apps for Android, iOS, and cross-platform ecosystems — engineered for scalability, speed, and user engagement.
    //       </p>
    //     </header>

    //     <section className="mb-10">
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">Platforms & Technologies</h2>
    //       <ul className="list-disc pl-5 space-y-2 text-gray-700">
    //         <li>Native iOS (Swift) & Android (Kotlin)</li>
    //         <li>Cross-Platform (React Native, Flutter)</li>
    //         <li>Offline-First & Real-Time Sync Capabilities</li>
    //         <li>Push Notifications & In-App Messaging</li>
    //         <li>App Store Optimization & Release Management</li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">User-Centric Design</h2>
    //       <p className="text-gray-700">
    //         We don’t just code apps — we craft experiences. Every tap, swipe, and notification is designed to delight users and drive retention.
    //       </p>
    //     </section>
    //   </div>
    // </div>

    <main className="bg-white">
      <HeroSection />
      <WhatWeBuild />
      <Technologies />
      <OurProcess />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </main>
  );
}