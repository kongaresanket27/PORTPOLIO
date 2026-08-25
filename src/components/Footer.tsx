import React from 'react';
import { contactInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateTab?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'certifications', label: 'Certificates' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#050816]/80 backdrop-blur-xl py-12 text-slate-300 text-xs mt-auto z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Left Brand */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#6C63FF] via-[#00E5FF] to-[#8B5CF6] p-0.5 shadow-md shadow-cyan-500/20">
                <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center font-extrabold text-white text-xs font-heading">
                  SK
                </div>
              </div>
              <span className="font-extrabold text-white text-base tracking-tight font-heading">{contactInfo.name}</span>
            </div>
            <p className="text-slate-400 text-xs">
              Computer Science Engineering Student • {contactInfo.institution}
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (onNavigateTab) {
                    onNavigateTab(item.id);
                  } else {
                    scrollToTop();
                  }
                }}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/10 text-xs font-semibold transition-all cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>

        </div>

        {/* Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px] text-center sm:text-left">
          <p>© {new Date().getFullYear()} Sanket Kanhaiya Kongare. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono">
            <span>Built with React 18, Framer Motion & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
