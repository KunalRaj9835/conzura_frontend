"use client";

import Footer from "@/components/Footer";
import SlideUp from "@/components/SlideUp";

export default function CaseStudyPage() {
  const title = "IT Services & Digital Engineering";
  const bg = "/case/case1.webp";

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
              Cloud, Data Engineering & Application Services
            </h1>
          </SlideUp>

          <SlideUp>
            <p className="text-black font-light leading-relaxed max-w-3xl">
              A detailed look into how conzura enabled rapid cloud and data engineering scaling
              for a global enterprise modernizing on AWS, Azure, and Google Cloud.
            </p>
          </SlideUp>

          {/* Feature Block 1 — Gradient */}
          <SlideUp>
            <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700 shadow-xl">
              <h2 className="text-2xl text-red-500 font-extralight mb-4">
                Problem Statement
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed font-light">
                The client needed to rapidly expand its cloud and data engineering
                capabilities to support multiple enterprise transformation initiatives.
                Key challenges included limited access to experts in ETL, orchestration,
                data pipelines, and modern cloud-native engineering.
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
                conzura sourced and onboarded cloud-native data engineering talent across India.
                A competency-driven evaluation framework ensured selection of engineers with
                multi-cloud expertise across AWS, Azure, and GCP.
                Teams were deployed in phases, ensuring operational stability,
                accelerated delivery, and consistent engineering governance.
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
                The engagement enabled rapid scaling of cloud programs, reduced onboarding
                cycles, improved engineering throughput, and accelerated the client's digital
                transformation roadmap across data, analytics, and application modernization.
              </p>
            </div>
          </SlideUp>

          {/* Use Cases Grid */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <SlideUp>
              <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
                <h4 className="font-extralight mb-2">Key Engineering Contributions</h4>
                <ul className="text-sm font-light text-gray-700 space-y-2">
                  <li>• Cloud-native ETL & data pipeline development</li>
                  <li>• Multi-cloud orchestration & workflow engineering</li>
                  <li>• Real-time data streaming & analytics</li>
                  <li>• Modern application development</li>
                  <li>• CI/CD and DevOps automation</li>
                </ul>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
                <h4 className="font-extralight mb-2">Ideal For</h4>
                <ul className="text-sm font-light text-gray-700 space-y-2">
                  <li>• Enterprises scaling cloud engineering teams fast</li>
                  <li>• Organizations modernizing legacy workloads</li>
                  <li>• Companies running multi-cloud transformation programs</li>
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
