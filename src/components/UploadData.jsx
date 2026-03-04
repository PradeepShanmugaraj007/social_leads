import React, { useState } from 'react';
import { Upload as UploadIcon, FileText, CheckCircle2, AlertCircle, X, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function UploadData() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.name.endsWith('.xlsx') || droppedFile.name.endsWith('.xls') || droppedFile.name.endsWith('.csv'))) {
      simulateUpload(droppedFile);
    }
  };

  const simulateUpload = (selectedFile) => {
    setFile(selectedFile);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 85) {
          clearInterval(interval);
          return 85;
        }
        return prev + 5;
      });
    }, 100);
  };

  const previewData = [
    { keyword: 'SaaS Founders', name: 'Alex Rivera', company: 'CloudSync', email: 'alex@cloudsync.io', url: 'linkedin.com/in/arivera' },
    { keyword: 'Marketing Dir', name: 'Sarah Jenkins', company: 'Velo Growth', email: 's.jenkins@velo.com', url: 'linkedin.com/in/sjenks' },
    { keyword: 'CTO', name: 'Michael Chen', company: 'DevFlow', email: 'm.chen@devflow.tech', url: 'linkedin.com/in/mchen-dev' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-display font-bold text-slate-900">Upload Leads Data</h1>
        <p className="text-slate-500">Import your scraped Excel files to enrich leads with social intelligence and outreach sequences.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Upload Area */}
        <div 
          className={cn(
            "p-12 border-2 border-dashed m-6 rounded-xl transition-all flex flex-col items-center justify-center text-center space-y-4",
            isDragging ? "border-indigo-500 bg-indigo-50" : "border-slate-200 bg-slate-50",
            file ? "py-8" : "py-16"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
            <UploadIcon size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Click or drag Excel file here</h3>
            <p className="text-sm text-slate-500">Support files: .xlsx, .xls, .csv up to 50MB</p>
          </div>
          <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            Select File
          </button>
        </div>

        {/* File Progress */}
        {file && (
          <div className="px-6 pb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <FileText className="text-indigo-600" size={20} />
                <span className="text-sm font-medium text-slate-700">{file.name}</span>
                <span className="text-xs text-slate-400">{(file.size / (1024 * 1024)).toFixed(1)} MB</span>
              </div>
              <span className="text-sm font-bold text-indigo-600">{uploadProgress}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 transition-all duration-300" 
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Preview Table */}
        <div className="border-t border-slate-100">
          <div className="px-6 py-4 bg-slate-50 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">FILE PREVIEW</span>
            <span className="text-xs font-medium bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">502 Rows Found</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="px-6 py-3 font-semibold text-slate-600">Keyword</th>
                  <th className="px-6 py-3 font-semibold text-slate-600">Name</th>
                  <th className="px-6 py-3 font-semibold text-slate-600">Company</th>
                  <th className="px-6 py-3 font-semibold text-slate-600">Email</th>
                  <th className="px-6 py-3 font-semibold text-slate-600">Social URL</th>
                </tr>
              </thead>
              <tbody>
                {previewData.map((row, i) => (
                  <tr key={i} className="border-b border-slate-50 last:border-0">
                    <td className="px-6 py-4 text-slate-600">{row.keyword}</td>
                    <td className="px-6 py-4 font-medium text-slate-900">{row.name}</td>
                    <td className="px-6 py-4 text-slate-600">{row.company}</td>
                    <td className="px-6 py-4 text-slate-600">{row.email}</td>
                    <td className="px-6 py-4 text-indigo-600 hover:underline cursor-pointer">{row.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Required Columns */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-900">Required Columns</h3>
          <p className="text-sm text-slate-500 max-w-md">Our AI processor requires these headers to correctly map your leads for the scraping intelligence engine.</p>
          <div className="flex flex-wrap gap-2">
            <ColumnBadge label="Keyword" active />
            <ColumnBadge label="Name" active />
            <ColumnBadge label="Company" active />
            <ColumnBadge label="Email" active />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            Cancel Upload
          </button>
          <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2">
            Process Data & Launch AI
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ColumnBadge({ label, active }) {
  return (
    <div className={cn(
      "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
      active ? "bg-indigo-50 text-indigo-700 border border-indigo-100" : "bg-slate-100 text-slate-400 border border-slate-200"
    )}>
      <div className={cn("w-1.5 h-1.5 rounded-full", active ? "bg-indigo-500" : "bg-slate-300")} />
      {label}
    </div>
  );
}
