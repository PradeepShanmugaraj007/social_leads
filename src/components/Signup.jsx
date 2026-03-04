import React, { useState, useMemo } from 'react';
import { Mail, Lock, User, ArrowRight, Chrome, Github, Check, X, Eye, EyeOff } from 'lucide-react';

export default function Signup({ onSignup, onSwitchToLogin }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const strength = useMemo(() => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    return score;
  }, [password]);

  const getStrengthLabel = () => {
    if (strength === 0) return '';
    if (strength <= 2) return 'Weak';
    if (strength <= 4) return 'Medium';
    return 'Strong';
  };

  const getStrengthColor = () => {
    if (strength === 0) return 'bg-slate-200';
    if (strength <= 2) return 'bg-rose-500';
    if (strength <= 4) return 'bg-amber-500';
    return 'bg-emerald-500';
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
        <div className="text-center">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-indigo-200">
            <ZapIcon size={24} />
          </div>
          <h2 className="text-3xl font-display font-bold text-slate-900">Create account</h2>
          <p className="text-slate-500 mt-2">Start your 14-day free trial today</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
            <Chrome size={18} className="text-rose-500" />
            Google
          </button>
          <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
            <MicrosoftIcon size={18} className="text-blue-500" />
            Microsoft
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-slate-400 font-bold">Or sign up with email</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="email" 
                placeholder="name@company.com"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Confirm</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Password Strength Indicator */}
            {password && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Password Strength</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    strength <= 2 ? 'text-rose-500' : strength <= 4 ? 'text-amber-500' : 'text-emerald-500'
                  }`}>
                    {getStrengthLabel()}
                  </span>
                </div>
                <div className="flex gap-1 h-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i}
                      className={`flex-1 rounded-full transition-all duration-500 ${
                        i <= strength ? getStrengthColor() : 'bg-slate-100'
                      }`}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  <div className={`flex items-center gap-1.5 text-[10px] ${password.length >= 8 ? 'text-emerald-600' : 'text-slate-400'}`}>
                    {password.length >= 8 ? <Check size={10} /> : <div className="w-2.5 h-2.5 rounded-full border border-slate-300" />}
                    8+ characters
                  </div>
                  <div className={`flex items-center gap-1.5 text-[10px] ${/[A-Z]/.test(password) ? 'text-emerald-600' : 'text-slate-400'}`}>
                    {/[A-Z]/.test(password) ? <Check size={10} /> : <div className="w-2.5 h-2.5 rounded-full border border-slate-300" />}
                    Uppercase
                  </div>
                  <div className={`flex items-center gap-1.5 text-[10px] ${/[0-9]/.test(password) ? 'text-emerald-600' : 'text-slate-400'}`}>
                    {/[0-9]/.test(password) ? <Check size={10} /> : <div className="w-2.5 h-2.5 rounded-full border border-slate-300" />}
                    Number
                  </div>
                  <div className={`flex items-center gap-1.5 text-[10px] ${/[^A-Za-z0-9]/.test(password) ? 'text-emerald-600' : 'text-slate-400'}`}>
                    {/[^A-Za-z0-9]/.test(password) ? <Check size={10} /> : <div className="w-2.5 h-2.5 rounded-full border border-slate-300" />}
                    Special char
                  </div>
                </div>
              </div>
            )}
          </div>

          <button 
            onClick={onSignup}
            className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
          >
            Create Account
            <ArrowRight size={18} />
          </button>
        </div>

        <p className="text-center text-sm text-slate-600">
          Already have an account?{' '}
          <button onClick={onSwitchToLogin} className="font-bold text-indigo-600 hover:text-indigo-700">Sign in</button>
        </p>

        <p className="text-[10px] text-center text-slate-400 leading-relaxed">
          By creating an account, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}

function ZapIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14.5 14 3v9.5h6L10 21V11.5H4z"/>
    </svg>
  );
}

function MicrosoftIcon({ size, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 23 23" fill="currentColor" className={className}>
      <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
    </svg>
  );
}
