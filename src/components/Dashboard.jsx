import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

const leadsTrendData = [
  { name: 'MON', leads: 400 },
  { name: 'TUE', leads: 300 },
  { name: 'WED', leads: 500 },
  { name: 'THU', leads: 450 },
  { name: 'FRI', leads: 700 },
  { name: 'SAT', leads: 600 },
  { name: 'SUN', leads: 800 },
  { name: 'MON', leads: 550 },
  { name: 'TUE', leads: 900 },
  { name: 'WED', leads: 1000 },
];

const platformData = [
  { name: 'LinkedIn', value: 45, color: '#4F46E5' },
  { name: 'Twitter', value: 25, color: '#0EA5E9' },
  { name: 'Reddit', value: 20, color: '#EF4444' },
  { name: 'Instagram', value: 10, color: '#F472B6' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-slate-900">Analytics Overview</h1>
          <p className="text-slate-500">Real-time performance metrics for your social intelligence.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Clock size={16} />
            Last 30 Days
            <ChevronDown size={14} />
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard title="TOTAL POSTS" value="12,482" change="+12%" trend="up" />
        <StatCard title="TOTAL LEADS" value="1,842" change="+8%" trend="up" />
        <StatCard title="HOT LEADS" value="324" label="CRITICAL" labelColor="bg-red-100 text-red-600" />
        <StatCard title="WARM LEADS" value="892" label="STABLE" labelColor="bg-orange-100 text-orange-600" />
        <StatCard title="COLD LEADS" value="626" label="NEW" labelColor="bg-blue-100 text-blue-600" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leads Trend */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-semibold text-slate-900">Leads Trend</h3>
            <select className="text-sm border-none bg-slate-50 rounded-md px-2 py-1 focus:ring-0">
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leadsTrendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#94A3B8' }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: '#F8FAFC' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend 
                  verticalAlign="top" 
                  align="right" 
                  iconType="circle"
                  wrapperStyle={{ paddingBottom: '20px', fontSize: '12px', fontWeight: 500 }}
                />
                <Bar 
                  name="Leads Generated"
                  dataKey="leads" 
                  fill="#818CF8" 
                  radius={[4, 4, 0, 0]} 
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Platform Share */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-display font-semibold text-slate-900 mb-6">Platform Share</h3>
          <div className="h-[250px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  align="center"
                  iconType="circle"
                  wrapperStyle={{ fontSize: '11px', paddingTop: '20px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-bold text-slate-900">1.8k</span>
              <span className="text-xs text-slate-500 font-medium">LEADS</span>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {platformData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-600">{item.name}</span>
                </div>
                <span className="font-semibold text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Keyword Performance */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-display font-semibold text-slate-900 mb-6">Keyword Performance</h3>
          <div className="space-y-6">
            <KeywordBar label="AI Marketing Solution" value={482} max={600} />
            <KeywordBar label="Lead Gen Automation" value={315} max={600} />
            <KeywordBar label="Sales Pipeline Tools" value={221} max={600} />
          </div>
        </div>

        {/* Top Potential Leads */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-semibold text-slate-900">Top Potential Leads</h3>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all</button>
          </div>
          <div className="space-y-4">
            <LeadItem name="Jordan Dalman" role="CTO at TechFlow" status="HOT" />
            <LeadItem name="Maria Santos" role="Founder at GreenLoop" status="HOT" />
            <LeadItem name="Ben Lawson" role="VP Marketing, ScaleUp" status="WARM" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, trend, label, labelColor }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{title}</span>
        {label && (
          <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded", labelColor)}>
            {label}
          </span>
        )}
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-display font-bold text-slate-900">{value}</span>
        {change && (
          <span className={cn(
            "text-xs font-semibold flex items-center gap-0.5",
            trend === 'up' ? "text-emerald-600" : "text-rose-600"
          )}>
            {trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {change}
          </span>
        )}
      </div>
    </div>
  );
}

function KeywordBar({ label, value, max }) {
  const percentage = (value / max) * 100;
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-slate-700 font-medium">"{label}"</span>
        <span className="text-slate-500">{value} leads</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-indigo-500 rounded-full" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function LeadItem({ name, role, status }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
          {name.split(' ').map((n) => n[0]).join('')}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">{name}</h4>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
      <span className={cn(
        "text-[10px] font-bold px-2 py-0.5 rounded",
        status === 'HOT' ? "bg-rose-100 text-rose-600" : "bg-orange-100 text-orange-600"
      )}>
        {status}
      </span>
    </div>
  );
}

function ChevronDown({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}
