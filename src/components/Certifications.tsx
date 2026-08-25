import React, { useState } from 'react';
import { certifications } from '../data/portfolioData';
import { Certification } from '../types';
import { CertificateModal } from './CertificateModal';
import { OfficialCertificateDocument } from './OfficialCertificateDocument';
import { Award, ShieldCheck, Calendar, Search, Building2, FileText, ExternalLink } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { motion } from 'motion/react';

export const Certifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const categories = [
    { id: 'all', label: 'All Certificates' },
    { id: 'data', label: 'Data & Power BI' },
    { id: 'cybersecurity', label: 'Cybersecurity & Networks' },
    { id: 'iot', label: 'IoT & Clean Energy' },
    { id: 'programming', label: 'Python & Software' },
    { id: 'ai', label: 'AI & Anthropic' },
  ];

  const filteredCertifications = certifications.filter((cert) => {
    const matchesCategory = activeCategory === 'all' || cert.category === activeCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.certId && cert.certId.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certifications" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E9A23B]/10 border border-[#E9A23B]/25 text-[#E9A23B] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-[#E9A23B]" />
            <span>Verified Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16324F] tracking-tight font-heading">
            18 Professional <span className="text-[#E9A23B]">Certifications</span>
          </h2>
          <p className="text-[#617386] text-xs sm:text-sm leading-relaxed">
            Verified official certifications from Microsoft, Cisco Networking Academy, L&T EduTech, OpenEDG Python Institute, Wadhwani Foundation, Simplilearn, and Anthropic awarded to <strong>Sanket Kongare</strong>.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-[#F0F4F4]/90 p-1.5 rounded-2xl border border-[#D9E3E8] w-full md:w-auto backdrop-blur-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#168AAD] text-white font-bold shadow-none'
                    : 'text-[#617386] hover:text-[#16324F] hover:bg-[#E2EBEF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#617386] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, ID or issuer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#D9E3E8] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-[#16324F] placeholder-[#617386] focus:outline-none focus:border-[#168AAD] transition-colors shadow-none"
            />
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.length > 0 ? (
            filteredCertifications.map((cert, idx) => {
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setSelectedCert(cert)}
                  className="cursor-pointer"
                >
                  <SpotlightCard
                    spotlightColor="rgba(22, 138, 173, 0.08)"
                    className="p-5 h-full flex flex-col justify-between border-[#D9E3E8] hover:border-[#168AAD]/40 shadow-none"
                  >
                    <div className="space-y-4">
                      
                      {/* Issuer Header */}
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-lg bg-[#F7F8F3] border border-[#D9E3E8] text-[10px] font-bold text-[#16324F] uppercase tracking-wider flex items-center gap-1.5 font-mono">
                          <Building2 className="w-3.5 h-3.5 text-[#168AAD]" />
                          <span>{cert.issuer}</span>
                        </span>
                        <span className="text-[11px] text-[#168AAD] font-bold flex items-center gap-1">
                          <ShieldCheck className="w-4 h-4" />
                          <span>Verified</span>
                        </span>
                      </div>

                      {/* Official Certificate Mini Preview */}
                      <div className="relative overflow-hidden rounded-xl border border-[#D9E3E8] bg-[#F7F8F3] h-[170px] group shadow-none">
                        <div className="transform scale-[0.48] origin-top-left w-[208%] pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
                          <OfficialCertificateDocument cert={cert} />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-[#16324F]/60 via-transparent to-transparent flex items-end p-3">
                          <span className="text-[10px] font-bold text-[#16324F] bg-white/95 px-2.5 py-1 rounded-lg border border-[#D9E3E8] flex items-center gap-1.5 shadow-none backdrop-blur-md">
                            <FileText className="w-3.5 h-3.5 text-[#168AAD]" />
                            <span>Official Credential</span>
                          </span>
                        </div>
                      </div>

                      {/* Certificate Title */}
                      <div>
                        <h3 className="text-base font-bold text-[#16324F] group-hover:text-[#168AAD] transition-colors leading-snug font-heading">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-[#617386] mt-1 line-clamp-2 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>

                      {/* Skills tags preview */}
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skillsLearned.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded-md bg-[#F7F8F3] text-[10px] font-medium text-[#16324F] border border-[#D9E3E8]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Date & ID Footer */}
                    <div className="pt-4 mt-4 border-t border-[#D9E3E8] flex items-center justify-between text-xs text-[#617386]">
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <Calendar className="w-3.5 h-3.5 text-[#617386]" />
                        <span>{cert.date}</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#168AAD] flex items-center gap-1 group-hover:underline">
                        <span>Inspect</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>

                  </SpotlightCard>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-16 bg-white rounded-2xl border border-[#D9E3E8] text-[#617386] shadow-none">
              No certificates found matching your filter criteria.
            </div>
          )}
        </div>

        {/* Certificate Modal Lightbox */}
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />

      </div>
    </section>
  );
};


