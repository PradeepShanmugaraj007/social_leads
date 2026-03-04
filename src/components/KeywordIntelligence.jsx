import React from 'react';
import { 
  Hash, 
  TrendingUp, 
  TrendingDown, 
  MoreHorizontal, 
  Search, 
  Filter, 
  Download, 
  Plus,
  ChevronLeft,
  ChevronRight,
  BarChart2
} from 'lucide-react';
import { cn } from '../lib/utils';

const keywordStats = [
  { keyword: 'cybersecurity', category: 'TECH', posts: 12450, leads: 1842, conversion: '14.8%', trend: '+12.5%', status: 'Active' },
  { keyword: 'ai platform', category: 'NICHE', posts: 8912, leads: 1204, conversion: '13.5%', trend: '+8.2%', status: 'Active' },
  { keyword: 'fintech solutions', category: 'FINANCE', posts: 6432, leads: 784, conversion: '12.2%', trend: '-2.4%', status: 'Active' },
  { keyword: 'cloud infrastructure', category: 'TECH', posts: 15670, leads: 1412, conversion: '9.0%', trend: '0.0%', status: 'Paused' },
  { keyword: 'martech stack', category: 'MARKETING', posts: 4210, leads: 321, conversion: '7.6%', trend: '-14.2%', status: 'Warning' },
];

export default function KeywordIntelligence() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-slate-900">Keyword Intelligence</h1>
          <p className="text-slate-500">Monitor keyword performance and lead conversion across social channels.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Download size={16} />
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            <Plus size={16} />
            Track New Keyword
          </button>
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-display font-semibold text-slate-900">Keyword Performance</h3>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mt-1">TOP 8 KEYWORDS BY LEAD GENERATION</p>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button className="px-3 py-1 text-xs font-bold bg-white text-slate-900 rounded-md shadow-sm">Posts</button>
            <button className="px-3 py-1 text-xs font-bold text-slate-500 hover:text-slate-700">Leads</button>
          </div>
        </div>
        
        <div className="h-64 flex items-end justify-between px-4 gap-4">
          {['AI Software', 'Remote Work', 'Cybersecurity', 'SaaS Sales', 'Cloud Storage', 'UX Design', 'FinTech', 'MarTech'].map((label, i) => (
            <div key={label} className="flex-1 flex flex-col items-center gap-4">
              <div className="w-full bg-slate-50 rounded-t-lg relative group cursor-pointer h-48">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-indigo-400/20 rounded-t-lg transition-all group-hover:bg-indigo-400/30" 
                  style={{ height: `${Math.random() * 60 + 20}%` }}
                />
                <div 
                  className="absolute bottom-0 left-1/4 right-1/4 bg-indigo-600 rounded-t-sm transition-all group-hover:bg-indigo-700" 
                  style={{ height: `${Math.random() * 40 + 10}%` }}
                />
              </div>
              <span className="text-[10px] font-bold text-slate-400 text-center whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-indigo-200 rounded-sm" />
            <span className="text-xs text-slate-500 font-medium">Total Posts Found</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-indigo-600 rounded-sm" />
            <span className="text-xs text-slate-500 font-medium">Leads Generated</span>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1 min-w-[300px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search keywords..." 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              <Filter size={16} />
              All Channels
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              <CalendarIcon size={16} />
              Last 30 Days
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="px-6 py-4 font-bold text-slate-400 uppercase tracking-wider text-[10px]">Keyword</th>
                  <th className="px-6 py-4 font-bold text-slate-400 uppercase tracking-wider text-[10px]">Posts Found</th>
                  <th className="px-6 py-4 font-bold text-slate-400 uppercase tracking-wider text-[10px]">Total Leads</th>
                  <th className="px-6 py-4 font-bold text-slate-400 uppercase tracking-wider text-[10px]">Conversion Rate</th>
                  <th className="px-6 py-4 font-bold text-slate-400 uppercase tracking-wider text-[10px]">Trend</th>
                  <th className="px-6 py-4 font-bold text-slate-400 uppercase tracking-wider text-[10px]">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {keywordStats.map((stat, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">{stat.keyword}</span>
                        {stat.category && (
                          <span className={cn(
                            "text-[9px] font-bold px-1.5 py-0.5 rounded uppercase",
                            stat.category === 'TECH' ? "bg-blue-100 text-blue-600" :
                            stat.category === 'NICHE' ? "bg-indigo-100 text-indigo-600" :
                            stat.category === 'FINANCE' ? "bg-slate-100 text-slate-600" :
                            "bg-orange-100 text-orange-600"
                          )}>
                            {stat.category}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-slate-600 font-medium">{stat.posts.toLocaleString()}</td>
                    <td className="px-6 py-5 text-slate-600 font-medium">{stat.leads.toLocaleString()}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-slate-900">{stat.conversion}</span>
                        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-emerald-500 rounded-full" 
                            style={{ width: stat.conversion }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className={cn(
                        "flex items-center gap-1 font-bold text-xs",
                        stat.trend.startsWith('+') ? "text-emerald-600" : 
                        stat.trend === '0.0%' ? "text-slate-400" : "text-rose-600"
                      )}>
                        {stat.trend.startsWith('+') ? <TrendingUp size={14} /> : 
                         stat.trend === '0.0%' ? null : <TrendingDown size={14} />}
                        {stat.trend}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={cn(
                        "text-[10px] font-bold px-2 py-1 rounded-full",
                        stat.status === 'Active' ? "bg-emerald-100 text-emerald-700" :
                        stat.status === 'Paused' ? "bg-orange-100 text-orange-700" :
                        "bg-rose-100 text-rose-700"
                      )}>
                        {stat.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Showing 1 to 5 of 42 keywords</span>
            <div className="flex items-center gap-1">
              <button className="p-1 text-slate-400 hover:text-slate-600 disabled:opacity-50" disabled>
                <ChevronLeft size={18} />
              </button>
              <button className="w-8 h-8 bg-indigo-600 text-white rounded-md text-xs font-bold">1</button>
              <button className="w-8 h-8 text-slate-600 hover:bg-slate-200 rounded-md text-xs font-bold">2</button>
              <button className="w-8 h-8 text-slate-600 hover:bg-slate-200 rounded-md text-xs font-bold">3</button>
              <button className="p-1 text-slate-400 hover:text-slate-600">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard label="TOTAL REACH" value="1.2M" change="+2.4%" trend="up" />
        <SummaryCard label="AVG CONV. RATE" value="11.4%" change="-0.8%" trend="down" />
        <SummaryCard label="KEYWORDS TRACKED" value="42" status="Stable" />
        <SummaryCard label="OPPORTUNITIES" value="158" change="+12%" trend="up" />
      </div>
    </div>
  );
}

function SummaryCard({ label, value, change, trend, status }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{label}</span>
      <div className="flex items-end justify-between mt-2">
        <span className="text-2xl font-display font-bold text-slate-900">{value}</span>
        {change && (
          <span className={cn(
            "text-xs font-bold",
            trend === 'up' ? "text-emerald-600" : "text-rose-600"
          )}>
            {change}
          </span>
        )}
        {status && (
          <span className="text-xs font-bold text-indigo-600">
            {status}
          </span>
        )}
      </div>
    </div>
  );
}

function CalendarIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
  );
}
