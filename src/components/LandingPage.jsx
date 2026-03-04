import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  BarChart3, 
  Users, 
  Globe, 
  ShieldCheck, 
  MessageSquare,
  ChevronRight,
  PlayCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <BarChart3 size={20} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">SocialLead</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onGetStarted} className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors">Log in</button>
            <button 
              onClick={onGetStarted}
              className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-8 relative">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-50 rounded-full blur-[120px] -z-10 opacity-50" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 text-xs font-bold uppercase tracking-wider"
          >
            <Zap size={14} className="fill-indigo-600" />
            AI-Powered Social Intelligence
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight max-w-4xl mx-auto"
          >
            Turn Social Media Conversations into <span className="text-indigo-600">Sales Leads</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Find, enrich, and convert potential customers from signals on LinkedIn, Twitter, and Reddit with our AI-first scraping and intelligence engine.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2"
            >
              Start Your Free Trial
              <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <PlayCircle size={20} />
              Watch Demo
            </button>
          </motion.div>

          {/* Trusted By */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-12 space-y-6"
          >
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">TRUSTED BY INNOVATIVE TEAMS</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              <span className="text-2xl font-display font-bold">TECHFLOW</span>
              <span className="text-2xl font-display font-bold">VELOGROWTH</span>
              <span className="text-2xl font-display font-bold">CLOUDSYNC</span>
              <span className="text-2xl font-display font-bold">DATALAB</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Everything you need to fill your pipeline</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our platform automates the tedious parts of prospecting so you can focus on closing deals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Globe} 
              title="Multi-Platform Scraping" 
              description="Extract high-intent signals from LinkedIn, Twitter, Reddit, and Instagram in real-time."
            />
            <FeatureCard 
              icon={Zap} 
              title="AI Lead Enrichment" 
              description="Our AI analyzes profiles and posts to determine intent, role, and conversion potential."
            />
            <FeatureCard 
              icon={ShieldCheck} 
              title="Verified Contact Data" 
              description="Automatically find and verify work emails and social profiles for every lead."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Simple, transparent pricing</h2>
            <p className="text-slate-600 mt-4">Choose the plan that's right for your growth stage.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              name="Starter" 
              price="49" 
              features={['500 Leads / mo', '3 Platforms', 'Basic AI Scoring', 'Email Support']} 
            />
            <PricingCard 
              name="Professional" 
              price="99" 
              featured
              features={['2,500 Leads / mo', 'All Platforms', 'Advanced AI Enrichment', 'Priority Support', 'CRM Integration']} 
            />
            <PricingCard 
              name="Business" 
              price="249" 
              features={['10,000 Leads / mo', 'Unlimited Platforms', 'Custom AI Models', 'Dedicated Account Manager']} 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                <BarChart3 size={20} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">SocialLead</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The AI-first platform for modern sales teams to find and convert leads from social signals.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">Get the latest lead gen tips in your inbox.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm flex-1 focus:ring-2 focus:ring-indigo-500" />
              <button className="bg-indigo-600 p-2 rounded-lg hover:bg-indigo-700 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          © 2023 SocialLead Intelligence. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all group">
      <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function PricingCard({ name, price, features, featured }) {
  return (
    <div className={cn(
      "p-8 rounded-3xl border transition-all relative",
      featured 
        ? "bg-indigo-600 border-indigo-600 text-white shadow-2xl shadow-indigo-200 scale-105 z-10" 
        : "bg-white border-slate-200 text-slate-900 hover:border-indigo-200"
    )}>
      {featured && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-display font-bold">${price}</span>
        <span className={cn("text-sm", featured ? "text-indigo-100" : "text-slate-500")}>/mo</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm">
            <CheckCircle2 size={18} className={featured ? "text-indigo-200" : "text-indigo-600"} />
            {f}
          </li>
        ))}
      </ul>
      <button className={cn(
        "w-full py-3 rounded-xl font-bold transition-all",
        featured 
          ? "bg-white text-indigo-600 hover:bg-indigo-50" 
          : "bg-slate-900 text-white hover:bg-slate-800"
      )}>
        Choose {name}
      </button>
    </div>
  );
}
