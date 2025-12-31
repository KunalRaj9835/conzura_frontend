"use client";

import { useState, useMemo } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SalesCRMPage() {
  const solutions = [
    {
      id: 1,
      title: "Lead Management",
      category: "Pipeline",
      description:
        "Capture, qualify, and nurture leads with intelligent scoring and automated follow-ups.",
    },
    {
      id: 2,
      title: "Contact Organization",
      category: "Relationships",
      description:
        "Centralize customer data with complete interaction history and relationship mapping.",
    },
    {
      id: 3,
      title: "Deal Tracking",
      category: "Revenue",
      description:
        "Visualize your sales pipeline with customizable stages and real-time deal progression.",
    },
    {
      id: 4,
      title: "Sales Automation",
      category: "Efficiency",
      description:
        "Automate repetitive tasks, follow-ups, and workflows to focus on closing deals.",
    },
    {
      id: 5,
      title: "Analytics & Forecasting",
      category: "Insights",
      description:
        "Data-driven insights, revenue forecasting, and performance metrics to guide strategy.",
    },
    {
      id: 6,
      title: "Team Collaboration",
      category: "Productivity",
      description:
        "Share notes, assign tasks, and collaborate seamlessly across your sales team.",
    },
  ];

  const [query, setQuery] = useState("");
  const filteredSolutions = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return solutions;
    return solutions.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="w-full bg-[#111827] text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-blue-400 mb-4">
              Sales CRM Platform
            </p>

            <h1 className="text-4xl md:text-5xl font-extralight leading-tight mb-6">
              Close More Deals, Build Better Relationships
            </h1>

            <p className="text-lg text-gray-200 mb-6 font-light">
              A powerful CRM solution that helps sales teams manage leads, track opportunities, automate workflows, and drive revenue growth with intelligent insights and seamless collaboration.
            </p>

            <div className="flex flex-wrap gap-4">
                <Link href="/contact-us">
              <button className="px-6 py-3 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-400 transition">
                Contact Us →
              </button>
              </Link>
              
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-full max-w-[420px]">
              <CRMVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ================= THREE PILLARS ================= */}
      <section className="w-full bg-[#F5F7FB] text-black py-16 md:py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr,1.1fr] gap-10">
          <div>
            <p className="uppercase text-xs tracking-[0.25em] text-blue-400 mb-4">
              Core Capabilities
            </p>

            <h2 className="text-3xl font-extralight mb-4">
              Everything you need to accelerate sales
            </h2>

            <p className="text-sm md:text-base text-black font-light">
              From lead capture to deal closure, our CRM provides complete visibility into your sales pipeline with powerful automation and actionable insights.
            </p>
          </div>

          <div className="space-y-4">
            <NumberedCard
              number="01"
              title="Intelligent Lead Management"
              body="Automatically capture, score, and route leads to the right sales reps. Never let a qualified opportunity slip through the cracks."
            />
            <NumberedCard
              number="02"
              title="Visual Pipeline Management"
              body="Track deals through customizable stages with drag-and-drop simplicity. Get instant visibility into bottlenecks and opportunities."
            />
            <NumberedCard
              number="03"
              title="Revenue Intelligence"
              body="AI-powered forecasting, predictive analytics, and actionable insights to hit your revenue targets consistently."
            />
          </div>
        </div>
      </section>

      {/* ================= SOLUTION CATALOG ================= */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-blue-500 mb-3">
                Feature Catalog
              </p>
              <h2 className="text-3xl font-extralight">
                Explore CRM Capabilities
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-2xl font-light">
                Discover the features that help sales teams close more deals and build lasting customer relationships.
              </p>
            </div>

            <div className="w-full md:w-80">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search: e.g. leads, pipeline, automation..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredSolutions.map((s) => (
              <div
                key={s.id}
                className="group border rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-2">
                  {s.category}
                </p>
                <h3 className="text-lg font-light mb-2 group-hover:text-blue-600">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 font-light">{s.description}</p>
              </div>
            ))}
          </div>

          {filteredSolutions.length === 0 && (
            <p className="text-sm text-gray-500 mt-6">
              No features match "{query}". Try another keyword.
            </p>
          )}
        </div>
      </section>

      {/* ================= PLATFORM INSIGHTS ================= */}
      <section className="w-full bg-[#F5F7FB] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <h3 className="text-xl font-light mb-2">
                Why sales teams need CRM
              </h3>

              <p className="text-sm text-gray-700 mb-4 font-light">
                Sales teams lose deals due to poor follow-up, disorganized data, and lack of pipeline visibility. Modern CRM systems centralize customer information and automate workflows for consistent results.
              </p>

              <div className="bg-white rounded-xl p-5 shadow">
                <p className="text-xs font-light mb-3">
                  Top sales challenges
                </p>

                <BarRow label="Lead follow-up gaps" value={42} color="bg-blue-500" />
                <BarRow label="Pipeline visibility" value={35} color="bg-indigo-600" />
                <BarRow label="Data scattered" value={18} color="bg-slate-500" />
                <BarRow label="Manual processes" value={5} color="bg-emerald-500" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light mb-2">
                CRM adoption drives revenue growth
              </h3>

              <p className="text-sm text-gray-700 mb-4 font-light">
                Organizations using CRM platforms report higher close rates, shorter sales cycles, and improved customer retention through better relationship management and data-driven decisions.
              </p>

              <div className="bg-white rounded-xl p-5 shadow">
                <p className="text-xs font-light mb-3">
                  Revenue impact metrics
                </p>

                <ComparisonBar label="Win rate" leader={70} follower={50} laggard={28} />
                <ComparisonBar label="Sales productivity" leader={82} follower={58} laggard={32} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          
          <div>
            <p className="uppercase text-xs tracking-[0.25em] text-blue-500 mb-3">
              Key Benefits
            </p>

            <h2 className="text-3xl font-extralight mb-4">
              What you achieve with our CRM
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-700">
              
              <div className="bg-[#F5F7FB] rounded-xl p-6">
                <h4 className="font-light mb-2 text-base">Accelerate Sales Cycles</h4>
                <p className="font-light">
                  Streamline your sales process with automation, intelligent routing, and real-time notifications to close deals faster.
                </p>
              </div>

              <div className="bg-[#F5F7FB] rounded-xl p-6">
                <h4 className="font-light mb-2 text-base">Increase Win Rates</h4>
                <p className="font-light">
                  Prioritize high-value opportunities, track engagement, and never miss a follow-up with smart reminders and insights.
                </p>
              </div>

              <div className="bg-[#F5F7FB] rounded-xl p-6">
                <h4 className="font-light mb-2 text-base">Scale Your Team</h4>
                <p className="font-light">
                  Onboard new reps faster, standardize best practices, and maintain consistency across your growing sales organization.
                </p>
              </div>

            </div>
          </div>

          {/* STATISTICS */}
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-[#F5F7FB] rounded-xl p-5 shadow-inner">
              <h4 className="text-sm font-light mb-3">
                CRM adoption metrics
              </h4>

              <table className="w-full text-xs md:text-sm font-light">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="py-2 pr-2">Metric</th>
                    <th className="py-2 pr-2 text-blue-600">High Usage</th>
                    <th className="py-2 pr-2 text-indigo-700">Medium</th>
                    <th className="py-2 text-slate-700">Low</th>
                  </tr>
                </thead>
                <tbody>
                  <Row label="Lead Conversion Rate" leader={68} follower={42} laggard={25} />
                  <Row label="Deal Velocity" leader={78} follower={52} laggard={35} />
                  <Row label="Sales Rep Productivity" leader={85} follower={60} laggard={38} />
                </tbody>
              </table>
            </div>

            <div className="bg-[#F5F7FB] rounded-xl p-5 shadow-inner">
              <h4 className="text-sm font-light mb-3">
                Implementation outcomes
              </h4>

              <div className="space-y-4 text-xs md:text-sm font-light">
                <MetricItem label="Revenue growth" value="25-40%" />
                <MetricItem label="Sales cycle reduction" value="30-45%" />
                <MetricItem label="Customer retention" value="80-92%" />
                <MetricItem label="Forecast accuracy" value="90-95%" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section className="w-full bg-[#111827] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr,1.3fr] gap-10 items-center">

          <div>
            <p className="uppercase text-xs tracking-[0.25em] text-blue-400 mb-3">
              Technology Stack
            </p>

            <h2 className="text-2xl md:text-3xl font-extralight mb-3">
              Enterprise-grade CRM infrastructure
            </h2>

            <p className="text-sm text-gray-300 font-light">
              Built on modern cloud architecture with AI-powered insights, advanced security, seamless integrations, and 99.9% uptime guarantee.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[11px] md:text-xs font-light">
            {[
              "Cloud: AWS, Azure",
              "AI/ML: TensorFlow, PyTorch",
              "Database: PostgreSQL",
              "Security: SOC 2, GDPR",
              "Integrations: Zapier, APIs",
              "Mobile: iOS, Android",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-900/70 border border-slate-700 rounded-lg px-3 py-2"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

            <Footer />

    </div>
  );
}


/* ================== HELPER COMPONENTS ================== */
interface NumberedCardProps {
  number: number | string;
  title: string;
  body: string;
}

function NumberedCard({ number, title, body } : NumberedCardProps) {
  return (
    <div className="flex bg-[#1F2937] rounded-xl border border-slate-700 overflow-hidden">
      <div className="w-16 flex items-center justify-center bg-black/60 border-r border-slate-700">
        <span className="text-blue-400 text-xl font-light">{number}</span>
      </div>
      <div className="flex-1 p-4">
        <h3 className="text-sm font-light text-gray-300 mb-1">{title}</h3>
        <p className="text-xs text-gray-300 font-light">{body}</p>
      </div>
    </div>
  );
}

type Percentage = number;
interface BarRowProps {
  label: string;
  value: Percentage;
  color: string;
}

function BarRow({ label, value, color }: BarRowProps) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-[11px] mb-1 text-gray-600 font-light">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-gray-200 overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

interface ComparisonBarProps {
  label: string;
  leader: Percentage;
  follower: Percentage;
  laggard: Percentage;
}

function ComparisonBar({ label, leader, follower, laggard }: ComparisonBarProps) {
  const total = leader + follower + laggard;

  return (
    <div className="mb-4">
      <p className="text-[11px] font-light mb-1 text-gray-700">{label}</p>
      <div className="h-3 rounded-full bg-gray-200 flex overflow-hidden text-[10px]">
        <div
          className="flex items-center justify-center bg-blue-500 text-white font-light"
          style={{ width: `${(leader / total) * 100}%` }}
        >
          H {leader}%
        </div>
        <div
          className="flex items-center justify-center bg-indigo-600 text-white font-light"
          style={{ width: `${(follower / total) * 100}%` }}
        >
          M {follower}%
        </div>
        <div
          className="flex items-center justify-center bg-slate-600 text-white font-light"
          style={{ width: `${(laggard / total) * 100}%` }}
        >
          L {laggard}%
        </div>
      </div>
    </div>
  );
}

interface RowProps {
  label: string;
  leader: number;
  follower: number;
  laggard: number;
}

function Row({ label, leader, follower, laggard }: RowProps) {
  return (
    <tr className="border-b last:border-0">
      <td className="py-2 pr-2 font-light">{label}</td>
      <td className="py-2 pr-2 text-blue-700 font-light">{leader}%</td>
      <td className="py-2 pr-2 text-indigo-700 font-light">{follower}%</td>
      <td className="py-2 text-slate-700 font-light">{laggard}%</td>
    </tr>
  );
}

interface MetricItemProps {
  label: string;
  value: string | number;
}

function MetricItem({ label, value }: MetricItemProps) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-300 last:border-0 font-light">
      <span className="text-gray-700">{label}</span>
      <span className="font-light text-blue-600">{value}</span>
    </div>
  );
}

function CRMVisual() {
  return (
    <div className="rounded-2xl border-2 border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl">
      <div className="space-y-6">
        {/* Pipeline stages */}
        <div className="space-y-3">
          {[
            { label: "Leads", count: 124, color: "bg-blue-500", width: "95%" },
            { label: "Qualified", count: 87, color: "bg-indigo-500", width: "70%" },
            { label: "Proposal", count: 45, color: "bg-purple-500", width: "48%" },
            { label: "Negotiation", count: 28, color: "bg-violet-500", width: "35%" },
            { label: "Closed", count: 19, color: "bg-emerald-500", width: "25%" },
          ].map((stage, i) => (
            <div key={i} className="relative">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs text-gray-300 font-light">{stage.label}</span>
                <span className="text-xs text-gray-400 font-light">{stage.count}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
                <div 
                  className={`h-full ${stage.color} transition-all duration-1000 ease-out`}
                  style={{ width: stage.width }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-700">
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
            <p className="text-[10px] text-gray-400 mb-1">Win Rate</p>
            <p className="text-xl text-blue-400 font-light">68%</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
            <p className="text-[10px] text-gray-400 mb-1">Avg. Deal</p>
            <p className="text-xl text-emerald-400 font-light">$12.5K</p>
          </div>
        </div>
      </div>
    </div>
  );
}