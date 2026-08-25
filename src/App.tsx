import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { InteractiveDashboard } from './components/InteractiveDashboard';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { LightStripsBackground } from './components/LightStripsBackground';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F2] text-[#123B5D] font-sans selection:bg-[#1689C7] selection:text-white flex flex-col justify-between overflow-x-hidden">
      
      {/* Animated Light Strips Background Layer */}
      <LightStripsBackground />

      {/* Top Fixed Navigation Bar */}
      <div className="relative z-50">
        <Navbar
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />
      </div>

      {/* Main Tab Content View with Motion Animations */}
      <main className="relative z-10 flex-grow pt-24 sm:pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {activeTab === 'home' && (
              <HomeView
                onNavigateTab={handleTabChange}
                onOpenResumeModal={() => setResumeModalOpen(true)}
              />
            )}

            {activeTab === 'about' && (
              <div className="pt-2">
                <About />
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="pt-2">
                <Projects />
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="pt-2">
                <Certifications />
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="pt-2">
                <Skills />
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="pt-2">
                <Projects />
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="pt-2">
                <Contact />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer onNavigateTab={handleTabChange} />
      </div>

      {/* Resume Lightbox Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}
