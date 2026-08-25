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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-20 sm:pt-24 bg-[#16324F]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-white border border-[#D9E3E8] rounded-2xl shadow-none overflow-y-auto p-6 sm:p-8 space-y-6 text-[#16324F]">
        
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between border-b border-[#D9E3E8] pb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#168AAD]" />
            <h2 className="text-lg font-bold text-[#16324F] font-heading">Curriculum Vitae / Resume Summary</h2>
          </div>
          
          <div className="flex items-center gap-2 pr-8">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#168AAD] hover:bg-[#137492] text-white text-xs font-bold transition-all shadow-none cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-[#F0F4F4] hover:bg-[#E2EBEF] text-[#617386] hover:text-[#16324F] border border-[#D9E3E8] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="bg-[#F7F8F3] rounded-xl p-6 sm:p-8 border border-[#D9E3E8] space-y-6 text-xs text-[#16324F]">
          
          {/* Header Contact Block */}
          <div className="text-center space-y-1.5 border-b border-[#D9E3E8] pb-5">
            <h1 className="text-2xl font-extrabold text-[#16324F] tracking-tight font-heading">{contactInfo.name}</h1>
            <p className="text-sm font-semibold text-[#168AAD]">{contactInfo.title}</p>
            <p className="text-[#617386]">{contactInfo.institution}</p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-[11px] text-[#617386]">
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-[#168AAD]" /> {contactInfo.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-[#52B69A]" /> {contactInfo.phone}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#168AAD]" /> {contactInfo.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#168AAD] font-heading">Executive Summary</h3>
            <p className="leading-relaxed text-[#617386]">
              Computer Science Engineering student (2024 – 2028 Batch) at MITAOE Pune with expertise in Python, Java, C++, SQL, React/JSX, IoT hardware microcontrollers, and Microsoft Power BI (PL-300 Certified). Demonstrated track record building agricultural advisory software, multithreaded auction applications, environmental air quality sensor devices, and executive BI dashboards.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#168AAD] flex items-center gap-1.5 font-heading">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>
            <div className="p-3.5 rounded-xl bg-white border border-[#D9E3E8] flex justify-between items-start shadow-none">
              <div>
                <p className="font-bold text-[#16324F] text-xs">B.Tech in Computer Science Engineering</p>
                <p className="text-[#617386]">MIT Academy of Engineering (MITAOE), Alandi, Pune</p>
              </div>
              <span className="font-semibold text-[#168AAD] font-mono text-xs">2024 – 2028</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#168AAD] flex items-center gap-1.5 font-heading">
              <Code2 className="w-4 h-4" />
              <span>Key Technical Proficiencies</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-white border border-[#D9E3E8] shadow-none">
                <strong className="text-[#16324F]">Programming Languages: </strong>
                <span className="text-[#617386]">Python, Java (Core/OOP), C++, C, JavaScript/JSX, SQL</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#D9E3E8] shadow-none">
                <strong className="text-[#16324F]">Data Analytics & BI: </strong>
                <span className="text-[#617386]">Power BI (PL-300 Certified), Tableau, Orange Data Mining, DAX</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#D9E3E8] shadow-none">
                <strong className="text-[#16324F]">IoT & Hardware: </strong>
                <span className="text-[#617386]">Blynk IoT, ESP8266/NodeMCU, Sensors (AQI, Dust, PIR), Relays</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#D9E3E8] shadow-none">
                <strong className="text-[#16324F]">Cybersecurity & AI: </strong>
                <span className="text-[#617386]">Cisco Packet Tracer, Kali Linux, Customer Review NLP, Claude 101</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#168AAD] flex items-center gap-1.5 font-heading">
              <Briefcase className="w-4 h-4" />
              <span>Featured Engineering Projects</span>
            </h3>
            <div className="space-y-2">
              {projects.slice(0, 4).map((p) => (
                <div key={p.id} className="p-3 rounded-xl bg-white border border-[#D9E3E8] space-y-1 shadow-none">
                  <div className="flex justify-between font-bold text-[#16324F]">
                    <span>{p.title}</span>
                    <span className="text-[#168AAD] font-normal">{p.techStack.join(', ')}</span>
                  </div>
                  <p className="text-[11px] text-[#617386]">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#168AAD] flex items-center gap-1.5 font-heading">
              <Award className="w-4 h-4" />
              <span>Selected Certifications</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {certifications.slice(0, 6).map((c) => (
                <li key={c.id} className="flex items-center gap-2 text-[#16324F] bg-white p-2.5 rounded-xl border border-[#D9E3E8] shadow-none">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#168AAD] flex-shrink-0" />
                  <span><strong className="text-[#16324F]">{c.title}</strong> ({c.issuer})</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};


