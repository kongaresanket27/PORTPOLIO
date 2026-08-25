import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Wrench, Code2, LineChart, Cpu, Shield, Search, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryNames = ['All', ...skillCategories.map(c => c.categoryName)];

  const filteredCategories = skillCategories.map(cat => {
    const matchesCategory = activeCategory === 'All' || cat.categoryName === activeCategory;
    if (!matchesCategory) return null;

    const matchedSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.experience.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchedSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchedSkills
    };
  }).filter(Boolean);

  const getCategoryIcon = (categoryName: string) => {
    if (categoryName.includes('Programming')) return Code2;
    if (categoryName.includes('Data')) return LineChart;
    if (categoryName.includes('IoT')) return Cpu;
    return Shield;
  };

  const getCategoryBadgeColor = (categoryName: string) => {
    if (categoryName.includes('Programming')) return 'text-[#168AAD] bg-[#168AAD]/10 border-[#168AAD]/20';
    if (categoryName.includes('Data')) return 'text-[#52B69A] bg-[#52B69A]/10 border-[#52B69A]/20';
    if (categoryName.includes('IoT')) return 'text-[#168AAD] bg-[#168AAD]/10 border-[#168AAD]/20';
    return 'text-[#52B69A] bg-[#52B69A]/10 border-[#52B69A]/20';
  };

  return (
    <section id="skills" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#168AAD]/10 border border-[#168AAD]/25 text-[#168AAD] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <Wrench className="w-3.5 h-3.5 text-[#168AAD]" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16324F] tracking-tight font-heading">
            Skills & <span className="text-[#168AAD]">Tech Stack</span>
          </h2>
          <p className="text-[#617386] text-xs sm:text-sm leading-relaxed">
            Core competencies across software engineering, business intelligence, hardware IoT development, network cybersecurity, and artificial intelligence.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-[#F0F4F4]/90 p-1.5 rounded-2xl border border-[#D9E3E8] w-full sm:w-auto backdrop-blur-xl">
            {categoryNames.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#168AAD] text-white font-bold shadow-none'
                    : 'text-[#617386] hover:text-[#16324F] hover:bg-[#E2EBEF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#617386] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, Power BI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#D9E3E8] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-[#16324F] placeholder-[#617386] focus:outline-none focus:border-[#168AAD] transition-colors shadow-none"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => {
              if (!category) return null;
              const CategoryIcon = getCategoryIcon(category.categoryName);
              const badgeStyle = getCategoryBadgeColor(category.categoryName);

              return (
                <div key={category.categoryName} className="space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-[#D9E3E8]">
                    <div className="p-2.5 rounded-xl bg-[#168AAD]/10 border border-[#168AAD]/20 text-[#168AAD]">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#16324F] tracking-tight font-heading">
                      {category.categoryName}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {category.skills.map((skill) => (
                      <SpotlightCard key={skill.name} className="p-5 space-y-3.5 border-[#D9E3E8] hover:border-[#168AAD]/40 transition-colors shadow-none">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="p-2 rounded-lg bg-[#F7F8F3] border border-[#D9E3E8] text-[#168AAD]">
                              <Terminal className="w-4 h-4" />
                            </div>
                            <h4 className="font-bold text-base text-[#16324F] font-heading">
                              {skill.name}
                            </h4>
                          </div>

                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${badgeStyle} flex items-center gap-1`}>
                            <Sparkles className="w-3 h-3 text-[#168AAD]" />
                            <span>Verified</span>
                          </span>
                        </div>

                        <div className="pt-2 border-t border-[#D9E3E8]">
                          <p className="text-xs text-[#617386] leading-relaxed flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#52B69A] flex-shrink-0 mt-0.5" />
                            <span>{skill.experience}</span>
                          </p>
                        </div>
                      </SpotlightCard>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#D9E3E8] text-[#617386] shadow-none">
              No skills found matching "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
};


