import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-600/80 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Whether you’re modernizing legacy systems, selecting an ERP, or building a 3-year tech strategy; we’ll help you get it right.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Book a Free Strategy Session
          </Link>
          <Link
            href="/#services"
            className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}