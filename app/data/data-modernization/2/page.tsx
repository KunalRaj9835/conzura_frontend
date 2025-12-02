"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Data Platform Modernization";
  const bg = "/pic/Data platform modernization1.png";

  const introHeading =
    "Modernize your data platform to unlock speed, scale, and AI readiness";

  const introPara =
    "Legacy data systems slow innovation and restrict your ability to deliver insights at scale. conzura modernizes your data platform with cloud-native architectures, automated orchestration, and next-generation integration frameworks. We help you migrate, optimize, and operationalize platforms that support real-time intelligence and enterprise-wide AI.";

  const midTitle =
    "Transform outdated systems into agile, high-performance platforms";

  const midPara =
    "Through automated code conversion, governed lakehouse models, event-driven pipelines, and multi-cloud flexibility, conzura eliminates technical debt and future-proofs your environment. Your teams gain a reliable, modern foundation that accelerates analytics, reduces cost, and supports continuous innovation.";

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
                Build a resilient, scalable, cloud-native data platform.
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
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 auto-rows-fr">
  <SideBySideCard
    title="Legacy platform assessment"
    text="Evaluate technical debt, performance gaps, and modernization opportunities to determine the fastest migration path."
    image="/pic/Legacy platform assessment1.png"
    color="#ffffff"
  />

  <SideBySideCard
    title="Cloud migration & automation"
    text="Automate data movement, schema conversion, and orchestration across AWS, Azure, GCP, Databricks, and Snowflake."
    image="/pic/Cloud migration & automation.png"
    color="#f9f9f9"
  />

  <SideBySideCard
    title="Lakehouse architecture"
    text="Implement governed data lakehouses for unified analytics, AI workloads, and near real-time processing."
    image="/pic/Lakehouse architecture.png"
    color="#eaeaea"
  />

  <SideBySideCard
    title="Platform performance optimization"
    text="Optimize compute, storage, pipelines, and workloads to reduce cost and scale seamlessly with business needs."
    image="/pic/Platform performance optimization.png"
    color="#d6d7d9"
  />
</div>


    

      <Footer />
    </div>
  );
}
