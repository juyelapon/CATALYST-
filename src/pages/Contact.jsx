import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  ChevronDown 
} from 'lucide-react';
import WireframeOverlay from '../components/WireframeOverlay';
import BookMeetingModal from '../components/BookMeetingModal';

// Extracted asset
import chatBubblesHero from '../assets/extracted/contact_bubbles.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    countryCode: '+1',
    phoneNumber: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);
  const [error, setError] = useState('');

  const countryCodes = [
    { code: '+1', flag: '🇺🇸', name: 'US/CA' },
    { code: '+44', flag: '🇬🇧', name: 'UK' },
    { code: '+49', flag: '🇩🇪', name: 'DE' },
    { code: '+33', flag: '🇫🇷', name: 'FR' },
    { code: '+880', flag: '🇧🇩', name: 'BD' },
    { code: '+91', flag: '🇮🇳', name: 'IN' },
    { code: '+81', flag: '🇯🇵', name: 'JP' },
    { code: '+61', flag: '🇦🇺', name: 'AU' },
    { code: '+65', flag: '🇸🇬', name: 'SG' },
    { code: '+971', flag: '🇦🇪', name: 'UAE' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      setError('Please fill in your first name, email, and message.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050608] text-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* 1. HERO BANNER */}
        <div className="relative rounded-3xl bg-[#0c0e14] border border-[#1b202c] p-8 sm:p-12 lg:p-16 mb-20 overflow-hidden">
          <WireframeOverlay />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left text */}
            <div className="lg:col-span-8 text-left space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Contact Us
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl">
                Get in touch with our team to discuss how we can help transform your business. We're here to help.
              </p>
              <div className="pt-2">
                <button
                  onClick={scrollToForm}
                  className="bg-[#0084FF] hover:bg-[#0074e0] text-white font-medium text-xs sm:text-sm px-7 py-3 rounded-xl transition shadow-[0_0_15px_rgba(0,132,255,0.35)] cursor-pointer"
                >
                  Get In Touch Now
                </button>
              </div>
            </div>

            {/* Right 3D illustration */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-56 sm:w-64 lg:w-72 aspect-[4/3] flex items-center justify-center">
                <img
                  src={chatBubblesHero}
                  alt="3D Chat Bubbles"
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,132,255,0.35)] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. MAIN SECTION: 2 COLUMNS */}
        <div id="contact-form-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {/* Left Column: Send Us a Message Form */}
          <div className="lg:col-span-7 bg-[#0e1017] border border-[#1b202c] rounded-3xl p-7 sm:p-10 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Send Us a Message
            </h2>

            {error && (
              <div className="mb-4 p-3 bg-red-950/60 border border-red-800 text-red-200 text-xs rounded-xl flex items-center gap-2">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-[#131620] border border-[#212737] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0084FF] transition"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-[#131620] border border-[#212737] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0084FF] transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#131620] border border-[#212737] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0084FF] transition"
                  />
                </div>

                {/* Company */}
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#131620] border border-[#212737] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0084FF] transition"
                  />
                </div>

                {/* Phone Number with Country Code Dropdown */}
                <div className="flex rounded-xl overflow-hidden bg-[#131620] border border-[#212737] focus-within:border-[#0084FF] transition">
                  <div className="relative flex items-center bg-[#171b26] border-r border-[#212737] px-3">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="appearance-none bg-transparent text-xs text-white pr-5 py-3 focus:outline-none cursor-pointer"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code} className="bg-[#131620] text-white">
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="flex-1 bg-transparent px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={5}
                    required
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#131620] border border-[#212737] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0084FF] transition"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#0084FF] hover:bg-[#0074e0] text-white text-xs sm:text-sm font-semibold py-3.5 rounded-xl transition shadow-[0_0_15px_rgba(0,132,255,0.3)] flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                  >
                    <span>Send</span>
                    <Send size={15} />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300 text-sm max-w-sm mx-auto mb-6">
                  Thank you, <span className="text-white font-semibold">{formData.firstName}</span>. Your message has been routed to our technical advisory team. We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      company: '',
                      countryCode: '+1',
                      phoneNumber: '',
                      message: '',
                    });
                  }}
                  className="bg-[#0084FF] hover:bg-blue-600 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Right Column: 2 Stacked Cards */}
          <div className="lg:col-span-5 space-y-8">
            {/* Box 1: Contact Information */}
            <div className="bg-[#0e1017] border border-[#1b202c] rounded-3xl p-7 sm:p-8 shadow-lg space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#141824] border border-[#212737] flex items-center justify-center text-[#0084FF] flex-shrink-0 mt-0.5">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Email</div>
                  <a
                    href="mailto:contact@catalystanalytics.io"
                    className="text-xs text-gray-400 hover:text-[#0084FF] transition-colors"
                  >
                    contact@catalystanalytics.io
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#141824] border border-[#212737] flex items-center justify-center text-[#0084FF] flex-shrink-0 mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Phone</div>
                  <a
                    href="tel:+14697124672"
                    className="text-xs text-gray-400 hover:text-[#0084FF] transition-colors"
                  >
                    (469) 712-4672
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#141824] border border-[#212737] flex items-center justify-center text-[#0084FF] flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Office</div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    5511 Parkcrest Dr, Suite 103 <br />
                    Austin, TX 78731 <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2: Consultation / Meeting Information */}
            <div className="bg-[#0e1017] border border-[#1b202c] rounded-3xl p-7 sm:p-8 shadow-lg space-y-5">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Want to discuss your project in detail? Schedule a free 30-minute consultation with our team of experts. We'll help you understand how our solutions can benefit your business.
              </p>
              <div>
                <button
                  onClick={() => setIsMeetingOpen(true)}
                  className="w-full bg-[#0084FF] hover:bg-[#0074e0] text-white text-xs sm:text-sm font-semibold py-3.5 rounded-xl transition shadow-[0_0_15px_rgba(0,132,255,0.3)] active:scale-98 cursor-pointer"
                >
                  Book a Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Meeting Modal */}
      <BookMeetingModal
        isOpen={isMeetingOpen}
        onClose={() => setIsMeetingOpen(false)}
      />
    </div>
  );
}
