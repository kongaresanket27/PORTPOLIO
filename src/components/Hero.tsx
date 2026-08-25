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
  "IoT Engineer",
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
        }, 50);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (displayText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 90);
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
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-24 pb-14 md:pt-28 md:pb-18 overflow-hidden">
      {/* Moving Aurora Background Effect (Dimmable Apple style) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6C63FF]/03 via-[#00E5FF]/03 to-[#8B5CF6]/03 blur-[200px] rounded-full pointer-events-none animate-aurora" />

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
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-lg shadow-cyan-500/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  <span>B.Tech Computer Science (Batch 2024 – 2028) • MITAOE Pune</span>
                </span>
              </div>
            </motion.div>

            {/* Title & Name */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] font-heading">
                Hello, I'm <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#00E5FF] via-[#6C63FF] to-[#8B5CF6] bg-clip-text text-transparent drop-shadow-sm">
                  {contactInfo.name}
                </span>
              </h1>

              {/* Typewriter Line */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl font-semibold text-slate-200 h-9">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-400">I am a</span>
                <span className="text-cyan-300 font-mono font-bold">{displayText}</span>
                <span className="w-0.5 h-6 bg-cyan-400 animate-pulse" />
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Studying at <strong className="text-white font-semibold">{contactInfo.institution}</strong>. Passionate about engineering high-performance software in <span className="text-cyan-300 font-semibold">Python, Java, C++, SQL & JSX</span>, building smart <span className="text-indigo-300 font-semibold">IoT & Hardware systems</span>, and executing data storyboarding with <span className="text-purple-300 font-semibold">Power BI (PL-300 Certified)</span>.
              </p>
            </motion.div>

            {/* Quick Contact Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <button
                onClick={() => copyToClipboard(contactInfo.email, 'email')}
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-slate-300 hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{contactInfo.email}</span>
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-slate-300 hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
                title="Click to copy phone"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                <span>{contactInfo.phone}</span>
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                )}
              </button>

              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{contactInfo.location}</span>
              </div>
            </motion.div>

            {/* Primary Glowing Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={() => onNavigateTab('projects')}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#6C63FF] via-[#00E5FF] to-[#8B5CF6] text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <FolderGit2 className="w-4 h-4" />
                <span>Browse Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigateTab('certifications')}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 font-semibold text-sm border border-white/15 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 cursor-pointer shadow-md"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Inspect 15+ Certificates</span>
              </button>
            </motion.div>

            {/* Core Tech Stack Badges */}
            <motion.div variants={itemVariants} className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-xs text-slate-400 font-semibold mr-1">Core Tech Stack:</span>
              {['Python', 'Java', 'C++', 'SQL', 'Power BI', 'Blynk IoT', 'JSX / React', 'Cisco NetAcad'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

          </motion.div>

          {/* Feature Spotlight Profile Card (Right Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <SpotlightCard className="p-6 sm:p-7 space-y-6 border-white/15">
              
              {/* Profile Avatar Header */}
              <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#6C63FF] via-[#00E5FF] to-[#8B5CF6] p-0.5 shadow-xl shadow-cyan-500/20 flex-shrink-0">
                  <div className="w-full h-full bg-[#050816] rounded-[14px] flex items-center justify-center font-extrabold text-2xl text-white tracking-widest font-heading">
                    SK
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 font-heading">
                    Sanket Kongare
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">MITAOE Alandi, Pune • Computer Science</p>
                  <p className="text-[11px] text-cyan-400 font-semibold mt-0.5">Batch 2024 – 2028</p>
                </div>
              </div>

              {/* Quick Navigation Cards Grid */}
              <div className="space-y-3">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                  Portfolio Hub Shortcuts
                </div>

                <div
                  onClick={() => onNavigateTab('projects')}
                  className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-indigo-500/60 transition-all flex items-center justify-between cursor-pointer group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                      <FolderGit2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">Engineering Projects</p>
                      <p className="text-[11px] text-slate-400">AgroFam, Digital Auction, AQI Monitor, Sanitizer</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </div>

                <div
                  onClick={() => onNavigateTab('certifications')}
                  className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-amber-500/60 transition-all flex items-center justify-between cursor-pointer group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">15+ Verified Credentials</p>
                      <p className="text-[11px] text-slate-400">Microsoft PL-300, Cisco AICTE, L&T, OpenEDG</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>

                <div
                  onClick={() => onNavigateTab('analytics')}
                  className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/60 transition-all flex items-center justify-between cursor-pointer group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">Interactive BI Dashboards</p>
                      <p className="text-[11px] text-slate-400">Live Power BI & IoT Telemetry Sandbox</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>

              {/* Quick Key Numbers Grid */}
              <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-white/10 text-center">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-xl font-extrabold text-cyan-400 font-heading">CS</div>
                  <div className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">MITAOE</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-xl font-extrabold text-amber-400 font-heading">15+</div>
                  <div className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">Certificates</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-xl font-extrabold text-indigo-400 font-heading">8+</div>
                  <div className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">Projects</div>
                </div>
              </div>

            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
