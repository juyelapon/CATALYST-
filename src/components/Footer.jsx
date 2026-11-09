import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, X } from 'lucide-react';
import { Logo } from './Navbar';

// Pixel-perfect social icons matching Figma
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5z" />
  </svg>
);

export default function Footer() {
  const [modalContent, setModalContent] = useState(null);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <>
      <footer className="w-full bg-[#050608] border-t border-[#181c26] pt-14 pb-10 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row: Logo, Nav, Socials */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#181c26]/80">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Nav Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0e1017] border border-[#1e2330] flex items-center justify-center text-[#0084FF] hover:text-white hover:border-[#0084FF] hover:bg-[#0084FF]/20 transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0e1017] border border-[#1e2330] flex items-center justify-center text-[#0084FF] hover:text-white hover:border-[#0084FF] hover:bg-[#0084FF]/20 transition-all duration-200"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0e1017] border border-[#1e2330] flex items-center justify-center text-[#0084FF] hover:text-white hover:border-[#0084FF] hover:bg-[#0084FF]/20 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Middle Row: Contact Info & Legal */}
          <div className="py-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-gray-400">
            {/* Contact details */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8">
              <a
                href="mailto:contact@catalystanalytics.io"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Mail size={15} className="text-[#0084FF] group-hover:scale-110 transition-transform" />
                <span>contact@catalystanalytics.io</span>
              </a>

              <a
                href="tel:+14697124672"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Phone size={15} className="text-[#0084FF] group-hover:scale-110 transition-transform" />
                <span>+1(469) 712-4672</span>
              </a>

              <div className="flex items-center gap-2 group">
                <MapPin size={15} className="text-[#0084FF] flex-shrink-0" />
                <span>5511 Parkcrest Dr, Suite 103, Austin, TX 78731</span>
              </div>
            </div>

            {/* Privacy & Terms */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setModalContent({
                  title: "Privacy Policy",
                  body: "At Catalyst Analytics, we prioritize the protection and confidentiality of client data. All analytics datasets, machine learning training pipelines, and infrastructure access are governed under strict zero-trust protocols and enterprise-grade encryption. We do not sell or monetize client datasets under any circumstances."
                })}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setModalContent({
                  title: "Terms of Service",
                  body: "By accessing services provided by Catalyst Analytics, you agree to our standard enterprise engagement terms, service level agreements (SLAs), and intellectual property provisions covering custom ML models and software architecture delivered during client projects."
                })}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 border-t border-[#181c26]/60 text-center text-xs text-gray-500">
            © 2025 Catalyst Analytics. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#0f1118] border border-[#202534] rounded-2xl max-w-lg w-full p-6 text-left relative shadow-2xl">
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold text-white mb-4">{modalContent.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">{modalContent.body}</p>
            <div className="flex justify-end">
              <button
                onClick={() => setModalContent(null)}
                className="bg-[#0084FF] hover:bg-blue-600 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
