'use client';

import React, { useState } from 'react';
import { 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  BarChart3,
  Users,
  DollarSign,
  Package,
  Briefcase,
  FileText,
  Calendar,
  ShoppingCart,
  Clock,
  Target,
  Sparkles
} from 'lucide-react';

const ERP: React.FC = () => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      icon: DollarSign,
      title: 'Financial Management',
      description: 'Complete control over accounting, budgeting, and financial reporting with real-time insights.',
      features: ['General Ledger & Accounts', 'Budgeting & Forecasting', 'Financial Reporting', 'Tax Management', 'Multi-currency Support'],
      benefit: 'Reduce month-end close time by 75% and improve financial accuracy',
    },
    {
      icon: Package,
      title: 'Supply Chain & Inventory',
      description: 'Optimize inventory levels, streamline procurement, and manage your entire supply chain efficiently.',
      features: ['Real-time Inventory Tracking', 'Automated Reordering', 'Supplier Management', 'Warehouse Operations', 'Demand Planning'],
      benefit: 'Cut inventory costs by 40% while improving stock availability',
    },
    {
      icon: Users,
      title: 'Human Resources',
      description: 'Manage your workforce from hiring to retirement with integrated HR, payroll, and talent management.',
      features: ['Employee Database', 'Payroll Processing', 'Time & Attendance', 'Performance Management', 'Recruitment & Onboarding'],
      benefit: 'Reduce HR admin time by 60% and improve employee satisfaction',
    },
    {
      icon: ShoppingCart,
      title: 'Sales & CRM',
      description: 'Drive revenue growth with integrated sales, marketing, and customer relationship management tools.',
      features: ['Lead Management', 'Sales Pipeline', 'Customer Portal', 'Order Processing', 'Sales Analytics'],
      benefit: 'Increase sales productivity by 50% and close rates by 30%',
    },
    {
      icon: Briefcase,
      title: 'Project Management',
      description: 'Plan, execute, and track projects with resource allocation, time tracking, and budget management.',
      features: ['Project Planning', 'Resource Allocation', 'Time Tracking', 'Budget Management', 'Gantt Charts & Reporting'],
      benefit: 'Complete projects 25% faster with 20% better resource utilization',
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
            bottom: '-300px',
            right: '-200px',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-50 border-2 border-cyan-100">
              <Layers className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-bold text-cyan-600 tracking-wider uppercase">
                ERP Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              One Platform,
              <span className="block mt-2 bg-gradient-to-r from-cyan-600 to-gray-900 bg-clip-text text-transparent">
                Entire Business
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Unify your entire business ecosystem with comprehensive Enterprise Resource Planning solutions. 
              Integrate finance, HR, inventory, sales, and operations into one powerful, centralized platform.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-600/50 hover:scale-105 flex items-center gap-2">
                Request Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300">
                View Pricing
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <TrendingUp className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">40%</div>
                <div className="text-sm text-gray-600">Efficiency Gain</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <BarChart3 className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Data Visibility</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Clock className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Access</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-50 to-cyan-50 rounded-3xl p-12 border-2 border-gray-100 shadow-2xl">
              <div className="space-y-4">
                {[
                  { icon: DollarSign, label: 'Finance', percent: '100%' },
                  { icon: Package, label: 'Inventory', percent: '100%' },
                  { icon: Users, label: 'HR', percent: '100%' },
                  { icon: ShoppingCart, label: 'Sales', percent: '100%' },
                  { icon: Briefcase, label: 'Projects', percent: '100%' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600 to-gray-900 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900">{item.label}</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-gradient-to-r from-cyan-600 to-gray-900 h-2 rounded-full" style={{ width: item.percent }} />
                      </div>
                    </div>
                    <div className="text-sm font-bold text-cyan-600">{item.percent}</div>
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
              Why Your Business Needs ERP
            </h2>
            <p className="text-xl text-gray-600">
              Transform disconnected systems into a unified powerhouse
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: 'Centralized Data',
                description: 'Eliminate data silos and maintain a single source of truth across all departments.',
                impact: 'One unified database for entire organization',
              },
              {
                icon: TrendingUp,
                title: 'Improved Efficiency',
                description: 'Automate workflows, reduce manual tasks, and optimize resource allocation across the business.',
                impact: '40% reduction in operational costs',
              },
              {
                icon: BarChart3,
                title: 'Real-Time Insights',
                description: 'Make informed decisions with live dashboards, reports, and analytics at your fingertips.',
                impact: 'Instant visibility into all operations',
              },
              {
                icon: Target,
                title: 'Better Compliance',
                description: 'Ensure regulatory compliance with built-in controls, audit trails, and automated reporting.',
                impact: '100% audit-ready documentation',
              },
              {
                icon: Sparkles,
                title: 'Scalability',
                description: 'Grow without limits. ERP systems scale seamlessly as your business expands.',
                impact: 'Support unlimited users and transactions',
              },
              {
                icon: CheckCircle2,
                title: 'Enhanced Collaboration',
                description: 'Break down departmental barriers with shared data and streamlined communication.',
                impact: '60% faster cross-team processes',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-cyan-600 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-600 to-gray-900 flex items-center justify-center mb-6 shadow-lg">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-100">
                  <p className="text-sm font-semibold text-cyan-600">{benefit.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive ERP Modules
          </h2>
          <p className="text-xl text-gray-600">
            Every function your business needs, perfectly integrated
          </p>
        </div>

        {/* Module Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {modules.map((module, index) => (
            <button
              key={index}
              onClick={() => setActiveModule(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeModule === index
                  ? 'bg-cyan-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              <module.icon className="inline-block w-5 h-5 mr-2 -mt-0.5" />
              {module.title}
            </button>
          ))}
        </div>

        {/* Active Module */}
        <div className="relative min-h-[500px]">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ${
                activeModule === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border-2 border-gray-100">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-gray-900 flex items-center justify-center shadow-xl">
                      <module.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{module.title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">{module.description}</p>
                    
                    <div className="p-6 bg-gradient-to-br from-cyan-50 to-gray-50 rounded-2xl border-2 border-cyan-100">
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="w-6 h-6 text-cyan-600" />
                        <h4 className="text-lg font-bold text-gray-900">Business Impact</h4>
                      </div>
                      <p className="text-gray-700 font-medium">{module.benefit}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-gray-900">Key Features</h4>
                    <div className="space-y-3">
                      {module.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-cyan-50 transition-colors">
                          <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-600/50 hover:scale-105 flex items-center justify-center gap-2 mt-6">
                      Explore {module.title}
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
                <Layers className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Ready to Unify Your Business?
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                Transform your operations with a custom ERP solution designed for your unique business needs.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="group px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 text-lg">
                  Schedule ERP Demo
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg">
                  Download ERP Guide
                </button>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300 pt-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">Custom Implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">Full Training Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">Ongoing Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERP;