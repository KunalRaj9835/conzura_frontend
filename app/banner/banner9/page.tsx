"use client";

import Footer from "@/components/Footer";
import ExlTallCard from "@/components/ExlCard";

export default function conzuraAILeadershipPage() {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="w-full bg-[#E7EEF3] py-20 md:py-28 relative overflow-hidden">
        <img
          src="/m.webp"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="Background"
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <p className="uppercase tracking-[0.25em] text-sm text-red-500 mb-4">
            AI Leadership Report
          </p>

          <h1 className="text-4xl md:text-5xl font-extralight leading-tight max-w-3xl">
            A proven leader in AI innovation and data modernization
          </h1>

          <p className="text-lg opacity-80 font-light max-w-3xl mt-6">
            conzura recognized for its excellence in AI engineering, scalable data platforms,
            and enterprise-wide modernization solutions across industries.
          </p>
        </div>
      </section>

      {/* ================= SOLUTION GRID ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* LEFT TITLE SECTION */}
          <div className="col-span-1 flex flex-col justify-start">
            <p className="text-sm font-medium text-[#e5170f]">
              Our solutions
            </p>

            <h2 className="mt-6 text-4xl font-extralight leading-tight">
              Unifying data, AI, and human expertise <br /> to power enterprise workflows
            </h2>
          </div>

          {/* RIGHT GRID */}
          <div className="col-span-3 space-y-14">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <ExlTallCard
                title="Data Cleaning & Quality Engineering"
                desc="Automated validation, deduplication, standardization, and quality scoring for trusted data."
                image="/demo/cleaning.png"
                href="/data/data-cleaning"
              />

              <ExlTallCard
                title="Data Monetization"
                desc="Transform enterprise data into analytics products, APIs, and revenue-generating insights."
                image="/demo/data.jpg"
                href="/data/data-monetization"
              />

              <ExlTallCard
                title="AI-Ready Pipelines"
                desc="End-to-end pipelines that convert raw data into AI-optimized, real-time decision systems."
                image="/demo/ai.jpg"
                href="/data/ai-ready-pipelines"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ================= ABOUT THE REPORT ================= */}
      <section className="w-full bg-[#f6f7fb] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-extralight mb-6">About the report</h2>

            <p className="text-gray-600 leading-relaxed font-light mb-4 text-justify">
              conzura has been recognized as a top innovator in data engineering, AI lifecycle
              management, and enterprise modernization. This assessment evaluates leading AI
              solution providers on their ability to scale AI, deliver measurable results, and
              drive transformation across industries.
            </p>

            <p className="text-gray-600 leading-relaxed font-light">
              The report highlights conzura’s differentiated approach to:
            </p>

            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2 font-light">
              <li>Building scalable cloud and data foundations</li>
              <li>Operationalizing AI across workflows</li>
              <li>Domain-led engineering and industry accelerators</li>
              <li>End-to-end governance, observability, and quality</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/banner1/graph.png"
              alt="AI Leadership Chart"
              className="w-full"
            />
          </div>

        </div>
      </section>

      {/* ================= KEY FINDINGS ================= */}
      <section className="w-full bg-[#1F2937] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-extralight mb-10">Key findings</h2>

          <p className="text-gray-300 font-light leading-relaxed mb-10 max-w-4xl">
            Based on in-depth evaluation of leading AI and data transformation providers,
            the report identifies conzura’s strengths in delivering enterprise-grade AI.
          </p>

          <div className="space-y-6">
            <FindingCard
              number="01"
              title="Accelerated Time-to-Value Through Proprietary Solutions"
              body="conzura’s accelerators shorten deployment timelines and enable rapid, measurable AI outcomes across industries."
            />

            <FindingCard
              number="02"
              title="Real-World Results, Not Just Pilots"
              body="conzura excels at scaling AI from experimental pilots to production systems through high-discipline delivery frameworks."
            />

            <FindingCard
              number="03"
              title="Industry-Driven Design"
              body="Solutions are tailored for automotive, aerospace, healthcare, retail, and enterprise operations—embedding AI into core workflows."
            />

            <FindingCard
              number="04"
              title="Strong Cloud & AI Ecosystem Partnerships"
              body="Strategic collaborations with AWS, Azure, Nvidia, and GCP enable performance, reliability, and large-scale AI deployment."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ================= FINDING CARD ================= */

function FindingCard({
  number,
  title,
  body,
}: {
  number: string | number;
  title: string;
  body: string;
}) {
  return (
    <div className="flex bg-[#F8FAFC] text-gray-900 rounded-xl overflow-hidden border border-gray-300">
      <div className="w-20 flex items-center justify-center bg-white border-r border-gray-300">
        <span className="text-red-500 text-3xl font-light">{number}</span>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-sm text-gray-700 font-light">{body}</p>
      </div>
    </div>
  );
}
