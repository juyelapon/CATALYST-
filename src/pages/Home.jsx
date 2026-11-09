import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  X, 
  Check
} from 'lucide-react';
import BookMeetingModal from '../components/BookMeetingModal';

// High-Res Assets provided by user
import heroRobotHq from '../assets/home/hero_robot_hq.png';
import dotGrid from '../assets/home/dot_grid.png';

// 3D Service Icons provided by user
import pieChart3D from '../assets/home/pie_chart_3d.png';
import aiConsulting3D from '../assets/home/ai_consulting_3d.png';
import serverStack3D from '../assets/home/server_stack_3d.png';

export default function Home() {
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0); // 0 is open by default like in Figma design
  const [sliderIndex, setSliderIndex] = useState(0);

  // Testimonials
  const testimonials = [
    {
      quote: "Catalyst Analytics revolutionized how we look at data. Our revenue forecasting accuracy improved by 40% in just two months.",
      author: "Jonathan Vance",
      role: "VP of Growth, HyperScale"
    },
    {
      quote: "Their machine learning models transformed our fraud detection system. We've eliminated millions in potential losses.",
      author: "Sarah Jenkins",
      role: "CTO at FinEdge Global"
    },
    {
      quote: "Partnering with Catalyst Analytics was one of our best strategic decisions. Highly recommended for any scaling tech company.",
      author: "David Miller",
      role: "Head of AI, CloudSphere"
    },
    {
      quote: "The automated pipelines engineered by their team cut down our data ingestion latency from 45 minutes to sub-second real-time.",
      author: "Elena Rostova",
      role: "Chief Data Architect, NexaLogic"
    }
  ];

  const handlePrevTestimonial = () => {
    setSliderIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setSliderIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
  };

  // FAQs matching Figma image
  const faqs = [
    {
      id: "01",
      question: "What services does Catalyst Analytics provide?",
      answer: "Catalyst Analytics provides a comprehensive suite of digital analytics, machine learning solutions, custom software engineering, and infrastructure consulting designed to help businesses scale effectively with data-driven precision."
    },
    {
      id: "02",
      question: "How do your machine learning algorithms ensure data privacy?",
      answer: "We employ strict zero-knowledge encryption, differential privacy techniques, and containerized private VPC deployments. Client data never leaves your accredited cloud boundary and is never used to train public foundational models."
    },
    {
      id: "03",
      question: "What is the typical timeframe for project implementation?",
      answer: "Our standard proof-of-concept (PoC) model is delivered within 3-4 weeks. Full enterprise production rollouts, including ETL pipelines and model hardening, typically range between 8 to 12 weeks."
    },
    {
      id: "04",
      question: "Can your solutions integrate with our existing legacy systems?",
      answer: "Yes. Our engineering protocols specialize in legacy bridge architectures, robust REST/GraphQL APIs, Kafka streaming queues, and hybrid data connectors that operate concurrently with your current software stack."
    },
    {
      id: "05",
      question: "What kind of ongoing support and maintenance do you offer?",
      answer: "We provide 24/7 proactive telemetry monitoring, automated drift detection for production models, continuous retraining pipelines, and guaranteed SLA response times under 15 minutes for mission-critical services."
    }
  ];

  // Why Choose Us cards matching user's newest uploaded image
  const whyChooseUsData = [
    {
      title: "Innovation",
      description: "Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions."
    },
    {
      title: "Collaboration",
      description: "Working closely with clients to develop tailored solutions that drive measurable success."
    },
    {
      title: "Excellence",
      description: "Maintaining the highest standards in code quality, system performance, and client outcomes."
    },
    {
      title: "Integrity",
      description: "Operating with transparency and ethical considerations at the forefront of all decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050608] text-white overflow-hidden pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline, Subtext, CTA, Rating */}
            <div className="lg:col-span-7 text-left space-y-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                Transforming Data <br />
                into{' '}
                <span className="inline-block bg-[#0084FF] text-white px-5 py-1 rounded-2xl shadow-[0_0_25px_rgba(0,132,255,0.5)]">
                  Decisions
                </span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
                Leverage advanced analytics and machine learning to build scalable solutions that propel your business forward.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setIsMeetingOpen(true)}
                  className="bg-[#0084FF] hover:bg-[#0073e6] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(0,132,255,0.4)] hover:shadow-[0_0_25px_rgba(0,132,255,0.6)] active:scale-95 cursor-pointer"
                >
                  Book a Meeting
                </button>
              </div>

              {/* Social Proof Trust Avatars */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#181d28]/70 max-w-md">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#050608] object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Client"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#050608] object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="Client"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#050608] object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                    alt="Client"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#050608] object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                    alt="Client"
                  />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-emerald-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">
                    Over <span className="text-white font-semibold">500+</span> Businesses Trust Us
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Robot Mascot inside Dark Card with Glow & Dot Grid */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-80 sm:w-96 lg:w-[420px] aspect-square flex items-center justify-center">
                {/* Radial Blue Glow Backdrop from user asset */}
                <div 
                  className="absolute inset-0 scale-125 opacity-70 pointer-events-none rounded-full blur-2xl"
                  style={{
                    backgroundImage: `radial-gradient(circle at center, rgba(0, 110, 255, 0.45) 0%, rgba(5, 20, 50, 0.2) 50%, transparent 75%)`
                  }}
                />
                
                {/* Dark card with subtle border & dot grid texture */}
                <div className="relative z-10 w-full h-full rounded-3xl bg-[#090b10] border border-[#1b2230] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-center p-6">
                  {/* Dot Grid overlay */}
                  <div 
                    className="absolute inset-0 opacity-15 pointer-events-none bg-repeat"
                    style={{
                      backgroundImage: `url(${dotGrid})`,
                      backgroundSize: '24px 24px'
                    }}
                  />

                  {/* 3D High-Res Robot Mascot */}
                  <img
                    src={heroRobotHq}
                    alt="Catalyst Analytics 3D AI Robot"
                    className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(0,132,255,0.4)] hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND LOGOS ROW */}
      <section className="py-12 border-y border-[#161a24] bg-[#07090e]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 sm:gap-12 opacity-65 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Zapier */}
            <div className="flex items-center gap-1.5 font-bold tracking-tight text-xl text-gray-300">
              <span className="text-orange-500 text-2xl font-black">_</span>zapier
            </div>
            {/* Spotify */}
            <div className="flex items-center gap-1.5 font-bold tracking-tight text-xl text-gray-300">
              <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-black font-extrabold text-[10px]">((</div>
              Spotify
            </div>
            {/* Zoom */}
            <div className="text-2xl font-black tracking-tight text-[#2D8CFF]">
              zoom
            </div>
            {/* Slack */}
            <div className="flex items-center gap-1.5 font-bold tracking-tight text-xl text-gray-300">
              <span className="text-[#E01E5A] font-extrabold text-2xl">#</span>slack
            </div>
            {/* Amazon */}
            <div className="text-2xl font-bold tracking-tight text-gray-300">
              amazon<span className="text-orange-400">.</span>
            </div>
            {/* Adobe */}
            <div className="flex items-center gap-2 font-bold tracking-tight text-xl text-gray-300">
              <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center font-black text-white text-xs">A</div>
              Adobe
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR ULTIMATE SET OF SERVICES — with exact new padding & images */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-14 max-w-2xl mx-auto leading-snug">
            Our Ultimate Set of Services for Your Ideas Implementation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Predictive Analytics */}
            <div className="bg-[#121316] border border-[#1e212b] hover:border-blue-500/50 rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 group hover:-translate-y-1.5 shadow-xl relative overflow-hidden">
              {/* Dot grid in corner */}
              <div 
                className="absolute top-2 left-2 w-20 h-20 opacity-10 pointer-events-none bg-repeat"
                style={{ backgroundImage: `url(${dotGrid})`, backgroundSize: '16px 16px' }}
              />

              <div className="w-48 h-48 mb-8 flex items-center justify-center relative">
                <img
                  src={pieChart3D}
                  alt="Predictive Analytics"
                  className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,132,255,0.2)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#0084FF] transition-colors">
                Predictive Analytics
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                Forecast trends and make data-driven decisions with our advanced ML models.
              </p>
            </div>

            {/* Card 2: AI Consulting */}
            <div className="bg-[#121316] border border-[#1e212b] hover:border-blue-500/50 rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 group hover:-translate-y-1.5 shadow-xl relative overflow-hidden">
              <div className="w-48 h-48 mb-8 flex items-center justify-center relative">
                <img
                  src={aiConsulting3D}
                  alt="AI Consulting"
                  className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,132,255,0.2)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#0084FF] transition-colors">
                AI Consulting
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                Expert guidance on implementing AI solutions for your business needs.
              </p>
            </div>

            {/* Card 3: Data Engineering */}
            <div className="bg-[#121316] border border-[#1e212b] hover:border-blue-500/50 rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 group hover:-translate-y-1.5 shadow-xl relative overflow-hidden">
              {/* Dot grid in corner */}
              <div 
                className="absolute bottom-2 right-2 w-20 h-20 opacity-10 pointer-events-none bg-repeat"
                style={{ backgroundImage: `url(${dotGrid})`, backgroundSize: '16px 16px' }}
              />

              <div className="w-48 h-48 mb-8 flex items-center justify-center relative">
                <img
                  src={serverStack3D}
                  alt="Data Engineering"
                  className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,132,255,0.2)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#0084FF] transition-colors">
                Data Engineering
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                Build robust data pipelines and infrastructure for ML operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US — Overlapping Circular Badges matching Figma screenshot */}
      <section className="py-24 bg-[#050608]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-16">
            Why Choose Us
          </h2>

          {/* Overlapping or Flex Circular Discs matching the exact Figma graphic */}
          <div className="flex flex-wrap items-center justify-center -space-x-0 sm:-space-x-4 lg:-space-x-6 gap-y-6">
            {whyChooseUsData.map((item, idx) => (
              <div
                key={idx}
                className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#111215] border-2 border-[#1f2229] hover:border-[#0084FF]/60 flex flex-col items-center justify-center p-6 sm:p-8 text-center transition-all duration-300 hover:z-20 hover:scale-105 shadow-[0_15px_35px_rgba(0,0,0,0.7)] group"
              >
                {/* Green badge check icon */}
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Check size={18} strokeWidth={3} />
                </div>
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0084FF] transition-colors">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed max-w-[200px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY WE STARTED (Testimonial Slider) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Why We Started
            </h2>

            {/* Slider arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevTestimonial}
                className="w-10 h-10 rounded-full bg-[#11141e] border border-[#202737] hover:border-[#0084FF] hover:bg-[#0084FF]/20 text-gray-300 hover:text-white flex items-center justify-center transition active:scale-95"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="w-10 h-10 rounded-full bg-[#11141e] border border-[#202737] hover:border-[#0084FF] hover:bg-[#0084FF]/20 text-gray-300 hover:text-white flex items-center justify-center transition active:scale-95"
                aria-label="Next testimonials"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.slice(sliderIndex, sliderIndex + 3).map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0e1017] border border-[#1b202c] rounded-2xl p-7 flex flex-col justify-between text-left transition hover:border-[#2a3449]"
              >
                <div>
                  <div className="text-3xl font-serif text-[#0084FF] leading-none mb-4">
                    ““
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-[#1a1f2b]">
                  <div className="text-sm font-semibold text-white">{item.author}</div>
                  <div className="text-xs text-[#0084FF]">{item.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/about"
              className="inline-block bg-[#0084FF] hover:bg-blue-600 text-white font-medium text-xs sm:text-sm px-8 py-3 rounded-full transition shadow-[0_0_15px_rgba(0,132,255,0.3)]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-[#07090f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-14">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all border ${
                    isOpen
                      ? 'bg-[#0f121a] border-[#0084FF]/60 shadow-[0_0_20px_rgba(0,132,255,0.15)]'
                      : 'bg-[#0b0d13] border-[#1a1f2b] hover:border-[#272f42]'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-mono font-bold ${isOpen ? 'text-[#0084FF]' : 'text-gray-500'}`}>
                        {faq.id}
                      </span>
                      <span className={`text-sm sm:text-base font-semibold ${isOpen ? 'text-[#0084FF]' : 'text-gray-200'}`}>
                        {faq.question}
                      </span>
                    </div>

                    <div className="ml-4 flex-shrink-0">
                      {isOpen ? (
                        <div className="w-7 h-7 rounded-full bg-[#0084FF]/20 text-[#0084FF] flex items-center justify-center">
                          <X size={16} />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-[#151924] text-gray-400 flex items-center justify-center hover:text-white">
                          <Plus size={16} />
                        </div>
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-[#1a2130]">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Book Meeting Modal */}
      <BookMeetingModal
        isOpen={isMeetingOpen}
        onClose={() => setIsMeetingOpen(false)}
      />
    </div>
  );
}
