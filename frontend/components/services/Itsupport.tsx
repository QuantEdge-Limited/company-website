'use client';

import React, { useState } from 'react';
import { 
  Headphones, 
  ArrowRight, 
  CheckCircle2, 
  Cloud,
  Shield,
  Monitor,
  Globe,
  Users,
  Zap,
  Target,
  TrendingUp,
  Clock,
  Star,
  Plus,
  Sparkles,
  Award,
  BarChart3,
  Lock,
  Wrench
} from 'lucide-react';

const ITSupport: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState(1); // Pro package default
  const [showComparison, setShowComparison] = useState(false);

  const packages = [
    {
      name: 'Lite',
      tagline: 'Essential IT + Web Presence',
      target: 'Very small businesses needing basic IT support and an online presence',
      price: '$300-500',
      priceDetail: 'per month',
      color: 'from-cyan-500 to-cyan-600',
      popular: false,
      features: [
        { icon: Cloud, title: 'Cloud Setup & Management', description: 'Email, storage, and basic cloud infrastructure' },
        { icon: Wrench, title: 'Basic Software Support', description: 'Installations, updates, and troubleshooting' },
        { icon: Monitor, title: 'Basic Hardware Support', description: 'PCs, printers, and peripherals' },
        { icon: Clock, title: 'Monthly IT Check-In', description: 'Light advisory and consulting' },
        { icon: Globe, title: 'Website Setup & Hosting', description: 'Basic business website with domain and hosting' },
      ],
      addons: [
        'Extra website pages or redesigns',
        'Additional cloud storage',
        'Emergency IT support',
      ],
      valueProps: [
        'Affordable IT on-demand',
        'Ready-to-go online presence',
        'No upfront investment',
        'Flexible monthly commitment',
      ],
    },
    {
      name: 'Pro',
      tagline: 'Advanced IT + Managed Web Services',
      target: 'Growing small businesses needing proactive IT management and web support',
      price: '$700-1,200',
      priceDetail: 'per month',
      color: 'from-cyan-600 to-gray-900',
      popular: true,
      features: [
        { icon: Shield, title: 'Everything in Lite +', description: 'All basic IT and web services included' },
        { icon: Lock, title: 'Cybersecurity Essentials', description: 'Antivirus, firewalls, and monitoring' },
        { icon: Cloud, title: 'Cloud Management & Optimization', description: 'User access, permissions, shared drives' },
        { icon: Wrench, title: 'Advanced Software Management', description: 'Licenses, updates, and patches' },
        { icon: Target, title: 'IT Project Support', description: 'Small migrations and upgrades' },
        { icon: Clock, title: 'Bi-weekly IT Consulting', description: 'Regular check-ins and planning' },
        { icon: Globe, title: 'Website Updates & SEO', description: 'Content management and optimization' },
      ],
      addons: [
        'E-commerce setup & management',
        'Advanced cybersecurity monitoring',
        'Staff IT training sessions',
      ],
      valueProps: [
        'Comprehensive IT department',
        'Proactive security protection',
        'Optimized systems',
        'Professional online presence',
      ],
    },
    {
      name: 'Premium',
      tagline: 'Full IT Department + Dedicated Resource',
      target: 'Small businesses that rely heavily on tech and want full IT support',
      price: '$2,500-5,000',
      priceDetail: 'per month',
      color: 'from-gray-700 to-gray-900',
      popular: false,
      features: [
        { icon: Award, title: 'Everything in Pro +', description: 'All advanced IT and web services' },
        { icon: Shield, title: 'Full Cybersecurity Suite', description: 'Monitoring, threat response, backup & recovery' },
        { icon: Monitor, title: 'Advanced Hardware Support', description: 'Servers, devices, peripheral management' },
        { icon: BarChart3, title: 'Full IT Strategy & Planning', description: 'Quarterly roadmaps and tech upgrades' },
        { icon: Users, title: 'Dedicated IT Personnel', description: 'Embedded IT professional (full or part-time)' },
        { icon: Globe, title: 'Advanced Website Management', description: 'E-commerce, analytics, priority updates' },
        { icon: Zap, title: 'Priority Support', description: 'Rapid response for all issues' },
      ],
      addons: [
        'Custom software development',
        'Dedicated cybersecurity consulting',
        'IT budgeting & strategic planning',
      ],
      valueProps: [
        'True in-house IT department',
        'Fully proactive support',
        'Enterprise-grade security',
        'Strategic technology partner',
      ],
    },
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full opacity-5 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgb(8, 145, 178) 0%, transparent 70%)',
            top: '-300px',
            right: '-200px',
          }}
        />
        <div 
          className="absolute w-[900px] h-[900px] rounded-full opacity-5 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgb(17, 24, 39) 0%, transparent 70%)',
            bottom: '-200px',
            left: '-200px',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-50 border-2 border-cyan-100">
            <Headphones className="w-5 h-5 text-cyan-600" />
            <span className="text-sm font-bold text-cyan-600 tracking-wider uppercase">
              IT as a Service
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
            Your Complete IT Department,
            <span className="block mt-2 bg-gradient-to-r from-cyan-600 to-gray-900 bg-clip-text text-transparent">
              Without the Cost
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            QuantEdge Limited delivers enterprise-grade IT support, cybersecurity, and web management 
            tailored to your business size and needs. Choose your perfect package and scale as you grow.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-cyan-600" />
              <span className="text-gray-700 font-semibold">No Setup Fees</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-cyan-600" />
              <span className="text-gray-700 font-semibold">Flexible Contracts</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-cyan-600" />
              <span className="text-gray-700 font-semibold">Scale Anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              onClick={() => setSelectedPackage(index)}
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 cursor-pointer ${
                pkg.popular
                  ? 'border-cyan-600 shadow-2xl scale-105 lg:scale-110'
                  : selectedPackage === index
                  ? 'border-cyan-600 shadow-xl'
                  : 'border-gray-200 hover:border-cyan-300 hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-gray-900 text-white font-bold rounded-full text-sm shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} items-center justify-center mb-4 shadow-lg`}>
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-cyan-600 font-semibold mb-4">{pkg.tagline}</p>
                <div className="text-5xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                <div className="text-gray-600">{pkg.priceDetail}</div>
              </div>

              {/* Target Audience */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-700 text-center italic">{pkg.target}</p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-cyan-50 transition-colors">
                    <feature.icon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{feature.title}</div>
                      <div className="text-xs text-gray-600">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                pkg.popular
                  ? 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg hover:shadow-cyan-600/50 hover:scale-105'
                  : 'bg-gray-900 hover:bg-gray-800 text-white hover:scale-105'
              }`}>
                Choose {pkg.name}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Package View */}
      <section className="relative px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {packages[selectedPackage].name} Package Details
            </h2>
            <p className="text-xl text-gray-600">
              Everything included in your {packages[selectedPackage].name.toLowerCase()} plan
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Value Propositions */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Sparkles className="w-7 h-7 text-cyan-600" />
                Why Choose {packages[selectedPackage].name}?
              </h3>
              <div className="space-y-4">
                {packages[selectedPackage].valueProps.map((prop, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-cyan-50 rounded-xl border border-cyan-100">
                    <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium">{prop}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Add-ons */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Plus className="w-7 h-7 text-cyan-600" />
                Optional Add-Ons
              </h3>
              <p className="text-gray-600 mb-6">
                Enhance your {packages[selectedPackage].name} package with these additional services:
              </p>
              <div className="space-y-3">
                {packages[selectedPackage].addons.map((addon, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-cyan-50 transition-colors cursor-pointer border border-gray-200 hover:border-cyan-300">
                    <Plus className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{addon}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-white border-2 border-cyan-600 text-cyan-600 font-semibold rounded-xl hover:bg-cyan-50 transition-all">
                Customize Your Package
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Toggle */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-600/50 hover:scale-105 flex items-center gap-2 mx-auto"
          >
            {showComparison ? 'Hide' : 'Show'} Full Comparison
            <ArrowRight className={`w-5 h-5 transition-transform ${showComparison ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Comparison Table */}
        {showComparison && (
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-100 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-gray-900 font-bold">Feature</th>
                  {packages.map((pkg, idx) => (
                    <th key={idx} className="text-center py-4 px-6">
                      <div className="text-lg font-bold text-gray-900">{pkg.name}</div>
                      <div className="text-sm text-cyan-600">{pkg.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  'Cloud Setup & Management',
                  'Basic Software Support',
                  'Basic Hardware Support',
                  'Monthly IT Check-In',
                  'Website Setup & Hosting',
                  'Cybersecurity Essentials',
                  'Advanced Software Management',
                  'Bi-weekly IT Consulting',
                  'Website Updates & SEO',
                  'Full Cybersecurity Suite',
                  'Advanced Hardware Support',
                  'Full IT Strategy',
                  'Dedicated IT Personnel',
                  'Priority Support',
                ].map((feature, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 text-gray-700 font-medium">{feature}</td>
                    <td className="text-center py-4 px-6">
                      {idx < 5 ? <CheckCircle2 className="w-6 h-6 text-cyan-600 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="text-center py-4 px-6">
                      {idx < 9 ? <CheckCircle2 className="w-6 h-6 text-cyan-600 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="text-center py-4 px-6">
                      <CheckCircle2 className="w-6 h-6 text-cyan-600 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Why IT as a Service */}
      <section className="relative px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose IT as a Service?
            </h2>
            <p className="text-xl text-gray-600">
              The smart alternative to hiring full-time IT staff
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Cost Predictable',
                description: 'Fixed monthly costs vs. unpredictable IT emergencies and hiring expenses',
                stat: 'Save 60%',
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Access to entire team of specialists instead of one generalist',
                stat: 'Multiple experts',
              },
              {
                icon: Zap,
                title: 'Always Current',
                description: 'Stay updated with latest technology without research and training costs',
                stat: '24/7 coverage',
              },
              {
                icon: Target,
                title: 'Focus on Business',
                description: 'Let experts handle IT while you focus on growing your business',
                stat: '100% uptime',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-cyan-600 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-600 to-gray-900 flex items-center justify-center mb-6 shadow-lg">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-100">
                  <p className="text-sm font-semibold text-cyan-600">{benefit.stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 rounded-3xl p-12 md:p-20 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />

            <div className="relative text-center space-y-8">
              <div className="inline-flex w-20 h-20 bg-cyan-600 rounded-2xl items-center justify-center shadow-2xl mb-4">
                <Headphones className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Ready to Simplify Your IT?
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                Get started with IT as a Service today. No setup fees, flexible contracts, and expert support from day one.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="group px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 text-lg">
                  Schedule Free Consultation
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg">
                  Compare Packages
                </button>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300 pt-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">Scale as You Grow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="relative px-6 py-20 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'Can I upgrade or downgrade my package?',
              a: 'Yes! You can change packages at any time to match your growing business needs.',
            },
            {
              q: 'What happens if I need emergency support?',
              a: 'Emergency support is available as an add-on for Lite and Pro packages, and included with Premium.',
            },
            {
              q: 'Do you support remote and on-site visits?',
              a: 'Yes, we provide both remote support and on-site visits when necessary.',
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-cyan-600 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ITSupport;