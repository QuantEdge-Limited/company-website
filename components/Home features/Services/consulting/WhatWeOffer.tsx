'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Digital Transformation Strategy',
    description: 'Define a clear roadmap for modernizing legacy systems, adopting cloud, and aligning technology with business goals.',
    icon: '🗺️',
  },
  {
    title: 'ERP & CRM Implementation',
    description: 'End-to-end deployment of SAP, Oracle, Salesforce, or Odoo systems configured to your workflows, not the other way around.',
    icon: '🔄',
  },
  {
    title: 'Workflow Automation',
    description: 'Identify bottlenecks and automate manual processes with RPA, low-code tools, or custom integrations.',
    icon: '🤖',
  },
  {
    title: 'Tech Investment Prioritization',
    description: 'Cut through the noise with ROI-driven analysis to prioritize high-impact initiatives and avoid costly missteps.',
    icon: '📊',
  },
];

export default function WhatWeOffer() {
  return (
    <section id="what-we-offer" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What We Deliver
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}