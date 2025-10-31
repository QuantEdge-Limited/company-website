import CTASection from '@/components/Home features/Services/commerce/CTASection';
import HeroSection from '@/components/Home features/Services/commerce/HeroSection';
import OurProcess from '@/components/Home features/Services/commerce/OurProcess';
import Technologies from '@/components/Home features/Services/commerce/Technologies';
import Testimonials from '@/components/Home features/Services/commerce/Testimonials';
import WhatWeBuild from '@/components/Home features/Services/commerce/WhatWeBuild';
import WhyChooseUs from '@/components/Home features/Services/commerce/WhyChooseUs';
import Link from 'next/link';

export const metadata = {
  title: 'E-commerce & FinTech Solutions | QuantEdge Limited',
  description: 'Secure, scalable, and seamless e-commerce and fintech platforms — from online stores to digital wallets and payment systems.',
};

export default function CommercePage() {
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
    //         E-commerce & FinTech Solutions
    //       </h1>
    //       <p className="text-lg text-gray-700">
    //         Develop secure, seamless, and scalable e-commerce and fintech platforms. From online stores to digital wallets and POS systems, we enable frictionless transactions and financial trust.
    //       </p>
    //     </header>

    //     <section className="mb-10">
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Build</h2>
    //       <ul className="list-disc pl-5 space-y-2 text-gray-700">
    //         <li>Custom E-commerce Platforms (Shopify Plus, Magento, Headless)</li>
    //         <li>Digital Wallets & Payment Gateways Integration</li>
    //         <li>POS Systems for Retail & Hospitality</li>
    //         <li>Subscription & Billing Management</li>
    //         <li>Financial Compliance & PCI-DSS Security</li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">Secure. Scalable. Seamless.</h2>
    //       <p className="text-gray-700">
    //         Whether you’re launching a startup or scaling an enterprise, we build commerce systems that handle growth without compromising security or user experience.
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