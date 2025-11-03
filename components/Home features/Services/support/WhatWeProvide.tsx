'use client';

import { motion } from 'framer-motion';
import { MdVisibility } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { RiShieldCheckFill } from "react-icons/ri";
import { FaCloud } from 'react-icons/fa6';

const services = [
  {
    title: '24/7 Proactive Monitoring',
    description: 'Real-time monitoring of servers, networks, and applications with instant alerts and automated remediation.',
    icon: <MdVisibility size={40} className="text-indigo-500" />,
  },
  {
    title: 'Help Desk & End-User Support',
    description: 'Friendly, expert support for your team — via phone, chat, or email — with SLA-backed response times.',
    icon: <BiSupport size={40} className="text-blue-500" />,
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Automated, encrypted backups with tested recovery plans to ensure business continuity after any incident.',
    icon: <RiShieldCheckFill size={40} className="text-green-500" />,
  },
  {
    title: 'Managed Cloud & SaaS Services',
    description: 'We manage your AWS, Azure, Office 365, Google Workspace, and other cloud services for optimal performance and cost.',
    icon: <FaCloud size={40} className='text-sky-500' />,
  },
];

export default function WhatWeProvide() {
  return (
    <section id="what-we-provide" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What We Provide
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