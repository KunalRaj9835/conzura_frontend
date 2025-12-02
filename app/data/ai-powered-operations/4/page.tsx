"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Risk and Compliance";
  const bg = "/pic/Risk and compliance.png";

  const introHeading =
    "Strengthen resilience with AI-driven risk management and compliance frameworks";

  const introPara =
    "Organisations face increasing regulatory demands and operational risks. conzura helps you modernise risk and compliance by integrating analytics, AI, automation, and governance. We enable real-time visibility, improve control effectiveness, and ensure your organisation operates confidently across global regulatory environments.";

  const midTitle = "Proactive, predictive, and intelligent risk management";

  const midPara =
    "With automated surveillance, risk scoring models, audit-ready documentation, and intelligent compliance monitoring, conzura helps organisations reduce exposure and strengthen resilience. Our frameworks ensure accuracy, transparency, and trust at every level.";

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
                Build compliance and risk resilience powered by intelligence.
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
  title="Risk analytics & modelling"
  text="Prediction-driven risk modelling that strengthens early detection and preventive action."
  image="/pic/Risk analytics & modelling.png"
  color="#ffffff"
/>

<SideBySideCard
  title="Compliance automation"
  text="Automate monitoring, documentation, and reporting to reduce manual work and errors."
  image="/pic/Compliance automation1.png"
  color="#f9f9f9"
/>

<SideBySideCard
  title="Regulatory intelligence"
  text="Stay ahead of evolving global regulations with AI-assisted insights and change tracking."
  image="/pic/Regulatory intelligence.png"
  color="#eaeaea"
/>

<SideBySideCard
  title="Control & audit management"
  text="Strengthen internal controls with real-time auditing, automated checks, and transparent dashboards."
  image="/pic/Control & audit management.png"
  color="#d6d7d9"
/>

      </div>

      <Footer />
    </div>
  );
}
