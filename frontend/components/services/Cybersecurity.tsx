'use client';

import React, { useState } from 'react';
import { 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  Clock,
  AlertTriangle,
  Lock,
  Eye,
  FileSearch,
  Users,
  Target,
  Zap,
  ShieldCheck,
  AlertOctagon,
  Activity
} from 'lucide-react';

const Cybersecurity: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: FileSearch,
      title: 'Penetration Testing & Vulnerability Assessment',
      description: 'Identify and fix security weaknesses before attackers exploit them with comprehensive testing.',
      features: ['Network penetration testing', 'Application security testing', 'Vulnerability scanning', 'Security gap analysis', 'Remediation roadmap'],
      benefit: 'Prevent breaches by discovering 95% of vulnerabilities before exploitation',
    },
    {
      icon: Activity,
      title: 'Security Operations Center (SOC)',
      description: '24/7 monitoring and threat detection with expert security analysts protecting your infrastructure.',
      features: ['Real-time threat monitoring', 'Incident detection & response', 'Security event correlation', 'Threat intelligence', 'Continuous monitoring'],
      benefit: 'Detect and respond to threats in under 5 minutes',
    },
    {
      icon: AlertOctagon,
      title: 'Incident Response & Recovery',
      description: 'Rapid response to security incidents with expert containment, eradication, and recovery services.',
      features: ['Breach containment', 'Forensic analysis', 'Malware removal', 'System restoration', 'Post-incident review'],
      benefit: 'Minimize damage and downtime with expert incident handling',
    },
    {
      icon: ShieldCheck,
      title: 'Compliance & Risk Management',
      description: 'Ensure regulatory compliance and manage cybersecurity risks across your organization.',
      features: ['GDPR, HIPAA, PCI-DSS compliance', 'Risk assessments', 'Policy development', 'Audit preparation', 'Compliance reporting'],
      benefit: 'Maintain 100% compliance and avoid costly penalties',
    },
    {
      icon: Users,
      title: 'Security Awareness Training',
      description: 'Empower employees to be your first line of defense against cyber threats.',
      features: ['Phishing simulations', 'Security best practices', 'Role-based training', 'Progress tracking', 'Certification programs'],
      benefit: 'Reduce human-related incidents by 90%',
    },
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full opacity-5 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgb(17, 24, 39) 0%, transparent 70%)',
            top: '-200px',
            left: '-300px',
          }}
        />
        <div 
          className="absolute w-[900px] h-[900px] rounded-full opacity-5 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgb(8, 145, 178) 0%, transparent 70%)',
            bottom: '-200px',
            right: '-200px',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-50 border-2 border-cyan-100">
              <Shield className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-bold text-cyan-600 tracking-wider uppercase">
                Cybersecurity Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Protect What
              <span className="block mt-2 bg-gradient-to-r from-cyan-600 to-gray-900 bg-clip-text text-transparent">
                Matters Most
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Secure your digital ecosystem with enterprise-grade cybersecurity solutions. Our comprehensive services 
              safeguard your data, infrastructure, and reputation with 24/7 monitoring and proactive threat detection.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-600/50 hover:scale-105 flex items-center gap-2">
                Get Protected
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300">
                Security Assessment
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Clock className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Shield className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">99.99%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Zap className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">&lt;5min</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border-2 border-gray-700 shadow-2xl">
              <div className="space-y-6">
                {[
                  { icon: Shield, label: 'Network Security', status: 'Protected', color: 'text-cyan-400' },
                  { icon: Lock, label: 'Data Encryption', status: 'Active', color: 'text-cyan-400' },
                  { icon: Eye, label: 'Threat Detection', status: 'Monitoring', color: 'text-cyan-400' },
                  { icon: AlertTriangle, label: 'Vulnerabilities', status: '0 Critical', color: 'text-cyan-400' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-600 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600 to-gray-900 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-white">{item.label}</span>
                    </div>
                    <span className={`font-bold ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="relative px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Cybersecurity Matters
            </h2>
            <p className="text-xl text-gray-600">
              The digital threat landscape is evolving rapidly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { stat: '$4.45M', label: 'Average cost of a data breach', icon: AlertTriangle },
              { stat: '43%', label: 'Of attacks target small businesses', icon: Target },
              { stat: '95%', label: 'Of breaches are due to human error', icon: Users },
              { stat: '280 days', label: 'Average time to identify a breach', icon: Clock },
            ].map((threat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center border-2 border-red-100 hover:border-red-300 hover:shadow-xl transition-all">
                <threat.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{threat.stat}</div>
                <div className="text-gray-600 font-medium">{threat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-100 text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Don't Wait Until It's Too Late
            </h3>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Cyber attacks are not a matter of "if" but "when." Proactive security measures are 
              exponentially more cost-effective than dealing with a breach after it happens.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Security Services
          </h2>
          <p className="text-xl text-gray-600">
            Multi-layered protection for complete peace of mind
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeService === index
                  ? 'bg-cyan-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              <service.icon className="inline-block w-5 h-5 mr-2 -mt-0.5" />
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service */}
        <div className="relative min-h-[500px]">
          {services.map((service, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ${
                activeService === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border-2 border-gray-100">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-gray-900 flex items-center justify-center shadow-xl">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">{service.description}</p>
                    
                    <div className="p-6 bg-gradient-to-br from-cyan-50 to-gray-50 rounded-2xl border-2 border-cyan-100">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-6 h-6 text-cyan-600" />
                        <h4 className="text-lg font-bold text-gray-900">Protection Level</h4>
                      </div>
                      <p className="text-gray-700 font-medium">{service.benefit}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-gray-900">What's Included</h4>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-cyan-50 transition-colors">
                          <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-600/50 hover:scale-105 flex items-center justify-center gap-2 mt-6">
                      Enable This Protection
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
                <Shield className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Secure Your Business Today
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                Don't leave your business vulnerable. Get a free security assessment and start protecting what matters.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="group px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 text-lg">
                  Get Free Security Audit
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg">
                  Contact Security Team
                </button>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300 pt-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">24/7 Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">Expert Security Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">Compliance Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;