import React from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#0e1118] border border-[#232938] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#181c26] text-gray-400 hover:text-white hover:bg-gray-700 flex items-center justify-center transition-colors"
        >
          <X size={18} />
        </button>

        {/* Project Header Image */}
        {project.image && (
          <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 bg-[#161a24] relative border border-[#202737]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-[#0084FF] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
              {project.category || "Case Study"}
            </div>
          </div>
        )}

        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {project.fullDescription || project.description}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#141722] border border-[#202535] mb-6 text-center">
          <div>
            <div className="text-xl font-extrabold text-[#0084FF]">99.8%</div>
            <div className="text-[11px] text-gray-400 mt-0.5">Model Accuracy</div>
          </div>
          <div className="border-x border-[#23283a]">
            <div className="text-xl font-extrabold text-white">4.2x</div>
            <div className="text-[11px] text-gray-400 mt-0.5">Throughput Increase</div>
          </div>
          <div>
            <div className="text-xl font-extrabold text-emerald-400">-65%</div>
            <div className="text-[11px] text-gray-400 mt-0.5">Latency Reduction</div>
          </div>
        </div>

        {/* Key Deliverables */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Key Deliverables</h4>
          <ul className="space-y-2">
            {(project.bullets || [
              "Custom deep learning architecture tailored for large scale throughput",
              "Automated data cleaning and real-time ingestion pipelines",
              "Seamless integration with cloud infrastructure and enterprise databases",
              "Role-based access control and strict zero-trust data compliance"
            ]).map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                <CheckCircle size={15} className="text-[#0084FF] flex-shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1d2230]">
          <span className="text-xs text-gray-400">Deployed in Production</span>
          <button
            onClick={onClose}
            className="bg-[#0084FF] hover:bg-blue-600 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-all flex items-center gap-1.5"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
