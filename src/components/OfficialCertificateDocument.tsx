import React from 'react';
import { Certification } from '../types';
import { CheckCircle2, ShieldCheck, Award } from 'lucide-react';

interface OfficialCertificateDocumentProps {
  cert: Certification;
}

export const OfficialCertificateDocument: React.FC<OfficialCertificateDocumentProps> = ({ cert }) => {
  const id = cert.id;

  // 1. L&T EduTech Certificates (IoT Architectural & Renewable Energy)
  if (id === 'iot-architectural-engineering' || id === 'renewable-energy-iot') {
    const isIoT = id === 'iot-architectural-engineering';
    return (
      <div className="w-full aspect-[1/1.35] max-w-[600px] mx-auto bg-[#3ec7f3] text-slate-900 rounded-lg p-6 sm:p-10 shadow-2xl relative font-sans flex flex-col justify-between overflow-hidden border-8 border-slate-900/10">
        {/* Top Gold Corner Accents */}
        <div className="absolute top-0 left-0 w-12 h-12 bg-[#2d5f8b] clip-polygon">
          <div className="w-8 h-8 bg-[#fcd34d] m-1"></div>
        </div>
        <div className="absolute top-0 right-0 w-12 h-12 bg-[#2d5f8b] flex justify-end">
          <div className="w-8 h-8 bg-[#fcd34d] m-1"></div>
        </div>

        {/* Header Logo */}
        <div className="text-center pt-2">
          <div className="inline-block bg-[#00a3e0] text-white px-4 py-2 font-black text-lg tracking-wider rounded-sm shadow-sm border border-white/20">
            L&T <span className="text-[#84cc16]">EduTech</span>
          </div>
          <h2 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-wide uppercase mt-4">
            Certificate of Course Pathway Completion
          </h2>
          <div className="w-48 h-0.5 bg-slate-800/40 mx-auto mt-2"></div>
        </div>

        {/* Student Name */}
        <div className="text-center my-4">
          <p className="text-xs text-slate-800 uppercase tracking-widest font-semibold mb-1">This is awarded to</p>
          <h1 className="text-xl sm:text-2xl font-black text-slate-950 tracking-wider uppercase border-b-2 border-slate-900/30 pb-2 inline-block px-4">
            KONGARE SANKET KANHAIYA
          </h1>
        </div>

        {/* Course Pathway Info */}
        <div className="text-center space-y-2">
          <p className="text-xs sm:text-sm text-slate-800">has completed the Course pathway titled</p>
          <h3 className="text-base sm:text-lg font-black text-slate-950 px-2 leading-tight">
            {isIoT ? 'IoT Architectural Engineering' : 'Renewable Energy Technologies and Grid Integration'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-800">which covers</p>
          <p className="text-xs sm:text-sm font-bold text-slate-900">
            {isIoT ? '8 courses and 30 learning hours' : '11 courses and 32 learning hours'}
          </p>
        </div>

        {/* Bottom Seal & Signature */}
        <div className="flex items-end justify-between pt-6 border-t border-slate-900/20">
          <div className="text-left space-y-1">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 border-2 border-amber-200 flex flex-col items-center justify-center shadow-md p-1">
              <span className="text-[8px] font-black text-amber-950 uppercase tracking-tighter">LEARNKONNECT</span>
              <span className="text-[10px] font-bold text-amber-900">★ ★ ★</span>
            </div>
            <p className="text-[10px] font-bold text-slate-800 mt-1">CID: LTE/EI/1000</p>
          </div>

          <div className="text-right space-y-1">
            <p className="font-serif italic text-base sm:text-lg font-bold text-slate-900 border-b border-slate-800/40 pb-0.5">
              M.F.Febin
            </p>
            <p className="text-[10px] font-extrabold text-slate-900">M.F.Febin</p>
            <p className="text-[9px] text-slate-800 font-semibold">Head, L&T EduTech</p>
          </div>
        </div>

        {/* Bottom L&T Emblem Logo */}
        <div className="absolute bottom-2 right-2 opacity-80">
          <div className="w-7 h-7 rounded-full border-2 border-slate-900 flex items-center justify-center font-black text-[10px]">
            L&T
          </div>
        </div>
      </div>
    );
  }

  // 2. Cisco AICTE Virtual Internship
  if (id === 'cisco-cybersecurity-internship') {
    return (
      <div className="w-full aspect-[1.4/1] max-w-[650px] mx-auto bg-white text-slate-900 rounded-lg p-6 sm:p-8 shadow-2xl relative font-sans border-2 border-slate-200 flex flex-col justify-between">
        {/* Header Logos Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-3">
            <div className="font-bold text-xs text-slate-800">Cisco Networking Academy</div>
            <span className="text-slate-300">|</span>
            <div className="text-[10px] font-bold text-indigo-900">AICTE</div>
            <span className="text-slate-300">|</span>
            <div className="text-[10px] font-bold text-slate-700">Ministry of Education</div>
          </div>
          <div className="text-xs font-black text-slate-900">Skill India</div>
        </div>

        {/* Black Banner */}
        <div className="bg-slate-950 text-white p-3 rounded-lg flex items-center justify-between my-3 shadow-md">
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-cyan-300">Cisco AICTE Virtual Internship Program 2025</h3>
            <p className="text-[10px] text-slate-300">Enabling skillsets of the future</p>
          </div>
          <ShieldCheck className="w-6 h-6 text-emerald-400" />
        </div>

        {/* Body */}
        <div className="text-center space-y-2 py-2">
          <p className="text-xs text-slate-600 font-medium">Cisco Networking Academy grants this recognition to</p>
          <h1 className="text-xl sm:text-2xl font-extrabold text-cyan-800 border-b-2 border-cyan-500/40 pb-1 inline-block px-4">
            Sanket Kanhaiya Kongare
          </h1>
          <p className="text-xs font-semibold text-slate-700">MIT Academy of Engineering, Alandi Pune</p>
          <p className="text-xs text-slate-700 max-w-md mx-auto pt-1">
            for successfully completing the <strong>Virtual Internship Program in Cybersecurity</strong> from June – August 2025
          </p>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-200 flex items-end justify-between text-xs text-slate-700">
          <div>
            <p className="text-[10px] font-mono text-slate-500">Student ID: STU681f99e3d06d71746901475</p>
            <div className="flex items-center gap-2 mt-2 text-[9px] text-slate-400 font-medium">
              <span>EdCreate Foundation</span> • <span>TASK</span> • <span>ICTACADEMY</span> • <span>MITAOE</span>
            </div>
          </div>
          <div className="text-right">
            <p className="font-serif italic text-sm font-bold text-slate-800">Marcella O'Shea</p>
            <p className="text-[10px] font-bold text-slate-900">Marcella O'Shea</p>
            <p className="text-[9px] text-slate-500">Regional Manager API, Cisco</p>
          </div>
        </div>
      </div>
    );
  }

  // 3. Microsoft Power BI PL-300
  if (id === 'power-bi-pl300') {
    return (
      <div className="w-full aspect-[1.4/1] max-w-[650px] mx-auto bg-white text-slate-900 rounded-lg p-6 sm:p-8 shadow-2xl relative font-sans border-4 border-cyan-500 flex flex-col justify-between">
        {/* Top bar with Microsoft & Microsoft Elevate */}
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
              <div className="bg-[#f25022] w-2 h-2"></div>
              <div className="bg-[#7fba00] w-2 h-2"></div>
              <div className="bg-[#00a4ef] w-2 h-2"></div>
              <div className="bg-[#ffb900] w-2 h-2"></div>
            </div>
            <span className="font-bold text-sm text-slate-800">Microsoft</span>
          </div>
          <div className="text-xs font-bold text-slate-700">Microsoft Elevate</div>
        </div>

        {/* Title & Student Name */}
        <div className="text-center space-y-3 py-4">
          <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-wider uppercase">
            Certificate of Course Completion
          </h2>
          <p className="text-xs text-slate-500">This is to certify that</p>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-950 border-b-2 border-slate-900 pb-1 inline-block px-6">
            SANKET KONGARE
          </h1>
          <p className="text-xs font-bold text-slate-700">MIT Academy Of Engineering</p>
          <p className="text-xs text-slate-700 max-w-lg mx-auto leading-relaxed">
            has successfully completed a <strong>20 Hour course on Microsoft Power BI Data Analyst (PL-300)</strong> on the Microsoft Learn platform, in collaboration by FICE.
          </p>
        </div>

        {/* Bottom details & signature */}
        <div className="flex items-end justify-between border-t pt-3 text-xs text-slate-700">
          <div className="space-y-1">
            <p className="text-xs font-black text-indigo-950">FICE</p>
            <p className="text-[10px] text-slate-500">Email: kongaresanket@gmail.com</p>
            <p className="text-[10px] text-slate-500">Date of Issuance: 30-03-2026</p>
          </div>
          <div className="text-right">
            <p className="font-serif italic text-sm font-bold text-slate-800">Gunjan Patel</p>
            <p className="text-xs font-bold text-slate-900">Gunjan Patel</p>
            <p className="text-[9px] text-slate-500">Director, Microsoft Elevate & Philanthropies, Microsoft India</p>
          </div>
        </div>
      </div>
    );
  }

  // 4. Anthropic Certificates (Claude 101, Students, Nonprofits, Frameworks)
  if (id.startsWith('anthropic-')) {
    let bgColor = 'bg-[#F5EFEB]';
    let textColor = 'text-[#232323]';
    let title = 'Claude 101';
    let partnerLogos = null;

    if (id === 'anthropic-ai-students') {
      bgColor = 'bg-[#DDE2E8]';
      title = 'AI Fluency for students';
      partnerLogos = 'UCC • Ringling College of Art + Design • HEA • National Forum';
    } else if (id === 'anthropic-ai-nonprofits') {
      bgColor = 'bg-[#D2E3DB]';
      title = 'AI Fluency for nonprofits';
      partnerLogos = 'GIVINGTUESDAY';
    } else if (id === 'anthropic-ai-frameworks') {
      bgColor = 'bg-[#7B8C61] text-white';
      textColor = 'text-white';
      title = 'AI Fluency: Framework & Foundations';
      partnerLogos = 'UCC • Ringling College of Art + Design • HEA • National Forum';
    }

    return (
      <div className={`w-full aspect-[1.33/1] max-w-[650px] mx-auto ${bgColor} ${textColor} rounded-xl p-8 shadow-2xl relative font-sans flex flex-col justify-between`}>
        {/* Top Header Pill */}
        <div className="flex justify-center pt-2">
          <div className="border border-current px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Certificate of Completion</span>
          </div>
        </div>

        {/* Student & Course */}
        <div className="text-center space-y-4 my-auto">
          <h1 className="text-2xl sm:text-3xl font-serif tracking-tight font-normal">
            SANKET KONGARE
          </h1>
          <p className="text-xs tracking-wider opacity-80 uppercase font-medium">has completed</p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            {title}
          </h2>
        </div>

        {/* Anthropic Footer */}
        <div className="text-center space-y-2 pt-4 border-t border-current/20">
          <p className="font-bold tracking-widest text-sm uppercase">ANTHROP\C</p>
          {partnerLogos && (
            <p className="text-[10px] tracking-wider opacity-75 font-semibold">{partnerLogos}</p>
          )}
        </div>
      </div>
    );
  }

  // 5. Simplilearn Kali Linux
  if (id === 'kali-linux-basics') {
    return (
      <div className="w-full aspect-[1.4/1] max-w-[650px] mx-auto bg-white text-slate-900 rounded-lg p-6 sm:p-8 shadow-2xl relative font-sans border-8 border-indigo-950 flex flex-col justify-between">
        {/* Right vertical bar decoration */}
        <div className="absolute top-0 right-8 bottom-0 w-8 bg-indigo-900/90 hidden sm:block"></div>

        {/* Header Logo */}
        <div className="flex items-center justify-between border-b pb-3">
          <div className="text-sm font-black text-indigo-950">
            simpli<span className="text-amber-500">learn</span> <span className="text-cyan-600">SkillUp</span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-amber-400 bg-amber-50 flex items-center justify-center font-bold text-xs text-amber-700">
            Verified
          </div>
        </div>

        {/* Body */}
        <div className="space-y-3 py-3 pr-0 sm:pr-12">
          <h2 className="text-base font-serif font-black text-indigo-950 tracking-wider uppercase">
            Certificate of Completion
          </h2>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 border-b-2 border-slate-300 pb-1 inline-block">
            Sanket Kanhaiya Kongare
          </h1>
          <p className="text-xs text-slate-600">has successfully completed the online course:</p>
          <h3 className="text-base font-extrabold text-indigo-900">
            Introduction to Kali Linux Basics
          </h3>
          <p className="text-[11px] text-slate-500 max-w-sm">
            This professional has demonstrated initiative and a commitment to deepening their skills and advancing their career. Well done!
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-end justify-between border-t pt-3 text-xs pr-0 sm:pr-12">
          <p className="text-xs font-bold text-slate-700">13th December 2024</p>
          <div className="text-right">
            <p className="font-serif italic font-bold text-slate-800">Krishna Kumar</p>
            <p className="text-xs font-bold text-slate-900">Krishna Kumar</p>
            <p className="text-[10px] text-slate-500">CEO, Simplilearn</p>
          </div>
        </div>
      </div>
    );
  }

  // 6. Wadhwani Foundation & EduSkills
  if (id === 'jobready-employability') {
    return (
      <div className="w-full aspect-[1.4/1] max-w-[650px] mx-auto bg-amber-50/30 text-slate-900 rounded-lg p-6 sm:p-8 shadow-2xl relative font-sans border-8 border-orange-500/80 flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-orange-200 pb-3">
          <div>
            <span className="font-black text-orange-600 text-sm">WADHWANI</span>
            <span className="text-[10px] block font-bold text-slate-600">FOUNDATION</span>
          </div>
          <div className="text-right">
            <span className="font-bold text-xs text-slate-800">EduSkills</span>
            <span className="text-[9px] block text-slate-500">Nation Building Through Skills</span>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-3 text-center py-2">
          <h2 className="text-base sm:text-lg font-bold text-orange-600 uppercase tracking-wide">
            Certificate of Completion – Basic
          </h2>
          <p className="text-xs text-slate-500">This is to certify that</p>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 border-b-2 border-slate-800 pb-1 inline-block px-4">
            Sanket Kongare
          </h1>
          <p className="text-xs font-semibold text-slate-700">from EduSkills Foundation</p>
          <p className="text-xs text-slate-700 max-w-md mx-auto">
            Has successfully completed <strong>JobReady: Employability Skills</strong> at the Basic Level on <strong>December 02, 2025</strong>
          </p>
          <p className="text-[11px] font-bold text-slate-800">
            This certificate confirms the completion of 79 hours of training
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-end justify-between border-t border-orange-200 pt-3 text-xs">
          <div>
            <p className="font-serif italic font-bold text-slate-800">Ajay Kela</p>
            <p className="text-xs font-bold text-slate-900">Ajay Kela</p>
            <p className="text-[10px] text-slate-500">CEO, Wadhwani Foundation</p>
          </div>
          <div className="text-right text-[10px] font-mono text-slate-500">
            Verified Credential
          </div>
        </div>
      </div>
    );
  }

  // 7. Standard Cisco / NetAcad / Python Institute Certificate Layout (Default)
  return (
    <div className="w-full aspect-[1.4/1] max-w-[650px] mx-auto bg-white text-slate-900 rounded-lg p-6 sm:p-8 shadow-2xl relative font-sans border-2 border-slate-200 flex flex-col justify-between">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="text-xs font-bold text-cyan-800">
          Cisco Networking Academy
        </div>
        <div className="text-xs font-bold text-slate-800 text-right">
          MIT Academy of Engineering, Alandi Pune
        </div>
      </div>

      {/* Main Body */}
      <div className="text-center space-y-3 py-4">
        <p className="text-xs text-slate-500">This certificate is awarded to</p>
        <h1 className="text-xl sm:text-3xl font-extrabold text-cyan-900 tracking-wide border-b-2 border-cyan-600/30 pb-1 inline-block px-6">
          SANKET KONGARE
        </h1>
        <p className="text-xs text-slate-500">for successfully completing</p>
        <h2 className="text-lg sm:text-2xl font-bold text-cyan-700 leading-snug">
          {cert.title}
        </h2>
        <p className="text-xs text-slate-600 max-w-md mx-auto pt-1">
          offered by MIT Academy of Engineering, alandi Pune through the Cisco Networking Academy program.
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-end justify-between border-t border-slate-200 pt-3 text-xs text-slate-700">
        <div>
          <p className="font-serif italic text-base font-bold text-slate-900">Anuradha Pawar</p>
          <p className="text-xs font-bold text-slate-900">Anuradha Pawar</p>
          <p className="text-[10px] text-slate-500">Instructor, MIT Academy of Engineering</p>
        </div>
        <div className="text-right space-y-0.5">
          <p className="text-xs font-bold text-slate-800">{cert.date}</p>
          <p className="text-[10px] text-slate-500">Completion Date</p>
          {cert.certId && (
            <p className="text-[9px] font-mono text-slate-400">Cert ID: {cert.certId}</p>
          )}
        </div>
      </div>
    </div>
  );
};
