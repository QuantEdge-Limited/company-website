import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Turn Data into Intelligence?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Whether you’re exploring AI for the first time or scaling an existing initiative, we’ll help you build solutions that deliver real business value.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule a Free AI Consultation
          </Link>
          <Link
            href="/#services"
            className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}