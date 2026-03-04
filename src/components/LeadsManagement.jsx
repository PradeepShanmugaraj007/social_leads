import React from 'react';
import { 
  Search, 
  Download, 
  Plus, 
  MoreHorizontal, 
  ExternalLink, 
  Mail,
  Filter,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Twitter,
  MessageSquare
} from 'lucide-react';
import { cn } from '../lib/utils';

const leads = [
  { id: '1', name: 'Sarah Miller', company: 'TechStream Inc', country: 'USA', keyword: '#SaaS', platform: 'LinkedIn', temperature: 'Hot', date: 'Oct 24, 2023' },
  { id: '2', name: 'James Knight', company: 'Global Retail', country: 'UK', keyword: '#Ecom', platform: 'Twitter', temperature: 'Warm', date: 'Oct 23, 2023' },
  { id: '3', name: 'Elena Belova', company: 'Fintech Solutions', country: 'Germany', keyword: '#Payments', platform: 'Reddit', temperature: 'Cold', date: 'Oct 21, 2023' },
  { id: '4', name: 'Alex Moore', company: 'DataFlow Co', country: 'Canada', keyword: '#BigData', platform: 'LinkedIn', temperature: 'Hot', date: 'Oct 20, 2023' },
];

export default function LeadsManagement() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-slate-900">Leads Management</h1>
          <p className="text-slate-500">Manage and track your social media prospecting pipeline.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Download size={16} />
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            <Plus size={16} />
            Add New Lead
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[240px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search leads..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
        <FilterSelect label="All Platforms" />
        <FilterSelect label="All Temperatures" />
        <FilterSelect label="Country" />
        <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg text-sm text-slate-600 cursor-pointer">
          <CalendarIcon size={16} />
          Oct 1 - Oct 31, 2023
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 font-semibold text-slate-600 uppercase tracking-wider text-[10px]">Name</th>
                <th className="px-6 py-4 font-semibold text-slate-600 uppercase tracking-wider text-[10px]">Company</th>
                <th className="px-6 py-4 font-semibold text-slate-600 uppercase tracking-wider text-[10px]">Country</th>
                <th className="px-6 py-4 font-semibold text-slate-600 uppercase tracking-wider text-[10px]">Keyword</th>
                <th className="px-6 py-4 font-semibold text-slate-600 uppercase tracking-wider text-[10px]">Platform</th>
                <th className="px-6 py-4 font-semibold text-slate-600 uppercase tracking-wider text-[10px]">Temperature</th>
                <th className="px-6 py-4 font-semibold text-slate-600 uppercase tracking-wider text-[10px]">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 uppercase tracking-wider text-[10px] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-medium text-slate-900">{lead.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{lead.company}</td>
                  <td className="px-6 py-4 text-slate-600">{lead.country}</td>
                  <td className="px-6 py-4">
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[11px] font-medium">
                      {lead.keyword}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      {lead.platform === 'LinkedIn' && <Linkedin size={14} className="text-blue-600" />}
                      {lead.platform === 'Twitter' && <Twitter size={14} className="text-sky-500" />}
                      {lead.platform === 'Reddit' && <MessageSquare size={14} className="text-orange-500" />}
                      <span className="text-xs">{lead.platform}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "text-[10px] font-bold px-2 py-0.5 rounded",
                      lead.temperature === 'Hot' ? "bg-rose-100 text-rose-600" :
                      lead.temperature === 'Warm' ? "bg-orange-100 text-orange-600" :
                      "bg-blue-100 text-blue-600"
                    )}>
                      {lead.temperature}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-xs">{lead.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors">
                        <FileText size={16} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors">
                        <ExternalLink size={16} />
                      </button>
                      <button className="px-3 py-1 bg-white border border-slate-200 text-indigo-600 text-xs font-semibold rounded-md hover:bg-indigo-50 transition-colors">
                        Mark Contacted
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">Showing 1 to 10 of 254 leads</span>
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
  );
}

function FilterSelect({ label }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg text-sm text-slate-600 cursor-pointer hover:bg-slate-100 transition-colors">
      {label}
      <ChevronDown size={14} />
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

function CalendarIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
  );
}

function FileText({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>
    </svg>
  );
}
