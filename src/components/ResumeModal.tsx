import React from 'react';
import { contactInfo, certifications, projects } from '../data/portfolioData';
import { X, Download, Mail, Phone, MapPin, GraduationCap, Code2, Award, Briefcase, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-20 sm:pt-24 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200">
        
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white">Curriculum Vitae / Resume Summary</h2>
          </div>
          
          <div className="flex items-center gap-2 pr-8">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 space-y-6 text-xs text-slate-300">
          
          {/* Header Contact Block */}
          <div className="text-center space-y-1.5 border-b border-slate-800 pb-5">
            <h1 className="text-2xl font-extrabold text-white tracking-tight">{contactInfo.name}</h1>
            <p className="text-sm font-semibold text-indigo-400">{contactInfo.title}</p>
            <p className="text-slate-400">{contactInfo.institution}</p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-[11px] text-slate-400">
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-indigo-400" /> {contactInfo.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400" /> {contactInfo.phone}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-amber-400" /> {contactInfo.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider text-indigo-400">Executive Summary</h3>
            <p className="leading-relaxed text-slate-300">
              Computer Science Engineering student (2024 – 2028 Batch) at MITAOE Pune with expertise in Python, Java, C++, SQL, React/JSX, IoT hardware microcontrollers, and Microsoft Power BI (PL-300 Certified). Demonstrated track record building agricultural advisory software, multithreaded auction applications, environmental air quality sensor devices, and executive BI dashboards.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-start">
              <div>
                <p className="font-bold text-white text-xs">B.Tech in Computer Science Engineering</p>
                <p className="text-slate-400">MIT Academy of Engineering (MITAOE), Alandi, Pune</p>
              </div>
              <span className="font-semibold text-indigo-400">2024 – 2028</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              <span>Key Technical Proficiencies</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-white">Programming Languages: </strong>
                <span>Python, Java (Core/OOP), C++, C, JavaScript/JSX, SQL</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-white">Data Analytics & BI: </strong>
                <span>Power BI (PL-300 Certified), Tableau, Orange Data Mining, DAX</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-white">IoT & Hardware: </strong>
                <span>Blynk IoT, ESP8266/NodeMCU, Sensors (AQI, Dust, PIR), Relays</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-white">Cybersecurity & AI: </strong>
                <span>Cisco Packet Tracer, Kali Linux, Customer Review NLP, Claude 101</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>Featured Engineering Projects</span>
            </h3>
            <div className="space-y-2">
              {projects.slice(0, 4).map((p) => (
                <div key={p.id} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex justify-between font-bold text-white">
                    <span>{p.title}</span>
                    <span className="text-indigo-400 font-normal">{p.techStack.join(', ')}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Selected Certifications</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {certifications.slice(0, 6).map((c) => (
                <li key={c.id} className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span><strong>{c.title}</strong> ({c.issuer})</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
