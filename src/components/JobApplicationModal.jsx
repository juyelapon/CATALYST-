import React, { useState } from 'react';
import { X, CheckCircle, UploadCloud, AlertCircle } from 'lucide-react';

export default function JobApplicationModal({ job, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    coverNote: '',
    fileName: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!job) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      setError('Please provide your full name and email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#0e1118] border border-[#232938] rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#181c26] text-gray-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-[#0084FF]">
                Application Form
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{job.title}</h3>
              <p className="text-gray-400 text-xs mt-1">
                {job.salary} • {job.experience} • Deadline: {job.deadline}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-950/60 border border-red-800 text-red-200 text-xs rounded-xl flex items-center gap-2">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#141722] border border-[#222838] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#0084FF] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#141722] border border-[#222838] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#0084FF] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#141722] border border-[#222838] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#0084FF] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Portfolio or LinkedIn URL</label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/username"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="w-full bg-[#141722] border border-[#222838] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#0084FF] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Resume / CV (PDF or DOC)</label>
                <label className="w-full border-2 border-dashed border-[#23293b] hover:border-[#0084FF] rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition bg-[#131620]">
                  <UploadCloud size={24} className="text-[#0084FF] mb-1" />
                  <span className="text-xs text-gray-300">
                    {formData.fileName || 'Click to upload your resume'}
                  </span>
                  <span className="text-[10px] text-gray-500 mt-0.5">Maximum size 10MB</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Why are you interested in this role?</label>
                <textarea
                  rows={3}
                  placeholder="Brief note about your background..."
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  className="w-full bg-[#141722] border border-[#222838] rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[#0084FF] transition"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#0084FF] hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition shadow-[0_0_15px_rgba(0,132,255,0.3)] active:scale-98"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
            <p className="text-gray-300 text-sm max-w-sm mx-auto mb-6">
              Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Our recruitment team has received your submission for <span className="text-[#0084FF]">{job.title}</span> and will review it promptly.
            </p>
            <button
              onClick={onClose}
              className="bg-[#0084FF] hover:bg-blue-600 text-white text-xs font-semibold px-8 py-3 rounded-full transition"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
