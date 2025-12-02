"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Data Management";
  const bg = "/pic/Data management.png";

  const introHeading = "Build a trusted, secure, high-quality data ecosystem";

  const introPara =
    "Enterprises depend on accurate, compliant, and accessible data to operate effectively. conzura helps modernise your data management with automated governance, privacy controls, lineage intelligence, and AI-driven quality monitoring. We turn fragmented datasets into reliable assets that power operations, analytics, and enterprise AI.";

  const midTitle = "Stronger governance, higher quality, deeper trust";

  const midPara =
    "conzura’s automated frameworks enforce quality rules, security protocols, metadata standards, and compliance requirements across your entire ecosystem. With end-to-end visibility and proactive monitoring, your teams always work with accurate, complete, and trustworthy data.";

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
                Build governance and quality into your data from day one.
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
  title="Automated governance"
  text="Apply enterprise wide rules, access policies, and compliance controls with automation."
  image="/pic/Automated governance1.png"
  color="#ffffff"
/>

<SideBySideCard
  title="Metadata & lineage visibility"
  text="Track every transformation, dataset, and dependency with AI-enhanced lineage mapping."
  image="/pic/Metadata & lineage visibility.png"
  color="#f9f9f9"
/>

<SideBySideCard
  title="Security & privacy frameworks"
  text="Protect your data with encryption, masking, and regulatory-ready privacy operations."
  image="/pic/Security & privacy frameworks1.png"
  color="#eaeaea"
/>

<SideBySideCard
  title="AI-driven quality monitoring"
  text="Detect anomalies, score data quality, and automate remediation with intelligent validation."
  image="/pic/AI-driven quality monitoring.png"
  color="#d6d7d9"
/>

        </div>

      <Footer />
    </div>
  );
}
