"use client";

import { motion } from "framer-motion";
import { Brain, Database, Bot, Shield, Globe, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI & Machine Learning",
    description:
      "Leverage intelligent automation and predictive insights powered by AI.",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "ERP Solutions",
    description:
      "Digitize and integrate your business operations with custom ERP systems.",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Automation",
    description:
      "Enhance operational efficiency through workflow and process automation.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity",
    description:
      "Secure your digital ecosystem with advanced protection and monitoring.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Build fast, modern, and scalable web applications for your brand.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description:
      "Deliver seamless experiences with high-performance mobile apps.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 bg-clip-text">
            Our <span className="text-4xl md:text-5xl font-bold mb-4 text-cyan-600 bg-clip-text">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore the wide range of technology solutions we engineer to drive growth and digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all group"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.1 }}
                className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}