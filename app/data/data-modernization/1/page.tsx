"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Enterprise Data Strategy";
  const bg = "/pic/Enterprise data strategy.png";

  const introHeading =
    "Build a strategic data foundation that accelerates transformation";

  const introPara =
    "Organisations often collect vast amounts of data but struggle to convert it into meaningful, measurable value. conzura helps you design a data strategy that aligns governance, architecture, business priorities, and AI readiness. The result is a long-term roadmap that enables scalability, reduces operational friction, and supports smarter decision-making across the enterprise.";

  const midTitle =
    "A unified roadmap for clarity, governance, and AI-enabled growth";

  const midPara =
    "conzura partners with organisations to assess maturity, identify capability gaps, and define the frameworks needed to enable enterprise-wide intelligence. When you establish a clear data operating model—supported by governance, ownership, and quality management—your teams gain the confidence to innovate at speed.";

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
                Align business goals, governance, and technology with a unified data vision.
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
       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
  <SideBySideCard
    title="Data maturity assessment"
    text="Evaluate current data capabilities, identify gaps, and determine readiness for large scale transformation and AI adoption."
    image="/pic/Data maturity assessment.png"
    color="#ffffff"
  />

  <SideBySideCard
    title="Data operating model design"
    text="Define ownership, roles, workflows, and governance structures that create accountability and efficiency across the organisation."
    image="/pic/Data operating model design.png"
    color="#f9f9f9"
  />

  <SideBySideCard
    title="Enterprise data architecture"
    text="Blueprint future ready architecture including data lakes, warehouses, lakehouses, and integration frameworks."
    image="/pic/Enterprise data architecture.png"
    color="#eaeaea"
  />

  <SideBySideCard
    title="Roadmap and execution planning"
    text="Convert strategy into actionable phases, enabling scalable implementation with minimal operational disruption."
    image="/pic/Roadmap and execution planning.png"
    color="#d6d7d9"
  />
</div>



      <Footer />
    </div>
  );
}
