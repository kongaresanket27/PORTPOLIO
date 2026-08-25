import React from 'react';
import { Project } from '../types';
import { X, CheckCircle2, Cpu, Code2, ExternalLink, ShieldAlert, Sparkles, Layers, Terminal } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-20 sm:pt-24 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 text-xs font-semibold border border-indigo-800 uppercase tracking-wider">
              {project.category === 'software' ? 'Software & App' : project.category === 'iot' ? 'IoT & Hardware' : 'Data Analytics & BI'}
            </span>
            <span className="text-xs text-slate-400 font-medium">• Sanket Kongare Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm text-indigo-400 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-800/80">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Problem & Solution Case Study */}
        {project.detailedCaseStudy && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.detailedCaseStudy.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.detailedCaseStudy.solution}
              </p>
            </div>
          </div>
        )}

        {/* Hardware Components if IoT */}
        {project.hardwareComponents && project.hardwareComponents.length > 0 && (
          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-900/50 space-y-2">
            <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Hardware & Sensor Components Used</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.hardwareComponents.map((comp) => (
                <span
                  key={comp}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-cyan-800/60 text-[11px] text-cyan-200 font-medium"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Highlights List */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Key Architecture & Technical Highlights
          </h3>
          <ul className="space-y-2">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Features & Outcomes */}
        {project.detailedCaseStudy && (
          <div className="space-y-3 pt-2 border-t border-slate-800/80">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Core Capabilities & Measured Outcome
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {project.detailedCaseStudy.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 font-medium text-center">
                  {feat}
                </div>
              ))}
            </div>
            <p className="text-xs text-indigo-300 bg-indigo-950/40 p-3 rounded-xl border border-indigo-900/50">
              <strong className="text-white">Measured Outcome: </strong>
              {project.detailedCaseStudy.outcomes}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
