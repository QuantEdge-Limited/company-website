import CTASection from '@/components/Home features/Services/consulting/CTASection';
import HeroSection from '@/components/Home features/Services/consulting/HeroSection';
import OurApproach from '@/components/Home features/Services/consulting/OurApproach';
import Testimonials from '@/components/Home features/Services/consulting/Testimonials';
import WhatWeOffer from '@/components/Home features/Services/consulting/WhatWeOffer';
import WhyChooseUs from '@/components/Home features/Services/consulting/WhyChooseUs';
import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Innovation & Strategy Consulting | QuantEdge Limited',
  description: 'Digital transformation, ERP/CRM implementation, and tech strategy consulting to streamline operations and drive long-term growth.',
};

export default function ConsultingPage() {
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
    //         Enterprise Innovation & Strategy
    //       </h1>
    //       <p className="text-lg text-gray-700">
    //         We guide organizations through modernization — implementing ERP/CRM systems, workflow automation, and tech strategies that streamline operations and drive long-term success.
    //       </p>
    //     </header>

    //     <section className="mb-10">
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h2>
    //       <ul className="list-disc pl-5 space-y-2 text-gray-700">
    //         <li>Technology Roadmap & Digital Transformation Strategy</li>
    //         <li>ERP & CRM Implementation (SAP, Oracle, Salesforce, Odoo)</li>
    //         <li>Process Automation & Workflow Optimization</li>
    //         <li>Change Management & Stakeholder Alignment</li>
    //         <li>ROI Analysis & Tech Investment Prioritization</li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Partner in Growth</h2>
    //       <p className="text-gray-700">
    //         We don’t just recommend technology — we co-create strategies that align with your vision, culture, and bottom line.
    //       </p>
    //     </section>
    //   </div>
    // </div>

     <main className="bg-white">
      <HeroSection />
      <WhatWeOffer />
      <OurApproach />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </main>
  );
}