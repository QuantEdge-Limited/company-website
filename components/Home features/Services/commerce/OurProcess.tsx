'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Business & User Research',
    description: 'Understand your customers, competitors, and conversion goals to design a frictionless journey.',
  },
  {
    number: '2',
    title: 'Architecture & Security Design',
    description: 'Plan PCI-compliant, scalable systems with secure payment flows, data encryption, and fraud prevention.',
  },
  {
    number: '3',
    title: 'Development & Integration',
    description: 'Build and integrate payment gateways, inventory, CRM, and analytics using agile sprints.',
  },
  {
    number: '4',
    title: 'Launch & Optimization',
    description: 'Go live with performance monitoring, A/B testing, and continuous improvement for higher ROI.',
  },
];

export default function OurProcess() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Our Commerce Development Process
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          From cart to checkout — we engineer every step for speed, trust, and conversion.
        </p>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ x: index % 2 === 0 ? -300 : 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              // viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex items-center gap-8 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                {step.number}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}