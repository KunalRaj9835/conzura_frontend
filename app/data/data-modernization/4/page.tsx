"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Managed Services & Data Operations";
  const bg = "/pic/Managed services and data operations.png";

  const introHeading =
    "Ensure stability, scalability, and continuous intelligence across your data ecosystem";

  const introPara =
    "Modern organisations require uninterrupted, high-performing, and compliant data operations. conzura provides fully managed services that monitor, maintain, and optimise your data ecosystem—from pipelines to cloud environments to production AI workloads. With proactive governance, 24/7 visibility, and automation-led operations, your teams stay focused on innovation instead of operational burden.";

  const midTitle =
    "Operational excellence powered by automation and intelligence";

  const midPara =
    "conzura's managed services integrate real-time monitoring, automated incident handling, workload optimisation, and predictive analytics. This ensures your pipelines stay reliable, cost-efficient, and aligned with fast-evolving business requirements. You gain a resilient and future-ready operational environment.";

  return (
    <div>
      {/* -------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------- */}
      <div className="relative h-[480px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />

        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <SlideUp>
            <div>
              <h1 className="text-5xl font-extralight">{title}</h1>
              <p className="mt-4 text-gray-700 text-lg max-w-xl font-light">
                Maintain continuous operational intelligence with zero disruption.
              </p>
            </div>
          </SlideUp>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* INTRO */}
      {/* -------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <SlideUp>
          <h2 className="text-3xl font-light text-red-600 leading-snug">
            {introHeading}
          </h2>
        </SlideUp>

        <SlideUp>
          <div className="w-16 h-1 bg-red-600 mt-4"></div>
        </SlideUp>

        <SlideUp>
          <p className="mt-8 text-gray-700 leading-relaxed font-light text-justify">
            {introPara}
          </p>
        </SlideUp>
      </div>

      {/* -------------------------------------------------- */}
      {/* MID BLOCK */}
      {/* -------------------------------------------------- */}
      <div className="py-20" style={{ backgroundColor: "#e6edf4" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SlideUp>
            <h3 className="text-3xl font-light leading-snug text-red-600">
              {midTitle}
            </h3>
          </SlideUp>

          <SlideUp>
            <div className="w-16 h-1 bg-red-600 mt-4"></div>
          </SlideUp>

          <SlideUp>
            <p className="mt-8 text-gray-700 leading-relaxed font-light text-justify">
              {midPara}
            </p>
          </SlideUp>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* WHAT WE DO TITLE */}
      {/* -------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <SlideUp>
          <h3 className="text-3xl font-light text-red-600 leading-snug">
            What we do
          </h3>
        </SlideUp>

        <SlideUp>
          <div className="w-16 h-[3px] bg-red-500 mt-3"></div>
        </SlideUp>
      </div>

      {/* -------------------------------------------------- */}
      {/* CARD GRID */}
      {/* -------------------------------------------------- */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          <SideBySideCard
  title="Pipeline & workload monitoring"
  text="Monitor ingestion, processing, and orchestration in real time to ensure seamless data flow."
  image="/pic/Pipeline & workload monitoring.png"
  color="#ffffff"
/>

<SideBySideCard
  title="Incident automation"
  text="Resolve issues faster with automated alerting, triage logic, and predictive maintenance."
  image="/pic/Incident automation.png"
  color="#f9f9f9"
/>

<SideBySideCard
  title="Performance & cost optimisation"
  text="Continuously optimize compute, storage, and workload distribution to reduce cost and improve efficiency."
  image="/pic/Performance & cost optimisation1.png"
  color="#eaeaea"
/>

<SideBySideCard
  title="Operational governance"
  text="Enforce compliance, standards, access controls, and audit readiness across your entire data ecosystem."
  image="/pic/Operational governance1.png"
  color="#d6d7d9"
/>

        </div>


      <Footer />
    </div>
  );
}
