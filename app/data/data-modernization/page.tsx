"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Data Modernization";
  const bg = "/pic/Data Modernization1.png";

  const introHeading =
    "Outdated data systems stall growth — conzura builds for the future";

  const introPara =
    "Legacy systems, fragmented data sources, and slow pipelines directly limit your organisation’s ability to innovate. As AI adoption accelerates, outdated architectures create bottlenecks that delay insights and inflate operational costs. conzura modernises your ecosystem end-to-end—transforming scattered data into a trusted, governed, and highly scalable enterprise asset. With automation-first design, enriched metadata, and cloud-native flexibility, your data foundation evolves from reactive maintenance to proactive innovation.";

  const midTitle = "A future-ready platform for AI, speed, and scale";

  const midPara =
    "Modern businesses must deliver insights at the pace of customer expectation. Teams need immediate access to accurate data to drive decisions, power AI models, and accelerate digital initiatives. conzura enables this with robust cloud-native accelerators, pre-built frameworks, and consistent operational governance. We automate critical data operations, identify issues early, and ensure pipeline reliability across the ecosystem—helping you ship new models faster, reduce downstream failures, and maintain a continuously high-performing data platform.";

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
                Transform legacy architectures into scalable, AI-ready data ecosystems.
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
            title="Enterprise data strategy"
            text="Evaluate current data capabilities and build a strategic blueprint that aligns the business priorities with governance, AI adoption, and scalable future-ready platforms."
            image="/pic/Enterprise data strategy.png"
            color="#ffffff"
            href="/data/data-modernization/1"
          />

          <SideBySideCard
            title="Data platform modernization"
           text = "Transform legacy environments and modernize cloud ecosystems through automated migration, lakehouse architectures, and intelligent orchestration across AWS, Azure, GCP, Databricks, and Snowflake."
            image="/pic/Data platform modernization1.png"
            color="#f9f9f9"
            href="/data/data-modernization/2"
          />

          <SideBySideCard
            title="Data management"
            text="Establish robust governance, quality, security, and privacy processes supported by automated controls creating trusted, high performance data foundations for AI and analytics."
            image="/pic/Data management.png"
            color="#eaeaea"
            href="/data/data-modernization/3"
          />

          <SideBySideCard
            title="Managed services and data operations"
            text="Enable seamless data operations with continuous monitoring, optimization, and lifecycle management delivering reliable pipelines that let your teams stay focused on innovation."
            image="/pic/Managed services and data operations.png"
            color="#d6d7d9"
            href="/data/data-modernization/4"
          />

        </div>


      <Footer />
    </div>
  );
}
