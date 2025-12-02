"use client";

import { useState, useMemo } from "react";
import Footer from "@/components/Footer";

export default function conzuraAISolutionsPage() {
  // --------- DATA FOR SEARCHABLE SOLUTION CARDS ----------
  
  const solutions = [
  {
    id: 1,
    title: "Cloud & Analytics",
    category: "Tech",
    description:
      "Cloud-native analytics, scalable processing, and AI-ready data services across Azure, AWS, and GCP.",
    href: "/tech/cloud-analytics",
  },
  {
    id: 2,
    title: "Frameworks",
    category: "Tech",
    description:
      "Robust engineering frameworks including Spring Boot, .NET, Django, Flask, and microservices patterns.",
    href: "/tech/frameworks",
  },
  {
    id: 3,
    title: "Infrastructure",
    category: "Tech",
    description:
      "High-performance computing, CI/CD systems, secure environments, and optimized runtime infrastructure.",
    href: "/tech/infrastructure",
  },
  {
    id: 4,
    title: "Orchestration Platforms",
    category: "Tech",
    description:
      "End-to-end workflow orchestration using Airflow, Kubernetes, Spark, and event-driven architectures.",
    href: "/tech/orchestration",
  },
  {
    id: 5,
    title: "Backend Engineering",
    category: "Tech",
    description:
      "Enterprise-grade APIs, distributed systems, service layers, and backend architectures for modern apps.",
    href: "/tech/backend-engineering",
  },
  {
    id: 6,
    title: "Storage & Databases",
    category: "Tech",
    description:
      "Reliable cloud and on-prem storage, SQL/NoSQL systems, and high-availability database engineering.",
    href: "/tech/storage-databases",
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
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-red-400 mb-4">
              conzura AI & Data Solutions
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Making your data AI-ready, from edge to enterprise.
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              conzura combines deep engineering, cloud, and analytics expertise to
              turn fragmented data into AI-ready, governed, and actionable
              intelligence across your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-md bg-red-500 text-black font-medium hover:bg-red-400 transition">
                Talk to our AI & Data team →
              </button>
              <button className="px-6 py-3 rounded-md border border-gray-500 text-sm hover:border-red-400 hover:text-red-300 transition">
                Download conzura AI & Data overview
              </button>
            </div>
          </div>

          {/* RIGHT: HERO IMAGE / GRAPHIC PLACEHOLDER */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-black p-6 md:p-8 shadow-2xl border border-slate-700">
              <p className="text-xs text-gray-400 mb-3">
                AI in Action: sample transformation stack
              </p>

              {/* Faux layered cards */}
              <div className="space-y-4">
                <div className="bg-black/60 border border-slate-600 rounded-2xl p-4">
                  <p className="text-xs text-gray-400 mb-1">
                    AI-ready data foundation
                  </p>
                  <div className="flex items-end gap-2 h-20">
                    <div className="flex-1 bg-slate-800 rounded-lg overflow-hidden">
                      <div className="h-3/5 bg-red-500"></div>
                    </div>
                    <div className="flex-1 bg-slate-800 rounded-lg overflow-hidden">
                      <div className="h-4/5 bg-sky-500"></div>
                    </div>
                    <div className="flex-1 bg-slate-800 rounded-lg overflow-hidden">
                      <div className="h-2/5 bg-emerald-500"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-[10px] mt-2 text-gray-400">
                    <span>Raw</span>
                    <span>Curated</span>
                    <span>AI-ready</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <StatPill label="AI models in prod" value="45+" />
                  <StatPill label="Cloud pipelines" value="120+" />
                  <StatPill label="Latency reduction" value="60%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== HOW YOU CAN USE THESE SOLUTIONS ============== */}
      <section className="w-full bg-[#111827] text-white py-16 md:py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr,1.1fr] gap-10">
          {/* LEFT */}
          <div>
            <p className="uppercase text-xs tracking-[0.25em] text-red-400 mb-4">
              How conzura helps
            </p>
            <h2 className="text-3xl font-semibold mb-4">
              Turn survey, systems, and streaming data into AI-driven outcomes.
            </h2>
            <p className="text-sm md:text-base text-gray-200">
              Use conzura’s AI and data capabilities to benchmark your current
              state, scale AI into production workflows, and unlock domain-specific
              insight across industries like automotive, aerospace, healthcare,
              and IT services.
            </p>
          </div>

          {/* RIGHT numbered cards */}
          <div className="space-y-4">
            <NumberedCard
              number="01"
              title="Benchmark your data & AI maturity"
              body="Assess infrastructure, data quality, and analytics adoption against peers using conzura’s reference architectures and assessment frameworks."
            />
            <NumberedCard
              number="02"
              title="Embed AI into critical workflows"
              body="Design and deploy models into production systems, from embedded and IoT environments to cloud-native enterprise applications."
            />
            <NumberedCard
              number="03"
              title="Unlock industry-specific insights"
              body="Combine operational, customer, and financial data with domain models tuned for automotive, aerospace, healthcare, and more."
            />
          </div>
        </div>
      </section>

      {/* ============== SEARCHABLE SOLUTION CATALOG ============== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
                Solution catalog
              </p>
              <h2 className="text-3xl font-bold">Explore conzura AI & Data solutions</h2>
              <p className="text-sm text-gray-600 mt-2 max-w-2xl">
                Search by capability, use case, or stack component to explore
                how conzura can support your data and AI transformation end-to-end.
              </p>
            </div>

            <div className="w-full md:w-80">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search: e.g. cloud, analytics, IoT..."
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
                <h3 className="text-lg font-semibold mb-2 group-hover:text-red-600">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{s.description}</p>
                <span className="text-xs font-medium text-red-500">
                  View details →
                </span>
              </a>
            ))}
          </div>

          {filteredSolutions.length === 0 && (
            <p className="text-sm text-gray-500 mt-6">
              No solutions match “{query}”. Try another capability or keyword.
            </p>
          )}
        </div>
      </section>

      {/* ============== DATA & AI CHALLENGES (CHARTS) ============== */}
      <section className="w-full bg-[#F5F7FB] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                The challenge of data
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Many organisations struggle to make data reliably available and
                usable across the enterprise—especially as volumes and
                unstructured sources grow. conzura addresses this with engineered
                pipelines, governance, and AI-driven quality controls.
              </p>
              <div className="bg-white rounded-xl p-5 shadow">
                <p className="text-xs font-semibold mb-3">
                  Difficulty using data effectively for AI
                </p>
                <BarRow label="Significant challenge" value={40} color="bg-red-500" />
                <BarRow label="Moderate challenge" value={45} color="bg-sky-600" />
                <BarRow label="Limited challenge" value={10} color="bg-slate-500" />
                <BarRow label="No challenge" value={5} color="bg-emerald-500" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                AI in the workflow drives results
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Embedding AI into workflows, not just dashboards, is where
                measurable business outcomes appear. conzura focuses on
                production-grade integration into processes, apps, and devices.
              </p>
              <div className="bg-white rounded-xl p-5 shadow">
                <p className="text-xs font-semibold mb-3">
                  Percentage of workflows with AI implemented
                </p>
                <ComparisonBar
                  label="Current"
                  leader={55}
                  follower={40}
                  laggard={25}
                />
                <ComparisonBar
                  label="Target (24–36 months)"
                  leader={75}
                  follower={60}
                  laggard={40}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== HIGHLIGHTS & INDUSTRY BREAKDOWN ============== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div>
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              Key highlights
            </p>
            <h2 className="text-3xl font-bold mb-4">
              What conzura brings to your AI & data journey
            </h2>
            <div className="grid md:grid-cols-2 gap-10 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">
                  Big shifts in operating models
                </h4>
                <p>
                  conzura helps move organisations from ad-hoc analytics to an
                  AI-native operating model, where data is treated as a product
                  and ML is integrated across functions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  Rapid progress in GenAI & automation
                </h4>
                <p>
                  With strong data engineering foundations and domain expertise,
                  conzura accelerates safe GenAI and automation projects while
                  maintaining compliance, quality, and reliability.
                </p>
              </div>
            </div>
          </div>

          {/* Simple table-style visuals */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F5F7FB] rounded-xl p-5 shadow-inner">
              <h4 className="text-sm font-semibold mb-3">
                Changes made to support AI adoption
              </h4>
              <table className="w-full text-xs md:text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="py-2 pr-2">Change type</th>
                    <th className="py-2 pr-2 text-red-600">Leader</th>
                    <th className="py-2 pr-2 text-sky-700">Follower</th>
                    <th className="py-2 text-slate-700">Laggard</th>
                  </tr>
                </thead>
                <tbody>
                  <Row
                    label="Redesigned operating model"
                    leader="52%"
                    follower="40%"
                    laggard="8%"
                  />
                  <Row
                    label="Significant targeted changes"
                    leader="38%"
                    follower="45%"
                    laggard="30%"
                  />
                  <Row
                    label="Minor / limited changes"
                    leader="10%"
                    follower="15%"
                    laggard="62%"
                  />
                </tbody>
              </table>
            </div>

            <div className="bg-[#F5F7FB] rounded-xl p-5 shadow-inner">
              <h4 className="text-sm font-semibold mb-3">
                Where conzura engages most
              </h4>
              <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
                <div>
                  <p className="font-semibold mb-2">Industry breakout</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>Automotive & Automation – 33%</li>
                    <li>Aerospace & Defence – 33%</li>
                    <li>IT / Software – 28%</li>
                    <li>Other / Mgmt – 6%</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Typical roles</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>CTO, CIO, CDO</li>
                    <li>Heads of Data & AI</li>
                    <li>Product & Engineering leaders</li>
                    <li>Operations & Business owners</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TECHNOLOGY EXPERTISE STRIP ============== */}
      <section className="w-full bg-[#111827] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr,1.3fr] gap-10 items-center">
          <div>
            <p className="uppercase text-xs tracking-[0.25em] text-red-400 mb-3">
              Technology DNA
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Deep engineering and analytics expertise across the stack.
            </h2>
            <p className="text-sm text-gray-300">
              From cloud platforms and orchestration tools to frameworks and
              on-premise analytics, conzura brings multi-layer expertise to design
              and run your AI-ready data ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[11px] md:text-xs">
            {[
              "Cloud platforms: AWS, Azure, GCP, Fabric",
              "Cloud analytics & BI: Power BI, Tableau, Qlik",
              "Frameworks: Spring Boot, Kafka, .NET, Python",
              "Infra & OS: Red Hat, SUSE, Linux",
              "Orchestration: Airflow, Spark, Kubernetes",
              "Storage: cloud & on-prem databases",
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

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

/* ================== SMALL HELPER COMPONENTS ================== */

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-900/70 border border-slate-700 rounded-xl px-3 py-2">
      <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
        {label}
      </p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  );
}

function NumberedCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex bg-[#1F2937] rounded-xl border border-slate-700 overflow-hidden">
      <div className="w-16 flex items-center justify-center bg-black/60 border-r border-slate-700">
        <span className="text-red-400 text-xl font-semibold">{number}</span>
      </div>
      <div className="flex-1 p-4">
        <h3 className="text-sm font-semibold mb-1">{title}</h3>
        <p className="text-xs text-gray-300">{body}</p>
      </div>
    </div>
  );
}

function BarRow({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-[11px] mb-1 text-gray-600">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-gray-200 overflow-hidden">
        <div
          className={`h-full ${color}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

function ComparisonBar({
  label,
  leader,
  follower,
  laggard,
}: {
  label: string;
  leader: number;
  follower: number;
  laggard: number;
}) {
  const total = leader + follower + laggard;
  return (
    <div className="mb-4">
      <p className="text-[11px] font-semibold mb-1 text-gray-700">{label}</p>
      <div className="h-3 rounded-full bg-gray-200 flex overflow-hidden text-[10px]">
        <div
          className="flex items-center justify-center bg-red-500 text-white"
          style={{ width: `${(leader / total) * 100}%` }}
        >
          L {leader}%
        </div>
        <div
          className="flex items-center justify-center bg-sky-600 text-white"
          style={{ width: `${(follower / total) * 100}%` }}
        >
          F {follower}%
        </div>
        <div
          className="flex items-center justify-center bg-slate-600 text-white"
          style={{ width: `${(laggard / total) * 100}%` }}
        >
          G {laggard}%
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  leader,
  follower,
  laggard,
}: {
  label: string;
  leader: string;
  follower: string;
  laggard: string;
}) {
  return (
    <tr className="border-b last:border-0">
      <td className="py-2 pr-2">{label}</td>
      <td className="py-2 pr-2 text-red-700 font-medium">{leader}</td>
      <td className="py-2 pr-2 text-sky-700 font-medium">{follower}</td>
      <td className="py-2 text-slate-700 font-medium">{laggard}</td>
    </tr>
  );
}
