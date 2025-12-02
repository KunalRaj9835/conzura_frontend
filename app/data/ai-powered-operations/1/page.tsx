"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Business Operations";
  const bg = "/pic/Business Operations.png";

  const introHeading =
    "Transform your operations into a high-performing, intelligence-driven engine";

  const introPara =
    "Business operations determine the speed, precision, and resilience of your organisation. conzura helps you modernise workflows by integrating data, AI, automation, and customer-centric design. We streamline processes, break down silos, and enable real-time visibility so your teams can operate with greater accuracy and efficiency.";

  const midTitle = "Smarter, faster, and more agile business operations";

  const midPara =
    "conzura builds intelligent workflows that reduce manual effort, anticipate operational bottlenecks, and enhance collaboration. From workforce optimisation to process re-engineering and automation-first design, we enable continuous improvement across the entire value chain.";

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
                Unlock operational excellence through intelligence and automation.
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
      {/* CARDS — NO SLIDEUP */}
      {/* -------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
<SideBySideCard
  title="Workflow optimisation"
  text="Redesign operational processes to eliminate inefficiencies and improve cycle times."
  image="/pic/Workflow optimisation.png"
  color="#ffffff"
/>

<SideBySideCard
  title="Automation & intelligent routing"
  text="Use AI and automation to simplify manual tasks and prioritise work intelligently."
  image="/pic/Automation & intelligent routing1.png"
  color="#f9f9f9"
/>

<SideBySideCard
  title="Operational analytics"
  text="Capture real time performance insights to strengthen decision-making and forecasting."
  image="/pic/Operational analytics1.png"
  color="#eaeaea"
/>

<SideBySideCard
  title="Performance management"
  text="Enhance accountability and productivity through data-driven performance frameworks."
  image="/pic/Performance management1.png"
  color="#d6d7d9"
/>

      </div>

      <Footer />
    </div>
  );
}
