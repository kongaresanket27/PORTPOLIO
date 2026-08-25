import React, { useState } from 'react';
import { contactInfo } from '../data/portfolioData';
import { GraduationCap, Code, Cpu, LineChart, Shield, Compass, BookOpen, Layers, Check, MapPin, Mail, Phone } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'focus' | 'methodology'>('education');

  return (
    <section id="about" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DDF4FA] border border-[#1689C7]/20 text-[#1689C7] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile & Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B5D] tracking-tight font-heading">
            About <span className="text-[#1689C7]">Sanket Kongare</span>
          </h2>
          <p className="text-[#647C91] text-xs sm:text-sm leading-relaxed">
            Computer Science Engineering student (2024 – 2028) at MITAOE Pune combining solid software engineering fundamentals with hardware IoT development and business data analytics.
          </p>
        </div>

        {/* Counter Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <SpotlightCard className="p-5 text-center border-[#D5E5EC] shadow-none bg-white">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1689C7] font-heading">8+</div>
            <div className="text-xs text-[#647C91] font-semibold uppercase tracking-wider mt-1">Software & Hardware Projects</div>
          </SpotlightCard>

          <SpotlightCard className="p-5 text-center border-[#D5E5EC] shadow-none bg-white">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#E6A23C] font-heading">18</div>
            <div className="text-xs text-[#647C91] font-semibold uppercase tracking-wider mt-1">Verified Credentials</div>
          </SpotlightCard>

          <SpotlightCard className="p-5 text-center border-[#D5E5EC] shadow-none bg-white">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#55BFA3] font-heading">15+</div>
            <div className="text-xs text-[#647C91] font-semibold uppercase tracking-wider mt-1">Technologies & Languages</div>
          </SpotlightCard>

          <SpotlightCard className="p-5 text-center border-[#D5E5EC] shadow-none bg-white">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1689C7] font-heading">PL-300</div>
            <div className="text-xs text-[#647C91] font-semibold uppercase tracking-wider mt-1">Microsoft Certified</div>
          </SpotlightCard>
        </div>

        {/* Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation & Profile Box */}
          <div className="lg:col-span-4 space-y-4">
            <SpotlightCard className="p-6 space-y-4 border-[#D5E5EC] shadow-none bg-white">
              <div className="flex items-center gap-4 pb-4 border-b border-[#D5E5EC]">
                <div className="relative w-16 h-16 rounded-2xl bg-[#DDF4FA] border border-[#D5E5EC] p-0.5 flex-shrink-0 flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center font-bold text-2xl text-[#1689C7] font-heading">
                    SK
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#123B5D] font-heading">Sanket Kongare</h3>
                  <p className="text-xs text-[#1689C7] font-semibold">CS @ MITAOE Alandi, Pune</p>
                  <p className="text-[11px] text-[#647C91] mt-0.5">Academic Years: 2024 – 2028</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#647C91]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#1689C7]" />
                  <span>Alandi, Pune, Maharashtra 412105</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#1689C7]" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#1689C7]" />
                  <span>{contactInfo.phone}</span>
                </div>
              </div>
            </SpotlightCard>

            {/* Navigation Buttons */}
            <div className="space-y-2.5">
              <button
                onClick={() => setActiveTab('education')}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                  activeTab === 'education'
                    ? 'bg-[#DDF4FA] border-[#1689C7]/40 text-[#123B5D] shadow-none'
                    : 'bg-white border-[#D5E5EC] text-[#647C91] hover:bg-[#FAF8F2] hover:text-[#123B5D] shadow-none'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${activeTab === 'education' ? 'bg-[#1689C7] text-white font-bold' : 'bg-[#DDF4FA] text-[#1689C7]'}`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm font-heading">Academic Background</div>
                    <div className="text-xs text-[#647C91]">MITAOE Alandi, Pune</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('focus')}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                  activeTab === 'focus'
                    ? 'bg-[#DDF4FA] border-[#1689C7]/40 text-[#123B5D] shadow-none'
                    : 'bg-white border-[#D5E5EC] text-[#647C91] hover:bg-[#FAF8F2] hover:text-[#123B5D] shadow-none'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${activeTab === 'focus' ? 'bg-[#1689C7] text-white font-bold' : 'bg-[#DDF4FA] text-[#1689C7]'}`}>
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm font-heading">Core Engineering Pillars</div>
                    <div className="text-xs text-[#647C91]">Software, IoT, BI & AI</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('methodology')}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                  activeTab === 'methodology'
                    ? 'bg-[#DDF4FA] border-[#1689C7]/40 text-[#123B5D] shadow-none'
                    : 'bg-white border-[#D5E5EC] text-[#647C91] hover:bg-[#FAF8F2] hover:text-[#123B5D] shadow-none'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${activeTab === 'methodology' ? 'bg-[#1689C7] text-white font-bold' : 'bg-[#DDF4FA] text-[#1689C7]'}`}>
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm font-heading">Practical Philosophy</div>
                    <div className="text-xs text-[#647C91]">Hands-on Problem Solving</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Detailed Panel */}
          <div className="lg:col-span-8">
            <SpotlightCard className="p-6 sm:p-8 border-[#D5E5EC] min-h-[420px] shadow-none bg-white">
              {activeTab === 'education' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#D5E5EC] pb-4 gap-2">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#1689C7] uppercase tracking-wider">Education</span>
                      <h3 className="text-xl font-bold text-[#123B5D] mt-1 font-heading">B.Tech in Computer Science Engineering</h3>
                      <p className="text-sm text-[#647C91] mt-0.5">MIT Academy of Engineering (MITAOE), Alandi, Pune</p>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-[#DDF4FA] border border-[#1689C7]/25 text-[#1689C7] text-xs font-bold">
                      Batch 2024 – 2028
                    </span>
                  </div>

                  <div className="space-y-4 text-sm text-[#647C91] leading-relaxed">
                    <p>
                      Pursuing B.Tech in Computer Science Engineering (2024 – 2028 Batch) at MITAOE Pune, focusing on software design patterns, database management, computer networks, object-oriented programming, and artificial intelligence.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#D5E5EC] space-y-1.5">
                        <div className="font-bold text-[#123B5D] text-xs flex items-center gap-2 font-heading">
                          <Code className="w-4 h-4 text-[#1689C7]" />
                          <span>Key Coursework</span>
                        </div>
                        <p className="text-xs text-[#647C91] leading-relaxed">
                          Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems (SQL), Operating Systems, Computer Networks.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#D5E5EC] space-y-1.5">
                        <div className="font-bold text-[#123B5D] text-xs flex items-center gap-2 font-heading">
                          <Cpu className="w-4 h-4 text-[#55BFA3]" />
                          <span>Practical Labs & IoT</span>
                        </div>
                        <p className="text-xs text-[#647C91] leading-relaxed">
                          Hardware Microcontroller Interfacing, Environmental AQI Sensors, Blynk IoT Cloud, Network Packet Simulation (Cisco Packet Tracer).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'focus' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="border-b border-[#D5E5EC] pb-4">
                    <span className="text-xs font-mono font-bold text-[#1689C7] uppercase tracking-wider">Engineering Focus</span>
                    <h3 className="text-xl font-bold text-[#123B5D] mt-1 font-heading">Four Pillars of Expertise</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#D5E5EC] space-y-2">
                      <div className="flex items-center gap-2 text-[#1689C7] font-bold text-sm font-heading">
                        <Code className="w-4 h-4" />
                        <span>Software Engineering</span>
                      </div>
                      <p className="text-xs text-[#647C91] leading-relaxed">
                        Building object-oriented applications in Java & Python, relational database schemas in SQL, and web UI interfaces using React & TypeScript.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#D5E5EC] space-y-2">
                      <div className="flex items-center gap-2 text-[#55BFA3] font-bold text-sm font-heading">
                        <Cpu className="w-4 h-4" />
                        <span>IoT & Embedded Systems</span>
                      </div>
                      <p className="text-xs text-[#647C91] leading-relaxed">
                        Designing hardware-software systems with ESP8266/NodeMCU, PIR sensors, MQ135 gas monitors, relays, and Blynk IoT Cloud.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#D5E5EC] space-y-2">
                      <div className="flex items-center gap-2 text-[#1689C7] font-bold text-sm font-heading">
                        <LineChart className="w-4 h-4" />
                        <span>BI & Data Analytics</span>
                      </div>
                      <p className="text-xs text-[#647C91] leading-relaxed">
                        Microsoft Power BI PL-300 certified. Transforming raw data into executive dashboards, DAX measures, and Tableau storyboards.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#D5E5EC] space-y-2">
                      <div className="flex items-center gap-2 text-[#55BFA3] font-bold text-sm font-heading">
                        <Shield className="w-4 h-4" />
                        <span>Cybersecurity & AI</span>
                      </div>
                      <p className="text-xs text-[#647C91] leading-relaxed">
                        Cisco AICTE Virtual Internship alumni with hands-on network packet tracing, Kali Linux basics, customer sentiment NLP, and Anthropic Claude AI fluency.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'methodology' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="border-b border-[#D5E5EC] pb-4">
                    <span className="text-xs font-mono font-bold text-[#1689C7] uppercase tracking-wider">Methodology</span>
                    <h3 className="text-xl font-bold text-[#123B5D] mt-1 font-heading">Practical Build-First Approach</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF8F2] border border-[#D5E5EC]">
                      <div className="p-1.5 rounded-lg bg-[#DDF4FA] text-[#1689C7] mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#123B5D] font-heading">End-to-End Problem Solving</h4>
                        <p className="text-xs text-[#647C91] mt-0.5 leading-relaxed">
                          Whether it is building an agricultural advisory platform (AgroFam) or constructing a touchless hand sanitizing hardware device, I focus on solving real user pain points.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF8F2] border border-[#D5E5EC]">
                      <div className="p-1.5 rounded-lg bg-[#DDF4FA] text-[#1689C7] mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#123B5D] font-heading">Continuous Industry Certification</h4>
                        <p className="text-xs text-[#647C91] mt-0.5 leading-relaxed">
                          Actively verified across 18 certifications from Cisco Networking Academy, Microsoft, L&T EduTech, Simplilearn, and Anthropic.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF8F2] border border-[#D5E5EC]">
                      <div className="p-1.5 rounded-lg bg-[#DDF4FA] text-[#1689C7] mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#123B5D] font-heading">Data-Driven Visual Insights</h4>
                        <p className="text-xs text-[#647C91] mt-0.5 leading-relaxed">
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


