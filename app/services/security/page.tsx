import CTASection from '@/components/Home features/Services/security/CTASection';
import HeroSection from '@/components/Home features/Services/security/HeroSection';
import OurApproach from '@/components/Home features/Services/security/OurApproach';
import Technologies from '@/components/Home features/Services/security/Technologies';
import Testimonials from '@/components/Home features/Services/security/Testimonials';
import WhatWeOffer from '@/components/Home features/Services/security/WhatWeOffer';
import WhyChooseUs from '@/components/Home features/Services/security/WhyChooseUs';
import Link from 'next/link';

export const metadata = {
  title: 'Cybersecurity & Data Protection | QuantEdge Limited',
  description: 'Proactive cybersecurity, threat detection, compliance, and data recovery — engineered to protect your business from evolving threats.',
};

export default function SecurityPage() {
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
    //         Cybersecurity & Data Protection
    //       </h1>
    //       <p className="text-lg text-gray-700">
    //         Safeguard your digital ecosystem with proactive security — including threat detection, vulnerability assessments, data recovery, and compliance-driven protection strategies.
    //       </p>
    //     </header>

    //     <section className="mb-10">
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Security Services</h2>
    //       <ul className="list-disc pl-5 space-y-2 text-gray-700">
    //         <li>Penetration Testing & Vulnerability Scanning</li>
    //         <li>Security Architecture & Zero Trust Design</li>
    //         <li>Incident Response & Forensic Analysis</li>
    //         <li>Compliance Audits (GDPR, ISO 27001, NIST)</li>
    //         <li>Employee Security Awareness Training</li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security is Not Optional</h2>
    //       <p className="text-gray-700">
    //         In today’s threat landscape, security must be embedded into every layer of your system — from code to cloud to culture.
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