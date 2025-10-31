"use client";
import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Discovery & Planning',
    description: 'We start by understanding your goals, users, and technical requirements through workshops and research.',
  },
  {
    number: '2',
    title: 'Design & Prototyping',
    description: 'Wireframes, UI/UX mockups, and interactive prototypes ensure alignment before development begins.',
  },
  {
    number: '3',
    title: 'Development & Testing',
    description: 'Agile sprints with CI/CD pipelines, automated testing, and code reviews ensure quality and speed.',
  },
  {
    number: '4',
    title: 'Deployment & Support',
    description: 'We deploy to production, monitor performance, and provide ongoing maintenance and updates.',
  },
];

export default function OurProcess() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Our Development Process
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          A proven, transparent, and collaborative approach to building software that delivers value fast.
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