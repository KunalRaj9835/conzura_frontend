"use client";

import Footer from "@/components/Footer";
import SlideUp from "@/components/SlideUp";

export default function CaseStudyPage() {
  const title = "Aerospace & Defence";
  const bg = "/case/plane.jpeg";

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
              Avionics, Embedded Systems & V&V
            </h1>
          </SlideUp>

          <SlideUp>
            <p className="text-black font-light leading-relaxed max-w-3xl">
              An overview of how conzura supported aerospace engineering programs
              requiring expertise in DO-178C, DO-254, embedded avionics,
              safety-critical software, and verification & validation processes.
            </p>
          </SlideUp>

          {/* Feature Block 1 — Gradient */}
          <SlideUp>
            <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700 shadow-xl">
              <h2 className="text-2xl text-red-500 font-extralight mb-4">
                Problem Statement
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed font-light">
                The aerospace customer needed engineers with hands-on expertise in
                DO-178C, DO-254, embedded avionics, real-time operating systems,
                and V&V workflows. Working under strict global certification
                frameworks demanded precision, compliance, and deep domain
                knowledge across avionics subsystems.
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
                conzura engaged avionics specialists with proven experience in
                safety-critical software and hardware certification. Teams
                supported DO-178C lifecycle activities, performed requirement
                validation, executed test cases under RTOS environments, and
                assisted with certification documentation. Engineering throughput
                improved while ensuring strict adherence to aerospace regulatory
                standards.
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
                conzura enabled the customer to accelerate avionics software
                development, strengthen verification cycles, and consistently
                meet certification milestones. The engagement improved compliance
                accuracy, enhanced system reliability, and reduced delays across
                aerospace engineering programs.
              </p>
            </div>
          </SlideUp>

          {/* Use Cases Grid */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <SlideUp>
              <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
                <h4 className="font-extralight mb-2">Key Engineering Contributions</h4>
                <ul className="text-sm font-light text-gray-700 space-y-2">
                  <li>• DO-178C and DO-254 compliance engineering</li>
                  <li>• Embedded avionics software development</li>
                  <li>• V&V for safety-critical systems</li>
                  <li>• RTOS development & testing</li>
                  <li>• Certification documentation & audits</li>
                </ul>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
                <h4 className="font-extralight mb-2">Ideal For</h4>
                <ul className="text-sm font-light text-gray-700 space-y-2">
                  <li>• Aerospace OEMs & Tier-1 suppliers</li>
                  <li>• Defense system integrators</li>
                  <li>• Companies building safety-critical embedded platforms</li>
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
