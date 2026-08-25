import React from 'react';
import { Certification } from '../types';
import { OfficialCertificateDocument } from './OfficialCertificateDocument';
import { X, Award, ShieldCheck, Calendar, Hash, Building2, BookOpen, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

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

        {/* Certificate Credential Header */}
        <div className="space-y-3 pr-8">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 text-xs font-bold border border-indigo-800 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Verified Certificate</span>
            </span>
            <span className="text-xs text-slate-400 font-medium">• {cert.issuer}</span>
          </div>

          <h2 className="text-2xl font-bold text-white tracking-tight">
            {cert.title}
          </h2>
          <p className="text-xs text-indigo-400 font-semibold">
            Official Credential for: SANKET KONGARE (MIT Academy of Engineering, Alandi Pune)
          </p>
        </div>

        {/* Official Certificate Document Display */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-3 sm:p-5 shadow-2xl">
          <OfficialCertificateDocument cert={cert} />
        </div>

        {/* Certificate Credential Metadata */}
        <div className="relative p-5 rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 border border-slate-800 space-y-3 shadow-inner">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-indigo-400" />
              <span className="font-bold text-xs text-white uppercase">{cert.issuer}</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Credential</span>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {cert.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <Calendar className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Completion Date: <strong className="text-slate-200">{cert.date}</strong></span>
            </div>
            {cert.certId && (
              <div className="flex items-center gap-2 text-slate-400">
                <Hash className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Credential ID: <strong className="text-slate-200">{cert.certId}</strong></span>
              </div>
            )}
          </div>

          {cert.hoursOrCourses && (
            <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-900/60 text-indigo-300 text-xs font-semibold flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>Program Duration: {cert.hoursOrCourses}</span>
            </div>
          )}
        </div>

        {/* Skills Learned */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Competencies & Verifiable Skills Learned
          </h3>
          <div className="flex flex-wrap gap-2">
            {cert.skillsLearned.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex justify-end items-center pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
