"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "AI-Powered Operations";
  const bg = "/pic/AI-Powered Operations.png";

  const introHeading =
    "Lay the foundation for operational excellence – improving outcomes and sustainability";

  const introPara =
    "Establishing a strong data foundation and a clear digital strategy is essential for long-term operational success. But the real transformation happens when that strategy is executed through a customer-centric operating model that elevates efficiency, strengthens consistency, and unlocks sustainable business value. conzura brings deep industry and functional expertise to help you embed intelligence into every layer of your operations—from sharpening back-office precision to elevating customer experiences, optimizing financial processes, and reinforcing regulatory compliance. We ensure that digital capabilities don’t just exist, but work in harmony with your strategic aspirations to deliver operational excellence where milliseconds matter.";

  const midTitle = "Streamlining complex, interconnected operations";

  const midPara =
    "One conzura client operating in the title services industry faced an extremely complex operational model involving thousands of agents and county-level verifications across the U.S. Manual processes, siloed communication, and fragmented workflows drove delays and inconsistency. conzura introduced digital operations solutions that strengthened resilience, unlocked new data-driven revenue streams, and positioned the organization as an innovation leader. This transformation demonstrates how intelligent operations can shift an entire industry forward.";

  return (
    <div>
      {/* -------------------------------------------------- */}
      {/* HERO */}
      {/* -------------------------------------------------- */}
      <div className="relative h-[480px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />

        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <SlideUp>
            <div>
              <h1 className="text-5xl font-extralight">{title}</h1>
              <p className="mt-4 text-gray-700 text-lg max-w-xl font-light">
                Operational intelligence that sharpens workflows and elevates value.
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
      {/* MID SECTION */}
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
      {/* WHAT WE DO */}
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
      {/* CARDS — NO SLIDEUP HERE */}
      {/* -------------------------------------------------- */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">

        <SideBySideCard
  title="Business Operations"
  text="Unify processes and enable real time, data-driven decisioning by redesigning workflows with automation, intelligence, and end-to-end operational visibility."
  image="/pic/Business Operations.png"
  color="#ffffff"
  href="/data/ai-powered-operations/1"
/>

<SideBySideCard
  title="Customer operations"
  text="Respond to shifting customer expectations with AI-enhanced insights that deliver faster, context-aware, and deeply personalized experiences across every touchpoint."
  image="/pic/Customer operations.png"
  color="#f9f9f9"
  href="/data/ai-powered-operations/2"
/>

<SideBySideCard
  title="Finance and accounting"
  text="Enhance financial performance by digitizing core activities, streamlining approvals, and applying intelligent automation for greater accuracy, speed, and control."
  image="/pic/Finance and accounting.png"
  color="#eaeaea"
  href="/data/ai-powered-operations/3"
/>

<SideBySideCard
  title="Risk and compliance"
  text="Strengthen enterprise protection by leveraging data and AI to anticipate threats, minimize gaps, and simplify compliance across evolving regulatory environments."
  image="/pic/Risk and compliance.png"
  color="#d6d7d9"
  href="/data/ai-powered-operations/4"
/>

      </div>

      <Footer />
    </div>
  );
}
