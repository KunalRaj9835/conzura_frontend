"use client";

import Footer from "@/components/Footer";
import SlideUp from "@/components/SlideUp";

export default function CaseStudyPage() {
  const title = "Automotive Engineering";
  const bg = "/case/c.jpeg";

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
              Embedded Systems & Functional Safety
            </h1>
          </SlideUp>

          <SlideUp>
            <p className="text-black font-light leading-relaxed max-w-3xl">
              A deep-dive into how conzura enabled an automotive OEM to scale
              engineering for AUTOSAR, ADAS, ECU validation, and ISO 26262
              safety programs.
            </p>
          </SlideUp>

          {/* Feature Block 1 — Gradient */}
          <SlideUp>
            <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700 shadow-xl">
              <h2 className="text-2xl text-red-500 font-extralight mb-4">
                Problem Statement
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed font-light">
                The OEM required engineers with niche expertise in AUTOSAR BSW,
                ADAS systems, ECU validation, and functional safety engineering.
                Meeting strict compliance, testing, and delivery timelines
                required rapid onboarding of specialists who could work on
                advanced vehicle electronics and next-gen automotive platforms.
              </p>
            </div>
          </SlideUp>

          {/* Feature Block 2 — White Card */}
          <SlideUp>
            <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h3 className="text-xl font-extralight mb-3">
                conzura's Approach & Solution
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed font-light">
                conzura built a targeted talent pipeline covering AUTOSAR BSW,
                ADAS algorithm testing, HIL/SIL validation, ECU diagnostics, and
                ISO 26262 expertise. Engineers were evaluated via
                competency-based assessments and real-world project benchmarks.
                The deployment enabled the OEM to accelerate development of
                safety-critical systems and next-gen automotive architectures.
              </p>
            </div>
          </SlideUp>

          {/* Feature Block 3 — White Card */}
          <SlideUp>
            <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h3 className="text-xl font-extralight mb-3">
                Business Outcomes
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed font-light">
                The collaboration improved the OEM’s ability to deliver advanced
                ADAS, functional safety, and embedded systems programs.
                Time-to-hire reduced significantly, validation cycles improved,
                and engineering throughput increased across vehicle electronics
                and software domains.
              </p>
            </div>
          </SlideUp>

          {/* Use Cases Grid */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <SlideUp>
              <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
                <h4 className="font-extralight mb-2">Key Engineering Contributions</h4>
                <ul className="text-sm font-light text-gray-700 space-y-2">
                  <li>• AUTOSAR BSW & MCAL engineering</li>
                  <li>• ADAS validation & testing</li>
                  <li>• ECU testing, diagnostics & integration</li>
                  <li>• ISO 26262 functional safety engineering</li>
                  <li>• HIL/SIL test automation</li>
                </ul>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
                <h4 className="font-extralight mb-2">Ideal For</h4>
                <ul className="text-sm font-light text-gray-700 space-y-2">
                  <li>• OEMs building next-gen vehicle platforms</li>
                  <li>• Tier-1 suppliers scaling embedded engineering</li>
                  <li>• Mobility companies focused on ADAS & safety</li>
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
