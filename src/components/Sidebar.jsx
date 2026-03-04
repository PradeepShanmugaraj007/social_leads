import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Upload, 
  Users, 
  BarChart3, 
  Hash, 
  Globe, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  ChevronDown,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Sidebar({ activeTab, setActiveTab, isDarkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'upload', label: 'Upload Data', icon: Upload },
    { id: 'leads', label: 'Leads', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'keywords', label: 'Keywords', icon: Hash },
    { id: 'platforms', label: 'Platforms', icon: Globe },
  ];

  const filteredMenuItems = menuItems.filter(item => 
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showSettings = 'settings'.includes(searchQuery.toLowerCase());

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out lg:translate-x-0",
        !isOpen && "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <BarChart3 size={20} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">SocialLead</span>
          </div>

          {/* Search Bar */}
          <div className="px-4 mb-2">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={16} />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search menu..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500/50 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto">
            {filteredMenuItems.length > 0 ? (
              filteredMenuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    activeTab === item.id 
                      ? "bg-indigo-50 text-indigo-600" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))
            ) : (
              <div className="px-3 py-8 text-center">
                <p className="text-xs text-slate-400 font-medium italic">No results found</p>
              </div>
            )}
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-slate-100 space-y-1">
            {showSettings && (
              <button
                onClick={() => setActiveTab('settings')}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  activeTab === 'settings' 
                    ? "bg-indigo-50 text-indigo-600" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <Settings size={18} />
                Settings
              </button>
            )}
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              {isDarkMode ? 'Light Mode' : 'Toggle Mode'}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
