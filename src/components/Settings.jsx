import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Database, 
  CreditCard, 
  Mail, 
  Lock, 
  Globe,
  Save,
  Trash2,
  RefreshCw,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Settings() {
  const [activeSection, setActiveSection] = useState('profile');

  const sections = [
    { id: 'profile', label: 'User Profile', icon: User },
    { id: 'scoring', label: 'Lead Scoring', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'data', label: 'Data Management', icon: Database },
    { id: 'billing', label: 'Billing & Plan', icon: CreditCard },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-display font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500">Configure your account preferences and AI lead scoring thresholds.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all",
                activeSection === s.id 
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200" 
                  : "text-slate-600 hover:bg-white hover:text-slate-900"
              )}
            >
              <div className="flex items-center gap-3">
                <s.icon size={18} />
                {s.label}
              </div>
              <ChevronRight size={14} className={activeSection === s.id ? "opacity-100" : "opacity-0"} />
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-6">
          {activeSection === 'profile' && <ProfileSettings />}
          {activeSection === 'scoring' && <ScoringSettings />}
          {activeSection === 'notifications' && <NotificationSettings />}
          {activeSection === 'data' && <DataSettings />}
        </div>
      </div>
    </div>
  );
}

function ProfileSettings() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h3 className="font-bold text-slate-900">Personal Information</h3>
        <p className="text-sm text-slate-500">Update your account details and public profile.</p>
      </div>
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-slate-100 border-4 border-white shadow-sm flex items-center justify-center text-slate-400 relative group cursor-pointer">
            <User size={32} />
            <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span className="text-[10px] font-bold text-white">CHANGE</span>
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-slate-900">Profile Picture</h4>
            <p className="text-xs text-slate-500">JPG, GIF or PNG. Max size of 2MB.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputGroup label="Full Name" placeholder="John Doe" value="Pradeep Shanmugaraj" />
          <InputGroup label="Email Address" placeholder="john@example.com" value="pradeep@sociallead.ai" />
          <InputGroup label="Job Title" placeholder="CEO" value="Founder & CEO" />
          <InputGroup label="Company" placeholder="Acme Inc" value="SocialLead Intelligence" />
        </div>
      </div>
      <div className="px-6 py-4 bg-slate-50 flex justify-end">
        <button className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors shadow-sm">
          <Save size={16} />
          Save Changes
        </button>
      </div>
    </div>
  );
}

function ScoringSettings() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-bold text-slate-900">AI Lead Scoring Thresholds</h3>
          <p className="text-sm text-slate-500">Adjust how our AI categorizes leads based on intent signals.</p>
        </div>
        <div className="p-6 space-y-8">
          <SliderGroup 
            label="Hot Lead Threshold" 
            description="Minimum score to be marked as 'Hot' (High Intent)" 
            value={85} 
            color="bg-rose-500"
          />
          <SliderGroup 
            label="Warm Lead Threshold" 
            description="Minimum score to be marked as 'Warm' (Moderate Intent)" 
            value={60} 
            color="bg-orange-500"
          />
          <div className="pt-4 border-t border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4">Signal Weighting</h4>
            <div className="space-y-4">
              <ToggleGroup label="Keyword Match Precision" active />
              <ToggleGroup label="Platform Authority Score" active />
              <ToggleGroup label="Recent Activity Recency" active />
              <ToggleGroup label="Bio/Profile Keyword Match" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationSettings() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h3 className="font-bold text-slate-900">Notification Preferences</h3>
        <p className="text-sm text-slate-500">Choose how and when you want to be notified about new leads.</p>
      </div>
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">EMAIL NOTIFICATIONS</h4>
          <ToggleGroup label="Daily Lead Summary" active />
          <ToggleGroup label="Instant Hot Lead Alerts" active />
          <ToggleGroup label="Weekly Performance Report" />
        </div>
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">SYSTEM ALERTS</h4>
          <ToggleGroup label="Data Processing Complete" active />
          <ToggleGroup label="Keyword Warning Alerts" active />
          <ToggleGroup label="Billing & Subscription" active />
        </div>
      </div>
    </div>
  );
}

function DataSettings() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h3 className="font-bold text-slate-900">Data Management</h3>
        <p className="text-sm text-slate-500">Manage your stored leads and processing history.</p>
      </div>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <Database size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Total Stored Leads</h4>
              <p className="text-xs text-slate-500">12,482 leads processed across all time.</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">
            <RefreshCw size={14} />
            Re-sync All
          </button>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-slate-900">Danger Zone</h4>
          <div className="p-4 border border-rose-100 bg-rose-50 rounded-xl flex items-center justify-between">
            <div>
              <h5 className="text-sm font-bold text-rose-900">Purge All Leads</h5>
              <p className="text-xs text-rose-700">Permanently delete all lead data and history. This cannot be undone.</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-lg text-xs font-bold hover:bg-rose-700 transition-colors shadow-sm">
              <Trash2 size={14} />
              Purge Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder, value }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
      <input 
        type="text" 
        defaultValue={value}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
      />
    </div>
  );
}

function SliderGroup({ label, description, value, color }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end">
        <div>
          <h4 className="text-sm font-bold text-slate-900">{label}</h4>
          <p className="text-xs text-slate-500">{description}</p>
        </div>
        <span className="text-lg font-display font-bold text-indigo-600">{value}%</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full relative">
        <div className={cn("h-full rounded-full", color)} style={{ width: `${value}%` }} />
        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-indigo-600 rounded-full shadow-sm" style={{ left: `calc(${value}% - 8px)` }} />
      </div>
    </div>
  );
}

function ToggleGroup({ label, active }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <button className={cn(
        "w-10 h-5 rounded-full relative transition-colors",
        active ? "bg-indigo-600" : "bg-slate-200"
      )}>
        <div className={cn(
          "absolute top-1 w-3 h-3 bg-white rounded-full transition-all",
          active ? "right-1" : "left-1"
        )} />
      </button>
    </div>
  );
}
