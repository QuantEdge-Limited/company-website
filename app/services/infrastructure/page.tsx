import CTASection from '@/components/Home features/Services/infrastructure/CTASection';
import HeroSection from '@/components/Home features/Services/infrastructure/HeroSection';
import OurApproach from '@/components/Home features/Services/infrastructure/OurApproach';
import Technologies from '@/components/Home features/Services/infrastructure/Technologies';
import Testimonials from '@/components/Home features/Services/infrastructure/Testimonials';
import WhatWeOffer from '@/components/Home features/Services/infrastructure/WhatWeOffer';
import WhyChooseUs from '@/components/Home features/Services/infrastructure/WhyChooseUs';
import Link from 'next/link';

export const metadata = {
  title: 'Cloud & IT Infrastructure Services | QuantEdge Limited',
  description: 'Enterprise-grade cloud infrastructure, AWS migration, DevOps automation, and cybersecurity — built for scale, security, and reliability.',
};

export default function InfrastructurePage() {
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
    //         Cloud & IT Infrastructure Services
    //       </h1>
    //       <p className="text-lg text-gray-700">
    //         Empower your operations with robust cloud and IT infrastructure. We provide cloud migration, hosting, server management, and cybersecurity to ensure reliability, scalability, and data protection.
    //       </p>
    //     </header>

    //     <section className="mb-10">
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Solutions</h2>
    //       <ul className="list-disc pl-5 space-y-2 text-gray-700">
    //         <li>Cloud Migration & Modernization (AWS, Azure, GCP)</li>
    //         <li>Server Provisioning & Management</li>
    //         <li>Infrastructure as Code (Terraform, CloudFormation)</li>
    //         <li>Monitoring & Logging (Prometheus, Grafana, CloudWatch)</li>
    //         <li>Disaster Recovery & Backup Strategies</li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">Built for Scale & Security</h2>
    //       <p className="text-gray-700">
    //         Our infrastructure is engineered to grow with your business — secure by design, automated for efficiency, and monitored 24/7 for peak performance.
    //       </p>
    //     </section>
    //   </div>
    // </div>

    <main className="bg-white">
      <HeroSection />
      <WhatWeOffer />
      <Technologies />
      <OurApproach />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </main>
  );
}