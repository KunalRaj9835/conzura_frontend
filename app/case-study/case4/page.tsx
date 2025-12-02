"use client";

import Footer from "@/components/Footer";
import SlideUp from "@/components/SlideUp";

export default function CaseStudyPage() {
  const title = "Industrial Automation";
  const bg = "/case/case4.jpg";

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
              IoT, Robotics & Control Systems
            </h1>
          </SlideUp>

          <SlideUp>
            <p className="text-black font-light leading-relaxed max-w-3xl">
              A summary of how conzura enabled an industrial automation customer to
              scale IoT-driven control systems, robotics engineering, PLC development,
              and real-time embedded platforms for next-generation manufacturing.
            </p>
          </SlideUp>

          {/* Feature Block 1 — Gradient */}
          <SlideUp>
            <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700 shadow-xl">
              <h2 className="text-2xl text-red-500 font-extralight mb-4">
                Problem Statement
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed font-light">
                The customer required multi-disciplinary engineers capable of designing
                IoT-based control systems, robotics applications, PLC and SCADA
                programming, real-time embedded architectures, and industrial
                communication protocols. Sourcing specialists with deep technical
                expertise across automation frameworks was a challenge.
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
                conzura assembled a diverse engineering team skilled in industrial IoT,
                embedded C/C++, RTOS, robotics platforms, PLC/SCADA systems, and
                communication protocols such as CAN, SPI, UART, and Modbus. Engineers
                supported full-cycle automation development—from system architecture to
                integration and testing—enabling improved efficiency and readiness for
                next-gen manufacturing.
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
                The engagement improved automation reliability, accelerated delivery of
                robotics and control systems, and strengthened the customer’s ability to
                deploy smart manufacturing solutions. Engineering cycles became faster,
                more predictable, and fully aligned with Industry 4.0 transformation
                goals.
              </p>
            </div>
          </SlideUp>

          {/* Use Cases Grid */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <SlideUp>
              <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
                <h4 className="font-extralight mb-2">Key Engineering Contributions</h4>
                <ul className="text-sm font-light text-gray-700 space-y-2">
                  <li>• Industrial IoT architecture development</li>
                  <li>• Robotics control & automation engineering</li>
                  <li>• PLC, SCADA & HMI programming</li>
                  <li>• Embedded C/C++ & RTOS engineering</li>
                  <li>• Protocol development: CAN, SPI, UART, Modbus</li>
                </ul>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
                <h4 className="font-extralight mb-2">Ideal For</h4>
                <ul className="text-sm font-light text-gray-700 space-y-2">
                  <li>• Industrial automation OEMs</li>
                  <li>• Robotics & smart manufacturing companies</li>
                  <li>• Enterprises adopting Industry 4.0 solutions</li>
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
