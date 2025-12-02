"use client";
import Footer from "@/components/Footer";

export default function AIReadyPipelinesPage() {
  return (
    <div>
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-4xl font-extralight mb-4">AI-Ready Pipelines</h1>

          <p className="text-black leading-relaxed max-w-3xl text-justify">
            Build scalable, production-grade pipelines that deliver clean, structured, 
            and context-rich data to AI and machine learning systems. Enable seamless 
            integration with LLMs, predictive models, automation agents, and analytics.
          </p>

          {/* Main Feature Block */}
          <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700 shadow-xl">
            <h2 className="text-2xl text-red-500 font-extralight mb-4">
              Pipeline Capabilities
            </h2>

            <ul className="space-y-3 text-gray-400 text-sm text-justify">
              <li>• Batch, streaming & real-time data ingestion</li>
              <li>• Event-driven architectures & micro pipelines</li>
              <li>• Feature engineering & vectorization</li>
              <li>• Integration with LLMs & ML training systems</li>
              <li>• Automated orchestration & lineage tracking</li>
              <li>• Observability, quality checks & drift monitoring</li>
              <li>• Model-serving & continuous model deployment</li>
            </ul>
          </div>

          {/* Additional Section */}
          <div className="mt-10 p-6 bg-white rounded-3xl border border-slate-300 shadow-sm">
            <h3 className="text-xl font-extralight mb-3">Why AI Pipelines Matter</h3>

            <p className="text-gray-700 leading-relaxed text-sm text-justify">
              Without robust pipelines, AI systems fail due to inconsistent data, 
              missing context, silos, and latency. Our pipelines ensure fast, high-quality 
              data flows that support reliable decision-making and automation.
            </p>
          </div>

          {/* Use Cases */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <div className="p-6 bg-white rounded-3xl border border-slate-300 shadow-sm">
              <h4 className="font-extralight mb-2">AI System Use Cases</h4>

              <ul className="text-sm text-gray-700 space-y-2 text-justify">
                <li>• LLM-powered assistants</li>
                <li>• Predictive maintenance</li>
                <li>• Anomaly detection & automation</li>
                <li>• Recommendation & forecasting engines</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-300 shadow-sm">
              <h4 className="font-extralight mb-2">Ideal For</h4>

              <ul className="text-sm text-gray-700 space-y-2 text-justify">
                <li>• Enterprises scaling AI initiatives</li>
                <li>• Organizations building LLM apps</li>
                <li>• Teams needing real-time decision intelligence</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
