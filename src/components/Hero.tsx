import React, { useState, useEffect } from 'react';
import { contactInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, ArrowRight, Award, FolderGit2, Check, Copy, BarChart3, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { SpotlightCard } from './SpotlightCard';

interface HeroProps {
  onNavigateTab: (tab: string) => void;
}

const roles = [
  "Software Engineer",
  "AI Developer",
  "Data Analyst (PL-300)"
];

export const Hero: React.FC<HeroProps> = ({ onNavigateTab }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }, 45);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (displayText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 85);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-24 pb-14 md:pt-28 md:pb-18 overflow-hidden">
      {/* Daylight Atmospheric Sky Gradient & Ambient Aura */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F2] via-[#EAF7FA]/50 to-[#DDF4FA]/30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#1689C7]/[0.06] via-[#39BDEB]/[0.08] to-[#DDF4FA]/[0.1] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#DDF4FA] border border-[#1689C7]/20 text-[#1689C7] text-xs font-semibold tracking-wide shadow-none backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55BFA3] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#55BFA3]"></span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#1689C7]" />
                  <span>B.Tech Computer Science (Batch 2024 – 2028) • MITAOE Pune</span>
                </span>
              </div>
            </motion.div>

            {/* Title & Name in Deep Navy and Ocean Blue/Cyan gradient */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] font-heading text-[#123B5D]">
                Hello, I'm <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#1689C7] to-[#39BDEB] bg-clip-text text-transparent">
                  {contactInfo.name}
                </span>
              </h1>

              {/* Typewriter Line */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl font-semibold text-[#123B5D] h-9">
                <Terminal className="w-5 h-5 text-[#1689C7]" />
                <span className="text-[#647C91]">I am a</span>
                <span className="text-[#1689C7] font-mono font-bold">{displayText}</span>
                <span className="w-0.5 h-6 bg-[#1689C7] animate-pulse" />
              </div>

              <p className="text-sm sm:text-base text-[#647C91] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Studying at <strong className="text-[#123B5D] font-semibold">{contactInfo.institution}</strong>. I love engineering clean and reliable software in <span className="text-[#1689C7] font-semibold">Python, Java, C++, SQL & Data Structures</span>, working with smart <span className="text-[#55BFA3] font-semibold">IoT & Microcontrollers</span>, and delivering data reports with <span className="text-[#1689C7] font-semibold">Power BI (PL-300 Certified)</span>.
              </p>
            </motion.div>

            {/* Quick Contact Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <button
                onClick={() => copyToClipboard(contactInfo.email, 'email')}
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#DDF4FA] border border-[#D5E5EC] text-xs text-[#647C91] hover:text-[#123B5D] transition-all duration-200 cursor-pointer shadow-none"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-[#1689C7]" />
                <span>{contactInfo.email}</span>
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-[#55BFA3]" />
                ) : (
                  <Copy className="w-3 h-3 text-[#647C91] group-hover:text-[#123B5D]" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#DDF4FA] border border-[#D5E5EC] text-xs text-[#647C91] hover:text-[#123B5D] transition-all duration-200 cursor-pointer shadow-none"
                title="Click to copy phone"
              >
                <Phone className="w-3.5 h-3.5 text-[#1689C7]" />
                <span>{contactInfo.phone}</span>
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-[#55BFA3]" />
                ) : (
                  <Copy className="w-3 h-3 text-[#647C91] group-hover:text-[#123B5D]" />
                )}
              </button>

              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#D5E5EC] text-xs text-[#647C91] shadow-none">
                <MapPin className="w-3.5 h-3.5 text-[#1689C7]" />
                <span>{contactInfo.location}</span>
              </div>
            </motion.div>

            {/* Primary Action Buttons (Ocean Blue & Soft Secondary) */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={() => onNavigateTab('projects')}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1689C7] hover:bg-[#123B5D] text-white font-semibold text-sm shadow-none transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
              >
                <FolderGit2 className="w-4 h-4 text-white" />
                <span>Browse Projects</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigateTab('certifications')}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#DDF4FA] text-[#123B5D] font-semibold text-sm border border-[#D5E5EC] hover:border-[#1689C7]/40 transition-all duration-200 hover:scale-105 cursor-pointer shadow-none"
              >
                <Award className="w-4 h-4 text-[#E6A23C]" />
                <span>Inspect 18 Certificates</span>
              </button>
            </motion.div>

            {/* Core Tech Stack Badges */}
            <motion.div variants={itemVariants} className="pt-4 border-t border-[#D5E5EC] flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-xs text-[#647C91] font-semibold mr-1">Core Tech Stack:</span>
              {['Python', 'Java', 'C++', 'SQL', 'Power BI', 'Blynk IoT', 'Cisco NetAcad'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white border border-[#D5E5EC] text-xs font-medium text-[#123B5D] hover:border-[#1689C7]/40 hover:text-[#1689C7] hover:bg-[#DDF4FA]/40 transition-colors shadow-none"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

          </motion.div>

          {/* Feature Spotlight Profile Card (Right Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <SpotlightCard className="p-6 sm:p-7 space-y-6 border border-[#D5E5EC] shadow-none bg-white">
              
              {/* Profile Avatar Header */}
              <div className="flex items-center gap-4 border-b border-[#D5E5EC] pb-5">
                <div className="relative w-16 h-16 rounded-2xl bg-[#DDF4FA] border border-[#D5E5EC] p-0.5 flex-shrink-0 flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center font-bold text-2xl text-[#1689C7] tracking-widest font-heading">
                    SK
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#123B5D] flex items-center gap-2 font-heading">
                    Sanket Kongare
                    <span className="w-2 h-2 rounded-full bg-[#55BFA3] animate-pulse"></span>
                  </h3>
                  <p className="text-xs text-[#647C91] font-medium">MITAOE Alandi, Pune • Computer Science</p>
                  <p className="text-[11px] text-[#1689C7] font-semibold mt-0.5">Batch 2024 – 2028</p>
                </div>
              </div>

              {/* Quick Navigation Cards Grid */}
              <div className="space-y-3">
                <div className="text-[11px] font-bold text-[#1689C7] uppercase tracking-wider font-mono">
                  Portfolio Hub Shortcuts
                </div>

                <div
                  onClick={() => onNavigateTab('projects')}
                  className="p-3.5 rounded-xl bg-[#FAF8F2] hover:bg-white border border-[#D5E5EC] hover:border-[#1689C7]/40 transition-all flex items-center justify-between cursor-pointer group shadow-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#DDF4FA] text-[#1689C7] border border-[#1689C7]/20">
                      <FolderGit2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#123B5D] group-hover:text-[#1689C7] transition-colors font-heading">Engineering Projects</p>
                      <p className="text-[11px] text-[#647C91]">AgroFam, Digital Auction, AQI Monitor, Sanitizer</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#647C91] group-hover:text-[#1689C7] transition-colors" />
                </div>

                <div
                  onClick={() => onNavigateTab('certifications')}
                  className="p-3.5 rounded-xl bg-[#FAF8F2] hover:bg-white border border-[#D5E5EC] hover:border-[#E6A23C]/40 transition-all flex items-center justify-between cursor-pointer group shadow-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#E6A23C]/10 text-[#E6A23C] border border-[#E6A23C]/20">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#123B5D] group-hover:text-[#E6A23C] transition-colors font-heading">18 Verified Credentials</p>
                      <p className="text-[11px] text-[#647C91]">Microsoft PL-300, Cisco AICTE, L&T, OpenEDG</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#647C91] group-hover:text-[#E6A23C] transition-colors" />
                </div>

                <div
                  onClick={() => onNavigateTab('analytics')}
                  className="p-3.5 rounded-xl bg-[#FAF8F2] hover:bg-white border border-[#D5E5EC] hover:border-[#55BFA3]/40 transition-all flex items-center justify-between cursor-pointer group shadow-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#55BFA3]/10 text-[#55BFA3] border border-[#55BFA3]/20">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#123B5D] group-hover:text-[#55BFA3] transition-colors font-heading">Interactive BI Dashboards</p>
                      <p className="text-[11px] text-[#647C91]">Live Power BI & IoT Telemetry Sandbox</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#647C91] group-hover:text-[#55BFA3] transition-colors" />
                </div>
              </div>

              {/* Quick Key Numbers Grid */}
              <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-[#D5E5EC] text-center">
                <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#D5E5EC]">
                  <div className="text-xl font-bold text-[#1689C7] font-heading">CS</div>
                  <div className="text-[10px] text-[#647C91] font-medium uppercase mt-0.5">MITAOE</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#D5E5EC]">
                  <div className="text-xl font-bold text-[#E6A23C] font-heading">18</div>
                  <div className="text-[10px] text-[#647C91] font-medium uppercase mt-0.5">Certificates</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#D5E5EC]">
                  <div className="text-xl font-bold text-[#55BFA3] font-heading">8+</div>
                  <div className="text-[10px] text-[#647C91] font-medium uppercase mt-0.5">Projects</div>
                </div>
              </div>

            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


