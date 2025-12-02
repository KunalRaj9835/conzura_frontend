/* ================== AI PIPELINE FLOW (6-STEP ZIG-ZAG, CORRECT ARROWS) ================== */
"use client";

import SlideUp from "@/components/SlideUp";

interface StepItem {
  number: string;
  title: string;
  desc: string;
  color: string;
}

export default function AIPipelineFlow() {
  const steps: StepItem[] = [
    { number: "01", title: "Data Ingestion", desc: "Collect & capture raw data.", color: "from-blue-700 to-blue-900" },
    { number: "02", title: "Data Cleaning", desc: "Validation, dedup, standardization.", color: "from-indigo-700 to-indigo-900" },
    { number: "03", title: "Structuring", desc: "Schema, modeling, formatting.", color: "from-purple-700 to-purple-900" },
    { number: "04", title: "Feature Engineering", desc: "Transformations & enrichment.", color: "from-violet-700 to-violet-900" },
    { number: "05", title: "Model Delivery", desc: "Serve ML/LLM-ready data.", color: "from-emerald-600 to-emerald-800" },
    { number: "06", title: "AI Products", desc: "APIs, dashboards, automation.", color: "from-amber-600 to-red-700" },
  ];

  const boxClass =
    "w-44 rounded-lg p-3 shadow-md border border-white/10 bg-gradient-to-br";

  /* -------------------- BOX COMPONENT -------------------- */
  const Box = ({ step }: { step: StepItem }) => (
    <SlideUp>
      <div className={`${boxClass} ${step.color}`}>
        <p className="text-[8px] text-gray-300 mb-1">Step {step.number}</p>
        <h3 className="text-[11px] font-semibold mb-1 leading-tight">
          {step.title}
        </h3>
        <p className="text-[9px] text-gray-200 leading-snug">{step.desc}</p>
      </div>
    </SlideUp>
  );

  /* -------------------- ARROW COMPONENTS -------------------- */
  const ArrowRight = () => (
    <div className="w-8 h-[2px] bg-red-500/40 relative shadow-[0_0_10px_rgba(255,0,0,0.5)]">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-red-400 shadow-[0_0_6px_rgba(255,0,0,0.5)]" />
    </div>
  );

  const ArrowLeft = () => (
    <div className="w-8 h-[2px] bg-red-500/40 relative shadow-[0_0_10px_rgba(255,0,0,0.5)]">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-red-400 shadow-[0_0_6px_rgba(255,0,0,0.5)]" />
    </div>
  );

  const ArrowDown = () => (
    <div className="flex flex-col items-center">
      <div className="h-6 w-[2px] bg-red-500/40 shadow-[0_0_10px_rgba(255,0,0,0.5)]" />
      <div className="w-2 h-2 rotate-45 bg-red-400 shadow-[0_0_6px_rgba(255,0,0,0.5)] -mt-1" />
    </div>
  );

  /* -------------------- RETURN UI -------------------- */
  return (
    <section className="w-full bg-[#101827] text-white py-6">
      <div className="max-w-md mx-auto px-2">

        <p className="uppercase tracking-[0.25em] text-[10px] text-red-400 mb-2">
          AI Pipeline Flow
        </p>

        <h2 className="text-xl font-bold mb-4">
          End-to-End Data to AI Workflow
        </h2>

        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center gap-2">

            <div className="flex items-center gap-2">
              <Box step={steps[0]} />
              <ArrowRight />
              <Box step={steps[1]} />
            </div>

            <div className="w-full max-w-[20rem] relative mt-1 mb-1 h-4">
              <div className="absolute top-0 left-[75%] -translate-x-1/2">
                <ArrowDown />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Box step={steps[3]} />
              <ArrowLeft />
              <Box step={steps[2]} />
            </div>

            <div className="w-full max-w-[20rem] relative mt-1 mb-1 h-4">
              <div className="absolute top-0 left-[25%] -translate-x-1/2">
                <ArrowDown />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Box step={steps[4]} />
              <ArrowRight />
              <Box step={steps[5]} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
