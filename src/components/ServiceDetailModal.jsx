import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceDetailModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#0e1118] border border-[#232938] rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#181c26] text-gray-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-4 mb-4">
          {item.icon && (
            <div className="w-14 h-14 rounded-2xl bg-[#141824] border border-[#212737] flex items-center justify-center p-2">
              <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
            </div>
          )}
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#0084FF]">
              {item.type === 'industry' ? 'Industry Specialization' : 'Core Service'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{item.title}</h3>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {item.longDescription || item.description || "Our advanced technical capabilities deliver production-ready software architectures with robust resilience, enterprise security, and continuous algorithmic optimization."}
        </p>

        {/* Deliverables list */}
        <div className="mb-6 bg-[#131620] border border-[#202534] rounded-2xl p-4">
          <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
            Core Technical Capabilities
          </h4>
          <ul className="space-y-2.5">
            {(item.features || item.bullets || [
              "Production deployment pipeline with 99.99% uptime guarantees",
              "Customized mathematical models tailored to domain constraints",
              "Sub-millisecond inference and high-concurrency ingestion",
              "Comprehensive API endpoints and enterprise cloud integrations"
            ]).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                <CheckCircle2 size={16} className="text-[#0084FF] flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1d2230]">
          <Link
            to="/contact"
            onClick={onClose}
            className="text-xs font-semibold text-[#0084FF] hover:underline flex items-center gap-1"
          >
            Request proposal for this <ArrowRight size={14} />
          </Link>
          <button
            onClick={onClose}
            className="bg-[#0084FF] hover:bg-blue-600 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
