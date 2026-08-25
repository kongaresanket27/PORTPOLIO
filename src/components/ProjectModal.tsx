import React from 'react';
import { Project } from '../types';
import { X, CheckCircle2, Cpu, ShieldAlert, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-20 sm:pt-24 bg-[#16324F]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-white border border-[#D9E3E8] rounded-2xl shadow-none overflow-y-auto p-6 sm:p-8 space-y-6 text-[#16324F]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#F0F4F4] hover:bg-[#E2EBEF] text-[#617386] hover:text-[#16324F] border border-[#D9E3E8] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#168AAD]/10 text-[#168AAD] text-xs font-semibold border border-[#168AAD]/20 uppercase tracking-wider">
              {project.category === 'software' ? 'Software & App' : project.category === 'iot' ? 'IoT & Embedded' : 'Data Analytics & BI'}
            </span>
            <span className="text-xs text-[#617386] font-medium">• Sanket Kongare Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#16324F] tracking-tight font-heading">
            {project.title}
          </h2>
          <p className="text-sm text-[#168AAD] font-semibold">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-[#D9E3E8]">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-[#F7F8F3] border border-[#D9E3E8] text-xs font-medium text-[#16324F]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Problem & Solution Case Study */}
        {project.detailedCaseStudy && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2">
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                <ShieldAlert className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs text-[#617386] leading-relaxed">
                {project.detailedCaseStudy.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#168AAD]/10 border border-[#168AAD]/20 space-y-2">
              <div className="text-xs font-bold text-[#168AAD] uppercase tracking-wider flex items-center gap-1.5 font-heading">
                <Sparkles className="w-4 h-4 text-[#168AAD]" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs text-[#617386] leading-relaxed">
                {project.detailedCaseStudy.solution}
              </p>
            </div>
          </div>
        )}

        {/* Hardware Components if IoT */}
        {project.hardwareComponents && project.hardwareComponents.length > 0 && (
          <div className="p-4 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-2">
            <div className="text-xs font-bold text-[#16324F] uppercase tracking-wider flex items-center gap-1.5 font-heading">
              <Cpu className="w-4 h-4 text-[#168AAD]" />
              <span>Hardware & Sensor Components Used</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.hardwareComponents.map((comp) => (
                <span
                  key={comp}
                  className="px-2.5 py-1 rounded-md bg-white border border-[#D9E3E8] text-[11px] text-[#16324F] font-medium shadow-none"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Highlights List */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#16324F] uppercase tracking-wider font-heading">
            Key Architecture & Technical Highlights
          </h3>
          <ul className="space-y-2">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs text-[#617386]">
                <CheckCircle2 className="w-4 h-4 text-[#168AAD] flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Features & Outcomes */}
        {project.detailedCaseStudy && (
          <div className="space-y-3 pt-2 border-t border-[#D9E3E8]">
            <h3 className="text-sm font-bold text-[#16324F] uppercase tracking-wider font-heading">
              Core Capabilities & Measured Outcome
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {project.detailedCaseStudy.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#F7F8F3] border border-[#D9E3E8] text-[11px] text-[#617386] font-medium text-center">
                  {feat}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#617386] bg-[#F7F8F3] p-3.5 rounded-xl border border-[#D9E3E8] leading-relaxed">
              <strong className="text-[#16324F]">Measured Outcome: </strong>
              {project.detailedCaseStudy.outcomes}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t border-[#D9E3E8]">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#F0F4F4] hover:bg-[#E2EBEF] border border-[#D9E3E8] text-[#16324F] text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};


