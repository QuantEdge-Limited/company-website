'use client';

import React, { useState } from 'react';
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp,
  Zap,
  Target,
  Smartphone,
  Code,
  ShoppingCart,
  Briefcase,
  FileText,
  Layers,
  Sparkles,
  BarChart3
} from 'lucide-react';

const Web: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Platforms',
      description: 'Build powerful online stores that drive sales with seamless checkout experiences and inventory management.',
      features: ['Shopping cart & checkout', 'Payment gateway integration', 'Inventory management', 'Order tracking', 'Customer accounts'],
      result: 'Average 300% increase in online revenue within 6 months',
    },
    {
      icon: Briefcase,
      title: 'Corporate Websites & Portals',
      description: 'Professional web presence that builds credibility and engages stakeholders with dynamic content.',
      features: ['Custom design', 'Content management', 'Multi-language support', 'Client portals', 'Integration with business systems'],
      result: 'Boost brand trust and generate 250% more qualified leads',
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps (PWA)',
      description: 'App-like experiences that work offline, load instantly, and engage users across all devices.',
      features: ['Offline functionality', 'Push notifications', 'Home screen installation', 'Fast performance', 'Cross-platform compatibility'],
      result: 'Increase mobile engagement by 180% and reduce bounce rates by 60%',
    },
    {
      icon: Layers,
      title: 'SaaS Applications',
      description: 'Scalable cloud-based software that serves thousands of users with subscription management and analytics.',
      features: ['Multi-tenant architecture', 'Subscription billing', 'User management', 'Analytics dashboard', 'API integrations'],
      result: 'Handle 10,000+ concurrent users with 99.9% uptime',
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
          className="absolute w-[800px] h-[800px] rounded-full opacity-5 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgb(17, 24, 39) 0%, transparent 70%)',
            bottom: '-200px',
            left: '-300px',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-50 border-2 border-cyan-100">
              <Globe className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-bold text-cyan-600 tracking-wider uppercase">
                Web Development
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Digital Experiences
              <span className="block mt-2 bg-gradient-to-r from-cyan-600 to-gray-900 bg-clip-text text-transparent">
                That Convert
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Create stunning, high-performance web experiences that captivate your audience and drive conversions. 
              Our web development services combine cutting-edge technology with exceptional design to build websites 
              and applications that scale with your business.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-600/50 hover:scale-105 flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300">
                View Portfolio
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <TrendingUp className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">300%</div>
                <div className="text-sm text-gray-600">Conversion Boost</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Zap className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">&lt;2s</div>
                <div className="text-sm text-gray-600">Load Time</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Target className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">100/100</div>
                <div className="text-sm text-gray-600">Performance</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-cyan-50 to-gray-50 rounded-3xl p-12 border-2 border-gray-100 shadow-2xl">
              <div className="space-y-6">
                {[
                  { label: 'Desktop', width: '100%', icon: Globe },
                  { label: 'Tablet', width: '85%', icon: FileText },
                  { label: 'Mobile', width: '95%', icon: Smartphone },
                ].map((device, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <device.icon className="w-5 h-5 text-cyan-600" />
                        <span className="font-bold text-gray-900">{device.label}</span>
                      </div>
                      <span className="text-sm font-bold text-cyan-600">Optimized</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-cyan-600 to-gray-900 h-3 rounded-full transition-all duration-1000" 
                        style={{ width: device.width }}
                      />
                    </div>
                  </div>
                ))}
                
                <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border-2 border-cyan-100">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 text-cyan-600 mx-auto mb-3" />
                    <div className="text-4xl font-bold text-cyan-600 mb-2">Responsive</div>
                    <div className="text-gray-700 font-medium">Works on any device</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Web Development
            </h2>
            <p className="text-xl text-gray-600">
              Built for performance, designed for results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Boost Conversions',
                description: 'Optimized user experiences that guide visitors toward action, increasing conversion rates by up to 300%.',
                metric: '300% higher conversions',
              },
              {
                icon: Smartphone,
                title: 'Mobile-First Design',
                description: 'Perfectly responsive designs that deliver flawless experiences on smartphones, tablets, and desktops.',
                metric: 'Works on all devices',
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimized code and infrastructure ensure page loads under 2 seconds for better SEO and user satisfaction.',
                metric: '<2 second load times',
              },
              {
                icon: Target,
                title: 'SEO Optimized',
                description: 'Built-in SEO best practices help your website rank higher in search results and attract more organic traffic.',
                metric: '150% more organic traffic',
              },
              {
                icon: Layers,
                title: 'Scalable Architecture',
                description: 'Infrastructure that grows with your business, handling millions of users without performance degradation.',
                metric: 'Handle millions of users',
              },
              {
                icon: Code,
                title: 'Clean, Maintainable Code',
                description: 'Well-documented, standards-compliant code that makes future updates and maintenance simple and cost-effective.',
                metric: '50% lower maintenance costs',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-cyan-600 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-600 to-gray-900 flex items-center justify-center mb-6 shadow-lg">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-100">
                  <p className="text-sm font-semibold text-cyan-600">{benefit.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Web Solutions We Build
          </h2>
          <p className="text-xl text-gray-600">
            From e-commerce to enterprise applications
          </p>
        </div>

        {/* Solution Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {solutions.map((solution, index) => (
            <button
              key={index}
              onClick={() => setActiveSolution(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeSolution === index
                  ? 'bg-cyan-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              <solution.icon className="inline-block w-5 h-5 mr-2 -mt-0.5" />
              {solution.title}
            </button>
          ))}
        </div>

        {/* Active Solution */}
        <div className="relative min-h-[500px]">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ${
                activeSolution === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border-2 border-gray-100">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-gray-900 flex items-center justify-center shadow-xl">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">{solution.description}</p>
                    
                    <div className="p-6 bg-gradient-to-br from-cyan-50 to-gray-50 rounded-2xl border-2 border-cyan-100">
                      <div className="flex items-center gap-3 mb-3">
                        <BarChart3 className="w-6 h-6 text-cyan-600" />
                        <h4 className="text-lg font-bold text-gray-900">Typical Results</h4>
                      </div>
                      <p className="text-gray-700 font-medium">{solution.result}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-gray-900">Core Features</h4>
                    <div className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-cyan-50 transition-colors">
                          <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-600/50 hover:scale-105 flex items-center justify-center gap-2 mt-6">
                      Build This Solution
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Modern Technology Stack
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Built with cutting-edge tools and frameworks
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'AWS'].map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-cyan-600 hover:shadow-lg transition-all">
                <Code className="w-10 h-10 text-cyan-600 mx-auto mb-3" />
                <div className="font-bold text-gray-900">{tech}</div>
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
                <Globe className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Ready to Build Your Web Presence?
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                Let's create a high-performance website that drives results and grows with your business.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="group px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 text-lg">
                  Start Your Web Project
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web;