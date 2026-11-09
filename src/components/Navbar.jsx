import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5 group">
    {/* Geometric Hexagonal CA Logo Icon */}
    <div className="w-9 h-9 relative flex items-center justify-center">
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon 
          points="20,2 37,11 37,29 20,38 3,29 3,11" 
          stroke="white" 
          strokeWidth="2.2" 
          fill="#0c0e14"
        />
        <path 
          d="M13 14H19C21 14 23 15 23 17.5C23 19.5 21 20.5 19 20.5H15M15 20.5V26.5" 
          stroke="white" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M20 26.5L25 14L30 26.5M21.5 23H28.5" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="flex flex-col text-left leading-tight">
      <span className="text-white font-bold tracking-tight text-base group-hover:text-blue-400 transition-colors">
        Catalyst
      </span>
      <span className="text-gray-300 text-[11px] font-medium tracking-wide">
        Analytics
      </span>
    </div>
  </Link>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#050608]/90 backdrop-blur-md border-b border-[#161a23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#0084FF]" />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="bg-[#0084FF] hover:bg-[#0074e0] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(0,132,255,0.3)] hover:shadow-[0_0_20px_rgba(0,132,255,0.5)] active:scale-95"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-400 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e14] border-b border-[#1b202c] px-6 py-5 space-y-4 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base font-medium transition-colors ${
                location.pathname === link.path ? 'text-[#0084FF]' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#0084FF] hover:bg-blue-600 text-white font-medium py-3 rounded-full transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
