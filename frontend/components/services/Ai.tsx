'use client';

import React, { useState } from 'react';
import { 
  Brain, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Target,
  Zap,
  DollarSign,
  BarChart3,
  Cpu,
  Eye,
  MessageSquare,
  ShoppingBag,
  Bot,
  LineChart
} from 'lucide-react';

const AI: React.FC = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);

  const useCases = [
    {
      icon: LineChart,
      title: 'Predictive Analytics & Forecasting',
      description: 'Anticipate market trends, customer behavior, and business outcomes with AI-powered predictive models.',
      benefits: ['Forecast sales with 95%+ accuracy', 'Identify risks before they materialize', 'Optimize inventory and resource allocation'],
      example: 'A retail chain reduced stockouts by 65% and overstock by 40% using our predictive analytics.',
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Extract insights from text, automate customer communications, and understand sentiment at scale.',
      benefits: ['Analyze thousands of customer reviews instantly', 'Automate email classification and routing', 'Detect sentiment and emerging issues'],
      example: 'A healthcare provider processes 10,000+ patient inquiries daily with 90% automation rate.',
    },
    {
      icon: Eye,
      title: 'Computer Vision & Image Recognition',
      description: 'Enable machines to see, understand, and act on visual information with unprecedented accuracy.',
      benefits: ['Automate quality control inspections', 'Detect defects with 99.9% accuracy', 'Enable facial recognition and object detection'],
      example: 'A manufacturing company reduced defect rate by 85% with AI-powered visual inspection.',
    },
    {
      icon: ShoppingBag,
      title: 'Recommendation Engines',
      description: 'Deliver personalized experiences that increase engagement and drive revenue through intelligent recommendations.',
      benefits: ['Boost conversion rates by 30-50%', 'Increase average order value by 20%', 'Improve customer lifetime value'],
      example: 'An e-commerce platform saw 45% increase in revenue from AI-recommended products.',
    },
    {
      icon: Bot,
      title: 'Intelligent Chatbots & Virtual Assistants',
      description: 'Provide 24/7 customer support, automate routine inquiries, and scale your support operations.',
      benefits: ['Handle 80% of routine inquiries automatically', 'Reduce support costs by 60%', 'Provide instant responses 24/7'],
      example: 'A telecom company resolved 75% of customer issues without human intervention.',
    },
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full opacity-5 blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, rgb(8, 145, 178) 0%, transparent 70%)',
            top: '-200px',
            right: '-300px',
          }}
        />
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-5 blur-3xl animate-float-delayed"
          style={{
            background: 'radial-gradient(circle, rgb(17, 24, 39) 0%, transparent 70%)',
            bottom: '-200px',
            left: '-200px',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-50 border-2 border-cyan-100">
              <Brain className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-bold text-cyan-600 tracking-wider uppercase">
                AI & Machine Learning
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Intelligent Automation,
              <span className="block mt-2 bg-gradient-to-r from-cyan-600 to-gray-900 bg-clip-text text-transparent">
                Predictive Power
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your business operations with cutting-edge artificial intelligence and machine learning solutions. 
              Automate complex tasks, predict customer behavior, and make data-driven decisions with unprecedented accuracy.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-600/50 hover:scale-105 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300">
                See Case Studies
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <DollarSign className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">60%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Target className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Zap className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">10x</div>
                <div className="text-sm text-gray-600">Faster Processing</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-cyan-50 to-gray-50 rounded-3xl p-12 border-2 border-gray-100 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Brain, label: 'Deep Learning', color: 'from-cyan-500 to-cyan-700' },
                  { icon: Cpu, label: 'Neural Networks', color: 'from-gray-700 to-gray-900' },
                  { icon: TrendingUp, label: 'Predictive Models', color: 'from-cyan-600 to-cyan-800' },
                  { icon: Sparkles, label: 'Smart Automation', color: 'from-gray-600 to-gray-900' },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="font-bold text-gray-900">{item.label}</div>
                  </div>
                ))}
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
              How AI Transforms Your Business
            </h2>
            <p className="text-xl text-gray-600">
              Unlock unprecedented efficiency and insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Automate Repetitive Tasks',
                description: 'Free your team from mundane, time-consuming tasks and let them focus on strategic work that drives growth.',
                stat: '60%',
                statLabel: 'Reduction in operational costs',
                icon: Zap,
              },
              {
                title: 'Predict Customer Behavior',
                description: 'Anticipate what your customers want before they do, enabling proactive engagement and personalized experiences.',
                stat: '95%',
                statLabel: 'Prediction accuracy rate',
                icon: Target,
              },
              {
                title: 'Process Data in Real-Time',
                description: 'Analyze massive datasets instantly to uncover patterns, trends, and opportunities that humans would miss.',
                stat: '10x',
                statLabel: 'Faster than manual analysis',
                icon: BarChart3,
              },
              {
                title: 'Make Data-Driven Decisions',
                description: 'Remove guesswork from decision-making with intelligent insights and recommendations based on comprehensive data analysis.',
                stat: '85%',
                statLabel: 'Better decision accuracy',
                icon: TrendingUp,
              },
              {
                title: 'Personalize at Scale',
                description: 'Deliver unique, personalized experiences to every customer simultaneously without increasing costs.',
                stat: '3x',
                statLabel: 'Increase in engagement',
                icon: Sparkles,
              },
              {
                title: 'Continuous Learning',
                description: 'AI systems that improve over time, learning from every interaction to become more accurate and effective.',
                stat: '99%',
                statLabel: 'Accuracy improvement over time',
                icon: Brain,
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-cyan-600 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-gray-900 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-cyan-50 rounded-xl border border-cyan-100">
                  <div className="text-3xl font-bold text-cyan-600">{benefit.stat}</div>
                  <div className="text-sm text-gray-600 mt-1">{benefit.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real-World Applications
          </h2>
          <p className="text-xl text-gray-600">
            See how AI solves actual business challenges
          </p>
        </div>

        {/* Use Case Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {useCases.map((useCase, index) => (
            <button
              key={index}
              onClick={() => setActiveUseCase(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeUseCase === index
                  ? 'bg-cyan-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              <useCase.icon className="inline-block w-5 h-5 mr-2 -mt-0.5" />
              {useCase.title}
            </button>
          ))}
        </div>

        {/* Active Use Case */}
        <div className="relative min-h-[400px]">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ${
                activeUseCase === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border-2 border-gray-100">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-gray-900 flex items-center justify-center shadow-xl">
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{useCase.title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">{useCase.description}</p>
                    
                    <div className="space-y-3">
                      {useCase.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-cyan-50 to-gray-50 rounded-2xl p-8 border-2 border-cyan-100">
                      <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="w-6 h-6 text-cyan-600" />
                        <h4 className="text-xl font-bold text-gray-900">Success Story</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed italic">{useCase.example}</p>
                    </div>

                    <button className="w-full px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-600/50 hover:scale-105 flex items-center justify-center gap-2">
                      Explore This Solution
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                <Brain className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Ready to Harness AI Power?
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                Let's discuss how AI and machine learning can transform your business operations and drive growth.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="group px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 text-lg">
                  Schedule AI Consultation
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg">
                  Download AI Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-5deg); }
          66% { transform: translate(20px, -20px) rotate(5deg); }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AI;