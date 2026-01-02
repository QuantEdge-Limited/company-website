'use client';

import React, { useState } from 'react';
import { 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Users,
  Globe,
  Zap,
  ShoppingBag,
  MapPin,
  Bell,
  Camera,
  Wifi,
  Battery,
  Target,
  TrendingUp,
  Sparkles
} from 'lucide-react';

const Mobile: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      icon: Smartphone,
      title: 'Native iOS & Android Apps',
      description: 'Platform-specific apps that leverage the full power of each operating system for maximum performance.',
      features: ['Swift for iOS', 'Kotlin for Android', 'Platform-optimized UI', 'Native hardware access', 'Superior performance'],
      result: 'Best-in-class performance with native look and feel',
    },
    {
      icon: Globe,
      title: 'Cross-Platform Development',
      description: 'Build once, deploy everywhere with React Native or Flutter for iOS and Android from a single codebase.',
      features: ['React Native / Flutter', 'Shared codebase', '95% code reuse', 'Faster time to market', 'Cost-effective development'],
      result: 'Launch on both platforms in half the time and cost',
    },
    {
      icon: ShoppingBag,
      title: 'Mobile E-commerce',
      description: 'Shopping experiences optimized for mobile with seamless checkout and payment integration.',
      features: ['Product catalogs', 'Secure payments', 'Order tracking', 'Wishlist & cart', 'Push notification deals'],
      result: 'Average 200% increase in mobile sales',
    },
    {
      icon: MapPin,
      title: 'On-Demand Service Apps',
      description: 'Connect service providers with customers in real-time with booking, tracking, and payment features.',
      features: ['Real-time GPS tracking', 'In-app messaging', 'Payment processing', 'Rating & reviews', 'Push notifications'],
      result: 'Power successful on-demand businesses at scale',
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
            left: '-200px',
          }}
        />
        <div 
          className="absolute w-[900px] h-[900px] rounded-full opacity-5 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgb(17, 24, 39) 0%, transparent 70%)',
            bottom: '-200px',
            right: '-300px',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-50 border-2 border-cyan-100">
              <Smartphone className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-bold text-cyan-600 tracking-wider uppercase">
                Mobile Development
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Mobile Apps That
              <span className="block mt-2 bg-gradient-to-r from-cyan-600 to-gray-900 bg-clip-text text-transparent">
                Users Love
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Engage your customers wherever they are with native and cross-platform mobile applications. 
              We build intuitive, feature-rich mobile apps that deliver exceptional performance and create 
              lasting user engagement on iOS and Android.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-600/50 hover:scale-105 flex items-center gap-2">
                Build Your App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Users className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">88%</div>
                <div className="text-sm text-gray-600">Engagement Lift</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Globe className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">5B+</div>
                <div className="text-sm text-gray-600">Mobile Users</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Smartphone className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">2x</div>
                <div className="text-sm text-gray-600">Platform Coverage</div>
              </div>
            </div>
          </div>

          {/* Visual Element - Mobile Device */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-700">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl z-10" />
              
              {/* Screen */}
              <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-3 bg-cyan-600 text-white text-xs">
                  <span className="font-semibold">9:41</span>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4" />
                    <Battery className="w-4 h-4" />
                  </div>
                </div>
                
                {/* App Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600 to-gray-900" />
                    <div>
                      <div className="font-bold text-gray-900">Your App</div>
                      <div className="text-sm text-gray-600">Welcome back!</div>
                    </div>
                  </div>
                  
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-gray-50 rounded-xl p-4 animate-pulse">
                      <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
                      <div className="h-3 bg-gray-200 rounded w-1/2" />
                    </div>
                  ))}
                  
                  <button className="w-full py-3 bg-cyan-600 text-white font-bold rounded-xl mt-6">
                    Get Started
                  </button>
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
              Why Mobile Apps Matter
            </h2>
            <p className="text-xl text-gray-600">
              Mobile is the future of digital engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Massive Reach',
                description: 'Access 5+ billion smartphone users worldwide with native iOS and Android applications.',
                metric: '5B+ potential users',
              },
              {
                icon: TrendingUp,
                title: 'Higher Engagement',
                description: 'Mobile apps see 88% higher engagement than mobile websites, keeping users coming back.',
                metric: '88% more engagement',
              },
              {
                icon: Sparkles,
                title: 'Better User Experience',
                description: 'Smooth animations, instant load times, and intuitive gestures create delightful experiences.',
                metric: '5-star app store ratings',
              },
              {
                icon: Bell,
                title: 'Push Notifications',
                description: 'Re-engage users with timely, personalized notifications that drive action and retention.',
                metric: '7x higher retention',
              },
              {
                icon: Wifi,
                title: 'Offline Functionality',
                description: 'Work without internet connectivity, syncing data when connection is restored.',
                metric: 'Always accessible',
              },
              {
                icon: Camera,
                title: 'Device Features',
                description: 'Access camera, GPS, biometrics, and sensors for powerful, contextual experiences.',
                metric: 'Full hardware access',
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
            Mobile Solutions We Build
          </h2>
          <p className="text-xl text-gray-600">
            From native apps to cross-platform solutions
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
                        <Target className="w-6 h-6 text-cyan-600" />
                        <h4 className="text-lg font-bold text-gray-900">Key Advantage</h4>
                      </div>
                      <p className="text-gray-700 font-medium">{solution.result}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-gray-900">What's Included</h4>
                    <div className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-cyan-50 transition-colors">
                          <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-600/50 hover:scale-105 flex items-center justify-center gap-2 mt-6">
                      Start Building
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Support */}
      <section className="relative px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We Build For All Platforms
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Native and cross-platform expertise
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-10 border-2 border-gray-100 hover:border-cyan-600 hover:shadow-xl transition-all">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">iOS Development</h3>
              <p className="text-gray-600 mb-4">Swift, SwiftUI, Objective-C</p>
              <div className="inline-block px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-gray-900">
                App Store Optimized
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-10 border-2 border-gray-100 hover:border-cyan-600 hover:shadow-xl transition-all">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Android Development</h3>
              <p className="text-gray-600 mb-4">Kotlin, Java, Jetpack Compose</p>
              <div className="inline-block px-4 py-2 bg-cyan-100 rounded-lg text-sm font-semibold text-cyan-900">
                Google Play Ready
              </div>
            </div>
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
                <Smartphone className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Ready to Launch Your App?
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                Let's build a mobile app that delights users and drives business growth on iOS and Android.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="group px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 text-lg">
                  Start Mobile Project
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg">
                  Download Mobile Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mobile;