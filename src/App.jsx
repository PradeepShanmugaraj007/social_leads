/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UploadData from './components/UploadData';
import LeadsManagement from './components/LeadsManagement';
import KeywordIntelligence from './components/KeywordIntelligence';
import PlatformIntelligence from './components/PlatformIntelligence';
import Settings from './components/Settings';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import { Bell, Search, ChevronDown } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [appState, setAppState] = useState('landing');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Simple authentication simulation
  const handleLogin = () => setAppState('app');
  const handleSignup = () => setAppState('app');
  const handleLogout = () => setAppState('landing');

  if (appState === 'landing') {
    return <LandingPage onGetStarted={() => setAppState('login')} />;
  }

  if (appState === 'login') {
    return <Login onLogin={handleLogin} onSwitchToSignup={() => setAppState('signup')} />;
  }

  if (appState === 'signup') {
    return <Signup onSignup={handleSignup} onSwitchToLogin={() => setAppState('login')} />;
  }

  return (
    <div className={cn("min-h-screen", isDarkMode ? "dark bg-slate-950" : "bg-slate-50")}>
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      <main className="lg:ml-64 min-h-screen transition-all duration-300">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex-1 max-w-md relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          
          <div className="flex items-center gap-4 ml-auto">
            <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 pl-2 pr-1 py-1 hover:bg-slate-50 rounded-lg transition-colors group"
            >
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-900">Pradeep S.</p>
                <p className="text-[10px] text-slate-500 font-medium">Free Plan</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                PS
              </div>
              <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-600" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 max-w-7xl mx-auto">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'upload' && <UploadData />}
          {activeTab === 'leads' && <LeadsManagement />}
          {activeTab === 'analytics' && <Dashboard />}
          {activeTab === 'keywords' && <KeywordIntelligence />}
          {activeTab === 'platforms' && <PlatformIntelligence />}
          {activeTab === 'settings' && <Settings />}
        </div>
      </main>
    </div>
  );
}
