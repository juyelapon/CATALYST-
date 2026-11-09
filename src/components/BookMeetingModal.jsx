import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle } from 'lucide-react';

export default function BookMeetingModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState('Today, Nov 3');
  const [selectedTime, setSelectedTime] = useState('02:00 PM CST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const dates = [
    'Today, Nov 3',
    'Tomorrow, Nov 4',
    'Wed, Nov 5',
    'Thu, Nov 6',
  ];

  const times = [
    '10:00 AM CST',
    '11:30 AM CST',
    '02:00 PM CST',
    '04:00 PM CST',
    '05:30 PM CST',
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
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

        {!confirmed ? (
          <>
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-[#0084FF]">
                Free 30-Min Consultation
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">Book a Strategy Session</h3>
              <p className="text-gray-400 text-xs mt-1">
                Meet directly with a Catalyst Analytics senior data scientist or technical architect.
              </p>
            </div>

            <form onSubmit={handleBooking} className="space-y-4">
              {/* Date selection */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-2 flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#0084FF]" /> Select Date
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {dates.map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`text-xs py-2 px-3 rounded-xl border text-center transition ${
                        selectedDate === d
                          ? 'border-[#0084FF] bg-[#0084FF]/15 text-white font-medium'
                          : 'border-[#202534] bg-[#141722] text-gray-400 hover:text-white'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time selection */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-2 flex items-center gap-1.5">
                  <Clock size={14} className="text-[#0084FF]" /> Select Time Slot
                </label>
                <div className="flex flex-wrap gap-2">
                  {times.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`text-xs py-1.5 px-3 rounded-xl border transition ${
                        selectedTime === t
                          ? 'border-[#0084FF] bg-[#0084FF]/20 text-[#0084FF] font-semibold'
                          : 'border-[#202534] bg-[#141722] text-gray-400 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#141722] border border-[#222838] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#0084FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Corporate Email *</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#141722] border border-[#222838] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#0084FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Project Focus (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Predictive Sales Forecasting / Data Lake Migration"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#141722] border border-[#222838] rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[#0084FF]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#0084FF] hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition shadow-[0_0_15px_rgba(0,132,255,0.3)]"
                >
                  Confirm Meeting ({selectedTime})
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Meeting Confirmed!</h3>
            <p className="text-gray-300 text-sm max-w-sm mx-auto mb-2">
              We have reserved <span className="text-[#0084FF] font-semibold">{selectedTime} on {selectedDate}</span>.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              A Google Meet invitation has been sent to <span className="text-white">{email}</span>.
            </p>
            <button
              onClick={() => {
                setConfirmed(false);
                onClose();
              }}
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
