'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Risk Assessment',
    description: 'Map your digital assets, identify critical data, and evaluate threat landscape and compliance requirements.',
  },
  {
    number: '2',
    title: 'Defense-in-Depth Design',
    description: 'Implement layered security: network, host, application, data, and identity — with continuous monitoring.',
  },
  {
    number: '3',
    title: 'Automated Protection',
    description: 'Deploy SIEM, EDR, WAF, and automated patching to detect and block threats in real time.',
  },
  {
    number: '4',
    title: 'Training & Resilience',
    description: 'Conduct phishing simulations, security awareness training, and tabletop incident response drills.',
  },
];

export default function OurApproach() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Our Security Approach
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Security isn’t a product — it’s a continuous process of protection, detection, and response.
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
              <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
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