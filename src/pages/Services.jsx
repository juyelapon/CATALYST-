import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import WireframeOverlay from '../components/WireframeOverlay';
import ServiceDetailModal from '../components/ServiceDetailModal';

// Extracted assets
import gearHero from '../assets/extracted/services_gears.png';
import servAi from '../assets/extracted/serv_ai_brain.png';
import servBc from '../assets/extracted/serv_blockchain.png';
import servAlgo from '../assets/extracted/serv_algo.png';
import servDe from '../assets/extracted/serv_data_eng.png';
import servPa from '../assets/extracted/serv_pred_analytics.png';
import servInfra from '../assets/extracted/serv_infra.png';

import indFin from '../assets/extracted/ind_fin.png';
import indBc from '../assets/extracted/ind_bc.png';
import indGaming from '../assets/extracted/ind_gaming.png';
import indHealth from '../assets/extracted/ind_health.png';
import indMfg from '../assets/extracted/ind_mfg.png';
import indRetail from '../assets/extracted/ind_retail.png';

export default function Services() {
  const [selectedItem, setSelectedItem] = useState(null);

  const services = [
    {
      id: "s1",
      title: "MACHINE LEARNING SOLUTIONS",
      icon: servAi,
      description: "Custom algorithmic architectures built to automate critical decisions, uncover deep data correlations, and optimize real-time operations.",
      bullets: [
        "Model development & deployment",
        "NLP & computer vision",
        "Predictive maintenance",
        "Custom AI architectures"
      ],
      longDescription: "Our machine learning division engineers proprietary neural architectures and transformer-based pipelines that integrate directly into your operational stack. From automated visual inspection to real-time predictive anomaly detection, our models are optimized for low-latency inference on distributed hardware."
    },
    {
      id: "s2",
      title: "Blockchain Development",
      icon: servBc,
      description: "Decentralized protocols and immutable ledger systems ensuring absolute data integrity, smart contract execution, and secure transactions.",
      bullets: [
        "Smart contract development",
        "DeFi & Web3 integration",
        "Blockchain architecture",
        "NFT & tokenomics"
      ],
      longDescription: "We deliver hardened smart contracts, audited consensus mechanisms, and enterprise-grade Web3 gateways. Whether building multi-signature governance systems or cross-chain bridge protocols, we ensure institutional-grade cryptographic resilience."
    },
    {
      id: "s3",
      title: "Algorithmic Trading",
      icon: servAlgo,
      description: "Low-latency quantitative execution models and predictive signal engines designed for volatile financial markets.",
      bullets: [
        "High-frequency trading systems",
        "Automated execution engines",
        "Risk modeling & management",
        "Market sentiment analysis"
      ],
      longDescription: "Engineered for tick-level precision, our quantitative algorithmic solutions incorporate deep order-book analytics, microsecond execution, and dynamic hedging strategies to preserve capital while maximizing alpha."
    },
    {
      id: "s4",
      title: "Data Engineering",
      icon: servDe,
      description: "Scalable ETL pipelines, distributed data lakes, and high-performance warehousing designed for rapid analytical queries.",
      bullets: [
        "Data pipeline construction",
        "Database optimization",
        "Data warehouse architecture",
        "Big data processing"
      ],
      longDescription: "Transform messy, unstructured organizational records into unified, query-ready analytical assets. We deploy Snowflake, Databricks, Apache Spark, and dbt to deliver fault-tolerant batch and streaming data backbones."
    },
    {
      id: "s5",
      title: "Predictive Analytics",
      icon: servPa,
      description: "Empirical forecasting models that anticipate customer behaviors, market fluctuations, and operational bottlenecks.",
      bullets: [
        "Time-series forecasting",
        "Customer churn prediction",
        "Sales trend analysis",
        "Risk assessment models"
      ],
      longDescription: "Move from reactive historical reporting to proactive strategic planning. Our statistical engines analyze multi-variable telemetry to forecast demand, quantify market risks, and personalize customer touchpoints."
    },
    {
      id: "s6",
      title: "Platform & Infrastructure",
      icon: servInfra,
      description: "High-availability cloud environments with automated failover, load balancing, and hardened enterprise security standards.",
      bullets: [
        "Cloud infrastructure setup",
        "Scalable server solutions",
        "API development & integration",
        "Performance optimization"
      ],
      longDescription: "Multi-region Kubernetes clusters, automated infrastructure-as-code (Terraform), and zero-trust perimeter defenses built to handle millions of concurrent user requests with zero unplanned downtime."
    }
  ];

  const industries = [
    {
      id: "i1",
      title: "Financial Services & Trading",
      icon: indFin,
      type: "industry",
      description: "Institutional risk engines, fraud mitigation algorithms, automated KYC/AML verification, and portfolio optimization tools.",
      bullets: [
        "Real-time fraud surveillance",
        "Automated regulatory compliance",
        "Portfolio yield optimization",
        "Sub-millisecond trade routing"
      ]
    },
    {
      id: "i2",
      title: "Blockchain & Crypto",
      icon: indBc,
      type: "industry",
      description: "Zero-knowledge verification protocols, automated market makers (AMMs), on-chain telemetry, and wallet integrations.",
      bullets: [
        "Decentralized protocol audits",
        "Liquidity pool monitoring",
        "Smart contract security",
        "Cross-chain data oracles"
      ]
    },
    {
      id: "i3",
      title: "Esports & Gaming",
      icon: indGaming,
      type: "industry",
      description: "In-game telemetry analytics, automated matchmaking rating (MMR) systems, player retention models, and anti-cheat neural networks.",
      bullets: [
        "Behavioral cheat detection",
        "In-game economy balancing",
        "Low-latency multiplayer servers",
        "Player churn analytics"
      ]
    },
    {
      id: "i4",
      title: "Healthcare & Life Sciences",
      icon: indHealth,
      type: "industry",
      description: "HIPAA-compliant diagnostic models, genomic data sequencing pipelines, and clinical trial predictive modeling.",
      bullets: [
        "Medical imaging AI assistance",
        "Secure patient data lakes",
        "Clinical trial optimization",
        "Predictive patient monitoring"
      ]
    },
    {
      id: "i5",
      title: "Manufacturing",
      icon: indMfg,
      type: "industry",
      description: "IoT sensor telemetry, predictive machine breakdown alerts, computer-vision defect inspection, and supply-chain digital twins.",
      bullets: [
        "Predictive equipment maintenance",
        "Optical defect identification",
        "Supply chain simulation",
        "Factory floor optimization"
      ]
    },
    {
      id: "i6",
      title: "Retail & E-commerce",
      icon: indRetail,
      type: "industry",
      description: "Dynamic pricing algorithms, personalized recommendation engines, inventory forecasting, and basket analysis.",
      bullets: [
        "Dynamic real-time pricing",
        "Hyper-personalized recommendations",
        "Stock-out forecasting",
        "Conversion funnel optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050608] text-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* 1. HERO BANNER */}
        <div className="relative rounded-3xl bg-[#0c0e14] border border-[#1b202c] p-8 sm:p-12 lg:p-16 mb-24 overflow-hidden">
          <WireframeOverlay />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left text */}
            <div className="lg:col-span-8 text-left space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Our Comprehensive{' '}
                <span className="text-[#0084FF]">Digital Solutions</span>
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl">
                Catalyst Analytics provides a powerful combination of digital analytics solutions tailored to your unique business needs. We specialize in transforming complex data into actionable insights, driving continuous growth through advanced predictive modeling, artificial intelligence, and scalable cloud solutions.
              </p>
            </div>

            {/* Right 3D illustration */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-48 sm:w-56 lg:w-64 aspect-square flex items-center justify-center">
                <img
                  src={gearHero}
                  alt="Digital Solutions 3D Gears"
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(147,51,234,0.3)] hover:rotate-6 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. OUR SERVICES SECTION */}
        <section className="mb-24 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Our Services
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mb-14">
            Comprehensive analytical and development solutions designed to accelerate your business growth
          </p>

          {/* 2 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {services.map((item) => (
              <div
                key={item.id}
                className="bg-[#0e1017] border border-[#1b202c] hover:border-blue-500/40 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* 3D Icon centered at top of card like Figma design */}
                  <div className="w-full flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-[#141724]/60 border border-[#212737] flex items-center justify-center p-3 group-hover:scale-105 transition-transform">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,132,255,0.25)]"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-center text-lg sm:text-xl font-bold text-white mb-3 tracking-wide uppercase">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-center text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-md mx-auto">
                    {item.description}
                  </p>

                  {/* 4 Bullets in 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-8 max-w-md mx-auto">
                    {item.bullets.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF] flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Read More button */}
                <div className="flex justify-center pt-2">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="inline-flex items-center gap-2 bg-[#121622] hover:bg-[#0084FF] text-gray-300 hover:text-white border border-[#232a3c] hover:border-[#0084FF] px-6 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 group/btn cursor-pointer"
                  >
                    <span>Read More</span>
                    <div className="w-5 h-5 rounded-full bg-[#0084FF] text-white flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#0084FF] transition-colors">
                      <ArrowUpRight size={13} strokeWidth={2.5} />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. INDUSTRIES WE SERVE */}
        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Industries We Serve
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mb-14">
            Delivering customized digital solutions across key global sectors
          </p>

          {/* 2 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {industries.map((item) => (
              <div
                key={item.id}
                className="bg-[#0e1017] border border-[#1b202c] hover:border-blue-500/40 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* 3D Icon centered at top */}
                  <div className="w-full flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-[#141724]/60 border border-[#212737] flex items-center justify-center p-3 group-hover:scale-105 transition-transform">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,132,255,0.25)]"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-center text-lg sm:text-xl font-bold text-white mb-3 tracking-wide">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-center text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-md mx-auto">
                    {item.description}
                  </p>

                  {/* Bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-8 max-w-md mx-auto">
                    {item.bullets.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF] flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Read More button */}
                <div className="flex justify-center pt-2">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="inline-flex items-center gap-2 bg-[#121622] hover:bg-[#0084FF] text-gray-300 hover:text-white border border-[#232a3c] hover:border-[#0084FF] px-6 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 group/btn cursor-pointer"
                  >
                    <span>Read More</span>
                    <div className="w-5 h-5 rounded-full bg-[#0084FF] text-white flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#0084FF] transition-colors">
                      <ArrowUpRight size={13} strokeWidth={2.5} />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
