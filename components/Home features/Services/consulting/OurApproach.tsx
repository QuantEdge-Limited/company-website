'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Discovery & Alignment',
    description: 'Workshops with leadership and teams to understand pain points, goals, and success metrics.',
  },
  {
    number: '2',
    title: 'Assessment & Roadmap',
    description: 'Audit current systems, identify gaps, and co-create a phased, prioritized transformation plan.',
  },
  {
    number: '3',
    title: 'Implementation & Change Management',
    description: 'Deploy solutions with training, documentation, and stakeholder engagement to ensure adoption.',
  },
  {
    number: '4',
    title: 'Optimization & Scale',
    description: 'Measure outcomes, refine processes, and prepare for the next phase of innovation.',
  },
];

export default function OurApproach() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Our Consulting Approach
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We don’t just advise; we partner with you to execute and deliver real change.
        </p>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ x: index % 2 === 0 ? -300 : 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex items-center gap-8 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
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