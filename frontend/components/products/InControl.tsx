'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, TrendingUp, ShoppingBag, Sparkles, ArrowRight, CheckCircle2, BarChart3, Users, Globe } from 'lucide-react';

const Incontrol: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Calendar,
      title: 'Smart Booking Management',
      description: 'Streamline appointments with intelligent scheduling, automated reminders, and real-time availability tracking.',
      stat: '40%',
      statLabel: 'Time Saved',
    },
    {
      icon: Globe,
      title: 'Digital Storefront',
      description: 'Build your online presence with a professional website, showcase services, and connect with clients 24/7.',
      stat: '3x',
      statLabel: 'Client Reach',
    },
    {
      icon: ShoppingBag,
      title: 'Integrated Marketplace',
      description: 'Sell products directly to clients with smart recommendations based on their service history.',
      stat: '65%',
      statLabel: 'Revenue Boost',
    },
  ];

  const benefits = [
    'Real-time booking synchronization',
    'Client relationship management',
    'Automated payment processing',
    'Performance analytics dashboard',
    'Multi-location support',
    'Mobile-first design',
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, rgb(8, 145, 178) 0%, transparent 70%)',
            top: '-200px',
            right: '-200px',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)`,
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, rgb(8, 145, 178) 0%, transparent 70%)',
            bottom: '-100px',
            left: '-100px',
            transform: `translate(${-scrollY * 0.08}px, ${-scrollY * 0.12}px)`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-600 tracking-wide">
                BUILT FOR SERVICE BUSINESSES
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              Take Complete
              <span className="block mt-2 bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
                Control
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              The all-in-one platform that helps service businesses manage bookings, 
              build online presence, and grow revenue through intelligent product recommendations.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-600/30 hover:scale-105 flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Active Businesses</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
          </div>

          {/* Feature Visualization */}
          <div className="relative h-[600px] animate-slideIn">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-cyan-400/5 rounded-3xl backdrop-blur-3xl" />
            
            {features.map((feature, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeFeature === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                <div className="p-8 h-full flex flex-col justify-center items-center text-center space-y-6">
                  <div className="w-24 h-24 rounded-2xl bg-cyan-600 flex items-center justify-center shadow-2xl shadow-cyan-600/40 animate-float">
                    <feature.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-lg text-gray-600 max-w-md">{feature.description}</p>
                  <div className="pt-4">
                    <div className="text-5xl font-bold text-cyan-600">{feature.stat}</div>
                    <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider mt-2">
                      {feature.statLabel}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Progress Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeFeature === index ? 'w-12 bg-cyan-600' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Everything Your Business Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From bookings to marketplace, we've built the complete toolkit for service industry success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-cyan-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-cyan-50 flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                <div className="flex items-center gap-2 text-cyan-600 font-semibold group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Built for Growth,
              <span className="block text-cyan-600">Designed for Simplicity</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Incontrol combines powerful features with an intuitive interface, 
              so you can focus on what matters most: serving your clients.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 p-8 rounded-2xl text-white shadow-xl hover:scale-105 transition-transform">
                  <BarChart3 className="w-12 h-12 mb-4 opacity-90" />
                  <div className="text-4xl font-bold mb-2">2.5M+</div>
                  <div className="text-cyan-100">Bookings Managed</div>
                </div>
                <div className="bg-white border-2 border-gray-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform">
                  <Users className="w-12 h-12 mb-4 text-gray-900" />
                  <div className="text-4xl font-bold mb-2 text-gray-900">500K+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white border-2 border-cyan-600 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform">
                  <TrendingUp className="w-12 h-12 mb-4 text-cyan-600" />
                  <div className="text-4xl font-bold mb-2 text-gray-900">85%</div>
                  <div className="text-gray-600">Client Retention</div>
                </div>
                <div className="bg-gray-900 p-8 rounded-2xl text-white shadow-xl hover:scale-105 transition-transform">
                  <ShoppingBag className="w-12 h-12 mb-4 opacity-90" />
                  <div className="text-4xl font-bold mb-2">$50M+</div>
                  <div className="text-gray-400">Revenue Generated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgb(8, 145, 178) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to Take Control?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of service businesses already growing with Incontrol. 
                Start your free 14-day trial today—no credit card required.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="group px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-600/50 hover:scale-105 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-400 pt-4">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  14-day free trial
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Incontrol;