"use client";
import Footer from "@/components/Footer";

export default function DataCleaningQualityPage() {
  return (
    <div>
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-4xl font-extralight mb-4">
            Data Cleaning & Quality Engineering
          </h1>

          <p className="text-black leading-relaxed max-w-3xl text-justify">
            Build a trusted, AI-ready data foundation through automated cleansing, 
            normalization, validation, and enrichment. Our quality engineering 
            ensures the consistency, reliability, and accuracy required for 
            analytics and modern AI pipelines.
          </p>

          {/* Main Feature Block */}
          <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700 shadow-xl">
            <h2 className="text-2xl text-red-500 font-extralight mb-4">
              What We Deliver
            </h2>

            <ul className="space-y-3 text-gray-400 text-sm text-justify">
              <li>• Automated cleansing, standardization & transformation</li>
              <li>• Intelligent deduplication and anomaly detection</li>
              <li>• Schema alignment & metadata enrichment</li>
              <li>• Validation rules, quality scoring & compliance checks</li>
              <li>• Real-time & batch quality monitoring dashboards</li>
              <li>• Data observability and root-cause diagnostics</li>
              <li>• Quality enforcement workflows for all departments</li>
            </ul>
          </div>

          {/* Additional Section */}
          <div className="mt-10 p-6 bg-white rounded-3xl border border-slate-300 shadow-sm">
            <h3 className="text-xl font-extralight mb-3">Why Data Quality Matters</h3>

            <p className="text-gray-700 leading-relaxed text-sm text-justify">
              Poor data quality leads to increased operational costs, failed AI 
              initiatives, inconsistent reporting, and regulatory risks. A strong 
              foundation ensures that data feeding your models and systems is 
              accurate, complete, and reliable.
            </p>
          </div>

          {/* Use Cases */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <div className="p-6 bg-white rounded-3xl border border-slate-300 shadow-sm">
              <h4 className="font-extralight mb-2">Enterprise Use Cases</h4>

              <ul className="text-sm text-gray-700 space-y-2 text-justify">
                <li>• Customer master data cleanup</li>
                <li>• Manufacturing sensor data validation</li>
                <li>• Financial compliance & audit readiness</li>
                <li>• Supply-chain normalization</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-300 shadow-sm">
              <h4 className="font-extralight mb-2">Ideal For</h4>

              <ul className="text-sm text-gray-700 space-y-2 text-justify">
                <li>• AI & ML teams needing clean datasets</li>
                <li>• Organizations with fragmented systems</li>
                <li>• Enterprises migrating to cloud platforms</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
