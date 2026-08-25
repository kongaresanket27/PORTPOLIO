import React, { useState } from 'react';
import { contactInfo } from '../data/portfolioData';
import { User, Wrench, FolderGit2, Award, Mail, Menu, X, FileText, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenResumeModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'about', label: 'About', icon: User },
    { id: 'certifications', label: 'Certificates', icon: Award },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-3 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Floating Navbar Container */}
      <div className="relative rounded-2xl bg-white/95 backdrop-blur-2xl border border-[#D5E5EC] shadow-xs px-4 py-2.5 transition-all duration-300">
        
        {/* Subtle top inner highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1689C7]/20 to-transparent rounded-t-2xl pointer-events-none" />

        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Profile Title */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none shrink-0 cursor-pointer"
          >
            <div className="relative w-9 h-9 rounded-xl bg-[#DDF4FA] border border-[#D5E5EC] p-0.5 group-hover:border-[#1689C7]/40 transition-colors duration-300 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-[8px] flex items-center justify-center font-bold text-[#1689C7] text-xs font-heading tracking-wider">
                SK
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#123B5D] text-sm sm:text-base tracking-tight group-hover:text-[#1689C7] transition-colors font-heading">
                {contactInfo.name}
              </span>
              <span className="text-[11px] text-[#1689C7] flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#55BFA3] animate-pulse"></span>
                Computer Science
              </span>
            </div>
          </button>

          {/* Desktop Navigation Options */}
          <nav className="hidden md:flex items-center gap-1 bg-[#FAF8F2] p-1.5 rounded-full border border-[#D5E5EC] shadow-none">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative cursor-pointer flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-[#647C91] hover:text-[#123B5D] hover:bg-[#DDF4FA]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-[#1689C7] rounded-full shadow-none"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className={`relative z-10 flex items-center gap-1.5 ${isActive ? 'text-white font-bold' : ''}`}>
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Header Resume Button */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenResumeModal}
              className="relative group cursor-pointer flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#1689C7] hover:bg-[#123B5D] text-white shadow-none transition-all duration-200 hover:scale-105 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <FileText className="w-3.5 h-3.5 text-white" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden cursor-pointer p-2 rounded-xl bg-[#DDF4FA] text-[#123B5D] hover:text-[#1689C7] border border-[#D5E5EC]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#123B5D]" /> : <Menu className="w-5 h-5 text-[#123B5D]" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pt-3 border-t border-[#D5E5EC] mt-3 space-y-3 overflow-hidden"
            >
              <div className="text-[11px] font-mono text-[#1689C7] font-bold px-1 uppercase tracking-wider flex items-center justify-between">
                <span>Navigation</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-[#1689C7] text-white font-bold shadow-none'
                          : 'bg-[#FAF8F2] text-[#647C91] hover:bg-[#DDF4FA] border border-[#D5E5EC]'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#1689C7]'}`} />
                      <span className="flex-1 text-left">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#1689C7] hover:bg-[#123B5D] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-none"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

