"use client";

import Footer from "@/components/Footer";
import SlideUp from "@/components/SlideUp";

export default function CaseStudyPage() {
  const title = "Healthcare Technology";
  const bg = "/case/health.jpeg";

  return (
    <div>

      {/* HERO */}
      <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]">
        <img
          src={bg}
          alt="Case Study Hero"
          className="w-full h-full object-cover brightness-75"
        />

        <div className="absolute inset-0 flex items-end md:items-center justify-center pb-16 md:pb-0">
          <h1
            className="text-[#e5170f] text-3xl md:text-5xl font-medium tracking-wide text-center"
            style={{
              WebkitTextStroke: "2px black",
              WebkitTextFillColor: "#ffffffff",
            }}
          >
            {title}
          </h1>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-20 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Domain */}
          <SlideUp>
            <h1 className="text-4xl font-extralight mb-4">
              Clinical Data & Health Analytics
            </h1>
          </SlideUp>

          <SlideUp>
            <p className="text-black font-light leading-relaxed max-w-3xl">
              An overview of how conzura strengthened a healthcare company's
              engineering capabilities across clinical data integration,
              analytics-driven workflows, and compliance-focused architectures.
            </p>
          </SlideUp>

          {/* Feature Block 1 — Gradient */}
          <SlideUp>
            <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700 shadow-xl">
              <h2 className="text-2xl text-red-500 font-extralight mb-4">
                Problem Statement
              </h2>

              <p className="text-gray-300 text-sm font-light leading-relaxed">
                The healthcare company needed specialists in clinical data
                engineering, patient-data interoperability, analytics pipelines,
                and regulatory-compliant architectures. Recruiting engineers
                with deep knowledge of healthcare data standards and secure data
                integration frameworks proved difficult.
              </p>
            </div>
          </SlideUp>

          {/* Feature Block 2 — White Card */}
          <SlideUp>
            <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h3 className="text-xl font-extralight mb-3">
                conzura's Approach & Solution
              </h3>

              <p className="text-gray-700 text-sm font-light leading-relaxed">
                conzura deployed engineers skilled in HL7, FHIR, HIPAA-compliant
                architecture, and healthcare ETL. The team built unified
                clinical data pipelines, improved interoperability between
                systems, and strengthened compliance and reporting accuracy.
                These enhancements enabled more reliable analytics and
                streamlined patient-data workflows.
              </p>
            </div>
          </SlideUp>

          {/* Feature Block 3 — White Card */}
          <SlideUp>
            <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h3 className="text-xl font-extralight mb-3">
                Business Outcomes
              </h3>

              <p className="text-gray-700 text-sm font-light leading-relaxed">
                The engagement improved data quality, enhanced regulatory
                alignment, enabled faster analytics turnaround, and strengthened
                patient-data interoperability. Reporting accuracy and
                operational visibility improved significantly across healthcare
                workflows.
              </p>
            </div>
          </SlideUp>

          {/* Use Cases Grid */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <SlideUp>
              <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
                <h4 className="font-extralight mb-2">
                  Key Engineering Contributions
                </h4>
                <ul className="text-sm font-light text-gray-700 space-y-2">
                  <li>• Healthcare ETL & analytics engineering</li>
                  <li>• HL7 & FHIR interoperability solutions</li>
                  <li>• Secure patient-data integration</li>
                  <li>• HIPAA-compliant architecture design</li>
                  <li>• Clinical data transformation workflows</li>
                </ul>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
                <h4 className="font-extralight mb-2">Ideal For</h4>
                <ul className="text-sm font-light text-gray-700 space-y-2">
                  <li>• Healthcare providers & hospital networks</li>
                  <li>• Health-tech product companies</li>
                  <li>• Organizations requiring secure clinical analytics</li>
                </ul>
              </div>
            </SlideUp>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
