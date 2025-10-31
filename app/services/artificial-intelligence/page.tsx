import CTASection from '@/components/Home features/Services/artificial-intelligence/CTASection';
import HeroSection from '@/components/Home features/Services/artificial-intelligence/HeroSection';
import OurProcess from '@/components/Home features/Services/artificial-intelligence/OurProcess';
import Technologies from '@/components/Home features/Services/artificial-intelligence/Technologies';
import Testimonials from '@/components/Home features/Services/artificial-intelligence/Testimonials';
import WhatWeOffer from '@/components/Home features/Services/artificial-intelligence/WhatWeOffer';
import WhyChooseUs from '@/components/Home features/Services/artificial-intelligence/WhyChooseUs';
import Link from 'next/link';

export const metadata = {
  title: 'AI & Data Solutions | QuantEdge Limited',
  description: 'Transform data into intelligent action with custom AI models, predictive analytics, and automation tools built for real-world business impact.',
};

export default function ArtificialIntelligencePage() {
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
    //         AI & Data Solutions
    //       </h1>
    //       <p className="text-lg text-gray-700">
    //         Unlock the power of your data with AI-driven insights. From analytics dashboards to predictive modeling and automation tools, we help you turn data into smart business decisions.
    //       </p>
    //     </header>

    //     <section className="mb-10">
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Deliver</h2>
    //       <ul className="list-disc pl-5 space-y-2 text-gray-700">
    //         <li>Custom AI Models & Machine Learning Pipelines</li>
    //         <li>Real-time Analytics Dashboards</li>
    //         <li>Predictive Modeling for Sales, Risk, or Operations</li>
    //         <li>Automation Workflows (RPA, Chatbots, Decision Engines)</li>
    //         <li>Data Engineering & Pipeline Optimization</li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">From Data to Decisions</h2>
    //       <p className="text-gray-700">
    //         We don’t just build models — we embed intelligence into your workflows so you can act faster, smarter, and with confidence.
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