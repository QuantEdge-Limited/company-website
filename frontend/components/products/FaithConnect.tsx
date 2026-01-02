'use client';

import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Calendar, 
  Users, 
  BookOpen, 
  Bell, 
  MessageCircle, 
  Award,
  HandHeart,
  Church,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Sparkles
} from 'lucide-react';

const FaithConnect: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Calendar,
      title: 'Spiritual Scheduling',
      description: 'Book pastoral counseling, confession times, and spiritual guidance sessions with ease.',
      color: 'from-cyan-500 to-cyan-700',
      accent: 'cyan',
    },
    {
      icon: Bell,
      title: 'Live Church Updates',
      description: 'Stay connected with real-time notifications for Mass, charity events, and community activities.',
      color: 'from-cyan-600 to-cyan-800',
      accent: 'cyan',
    },
    {
      icon: Users,
      title: 'Community Groups',
      description: 'Connect small groups, ministries, and fellowship circles with attendance tracking and meeting minutes.',
      color: 'from-gray-700 to-gray-900',
      accent: 'gray',
    },
    {
      icon: HandHeart,
      title: 'Contribution Tracking',
      description: 'Transparent giving management with automated receipts and charitable impact reports.',
      color: 'from-cyan-500 to-cyan-700',
      accent: 'cyan',
    },
    {
      icon: BookOpen,
      title: 'Sacramental Records',
      description: 'Comprehensive tracking of baptisms, confirmations, marriages, and other sacred milestones.',
      color: 'from-gray-700 to-gray-900',
      accent: 'gray',
    },
    {
      icon: Award,
      title: 'Ministry Management',
      description: 'Empower leaders with tools to organize events, track volunteers, and nurture their flock.',
      color: 'from-cyan-600 to-cyan-800',
      accent: 'cyan',
    },
  ];

  const testimonials = [
    {
      quote: "FaithConnect has transformed how we serve our congregation. Our community has never been more connected.",
      author: "Pastor James Mitchell",
      church: "Grace Community Church",
      members: "2,500+ members",
    },
    {
      quote: "The attendance tracking and group management features have made ministry coordination seamless and joyful.",
      author: "Sister Mary Catherine",
      church: "St. Augustine Parish",
      members: "1,800+ members",
    },
    {
      quote: "Our youth groups and charity initiatives are thriving. This platform brings our mission to life digitally.",
      author: "Rev. David Thompson",
      church: "New Hope Fellowship",
      members: "3,200+ members",
    },
  ];

  const stats = [
    { value: '500+', label: 'Churches Connected', icon: Church },
    { value: '150K+', label: 'Active Members', icon: Users },
    { value: '50K+', label: 'Weekly Events', icon: Calendar },
    { value: '99.9%', label: 'Uptime', icon: Shield },
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft radial gradients */}
        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgb(8, 145, 178) 0%, transparent 60%)',
            top: '-300px',
            left: '-200px',
          }}
        />
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-8 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgb(8, 145, 178) 0%, transparent 60%)',
            bottom: '-200px',
            right: '-200px',
          }}
        />
        
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 20 M30 40 L30 50 M10 30 L20 30 M40 30 L50 30' stroke='%23000000' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <div className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Logo/Badge */}
          <div className="inline-flex items-center justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/40 animate-pulse-slow">
                <Heart className="w-10 h-10 text-white" fill="currentColor" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gray-900 rounded-full border-4 border-white flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-500 to-gray-900 leading-tight tracking-tight">
              FaithConnect
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 font-medium">
              Where Faith Meets Community
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Unite your congregation, streamline ministry, and nurture spiritual growth with the complete 
            church management platform designed for modern faith communities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="group px-10 py-5 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 text-lg">
              Start Your Journey
              <Heart className="inline-block ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg text-lg">
              Watch Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">30-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">Trusted by 500+ Churches</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative px-6 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-cyan-600 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-10 h-10 text-cyan-600 mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Everything Your Ministry Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools to help your church thrive spiritually and administratively
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-cyan-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <Star className="w-4 h-4 ml-1 group-hover:fill-cyan-600 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Loved by Church Leaders
            </h2>
            <p className="text-xl text-gray-600">
              See how FaithConnect is transforming ministry across the globe
            </p>
          </div>

          <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeTestimonial === index 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border-2 border-gray-100">
                  <div className="flex gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-cyan-600 fill-cyan-600" />
                    ))}
                  </div>
                  
                  <blockquote className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.church}</div>
                      <div className="text-sm text-gray-500">{testimonial.members}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Progress Indicators */}
            <div className="flex justify-center gap-3 mt-8 pt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeTestimonial === index 
                      ? 'w-12 bg-cyan-600' 
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple Setup, Powerful Impact
          </h2>
          <p className="text-xl text-gray-600">
            Get your church connected in three easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              step: '01',
              title: 'Create Your Church Profile',
              description: 'Set up your church details, add leadership, and customize your digital home in minutes.',
              icon: Church,
            },
            {
              step: '02',
              title: 'Invite Your Community',
              description: 'Send invitations to members, organize groups, and start building your connected congregation.',
              icon: Users,
            },
            {
              step: '03',
              title: 'Grow Together',
              description: 'Track attendance, manage events, and watch your community flourish with real-time insights.',
              icon: TrendingUp,
            },
          ].map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < 2 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-300 to-cyan-500" />
              )}
              
              <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-cyan-600 transition-all duration-300 hover:shadow-xl">
                <div className="text-7xl font-bold text-gray-100 mb-4">{step.step}</div>
                
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
            
            {/* Pattern overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 10 L20 15 M20 25 L20 30 M10 20 L15 20 M25 20 L30 20' stroke='white' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative text-center space-y-8">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Heart className="w-9 h-9 text-white" fill="currentColor" />
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Ready to Unite Your Flock?
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of churches already transforming their ministry with FaithConnect. 
                Start your 30-day free trial today.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="group px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 text-lg">
                  Begin Your Free Trial
                  <Heart className="inline-block ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
                </button>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg">
                  Schedule a Demo
                </button>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300 pt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">30-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">Cancel anytime</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm pt-4">
                Trusted by churches across 45 countries worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FaithConnect;