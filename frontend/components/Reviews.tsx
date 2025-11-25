"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "John Kamau",
    role: "CEO, TechFin Solutions",
    content:
      "QuantEdge transformed our operations with their custom ERP solution. The team understood our unique challenges and delivered a system that has streamlined our entire workflow. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Mwangi",
    role: "Director, AgriGrow Kenya",
    content:
      "The team is professional, skilled, and truly understands the African market. Their mobile app development for our farmers has been a game-changer for our supply chain efficiency.",
    rating: 5,
  },
  {
    name: "David Ochieng",
    role: "CTO, LogisticsPro",
    content:
      "Their AI implementation helped us reduce operational costs by 30% within the first quarter. The predictive analytics tools they built are world-class. Amazing work by the QuantEdge team.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Client <span className="text-cyan-600">Testimonials</span>
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our partners have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-cyan-600/10" />

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{review.content}"
              </p>

              <div>
                <h4 className="font-bold text-slate-900">{review.name}</h4>
                <p className="text-sm text-cyan-600">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}