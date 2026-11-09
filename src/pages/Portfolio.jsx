import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, RotateCw, ChevronDown } from 'lucide-react';
import WireframeOverlay from '../components/WireframeOverlay';
import CaseStudyModal from '../components/CaseStudyModal';

// Extracted assets
import dashHero from '../assets/extracted/portfolio_dash.png';
import caseAiHand from '../assets/extracted/case_ai_hand.png';
import caseBlockchain from '../assets/extracted/case_blockchain.png';
import caseStocks from '../assets/extracted/case_stocks.png';
import caseDataHolding from '../assets/extracted/case_data_holding.png';
import caseWorkstation from '../assets/extracted/case_workstation.png';
import caseDatacenter from '../assets/extracted/case_datacenter.png';

const initialProjects = [
  {
    id: "p1",
    title: "MachineLearningProject",
    category: "Machine Learning",
    secondary: "Neural Networks",
    image: caseAiHand,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    bullets: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text"
    ],
    fullDescription: "An advanced computer vision and neural reinforcement model deployed across automated robotic assembly lines. Achieved a 99.4% defect detection rate with zero pipeline halting."
  },
  {
    id: "p2",
    title: "ProjectLoremIpsum",
    category: "Blockchain",
    secondary: "Smart Contracts",
    image: caseBlockchain,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    bullets: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text"
    ],
    fullDescription: "Decentralized cryptographic ledger protocol developed for institutional asset settlement, providing sub-second finality and multi-party threshold signatures."
  },
  {
    id: "p3",
    title: "ProjectLoremIpsum",
    category: "Data Engineering",
    secondary: "Algorithmic Trading",
    image: caseStocks,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    bullets: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text"
    ],
    fullDescription: "High-frequency market microstructure forecasting engine processing 2.5 million order-book events per second to generate real-time predictive spreads."
  },
  {
    id: "p4",
    title: "ProjectLoremIpsum",
    category: "Data Engineering",
    secondary: "Cloud Architecture",
    image: caseDataHolding,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    bullets: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text"
    ],
    fullDescription: "Unified enterprise data lakehouse migrating petabytes of fragmented customer records into real-time analytical partitions with zero down-time."
  },
  {
    id: "p5",
    title: "ProjectLoremIpsum",
    category: "Machine Learning",
    secondary: "Predictive Analytics",
    image: caseWorkstation,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    bullets: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text"
    ],
    fullDescription: "Predictive resource allocation platform for multi-regional healthcare providers, reducing ICU patient wait times by 38% through triage queuing models."
  },
  {
    id: "p6",
    title: "ProjectLoremIpsum",
    category: "Data Engineering",
    secondary: "Infrastructure",
    image: caseDatacenter,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    bullets: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text"
    ],
    fullDescription: "Hardened zero-trust edge infrastructure orchestrating 450+ microservices with automated load balancing and automated blue-green deployments."
  },
  {
    id: "p7",
    title: "DeepQuant Arbitrage Engine",
    category: "Machine Learning",
    secondary: "Algorithmic Trading",
    image: caseStocks,
    description: "Predictive arbitrage engine utilizing spatial-temporal deep learning across global cross-asset decentralized exchanges.",
    bullets: [
      "Microsecond order generation",
      "Multi-venue routing",
      "Zero slippage modeling",
      "Autonomous risk hedging",
      "Comprehensive telemetry"
    ],
    fullDescription: "Engineered for institutional liquidity providers, this automated system captures cross-venue price dislocations with minimal exposure windows."
  },
  {
    id: "p8",
    title: "Autonomous Logistics AI",
    category: "Data Engineering",
    secondary: "Neural Networks",
    image: caseAiHand,
    description: "End-to-end multi-modal routing system powering fleet operations for enterprise shipping distributors.",
    bullets: [
      "Dynamic fuel optimization",
      "Weather pattern forecasting",
      "Real-time telematics ingestion",
      "Automated dispatching",
      "Driver safety analytics"
    ],
    fullDescription: "Deployed across 12,000 transit vehicles, reducing annual logistics overhead by $14.2M through dynamic route recalculation."
  }
];

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSecondary, setSelectedSecondary] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter logic
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === 'All' || 
        project.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSecondary = 
        selectedSecondary === 'All' || 
        project.secondary.toLowerCase() === selectedSecondary.toLowerCase();

      return matchesSearch && matchesCategory && matchesSecondary;
    });
  }, [searchQuery, selectedCategory, selectedSecondary]);

  const handleClearAll = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedSecondary('All');
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(initialProjects.length);
      setIsLoadingMore(false);
    }, 600);
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
                Our Work, Your Future
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl">
                From machine learning platforms to blockchain and predictive analytics tools, here's a selection of real-world solutions we've delivered for forward-thinking companies.
              </p>
            </div>

            {/* Right 3D illustration */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-52 sm:w-64 lg:w-72 aspect-[4/3] flex items-center justify-center">
                <img
                  src={dashHero}
                  alt="Portfolio 3D Dashboard"
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,132,255,0.3)] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. CASE STUDIES SECTION */}
        <section className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Our Case Studies
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
          </p>

          {/* Filter Bar matching Figma: Search input + Machine Learning dropdown + Data Engineering dropdown + Clear All button */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14 max-w-4xl mx-auto">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[240px] max-w-xs">
              <input
                type="text"
                placeholder="Search by keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0d1017] border border-[#1e2330] rounded-full pl-5 pr-11 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#0084FF] transition"
              />
              <button 
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0084FF] text-white flex items-center justify-center hover:bg-blue-600 transition"
                aria-label="Search"
              >
                <Search size={14} />
              </button>
            </div>

            {/* Machine Learning Dropdown */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-[#0d1017] border border-[#1e2330] rounded-full px-5 py-2.5 pr-9 text-xs text-gray-300 font-medium hover:border-[#2a3449] focus:outline-none focus:border-[#0084FF] cursor-pointer transition"
              >
                <option value="All">All Categories</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Blockchain">Blockchain</option>
                <option value="Data Engineering">Data Engineering</option>
              </select>
              <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Data Engineering Dropdown */}
            <div className="relative">
              <select
                value={selectedSecondary}
                onChange={(e) => setSelectedSecondary(e.target.value)}
                className="appearance-none bg-[#0d1017] border border-[#1e2330] rounded-full px-5 py-2.5 pr-9 text-xs text-gray-300 font-medium hover:border-[#2a3449] focus:outline-none focus:border-[#0084FF] cursor-pointer transition"
              >
                <option value="All">Data Engineering ▼</option>
                <option value="Neural Networks">Neural Networks</option>
                <option value="Smart Contracts">Smart Contracts</option>
                <option value="Algorithmic Trading">Algorithmic Trading</option>
                <option value="Cloud Architecture">Cloud Architecture</option>
                <option value="Predictive Analytics">Predictive Analytics</option>
                <option value="Infrastructure">Infrastructure</option>
              </select>
              <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Clear All button */}
            <button
              onClick={handleClearAll}
              className="bg-[#0084FF] hover:bg-blue-600 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition shadow-[0_0_12px_rgba(0,132,255,0.3)] active:scale-95 cursor-pointer"
            >
              Clear All
            </button>
          </div>

          {/* 2-Column Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {filteredProjects.slice(0, visibleCount).map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedProject(item)}
                className="bg-[#0e1017] border border-[#1b202c] hover:border-blue-500/50 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 cursor-pointer shadow-lg"
              >
                <div>
                  {/* Preview Image */}
                  <div className="w-full h-52 sm:h-60 rounded-2xl overflow-hidden mb-6 bg-[#131620] relative border border-[#1e2433]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0a0c12]/80 backdrop-blur-sm border border-[#23293a] text-gray-300 text-[10px] font-semibold px-3 py-1 rounded-full">
                      {item.category}
                    </div>
                  </div>

                  {/* Title & Arrow button */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#0084FF] transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-[#0084FF] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 shadow-[0_0_12px_rgba(0,132,255,0.4)] transition">
                      <ArrowRight size={17} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* 2 columns of bullet points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-2">
                    {item.bullets.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF] flex-shrink-0" />
                        <span className="truncate">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-[#0c0e14] border border-[#1b202c] rounded-3xl p-8">
              <p className="text-gray-400 text-sm mb-4">No case studies match your search criteria.</p>
              <button
                onClick={handleClearAll}
                className="bg-[#0084FF] hover:bg-blue-600 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Loading indicator / Load More button at bottom */}
          <div className="mt-14 flex justify-center">
            {visibleCount < initialProjects.length ? (
              <button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-xs sm:text-sm font-medium py-2.5 px-6 rounded-full bg-[#0e1017] border border-[#1e2330] hover:border-[#0084FF] transition cursor-pointer"
              >
                <RotateCw size={15} className={isLoadingMore ? "animate-spin text-[#0084FF]" : "text-[#0084FF]"} />
                <span>{isLoadingMore ? "Loading..." : "Load More Case Studies"}</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <RotateCw size={14} className="text-gray-600" />
                <span>All case studies loaded</span>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Case Study Details Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
