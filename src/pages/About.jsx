import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import WireframeOverlay from '../components/WireframeOverlay';

// 3D icons for Core Expertise cards
import aiIcon from '../assets/extracted/about_ai_icon.png';
import bcIcon from '../assets/extracted/about_bc_icon.png';
import algIcon from '../assets/extracted/about_alg_icon.png';
import esportsIcon from '../assets/extracted/about_esports_icon.png';


export default function About() {

  /* ─── Core Values (Our Value section) ─── */
  const values = [
    { title: "Innovation",    description: "Pioneering state-of-the-art AI and data algorithms for competitive advantage." },
    { title: "Collaboration", description: "Working closely with your team to deliver solutions that fit your exact needs." },
    { title: "Precision",     description: "Zero-tolerance for error in data models and infrastructure design." },
    { title: "Integrity",     description: "Transparent communication, ethical AI practices, and ironclad data security." },
  ];

  /* ─── Core Expertise ─── */
  const expertise = [
    {
      icon: aiIcon,
      title: "AI & Machine Learning",
      description: "Expert development of neural networks, computer vision systems, and NLP solutions with proven production deployment experience."
    },
    {
      icon: bcIcon,
      title: "Blockchain",
      description: "Extensive experience in DeFi protocol development, smart contracts, and Web3 infrastructure implementation."
    },
    {
      icon: algIcon,
      title: "Algorithmic Trading",
      description: "Specialized in high-frequency trading systems and ML-powered market analysis algorithms."
    },
    {
      icon: esportsIcon,
      title: "Esports Management",
      description: "Pioneering data-driven approaches to team optimization and tournament management in competitive gaming."
    },
  ];

  /* ─── Track Record ─── */
  const trackRecord = [
    {
      value: "12+",
      title: "Years AI & ML Development",
      description: "Building and deploying production-grade ML systems and AI solutions"
    },
    {
      value: "$2B+",
      title: "Trading Volume Tested",
      description: "Through our battle-tested algorithmic trading systems"
    },
    {
      value: "100+",
      title: "Blockchain Projects Audited",
      description: "Including DeFi protocols and smart contracts"
    },
    {
      value: "25+",
      title: "Esports Teams Audited",
      description: "With data-driven performance optimization"
    },
  ];

  /* ─── Operational Impact ─── */
  const impact = [
    {
      value: "99.99%",
      title: "System Uptime",
      description: "For critical ML and trading infrastructure"
    },
    {
      value: "60%",
      title: "Cost Reduction",
      description: "Average operational cost savings for clients"
    },
    {
      value: "85%",
      title: "Automation Rate",
      description: "In client workflow optimization"
    },
    {
      value: "3x",
      title: "Performance Gain",
      description: "Average improvement in system efficiency"
    },
  ];

  return (
    <div className="min-h-screen bg-[#050608] text-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">

        {/* ═══════════════════════════════════════════════
            1. HERO BANNER — "We're Engineers of Intelligent Change"
            (matches top banner in full about screenshot)
        ═══════════════════════════════════════════════ */}
        <div className="relative rounded-3xl bg-[#0c0e14] border border-[#1b202c] p-8 sm:p-12 lg:p-16 mb-20 overflow-hidden">
          <WireframeOverlay />

          {/* Wireframe grid square decorations — same as Figma */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Right column of rounded rectangles at various opacity */}
            {[
              { top: "12%", right: "30%", w: 60, h: 60, op: "0.07" },
              { top: "12%", right: "16%", w: 60, h: 60, op: "0.07" },
              { top: "35%", right: "30%", w: 60, h: 60, op: "0.05" },
              { top: "35%", right: "16%", w: 60, h: 60, op: "0.05" },
              { top: "58%", right: "30%", w: 60, h: 60, op: "0.07" },
              { top: "58%", right: "16%", w: 60, h: 60, op: "0.07" },
            ].map((box, i) => (
              <div
                key={i}
                className="absolute border rounded-2xl border-white"
                style={{
                  top: box.top,
                  right: box.right,
                  width: box.w,
                  height: box.h,
                  opacity: box.op,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Headline + subtext + CTA */}
            <div className="lg:col-span-7 text-left space-y-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                We're Engineers of{' '}
                <span className="text-[#0084FF]">Intelligent Change</span>
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl">
                From our first day, Catalyst Analytics has pursued one mission — to build the most advanced, reliable, and transformative data systems ever deployed. We combine machine learning, blockchain, and real-time analytics into unified production solutions.
              </p>
              <div>
                <Link
                  to="/contact"
                  className="inline-block bg-[#0084FF] hover:bg-[#0074e0] text-white font-medium text-xs sm:text-sm px-7 py-3 rounded-xl transition shadow-[0_0_15px_rgba(0,132,255,0.35)]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right: Glitch-style "CA" logo block — matching Figma exactly */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-44 sm:w-52 lg:w-56 aspect-square">
                {/* Dark rounded card with large glitch "CA" text */}
                <div className="w-full h-full rounded-3xl bg-[#141720] border border-[#2a3040] flex flex-col items-center justify-center shadow-2xl overflow-hidden relative">
                  {/* Glitch "CA" letters */}
                  <div className="relative select-none" style={{ fontFamily: 'serif', userSelect: 'none' }}>
                    <span
                      className="text-7xl sm:text-8xl font-black text-white tracking-tighter leading-none"
                      style={{
                        textShadow: '3px 3px 0 rgba(0,132,255,0.6), -2px -1px 0 rgba(255,255,255,0.1)',
                        filter: 'contrast(1.1)',
                      }}
                    >
                      CA
                    </span>
                    {/* Glitch stripe slices */}
                    <div
                      className="absolute top-[32%] left-0 right-0 h-[8%] overflow-hidden"
                      style={{ mixBlendMode: 'screen', opacity: 0.5 }}
                    >
                      <span
                        className="text-7xl sm:text-8xl font-black text-[#0084FF] tracking-tighter leading-none"
                        style={{ marginTop: '-34%', display: 'block', transform: 'translateX(-4px)' }}
                      >
                        CA
                      </span>
                    </div>
                    <div
                      className="absolute top-[55%] left-0 right-0 h-[6%] overflow-hidden"
                      style={{ mixBlendMode: 'screen', opacity: 0.4 }}
                    >
                      <span
                        className="text-7xl sm:text-8xl font-black text-white tracking-tighter leading-none"
                        style={{ marginTop: '-55%', display: 'block', transform: 'translateX(3px)' }}
                      >
                        CA
                      </span>
                    </div>
                  </div>
                  {/* Catalyst Analytics text below */}
                  <div className="absolute bottom-5 text-center">
                    <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Catalyst Analytics</div>
                  </div>
                  {/* Subtle radial glow */}
                  <div className="absolute inset-0 bg-gradient-radial from-blue-600/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            2. OUR STORY + OUR MISSION (Two alternating blocks)
            Left: text, Right: 3D earth globe (Our Story)
            Left: 3D bullseye target, Right: text (Our Mission)
        ═══════════════════════════════════════════════ */}
        <section className="mb-20 space-y-20">

          {/* Row A: Our Story — text LEFT, globe icon RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Text block */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Our Story
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* 3D Globe Icon RIGHT */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-52 sm:w-64 lg:w-72 aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 via-transparent to-emerald-500/10 rounded-full blur-3xl" />
                {/* Globe SVG matching the Figma 3D earth with orbit ring */}
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,132,255,0.3)]" xmlns="http://www.w3.org/2000/svg">
                  {/* Globe body */}
                  <defs>
                    <radialGradient id="globeGrad" cx="40%" cy="35%" r="60%">
                      <stop offset="0%" stopColor="#4fa6e8" />
                      <stop offset="40%" stopColor="#1a6fbe" />
                      <stop offset="100%" stopColor="#0a2a60" />
                    </radialGradient>
                    <radialGradient id="landGrad" cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#44c77a" />
                      <stop offset="100%" stopColor="#1a7a44" />
                    </radialGradient>
                  </defs>
                  {/* Ocean */}
                  <circle cx="100" cy="100" r="78" fill="url(#globeGrad)" />
                  {/* Land masses */}
                  <ellipse cx="78" cy="82" rx="22" ry="30" fill="url(#landGrad)" opacity="0.9" transform="rotate(-15 78 82)" />
                  <ellipse cx="118" cy="88" rx="18" ry="22" fill="url(#landGrad)" opacity="0.85" transform="rotate(10 118 88)" />
                  <ellipse cx="90" cy="130" rx="14" ry="12" fill="url(#landGrad)" opacity="0.7" transform="rotate(-5 90 130)" />
                  <ellipse cx="128" cy="118" rx="10" ry="14" fill="url(#landGrad)" opacity="0.75" transform="rotate(20 128 118)" />
                  {/* Atmosphere rim */}
                  <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(100,180,255,0.3)" strokeWidth="4" />
                  {/* Latitude lines */}
                  <ellipse cx="100" cy="100" rx="78" ry="22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <ellipse cx="100" cy="78" rx="68" ry="14" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <ellipse cx="100" cy="122" rx="68" ry="14" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  {/* Vertical meridian */}
                  <ellipse cx="100" cy="100" rx="20" ry="78" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                  {/* Orbital ring around globe */}
                  <ellipse cx="100" cy="100" rx="98" ry="30" fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="6 4" transform="rotate(-20 100 100)" opacity="0.9" />
                  {/* Satellite dot on orbit */}
                  <circle cx="192" cy="94" r="6" fill="#22c55e" />
                  <circle cx="192" cy="94" r="10" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.4" />
                  {/* Highlight gloss */}
                  <ellipse cx="82" cy="76" rx="20" ry="14" fill="rgba(255,255,255,0.15)" transform="rotate(-20 82 76)" />
                </svg>
              </div>
            </div>
          </div>

          {/* Row B: Our Mission — target icon LEFT, text RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* 3D Bullseye/Target Icon LEFT */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-52 sm:w-64 lg:w-72 aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-blue-600/10 rounded-full blur-3xl" />
                {/* Bullseye target SVG */}
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_40px_rgba(255,200,0,0.25)]" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="outerRing" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#2a3a6e" />
                      <stop offset="100%" stopColor="#121828" />
                    </radialGradient>
                  </defs>
                  {/* Outer dark ring */}
                  <circle cx="100" cy="100" r="82" fill="#1a2035" stroke="#252d45" strokeWidth="2" />
                  {/* Blue ring */}
                  <circle cx="100" cy="100" r="70" fill="#1f3080" />
                  {/* White ring */}
                  <circle cx="100" cy="100" r="58" fill="#e8edf8" />
                  {/* Blue ring 2 */}
                  <circle cx="100" cy="100" r="46" fill="#2244cc" />
                  {/* Red/orange center */}
                  <circle cx="100" cy="100" r="34" fill="#dd2222" />
                  {/* Bullseye yellow dot */}
                  <circle cx="100" cy="100" r="16" fill="#ffcc00" />
                  {/* Arrow — coming from bottom-right */}
                  <g transform="rotate(-45 100 100)">
                    {/* Arrow shaft */}
                    <rect x="97" y="20" width="6" height="85" rx="3" fill="#44cc77" />
                    {/* Arrow head */}
                    <polygon points="100,8 112,30 88,30" fill="#44cc77" />
                    {/* Tail feathers */}
                    <rect x="93" y="100" width="4" height="12" rx="1" fill="#66ddaa" transform="rotate(-30 95 106)" />
                    <rect x="103" y="100" width="4" height="12" rx="1" fill="#66ddaa" transform="rotate(30 105 106)" />
                  </g>
                  {/* Glossy highlight */}
                  <ellipse cx="84" cy="76" rx="22" ry="12" fill="rgba(255,255,255,0.1)" transform="rotate(-25 84 76)" />
                </svg>
              </div>
            </div>

            {/* Text block RIGHT */}
            <div className="lg:col-span-7 space-y-5 text-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Our Mission
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Our mission is to bridge the gap between complex data and actionable business intelligence. We work tirelessly to ensure that every analytics solution we build is not just technically superior, but also intuitive and impactful for end users.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

        </section>

        {/* ═══════════════════════════════════════════════
            3. CORE EXPERTISE — 4 dark cards with 3D icons
        ═══════════════════════════════════════════════ */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Core Expertise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0e1017] border border-[#1b202c] hover:border-blue-500/40 rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 group hover:-translate-y-1 shadow-lg text-left"
              >
                {/* Category tag at top */}
                <div className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 border-b border-[#1e2535]/60 pb-3">
                  {item.title}
                </div>

                {/* 3D Icon centered */}
                <div className="flex justify-center py-4">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_8px_16px_rgba(0,132,255,0.3)]"
                    />
                  </div>
                </div>

                {/* Description at bottom */}
                <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed mt-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            4. OUR TRACK RECORD — 4 large dark stat cards
            with huge white numbers / values
        ═══════════════════════════════════════════════ */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Our Track Record
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trackRecord.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-[#0a0c11] border border-[#191e2b] hover:border-[#2a3449] rounded-2xl p-7 flex flex-col gap-3 transition-all duration-300 group hover:-translate-y-1 shadow-xl text-left overflow-hidden"
              >
                {/* Subtle radial glow behind number */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white/[0.03] blur-2xl pointer-events-none" />

                {/* Huge stat value — matching Figma heavy serif/display font style */}
                <div
                  className="text-4xl sm:text-5xl font-black text-white leading-none tracking-tight relative z-10"
                  style={{
                    fontFamily: '"Georgia", "Times New Roman", serif',
                    textShadow: '0 0 30px rgba(255,255,255,0.1)',
                  }}
                >
                  {item.value}
                </div>

                {/* Title */}
                <div className="text-sm font-bold text-white leading-tight relative z-10">
                  {item.title}
                </div>

                {/* Description */}
                <p className="text-gray-500 text-[11px] leading-relaxed relative z-10">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            5. OPERATIONAL IMPACT — 4 dark cards
            with large percentage/multiplier values
        ═══════════════════════════════════════════════ */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Operational Impact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {impact.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-[#0a0c11] border border-[#191e2b] hover:border-[#2a3449] rounded-2xl p-7 flex flex-col gap-3 transition-all duration-300 group hover:-translate-y-1 shadow-xl text-left overflow-hidden"
              >
                {/* Subtle glow */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white/[0.03] blur-2xl pointer-events-none" />

                {/* Huge impact value */}
                <div
                  className="text-4xl sm:text-5xl font-black text-white leading-none tracking-tight relative z-10"
                  style={{
                    fontFamily: '"Georgia", "Times New Roman", serif',
                    textShadow: '0 0 30px rgba(255,255,255,0.1)',
                  }}
                >
                  {item.value}
                </div>

                {/* Title */}
                <div className="text-sm font-bold text-white leading-tight relative z-10">
                  {item.title}
                </div>

                {/* Description */}
                <p className="text-gray-500 text-[11px] leading-relaxed relative z-10">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            6. OUR VALUE — 4 circular dark badges
            (matches the bottom "Our Value" section from Figma)
        ═══════════════════════════════════════════════ */}
        <section className="mb-20 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-16">
            Our Value
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                {/* Circular badge */}
                <div className="w-24 h-24 rounded-full bg-[#0d1017] border border-[#1f2637] flex items-center justify-center mb-5 shadow-inner group-hover:border-[#0084FF]/40 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                    <Check size={18} strokeWidth={3} />
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#0084FF] transition-colors">
                  {v.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            7. READY TO DISCUSS — CTA Banner
            (matches bottom darkened banner in Figma)
        ═══════════════════════════════════════════════ */}
        <div className="relative rounded-3xl bg-[#0c0e14] border border-[#1b202c] p-8 sm:p-12 text-center overflow-hidden">
          <WireframeOverlay />
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              READY TO DISCUSS
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
              Your Product Needs With{' '}
              <span className="text-[#0084FF]">Catalyst Analytics</span> Experts?
            </h3>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0084FF] hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold px-8 py-3 rounded-full transition shadow-[0_0_15px_rgba(0,132,255,0.35)]"
              >
                <span>Get in Touch</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
