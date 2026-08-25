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
    { id: 'all', label: 'All Projects' },
    { id: 'software', label: 'Software & Web' },
    { id: 'iot', label: 'IoT & Embedded' },
    { id: 'data', label: 'Data & Analytics' },
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DDF4FA] border border-[#1689C7]/20 text-[#1689C7] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <FolderGit2 className="w-3.5 h-3.5 text-[#1689C7]" />
            <span>Engineered Portfolio Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B5D] tracking-tight font-heading">
            Featured <span className="text-[#1689C7]">Projects & BI Dashboards</span>
          </h2>
          <p className="text-[#647C91] text-xs sm:text-sm leading-relaxed">
            Real-world applications spanning agricultural software (AgroFam), Java multithreaded auction engines, Core Java & SQL asset management, IoT sensor hardware arrays, and live Power BI business intelligence storyboards.
          </p>
        </div>

        {/* View Mode Sub-Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-[#D5E5EC] shadow-none">
            <button
              onClick={() => setViewMode('projects')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                viewMode === 'projects'
                  ? 'bg-[#1689C7] text-white shadow-none'
                  : 'text-[#647C91] hover:text-[#123B5D] hover:bg-[#DDF4FA]/50'
              }`}
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Engineering Projects ({projects.length})</span>
            </button>

            <button
              onClick={() => setViewMode('bi')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                viewMode === 'bi'
                  ? 'bg-[#1689C7] text-white shadow-none'
                  : 'text-[#647C91] hover:text-[#123B5D] hover:bg-[#DDF4FA]/50'
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
                      ? 'bg-[#1689C7] text-white font-bold shadow-none'
                      : 'bg-white text-[#647C91] hover:text-[#123B5D] hover:bg-[#DDF4FA]/50 border border-[#D5E5EC] shadow-none'
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
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    <SpotlightCard className="p-6 h-full flex flex-col justify-between border-[#D5E5EC] hover:border-[#1689C7]/40 shadow-none bg-white">
                      <div className="space-y-4">
                        
                        {/* Category Badge & Icon */}
                        <div className="flex items-center justify-between">
                          <div className="p-3 rounded-xl bg-[#DDF4FA] border border-[#1689C7]/20 text-[#1689C7] shadow-none">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                            project.category === 'software'
                              ? 'bg-[#DDF4FA] text-[#1689C7] border-[#1689C7]/20'
                              : project.category === 'iot'
                              ? 'bg-[#55BFA3]/15 text-[#55BFA3] border-[#55BFA3]/25'
                              : 'bg-[#DDF4FA] text-[#1689C7] border-[#1689C7]/20'
                          }`}>
                            {project.category}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <div>
                          <h3 className="text-lg font-bold text-[#123B5D] group-hover:text-[#1689C7] transition-colors font-heading">
                            {project.title}
                          </h3>
                          <p className="text-xs text-[#1689C7] font-medium mt-0.5">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Short Description */}
                        <p className="text-xs text-[#647C91] leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-[#FAF8F2] border border-[#D5E5EC] text-[10px] font-medium text-[#123B5D]"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 4 && (
                            <span className="px-2.5 py-1 rounded-lg bg-[#FAF8F2] border border-[#D5E5EC] text-[10px] font-medium text-[#647C91]">
                              +{project.techStack.length - 4}
                            </span>
                          )}
                        </div>

                      </div>

                      {/* Footer Action Buttons */}
                      <div className="pt-6 mt-6 border-t border-[#D5E5EC] flex items-center gap-2">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#1689C7] hover:bg-[#1277ad] text-white font-semibold text-xs shadow-none transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                        >
                          <span>Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-white hover:bg-[#DDF4FA] text-[#123B5D] border border-[#D5E5EC] text-xs font-bold transition-all cursor-pointer shadow-none"
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
                            className="p-2.5 rounded-xl bg-[#DDF4FA] hover:bg-[#cdeef7] text-[#1689C7] border border-[#1689C7]/25 text-xs font-bold transition-all cursor-pointer shadow-none"
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
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1689C7] via-[#219FD1] to-[#39BDEB] border border-[#39BDEB]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs overflow-hidden text-white">
              <div className="space-y-2 text-center md:text-left relative z-10">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider font-heading">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Microsoft PL-300 Certified Analytics</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  Explore Interactive Power BI & IoT Telemetry Dashboards
                </h3>
                <p className="text-xs sm:text-sm text-white/90 max-w-2xl">
                  Test live interactive slicers, sensor telemetry data, sentiment NLP keyword clusters, and DAX metric formulas right inside this portfolio.
                </p>
              </div>
              <button
                onClick={() => setViewMode('bi')}
                className="shrink-0 relative z-10 flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF8F2] text-[#1689C7] font-bold text-xs shadow-none transition-all hover:scale-105 cursor-pointer"
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


