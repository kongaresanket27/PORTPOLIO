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

        {/* Certificate Credential Header */}
        <div className="space-y-3 pr-8">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#168AAD]/10 text-[#168AAD] text-xs font-bold border border-[#168AAD]/20 uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <Award className="w-3.5 h-3.5 text-[#168AAD]" />
              <span>Verified Certificate</span>
            </span>
            <span className="text-xs text-[#617386] font-medium">• {cert.issuer}</span>
          </div>

          <h2 className="text-2xl font-bold text-[#16324F] tracking-tight font-heading">
            {cert.title}
          </h2>
          <p className="text-xs text-[#168AAD] font-semibold">
            Official Credential for: SANKET KONGARE (MIT Academy of Engineering, Alandi Pune)
          </p>
        </div>

        {/* Official Certificate Document Display */}
        <div className="rounded-2xl bg-[#F7F8F3] border border-[#D9E3E8] p-3 sm:p-5 shadow-none">
          <OfficialCertificateDocument cert={cert} />
        </div>

        {/* Certificate Credential Metadata */}
        <div className="relative p-5 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-3 shadow-none">
          <div className="flex items-center justify-between border-b border-[#D9E3E8] pb-2.5">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#168AAD]" />
              <span className="font-bold text-xs text-[#16324F] uppercase font-heading">{cert.issuer}</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-[#168AAD] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Credential</span>
            </div>
          </div>

          <p className="text-xs text-[#617386] leading-relaxed">
            {cert.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
            <div className="flex items-center gap-2 text-[#617386]">
              <Calendar className="w-4 h-4 text-[#168AAD] flex-shrink-0" />
              <span>Completion Date: <strong className="text-[#16324F]">{cert.date}</strong></span>
            </div>
            {cert.certId && (
              <div className="flex items-center gap-2 text-[#617386]">
                <Hash className="w-4 h-4 text-[#16324F] flex-shrink-0" />
                <span>Credential ID: <strong className="text-[#16324F] font-mono">{cert.certId}</strong></span>
              </div>
            )}
          </div>

          {cert.hoursOrCourses && (
            <div className="p-2.5 rounded-lg bg-[#168AAD]/10 border border-[#168AAD]/20 text-[#16324F] text-xs font-semibold flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#168AAD]" />
              <span>Program Duration: {cert.hoursOrCourses}</span>
            </div>
          )}
        </div>

        {/* Skills Learned */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-[#16324F] uppercase tracking-wider font-heading">
            Competencies & Verifiable Skills Learned
          </h3>
          <div className="flex flex-wrap gap-2">
            {cert.skillsLearned.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-lg bg-[#F7F8F3] border border-[#D9E3E8] text-xs font-medium text-[#16324F] flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#168AAD]" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex justify-end items-center pt-4 border-t border-[#D9E3E8]">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#F0F4F4] hover:bg-[#E2EBEF] border border-[#D9E3E8] text-[#16324F] text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};


