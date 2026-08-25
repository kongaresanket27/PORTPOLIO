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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#168AAD]/10 border border-[#168AAD]/25 text-[#168AAD] text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
          <BarChart3 className="w-3.5 h-3.5 text-[#168AAD]" />
          <span>Sanket Kongare's Official Power BI Reports</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16324F] tracking-tight font-heading">
          Interactive <span className="text-[#168AAD]">Power BI Dashboards</span>
        </h2>
        <p className="text-[#617386] text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
          Interactive previews rendered directly from Sanket's verified Power BI Desktop dashboards (PL-300 Certified). Toggle between Executive Retail Financials, Campus Academic & Placement Analytics, and Hardware IoT Telemetry.
        </p>
      </div>

      {/* Dashboard Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <button
          onClick={() => setActiveBoard('sales')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
            activeBoard === 'sales'
              ? 'bg-[#168AAD] text-white shadow-none'
              : 'bg-white text-[#617386] hover:text-[#16324F] border border-[#D9E3E8] hover:bg-[#F0F4F4]'
          }`}
        >
          <DollarSign className={`w-4 h-4 ${activeBoard === 'sales' ? 'text-white' : 'text-[#168AAD]'}`} />
          <span>Executive Retail Sales & Profit Analytics</span>
        </button>

        <button
          onClick={() => setActiveBoard('campus')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
            activeBoard === 'campus'
              ? 'bg-[#168AAD] text-white shadow-none'
              : 'bg-white text-[#617386] hover:text-[#16324F] border border-[#D9E3E8] hover:bg-[#F0F4F4]'
          }`}
        >
          <GraduationCap className={`w-4 h-4 ${activeBoard === 'campus' ? 'text-white' : 'text-[#E9A23B]'}`} />
          <span>Campus Placement & Academic Analytics</span>
        </button>

        <button
          onClick={() => setActiveBoard('aqi')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
            activeBoard === 'aqi'
              ? 'bg-[#168AAD] text-white shadow-none'
              : 'bg-white text-[#617386] hover:text-[#16324F] border border-[#D9E3E8] hover:bg-[#F0F4F4]'
          }`}
        >
          <Activity className={`w-4 h-4 ${activeBoard === 'aqi' ? 'text-white' : 'text-[#52B69A]'}`} />
          <span>IoT Environmental AQI Telemetry</span>
        </button>
      </div>

      {/* Main Container */}
      <SpotlightCard spotlightColor="rgba(22, 138, 173, 0.08)" className="p-6 sm:p-8 space-y-6 border-[#D9E3E8] bg-white shadow-none">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D9E3E8] text-xs">
          <div className="flex items-center gap-2 text-[#16324F] font-semibold">
            <Filter className="w-4 h-4 text-[#168AAD]" />
            <span>Active Power BI Desktop Dataset Slicers:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {activeBoard === 'sales' && (
              <select
                value={salesYearFilter}
                onChange={(e) => setSalesYearFilter(e.target.value)}
                className="bg-[#F7F8F3] border border-[#D9E3E8] rounded-lg px-3 py-1.5 text-xs text-[#16324F] focus:outline-none focus:border-[#168AAD] cursor-pointer"
              >
                <option value="all">Year Scope: All Years (2014 - 2017)</option>
                <option value="2015">Year Scope: 2015 Focus ($470.53K Sales)</option>
              </select>
            )}

            {activeBoard === 'campus' && (
              <select
                value={campusTierFilter}
                onChange={(e) => setCampusTierFilter(e.target.value)}
                className="bg-[#F7F8F3] border border-[#D9E3E8] rounded-lg px-3 py-1.5 text-xs text-[#16324F] focus:outline-none focus:border-[#168AAD] cursor-pointer"
              >
                <option value="all">Tier Scope: All Tiers (1, 2 & 3)</option>
                <option value="tier1">Tier Scope: Tier 1 Colleges</option>
                <option value="tier2">Tier Scope: Tier 2 Colleges</option>
                <option value="tier3">Tier Scope: Tier 3 Colleges</option>
              </select>
            )}

            <span className="px-3 py-1 rounded-md bg-[#168AAD]/10 text-[#16324F] text-[11px] font-bold border border-[#168AAD]/20 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#168AAD]" />
              <span>Microsoft Power BI Desktop Sync</span>
            </span>
          </div>
        </div>

        {/* BOARD 1: RETAIL SALES & PROFIT FINANCIAL ANALYTICS */}
        {activeBoard === 'sales' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-1">
                <span className="text-[11px] text-[#617386] font-medium uppercase font-mono">Total Sales Volume</span>
                <div className="text-2xl font-extrabold text-[#16324F] font-heading">
                  {salesYearFilter === '2015' ? '$470.53K' : '$2,297.20K'}
                </div>
                <p className="text-[10px] text-[#617386]">West $725.46K • East $678.78K</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-1">
                <span className="text-[11px] text-[#617386] font-medium uppercase font-mono">Total Profit Generated</span>
                <div className="text-2xl font-extrabold text-[#52B69A] font-heading">
                  {salesYearFilter === '2015' ? '$61.62K' : '$286.39K'}
                </div>
                <p className="text-[10px] text-[#617386]">Technology Profit: $145.45K (50.8%)</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-1">
                <span className="text-[11px] text-[#617386] font-medium uppercase font-mono">New York Sales (2015)</span>
                <div className="text-2xl font-extrabold text-[#168AAD] font-heading">$80.32K</div>
                <p className="text-[10px] text-[#617386]">Top Performing State Region</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-1">
                <span className="text-[11px] text-[#617386] font-medium uppercase font-mono">New York Profit (2015)</span>
                <div className="text-2xl font-extrabold text-[#52B69A] font-heading">$19.28K</div>
                <p className="text-[10px] text-[#617386]">High Margin Profit Hub</p>
              </div>
            </div>

            {/* Category Breakdown Charts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Sales by Category Donut */}
              <div className="p-5 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-3">
                <h4 className="text-xs font-bold text-[#16324F] font-heading uppercase flex items-center justify-between">
                  <span>Sales by Category</span>
                  <span className="text-[#617386] font-mono text-[10px]">$2.29M Total</span>
                </h4>
                <div className="space-y-2.5 pt-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#16324F] font-medium">Technology</span>
                      <span className="font-bold text-[#168AAD]">836.15K (36.4%)</span>
                    </div>
                    <div className="w-full h-2 bg-[#D9E3E8] rounded-full overflow-hidden">
                      <div className="h-full bg-[#168AAD] rounded-full" style={{ width: '36.4%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#16324F] font-medium">Furniture</span>
                      <span className="font-bold text-[#E9A23B]">742.00K (32.3%)</span>
                    </div>
                    <div className="w-full h-2 bg-[#D9E3E8] rounded-full overflow-hidden">
                      <div className="h-full bg-[#E9A23B] rounded-full" style={{ width: '32.3%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#16324F] font-medium">Office Supplies</span>
                      <span className="font-bold text-[#52B69A]">719.05K (31.3%)</span>
                    </div>
                    <div className="w-full h-2 bg-[#D9E3E8] rounded-full overflow-hidden">
                      <div className="h-full bg-[#52B69A] rounded-full" style={{ width: '31.3%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profit by Category Donut */}
              <div className="p-5 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-3">
                <h4 className="text-xs font-bold text-[#16324F] font-heading uppercase flex items-center justify-between">
                  <span>Profit by Category</span>
                  <span className="text-[#617386] font-mono text-[10px]">$286.39K Total</span>
                </h4>
                <div className="space-y-2.5 pt-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#16324F] font-medium">Technology</span>
                      <span className="font-bold text-[#168AAD]">145.45K (50.8%)</span>
                    </div>
                    <div className="w-full h-2 bg-[#D9E3E8] rounded-full overflow-hidden">
                      <div className="h-full bg-[#168AAD] rounded-full" style={{ width: '50.8%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#16324F] font-medium">Office Supplies</span>
                      <span className="font-bold text-[#52B69A]">122.49K (42.8%)</span>
                    </div>
                    <div className="w-full h-2 bg-[#D9E3E8] rounded-full overflow-hidden">
                      <div className="h-full bg-[#52B69A] rounded-full" style={{ width: '42.8%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#16324F] font-medium">Furniture</span>
                      <span className="font-bold text-rose-600">18.45K (6.4%)</span>
                    </div>
                    <div className="w-full h-2 bg-[#D9E3E8] rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500 rounded-full" style={{ width: '6.4%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sales by Region */}
              <div className="p-5 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-3">
                <h4 className="text-xs font-bold text-[#16324F] font-heading uppercase flex items-center justify-between">
                  <span>Sales by Region</span>
                  <span className="text-[#617386] font-mono text-[10px]">4 Territories</span>
                </h4>
                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex justify-between border-b border-[#D9E3E8] py-1">
                    <span className="text-[#16324F]">West Region</span>
                    <span className="font-bold text-[#168AAD]">725.46K (31.6%)</span>
                  </div>
                  <div className="flex justify-between border-b border-[#D9E3E8] py-1">
                    <span className="text-[#16324F]">East Region</span>
                    <span className="font-bold text-[#52B69A]">678.78K (29.6%)</span>
                  </div>
                  <div className="flex justify-between border-b border-[#D9E3E8] py-1">
                    <span className="text-[#16324F]">Central Region</span>
                    <span className="font-bold text-[#E9A23B]">501.24K (21.8%)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#16324F]">South Region</span>
                    <span className="font-bold text-rose-600">391.72K (17.1%)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Top Profitable Products */}
            <div className="p-5 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-3">
              <h4 className="text-xs font-bold text-[#16324F] font-heading uppercase">Top Product IDs by Net Profitability</h4>
              <div className="space-y-2 pt-2">
                {[
                  { id: 'TEC-CO-10004722', label: 'Canon imageCLASS Copier', profit: '$31,200', pct: 100, color: 'bg-[#168AAD]' },
                  { id: 'OFF-BI-10003527', label: 'Fellowes Binding System', profit: '$8,100', pct: 32, color: 'bg-[#52B69A]' },
                  { id: 'TEC-CO-10001449', label: 'Hewlett Copier Unit', profit: '$7,200', pct: 28, color: 'bg-[#16324F]' },
                  { id: 'TEC-CO-10003763', label: 'Canon Multifunction Printer', profit: '$4,800', pct: 20, color: 'bg-[#168AAD]/70' },
                  { id: 'TEC-AC-10002049', label: 'Logitech Wireless Adapter', profit: '$4,200', pct: 18, color: 'bg-[#E9A23B]' },
                ].map((item) => (
                  <div key={item.id} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-mono text-[#16324F]">{item.id} <span className="text-[#617386] text-[10px]">({item.label})</span></span>
                      <span className="font-bold text-[#16324F]">{item.profit}</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#D9E3E8] rounded-full overflow-hidden">
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
              <div className="p-4 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-1">
                <span className="text-[11px] text-[#617386] font-medium uppercase font-mono">Total Placed Students</span>
                <div className="text-2xl font-extrabold text-[#16324F] font-heading">54.46K Students</div>
                <p className="text-[10px] text-[#617386]">Tier 2: 27.12K • Tier 3: 16.35K</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-1">
                <span className="text-[11px] text-[#617386] font-medium uppercase font-mono">Average CGPA Across Branches</span>
                <div className="text-2xl font-extrabold text-[#52B69A] font-heading">7.50 CGPA</div>
                <p className="text-[10px] text-[#617386]">CSE: 7.508 • IT: 7.505 • ECE: 7.501</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-1">
                <span className="text-[11px] text-[#617386] font-medium uppercase font-mono">Max Salary Package (Tier 1)</span>
                <div className="text-2xl font-extrabold text-[#168AAD] font-heading">20+ LPA</div>
                <p className="text-[10px] text-[#617386]">Computer Science & ECE Branches</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-1">
                <span className="text-[11px] text-[#617386] font-medium uppercase font-mono">Tier 1 Placement Count</span>
                <div className="text-2xl font-extrabold text-[#52B69A] font-heading">10.99K Placed</div>
                <p className="text-[10px] text-[#617386]">Out of 20.16K Total Applicants</p>
              </div>
            </div>

            {/* Branch Wise CGPA & Internship Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Branch Wise Average CGPA */}
              <div className="p-5 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-3">
                <h4 className="text-xs font-bold text-[#16324F] font-heading uppercase flex items-center justify-between">
                  <span>Branch Wise Average CGPA</span>
                  <span className="text-[#617386] font-mono text-[10px]">6 Engineering Depts</span>
                </h4>

                <div className="space-y-2 pt-1 text-xs">
                  {[
                    { branch: 'Computer Science Engineering (CSE)', cgpa: '7.508 CGPA', pct: 100, color: 'text-[#168AAD]' },
                    { branch: 'Information Technology (IT)', cgpa: '7.505 CGPA', pct: 99.6, color: 'text-[#52B69A]' },
                    { branch: 'Electronics & Comm (ECE)', cgpa: '7.501 CGPA', pct: 99.1, color: 'text-[#16324F]' },
                    { branch: 'Mechanical Engineering', cgpa: '7.493 CGPA', pct: 98.0, color: 'text-[#E9A23B]' },
                    { branch: 'Electrical & Electronics (EEE)', cgpa: '7.491 CGPA', pct: 97.7, color: 'text-[#168AAD]' },
                    { branch: 'Civil Engineering', cgpa: '7.483 CGPA', pct: 96.6, color: 'text-[#52B69A]' },
                  ].map((item) => (
                    <div key={item.branch} className="flex items-center justify-between border-b border-[#D9E3E8] pb-1.5">
                      <span className="text-[#16324F]">{item.branch}</span>
                      <span className={`font-bold font-mono ${item.color}`}>{item.cgpa}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Placement according to College Tier */}
              <div className="p-5 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-3">
                <h4 className="text-xs font-bold text-[#16324F] font-heading uppercase">Placement Status by College Tier</h4>
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#16324F] font-semibold">Tier 2 Colleges</span>
                      <span className="font-bold text-[#168AAD]">27.12K Placed (54.3%)</span>
                    </div>
                    <div className="w-full h-2 bg-[#D9E3E8] rounded-full overflow-hidden">
                      <div className="h-full bg-[#168AAD] rounded-full" style={{ width: '54.3%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#16324F] font-semibold">Tier 3 Colleges</span>
                      <span className="font-bold text-[#E9A23B]">16.35K Placed (54.7%)</span>
                    </div>
                    <div className="w-full h-2 bg-[#D9E3E8] rounded-full overflow-hidden">
                      <div className="h-full bg-[#E9A23B] rounded-full" style={{ width: '54.7%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#16324F] font-semibold">Tier 1 Colleges</span>
                      <span className="font-bold text-[#52B69A]">10.99K Placed (54.5%)</span>
                    </div>
                    <div className="w-full h-2 bg-[#D9E3E8] rounded-full overflow-hidden">
                      <div className="h-full bg-[#52B69A] rounded-full" style={{ width: '54.5%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Internships & Hackathons count by branch */}
            <div className="p-5 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-3">
              <h4 className="text-xs font-bold text-[#16324F] font-heading uppercase">Branch Wise Internship & Certification Counts</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
                {[
                  { branch: 'CSE', internships: '52,100+', certs: '64,000+' },
                  { branch: 'IT', internships: '28,400+', certs: '38,000+' },
                  { branch: 'ECE', internships: '21,100+', certs: '29,000+' },
                  { branch: 'EEE', internships: '14,200+', certs: '20,000+' },
                  { branch: 'Mechanical', internships: '13,500+', certs: '19,000+' },
                  { branch: 'Civil', internships: '12,000+', certs: '18,000+' },
                ].map((b) => (
                  <div key={b.branch} className="p-3 rounded-lg bg-white border border-[#D9E3E8] space-y-1 text-center shadow-none">
                    <span className="text-xs font-bold text-[#168AAD] font-heading">{b.branch}</span>
                    <p className="text-[10px] text-[#617386] font-mono">Internships: {b.internships}</p>
                    <p className="text-[10px] text-[#E9A23B] font-mono">Certs: {b.certs}</p>
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
              <div className="p-4 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-1">
                <span className="text-[11px] text-[#617386] font-medium uppercase font-mono">Average AQI</span>
                <div className="text-2xl font-extrabold text-[#52B69A] font-heading">42 (Good)</div>
                <p className="text-[10px] text-[#617386]">Target &lt; 50 • Alandi Station</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-1">
                <span className="text-[11px] text-[#617386] font-medium uppercase font-mono">Particulate PM2.5</span>
                <div className="text-2xl font-extrabold text-[#16324F] font-heading">18.4 µg/m³</div>
                <p className="text-[10px] text-[#617386]">Optical Dust Sensor GP2Y</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-1">
                <span className="text-[11px] text-[#617386] font-medium uppercase font-mono">Ambient Temp</span>
                <div className="text-2xl font-extrabold text-[#E9A23B] font-heading">26.8 °C</div>
                <p className="text-[10px] text-[#617386]">DHT11 Sensor Calibrated</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-1">
                <span className="text-[11px] text-[#617386] font-medium uppercase font-mono">Relative Humidity</span>
                <div className="text-2xl font-extrabold text-[#52B69A] font-heading">58 %</div>
                <p className="text-[10px] text-[#617386]">Normal Range (40-60%)</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#F7F8F3] border border-[#D9E3E8] space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#16324F] font-heading">Hourly AQI & Particulate Matter Telemetry Trend</span>
                <span className="text-[#168AAD] font-mono">ESP8266 + Blynk IoT Cloud</span>
              </div>

              <div className="h-36 flex items-end justify-between gap-2 pt-4 px-2">
                {[
                  { time: '08:00', val: 35, color: 'bg-[#52B69A]' },
                  { time: '10:00', val: 48, color: 'bg-[#168AAD]' },
                  { time: '12:00', val: 62, color: 'bg-[#E9A23B]' },
                  { time: '14:00', val: 54, color: 'bg-[#168AAD]' },
                  { time: '16:00', val: 41, color: 'bg-[#52B69A]' },
                  { time: '18:00', val: 38, color: 'bg-[#52B69A]' },
                  { time: '20:00', val: 45, color: 'bg-[#168AAD]' },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <span className="text-[10px] text-[#16324F] font-semibold">{bar.val}</span>
                    <div
                      className={`w-full max-w-[36px] rounded-t-md transition-all duration-300 ${bar.color}`}
                      style={{ height: `${(bar.val / 80) * 100}%` }}
                    ></div>
                    <span className="text-[10px] text-[#617386]">{bar.time}</span>
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

