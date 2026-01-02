'use client';

import React, { useState } from 'react';
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Clock,
  Target,
  DollarSign,
  FileText,
  Mail,
  Database,
  GitBranch,
  Bot,
  Sparkles,
  TrendingUp,
  Workflow
} from 'lucide-react';

const Automation: React.FC = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  const processes = [
    {
      icon: Bot,
      title: 'Robotic Process Automation (RPA)',
      description: 'Deploy software robots to handle repetitive, rule-based tasks with perfect accuracy and speed.',
      tasks: ['Data entry and validation', 'Form processing', 'Report generation', 'System integration', 'Scheduled tasks'],
      result: 'A financial services company automated 80% of data entry, saving 2,000 hours monthly',
    },
    {
      icon: FileText,
      title: 'Document Processing & OCR',
      description: 'Extract data from documents, invoices, and forms automatically with intelligent recognition.',
      tasks: ['Invoice processing', 'Contract extraction', 'Form digitization', 'Receipt scanning', 'Document classification'],
      result: 'Healthcare provider processes 5,000+ patient forms daily with 99.5% accuracy',
    },
    {
      icon: Mail,
      title: 'Email & Communication Automation',
      description: 'Automate email workflows, responses, and routing to accelerate communication processes.',
      tasks: ['Email classification', 'Auto-responses', 'Follow-up sequences', 'Notification triggers', 'Multi-channel messaging'],
      result: 'E-commerce business reduced response time from 4 hours to 5 minutes',
    },
    {
      icon: GitBranch,
      title: 'Workflow & Approval Systems',
      description: 'Streamline business processes with automated workflows, approvals, and task routing.',
      tasks: ['Approval workflows', 'Task assignment', 'Process routing', 'Deadline management', 'Progress tracking'],
      result: 'Manufacturing company reduced approval cycles from 7 days to 24 hours',
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
            bottom: '-300px',
            left: '-300px',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-50 border-2 border-cyan-100">
              <Zap className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-bold text-cyan-600 tracking-wider uppercase">
                Automation Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Work Smarter,
              <span className="block mt-2 bg-gradient-to-r from-cyan-600 to-gray-900 bg-clip-text text-transparent">
                Not Harder
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Eliminate manual bottlenecks and accelerate your business operations with intelligent automation solutions. 
              Free your team to focus on strategic work while robots handle repetitive tasks with perfect accuracy.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-600/50 hover:scale-105 flex items-center gap-2">
                Start Automating
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300">
                Calculate ROI
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Zap className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">70%</div>
                <div className="text-sm text-gray-600">Faster Processes</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <CheckCircle2 className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <DollarSign className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">50%</div>
                <div className="text-sm text-gray-600">Cost Savings</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-cyan-50 to-gray-50 rounded-3xl p-12 border-2 border-gray-100 shadow-2xl">
              <div className="space-y-6">
                {[
                  { label: 'Manual Process', time: '8 hours', color: 'bg-red-500' },
                  { label: 'With Automation', time: '15 minutes', color: 'bg-cyan-600' },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">{item.label}</span>
                      <span className="text-lg font-bold text-cyan-600">{item.time}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className={`${item.color} h-4 rounded-full transition-all duration-1000`} 
                        style={{ width: index === 0 ? '100%' : '3%' }}
                      />
                    </div>
                  </div>
                ))}
                
                <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border-2 border-cyan-100">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 text-cyan-600 mx-auto mb-3" />
                    <div className="text-4xl font-bold text-cyan-600 mb-2">97%</div>
                    <div className="text-gray-700 font-medium">Time Saved</div>
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
              Transform Your Operations
            </h2>
            <p className="text-xl text-gray-600">
              Automation delivers immediate, measurable impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Accelerate Processes',
                description: 'Complete tasks 70% faster with automated workflows that never sleep or take breaks.',
                metric: '70% faster completion',
              },
              {
                icon: CheckCircle2,
                title: 'Eliminate Errors',
                description: 'Achieve 99.9% accuracy by removing human error from repetitive tasks.',
                metric: '99.9% accuracy rate',
              },
              {
                icon: DollarSign,
                title: 'Reduce Costs',
                description: 'Cut operational costs by 50% while improving output quality and consistency.',
                metric: '50% cost reduction',
              },
              {
                icon: TrendingUp,
                title: 'Scale Effortlessly',
                description: 'Handle 10x more volume without adding headcount or infrastructure.',
                metric: '10x capacity increase',
              },
              {
                icon: Target,
                title: 'Improve Compliance',
                description: 'Ensure perfect adherence to regulations with automated checks and audit trails.',
                metric: '100% compliant processes',
              },
              {
                icon: Sparkles,
                title: 'Boost Productivity',
                description: 'Free employees for strategic work by automating mundane, repetitive tasks.',
                metric: '60% more productive teams',
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

      {/* Process Types Section */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Can You Automate?
          </h2>
          <p className="text-xl text-gray-600">
            From simple tasks to complex workflows
          </p>
        </div>

        {/* Process Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {processes.map((process, index) => (
            <button
              key={index}
              onClick={() => setActiveProcess(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeProcess === index
                  ? 'bg-cyan-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              <process.icon className="inline-block w-5 h-5 mr-2 -mt-0.5" />
              {process.title}
            </button>
          ))}
        </div>

        {/* Active Process */}
        <div className="relative min-h-[450px]">
          {processes.map((process, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ${
                activeProcess === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border-2 border-gray-100">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-gray-900 flex items-center justify-center shadow-xl">
                      <process.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{process.title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">{process.description}</p>
                    
                    <div className="p-6 bg-gradient-to-br from-cyan-50 to-gray-50 rounded-2xl border-2 border-cyan-100">
                      <div className="flex items-center gap-3 mb-3">
                        <Target className="w-6 h-6 text-cyan-600" />
                        <h4 className="text-lg font-bold text-gray-900">Real-World Success</h4>
                      </div>
                      <p className="text-gray-700 font-medium italic">{process.result}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-gray-900">Common Tasks Automated</h4>
                    <div className="space-y-3">
                      {process.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-cyan-50 transition-colors">
                          <Zap className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{task}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-600/50 hover:scale-105 flex items-center justify-center gap-2 mt-6">
                      Automate This Process
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
                <Zap className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Ready to Automate?
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                Start saving time and reducing costs today with intelligent automation solutions.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="group px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 text-lg">
                  Get Automation Assessment
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg">
                  View ROI Calculator
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Automation;