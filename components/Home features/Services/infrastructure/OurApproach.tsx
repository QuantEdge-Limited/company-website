'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Assessment & Strategy',
    description: 'Audit your current infrastructure, define goals, and design a cloud roadmap aligned with business needs.',
  },
  {
    number: '2',
    title: 'Architecture Design',
    description: 'Create secure, scalable, and cost-efficient architectures using AWS Well-Architected Framework principles.',
  },
  {
    number: '3',
    title: 'Automated Deployment',
    description: 'Implement IaC and CI/CD to deploy environments consistently across dev, staging, and production.',
  },
  {
    number: '4',
    title: 'Monitoring & Optimization',
    description: 'Continuously monitor performance, security, and costs and optimize for efficiency and resilience.',
  },
];

export default function OurApproach() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Our Infrastructure Approach
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          A disciplined, automation-first methodology to build resilient and future-proof infrastructure.
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
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
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