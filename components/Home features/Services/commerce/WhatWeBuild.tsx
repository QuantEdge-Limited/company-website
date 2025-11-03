'use client';

import { motion } from 'framer-motion';
import { MonitorSmartphone, RefreshCw } from 'lucide-react';
import { GiShoppingCart } from 'react-icons/gi';
import { HiMiniCreditCard } from 'react-icons/hi2';

const solutions = [
  {
    title: 'Custom E-commerce Platforms',
    description: 'Headless or monolithic stores built with Shopify Plus, Magento, or custom React/Next.js frontends — optimized for speed and conversion.',
    icon: <GiShoppingCart size={35}/>,
  },
  {
    title: 'Digital Wallets & Payment Systems',
    description: 'Secure, PCI-compliant wallets, payment gateways, and transaction engines with multi-currency and fraud detection.',
    icon: <HiMiniCreditCard size={35} className='text-amber-500' />,
  },
  {
    title: 'POS & Retail Systems',
    description: 'Unified online-offline experiences with cloud-connected point-of-sale systems for retail and hospitality.',
    icon: <MonitorSmartphone size={35} />,
  },
  {
    title: 'Subscription & Billing Management',
    description: 'Automated recurring billing, dunning management, and revenue analytics for SaaS and membership businesses.',
    icon: <RefreshCw size={35} className='text-green-500' />,
  },
];

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What We Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}