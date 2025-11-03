'use client';

import { motion } from 'framer-motion';
import { FiBarChart2, FiCloud, FiFileText, FiGitBranch } from 'react-icons/fi';

const services = [
  {
    title: 'Cloud Migration & Modernization',
    description: 'Seamlessly migrate legacy systems to AWS, Azure, or GCP with zero downtime and optimized cost structures.',
    icon: <FiCloud className='text-blue-500' />,
  },
  {
    title: 'Infrastructure as Code (IaC)',
    description: 'Automate provisioning with Terraform, AWS CloudFormation, and CDK for consistent, version-controlled environments.',
    icon: <FiFileText className='text-green-500' />,
  },
  {
    title: 'DevOps & CI/CD Pipelines',
    description: 'Build, test, and deploy faster with automated pipelines using GitHub Actions, AWS CodePipeline, or GitLab CI.',
    icon: <FiGitBranch className='text-yellow-500' />,
  },
  {
    title: 'Monitoring & Observability',
    description: 'Real-time insights with CloudWatch, Prometheus, Grafana, and ELK stack for proactive issue resolution.',
    icon: <FiBarChart2 className='text-purple-500' />,
  },
];

export default function WhatWeOffer() {
  return (
    <section id="what-we-offer" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What We Offer
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