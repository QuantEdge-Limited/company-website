'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Problem Discovery',
    description: 'We identify high-impact use cases where AI can drive ROI from forecasting to automation to personalization.',
  },
  {
    number: '2',
    title: 'Data Assessment',
    description: 'Audit your data sources, quality, and pipelines to ensure your models are trained on reliable, relevant data.',
  },
  {
    number: '3',
    title: 'Model Development',
    description: 'Build, train, and validate models using agile iterations with clear metrics for success at every stage.',
  },
  {
    number: '4',
    title: 'Deployment & Monitoring',
    description: 'Deploy models as APIs or embedded services, with monitoring for drift, performance, and business impact.',
  },
];

export default function OurProcess() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Our AI Development Process
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Practical, business-driven AI not just algorithms, but solutions that work in production.
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
              <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
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