import React, { useState } from 'react';
import { contactInfo } from '../data/portfolioData';
import { GraduationCap, Code, Cpu, LineChart, Shield, Compass, BookOpen, Layers, Check, Award, MapPin, Mail, Phone } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'focus' | 'methodology'>('education');

  return (
    <section id="about" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile & Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            About <span className="bg-gradient-to-r from-[#00E5FF] via-[#6C63FF] to-[#8B5CF6] bg-clip-text text-transparent">Sanket Kongare</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            A driven Computer Science Engineering student (2024 – 2028) at MITAOE Pune combining solid software engineering fundamentals with hardware IoT development and business data analytics.
          </p>
        </div>

        {/* Counter Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <SpotlightCard className="p-5 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-heading">8+</div>
            <div className="text-xs text-slate-300 font-semibold uppercase tracking-wider mt-1">Software & Hardware Projects</div>
          </SpotlightCard>

          <SpotlightCard className="p-5 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-heading">18</div>
            <div className="text-xs text-slate-300 font-semibold uppercase tracking-wider mt-1">Verified Credentials</div>
          </SpotlightCard>

          <SpotlightCard className="p-5 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-400 font-heading">15+</div>
            <div className="text-xs text-slate-300 font-semibold uppercase tracking-wider mt-1">Technologies & Languages</div>
          </SpotlightCard>

          <SpotlightCard className="p-5 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-heading">PL-300</div>
            <div className="text-xs text-slate-300 font-semibold uppercase tracking-wider mt-1">Microsoft Certified</div>
          </SpotlightCard>
        </div>

        {/* Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation & Profile Box */}
          <div className="lg:col-span-4 space-y-4">
            <SpotlightCard className="p-6 space-y-4 border-white/10">
              <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#6C63FF] via-[#00E5FF] to-[#8B5CF6] p-0.5 shadow-xl shadow-cyan-500/20 flex-shrink-0">
                  <div className="w-full h-full bg-[#050816] rounded-[14px] flex items-center justify-center font-extrabold text-2xl text-white font-heading">
                    SK
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">Sanket Kongare</h3>
                  <p className="text-xs text-cyan-400 font-semibold">CS @ MITAOE Alandi, Pune</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Academic Years: 2024 – 2028</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>Alandi, Pune, Maharashtra 412105</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{contactInfo.phone}</span>
                </div>
              </div>
            </SpotlightCard>

            {/* Navigation Buttons */}
            <div className="space-y-2.5">
              <button
                onClick={() => setActiveTab('education')}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                  activeTab === 'education'
                    ? 'bg-gradient-to-r from-[#6C63FF]/20 to-[#00E5FF]/20 border-cyan-400 text-white shadow-lg'
                    : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${activeTab === 'education' ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-white/[0.06] text-slate-300'}`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm font-heading">Academic Background</div>
                    <div className="text-xs text-slate-400">MITAOE Alandi, Pune</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('focus')}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                  activeTab === 'focus'
                    ? 'bg-gradient-to-r from-[#6C63FF]/20 to-[#00E5FF]/20 border-cyan-400 text-white shadow-lg'
                    : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${activeTab === 'focus' ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-white/[0.06] text-slate-300'}`}>
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm font-heading">Core Engineering Pillars</div>
                    <div className="text-xs text-slate-400">Software, IoT, BI & AI</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('methodology')}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                  activeTab === 'methodology'
                    ? 'bg-gradient-to-r from-[#6C63FF]/20 to-[#00E5FF]/20 border-cyan-400 text-white shadow-lg'
                    : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${activeTab === 'methodology' ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-white/[0.06] text-slate-300'}`}>
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm font-heading">Practical Philosophy</div>
                    <div className="text-xs text-slate-400">Hands-on Problem Solving</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Detailed Panel */}
          <div className="lg:col-span-8">
            <SpotlightCard className="p-6 sm:p-8 border-white/10 min-h-[420px]">
              {activeTab === 'education' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
                    <div>
                      <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">Education</span>
                      <h3 className="text-xl font-bold text-white mt-1 font-heading">B.Tech in Computer Science Engineering</h3>
                      <p className="text-sm text-slate-300 mt-0.5">MIT Academy of Engineering (MITAOE), Alandi, Pune</p>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
                      Batch 2024 – 2028
                    </span>
                  </div>

                  <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                    <p>
                      Pursuing B.Tech in Computer Science Engineering (2024 – 2028 Batch) at MITAOE Pune, focusing on software design patterns, database management, computer networks, object-oriented programming, and artificial intelligence.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1.5">
                        <div className="font-bold text-white text-xs flex items-center gap-2 font-heading">
                          <Code className="w-4 h-4 text-cyan-400" />
                          <span>Key Coursework</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems (SQL), Operating Systems, Computer Networks.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1.5">
                        <div className="font-bold text-white text-xs flex items-center gap-2 font-heading">
                          <Cpu className="w-4 h-4 text-indigo-400" />
                          <span>Practical Labs & IoT</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Hardware Microcontroller Interfacing, Environmental AQI Sensors, Blynk IoT Cloud, Network Packet Simulation (Cisco Packet Tracer).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'focus' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">Engineering Focus</span>
                    <h3 className="text-xl font-bold text-white mt-1 font-heading">Four Pillars of Expertise</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                      <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm font-heading">
                        <Code className="w-4 h-4" />
                        <span>Software Engineering</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Building object-oriented applications in Java & Python, relational database schemas in SQL, and web UI interfaces using JSX / React.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                      <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm font-heading">
                        <Cpu className="w-4 h-4" />
                        <span>IoT & Embedded Systems</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Designing hardware-software systems with ESP8266/NodeMCU, PIR sensors, MQ135 gas monitors, relays, and Blynk IoT Cloud.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                      <div className="flex items-center gap-2 text-purple-400 font-bold text-sm font-heading">
                        <LineChart className="w-4 h-4" />
                        <span>BI & Data Analytics</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Microsoft Power BI PL-300 certified. Transforming raw data into executive dashboards, DAX measures, and Tableau storyboards.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm font-heading">
                        <Shield className="w-4 h-4" />
                        <span>Cybersecurity & AI</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Cisco AICTE Virtual Internship alumni with hands-on network packet tracing, Kali Linux basics, customer sentiment NLP, and Anthropic Claude AI fluency.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'methodology' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">Methodology</span>
                    <h3 className="text-xl font-bold text-white mt-1 font-heading">Practical Build-First Approach</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10">
                      <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-heading">End-to-End Problem Solving</h4>
                        <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                          Whether it is building an agricultural advisory platform (AgroFam) or constructing a touchless hand sanitizing hardware device, I focus on solving real user pain points.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10">
                      <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-heading">Continuous Industry Certification</h4>
                        <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                          Actively verified across 18 certifications from Cisco Networking Academy, Microsoft, L&T EduTech, Simplilearn, and Anthropic.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10">
                      <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300 mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-heading">Data-Driven Visual Insights</h4>
                        <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                          Combining data analytics software like Power BI, Tableau, and Orange with structured SQL databases to turn data into visual storyboards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SpotlightCard>
          </div>

        </div>
      </div>
    </section>
  );
};
