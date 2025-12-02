"use client";

import { useState, useMemo } from "react";
import AIpipline from "@/components/AIPipelineFlow";
import Footer from "@/components/Footer";

export default function DataAISolutionsPage() {
  const solutions = [
    {
      id: 1,
      title: "Data Cleaning & Quality Engineering",
      category: "Data Foundation",
      description:
        "Automated cleansing, deduplication, validation, metadata enrichment, and schema alignment for enterprise data quality.",
      href: "/data/data-cleaning",
    },
    {
      id: 2,
      title: "Data Monetization",
      category: "Business Value",
      description:
        "Turn data into high-value products, dashboards, APIs, and insights that unlock new revenue streams.",
      href: "/data/data-monetization",
    },
    {
      id: 3,
      title: "AI-Ready Pipelines",
      category: "AI Foundation",
      description:
        "Production-grade data pipelines that prepare your data for LLMs, predictive models, and intelligent automation.",
      href: "/data/ai-ready-pipelines",
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
      <section className="w-full bg-[#111827] text-white py-20 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-red-400 mb-4">
              Data & AI Solutions
            </p>

            <h1 className="text-4xl md:text-5xl font-extralight leading-tight mb-6">
              Clean, Monetize, and Power AI with Your Data
            </h1>

            <p className="text-lg text-gray-200 mb-6 font-light">
              Three essential capabilities for modern enterprises: ensure data quality through cleaning, generate revenue through monetization, and enable intelligent automation with AI-ready pipelines.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-[260px] md:w-[320px] lg:w-[380px]">
              <AIpipline />
            </div>
          </div>
        </div>
      </section>

      {/* ================= THREE PILLARS ================= */}
      <section className="w-full bg-[#F5F7FB] text-black py-16 md:py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr,1.1fr] gap-10">
          <div>
            <p className="uppercase text-xs tracking-[0.25em] text-red-400 mb-4">
              Three Core Pillars
            </p>

            <h2 className="text-3xl font-extralight mb-4">
              Transform enterprise data into business value
            </h2>

            <p className="text-sm md:text-base text-black font-light">
              Our approach focuses on three fundamental capabilities: cleaning data to establish trust and quality, monetizing it to generate revenue, and making it AI-ready to enable intelligent automation.
            </p>
          </div>

          <div className="space-y-4">
            <NumberedCard
              number="01"
              title="Data Cleaning & Quality Engineering"
              body="Automated validation, deduplication, standardization, and quality scoring that eliminate inconsistencies and establish trusted data foundations."
            />
            <NumberedCard
              number="02"
              title="Data Monetization"
              body="Transform data into revenue-generating products including analytics dashboards, predictive APIs, and actionable insights."
            />
            <NumberedCard
              number="03"
              title="AI-Ready Pipelines"
              body="Production-grade pipelines that feed LLMs, ML models, and intelligent automation with clean, governed, real-time data."
            />
          </div>
        </div>
      </section>

      {/* ================= SOLUTION CATALOG ================= */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
                Solution Catalog
              </p>
              <h2 className="text-3xl font-extralight">
                Explore Data & AI Solutions
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-2xl font-light">
                Discover solutions for building clean, standardized, and AI-ready enterprise data.
              </p>
            </div>

            <div className="w-full md:w-80">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search: e.g. cleaning, pipelines, monetization..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredSolutions.map((s) => (
              <a
                key={s.id}
                href={s.href}
                className="group border rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-2">
                  {s.category}
                </p>
                <h3 className="text-lg font-light mb-2 group-hover:text-red-600">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 font-light">{s.description}</p>
                <span className="text-xs font-medium text-red-500">
                  View details →
                </span>
              </a>
            ))}
          </div>

          {filteredSolutions.length === 0 && (
            <p className="text-sm text-gray-500 mt-6">
              No solutions match "{query}". Try another keyword.
            </p>
          )}
        </div>
      </section>

      {/* ================= DATA INSIGHTS ================= */}
      <section className="w-full bg-[#F5F7FB] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <h3 className="text-xl font-light mb-2">
                Why data quality matters
              </h3>

              <p className="text-sm text-gray-700 mb-4 font-light">
                Organizations struggle with inconsistent formats, missing values, technical silos, and manual processes. These issues reduce accuracy and delay insights. Quality engineering solves this with automated cleansing and validation.
              </p>

              <div className="bg-white rounded-xl p-5 shadow">
                <p className="text-xs font-light mb-3">
                  Common data quality challenges
                </p>

                <BarRow label="Quality issues" value={48} color="bg-red-500" />
                <BarRow label="Siloed sources" value={32} color="bg-sky-600" />
                <BarRow label="Manual processes" value={15} color="bg-slate-500" />
                <BarRow label="No governance" value={5} color="bg-emerald-500" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light mb-2">
                AI success requires data maturity
              </h3>

              <p className="text-sm text-gray-700 mb-4 font-light">
                High-quality, unified, governed data is the foundation of successful AI. The right infrastructure and pipelines convert raw data into production-ready AI fuel.
              </p>

              <div className="bg-white rounded-xl p-5 shadow">
                <p className="text-xs font-light mb-3">
                  Data maturity levels
                </p>

                <ComparisonBar label="Current state" leader={20} follower={15} laggard={10} />
                <ComparisonBar label="Target state" leader={80} follower={70} laggard={60} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          
          <div>
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              Key Benefits
            </p>

            <h2 className="text-3xl font-extralight mb-4">
              What you achieve with data transformation
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-700">
              
              <div className="bg-[#F5F7FB] rounded-xl p-6">
                <h4 className="font-light mb-2 text-base">Clean & Trusted Data</h4>
                <p className="font-light">
                  Eliminate duplicates, fix inconsistencies, and structure data for reliable consumption across applications and analytics.
                </p>
              </div>

              <div className="bg-[#F5F7FB] rounded-xl p-6">
                <h4 className="font-light mb-2 text-base">Revenue Generation</h4>
                <p className="font-light">
                  Build dashboards, APIs, analytics layers, and ML insights that directly contribute to revenue and performance.
                </p>
              </div>

              <div className="bg-[#F5F7FB] rounded-xl p-6">
                <h4 className="font-light mb-2 text-base">AI-Powered Automation</h4>
                <p className="font-light">
                  Deploy production-ready pipelines that enable real-time analytics, LLMs, and intelligent decision-making.
                </p>
              </div>

            </div>
          </div>

          {/* STATISTICS */}
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-[#F5F7FB] rounded-xl p-5 shadow-inner">
              <h4 className="text-sm font-light mb-3">
                Data transformation priorities
              </h4>

              <table className="w-full text-xs md:text-sm font-light">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="py-2 pr-2">Priority</th>
                    <th className="py-2 pr-2 text-red-600">Leader</th>
                    <th className="py-2 pr-2 text-sky-700">Follower</th>
                    <th className="py-2 text-slate-700">Laggard</th>
                  </tr>
                </thead>
                <tbody>
                  <Row label="Data Quality Automation" leader="62%" follower="30%" laggard="8%" />
                  <Row label="Unified Data Models" leader="55%" follower="37%" laggard="18%" />
                  <Row label="AI-Ready Pipelines" leader="70%" follower="40%" laggard="15%" />
                </tbody>
              </table>
            </div>

            <div className="bg-[#F5F7FB] rounded-xl p-5 shadow-inner">
              <h4 className="text-sm font-light mb-3">
                Implementation metrics
              </h4>

              <div className="space-y-4 text-xs md:text-sm font-light">
                <MetricItem label="Data quality improvement" value="85-95%" />
                <MetricItem label="Time to insights reduction" value="60-70%" />
                <MetricItem label="Cost savings" value="30-40%" />
                <MetricItem label="AI model accuracy gain" value="25-35%" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section className="w-full bg-[#111827] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr,1.3fr] gap-10 items-center">

          <div>
            <p className="uppercase text-xs tracking-[0.25em] text-red-400 mb-3">
              Technology Stack
            </p>

            <h2 className="text-2xl md:text-3xl font-extralight mb-3">
              Built on modern cloud and data platforms
            </h2>

            <p className="text-sm text-gray-300 font-light">
              Leveraging industry-leading technologies for data ingestion, quality control, transformation, analytics, and AI deployment across scalable cloud architectures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[11px] md:text-xs font-light">
            {[
              "Cloud: AWS, Azure, GCP",
              "Analytics: Power BI, Tableau, Qlik",
              "Big Data: Spark, Databricks",
              "Frameworks: Python, Kafka, .NET",
              "Orchestration: Airflow, Kubernetes",
              "Storage: S3, ADLS, Snowflake",
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

// =========================
// Type Definitions
// =========================

type NumberedCardProps = {
  number: number | string;
  title: string;
  body: string;
};

type BarRowProps = {
  label: string;
  value: number;
  color: string; // Tailwind color class
};

type ComparisonBarProps = {
  label: string;
  leader: number;
  follower: number;
  laggard: number;
};

type RowProps = {
  label: string;
  leader: number | string;
  follower: number | string;
  laggard: number | string;
};

type MetricItemProps = {
  label: string;
  value: number | string;
};


// =========================
// Components
// =========================

export function NumberedCard({ number, title, body }: NumberedCardProps) {
  return (
    <div className="flex bg-[#1F2937] rounded-xl border border-slate-700 overflow-hidden">
      <div className="w-16 flex items-center justify-center bg-black/60 border-r border-slate-700">
        <span className="text-red-400 text-xl font-light">{number}</span>
      </div>
      <div className="flex-1 p-4">
        <h3 className="text-sm font-light text-gray-300 mb-1">{title}</h3>
        <p className="text-xs text-gray-300 font-light">{body}</p>
      </div>
    </div>
  );
}

export function BarRow({ label, value, color }: BarRowProps) {
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

export function ComparisonBar({ label, leader, follower, laggard }: ComparisonBarProps) {
  const total = leader + follower + laggard;

  return (
    <div className="mb-4">
      <p className="text-[11px] font-light mb-1 text-gray-700">{label}</p>
      <div className="h-3 rounded-full bg-gray-200 flex overflow-hidden text-[10px]">
        <div
          className="flex items-center justify-center bg-red-500 text-white font-light"
          style={{ width: `${(leader / total) * 100}%` }}
        >
          L {leader}%
        </div>
        <div
          className="flex items-center justify-center bg-sky-600 text-white font-light"
          style={{ width: `${(follower / total) * 100}%` }}
        >
          F {follower}%
        </div>
        <div
          className="flex items-center justify-center bg-slate-600 text-white font-light"
          style={{ width: `${(laggard / total) * 100}%` }}
        >
          G {laggard}%
        </div>
      </div>
    </div>
  );
}

export function Row({ label, leader, follower, laggard }: RowProps) {
  return (
    <tr className="border-b last:border-0">
      <td className="py-2 pr-2 font-light">{label}</td>
      <td className="py-2 pr-2 text-red-700 font-light">{leader}</td>
      <td className="py-2 pr-2 text-sky-700 font-light">{follower}</td>
      <td className="py-2 text-slate-700 font-light">{laggard}</td>
    </tr>
  );
}

export function MetricItem({ label, value }: MetricItemProps) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-300 last:border-0 font-light">
      <span className="text-gray-700">{label}</span>
      <span className="font-light text-red-600">{value}</span>
    </div>
  );
}
