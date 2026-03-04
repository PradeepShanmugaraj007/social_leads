import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Github, Chrome, AlertCircle, Eye, EyeOff } from 'lucide-react';

export default function Login({ onLogin, onSwitchToSignup }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError('Email is required');
      return false;
    } else if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError('Password is required');
      return false;
    } else if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError) {
      validateEmail(value);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (passwordError) {
      validatePassword(value);
    }
  };

  const handleLogin = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    
    if (isEmailValid && isPasswordValid) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
        <div className="text-center">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-indigo-200">
            <ZapIcon size={24} />
          </div>
          <h2 className="text-3xl font-display font-bold text-slate-900">Welcome back</h2>
          <p className="text-slate-500 mt-2">Enter your details to access your dashboard</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="email" 
                value={email}
                onChange={handleEmailChange}
                onBlur={() => validateEmail(email)}
                placeholder="name@company.com"
                className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm focus:ring-2 outline-none transition-all ${
                  emailError 
                    ? 'border-rose-500 focus:ring-rose-500/20' 
                    : 'border-slate-200 focus:ring-indigo-500/20'
                }`}
              />
            </div>
            {emailError && (
              <div className="flex items-center gap-1.5 text-rose-500 text-xs font-medium mt-1">
                <AlertCircle size={14} />
                {emailError}
              </div>
            )}
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
              <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700">Forgot password?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                onBlur={() => validatePassword(password)}
                placeholder="••••••••"
                className={`w-full pl-10 pr-12 py-3 bg-slate-50 border rounded-xl text-sm focus:ring-2 outline-none transition-all ${
                  passwordError 
                    ? 'border-rose-500 focus:ring-rose-500/20' 
                    : 'border-slate-200 focus:ring-indigo-500/20'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {passwordError && (
              <div className="flex items-center gap-1.5 text-rose-500 text-xs font-medium mt-1">
                <AlertCircle size={14} />
                {passwordError}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
            <label htmlFor="remember" className="text-sm text-slate-600">Keep me signed in</label>
          </div>

          <button 
            onClick={handleLogin}
            className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
          >
            Sign In
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-slate-400 font-bold">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
            <Chrome size={18} className="text-rose-500" />
            Google
          </button>
          <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
            <LinkedinIcon size={18} className="text-blue-600" />
            LinkedIn
          </button>
        </div>

        <p className="text-center text-sm text-slate-600">
          Don't have an account?{' '}
          <button onClick={onSwitchToSignup} className="font-bold text-indigo-600 hover:text-indigo-700">Sign up for free</button>
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

function LinkedinIcon({ size, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
