import React from 'react';
import { 
  Globe, 
  Linkedin, 
  Twitter, 
  MessageSquare, 
  Instagram, 
  Zap, 
  TrendingUp, 
  Users,
  BarChart3,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { cn } from '../lib/utils';

const platformMetrics = [
  { name: 'LinkedIn', leads: 842, posts: 5200, velocity: '+18%', color: '#0077B5', icon: Linkedin },
  { name: 'Twitter (X)', leads: 524, posts: 12400, velocity: '+24%', color: '#000000', icon: Twitter },
  { name: 'Reddit', leads: 312, posts: 8900, velocity: '+5%', color: '#FF4500', icon: MessageSquare },
  { name: 'Instagram', leads: 164, posts: 4500, velocity: '+2%', color: '#E4405F', icon: Instagram },
];

const leadsPerPlatform = [
  { platform: 'LinkedIn', leads: 842 },
  { platform: 'Twitter', leads: 524 },
  { platform: 'Reddit', leads: 312 },
  { platform: 'Instagram', leads: 164 },
];

export default function PlatformIntelligence() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-slate-900">Platform Intelligence</h1>
          <p className="text-slate-500">Real-time comparative metrics across all tracked social channels.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            Refresh Data
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            Add Platform
          </button>
        </div>
      </div>

      {/* Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {platformMetrics.map((p) => (
          <div key={p.name} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <p.icon size={48} />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: p.color }}>
                <p.icon size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{p.name}</h3>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CONNECTED</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Total Leads</p>
                  <p className="text-2xl font-display font-bold text-slate-900">{p.leads}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 justify-end">
                    <TrendingUp size={10} />
                    {p.velocity}
                  </p>
                  <p className="text-[10px] font-medium text-slate-400">VELOCITY</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-50 flex justify-between text-xs">
                <span className="text-slate-500">Posts Scanned</span>
                <span className="font-bold text-slate-900">{p.posts.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leads per Platform Chart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display font-semibold text-slate-900">Leads per Platform</h3>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <BarChart3 size={14} />
              COMPARATIVE VIEW
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leadsPerPlatform} layout="vertical" margin={{ left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#F1F5F9" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="platform" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fontSize: 12, fontWeight: 600, fill: '#64748B' }}
                />
                <Tooltip 
                  cursor={{ fill: '#F8FAFC' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="leads" radius={[0, 4, 4, 0]} barSize={32}>
                  {leadsPerPlatform.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={platformMetrics[index].color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-semibold text-slate-900">AI Platform Insights</h3>
            <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-bold rounded uppercase">LIVE FEED</span>
          </div>
          <div className="space-y-4">
            <InsightItem 
              icon={Zap} 
              color="text-amber-500 bg-amber-50"
              title="High Intent Signal"
              description="LinkedIn activity for #cybersecurity is 40% higher than average today."
            />
            <InsightItem 
              icon={TrendingUp} 
              color="text-emerald-500 bg-emerald-50"
              title="Velocity Alert"
              description="Twitter leads for 'AI platform' increased by 15% in the last 6 hours."
            />
            <InsightItem 
              icon={ShieldCheck} 
              color="text-blue-500 bg-blue-50"
              title="Quality Score"
              description="Reddit leads currently show the highest conversion potential (18.2%)."
            />
            <InsightItem 
              icon={Users} 
              color="text-indigo-500 bg-indigo-50"
              title="New Audience"
              description="Instagram is showing emerging interest in 'SaaS automation' keywords."
            />
          </div>
          <button className="w-full mt-6 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors flex items-center justify-center gap-2">
            View Detailed Analysis
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

function InsightItem({ icon: Icon, color, title, description }) {
  return (
    <div className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-default">
      <div className={cn("w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center", color)}>
        <Icon size={20} />
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-900">{title}</h4>
        <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{description}</p>
      </div>
    </div>
  );
}
