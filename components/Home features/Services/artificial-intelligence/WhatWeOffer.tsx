'use client';

import { motion } from 'framer-motion';
import { Bot, Brain, Workflow } from 'lucide-react';
import { BiBarChartSquare } from 'react-icons/bi';

const services = [
  {
    title: 'Custom AI & ML Models',
    description: 'Build predictive models for sales forecasting, churn prediction, fraud detection, and more trained on your data, deployed in your stack.',
    icon: <Brain size={30} className='text-purple-500' />,
  },
  {
    title: 'Real-Time Analytics Dashboards',
    description: 'Interactive, live dashboards that turn raw data into actionable insights with filtering, drill-downs, and alerts.',
    icon: <BiBarChartSquare size={30} className='text-blue-500' />,
  },
  {
    title: 'Intelligent Automation',
    description: 'Automate workflows with RPA, NLP chatbots, document processing, and decision engines that learn and adapt.',
    icon: <Bot size={30} className='text-green-500' />,
  },
  {
    title: 'Data Engineering Pipelines',
    description: 'Robust ETL/ELT pipelines using modern tools to collect, clean, transform, and serve data at scale.',
    icon: <Workflow size={30} className='text-yellow-500'/>,
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
              // viewport={{ once: true }}
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