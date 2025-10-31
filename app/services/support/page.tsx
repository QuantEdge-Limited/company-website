import CTASection from '@/components/Home features/Services/support/CTASection';
import HeroSection from '@/components/Home features/Services/support/HeroSection';
import OurCoverage from '@/components/Home features/Services/support/OurCoverage';
import Testimonials from '@/components/Home features/Services/support/Testimonials';
import WhatWeProvide from '@/components/Home features/Services/support/WhatWeProvide';
import WhyChooseUs from '@/components/Home features/Services/support/WhyChooseUs';
import Link from 'next/link';

export const metadata = {
  title: 'IT Support & Managed Services | QuantEdge Limited',
  description: '24/7 proactive IT support, system monitoring, and fully managed services to maximize uptime, security, and peace of mind.',
};

export default function SupportPage() {
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
    //         IT Support & Managed Services
    //       </h1>
    //       <p className="text-lg text-gray-700">
    //         Keep your business running 24/7 with proactive system monitoring, expert troubleshooting, and fully managed IT services designed to maximize uptime and reliability.
    //       </p>
    //     </header>

    //     <section className="mb-10">
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Provide</h2>
    //       <ul className="list-disc pl-5 space-y-2 text-gray-700">
    //         <li>24/7 Proactive Monitoring & Alerting</li>
    //         <li>Help Desk & End-User Support</li>
    //         <li>Network & Server Maintenance</li>
    //         <li>Backup, Recovery & Disaster Planning</li>
    //         <li>Managed Cloud & SaaS Services</li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your IT Department, On Demand</h2>
    //       <p className="text-gray-700">
    //         Focus on your core business — we’ll handle the rest. With our managed services, you get enterprise-grade IT without the overhead.
    //       </p>
    //     </section>
    //   </div>
    // </div>

    <main className="bg-white">
      <HeroSection />
      <WhatWeProvide />
      <OurCoverage />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </main>
  );
}