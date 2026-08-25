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
    <footer className="relative border-t border-[#D9E3E8] bg-[#F7F8F3] py-12 text-[#617386] text-xs mt-auto z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#D9E3E8]">
          
          {/* Left Brand */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#F0F4F4] border border-[#D9E3E8] p-0.5 shadow-none flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-[8px] flex items-center justify-center font-extrabold text-[#168AAD] text-xs font-heading">
                  SK
                </div>
              </div>
              <span className="font-extrabold text-[#16324F] text-base tracking-tight font-heading">{contactInfo.name}</span>
            </div>
            <p className="text-[#617386] text-xs">
              Computer Science Engineering Student • {contactInfo.institution}
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#617386] font-medium">
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
                className="hover:text-[#168AAD] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-[#F0F4F4] text-[#16324F] border border-[#D9E3E8] text-xs font-semibold transition-all cursor-pointer shadow-none"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#168AAD]" />
          </button>

        </div>

        {/* Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#617386] text-[11px] text-center sm:text-left">
          <p>© {new Date().getFullYear()} Sanket Kanhaiya Kongare. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono text-[#617386]">
            <span>Crafted with Clean Typography & Natural Palette</span>
          </p>
        </div>

      </div>
    </footer>
  );
};


