import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { InteractiveDashboard } from './InteractiveDashboard';
import { FolderGit2, Sprout, Gavel, Server, GraduationCap, Cpu, Wind, ShieldCheck, BarChart3, ArrowRight, Sparkles, ExternalLink, Github } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { motion } from 'motion/react';

export const Projects: React.FC = () => {
  const [viewMode, setViewMode] = useState<'projects' | 'bi'>('projects');
  const [activeFilter, setActiveFilter] = useState<'all' | 'software' | 'iot' | 'data'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = [
    { id: 'all', label: 'All Software & Hardware' },
    { id: 'software', label: 'Software & Web' },
    { id: 'iot', label: 'IoT & Hardware' },
    { id: 'data', label: 'Data & BI' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout': return Sprout;
      case 'Gavel': return Gavel;
      case 'Server': return Server;
      case 'GraduationCap': return GraduationCap;
      case 'Cpu': return Cpu;
      case 'Wind': return Wind;
      case 'ShieldCheck': return ShieldCheck;
      case 'BarChart3': return BarChart3;
      default: return FolderGit2;
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Silicon Valley Engineered Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Featured <span className="bg-gradient-to-r from-[#00E5FF] via-[#6C63FF] to-[#8B5CF6] bg-clip-text text-transparent">Projects & BI Dashboards</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Real-world applications spanning agricultural software (AgroFam), Java multithreaded auction engines, Core Java & SQL asset management, IoT sensor hardware arrays, and live Power BI business intelligence storyboards.
          </p>
        </div>

        {/* View Mode Sub-Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl">
            <button
              onClick={() => setViewMode('projects')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                viewMode === 'projects'
                  ? 'bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Engineering Projects ({projects.length})</span>
            </button>

            <button
              onClick={() => setViewMode('bi')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                viewMode === 'bi'
                  ? 'bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Interactive BI Sandbox (Power BI)</span>
            </button>
          </div>
        </div>

        {/* View Mode: Software & Hardware Projects */}
        {viewMode === 'projects' && (
          <div className="space-y-12">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveFilter(option.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeFilter === option.id
                      ? 'bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-400/20'
                      : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => {
                const Icon = getProjectIcon(project.iconName);

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <SpotlightCard className="p-6 h-full flex flex-col justify-between border-white/10 hover:border-cyan-400/50">
                      <div className="space-y-4">
                        
                        {/* Category Badge & Icon */}
                        <div className="flex items-center justify-between">
                          <div className="p-3 rounded-xl bg-white/[0.06] border border-white/10 text-cyan-300 shadow-md">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                            project.category === 'software'
                              ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                              : project.category === 'iot'
                              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                              : 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                          }`}>
                            {project.category}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                            {project.title}
                          </h3>
                          <p className="text-xs text-cyan-400 font-medium mt-0.5">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Short Description */}
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[10px] font-medium text-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 4 && (
                            <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[10px] font-medium text-slate-400">
                              +{project.techStack.length - 4}
                            </span>
                          )}
                        </div>

                      </div>

                      {/* Footer Action Buttons */}
                      <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                        >
                          <span>Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 text-xs font-bold transition-all cursor-pointer"
                            title="GitHub Source Code"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition-all cursor-pointer"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </div>

            {/* Embedded BI Callout Banner inside Projects */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-[#0a0f29] to-indigo-950/80 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl overflow-hidden">
              <div className="space-y-2 text-center md:text-left relative z-10">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Microsoft PL-300 Certified Analytics</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  Explore Interactive Power BI & IoT Telemetry Dashboards
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  Test live interactive slicers, sensor telemetry data, sentiment NLP keyword clusters, and DAX metric formulas right inside this portfolio.
                </p>
              </div>
              <button
                onClick={() => setViewMode('bi')}
                className="shrink-0 relative z-10 flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] text-slate-950 font-extrabold text-xs shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 cursor-pointer"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Launch BI Dashboard Sandbox</span>
              </button>
            </div>
          </div>
        )}

        {/* View Mode: Embedded BI Dashboard */}
        {viewMode === 'bi' && (
          <div className="animate-in fade-in duration-300">
            <InteractiveDashboard embedded={true} />
          </div>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
