import React, { useState } from 'react';
import { BarChart3, PieChart, Filter, Activity, TrendingUp, DollarSign, Award, GraduationCap, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface InteractiveDashboardProps {
  embedded?: boolean;
}

export const InteractiveDashboard: React.FC<InteractiveDashboardProps> = ({ embedded = false }) => {
  const [activeBoard, setActiveBoard] = useState<'sales' | 'campus' | 'aqi'>('sales');
  const [salesYearFilter, setSalesYearFilter] = useState<string>('all');
  const [campusTierFilter, setCampusTierFilter] = useState<string>('all');

  const content = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
          <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Sanket Kongare's Official Power BI Reports</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
          Interactive <span className="bg-gradient-to-r from-[#00E5FF] via-[#6C63FF] to-[#8B5CF6] bg-clip-text text-transparent">Power BI Dashboards</span>
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
          Interactive previews rendered directly from Sanket's verified Power BI Desktop dashboards (PL-300 Certified). Toggle between Executive Retail Financials, Campus Academic & Placement Analytics, and Hardware IoT Telemetry.
        </p>
      </div>

      {/* Dashboard Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <button
          onClick={() => setActiveBoard('sales')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
            activeBoard === 'sales'
              ? 'bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-slate-950 shadow-lg shadow-cyan-500/20'
              : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/10 hover:bg-white/[0.08]'
          }`}
        >
          <DollarSign className="w-4 h-4 text-emerald-400" />
          <span>Executive Retail Sales & Profit Analytics</span>
        </button>

        <button
          onClick={() => setActiveBoard('campus')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
            activeBoard === 'campus'
              ? 'bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-slate-950 shadow-lg shadow-cyan-500/20'
              : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/10 hover:bg-white/[0.08]'
          }`}
        >
          <GraduationCap className="w-4 h-4 text-amber-400" />
          <span>Campus Placement & Academic Analytics</span>
        </button>

        <button
          onClick={() => setActiveBoard('aqi')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
            activeBoard === 'aqi'
              ? 'bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-slate-950 shadow-lg shadow-cyan-500/20'
              : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/10 hover:bg-white/[0.08]'
          }`}
        >
          <Activity className="w-4 h-4 text-cyan-400" />
          <span>IoT Environmental AQI Telemetry</span>
        </button>
      </div>

      {/* Main Container */}
      <SpotlightCard className="p-6 sm:p-8 space-y-6 border-white/15">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2 text-slate-300 font-semibold">
            <Filter className="w-4 h-4 text-cyan-400" />
            <span>Active Power BI Desktop Dataset Slicers:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {activeBoard === 'sales' && (
              <select
                value={salesYearFilter}
                onChange={(e) => setSalesYearFilter(e.target.value)}
                className="bg-white/[0.05] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 cursor-pointer"
              >
                <option value="all" className="bg-slate-950">Year Scope: All Years (2014 - 2017)</option>
                <option value="2015" className="bg-slate-950">Year Scope: 2015 Focus ($470.53K Sales)</option>
              </select>
            )}

            {activeBoard === 'campus' && (
              <select
                value={campusTierFilter}
                onChange={(e) => setCampusTierFilter(e.target.value)}
                className="bg-white/[0.05] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 cursor-pointer"
              >
                <option value="all" className="bg-slate-950">Tier Scope: All Tiers (1, 2 & 3)</option>
                <option value="tier1" className="bg-slate-950">Tier Scope: Tier 1 Colleges</option>
                <option value="tier2" className="bg-slate-950">Tier Scope: Tier 2 Colleges</option>
                <option value="tier3" className="bg-slate-950">Tier Scope: Tier 3 Colleges</option>
              </select>
            )}

            <span className="px-3 py-1 rounded-md bg-amber-500/10 text-amber-300 text-[11px] font-bold border border-amber-500/30 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Microsoft Power BI Desktop Sync</span>
            </span>
          </div>
        </div>

        {/* BOARD 1: RETAIL SALES & PROFIT FINANCIAL ANALYTICS */}
        {activeBoard === 'sales' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-[11px] text-slate-400 font-medium uppercase font-mono">Total Sales Volume</span>
                <div className="text-2xl font-extrabold text-cyan-400 font-heading">
                  {salesYearFilter === '2015' ? '$470.53K' : '$2,297.20K'}
                </div>
                <p className="text-[10px] text-slate-400">West $725.46K • East $678.78K</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-[11px] text-slate-400 font-medium uppercase font-mono">Total Profit Generated</span>
                <div className="text-2xl font-extrabold text-emerald-400 font-heading">
                  {salesYearFilter === '2015' ? '$61.62K' : '$286.39K'}
                </div>
                <p className="text-[10px] text-slate-400">Technology Profit: $145.45K (50.8%)</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-[11px] text-slate-400 font-medium uppercase font-mono">New York Sales (2015)</span>
                <div className="text-2xl font-extrabold text-amber-400 font-heading">$80.32K</div>
                <p className="text-[10px] text-slate-400">Top Performing State Region</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-[11px] text-slate-400 font-medium uppercase font-mono">New York Profit (2015)</span>
                <div className="text-2xl font-extrabold text-purple-400 font-heading">$19.28K</div>
                <p className="text-[10px] text-slate-400">High Margin Profit Hub</p>
              </div>
            </div>

            {/* Category Breakdown Charts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Sales by Category Donut */}
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                <h4 className="text-xs font-bold text-white font-heading uppercase flex items-center justify-between">
                  <span>Sales by Category</span>
                  <span className="text-slate-400 font-mono text-[10px]">$2.29M Total</span>
                </h4>
                <div className="space-y-2.5 pt-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-medium">Technology</span>
                      <span className="font-bold text-cyan-400">836.15K (36.4%)</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: '36.4%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-medium">Furniture</span>
                      <span className="font-bold text-amber-400">742.00K (32.3%)</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full" style={{ width: '32.3%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-medium">Office Supplies</span>
                      <span className="font-bold text-indigo-400">719.05K (31.3%)</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-400 rounded-full" style={{ width: '31.3%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profit by Category Donut */}
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                <h4 className="text-xs font-bold text-white font-heading uppercase flex items-center justify-between">
                  <span>Profit by Category</span>
                  <span className="text-slate-400 font-mono text-[10px]">$286.39K Total</span>
                </h4>
                <div className="space-y-2.5 pt-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-medium">Technology</span>
                      <span className="font-bold text-emerald-400">145.45K (50.8%)</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full" style={{ width: '50.8%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-medium">Office Supplies</span>
                      <span className="font-bold text-purple-400">122.49K (42.8%)</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-400 rounded-full" style={{ width: '42.8%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-medium">Furniture</span>
                      <span className="font-bold text-rose-400">18.45K (6.4%)</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-400 rounded-full" style={{ width: '6.4%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sales by Region */}
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                <h4 className="text-xs font-bold text-white font-heading uppercase flex items-center justify-between">
                  <span>Sales by Region</span>
                  <span className="text-slate-400 font-mono text-[10px]">4 Territories</span>
                </h4>
                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-slate-300">West Region</span>
                    <span className="font-bold text-cyan-400">725.46K (31.6%)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-slate-300">East Region</span>
                    <span className="font-bold text-indigo-400">678.78K (29.6%)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-slate-300">Central Region</span>
                    <span className="font-bold text-amber-400">501.24K (21.8%)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-300">South Region</span>
                    <span className="font-bold text-rose-400">391.72K (17.1%)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Top Profitable Products */}
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
              <h4 className="text-xs font-bold text-white font-heading uppercase">Top Product IDs by Net Profitability</h4>
              <div className="space-y-2 pt-2">
                {[
                  { id: 'TEC-CO-10004722', label: 'Canon imageCLASS Copier', profit: '$31,200', pct: 100, color: 'bg-emerald-400' },
                  { id: 'OFF-BI-10003527', label: 'Fellowes Binding System', profit: '$8,100', pct: 32, color: 'bg-cyan-400' },
                  { id: 'TEC-CO-10001449', label: 'Hewlett Copier Unit', profit: '$7,200', pct: 28, color: 'bg-indigo-400' },
                  { id: 'TEC-CO-10003763', label: 'Canon Multifunction Printer', profit: '$4,800', pct: 20, color: 'bg-purple-400' },
                  { id: 'TEC-AC-10002049', label: 'Logitech Wireless Adapter', profit: '$4,200', pct: 18, color: 'bg-amber-400' },
                ].map((item) => (
                  <div key={item.id} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-mono text-slate-300">{item.id} <span className="text-slate-400 text-[10px]">({item.label})</span></span>
                      <span className="font-bold text-white">{item.profit}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* BOARD 2: CAMPUS PLACEMENT & ACADEMIC ANALYTICS */}
        {activeBoard === 'campus' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* KPI Banner */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-[11px] text-slate-400 font-medium uppercase font-mono">Total Placed Students</span>
                <div className="text-2xl font-extrabold text-emerald-400 font-heading">54.46K Students</div>
                <p className="text-[10px] text-slate-400">Tier 2: 27.12K • Tier 3: 16.35K</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-[11px] text-slate-400 font-medium uppercase font-mono">Average CGPA Across Branches</span>
                <div className="text-2xl font-extrabold text-cyan-400 font-heading">7.50 CGPA</div>
                <p className="text-[10px] text-slate-400">CSE: 7.508 • IT: 7.505 • ECE: 7.501</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-[11px] text-slate-400 font-medium uppercase font-mono">Max Salary Package (Tier 1)</span>
                <div className="text-2xl font-extrabold text-amber-400 font-heading">20+ LPA</div>
                <p className="text-[10px] text-slate-400">Computer Science & ECE Branches</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-[11px] text-slate-400 font-medium uppercase font-mono">Tier 1 Placement Count</span>
                <div className="text-2xl font-extrabold text-purple-400 font-heading">10.99K Placed</div>
                <p className="text-[10px] text-slate-400">Out of 20.16K Total Applicants</p>
              </div>
            </div>

            {/* Branch Wise CGPA & Internship Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Branch Wise Average CGPA */}
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                <h4 className="text-xs font-bold text-white font-heading uppercase flex items-center justify-between">
                  <span>Branch Wise Average CGPA</span>
                  <span className="text-slate-400 font-mono text-[10px]">6 Engineering Depts</span>
                </h4>

                <div className="space-y-2 pt-1 text-xs">
                  {[
                    { branch: 'Computer Science Engineering (CSE)', cgpa: '7.508 CGPA', pct: 100, color: 'text-cyan-400' },
                    { branch: 'Information Technology (IT)', cgpa: '7.505 CGPA', pct: 99.6, color: 'text-indigo-400' },
                    { branch: 'Electronics & Comm (ECE)', cgpa: '7.501 CGPA', pct: 99.1, color: 'text-purple-400' },
                    { branch: 'Mechanical Engineering', cgpa: '7.493 CGPA', pct: 98.0, color: 'text-amber-400' },
                    { branch: 'Electrical & Electronics (EEE)', cgpa: '7.491 CGPA', pct: 97.7, color: 'text-emerald-400' },
                    { branch: 'Civil Engineering', cgpa: '7.483 CGPA', pct: 96.6, color: 'text-rose-400' },
                  ].map((item) => (
                    <div key={item.branch} className="flex items-center justify-between border-b border-white/5 pb-1.5">
                      <span className="text-slate-300">{item.branch}</span>
                      <span className={`font-bold font-mono ${item.color}`}>{item.cgpa}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Placement according to College Tier */}
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                <h4 className="text-xs font-bold text-white font-heading uppercase">Placement Status by College Tier</h4>
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-semibold">Tier 2 Colleges</span>
                      <span className="font-bold text-emerald-400">27.12K Placed (54.3%)</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full" style={{ width: '54.3%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-semibold">Tier 3 Colleges</span>
                      <span className="font-bold text-amber-400">16.35K Placed (54.7%)</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full" style={{ width: '54.7%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-semibold">Tier 1 Colleges</span>
                      <span className="font-bold text-cyan-400">10.99K Placed (54.5%)</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: '54.5%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Internships & Hackathons count by branch */}
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
              <h4 className="text-xs font-bold text-white font-heading uppercase">Branch Wise Internship & Certification Counts</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
                {[
                  { branch: 'CSE', internships: '52,100+', certs: '64,000+' },
                  { branch: 'IT', internships: '28,400+', certs: '38,000+' },
                  { branch: 'ECE', internships: '21,100+', certs: '29,000+' },
                  { branch: 'EEE', internships: '14,200+', certs: '20,000+' },
                  { branch: 'Mechanical', internships: '13,500+', certs: '19,000+' },
                  { branch: 'Civil', internships: '12,000+', certs: '18,000+' },
                ].map((b) => (
                  <div key={b.branch} className="p-3 rounded-lg bg-white/[0.04] border border-white/10 space-y-1 text-center">
                    <span className="text-xs font-bold text-cyan-400 font-heading">{b.branch}</span>
                    <p className="text-[10px] text-slate-300 font-mono">Internships: {b.internships}</p>
                    <p className="text-[10px] text-amber-300 font-mono">Certs: {b.certs}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* BOARD 3: IOT ENVIRONMENTAL TELEMETRY */}
        {activeBoard === 'aqi' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-[11px] text-slate-400 font-medium uppercase font-mono">Average AQI</span>
                <div className="text-2xl font-extrabold text-emerald-400 font-heading">42 (Good)</div>
                <p className="text-[10px] text-slate-400">Target &lt; 50 • Alandi Station</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-[11px] text-slate-400 font-medium uppercase font-mono">Particulate PM2.5</span>
                <div className="text-2xl font-extrabold text-cyan-400 font-heading">18.4 µg/m³</div>
                <p className="text-[10px] text-slate-400">Optical Dust Sensor GP2Y</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-[11px] text-slate-400 font-medium uppercase font-mono">Ambient Temp</span>
                <div className="text-2xl font-extrabold text-amber-400 font-heading">26.8 °C</div>
                <p className="text-[10px] text-slate-400">DHT11 Sensor Calibrated</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-[11px] text-slate-400 font-medium uppercase font-mono">Relative Humidity</span>
                <div className="text-2xl font-extrabold text-purple-400 font-heading">58 %</div>
                <p className="text-[10px] text-slate-400">Normal Range (40-60%)</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white font-heading">Hourly AQI & Particulate Matter Telemetry Trend</span>
                <span className="text-slate-400 font-mono">ESP8266 + Blynk IoT Cloud</span>
              </div>

              <div className="h-36 flex items-end justify-between gap-2 pt-4 px-2">
                {[
                  { time: '08:00', val: 35, color: 'bg-emerald-400' },
                  { time: '10:00', val: 48, color: 'bg-emerald-300' },
                  { time: '12:00', val: 62, color: 'bg-amber-400' },
                  { time: '14:00', val: 54, color: 'bg-emerald-300' },
                  { time: '16:00', val: 41, color: 'bg-emerald-400' },
                  { time: '18:00', val: 38, color: 'bg-emerald-400' },
                  { time: '20:00', val: 45, color: 'bg-emerald-300' },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <span className="text-[10px] text-slate-300 font-semibold">{bar.val}</span>
                    <div
                      className={`w-full max-w-[36px] rounded-t-md transition-all duration-300 ${bar.color}`}
                      style={{ height: `${(bar.val / 80) * 100}%` }}
                    ></div>
                    <span className="text-[10px] text-slate-400">{bar.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </SpotlightCard>
    </div>
  );

  if (embedded) {
    return <div className="pt-2">{content}</div>;
  }

  return (
    <section id="analytics" className="py-12 sm:py-16 relative overflow-hidden">
      {content}
    </section>
  );
};
