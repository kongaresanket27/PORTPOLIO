import React from 'react';
import { Hero } from './Hero';
import { projects, certifications } from '../data/portfolioData';
import { FolderGit2, Award, ArrowRight, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { motion } from 'motion/react';

interface HomeViewProps {
  onNavigateTab: (tab: string) => void;
  onOpenResumeModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigateTab, onOpenResumeModal }) => {
  const featuredProjects = projects.slice(0, 3);
  const featuredCerts = certifications.slice(0, 4);

  return (
    <div className="space-y-12 sm:space-y-14 pb-14">
      
      {/* Hero Header */}
      <Hero onNavigateTab={onNavigateTab} />

      {/* Featured Projects Highlight Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#D5E5EC] pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DDF4FA] border border-[#1689C7]/20 text-[#1689C7] text-xs font-semibold uppercase tracking-wider mb-2">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Featured Engineering Work</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#123B5D] tracking-tight font-heading">
                Top Project <span className="text-[#1689C7]">Spotlights</span>
              </h2>
            </div>

            <button
              onClick={() => onNavigateTab('projects')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#DDF4FA] text-[#1689C7] border border-[#D5E5EC] hover:border-[#1689C7]/30 text-xs font-bold transition-all cursor-pointer shadow-none"
            >
              <span>View All 8+ Projects</span>
              <ArrowRight className="w-4 h-4 text-[#1689C7]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => onNavigateTab('projects')}
                className="cursor-pointer"
              >
                <SpotlightCard className="p-6 h-full flex flex-col justify-between border-[#D5E5EC] hover:border-[#1689C7]/40 shadow-none bg-white">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-[#DDF4FA] text-[#1689C7] border border-[#1689C7]/20 text-[10px] font-bold uppercase tracking-wider font-mono">
                        {p.category}
                      </span>
                      <span className="text-[11px] text-[#647C91] font-semibold">{p.subtitle}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#123B5D] group-hover:text-[#1689C7] transition-colors font-heading">
                      {p.title}
                    </h3>

                    <p className="text-xs text-[#647C91] line-clamp-3 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#D5E5EC] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {p.techStack.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-[#FAF8F2] text-[10px] text-[#123B5D] border border-[#D5E5EC]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#1689C7]" />
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Verified Credentials Highlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <SpotlightCard className="p-6 sm:p-8 space-y-6 border-[#D5E5EC] shadow-none bg-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#D5E5EC] pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6A23C]/10 border border-[#E6A23C]/30 text-[#E6A23C] text-xs font-semibold uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5 text-[#E6A23C]" />
                  <span>Verified Industry Credentials</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#123B5D] tracking-tight font-heading">
                  Recognized <span className="text-[#E6A23C]">Certifications</span>
                </h2>
              </div>

              <button
                onClick={() => onNavigateTab('certifications')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#FAF8F2] text-[#E6A23C] border border-[#D5E5EC] hover:border-[#E6A23C]/40 text-xs font-bold transition-all cursor-pointer shadow-none"
              >
                <span>Explore All 18 Certificates</span>
                <ArrowRight className="w-4 h-4 text-[#E6A23C]" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredCerts.map((c) => (
                <div
                  key={c.id}
                  onClick={() => onNavigateTab('certifications')}
                  className="p-4 rounded-xl bg-[#FAF8F2] hover:bg-white border border-[#D5E5EC] hover:border-[#1689C7]/30 transition-all cursor-pointer space-y-2.5 group shadow-none"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#E6A23C] uppercase tracking-wider font-mono">{c.issuer}</span>
                    <ShieldCheck className="w-4 h-4 text-[#1689C7]" />
                  </div>
                  <h4 className="text-xs font-bold text-[#123B5D] group-hover:text-[#1689C7] transition-colors line-clamp-2 font-heading">
                    {c.title}
                  </h4>
                  <p className="text-[10px] text-[#647C91]">{c.date}</p>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
      </section>

      {/* Call to Action Banner (Ocean Blue -> Sky Cyan Gradient) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SpotlightCard className="p-8 text-center space-y-6 border border-[#39BDEB]/30 bg-gradient-to-r from-[#1689C7] via-[#219FD1] to-[#39BDEB] text-white shadow-xs">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#FAF8F2]" />
              <span>B.Tech CS Engineering (2024 – 2028 Batch) • MITAOE Pune</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">Interested in Recruiting or Collaboration?</h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Sanket Kongare is actively seeking Software & IoT Engineering Internships and project opportunities. Connect directly or inspect the executive resume.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigateTab('contact')}
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-[#FAF8F2] text-[#1689C7] font-bold text-xs shadow-none transition-all hover:scale-105 cursor-pointer"
            >
              Get in Touch
            </button>
            <button
              onClick={onOpenResumeModal}
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-xs transition-all hover:scale-105 cursor-pointer shadow-none"
            >
              Open Executive Resume
            </button>
          </div>
        </SpotlightCard>
      </section>

    </div>
  );
};

