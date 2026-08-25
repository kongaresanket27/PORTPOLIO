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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Featured Engineering Work</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-heading">
                Top Project <span className="bg-gradient-to-r from-[#00E5FF] via-[#6C63FF] to-[#8B5CF6] bg-clip-text text-transparent">Spotlights</span>
              </h2>
            </div>

            <button
              onClick={() => onNavigateTab('projects')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-cyan-300 border border-white/10 text-xs font-bold transition-all cursor-pointer"
            >
              <span>View All 8+ Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => onNavigateTab('projects')}
                className="cursor-pointer"
              >
                <SpotlightCard className="p-6 h-full flex flex-col justify-between border-white/10 hover:border-cyan-400/50">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold uppercase tracking-wider font-mono">
                        {p.category}
                      </span>
                      <span className="text-[11px] text-slate-400 font-semibold">{p.subtitle}</span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                      {p.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {p.techStack.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/[0.05] text-[10px] text-slate-200 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                    <ChevronRight className="w-4 h-4 text-cyan-400" />
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
          <SpotlightCard className="p-6 sm:p-8 space-y-6 border-white/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Verified Industry Credentials</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
                  Recognized <span className="bg-gradient-to-r from-amber-300 via-cyan-300 to-[#8B5CF6] bg-clip-text text-transparent">Certifications</span>
                </h2>
              </div>

              <button
                onClick={() => onNavigateTab('certifications')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-amber-300 border border-white/10 text-xs font-bold transition-all cursor-pointer"
              >
                <span>Explore All 18 Certificates</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredCerts.map((c) => (
                <div
                  key={c.id}
                  onClick={() => onNavigateTab('certifications')}
                  className="p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/50 transition-all cursor-pointer space-y-2.5 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider font-mono">{c.issuer}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2 font-heading">
                    {c.title}
                  </h4>
                  <p className="text-[10px] text-slate-400">{c.date}</p>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SpotlightCard className="p-8 text-center space-y-6 border-white/15 bg-gradient-to-r from-slate-950 via-[#0a0f29] to-indigo-950">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>B.Tech CS Engineering (2024 – 2028 Batch) • MITAOE Pune</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">Interested in Recruiting or Collaboration?</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Sanket Kongare is actively seeking Software & IoT Engineering Internships and project opportunities. Connect directly or inspect the executive resume.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigateTab('contact')}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#6C63FF] via-[#00E5FF] to-[#8B5CF6] text-slate-950 font-extrabold text-xs shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 cursor-pointer"
            >
              Get in Touch
            </button>
            <button
              onClick={onOpenResumeModal}
              className="px-7 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/15 font-bold text-xs transition-all hover:scale-105 cursor-pointer"
            >
              Open Executive Resume
            </button>
          </div>
        </SpotlightCard>
      </section>

    </div>
  );
};
