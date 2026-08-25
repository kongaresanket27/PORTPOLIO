import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Wrench, Code2, LineChart, Cpu, Shield, Search, CheckCircle2, Sparkles, Terminal, Layers } from 'lucide-react';
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
    if (categoryName.includes('Programming')) return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
    if (categoryName.includes('Data')) return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
    if (categoryName.includes('IoT')) return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
    return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
  };

  return (
    <section id="skills" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Skills & <span className="bg-gradient-to-r from-[#00E5FF] via-[#6C63FF] to-[#8B5CF6] bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Core competencies across software engineering, business intelligence, hardware IoT development, network cybersecurity, and artificial intelligence.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white/[0.03] p-1.5 rounded-2xl border border-white/10 w-full sm:w-auto backdrop-blur-xl">
            {categoryNames.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, Power BI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/10 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors backdrop-blur-md"
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
                  <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                    <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-cyan-400">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight font-heading">
                      {category.categoryName}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {category.skills.map((skill) => (
                      <SpotlightCard key={skill.name} className="p-5 space-y-3.5 border-white/10 hover:border-cyan-500/40 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-cyan-300">
                              <Terminal className="w-4 h-4" />
                            </div>
                            <h4 className="font-bold text-base text-white font-heading">
                              {skill.name}
                            </h4>
                          </div>

                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${badgeStyle} flex items-center gap-1`}>
                            <Sparkles className="w-3 h-3" />
                            <span>Verified</span>
                          </span>
                        </div>

                        <div className="pt-2 border-t border-white/10">
                          <p className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
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
            <div className="text-center py-16 bg-white/[0.03] rounded-2xl border border-white/10 text-slate-400">
              No skills found matching "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
