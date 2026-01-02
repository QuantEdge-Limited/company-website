"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "We serve industries including Finance, Healthcare, Agriculture, Retail, and Education. Our solutions adapt to diverse digital challenges globally.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project duration depends on complexity. Web apps take 4–8 weeks, while full enterprise systems take 3–6 months.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we provide full maintenance and long-term support to ensure your systems run reliably.",
  },
  {
    question: "Can you help with digital transformation strategy?",
    answer:
      "Absolutely. We offer consulting to help businesses identify digital opportunities and modernize operations.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are based in Nairobi, Kenya, and serve clients globally.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white text-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Frequently <span className="text-4xl md:text-5xl font-bold mb-4 text-cyan-600">Asked Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Quick answers to help you understand our process, services, and how we work.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl"
              >
                <span className="text-lg font-semibold text-slate-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-cyan-500" />
                ) : (
                  <Plus className="w-6 h-6 text-cyan-500" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}